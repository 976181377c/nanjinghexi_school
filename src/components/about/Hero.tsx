type HeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

import Image from 'next/image';

export function Hero({ eyebrow, title, description }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative isolate h-[550px] overflow-hidden text-white">
      <Image
        src="/main-bg.png"
        alt="南京河西学校校园主图"
        fill
        priority
        sizes="100vw"
        className="z-0 object-cover object-center select-none"
      />

      <div className="relative mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
        <p className="mb-[16px] text-center font-medium text-[48px] leading-[100%] tracking-[-1px]">
          关于我们
        </p>
        <p className="text-center font-bold text-[52px] leading-[100%] uppercase tracking-[1px]">
          About Us
        </p>
        <div className="self-center mt-[30px] w-[40px] h-[4px] bg-white"></div>
      </div>
    </section>
  );
}
