"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { renderCanvas } from "@/components/ui/canvas";
import {
  TrendingUp,
  MapPin,
  Shield,
  Smartphone,
  Menu,
  X,
  ArrowUp
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function LandingPage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    renderCanvas();

    // Scroll to top button visibility
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { href: "#home", label: "HOME" },
    { href: "#features", label: "FEATURES" },
    { href: "#team", label: "TEAM" },
    { href: "#info", label: "INFO" },
    { href: "#download", label: "DOWNLOAD" },
  ];

  return (
    <div className="font-sans">
      {/* ==================== HERO SECTION ==================== */}
      <header id="home" className="relative min-h-screen overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#c83023] via-[#d45a33] to-[#c89e68]" />

        {/* Canvas Animation */}
        <canvas
          className="pointer-events-none absolute inset-0 mx-auto z-[5]"
          id="canvas"
        />

        {/* Navigation */}
        <nav className="relative z-20 flex items-center justify-between px-8 md:px-12 py-6">
          <Link href="#home" className="text-4xl md:text-5xl font-black text-white">
            1Ghalon
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white text-sm font-medium hover:opacity-80 transition-opacity"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setMobileNavOpen(true)}
          >
            <Menu />
          </button>
        </nav>

        {/* Mobile Nav Overlay */}
        {mobileNavOpen && (
          <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
            <button
              className="absolute top-6 right-8 text-4xl text-gray-800"
              onClick={() => setMobileNavOpen(false)}
            >
              <X />
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-2xl font-semibold text-gray-800 my-4 hover:text-[#c83023] transition-colors"
                onClick={() => setMobileNavOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-12 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="text-white">
              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                Every cedi <br />
                counts.
              </h1>
              <p className="text-xl md:text-2xl mt-6 mb-10 opacity-90">
                Know the right station before you move.
              </p>
              <Link href="#download">
                <Button
                  className="bg-white text-transparent bg-clip-text font-bold px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                  style={{
                    background: "white",
                  }}
                >
                  <span className="bg-gradient-to-b from-[#d90647] to-[#c89e68] bg-clip-text text-transparent font-bold">
                    Download Now
                  </span>
                </Button>
              </Link>
            </div>

            {/* Right Column - Phone Image */}
            <div className="flex justify-center md:justify-end">
              <Image
                src="/1.png"
                alt="1Ghalon App Screenshot"
                width={400}
                height={800}
                className="max-w-[250px] md:max-w-[400px] drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>



        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-b from-[#c83023] to-[#c89e68] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </header>

      {/* ==================== FEATURES SECTION ==================== */}
      <section id="features" className="py-20 md:py-32 px-8 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Feature 1: Easy Directions */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/features1.png"
                alt="Easy Directions Feature"
                width={500}
                height={400}
                className="max-w-full drop-shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="md:mt-32">
              <h2 className="text-4xl md:text-5xl font-black text-gray-800">
                Easy Directions<span className="bg-gradient-to-b from-[#d90647] to-[#c89e68] bg-clip-text text-transparent">.</span>
              </h2>
              <p className="text-gray-500 text-lg mt-6 leading-relaxed">
                1Ghalon makes it easy to find the nearest and cheapest fuel
                stations in Ghana. Simply open the app, allow location access,
                and it will show you updated fuel prices and clear
                directions to each station. Choose the best route—saving you time and
                money on every trip.
              </p>
            </div>
          </div>

          {/* Feature 2: NPA News */}
          <div className="grid md:grid-cols-2 gap-12 items-center mt-24 md:mt-32">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-black text-gray-800">
                NPA News<span className="bg-gradient-to-b from-[#d90647] to-[#c89e68] bg-clip-text text-transparent">.</span>
              </h2>
              <p className="text-gray-500 text-lg mt-6 leading-relaxed">
                With 1Ghalon, you get real-time updates from the
                National Petroleum Authority (NPA) right in the app.
                Whether it&apos;s changes in fuel prices, new policies,
                or important industry news, 1Ghalon keeps you informed by
                syncing directly with official NPA blog so you never
                miss a critical update.
              </p>
            </div>
            <div className="flex justify-center order-1 md:order-2">
              <Image
                src="/features2.png"
                alt="NPA News Feature"
                width={500}
                height={400}
                className="max-w-full drop-shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TEAM SECTION ==================== */}
      <section id="team" className="py-20 md:py-32 px-8 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 text-center mb-16">
            Behind the App<span className="bg-gradient-to-b from-[#d90647] to-[#c89e68] bg-clip-text text-transparent">.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Development */}
            <div className="group">
              <div className="border border-gray-100 p-8 rounded-2xl relative shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer bg-white">
                <p className="text-gray-500 italic text-lg mb-6 leading-relaxed">
                  &quot;Developed by Daniel Tetteh Partey and Geoffery Agare, with design and product management by Achendo Agency.&quot;
                </p>
                <span className="bg-gradient-to-b from-[#d90647] to-[#c89e68] bg-clip-text text-transparent font-bold text-lg">
                  Development
                </span>
                {/* Arrow */}
                <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white border-r border-b border-gray-100 transform rotate-45" />
              </div>
              <div className="mt-6 ml-4">
                <h4 className="font-bold text-gray-800 text-xl">Achendo</h4>
                <p className="text-gray-500 font-medium">Agency</p>
              </div>
            </div>

            {/* Card 2: Mission */}
            <div className="group">
              <div className="border border-gray-100 p-8 rounded-2xl relative shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer bg-white">
                <p className="text-gray-500 italic text-lg mb-6 leading-relaxed">
                  &quot;Our goal is to make fuel purchasing more transparent and accessible for everyone. Stay on top of fuel prices effortlessly.&quot;
                </p>
                <span className="bg-gradient-to-b from-[#d90647] to-[#c89e68] bg-clip-text text-transparent font-bold text-lg">
                  Mission
                </span>
                <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white border-r border-b border-gray-100 transform rotate-45" />
              </div>
              <div className="mt-6 ml-4">
                <h4 className="font-bold text-gray-800 text-xl">1GHALON</h4>
                <p className="text-gray-500 font-medium">Vision</p>
              </div>
            </div>

            {/* Card 3: Contact */}
            <div className="group">
              <div className="border border-gray-100 p-8 rounded-2xl relative shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer bg-white">
                <p className="text-gray-500 italic text-lg mb-6 leading-relaxed">
                  &quot;For questions regarding privacy or data use, contact us at hi@achendo.com. We are based in Accra, Ghana.&quot;
                </p>
                <span className="bg-gradient-to-b from-[#d90647] to-[#c89e68] bg-clip-text text-transparent font-bold text-lg">
                  Contact
                </span>
                <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white border-r border-b border-gray-100 transform rotate-45" />
              </div>
              <div className="mt-6 ml-4">
                <h4 className="font-bold text-gray-800 text-xl">Support</h4>
                <p className="text-gray-500 font-medium">Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== INFO SECTION ==================== */}
      <section id="info" className="py-20 md:py-32 px-8 md:px-12 bg-gradient-to-b from-[#c83023] via-[#d45a33] to-[#c89e68] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            {/* Left Column - 2 items */}
            <div className="space-y-12 text-left md:text-right order-1 md:order-none pb-8 md:pb-0">
              <div className="group flex items-center md:justify-end gap-6 md:hover:-translate-x-2 transition-transform duration-300">
                <div className="order-2 md:order-1">
                  <h4 className="text-2xl font-bold">Real-time Data</h4>
                  <p className="text-white/90 text-base mt-2 leading-relaxed">
                    Our fuel price information is sourced from CediRates.com, providing you with up-to-date data.
                  </p>
                </div>
                <div className="order-1 md:order-2 flex-shrink-0 bg-white/10 p-4 rounded-full backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                  <TrendingUp className="w-8 h-8" />
                </div>
              </div>

              <div className="group flex items-center md:justify-end gap-6 md:hover:-translate-x-2 transition-transform duration-300">
                <div className="order-2 md:order-1">
                  <h4 className="text-2xl font-bold">Locate Stations</h4>
                  <p className="text-white/90 text-base mt-2 leading-relaxed">
                    Easily find the latest fuel prices and locate the nearest fuel stations with just a few taps.
                  </p>
                </div>
                <div className="order-1 md:order-2 flex-shrink-0 bg-white/10 p-4 rounded-full backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                  <MapPin className="w-8 h-8" />
                </div>
              </div>
            </div>

            {/* Center - Phone Image */}
            <div className="flex justify-center order-2 md:order-none">
              <Image
                src="/2.png"
                alt="1Ghalon App"
                width={325}
                height={650}
                className="max-w-[280px] md:max-w-[325px] md:-mt-24 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

            {/* Right Column - 2 items */}
            <div className="space-y-12 text-left md:text-left order-3 md:order-none">
              <div className="group flex items-center gap-6 hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 bg-white/10 p-4 rounded-full backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                  <Shield className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold">Privacy Focused</h4>
                  <p className="text-white/90 text-base mt-2 leading-relaxed">
                    We collect non-personal data to improve performance. Your data is encrypted and secure.
                  </p>
                </div>
              </div>

              <div className="group flex items-center gap-6 hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 bg-white/10 p-4 rounded-full backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                  <Smartphone className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold">Beta Access</h4>
                  <p className="text-white/90 text-base mt-2 leading-relaxed">
                    Currently available via TestFlight. Join us to help refine the experience for all drivers in Ghana.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DOWNLOAD SECTION ==================== */}
      <section id="download" className="py-20 md:py-32 px-8 md:px-12 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <Image
            src="/app_logo.png"
            alt="1Ghalon Logo"
            width={120}
            height={120}
            className="mx-auto mb-8 hover:rotate-12 transition-transform duration-300"
          />
          <h2 className="text-4xl md:text-6xl font-black text-gray-800 mb-6">
            Download the app<span className="bg-gradient-to-b from-[#d90647] to-[#c89e68] bg-clip-text text-transparent">.</span>
          </h2>
          <p className="text-gray-500 text-xl font-medium mb-12 max-w-2xl mx-auto">
            1Ghalon is a mobile app designed to show fuel prices and
            directions to nearby fuel stations. It sources fuel prices from CediRates.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link href="https://testflight.apple.com/join/3nghdUFJ" target="_blank" className="hover:-translate-y-1 transition-transform">
              <Image
                src="/appstore.png"
                alt="Download on App Store"
                width={180}
                height={60}
                className="h-[60px] w-auto drop-shadow-md hover:drop-shadow-xl transition-all"
              />
            </Link>
            <Link href="https://play.google.com/store/apps/details?id=com.achendo.one_ghalon" target="_blank" className="hover:-translate-y-1 transition-transform">
              <Image
                src="/playstore.png"
                alt="Get it on Google Play"
                width={180}
                height={60}
                className="h-[60px] w-auto drop-shadow-md hover:drop-shadow-xl transition-all"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="py-12 px-8 md:px-12 bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-center">
          <ul className="flex flex-wrap justify-center gap-6 md:gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-600 text-sm font-medium hover:text-[#c83023] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}
