import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { ArrowRight, BookOpen, Clock, Calendar } from "lucide-react";

export const revalidate = 60; // Revalidate every minute

export default async function ArticlesIndexPage() {
  const { data: elements } = await supabase
    .from("marketing_elements")
    .select("*, marketing_campaigns(title)")
    .eq("channel", "web_article")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  const articles = elements || [];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="border-b border-slate-800 pb-10 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            Clinical Education & Engineering Retrospectives
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Heykudu Articles & Field Notes
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            In-depth engineering analyses, medical education case studies, and field notes from live deployments across South African academic teaching hospitals.
          </p>
        </div>

        {/* Articles List */}
        {articles.length === 0 ? (
          <div className="p-12 text-center rounded-2xl border border-slate-800/80 bg-slate-900/40">
            <BookOpen className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-300 mb-2">No Articles Published Yet</h3>
            <p className="text-slate-500 text-sm max-w-md mx-auto">
              Our autonomous editorial agent is currently analyzing clinical rotation data. New field notes and retrospectives will appear here once approved.
            </p>
          </div>
        ) : (
          <div className="grid gap-8">
            {articles.map((item) => {
              const payload = item.content_payload || {};
              const slug = payload.slug || item.id;
              const dateStr = item.published_at
                ? new Date(item.published_at).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })
                : "Recently Published";

              return (
                <article
                  key={item.id}
                  className="group relative flex flex-col p-8 rounded-2xl border border-slate-800/80 bg-slate-900/40 hover:bg-slate-900/80 hover:border-emerald-500/30 transition-all duration-300"
                >
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-3">
                    <span className="font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                      {payload.category || "Field Study"}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {dateStr}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {payload.reading_time_minutes || 5} min read
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-3">
                    <Link href={`/articles/${slug}`} className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {payload.title || item.title}
                    </Link>
                  </h2>

                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">
                    {payload.excerpt || "Click to read the complete analysis and field report."}
                  </p>

                  <div className="mt-auto flex items-center text-sm font-medium text-emerald-400 group-hover:translate-x-1 transition-transform">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
