import { PhoneIcon } from "@heroicons/react/24/outline";
import { COMPANY_INFO } from "@/lib/constants";

export function FloatingActionButton() {
  return (
    <a
      href={`tel:${COMPANY_INFO.phone}`}
      className="fab animate-float"
      aria-label={`Gọi điện thoại ${COMPANY_INFO.phone}`}
      title="Gọi ngay để được tư vấn"
    >
      <PhoneIcon className="w-6 h-6" />
    </a>
  );
}
