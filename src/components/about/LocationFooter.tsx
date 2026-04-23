import Image from 'next/image';
import AMapComponent from '../AMapComponent';

type LocationFooterProps = {
  title: string;
  description: string;
  addressLines: string[];
  phone: string;
  email: string;
  mapSrc: string;
  mapAlt: string;
};

const infoList = [
  {
    icon: (
      <Image
        src="/icon/FRAME_115.png"
        alt="globe"
        width={48}
        height={48}
        className="h-12 w-12 shrink-0 object-contain sm:h-6 sm:w-6"
        priority
      />
    ),
    key: '1',
    text: '江苏省南京市建邺区太清路30号',
  },
  {
    icon: (
      <Image
        src="/icon/FRAME_117.png"
        alt="globe"
        width={48}
        height={48}
        className="h-12 w-12 shrink-0 object-contain sm:h-6 sm:w-6"
        priority
      />
    ),
    key: '2',
    text: '太清路地铁站2号口步行360米可达',
  },
  {
    icon: (
      <Image
        src="/icon/FRAME_119.png"
        alt="globe"
        width={48}
        height={48}
        className="h-12 w-12 shrink-0 object-contain sm:h-6 sm:w-6"
        priority
      />
    ),
    key: '3',
    text: '预约访校：13357702713',
  },
];

export function LocationFooter() {
  return (
    <section
      id="contact"
      className="bg-[#F8FBF9] pb-[120px] px-4 sm:pb-20 sm:px-6 lg:px-0">
      <div className="container mx-auto rounded-[2rem] bg-white p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-8 md:p-12 flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-20">
        <div className="flex-1 flex flex-col">
          <h3 className="text-[rgba(9,_84,_86,_1)] font-source-han-serif-cn font-semibold text-[24px] leading-[110%] sm:text-[28px] sm:leading-[100%]">
            地理位置
          </h3>
          <p className="my-[24px_16px] text-[rgba(75,_85,_99,_1)] font-normal text-[15px] leading-[170%] sm:my-[32px_20px] sm:text-[16px] sm:leading-[160%]">
            学校位于南京市建邺区，地段直达，交通便利。校区周边配套设施完善，为学生提供便利的学习生活条件。
          </p>

          <div className="space-y-6">
            {infoList.map((item) => (
              <div key={item.key} className="flex items-center gap-4">
                <div className="flex shrink-0 items-center justify-center rounded-full">
                  {item.icon}
                </div>
                <span className="text-[rgba(31,_41,_55,_1)] font-medium text-[14px] leading-[150%] sm:text-[15px] sm:leading-[140%] break-words text-center sm:text-left">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 右侧地图占位 */}
        <div className="relative flex-1 overflow-hidden rounded-[1.5rem] bg-gray-100 h-[240px] sm:h-[300px] lg:h-auto min-h-[280px]">
          <AMapComponent />
        </div>
      </div>
    </section>
  );
}
