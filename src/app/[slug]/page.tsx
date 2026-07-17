/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from "@supabase/supabase-js";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

// Initialize Supabase Client dynamically, fallback to dummy values for compile safety
const SUPABASE_URL = process.env.SUPABASE_URL || "https://dummy.supabase.co";
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || "dummy-key";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

interface PageComponent {
  id: string;
  type: "hero" | "bento_grid" | "cta_banner" | "feature_highlights" | "text_section";
  title: string;
  content: Record<string, any>;
}

async function getMarketingPage(slug: string) {
  if (SUPABASE_URL === "https://dummy.supabase.co") {
    return null;
  }
  const { data, error } = await supabase
    .from("marketing_pages")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !data) {
    return null;
  }
  return data;
}

export default async function DynamicMarketingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = await getMarketingPage(slug);

  if (!page) {
    // Return gorgeous 404 page styled with Vitalis theme
    return (
      <>
        <Navbar />
        <main className="pt-40 pb-24 text-center min-h-screen flex flex-col justify-center items-center px-margin-mobile">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 animate-pulse">
            <span className="material-symbols-outlined text-[40px]">help_center</span>
          </div>
          <h1 className="text-4xl font-bold text-on-surface mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
            Page Under Construction
          </h1>
          <p className="text-on-surface-variant max-w-md mx-auto mb-8 font-body-md">
            This marketing campaign is currently being synchronized by the Kudu AI engine. Please explore our active sections in the meantime.
          </p>
          <Link
            href="/"
            className="px-6 py-3 bg-primary text-on-primary rounded-full font-bold hover:opacity-90 shadow-md transition-all"
          >
            Go Back Home
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const components: PageComponent[] = page.components || [];

  return (
    <>
      <Navbar />
      <main className="pt-32 bg-surface min-h-screen">
        {components.map((component) => {
          switch (component.type) {
            case "hero":
              return (
                <section key={component.id} className="py-20 hero-gradient">
                  <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter text-center space-y-6">
                    <h1 className="font-bold text-4xl md:text-6xl text-on-surface max-w-4xl mx-auto" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                      {component.title}
                    </h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                      {component.content.subtitle}
                    </p>
                    {component.content.cta_text && (
                      <div className="pt-4">
                        <a
                          href={component.content.cta_link || "https://heykudu.com"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-8 py-4 bg-primary text-on-primary rounded-full font-semibold hover:shadow-lg transition-all"
                        >
                          {component.content.cta_text}
                        </a>
                      </div>
                    )}
                  </div>
                </section>
              );

            case "feature_highlights":
              return (
                <section key={component.id} className="py-16 bg-surface-container-low">
                  <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
                    <h2 className="font-bold text-3xl mb-12 text-center text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                      {component.title}
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                      {Array.isArray(component.content.items) && component.content.items.map((item: any, idx: number) => {
                        return (
                          <div key={idx} className="bg-surface p-8 rounded-3xl border border-outline-variant/30">
                            <span className="material-symbols-outlined text-primary text-[32px] mb-4">
                              {item.icon || "star"}
                            </span>
                            <h4 className="font-bold text-xl mb-2 text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>{item.title}</h4>
                            <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </section>
              );

            case "cta_banner":
              return (
                <section key={component.id} className="py-16">
                  <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
                    <div className="bg-inverse-surface rounded-[40px] p-12 text-center text-inverse-on-surface space-y-6">
                      <h2 className="font-bold text-3xl md:text-4xl" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                        {component.title}
                      </h2>
                      <p className="opacity-80 max-w-xl mx-auto text-body-lg">
                        {component.content.subtitle}
                      </p>
                      <a
                        href={component.content.link || "https://heykudu.com"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-primary text-on-primary px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
                      >
                        {component.content.cta_label || "Get Started"}
                      </a>
                    </div>
                  </div>
                </section>
              );

            default:
              return null;
          }
        })}
      </main>
      <Footer />
    </>
  );
}
export const dynamic = "force-dynamic";
