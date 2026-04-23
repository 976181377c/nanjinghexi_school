import Image from 'next/image';
import basePath from '@/lib/basePath';
const icons = {
  clock: (
    <Image
      src="/icon/FRAME_95.png"
      alt="clock"
      width={80}
      height={80}
      className="shrink-0 object-contain"
      priority
    />
  ),
  globe: (
    <Image
      src="/icon/FRAME_97.png"
      alt="globe" width={80}
      height={80}
      className="shrink-0 object-contain"
      priority
    />
  ),
  star: (
    <Image
      src="/icon/FRAME_99.png"
      alt="star" width={80}
      height={80}
      className="shrink-0 object-contain"
      priority
    />
  ),
};

// 定义数据
const missionCards = [
  {
    id: 1,
    title: '中国灵魂',
    icon: icons.clock,
    description:
      '传承中华文化精髓，培养民族认同感与文化自信，奠定学生成长成才的根基',
  },
  {
    id: 2,
    title: '世界胸怀',
    icon: icons.globe,
    description:
      '拓展国际视野，培养跨文化交流能力，助力学生成为具有全球竞争力的复合型人才',
  },
  {
    id: 3,
    title: '全面发展',
    icon: icons.star,
    description: '注重学生综合素质培养，实现学术能力与个人素养的全面提升',
  },
];

export function CoreValues() {
  return (
    // 主容器：设置深绿色背景和背景图像占位符
    <div
      className="relative bg-cover bg-center px-[8]  md:px-16 py-[120px] text-center text-white"
      style={{
        backgroundImage: `url('${basePath}/core-values-bg.png')`,
      }}>
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center mb-20 mt-16 md:mt-0">
        <Image
          src="/icon/Group_108.png"
          alt="globe" 
          width={23}
          height={32}
          className="shrink-0 object-contain"
          priority
        />

        {/* 主标题 */}
        <h1 className="m-[48px_36px] text-center text-[rgba(255,_255,_255,_1)] font-source-han-serif-cn font-semibold text-[36px] leading-[160%]">
          培养具有中国灵魂、世界胸怀的现代人
          <br />
          坚持立德树人，全面发展
        </h1>

        <span className="flex items-center">
          <div className="w-[32px] h-px bg-[rgba(212,_175,_55,_1)]" />
          <span className="mx-[8px] text-[rgba(212,_175,_55,_1)] font-medium text-[14px] leading-[100%] uppercase tracking-[4px]">
            办学使命
          </span>
          <div className="w-[32px] h-px bg-[rgba(212,_175,_55,_1)]" />
        </span>
      </div>

      {/* 功能卡片网格 */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {missionCards.map((card) => (
          <div
            key={card.id}
            className="p-[40px_34px] rounded-2xl border border-solid border-[rgba(255,255,255,0.1)] box-border bg-[rgba(255,_255,_255,_0.05)]">
            {/* 图标容器 */}
            <div className="flex justify-center items-center mx-auto size-20 rounded-[20px] bg-[linear-gradient(135deg,_rgba(1,_129,_109,_1)_0%,_rgba(212,_175,_55,_1)_100%)]">
              {card.icon}
            </div>
            <h3 className="my-[32px_24px] text-center text-[rgba(255,_255,_255,_1)]  font-medium text-[22px] leading-[100%]">
              {card.title}
            </h3>
            <div className="mx-auto max-w-[278px] text-center text-[rgba(255,_255,_255,_0.7)] font-normal text-[15px] leading-[150%]">
              {card.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
