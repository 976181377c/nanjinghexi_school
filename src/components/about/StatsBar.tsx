import basePath from '@/lib/basePath';

type StatItem = {
  value: string;
  label: string;
  description: string;
};

type StatsBarProps = {
  items: StatItem[];
};

export function StatsBar({ items }: StatsBarProps) {
  return (
    <section
      aria-labelledby="stats-heading"
      className="py-10 flex justify-center bg-[#0F4B3A] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${basePath}/stats-bar-bg.png')` }}>
      <div className="container max-w-7xl">
        <h2 id="stats-heading" className="sr-only">
          学校数据速览
        </h2>
        <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <li key={item.label} className="py-6">
              <p className="text-center text-[rgba(212,_175,_55,_1)] font-bold text-[60px] leading-[136%]">
                {item.value}
              </p>

              <p className="my-[10px_14px] text-center text-[rgba(255,_255,_255,_0.9)]  font-medium text-[16px] leading-[110%] tracking-[0.5px]">
                {item.label}
              </p>

              <p className="text-center text-[rgba(255,_255,_255,_0.7)]  font-normal text-[14px] leading-[140%]">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
