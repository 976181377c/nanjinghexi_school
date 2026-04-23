import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-[#0b3b36] text-white pt-16 pb-6 px-6 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
        {/* 左侧区域：Logo、标语与二维码 */}
        <div className="lg:col-span-5 flex flex-col">
          <Image
            src="/icon/school-icon.png"
            alt="南京河西外国语学校国际部 Logo"
            width={326}
            height={68}
            sizes="326px"
            className="h-auto w-[326px] shrink-0 object-contain"
            priority
          />
          <div className="my-[18px_36px] max-w-[472px] text-[rgba(255,_255,_255,_0.9)] font-medium text-[16px] leading-[160%]">
            「中国灵魂，世界胸怀」——培养具有外语特长、文理兼备、综合能力突出的国际化复合型人才。
          </div>
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center bg-[rgba(255,_255,_255,_0.2)]">
                <div className="size-[120px] sm:size-[150px]  m-2 sm:m-[9px] bg-gray-200 border border-gray-300 flex items-center justify-center text-gray-400 text-xs">
                  <Image
                    src="/img/qr_code.png"
                    alt="qrcdoe"
                    width={120}
                    height={120}
                    className="w-full h-full shrink-0 object-contain"
                    priority
                  />
                </div>
              </div>
              <span className="mt-3 sm:mt-[21px] text-center text-[rgba(255,_255,_255,_1)]  font-medium text-[14px] sm:text-[16px] leading-[150%]">
                官方公众号
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center bg-[rgba(255,_255,_255,_0.2)]">
                <div className="size-[120px] sm:size-[150px]  m-2 sm:m-[9px] bg-gray-200 border border-gray-300 flex items-center justify-center text-gray-400 text-xs">
                  <Image
                    src="/img/qr_code.png"
                    alt="qrcdoe"
                    width={120}
                    height={120}
                    className="w-full h-full shrink-0 object-contain"
                    priority
                  />
                </div>
              </div>
              <span className="mt-3 sm:mt-[21px] text-center text-[rgba(255,_255,_255,_1)]  font-medium text-[14px] sm:text-[16px] leading-[150%]">
                报名咨询
              </span>
            </div>
          </div>
        </div>

        {/* 中间区域 1：快速链接 */}
        <div className="lg:col-span-2">
          <h3 className="text-[rgba(255,_255,_255,_1)]  font-semibold text-[22px] leading-[100%]">
            快速链接
          </h3>
          <div className="my-[15px] w-[70px] h-px bg-gradient-to-r from-white to-transparent" />

          <ul className="space-y-5 text-sm text-gray-300">
            {[
              '首页',
              '关于我们',
              '课程体系',
              '师资团队',
              '升学中心',
              '特色项目',
              '校园生活',
              '新闻动态',
              '预约访校',
            ].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-[rgba(255,_255,_255,_0.8)] font-medium text-[16px] leading-[100%] hover:underline underline-offset-8 transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 中间区域 2：课程项目 */}
        <div className="lg:col-span-2">
          <h3 className="text-[rgba(255,_255,_255,_1)]  font-semibold text-[22px] leading-[100%]">
            课程项目
          </h3>
          <div className="my-[15px] w-[70px] h-px bg-gradient-to-r from-white to-transparent" />
          <ul className="space-y-3 text-sm text-gray-300">
            {['A-Level', '美高 2+1/3+0', 'AP课程'].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-[rgba(255,_255,_255,_0.8)] font-medium text-[16px] leading-[100%] hover:underline underline-offset-8 transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 右侧区域：联系我们 */}
        <div className="lg:col-span-3">
          <h3 className="text-[rgba(255,_255,_255,_1)]  font-semibold text-[22px] leading-[100%]">
            联系我们
          </h3>
          <div className="my-[15px] w-[70px] h-px bg-gradient-to-r from-white to-transparent" />
          <div className="space-y-6 text-sm text-gray-300">
            {/* 联系电话 */}
            <div>
              <p className="text-[rgba(255,_255,_255,_0.9)]  font-medium text-[16px] leading-[100%]">
                联系电话
              </p>

              <p className="mt-[16px] flex items-center gap-2 text-[rgba(255,_255,_255,_0.8)]  font-medium text-[16px] leading-[100%]">
                <PhoneIcon /> 13357702713
              </p>
            </div>
            {/* 预约访校 */}
            <div>
              <p className="text-[rgba(255,_255,_255,_0.9)]  font-medium text-[16px] leading-[100%]">
                预约访校
              </p>
              <p className="mt-[16px] flex items-center gap-2 text-[rgba(255,_255,_255,_0.8)]  font-medium text-[16px] leading-[100%]">
                <PhoneIcon /> 13357702713
              </p>
            </div>
            {/* 学校地址 */}
            <div>
              <p className="text-[rgba(255,_255,_255,_0.9)] font-medium text-[16px] leading-[100%]">
                学校地址
              </p>
              <div className="mt-[16px] flex items-start gap-2 text-white">
                <div className="mt-0.5">
                  <MapPinIcon />
                </div>
                <div>
                  <p>南京市建邺区太清路30号</p>
                  <p className="text-[rgba(255,_255,_255,_0.8)] font-medium text-[12px] leading-[140%]">
                    Nanjing Hexi Foreign Language School No.
                    <br />
                    30, Taiqing Road Jianye District, Nanjing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* 底部版权信息 */}
      <div className="max-w-7xl mx-auto mt-16 pt-4 border-t border-white/10 text-center text-xs text-gray-400 tracking-wide">
        <span className='text-center text-[rgba(255,_255,_255,_0.6)] font-["Source_Han_Sans_K"] font-normal text-[14px] leading-[100%]'>
          © 2026 南京河西外国语学校 版权所有 | 苏ICP备XXXXXXXX号
        </span>
      </div>
    </footer>
  );
}

// 辅助图标组件 (SVG)
function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="w-4.5 h-4.5">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="w-4 h-4 opacity-80">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    </svg>
  );
}
