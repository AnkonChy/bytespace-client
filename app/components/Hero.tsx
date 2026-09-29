import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full h-screen bg-primary-blue hero-grid-bg overflow-hidden">

            <div className="absolute top-[25%] -left-6 w-[180px] h-[250px] z-[1]">
                <Image
                    src="/image/Mask Group.png"
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden="true"
                />
            </div>

            <div className="absolute top-[25%] -right-23 w-[370px] h-[320px] z-[1]">
                <Image
                    src="/image/mg.png"
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden="true"
                />
            </div>

            <div className="hidden md:block absolute top-[48%] left-[15%] w-[160px] h-[160px] z-[2]">
                <Image
                    src="/image/Frame.png"
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden="true"
                />
            </div>

            <div className="absolute bottom-[1%] right-[19%] w-[250px] h-[250px] z-[2]">
                <Image
                    src="/image/Mask Group (1).png"
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden="true"
                />
            </div>

            <div className="absolute top-[49%] right-[16%] w-[120px] h-[120px] z-[2]">
                <Image
                    src="/image/Cone.png"
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden="true"
                />
            </div>

            <div className="hidden md:block absolute bottom-[1%] left-[21%] w-[220px] h-[220px] z-[11]">
                <Image
                    src="/image/Cone2.png"
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden="true"
                />
            </div>

            <div className="relative z-10 flex flex-col items-center h-full pt-28">

                <h1 className="text-white text-4xl md:text-5xl lg:text-[72px] font-semibold leading-[1.1] text-center max-w-4xl mx-auto px-4 tracking-tight">
                    Get Access to Hundreds
                    <br />
                    Courses Available
                </h1>


                <p className="text-white/60 text-[13px] md:text-lg text-center mt-3 px-4 leading-relaxed font-satoshi">
                    Unlock your creativity, gain valuable knowledge, and grow your
                    business with our wide range of courses.
                </p>

                <div className="mt-6 flex items-center gap-5 w-[90%] max-w-xl">
                    <div className="flex items-center gap-2.5 flex-1 bg-white rounded-full pl-6  py-2.5">
                        <Image
                            src="/image/search.png"
                            alt="ByteSpace logo"
                            width={28}
                            height={28}
                            className="w-4 h-4 object-contain"
                        />
                        <input
                            type="text"
                            placeholder="Course, topic, creator"
                            className="flex-1 text-gray-600 placeholder-[#82868E] font-satoshi outline-none bg-transparent"
                        />
                    </div>
                    <button className="bg-secondary-green hover:bg-[#1510c0] text-[13px] font-satoshi font-semibold px-5 py-2.5 rounded-full transition-colors cursor-pointer border border-[#3330ff]">
                        Search
                    </button>
                </div>


                <div className="relative w-full max-w-6xl flex-1 mt-4 mx-auto">

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[550px] h-[280px] md:w-[710px] md:h-[320px] z-[1]">
                        <Image
                            src="/image/Ellipse 7.png"
                            alt=""
                            fill
                            className="object-contain object-bottom"
                            aria-hidden="true"
                        />
                    </div>

                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[300px] h-[380px] md:w-[360px] md:h-[420px] z-[5]">
                        <Image
                            src="/image/hero.png"
                            alt="Student with headphones and laptop"
                            fill
                            className="object-contain object-bottom"
                            priority
                        />
                    </div>




                    <div className="absolute left-[2%] md:left-[28%] bottom-[60%] z-[11] bg-white rounded-xl px-3 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.12)] min-w-[175px]">
                        <div className="flex items-center gap-2.5">
                            <div>
                                <p className="font-semibold text-gray-900 leading-tight">
                                    UI/UX Design
                                </p>
                                <p className="text-[10px] text-gray-400 mt-0.5">
                                    200 Courses • 1000+ Students
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="absolute right-[2%] md:right-[32.5%] bottom-[52%] z-[6] bg-white rounded-xl pr-4 pl-2 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                        <p className="text-sm font-satoshi text-[#242528] mb-1">
                            Learning Progress
                        </p>

                        <span className="text-[26px] font-bold text-gray-900 leading-none">
                            55%
                        </span>
                        <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden mt-1">
                            <div
                                className="h-full bg-secondary-green rounded-full"
                                style={{ width: "55%" }}
                            />
                        </div>
                    </div>

                    <div className="absolute left-[0%] md:left-[29%] bottom-[10%] z-[6] bg-white rounded-xl px-3 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                        <p className="text-sm font-satoshi text-gray-900">
                            Happy Students
                        </p>
                        <div className="flex items-center gap-1.5 mt-0.5">
                            <span className="text-[11px] text-gray-600 font-satoshi">4.5</span>
                            <span className="text-[11px] text-gray-400">(240)</span>
                            <span className="text-secondary-green text-xs">★</span>
                        </div>
                        <div className="flex items-center mt-2">
                            <div className="flex -space-x-2">
                                <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden">
                                    <Image
                                        src="/image/student1.png"
                                        alt="Student"
                                        width={28}
                                        height={28}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden">
                                    <Image
                                        src="/image/student2.png"
                                        alt="Student"
                                        width={28}
                                        height={28}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden">
                                    <Image
                                        src="/image/student2.png"
                                        alt="Student"
                                        width={28}
                                        height={28}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden">
                                    <Image
                                        src="/image/student1.png"
                                        alt="Student"
                                        width={28}
                                        height={28}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden">
                                    <Image
                                        src="/image/student2.png"
                                        alt="Student"
                                        width={28}
                                        height={28}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden">
                                    <Image
                                        src="/image/student2.png"
                                        alt="Student"
                                        width={28}
                                        height={28}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden">
                                    <Image
                                        src="/image/student2.png"
                                        alt="Student"
                                        width={28}
                                        height={28}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="bg-secondary-green text-[10px] font-satoshi w-7 h-7 rounded-full border-2 border-white overflow-hidden flex items-center justify-center">
                                    2K+
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
