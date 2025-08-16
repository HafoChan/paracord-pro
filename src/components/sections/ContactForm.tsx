"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <Card>
        <CardContent className="p-12 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Cảm ơn bạn đã liên hệ!
          </h3>
          <p className="text-slate-600 mb-6">
            Chúng tôi đã nhận được tin nhắn của bạn và sẽ phản hồi trong vòng 30 phút 
            trong giờ làm việc. Để được hỗ trợ nhanh hơn, vui lòng gọi hotline.
          </p>
          <Button asChild>
            <a href="tel:0123456789">
              Gọi ngay: 0123456789
            </a>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Gửi tin nhắn cho chúng tôi</CardTitle>
        <p className="text-slate-600">
          Điền thông tin bên dưới và chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2">
                Họ và tên <span className="text-red-500">*</span>
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Nhập họ và tên của bạn"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="email@example.com"
              />
            </div>
          </div>

          {/* Phone and Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-900 mb-2">
                Số điện thoại <span className="text-red-500">*</span>
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="0123456789"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-slate-900 mb-2">
                Công ty
              </label>
              <Input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Tên công ty (nếu có)"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-2">
              Nội dung tin nhắn <span className="text-red-500">*</span>
            </label>
            <Textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Vui lòng mô tả chi tiết nhu cầu của bạn: loại sản phẩm, số lượng, yêu cầu đặc biệt..."
            />
            <p className="text-sm text-slate-500 mt-2">
              Thông tin càng chi tiết, chúng tôi càng có thể tư vấn chính xác hơn.
            </p>
          </div>

          {/* Submit button */}
          <Button 
            type="submit" 
            size="lg" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin h-4 w-4 mr-2 border-2 border-white border-t-transparent rounded-full"></div>
                Đang gửi...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Gửi tin nhắn
              </>
            )}
          </Button>

          {/* Privacy note */}
          <p className="text-xs text-slate-500">
            Bằng việc gửi tin nhắn, bạn đồng ý với việc chúng tôi thu thập và xử lý thông tin 
            để phục vụ mục đích tư vấn và hỗ trợ khách hàng.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}

