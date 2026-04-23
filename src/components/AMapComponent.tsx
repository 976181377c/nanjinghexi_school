'use client';

import { useEffect, useRef } from 'react';

export default function CustomMapComponent() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  const initMap = async () => {
    const AMapLoader = (await import('@amap/amap-jsapi-loader')).default;

    (window as any)._AMapSecurityConfig = {
      securityJsCode: '511a6d1dc77fc6f5b46c0f3dbcac5752', // 替换为你的安全密钥
    };

    const container = mapContainerRef.current;
    if (!container) return;
    if (mapRef.current) return;

    // 2. 加载高德地图 API
    AMapLoader.load({
      key: '38d687cd5aa6671a3ac06526e49c3a49', // 替换为你的 Web 端 Key
      version: '2.0', // 指定要加载的 JS API 版本
      plugins: ['AMap.Marker'], // 需要使用的插件列表
    })
      .then((AMap) => {
        // 1. 初始化地图，并设置浅色主题以匹配图片风格
        const map = new AMap.Map(container, {
          viewMode: '2D',
          zoom: 15,
          center: [118.699734, 31.969385], // 替换为实际经纬度
          mapStyle: 'amap://styles/light', // 使用高德内置的浅色极简主题
        });
        mapRef.current = map;

        // 2. 构造自定义标记的 HTML 内容 (橙色圆圈 + SVG定位图标)
        const customMarkerContent = `
            <div style="
              width: 30px; 
              height: 30px; 
              background-color: #F5A623; 
              border-radius: 50%; 
              display: flex; 
              justify-content: center; 
              align-items: center; 
              box-shadow: 0 4px 8px rgba(245, 166, 35, 0.4);
              margin-bottom: 10px;
            ">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
          `;

        // 3. 创建 Marker 并应用自定义样式与文本
        const marker = new AMap.Marker({
          position: [118.699734, 31.969385], // 标记位置，需与中心点对应或自行调整
          content: customMarkerContent, // 使用自定义 HTML 节点替代默认蓝色图标
          offset: new AMap.Pixel(-20, -20), // 偏移量：使其视觉中心对准经纬度 (宽高的一半)

          // 4. 设置自定义文本标签
          label: {
            content:
              "<div style='align-items: center;text-align: center;color: rgba(26, 26, 26, 1);font-weight: 500;font-size: 12px;line-height: 100%'>南京河西外国语学校国际部</div>",
            direction: 'bottom', // 控制文本显示在图标的下方
          },
        });

        // 将标记添加到地图
        map.add(marker);

        if (typeof ResizeObserver !== 'undefined') {
          resizeObserverRef.current?.disconnect();
          resizeObserverRef.current = new ResizeObserver(() => {
            mapRef.current?.resize?.();
          });
          resizeObserverRef.current.observe(container);
        }
      })
      .catch((e) => {
        console.error('高德地图加载失败:', e);
      });
  };

  useEffect(() => {
    initMap();

    return () => {
      resizeObserverRef.current?.disconnect();
      resizeObserverRef.current = null;

      mapRef.current?.destroy?.();
      mapRef.current = null;
    };
  }, []);

  return (
    <div
      ref={mapContainerRef}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '280px',
        borderRadius: '16px',
        overflow: 'hidden',
      }}
    />
  );
}
