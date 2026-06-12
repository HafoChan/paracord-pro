import { VideoSection } from "@/components/ui/VideoSection";

export function CustomizationGuideVideo() {
  return (
    <div className="bg-slate-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <VideoSection
            videoId="oHg5SJYRHA0"
            title="Hướng dẫn đặt hàng tùy chỉnh"
            description="Cách chọn màu sắc, kích thước và các tùy chọn khác cho sản phẩm của bạn"
            variant="inline"
          />
        </div>
      </div>
    </div>
  );
}
