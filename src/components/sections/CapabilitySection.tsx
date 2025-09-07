import { Factory, Cog, Truck, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { CAPABILITIES_SECTION, CAPABILITIES, CERTIFICATIONS } from "@/lib/content";

// Icon mapping for capabilities
const capabilityIcons = {
  "Năng lực sản xuất": Factory,
  "Dịch vụ gia công": Cog,
  "Kiểm soát chất lượng": CheckCircle,
  "Giao hàng & Hỗ trợ": Truck
};

export function CapabilitySection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {CAPABILITIES_SECTION.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {CAPABILITIES_SECTION.subtitle}
          </p>
        </div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 px-16">
          {CAPABILITIES.map((capability, index) => {
            const IconComponent = capabilityIcons[capability.title as keyof typeof capabilityIcons];
            return (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-5 w-5 text-slate-600" />
                    </div>
                    <CardTitle className="text-xl">{capability.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {capability.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">
            {CERTIFICATIONS.title}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-16">
            {CERTIFICATIONS.list.map((cert, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-slate-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-slate-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-slate-600">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

