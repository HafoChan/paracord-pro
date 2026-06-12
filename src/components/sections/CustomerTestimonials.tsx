"use client";

import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: string;
  company: string;
  author: string;
  position: string;
  content: string;
  rating: number;
  logo?: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    company: "Công ty May Mặc Việt Tiến",
    author: "Nguyễn Văn A",
    position: "Giám đốc Sản xuất",
    content: "Chúng tôi đã hợp tác với Minh Tiến được 3 năm. Chất lượng dây dù luôn ổn định, màu sắc đa dạng và đặc biệt là dịch vụ tư vấn rất chuyên nghiệp. Đội ngũ luôn sẵn sàng hỗ trợ khi chúng tôi cần gia công theo yêu cầu đặc biệt.",
    rating: 5
  },
  {
    id: "2",
    company: "Xưởng Balo Túi Xách Hà Nội",
    author: "Trần Thị B",
    position: "Chủ xưởng",
    content: "Dây đai thun của Minh Tiến có độ co giãn tốt, bền chắc và giá cả hợp lý. Giao hàng nhanh, đúng hẹn. Tôi đã giới thiệu cho nhiều đồng nghiệp và họ đều hài lòng. Đây là nhà cung cấp đáng tin cậy!",
    rating: 5
  },
  {
    id: "3",
    company: "Công ty Thể Thao Outdoor Việt Nam",
    author: "Lê Văn C",
    position: "Trưởng phòng Mua hàng",
    content: "Sản phẩm chất lượng cao, đặc biệt là dây dù chống nước và chịu lực tốt. Phù hợp cho các sản phẩm outdoor của chúng tôi. Dịch vụ bấm đầu típ rất chuyên nghiệp, đúng kỹ thuật. Rất hài lòng với sự hợp tác này.",
    rating: 5
  },
  {
    id: "4",
    company: "Xưởng Thủ Công Mỹ Nghệ Sài Gòn",
    author: "Phạm Thị D",
    position: "Chủ xưởng",
    content: "Tôi làm đồ handmade và cần nhiều loại dây màu sắc khác nhau. Minh Tiến có đủ màu, có thể đặt số lượng nhỏ, giá tốt. Nhân viên tư vấn nhiệt tình, giao hàng nhanh. Tôi rất hài lòng và sẽ tiếp tục ủng hộ!",
    rating: 5
  }
];

export function CustomerTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent-50 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-accent-200">
            <Star className="h-4 w-4 fill-current" />
            <span>Khách hàng nói gì về chúng tôi</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Đánh giá từ <span className="text-accent-600">khách hàng</span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Hơn 500+ khách hàng tin tưởng và hài lòng với sản phẩm, dịch vụ của chúng tôi
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative">
            {/* Quote icon */}
            <div className="absolute top-8 left-8 w-16 h-16 bg-accent-50 rounded-2xl flex items-center justify-center border border-accent-200">
              <Quote className="h-8 w-8 text-accent-600" />
            </div>

            {/* Content */}
            <div className="mt-12 space-y-6">
              {/* Rating */}
              <div className="flex gap-1">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed italic">
                &ldquo;{currentTestimonial.content}&rdquo;
              </p>

              {/* Author info */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                <div className="w-14 h-14 bg-accent-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {currentTestimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-lg">
                    {currentTestimonial.author}
                  </div>
                  <div className="text-slate-600 text-sm">
                    {currentTestimonial.position} - {currentTestimonial.company}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="rounded-full p-2 border-2 border-slate-200 hover:bg-accent-50 hover:border-accent-300 transition-all duration-300"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Dots indicator */}
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? "w-8 bg-accent-600" 
                        : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="rounded-full p-2 border-2 border-slate-200 hover:bg-accent-50 hover:border-accent-300 transition-all duration-300"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
          {[
            { value: "500+", label: "Khách hàng" },
            { value: "99%", label: "Hài lòng" },
            { value: "10+", label: "Năm kinh nghiệm" },
            { value: "24/7", label: "Hỗ trợ" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-accent-600 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
