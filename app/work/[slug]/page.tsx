import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const { caseStudy, title, techStack, videoUrl } = project;

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-28 md:py-36">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white/80 transition mb-12 text-sm"
        >
          <ArrowLeft size={14} /> Back to work
        </Link>

        <div className="space-y-20">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">{title}</h1>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span key={tech} className="text-sm text-white/40 bg-white/5 px-3 py-1 rounded-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="aspect-video bg-white/5 overflow-hidden rounded-sm">
            <video src={videoUrl} autoPlay loop muted playsInline className="w-full h-full object-cover" />
          </div>

          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-medium text-white/80 mb-3">Overview</h2>
              <p className="text-white/50 leading-relaxed">{caseStudy.overview}</p>
            </div>
            <div>
              <h2 className="text-2xl font-medium text-white/80 mb-3">My Contribution</h2>
              <p className="text-white/50 leading-relaxed">{caseStudy.myContribution}</p>
            </div>
            <div>
              <h2 className="text-2xl font-medium text-white/80 mb-3">Tech Stack</h2>
              <p className="text-white/50 leading-relaxed">{caseStudy.techStackDetailed}</p>
            </div>
            <div>
              <h2 className="text-2xl font-medium text-white/80 mb-3">Challenges & Solutions</h2>
              <p className="text-white/50 leading-relaxed">{caseStudy.challenges}</p>
            </div>
            <div>
              <h2 className="text-2xl font-medium text-white/80 mb-3">Performance Work</h2>
              <p className="text-white/50 leading-relaxed">{caseStudy.performanceWork}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}