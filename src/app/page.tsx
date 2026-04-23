import type { Metadata } from 'next';
import { AdvantageGrid } from '@/components/about/AdvantageGrid';
import { CampusGallery } from '@/components/about/CampusGallery';
import { CoreValues } from '@/components/about/CoreValues';
import { Footer } from '@/components/about/Footer';
import { Hero } from '@/components/about/Hero';
import { LocationFooter } from '@/components/about/LocationFooter';
import { Navbar } from '@/components/about/Navbar';
import { Overview } from '@/components/about/Overview';
import { StatsBar } from '@/components/about/StatsBar';
import { TopBar } from '@/components/about/TopBar';

export const metadata: Metadata = {
  title: '关于我们',
  description:
    '了解南京河西学校的办学理念、学校概况、校园风采、核心优势与联系方式。',
};

const features = [
  {
    id: 1,
    title: 'AL/AP/AMC官方授权考点',
    // 五角星图标
    icon: (
      <svg
        className="w-5 h-5 text-[#D1AB47]"
        viewBox="0 0 24 24"
        fill="currentColor">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: '江苏唯一美高"2+1"项目',
    // 圆形对勾图标
    icon: (
      <svg
        className="w-5 h-5 text-[#D1AB47]"
        viewBox="0 0 24 24"
        fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: '美高+AP/A-Level/DSE课程',
    // 学士帽图标
    icon: (
      <svg
        className="w-5 h-5 text-[#D1AB47]"
        viewBox="0 0 24 24"
        fill="currentColor">
        <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
      </svg>
    ),
  },
];

const navItems = [
  { label: '首页', key: 'home', href: '/home' },
  { label: '关于我们', key: 'aboutUs', href: '/aboutUs' },
  { label: '课程体系', key: 'curriculum', href: '/curriculum' },
  { label: '师资团队', key: 'faculty', href: '/faculty' },
  { label: '升学中心', key: 'advancement', href: '/advancement' },
  { label: '特色项目', key: 'programs', href: '/programs' },
  { label: '校园生活', key: 'campusLife', href: '/campusLife' },
  { label: '新闻动态', key: 'news', href: '/news' },
  { label: '招生咨询', key: 'admissions', href: '/admissions' },
];

const overviewParagraphs = [
  '南京河西学校坚持以学生成长为中心，构建融合学术能力、国际理解与综合素养的现代化教育体系，面向未来培养具备独立思考与社会责任感的终身学习者。',
  '学校以高标准的教学空间、跨学科课程设计与多元评价机制为支撑，持续推动课堂创新与校园文化建设，为每一位学生提供兼具深度与广度的成长路径。',
];

const overviewHighlights = [
  { label: '校训', icon: '/icon/FRAME_32.png', description: '中国灵魂，世界胸怀' },
  { label: '价值观', icon: '/icon/FRAME_35.png', description: '求实·奋进·博学·谦逊' },
  { label: '核心荣誉', icon: '/icon/FRAME_38.png', description: '全国中小学国防教育示范学校' },
  { label: '核心荣誉', icon: '/icon/FRAME_41.png', description: '江苏省 “双减” 示范创建学校' },
];

const stats = [
  {
    value: '1:5',
    label: '超高师生比',
    description: '≤20人超小班教学，双师授课+个性化辅导',
  },
  {
    value: '100%',
    label: 'QS/全美前100录取率',
    description: '近100%毕业生进入QS/全美前100大学，超60%跻身前50名校',
  },
  {
    value: '30%',
    label: '前30录取',
    description: '超30%斩获全球/全美前30名校录取',
  },
  {
    value: 'G5',
    label: '英国顶尖院校',
    description: '囊括剑桥、牛津等英国G5超级精英大学',
  },
];

const footerGroups = [
  {
    title: '校园概览',
    links: [
      { label: '学校概况', href: '#overview' },
      { label: '办学优势', href: '#advantages' },
      { label: '核心理念', href: '#values' },
    ],
  },
  {
    title: '资源链接',
    links: [
      { label: '校园风采', href: '#gallery' },
      { label: '联系我们', href: '#contact' },
      { label: '招生咨询', href: '#contact' },
    ],
  },
  {
    title: '快速访问',
    links: [
      { label: '隐私政策', href: '/' },
      { label: '网站地图', href: '/' },
      { label: '返回顶部', href: '#hero' },
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <TopBar />
      <Navbar items={navItems} />

      <main>
        <Hero
          eyebrow="About Us"
          title="关于南京河西学校的教育愿景与成长生态"
          description="我们以深度学习、国际视野与全人培养为核心，打造兼具学术品质、校园温度与未来导向的现代学校。"
        />

        <Overview
          title="南京河西学校简介"
          description={overviewParagraphs}
          highlights={overviewHighlights}
          imageSrc="/img/image_2020.png"
          imageAlt="南京河西学校教学楼与校园主景视觉占位图"
        />

        <StatsBar items={stats} />

        <AdvantageGrid
          features={features}
          primaryImage={{
            src: '/img/FRAME_56.png',
            alt: '国际化学术范围',
          }}
          galleryImages={[
            {
              src: '/img/FRAME_59.png',
              alt: '跨文化交流',
            },
            {
              src: '/img/FRAME_62.png',
              alt: '丰富校园生活',
            },
          ]}
        />

        <CoreValues />

        <CampusGallery />

        <LocationFooter />
      </main>

      <Footer />
    </div>
  );
}
