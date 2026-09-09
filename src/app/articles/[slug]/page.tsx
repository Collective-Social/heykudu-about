import { notFound } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import type { Metadata } from "next";

export const revalidate = 60;

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getArticle(slug: string) {
  // Query by content_payload->>'slug' or by id
  const { data: element } = await supabase
    .from("marketing_elements")
    .select("*, marketing_campaigns(*)")
    .eq("channel", "web_article")
    .filter("content_payload->>slug", "eq", slug)
    .single();

  if (element) return element;

  // Fallback to query by ID
  const { data: fallback } = await supabase
    .from("marketing_elements")
    .select("*, marketing_campaigns(*)")
    .eq("channel", "web_article")
    .eq("id", slug)
    .single();

  return fallback;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return { title: "Article Not Found - Heykudu" };

  const payload = article.content_payload || {};
  return {
    title: `${payload.title || article.title} | Heykudu`,
    description: payload.excerpt || "Heykudu Clinical Education Engineering Analysis",
    openGraph: {
      title: payload.title || article.title,
      description: payload.excerpt,
      type: "article",
    },
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  const payload = article.content_payload || {};
  const dateStr = article.published_at
    ? new Date(article.published_at).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "Recently Published";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Back Link */}
        <Link
          href="/articles"
          className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to all articles
        </Link>

        {/* Article Header */}
        <header className="border-b border-slate-800 pb-8 mb-10">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-4">
            <span className="font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              {payload.category || "Field Study"}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {dateStr}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {payload.reading_time_minutes || 5} min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            {payload.title || article.title}
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed font-light mb-6">
            {payload.excerpt}
          </p>

          <div className="flex items-center justify-between pt-6 border-t border-slate-800/60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center font-bold text-emerald-400 text-sm">
                DL
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Duncan Luke</div>
                <div className="text-xs text-slate-400">Founder, Heykudu & Collective Social</div>
              </div>
            </div>
          </div>
        </header>

        {/* Article Body Content */}
        <main className="prose prose-invert prose-emerald max-w-none text-slate-300 leading-relaxed">
          {payload.markdown_content ? (
            <div className="space-y-6 whitespace-pre-wrap font-sans text-base sm:text-lg leading-relaxed">
              {payload.markdown_content}
            </div>
          ) : (
            <p className="text-slate-500">No content available for this deliverable.</p>
          )}
        </main>

        {/* CTA Card */}
        <section className="mt-16 p-8 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            Looking to digitize clinical training at your institution?
          </h3>
          <p className="text-slate-400 text-sm max-w-lg mx-auto mb-6">
            Heykudu is currently live at Wits University GEMP 2. Request an interactive walkthrough of our NFC presence verification and Socratic AI debriefs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all shadow-lg shadow-emerald-500/20"
          >
            Schedule a 15-Minute Deanery Walkthrough
          </Link>
        </section>
      </div>
    </div>
  );
}
