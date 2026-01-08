"use client";

import { useEffect } from "react";
import Link from "next/link";
import { renderCanvas } from "@/components/ui/canvas";
import { ArrowRight, Fuel, MapPin, TrendingUp, Shield } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Hero() {
    useEffect(() => {
        renderCanvas();
    }, []);

    return (
        <section id="home" className="relative min-h-screen overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#c83023] via-[#d45a33] to-[#c89e68]" />

            {/* Content */}
            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
                {/* Badge */}
                <div className="mb-6 mt-10 sm:justify-center md:mb-4 md:mt-20">
                    <div className="relative flex items-center whitespace-nowrap rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm leading-6 text-white/90">
                        <Fuel className="h-4 w-4 mr-2" /> Save money on every fuel stop
                        <Link
                            href="#download"
                            className="ml-2 flex items-center font-semibold text-white hover:text-white/80 transition-colors"
                        >
                            Download App
                            <ArrowRight className="h-4 w-4 ml-1" />
                        </Link>
                    </div>
                </div>

                {/* Main Content Box */}
                <div className="mb-10 mt-4 md:mt-6">
                    <div className="px-2">
                        <div className="relative mx-auto h-full max-w-5xl border border-white/20 p-8 md:px-16 md:py-16 backdrop-blur-sm bg-white/5 rounded-2xl">
                            {/* Corner Plus Icons */}
                            <div className="absolute -left-3 -top-3 h-6 w-6 flex items-center justify-center">
                                <span className="text-white/60 text-2xl font-light">+</span>
                            </div>
                            <div className="absolute -bottom-3 -left-3 h-6 w-6 flex items-center justify-center">
                                <span className="text-white/60 text-2xl font-light">+</span>
                            </div>
                            <div className="absolute -right-3 -top-3 h-6 w-6 flex items-center justify-center">
                                <span className="text-white/60 text-2xl font-light">+</span>
                            </div>
                            <div className="absolute -bottom-3 -right-3 h-6 w-6 flex items-center justify-center">
                                <span className="text-white/60 text-2xl font-light">+</span>
                            </div>

                            {/* Headline */}
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none">
                                Every cedi <br className="hidden md:block" />
                                counts<span className="text-[#c89e68]">.</span>
                            </h1>

                            {/* Status Indicator */}
                            <div className="flex items-center justify-center gap-2 mt-6">
                                <span className="relative flex h-3 w-3 items-center justify-center">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
                                </span>
                                <p className="text-sm text-green-400 font-medium">Available Now</p>
                            </div>
                        </div>
                    </div>

                    {/* Subheadline */}
                    <p className="mt-10 text-xl md:text-2xl text-white font-medium">
                        Know the right station before you move.
                    </p>

                    {/* Description */}
                    <p className="mx-auto mb-10 mt-4 max-w-2xl px-6 text-base md:text-lg text-white/70">
                        Find the nearest and cheapest fuel stations in Ghana.
                        Real-time prices from CediRates, clear directions to every station.
                    </p>

                    {/* Feature Pills */}
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        <div className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm text-white/90">
                            <MapPin className="h-4 w-4" />
                            Easy Directions
                        </div>
                        <div className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm text-white/90">
                            <TrendingUp className="h-4 w-4" />
                            Live Prices
                        </div>
                        <div className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm text-white/90">
                            <Shield className="h-4 w-4" />
                            Privacy Focused
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="#download">
                            <Button
                                variant="default"
                                size="lg"
                                className="bg-white text-[#c83023] hover:bg-white/90 font-bold px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                            >
                                Download Now
                            </Button>
                        </Link>
                        <Link href="#features">
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full backdrop-blur-sm"
                            >
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Canvas Animation */}
            <canvas
                className="pointer-events-none absolute inset-0 mx-auto z-5"
                id="canvas"
            ></canvas>

            {/* Bottom Shape Divider */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
                <svg
                    className="relative block w-full h-[100px]"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                        className="fill-white"
                    ></path>
                </svg>
            </div>
        </section>
    );
}
