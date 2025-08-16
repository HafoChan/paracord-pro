import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO, SOCIAL_LINKS } from "@/lib/constants";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Contact details */}
      <Card>
        <CardHeader>
          <CardTitle>Thông tin liên hệ</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-slate-500 mt-0.5 flex-shrink-0" />
            <div>
              <div className="font-medium text-slate-900 mb-1">Địa chỉ</div>
              <div className="text-slate-600">{COMPANY_INFO.address}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-slate-500 flex-shrink-0" />
            <div>
              <div className="font-medium text-slate-900 mb-1">Số điện thoại</div>
              <a 
                href={`tel:${COMPANY_INFO.phone}`}
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-slate-500 flex-shrink-0" />
            <div>
              <div className="font-medium text-slate-900 mb-1">Email</div>
              <a 
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-slate-500 mt-0.5 flex-shrink-0" />
            <div>
              <div className="font-medium text-slate-900 mb-1">Giờ làm việc</div>
              <div className="text-slate-600 space-y-1">
                <div>Thứ 2 - Thứ 6: 8:00 - 17:30</div>
                <div>Thứ 7: 8:00 - 12:00</div>
                <div>Chủ nhật: Nghỉ</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick actions */}
      <Card>
        <CardHeader>
          <CardTitle>Liên hệ nhanh</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button className="w-full justify-start" asChild>
            <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              Gọi ngay
            </a>
          </Button>
          
          <Button variant="outline" className="w-full justify-start" asChild>
            <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              Gửi email
            </a>
          </Button>
          
          <Button variant="outline" className="w-full justify-start" asChild>
            <a href={SOCIAL_LINKS.zalo} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <MessageCircle className="h-4 w-4 mr-2" />
              Chat Zalo
            </a>
          </Button>
          
          <Button variant="outline" className="w-full justify-start" asChild>
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Facebook className="h-4 w-4 mr-2" />
              Messenger
            </a>
          </Button>
        </CardContent>
      </Card>

      {/* Business info */}
      <Card>
        <CardHeader>
          <CardTitle>Thông tin doanh nghiệp</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-600">Tên công ty:</span>
            <span className="font-medium">{COMPANY_INFO.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-600">Mã số thuế:</span>
            <span className="font-medium">0123456789</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-600">Ngành nghề:</span>
            <span className="font-medium">Sản xuất dây dù, dây đai thun</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-600">Website:</span>
            <span className="font-medium">{COMPANY_INFO.website}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

