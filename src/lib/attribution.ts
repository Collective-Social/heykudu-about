export interface LeadAttribution {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  search_query?: string;
  gclid?: string;
  fbclid?: string;
  network?: string;
  matchtype?: string;
  device?: string;
  landing_page?: string;
  landing_path?: string;
  referrer?: string;
  landing_timestamp?: string;
  current_page?: string;
}

const STORAGE_KEY_SESSION = "heykudu_lead_attribution_session";
const STORAGE_KEY_FIRST_TOUCH = "heykudu_lead_attribution_first_touch";

/**
 * Parses UTM, search, and Google Ads ValueTrack query parameters from a URL or current window.
 */
export function captureAttribution(): LeadAttribution | null {
  if (typeof window === "undefined") return null;

  try {
    const url = new URL(window.location.href);
    const params = url.searchParams;

    const source = params.get("utm_source") || "";
    const medium = params.get("utm_medium") || "";
    const campaign = params.get("utm_campaign") || "";
    const term = params.get("utm_term") || params.get("keyword") || "";
    const content = params.get("utm_content") || params.get("creative") || "";
    const query = params.get("q") || params.get("query") || "";
    const gclid = params.get("gclid") || "";
    const fbclid = params.get("fbclid") || "";
    const network = params.get("network") || "";
    const matchtype = params.get("matchtype") || "";
    const device = params.get("device") || "";

    const hasNewAttribution = Boolean(
      source || medium || campaign || term || content || query || gclid || fbclid
    );

    const currentReferrer = document.referrer || "";

    // Read existing session attribution
    let sessionData: LeadAttribution | null = null;
    const rawSession = sessionStorage.getItem(STORAGE_KEY_SESSION);
    if (rawSession) {
      try {
        sessionData = JSON.parse(rawSession);
      } catch {
        sessionData = null;
      }
    }

    // Determine initial landing page
    const landingPage = sessionData?.landing_page || window.location.href;
    const landingPath = sessionData?.landing_path || window.location.pathname;
    const initialReferrer = sessionData?.referrer || currentReferrer;
    const initialTimestamp = sessionData?.landing_timestamp || new Date().toISOString();

    const mergedAttribution: LeadAttribution = {
      utm_source: source || sessionData?.utm_source || (gclid ? "google_ads" : currentReferrer ? "organic_or_referral" : "direct"),
      utm_medium: medium || sessionData?.utm_medium || (gclid ? "cpc" : "web"),
      utm_campaign: campaign || sessionData?.utm_campaign || "none",
      utm_term: term || sessionData?.utm_term || (query ? query : "none"),
      utm_content: content || sessionData?.utm_content || "none",
      search_query: query || sessionData?.search_query || (term ? term : ""),
      gclid: gclid || sessionData?.gclid || "",
      fbclid: fbclid || sessionData?.fbclid || "",
      network: network || sessionData?.network || (gclid ? "google_search" : "web"),
      matchtype: matchtype || sessionData?.matchtype || "",
      device: device || sessionData?.device || "",
      landing_page: landingPage,
      landing_path: landingPath,
      referrer: initialReferrer,
      landing_timestamp: initialTimestamp,
      current_page: window.location.href,
    };

    // Store in sessionStorage (session lifetime)
    sessionStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(mergedAttribution));

    // Store in localStorage if first touch not yet saved
    if (!localStorage.getItem(STORAGE_KEY_FIRST_TOUCH) || hasNewAttribution) {
      localStorage.setItem(STORAGE_KEY_FIRST_TOUCH, JSON.stringify(mergedAttribution));
    }

    return mergedAttribution;
  } catch (err) {
    console.warn("[Attribution] Error capturing attribution parameters:", err);
    return null;
  }
}

/**
 * Retrieves the most comprehensive attribution record available for form submission.
 */
export function getAttributionData(): LeadAttribution {
  if (typeof window === "undefined") {
    return {
      utm_source: "unknown",
      utm_medium: "unknown",
      landing_page: "unknown",
    };
  }

  try {
    // 1. Check current session storage
    const rawSession = sessionStorage.getItem(STORAGE_KEY_SESSION);
    if (rawSession) {
      const parsed = JSON.parse(rawSession);
      return {
        ...parsed,
        current_page: window.location.href,
      };
    }

    // 2. Fall back to first touch in localStorage
    const rawLocal = localStorage.getItem(STORAGE_KEY_FIRST_TOUCH);
    if (rawLocal) {
      const parsed = JSON.parse(rawLocal);
      return {
        ...parsed,
        current_page: window.location.href,
      };
    }

    // 3. Fallback: capture on the fly from current URL
    const fresh = captureAttribution();
    if (fresh) {
      return fresh;
    }
  } catch (err) {
    console.warn("[Attribution] Error retrieving stored attribution:", err);
  }

  // Baseline fallback
  return {
    utm_source: document.referrer ? "referral" : "direct",
    utm_medium: "web",
    landing_page: window.location.href,
    current_page: window.location.href,
    referrer: document.referrer || "",
    landing_timestamp: new Date().toISOString(),
  };
}
