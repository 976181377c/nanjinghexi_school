import Img from '@/components/Img';
import { GreenTitle } from './GreenTitle';
import { JSX } from 'react';

type AdvantageGridProps = {
  features: { id: number; title: string; icon: JSX.Element }[];
  primaryImage: {
    src: string;
    alt: string;
  };
  galleryImages: {
    src: string;
    alt: string;
  }[];
};

export function AdvantageGrid({
  features,
  primaryImage,
  galleryImages,
}: AdvantageGridProps) {
  return (
    <section id="advantages" className="bg-[#F8FBF9] py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <GreenTitle text="国际部简介" />
      </div>
      <div className="container mx-auto grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-6">
        <div>
          <h2 className="my-[32px_12px] text-[rgba(9,_84,_86,_1)] font-source-han-serif-cn font-semibold text-[42px] leading-[100%]">
            融合中外教育优势
          </h2>

          <p className="text-[rgba(1,_129,_109,_1)] font-source-han-serif-cn font-semibold text-[42px] leading-[100%]">
            <span className="text-[rgba(9,_84,_86,_1)] font-source-han-serif-cn font-semibold text-[42px] leading-[100%]">
              培养
            </span>
            国际化复合型人才
          </p>
          <p className="mt-[42px] text-[rgba(75,_85,_99,_1)] font-normal text-[16px] leading-[180%]">
            南京河西外国语国际部作为南外教育集团核心成员校，传承南外办学理念与优质资源，是南京极具竞争力的国际高中。国际部拥有江苏唯一美高"2+1"项目，可获中美双学籍双文凭，以美国高中生身份申请名校更具优势。
          </p>

          <div className="relative my-[42px_32px] rounded-xl bg-[linear-gradient(135deg,rgba(1,129,109,1)_0%,rgba(47,88,79,1)_100%)]">
            <span className="absolute left-2 top-2 font-serif text-[100px] leading-none text-white/15 pointer-events-none">
              <Img
                src="/icon/Text-Pseudo__before.png"
                alt="globe"
                width={38}
                height={30}
                className="shrink-0 object-contain"
                priority
              />
            </span>

            <div className="p-[34px_52px] text-[rgba(255,_255,_255,_1)] font-normal text-[18px] leading-[160%]">
              融合中外教育优势，传承南外理念，打造高品质国际教育平台，培养具有中国灵魂、世界胸怀的国际化复合型人才。
            </div>
            <span className="absolute right-2 top-2 font-serif text-[100px] leading-none text-white/15 pointer-events-none">
              <Img
                src="/icon/Text-Pseudo__before-1.png"
                alt="globe"
                width={38}
                height={30}
                className="shrink-0 object-contain"
                priority
              />
            </span>
          </div>

          <ul className="mt-8 flex flex-wrap gap-3">
            {features.map((feature) => (
              <li
                key={feature.id}
                className="flex w-fit items-center gap-3 rounded-xl border border-gray-100 bg-white px-5 py-3 shadow-sm">
                <div className="shrink-0">{feature.icon}</div>
                <span className="text-sm font-medium text-gray-600">
                  {feature.title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="overflow-hidden rounded-[2rem] shadow-xl">
            <Img
              src={primaryImage.src}
              alt={primaryImage.alt}
              width={350}
              height={500}
              className="h-full min-h-[320px] w-full object-cover"
            />
          </div>

          {/* CSS Grid spans recreate the three-image visual rhythm from the design. */}
          <div className="grid min-h-[320px]  gap-4 md:grid-rows-2">
            {galleryImages.map((image, index) => (
              <div
                key={image.alt}
                className={`overflow-hidden rounded-[1.5rem] shadow-lg`}>
                <Img
                  src={image.src}
                  alt={image.alt}
                  width={350}
                  height={239}
                  className="h-full w-full object-fill"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
