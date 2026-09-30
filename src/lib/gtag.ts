export const GA_TRACKING_ID = "AW-18484531720";
export const LEAD_CONVERSION_SEND_TO = "AW-18484531720/nBoICPS11YsdEIikju5E";

/**
 * Fires the Google Ads lead form conversion event.
 * Matches:
 * gtag('event', 'conversion', {
 *   'send_to': 'AW-18484531720/nBoICPS11YsdEIikju5E',
 *   'value': 1.0,
 *   'currency': 'ZAR'
 * });
 */
export function trackGoogleLeadConversion(value = 1.0, currency = "ZAR") {
  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
    (window as any).gtag("event", "conversion", {
      send_to: LEAD_CONVERSION_SEND_TO,
      value,
      currency,
    });
  }
}
