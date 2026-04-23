"use client";
import Img from "@/components/Img";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";

type NavItem = {
  label: string;
  key: string;
  href: string;
};

type NavbarProps = {
  items: NavItem[];
};

export function Navbar({ items }: NavbarProps) {
  const pathname = usePathname();
  const activeItem = pathname.split("/")[1];

  const panelId = useId();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 现在的 JS 只需要专心处理透明度渐变，不再需要计算位置
  const [bgOpacity, setBgOpacity] = useState(0);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const maxScroll = 150;
      const newOpacity = Math.min(window.scrollY / maxScroll, 1);
      setBgOpacity(newOpacity);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-1000 w-full h-0">
      <div
        className="w-full flex justify-center"
        style={{ backgroundColor: `rgba(12, 54, 52, ${bgOpacity})` }}
      >

        <header className="flex container items-center justify-between py-5">
          <Img
            src="/icon/school-icon2.png"
            alt="南京河西外国语学校国际部 Logo"
            width={285}
            height={59}
            className="shrink-0 object-contain w-[200px] sm:w-[230px] md:w-[260px] 2xl:w-[285px] h-auto"
            priority
          />

          <nav className="hidden 2xl:flex items-center" aria-label="主导航">
            <ul className="flex items-center gap-6 xl:gap-8 text-[15px] text-white">
              {items.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    className={
                      activeItem === item.key
                        ? "text-yellow-500 font-medium relative drop-shadow-sm after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-yellow-500"
                        : "hover:text-yellow-400 transition-colors drop-shadow-sm"
                    }
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#"
            className="hidden 2xl:inline-flex bg-[#eab308] hover:bg-yellow-500 text-white text-sm font-medium px-6 py-2.5 rounded shadow-md transition-colors"
            aria-label="预约访校"
          >
            预约访校
          </a>

          <button
            type="button"
            className="2xl:hidden text-white p-2 focus:outline-none"
            aria-label={mobileMenuOpen ? "关闭菜单" : "打开菜单"}
            aria-expanded={mobileMenuOpen}
            aria-controls={panelId}
            onClick={() => setMobileMenuOpen((v) => !v)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </header>

        {/* Mobile drawer */}
        <div
          className={`2xl:hidden fixed inset-0 z-50 ${mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
          aria-hidden={!mobileMenuOpen}
        >
          <button
            type="button"
            className={`absolute inset-0 bg-black/50 transition-opacity ${mobileMenuOpen ? "opacity-100" : "opacity-0"}`}
            onClick={() => setMobileMenuOpen(false)}
            aria-label="关闭菜单遮罩"
          />

          <aside
            id={panelId}
            role="dialog"
            aria-modal="true"
            aria-label="移动端菜单"
            className={`absolute right-0 top-0 h-full w-[86%] max-w-[360px] bg-[#0c3634] text-white shadow-2xl transition-transform duration-200 ease-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <div className="text-sm font-medium text-white/80">导航</div>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="关闭导航"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <nav className="px-5 py-4" aria-label="移动端导航">
              <ul className="flex flex-col gap-1">
                {items.map((item) => {
                  const isActive = activeItem === item.key;
                  return (
                    <li key={item.key}>
                      <a
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between rounded-lg px-3 py-3 text-[15px] transition-colors ${isActive
                          ? "bg-white/10 text-yellow-400 font-medium"
                          : "text-white/90 hover:bg-white/10 hover:text-yellow-400"
                          }`}
                      >
                        <span>{item.label}</span>
                        <span className={`text-xs ${isActive ? "text-yellow-400" : "text-white/40"}`}>→</span>
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-5">
                <a
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex w-full items-center justify-center bg-[#eab308] hover:bg-yellow-500 text-white text-sm font-medium px-6 py-3 rounded shadow-md transition-colors"
                  aria-label="预约访校"
                >
                  预约访校
                </a>
              </div>
            </nav>
          </aside>
        </div>
      </div>

    </div>
  );
}