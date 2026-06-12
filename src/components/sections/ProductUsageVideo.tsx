"use client";

import { VideoSection } from "@/components/ui/VideoSection";

interface ProductUsageVideoProps {
  category: string;
}

const USAGE_VIDEOS: Record<string, { videoId: string; title: string; description: string }> = {
  paracord: {
    videoId: "uelHwf8o7_U",
    title: "Cách sử dụng và ứng dụng Dây dù",
    description: "Hướng dẫn chi tiết cách sử dụng dây dù trong các ứng dụng thực tế"
  },
  eband: {
    videoId: "kJQP7kiw5Fk",
    title: "Cách sử dụng Dây đai thun",
    description: "Hướng dẫn ứng dụng dây đai thun trong sản xuất và gia công"
  },
  service: {
    videoId: "YQHsXMglC9A",
    title: "Quy trình đặt hàng dịch vụ",
    description: "Hướng dẫn đặt hàng và sử dụng dịch vụ gia công"
  }
};

export function ProductUsageVideo({ category }: ProductUsageVideoProps) {
  const videoData = USAGE_VIDEOS[category] || USAGE_VIDEOS.paracord;

  return (
    <div className="bg-slate-50 py-12">
      <VideoSection
        videoId={videoData.videoId}
        title={videoData.title}
        description={videoData.description}
        variant="inline"
      />
    </div>
  );
}
