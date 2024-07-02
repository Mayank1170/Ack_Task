import React, { useState, useEffect } from 'react';
import About from "@/components/About";
import DashboardCard from "@/components/DashboardCard";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import HomeScrollLineSvg from '../../public/images/backgrounds/HomeScrollLineSvg.svg'

export default function Home() {

  return (
    <div className="flex flex-col justify-center items-center relative overflow-hidden">
      <Header />
      <div><Hero /></div>
      <div className="flex flex-col mt-[130px]"><DashboardCard /></div>
      <div><About /></div>
      <div className="w-[80%] my-[64px] flex items-center justify-center"><FeatureGrid /></div>
      <div className="absolute top-0 left-0 w-1 h-full z-[-1]">
        <HomeScrollLineSvg />
      </div>
    </div>
  );
}
