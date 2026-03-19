import Link from "next/link";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  helper?: string ;
}

export default function AuthLayout({ children, title, subtitle, helper }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center gap-10 px-4 py-10 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-4">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white shadow-inner">
              TME
            </div>
            <div className="leading-tight">
              <div className="text-base font-semibold text-slate-900">TME - Thien Minh Electronics</div>
              <div className="text-sm text-slate-600">Linh kiện, thiết bị, dịch vụ kỹ thuật</div>
            </div>
          </Link>

          <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-slate-900">{title}</h1>
            {subtitle ? <p className="text-sm text-slate-600">{subtitle}</p> : null}
            {helper ? (
              <p className="text-sm font-medium text-primary">{helper}</p>
            ) : null}
          </div>

          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
              Ưu đãi giao hàng nội thành HCM cho đơn từ 1.000.000đ.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
              Lưu giỏ hàng và lịch sử mua sắm, hỗ trợ báo giá nhanh.
            </li>
          </ul>
        </div>

        <div className="w-full max-w-xl flex-1">{children}</div>
      </div>
    </div>
  );
}
