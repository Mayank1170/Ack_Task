import React, { useState, useEffect } from 'react';
import About from "@/components/About";
import DashboardCard from "@/components/DashboardCard";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScrollProgress(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const path = document.getElementById('s-path') as unknown as SVGPathElement;
    if (path) {
      const pathLength = path.getTotalLength();
      path.style.strokeDasharray = `${pathLength}`;
      path.style.strokeDashoffset = `${pathLength - (pathLength * (scrollProgress / 100))}`;
    }
  }, [scrollProgress]);

  return (
    <div className="flex flex-col justify-center items-center relative">
      <Header />
      <div><Hero /></div>
      <div className="flex flex-col mt-[130px]"><DashboardCard /></div>
      <div><About /></div>
      <div className="w-[80%] my-[64px] flex items-center justify-center"><FeatureGrid /></div>
      <div className="absolute top-0 left-0 w-1 h-full z-[-1]">
        <svg width="1115" height="2519" viewBox="0 0 1115 2519" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="s-path" d="M44 1450V1554.17C44 1840.41 260.513 2072.44 527.595 2072.44H782.119C964.86 2072.44 1113 2231.2 1113 2427.04V2573" stroke="url(#paint0_linear_2008_87)" strokeWidth="2.95937" strokeLinecap="round" />
          <path d="M457.964 2V39.6741C457.964 143.187 374.05 227.1 270.537 227.1H171.892C101.067 227.1 43.6523 284.515 43.6523 355.34V408.125" stroke="url(#paint1_linear_2008_87)" strokeWidth="2.95937" strokeLinecap="round" />
          <rect width="3" height="416" rx="1.5" transform="matrix(1 0 0 -1 42 620.695)" fill="url(#paint2_linear_2008_87)" />
          <g filter="url(#filter0_f_2008_87)">
            <rect x="28" y="642" width="30" height="23" rx="11.5" fill="#DD7DF7" />
          </g>
          <g filter="url(#filter1_f_2008_87)">
            <circle cx="43" cy="654" r="7" fill="white" />
          </g>
          <g filter="url(#filter2_f_2008_87)">
            <rect x="29" y="1397" width="30" height="23" rx="11.5" fill="#1BFFF1" />
          </g>
          <g filter="url(#filter3_f_2008_87)">
            <circle cx="44" cy="1409" r="7" fill="white" />
          </g>
          <rect x="42" y="685" width="3" height="680" rx="1.5" fill="url(#paint3_linear_2008_87)" />
          <defs>
            <filter id="filter0_f_2008_87" x="0" y="614" width="86" height="79" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="14" result="effect1_foregroundBlur_2008_87" />
            </filter>
            <filter id="filter1_f_2008_87" x="29.2" y="640.2" width="27.6" height="27.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="3.4" result="effect1_foregroundBlur_2008_87" />
            </filter>
            <filter id="filter2_f_2008_87" x="1" y="1369" width="86" height="79" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="14" result="effect1_foregroundBlur_2008_87" />
            </filter>
            <filter id="filter3_f_2008_87" x="30.2" y="1395.2" width="27.6" height="27.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="3.4" result="effect1_foregroundBlur_2008_87" />
            </filter>
            <linearGradient id="paint0_linear_2008_87" x1="1446.43" y1="2899.78" x2="23.335" y2="1416.64" gradientUnits="userSpaceOnUse">
              <stop stopColor="#A371F7" />
              <stop offset="0.00733964" stopColor="#5BF5FF" />
              <stop offset="0.251918" stopColor="#52F5FF" stopOpacity="0" />
              <stop offset="0.325848" stopColor="#25CBFF" />
              <stop offset="0.945217" stopColor="#1AC8FF" />
              <stop offset="1" stopColor="#36CFFF" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint1_linear_2008_87" x1="-85.5733" y1="526.301" x2="426.384" y2="-45.5097" gradientUnits="userSpaceOnUse">
              <stop stopColor="#A371F7" />
              <stop offset="0.00733964" stopColor="#9E72D3" />
              <stop offset="0.251918" stopColor="#6639BA" stopOpacity="0" />
              <stop offset="0.325848" stopColor="#6639BA" />
              <stop offset="0.945217" stopColor="#6639BA" />
              <stop offset="1" stopColor="#6639BA" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint2_linear_2008_87" x1="1.5" y1="0" x2="1.5" y2="416" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D2A8FF" />
              <stop offset="0.1" stopColor="#A371F7" />
              <stop offset="0.688361" stopColor="#4C2E8E" />
              <stop offset="0.932292" stopColor="#6639BA" />
              <stop offset="1" stopColor="#6639BA" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint3_linear_2008_87" x1="43.5" y1="685" x2="43.5" y2="1365" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D2A8FF" />
              <stop offset="0.1" stopColor="#A371F7" />
              <stop offset="0.7" stopColor="#A371F7" />
              <stop offset="0.8" stopColor="#D2A8FF" />
              <stop offset="1" stopColor="#D2A8FF" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
