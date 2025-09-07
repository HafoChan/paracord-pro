import { ABOUT_HERO } from "@/lib/content";

export function AboutHero() {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {ABOUT_HERO.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8">
            {ABOUT_HERO.subtitle}
          </p>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            {ABOUT_HERO.description}
          </p>
        </div>
      </div>
    </section>
  );
}

