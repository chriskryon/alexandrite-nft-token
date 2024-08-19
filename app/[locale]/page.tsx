// "use client" q
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import { useTranslations } from "next-intl";
import Head from 'next/head';
import "node_modules/react-modal-video/css/modal-video.css";
import "../../styles/index.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alexandrite Token",
  description: "An unique oportunity to invest in a new token.",
};

function Home() {
  const t = useTranslations('VideoToken');
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video data={{ title: t('title'), videoId: t('videoId') }} />
      {/* <Video /> */}

      {/* <Brands /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
      {/* <Video_2 /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      <Blog />
      {/* <Contact /> */}
    </>
  );
}

export default Home;