import Image from "next/image";

export default function Creator() {
    return (
        <section className="relative w-full h-100 bg-primary-blue hero-grid-bg overflow-hidden">

            <div className="absolute -top-[25%] -left-1 w-[180px] h-[250px] z-[1]">
                <Image
                    src="/image/Mask Group.png"
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden="true"
                />
            </div>

            <div className="absolute top-[2%] -right-25 w-[370px] h-[320px] z-[1]">
                <Image
                    src="/image/m.png"
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden="true"
                />
            </div>

            <div className="hidden md:block absolute top-[4%] left-[15%] w-[160px] h-[160px] z-[2]">
                <Image
                    src="/image/Frame.png"
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden="true"
                />
            </div>

            <div className="absolute -bottom-[27%] right-0 w-[250px] h-[250px] z-[2]">
                <Image
                    src="/image/iconpath.png"
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden="true"
                />
            </div>

            <div className="absolute top-[2%] right-[10%] w-[188px] h-[188px] z-[2]">
                <Image
                    src="/image/greentriangle.png"
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden="true"
                />
            </div>

            <div className="hidden md:block absolute -bottom-13 left-[3%] w-[220px] h-[220px] z-[11]">
                <Image
                    src="/image/Cone3.png"
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden="true"
                />
            </div>
            <div className="hidden md:block absolute bottom-5 -left-[2%] w-[188px] h-[188px] z-[11]">
                <Image
                    src="/image/Cone4.png"
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden="true"
                />
            </div>

            <div className="relative z-10 flex flex-col items-center h-full pt-28">

                <h1 className="text-white text-4xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] text-center max-w-6xl mx-auto px-4 tracking-tight">
                    Unlock Your Potential as a
                    <br />
                    Creator with ByteSpace
                </h1>


                <p className="text-white/60 text-[13px] md:text-lg text-center mt-3 px-4 leading-relaxed font-satoshi">
                    Unlock your creativity, gain valuable knowledge, and grow your
                    business with our wide range of courses.
                </p>
                <button className="bg-secondary-green hover:bg-[#1510c0] text-[13px] font-satoshi hover:text-white font-semibold px-5 py-2.5 rounded-full transition-colors cursor-pointer border border-[#3330ff] my-4">
                    Join as Creator
                </button>
            </div>
        </section>
    );
}
