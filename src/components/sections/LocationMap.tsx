import { MapPin, Navigation } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function LocationMap() {
  const companyAddress = "Địa chỉ công ty"; // This would be the actual address
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyAddress)}`;

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Vị trí của chúng tôi
            </h2>
            <p className="text-lg text-slate-600">
              Đến thăm showroom và nhà máy sản xuất của chúng tôi để trải nghiệm trực tiếp sản phẩm.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map placeholder */}
            <div className="lg:col-span-2">
              <Card className="h-[400px] overflow-hidden">
                <div className="h-full bg-slate-100 flex items-center justify-center relative">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                    <h3 className="font-semibold text-slate-700 mb-2">Bản đồ Google Maps</h3>
                    <p className="text-slate-500 text-sm mb-4">
                      Tích hợp bản đồ sẽ hiển thị vị trí chính xác của công ty
                    </p>
                    <Button variant="outline" asChild>
                      <a 
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Navigation className="h-4 w-4 mr-2" />
                        Mở trong Google Maps
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
                    Địa chỉ
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="font-medium text-slate-900 mb-1">Showroom & Văn phòng</div>
                      <div className="text-slate-600">Địa chỉ showroom</div>
                    </div>
                    <div>
                      <div className="font-medium text-slate-900 mb-1">Nhà máy sản xuất</div>
                      <div className="text-slate-600">Địa chỉ nhà máy</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Lưu ý khi đến thăm</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-slate-600">
                    <div>• Vui lòng liên hệ trước khi đến để được hỗ trợ tốt nhất</div>
                    <div>• Có thể tham quan nhà máy sản xuất theo lịch hẹn</div>
                    <div>• Mang theo danh thiếp hoặc giấy tờ giới thiệu công ty</div>
                    <div>• Đội ngũ tư vấn sẵn sàng hỗ trợ từ 8:00 - 17:30</div>
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

