import { MainLayout } from "@/components/layout/MainLayout";
import { VideoSection } from "@/components/ui/VideoSection";
import { VIDEO_IDS, VIDEO_METADATA } from "@/lib/content/videos";

export const metadata = {
  title: "Video Showcase - MINH TIEN STRING CO., LTD",
  description: "Xem tất cả video giới thiệu về công ty và sản phẩm",
  robots: "noindex, nofollow" // Không index trang này
};

export default function VideoShowcasePage() {
  const videoGroups = [
    {
      title: "Video Trang chủ",
      videos: [
        { id: VIDEO_IDS.COMPANY_INTRO, variant: "default" as const },
        { id: VIDEO_IDS.MANUFACTURING_PROCESS, variant: "default" as const }
      ]
    },
    {
      title: "Video Trang sản phẩm",
      videos: [
        { id: VIDEO_IDS.PRODUCT_GUIDE, variant: "compact" as const },
        { id: VIDEO_IDS.PARACORD_DEMO, variant: "compact" as const },
        { id: VIDEO_IDS.EBAND_DEMO, variant: "compact" as const },
        { id: VIDEO_IDS.SERVICE_DEMO, variant: "compact" as const },
        { id: VIDEO_IDS.CUSTOMIZATION_GUIDE, variant: "inline" as const }
      ]
    },
    {
      title: "Video Trang giới thiệu",
      videos: [
        { id: VIDEO_IDS.COMPANY_STORY, variant: "default" as const },
        { id: VIDEO_IDS.FACTORY_TOUR, variant: "hero" as const },
        { id: VIDEO_IDS.APPLICATION_CASE_STUDY, variant: "default" as const }
      ]
    },
    {
      title: "Video Trang liên hệ",
      videos: [
        { id: VIDEO_IDS.CONTACT_GUIDE, variant: "compact" as const }
      ]
    }
  ];

  return (
    <MainLayout>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Video Showcase
          </h1>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto">
            Tổng hợp tất cả video giới thiệu về công ty, sản phẩm và dịch vụ
          </p>
        </div>
      </section>

      {/* Video Groups */}
      {videoGroups.map((group, groupIndex) => (
        <div key={groupIndex}>
          {/* Group Header */}
          <section className="py-8 bg-slate-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-16">
              <h2 className="text-3xl font-bold text-primary-900">
                {group.title}
              </h2>
            </div>
          </section>

          {/* Videos in Group */}
          {group.videos.map((video, videoIndex) => {
            const metadata = VIDEO_METADATA[video.id];
            return (
              <VideoSection
                key={videoIndex}
                videoId={video.id}
                title={metadata?.title}
                description={metadata?.description}
                variant={video.variant}
              />
            );
          })}
        </div>
      ))}

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-primary-900 mb-4">
                Thông tin về Video
              </h3>
              
              <div className="space-y-4 text-slate-600">
                <p>
                  Tất cả video trên website được tích hợp từ YouTube để đảm bảo:
                </p>
                
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Tốc độ tải nhanh với CDN toàn cầu</li>
                  <li>Tự động điều chỉnh chất lượng theo băng thông</li>
                  <li>Hỗ trợ đầy đủ trên mọi thiết bị</li>
                  <li>Không tốn băng thông hosting</li>
                  <li>Dễ dàng cập nhật và quản lý</li>
                </ul>

                <div className="mt-6 p-4 bg-accent-50 rounded-lg border border-accent-200">
                  <p className="text-accent-900 font-semibold mb-2">
                    Lưu ý cho Admin:
                  </p>
                  <p className="text-sm text-accent-800">
                    Để thay đổi video, cập nhật Video ID trong file{" "}
                    <code className="bg-white px-2 py-1 rounded text-xs">
                      src/lib/content/videos.ts
                    </code>
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg border border-slate-200">
                    <div className="text-3xl font-bold text-accent-600 mb-1">
                      {Object.keys(VIDEO_METADATA).length}
                    </div>
                    <div className="text-sm text-slate-600">
                      Tổng số video
                    </div>
                  </div>
                  
                  <div className="text-center p-4 bg-white rounded-lg border border-slate-200">
                    <div className="text-3xl font-bold text-accent-600 mb-1">
                      5
                    </div>
                    <div className="text-sm text-slate-600">
                      Trang có video
                    </div>
                  </div>
                  
                  <div className="text-center p-4 bg-white rounded-lg border border-slate-200">
                    <div className="text-3xl font-bold text-accent-600 mb-1">
                      4
                    </div>
                    <div className="text-sm text-slate-600">
                      Variants khác nhau
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
