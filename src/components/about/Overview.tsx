import Image from 'next/image';
import { GreenTitle } from './GreenTitle';

type OverviewProps = {
  title: string;
  description: string[];
  highlights: { label: string; icon: string; description: string }[];
  imageSrc: string;
  imageAlt: string;
};

export function Overview({
  title,
  description,
  highlights,
  imageSrc,
  imageAlt,
}: OverviewProps) {
  return (
    <section
      id="overview"
      className="py-16 sm:py-20 lg:py-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/overview-bg.png')" }}>
      <div className="container mx-auto flex w-full max-w-7xl flex-col items-center px-4">
        <GreenTitle text="OVERVIEW" />
        <p className="mt-4 text-center font-['Source_Han_Serif_CN'] text-[rgba(9,_84,_86,_1)] font-bold text-[48px] leading-[130%]">
          学校概况
        </p>
        <div className="w-[80px] h-[4px] my-[24px] rounded-[100px] bg-[linear-gradient(90deg,_rgba(1,_129,_109,_1)_0%,_rgba(212,_175,_55,_1)_100%)]"></div>
        <p className="flex items-center text-center font-inter text-[rgba(75,_85,_99,_1)]  text-[20px] leading-[120%]">
          依托南外教育集团优质资源，打造国际化教育标杆
        </p>
        <div className="w-full py-12 lg:py-20 font-sans">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16.5 gap-y-12 items-start">
            {/* 左侧图片与角标区域 */}
            <div className="relative mt-6 w-full h-full lg:mt-0">
              {/* 主图容器 */}
              <div className="relative w-full h-full aspect-682/600 rounded-2xl overflow-hidden shadow-sm">
                {/* 提示：如果是真实项目，建议换成 next/image 的 <Image fill src="..." /> */}
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(min-width: 1024px) calc((100vw - 66px) / 2), 100vw"
                  className="object-fill"
                />
              </div>
              <div className="absolute -top-3 left-0 z-10 flex rounded-[14px] bg-white p-3 [box-shadow:-16px_4px_24px_rgba(0,_0,_0,_0.03)] lg:-top-8 lg:-left-8 lg:rounded-[16px] lg:px-6 lg:py-4">
                <Image
                  src="/icon/FRAME_130.png"
                  alt="创校年份"
                  width={48}
                  height={48}
                  className="mr-2 h-9 w-9 shrink-0 object-contain lg:mr-[16px] lg:h-12 lg:w-12"
                  priority
                />
                <div>
                  <div className="mb-1 text-[rgba(9,_84,_86,_1)] font-[Roboto] text-[22px] font-bold leading-[100%] lg:mb-[6px] lg:text-[28px]">
                    2016
                  </div>
                  <div className="text-[rgba(156,_163,_175,_1)] text-[12px] font-normal leading-[100%] lg:text-[14px]">
                    创校年份
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-3 right-0 flex h-[88px] w-[88px] flex-col items-center justify-center rounded-[18px] bg-[linear-gradient(135deg,_rgba(212,_175,_55,_1)_0%,_rgba(245,_158,_11,_1)_100%)] [box-shadow:0px_20px_50px_rgba(0,_0,_0,_0.12)] lg:-bottom-8 lg:-right-8 lg:h-[136px] lg:w-[136px] lg:rounded-[24px]">
                <div className="mb-1 flex items-center text-center font-[Roboto] text-[30px] font-semibold leading-[100%] text-[rgba(255,_255,_255,_1)] lg:mb-[5px] lg:text-[48px]">
                  10+
                </div>
                <div className="flex items-center text-center text-[11px] font-normal leading-[100%] tracking-[0.7px] text-[rgba(255,_255,_255,_1)] lg:text-[14px]">
                  年办学历史
                </div>
              </div>
            </div>

            {/* 右侧文本与信息流区域 */}
            <div className="w-full flex flex-col justify-center pt-8 lg:pt-0">
              <h2 className="mb-[12px] text-[rgba(9,_84,_86,_1)] font-['Source_Han_Serif_CN'] font-bold text-[36px] leading-[120%]">
                南京河西外国语学校国际部
              </h2>

              <h3 className="text-[rgba(9,_84,_86,_1)] font-display font-medium text-[28px] leading-[110%]">
                Nanjing Hexi Foreign Language School
              </h3>

              <div className="w-[96px] h-[6px] my-[32px_42px] rounded-[100px] bg-[linear-gradient(90deg,_rgba(1,_129,_109,_1)_0%,_rgba(212,_175,_55,_1)_100%)]" />

              {/* 段落描述 */}
              <div className="text-gray-600 space-y-4 text-[14px] md:text-[15px] leading-loose text-justify">
                <div className="text-[rgba(75,_85,_99,_1)] font-normal text-[20px] leading-[150%]">
                  学校成立于2016年，位于太清路30号，隶属于
                  <span className="text-[rgba(1,129,109,1)] font-medium">
                    南京外国语学校教育集团
                  </span>
                  。秉承南外本部
                  <span className="text-[rgba(1,129,109,1)] font-medium">
                    “培养具有中国灵魂、世界胸怀的现代人”
                  </span>
                  的教育理念，学校共享南外本部的优质资源，并继承了“五大节”等特色文化活动。致力于培养具备外语特长、文理兼备、综合能力突出的国际化复合型人才。
                </div>

                <div className="mt-[36px] text-[rgba(75,_85,_99,_1)] font-normal text-[20px] leading-[150%]">
                  学校荣获“全国中小学国防教育示范学校”、“江苏省‘双减’示范创建学校”等多项荣誉，成为南京教育界的典范之一。
                </div>
              </div>

              {/* 底部 2x2 信息网格 */}

              <div className="grid grid-cols-1 mt-[42px] sm:grid-cols-2 gap-3 md:gap-4">
                {/* 卡片 1 */}
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#f2f8f6] rounded-xl p-3 md:p-4 flex items-center gap-3 transition-transform hover:-translate-y-1">
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={36}
                      height={36}
                      className="shrink-0 object-contain"
                      priority
                    />
                    <div>
                      <div className="mb-[12px] text-[rgba(156,_163,_175,_1)] text-[14px] leading-[100%]">
                        {item.label}
                      </div>
                      <div className="text-[rgba(31,_41,_55,_1)] ftext-[16px] leading-[100%]">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
