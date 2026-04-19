"use client";

import { VideoSection } from "@/components/ui/VideoSection";

interface ProductDemoVideoProps {
  category: string;
}

const VIDEO_BY_CATEGORY: Record<string, { videoId: string; title: string; description: string }> = {
  paracord: {
    videoId: "uelHwf8o7_U",
    title: "Ứng dụng thực tế của Dây dù (Paracord)",
    description: "Xem cách dây dù được sử dụng trong các ngành may mặc, balo, đồ thể thao và nhiều lĩnh vực khác"
  },
  eband: {
    videoId: "kJQP7kiw5Fk",
    title: "Ứng dụng của Dây đai thun (Elastic Band)",
    description: "Khám phá tính năng co giãn vượt trội và ứng dụng đa dạng của dây đai thun chất lượng cao"
  },
  service: {
    videoId: "YQHsXMglC9A",
    title: "Dịch vụ gia công chuyên nghiệp",
    description: "Quy trình tư vấn, thiết kế và gia công sản phẩm theo yêu cầu của khách hàng"
  }
};

export function ProductDemoVideo({ category }: ProductDemoVideoProps) {
  const videoData = VIDEO_BY_CATEGORY[category] || VIDEO_BY_CATEGORY.paracord;

  return (
    <VideoSection
      videoId={videoData.videoId}
      title={videoData.title}
      description={videoData.description}
      variant="compact"
    />
  );
}
