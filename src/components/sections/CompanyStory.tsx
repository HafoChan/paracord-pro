import { Calendar, Target, Award, Users, Trophy, Handshake, Zap, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { COMPANY_STORY, COMPANY_MILESTONES, CORE_VALUES } from "@/lib/content";

// Icon mapping for milestones
const milestoneIcons = {
  "2014": Calendar,
  "2017": Target,
  "2020": Award,
  "2024": Users
};

// Icon mapping for values
const valueIcons = {
  "Chất lượng": Trophy,
  "Uy tín": Handshake,
  "Chuyên nghiệp": Zap,
  "Sáng tạo": Lightbulb
};

export function CompanyStory() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Company story */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-8">
            {COMPANY_STORY.title}
          </h2>
          <div className="space-y-6 text-lg text-slate-600">
            {COMPANY_STORY.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-12">
            {COMPANY_MILESTONES.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-16">
            {COMPANY_MILESTONES.milestones.map((milestone, index) => {
              const IconComponent = milestoneIcons[milestone.year as keyof typeof milestoneIcons];
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-100 rounded-lg mb-4">
                      <IconComponent className="h-6 w-6 text-slate-600" />
                    </div>
                    <div className="text-2xl font-bold text-slate-900 mb-2">
                      {milestone.year}
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      {milestone.title}
                    </h4>
                    <p className="text-sm text-slate-600">
                      {milestone.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Core values */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-12">
            {CORE_VALUES.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-16">
            {CORE_VALUES.values.map((value, index) => {
              const IconComponent = valueIcons[value.title as keyof typeof valueIcons];
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-100 rounded-lg mb-4">
                      <IconComponent className="h-6 w-6 text-slate-600" />
                    </div>
                    <h4 className="font-semibold text-lg text-slate-900 mb-3">
                      {value.title}
                    </h4>
                    <p className="text-sm text-slate-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

