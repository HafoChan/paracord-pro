import { MapPin, Navigation } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { LOCATION_MAP, COMPANY_ADDRESS } from "@/lib/content";

export function LocationMap() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_ADDRESS.googleMapsQuery)}`;
  
  // Google Maps Embed URL - free, no API key required
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.844!2d106.73!3d10.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1svi!2svn!4v1633024800000!5m2!1svi!2svn&q=${encodeURIComponent(COMPANY_ADDRESS.googleMapsQuery)}`;

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
            {/* Google Maps Embed */}
            <div className="lg:col-span-2">
              <Card className="h-[400px] overflow-hidden relative">
                <iframe
                  src={embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Paracord Pro Location Map"
                  className="rounded-lg"
                />
                {/* Fallback button for external map */}
                <div className="absolute bottom-4 right-4 z-10">
                  <Button variant="secondary" size="sm" asChild>
                    <a 
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center shadow-lg"
                    >
                      <Navigation className="h-4 w-4 mr-1" />
                      Mở bản đồ lớn
                    </a>
                  </Button>
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
                      <div className="font-medium text-slate-900 mb-1">{LOCATION_MAP.addresses.office.title}</div>
                      <div className="text-slate-600">{COMPANY_ADDRESS.office}</div>
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

