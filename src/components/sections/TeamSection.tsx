import { Users, Mail, Linkedin } from "lucide-react";

const TEAM_MEMBERS = [
  {
    name: "Nguyễn Văn A",
    position: "Giám đốc điều hành",
    description: "15 năm kinh nghiệm trong ngành dệt may và sản xuất dây",
    image: "/assets/team/member1.jpg",
    email: "director@minhtien.com",
    linkedin: "#"
  },
  {
    name: "Trần Thị B",
    position: "Giám đốc Sản xuất",
    description: "Chuyên gia về quy trình sản xuất và kiểm soát chất lượng",
    image: "/assets/team/member2.jpg",
    email: "production@minhtien.com",
    linkedin: "#"
  },
  {
    name: "Lê Văn C",
    position: "Giám đốc Kinh doanh",
    description: "10 năm kinh nghiệm phát triển thị trường và chăm sóc khách hàng",
    image: "/assets/team/member3.jpg",
    email: "sales@minhtien.com",
    linkedin: "#"
  },
  {
    name: "Phạm Thị D",
    position: "Trưởng phòng R&D",
    description: "Chuyên gia nghiên cứu và phát triển sản phẩm mới",
    image: "/assets/team/member4.jpg",
    email: "rnd@minhtien.com",
    linkedin: "#"
  }
];

export function TeamSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent-50 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-accent-200">
            <Users className="h-4 w-4" />
            <span>Đội ngũ của chúng tôi</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Đội ngũ <span className="text-accent-600">chuyên nghiệp</span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Đội ngũ lãnh đạo giàu kinh nghiệm, tận tâm và luôn sẵn sàng hỗ trợ khách hàng
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              {/* Image */}
              <div className="relative h-64 bg-gray-100 overflow-hidden">
                {/* Placeholder avatar */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-accent-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
                    {member.name.charAt(0)}
                  </div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-accent-50 transition-colors"
                    title="Email"
                  >
                    <Mail className="h-5 w-5 text-accent-600" />
                  </a>
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-accent-50 transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-accent-600" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-slate-900 text-xl mb-1 group-hover:text-accent-600 transition-colors">
                  {member.name}
                </h3>
                
                <div className="text-accent-600 font-semibold text-sm mb-3">
                  {member.position}
                </div>
                
                <p className="text-slate-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">
            Cùng với đội ngũ 30+ nhân viên giàu kinh nghiệm trong sản xuất và kiểm soát chất lượng
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-accent-600 font-semibold hover:text-accent-700 transition-colors"
          >
            <span>Liên hệ với chúng tôi</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
