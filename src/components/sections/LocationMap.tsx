import { MapPin, Navigation } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { LOCATION_MAP, COMPANY_ADDRESS } from "@/lib/content";

export function LocationMap() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_ADDRESS.googleMapsQuery)}`;

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              {LOCATION_MAP.title}
            </h2>
            <p className="text-lg text-slate-600">
              {LOCATION_MAP.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map placeholder */}
            <div className="lg:col-span-2">
              <Card className="h-[400px] overflow-hidden">
                <div className="h-full bg-slate-100 flex items-center justify-center relative">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                    <h3 className="font-semibold text-slate-700 mb-2">{LOCATION_MAP.mapPlaceholder.title}</h3>
                    <p className="text-slate-500 text-sm mb-4">
                      {LOCATION_MAP.mapPlaceholder.description}
                    </p>
                    <Button variant="outline" asChild>
                      <a 
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Navigation className="h-4 w-4 mr-2" />
                        {LOCATION_MAP.mapPlaceholder.buttonText}
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Directions and info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    {LOCATION_MAP.addresses.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="font-medium text-slate-900 mb-1">{LOCATION_MAP.addresses.showroom.title}</div>
                      <div className="text-slate-600">{COMPANY_ADDRESS.showroom}</div>
                    </div>
                    <div>
                      <div className="font-medium text-slate-900 mb-1">{LOCATION_MAP.addresses.factory.title}</div>
                      <div className="text-slate-600">{COMPANY_ADDRESS.factory}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{LOCATION_MAP.visitNotes.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-slate-600">
                    {LOCATION_MAP.visitNotes.notes.map((note, index) => (
                      <div key={index}>• {note}</div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

