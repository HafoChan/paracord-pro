import { Card, CardContent } from "@/components/ui/Card";
import { Building2, Search, Beaker, TrendingUp } from "lucide-react";
import { TEAM_SECTION, TEAM_STATS, DEPARTMENTS } from "@/lib/content";

// Icon mapping for departments
const departmentIcons = {
  "Sản xuất": Building2,
  "Kiểm soát chất lượng": Search,
  "Nghiên cứu & Phát triển": Beaker,
  "Kinh doanh & Marketing": TrendingUp
};

export function TeamSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {TEAM_SECTION.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {TEAM_SECTION.subtitle}
          </p>
        </div>

        {/* Team stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 px-16">
          {TEAM_STATS.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {stat.number}
                </div>
                <div className="font-semibold text-slate-700 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-slate-500">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Departments */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
            {TEAM_SECTION.departments.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-16">
            {DEPARTMENTS.map((dept, index) => {
              const IconComponent = departmentIcons[dept.name as keyof typeof departmentIcons];
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-100 rounded-lg flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-slate-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg text-slate-900 mb-2">
                          {dept.name}
                        </h4>
                        <p className="text-slate-600">
                          {dept.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Company culture */}
        <div className="mt-16 text-center">
          <Card className="bg-slate-50 border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {TEAM_SECTION.culture.title}
              </h3>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                {TEAM_SECTION.culture.description}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

