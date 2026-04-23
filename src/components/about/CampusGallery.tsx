import React from 'react';
import { GreenTitle } from './GreenTitle';
import basePath from '@/lib/basePath';

const campusFeatures = [
  {
    id: 1,
    title: '校园全景',
    desc: '现代化的校园建筑与优美的绿化环境',
    bgImage: `${basePath}/img/image_2128.png`,
  },
  {
    id: 2,
    title: '多层图书馆',
    desc: '配备先进教学设备，营造国际化学习氛围',
    bgImage: `${basePath}/img/image_2129.png`,
  },
  {
    id: 3,
    title: '学生活动',
    desc: '丰富多彩的校园活动，促进全面发展',
    bgImage: `${basePath}/img/image_2130.png`,
  },
];

export function CampusGallery() {
  return (
    <section className="w-full bg-[#FAFAFA] pt-[120px] pb-[66px] font-sans">
      <div className="container mx-auto ">
        <div className="flex flex-col items-center text-center mb-16">
          <GreenTitle text="OVERVIEW" />
          <p className="mt-4 text-center font-['Source_Han_Serif_CN'] text-[rgba(9,_84,_86,_1)] font-bold text-[48px] leading-[130%]">
            校园风采
          </p>
          <div className="w-[80px] h-[4px] my-[24px] rounded-[100px] bg-[linear-gradient(90deg,_rgba(1,_129,_109,_1)_0%,_rgba(212,_175,_55,_1)_100%)]"></div>

          <p className="flex items-center text-center text-[rgba(75,_85,_99,_1)] font-normal text-[20px] leading-[120%]">
            优美的校园环境，先进的教学设施，为学生创造最佳的学习氛围
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3 md:gap-6">
          {campusFeatures.map((feature) => (
            <div
              key={feature.id}
              className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-auto md:h-80 rounded-2xl sm:rounded-3xl md:rounded-[2rem] overflow-hidden group shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105 motion-reduce:group-hover:scale-100"
                style={{ backgroundImage: `url(${feature.bgImage})` }}
              />
              <div className="absolute bottom-0 left-0 w-full p-7.5">
                <span className='relative z-10'>
                  <h3 className="text-[rgba(255,_255,_255,_1)] font-normal text-[22px] leading-[100%]">
                    {feature.title}
                  </h3>
                  <p className="mt-4.5 text-[rgba(255,_255,_255,_0.8)] font-normal text-[14px] leading-[100%]">
                    {feature.desc}
                  </p>
                </span>

                <div className="absolute inset-0 bg-[linear-gradient(0deg,_rgba(9,_84,_86,_0.95)_20%,_rgba(0,_0,_0,_0)_100%)]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
