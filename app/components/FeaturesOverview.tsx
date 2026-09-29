import Image from "next/image";
import { Outfit, Figtree } from "next/font/google";
import ScaleBox from "./scale";
import { IoCheckmarkCircle } from "react-icons/io5";



const outfit = Outfit({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-outfit" });
const figtree = Figtree({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-figtree" });

/**
 * FeaturesOverview (responsive)
 * Pixel-perfect at 1440px. Text flows normally; the two image clusters are
 * fixed-size "stages" (ScaleBox) that shrink proportionally on small screens.
 *
 * Images in /public/images: man.png (515x507), woman.png (365x560),
 * course.jpg (341x195), avatars/1..6.jpg
 */

const BLUE = "#0033E6";
const LIME = "#C8F00F";

// const Spring = ({ className = "" }: { className?: string }) => (
//   <svg viewBox="0 0 124 164" className={className} fill="none" style={{ filter: "drop-shadow(0 10px 14px rgba(120,160,0,.25))" }}>
//     <defs>
//       <linearGradient id="spr" x1="0" y1="0" x2="1" y2="1">
//         <stop offset="0" stopColor="#D9FF2A" />
//         <stop offset="1" stopColor="#B4EB00" />
//       </linearGradient>
//     </defs>
//     <path d="M22 22 C60 6 100 12 96 26 C92 40 30 44 28 60 C26 76 104 70 100 88 C96 106 30 100 30 118 C30 136 92 132 92 146" stroke="url(#spr)" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );

// const CheckIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
//     <circle cx="10" cy="10" r="10" fill={BLUE} />
//     <path d="M5.6 10.4l3 3 5.8-6.4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );

// const StarIcon = () => (
//   <svg width="14" height="14" viewBox="0 0 24 24" fill={LIME}>
//     <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
//   </svg>
// );

const stats = [
    { value: "12K", label: "Students" },
    { value: "70+", label: "Courses" },
    { value: "16", label: "Creators" },
];

const benefits = ["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"];

const h2 = "font-[family-name:var(--font-outfit)] text-[32px] font-semibold leading-[40px] tracking-[-0.01em] sm:text-[38px] sm:leading-[46px] lg:text-[44px] lg:leading-[53px]";
const para = "text-[15px] leading-[27px] text-[#5B5B5B] lg:text-[16px] lg:leading-[29px]";

/* ───────────── Stage 1 : course card + man (578 x 551) ───────────── */
function LearnerStage() {
    return (
        <ScaleBox width={578} height={551} align="end">
            <div className="absolute left-0 top-0 z-10 h-[383px] w-[371px] rounded-[24px] border border-[#E5E7EB] bg-white">
                <div className="absolute left-[14px] top-[14px] h-[195px] w-[341px] overflow-hidden rounded-[16px] bg-[#CBD5E1]">
                    <Image src="/image/courses/course1.jpg" alt="Learn Figma" fill sizes="341px" className="object-cover" />
                    <span className="absolute left-[12px] top-[153px] flex h-[29px] items-center rounded-full bg-[#9CA3AF]/60 px-[12px] text-[12px] text-[#4B5563] backdrop-blur-sm">17 Lessons</span>
                    <span className="absolute left-[105px] top-[153px] flex h-[29px] items-center whitespace-nowrap rounded-full bg-[#9CA3AF]/60 px-[12px] text-[12px] text-[#4B5563] backdrop-blur-sm">2 hours 16 mins</span>
                </div>
                <h3 className="absolute left-[15px] top-[230px] whitespace-nowrap font-[family-name:var(--font-outfit)] text-[20px] font-semibold leading-[28px]">Learn Figma from Basic</h3>
                <p className="absolute left-[15px] top-[262px] text-[12px] leading-[16px] text-[#555]">by <span style={{ color: BLUE }}>purepearl studio</span></p>
                <span className="absolute left-[15px] top-[296px] flex h-[31px] w-[97px] items-center gap-[6px] rounded-full bg-[#F1F2F4] pl-[14px] text-[12px] font-medium text-[#333]">
                    {/* <svg width="12" height="12" viewBox="0 0 12 12" fill="#333"><rect x="1" y="6" width="2" height="5" rx="1" /><rect x="5" y="3" width="2" height="8" rx="1" /><rect x="9" y="1" width="2" height="10" rx="1" /></svg> */}
                    Beginner
                </span>
                <span className="absolute left-[140px] top-[296px] h-[31px] w-[32px] rounded-full bg-[#F8B4C0]" />
                <p className="absolute left-[15px] top-[343px] text-[20px] font-bold leading-[24px]" style={{ color: BLUE }}>
                    $25<span className="text-[12px] font-normal text-[#666]">/lifetime</span>
                </p>
            </div>

            <Image src="/image/hero.png" alt="" width={515} height={507} priority className="absolute left-[40px] top-[4px] z-20 h-[507px] w-[515px] object-contain" style={{ filter: "drop-shadow(0 30px 40px rgba(0,0,0,.18))" }} />
            <div className="hidden md:block absolute top-[12%] -right-14 w-[215px] h-[215px] z-32">
                <Image
                    src="/image/iconpath.png"
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden="true"
                />
            </div>

            <div className="absolute left-[350px] top-[200px] z-30 h-[138px] w-[232px] rounded-[16px] bg-white shadow-[0_10px_30px_rgba(0,0,0,.06)]">
                <p className="absolute left-[16px] top-[17px] text-[14px] leading-[20px] text-[#222]">Learning Progress</p>
                <p className="absolute left-[16px] top-[44px] font-[family-name:var(--font-outfit)] text-[48px] font-semibold leading-[60px]">55%</p>
                <div className="absolute left-[16px] top-[114px] h-[8px] w-[200px] rounded-full bg-[#F0F0F0]">
                    <div className="h-full w-[112px] rounded-full" style={{ background: LIME }} />
                </div>
            </div>


            {/* <Spring className="absolute left-[449px] top-[89px] z-40 h-[168px] w-[128px]" /> */}
        </ScaleBox>
    );
}

/* ───────────── Stage 2 : revenue cards + woman (541 x 560) ───────────── */
function CreatorStage() {
    return (
        <ScaleBox width={541} height={560} align="start">
            <div className="absolute left-0 top-[8px] z-10 h-[119px] w-[260px] rounded-[12px] bg-primary-blue">
                <p className="absolute left-[16px] top-[16px] text-[16px] leading-[20px] text-white">Total Revenue</p>
                <p className="absolute left-[16px] top-[35px] text-[10px] leading-[12px] text-white/80">July 1-28</p>
                <p className="absolute left-[16px] top-[55px] font-[family-name:var(--font-outfit)] text-[24px] font-semibold leading-[30px] text-white">$120.29</p>
                <div className="absolute left-[16px] top-[95px] h-[8px] w-[150px] rounded-full bg-white/80">
                    <div className="h-full w-[111px] rounded-full" style={{ background: LIME }} />
                </div>
            </div>

            <div className="absolute left-0 top-[158px] z-10 h-[135px] w-[134px] rounded-[12px] bg-primary-blue">
                <p className="absolute left-[16px] top-[17px] text-[16px] leading-[20px] text-white">Year to Date</p>
                <p className="absolute left-[16px] top-[35px] text-[10px] leading-[12px] text-white/80">2023</p>
                <p className="absolute left-[16px] top-[55px] whitespace-nowrap font-[family-name:var(--font-outfit)] text-[24px] font-semibold leading-[30px] text-white">$1,200.38</p>
                <span className="absolute left-[16px] top-[96px] flex h-[21px] w-[38px] items-center justify-center rounded-full text-[10px] font-medium text-[#1A1A1A]" style={{ background: LIME }}>+12$</span>
            </div>

            <Image src="/image/femalehero.png" alt="" width={365} height={560} className="absolute left-[20px] -top-4 z-20  h-[507px] w-[515px] object-contain" style={{ filter: "drop-shadow(0 30px 40px rgba(0,0,0,.18))" }} />
            <div className="hidden md:block absolute top-[3%] right-14 w-[215px] h-[215px] z-32">
                <Image
                    src="/image/iconpath2.png"
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden="true"
                />
            </div>


            {/* <Spring className="absolute left-[331px] top-[110px] z-30 h-[160px] w-[152px] rotate-[-38deg]" /> */}

            <div className="absolute left-[0%] md:left-[283px] top-[277px] z-[21] bg-white rounded-xl px-3 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
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
        </ScaleBox>
    );
}

export default function FeaturesOverview() {
    return (
        <section className={`${outfit.variable} ${figtree.variable} relative w-full overflow-hidden bg-[#F9FAFB] font-[family-name:var(--font-figtree)] text-[#1A1A1A]`}>
            {/* Background blurs */}
            <div className="pointer-events-none absolute left-[60px] top-[-140px] h-[560px] w-[620px] max-w-full rounded-full bg-[#E4F76A]/70 blur-[110px]" />
            <div className="pointer-events-none absolute right-[-120px] top-[-100px] h-[460px] w-[520px] rounded-full bg-[#E3E7FB] blur-[110px]" />
            <div className="pointer-events-none absolute left-[-160px] top-[35%] h-[420px] w-[420px] rounded-full bg-[#CBD5F6]/80 blur-[110px]" />
            <div className="pointer-events-none absolute bottom-[-160px] left-[-180px] h-[460px] w-[460px] rounded-full bg-[#DFF52B]/80 blur-[110px]" />
            <div className="pointer-events-none absolute bottom-[-180px] right-[-140px] h-[520px] w-[620px] rounded-full bg-[#B9C7F2]/90 blur-[120px]" />

            <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 xl:pl-[121px] xl:pr-[105px]">
                {/* ═════ Block 1 ═════ */}
                <div className="grid grid-cols-1 items-center gap-12 py-14 lg:grid-cols-2 lg:gap-0 lg:pb-[58px] lg:pt-[121px]">
                    <div>
                        <h2 className={h2}>
                            Your Path to Professional<br className="hidden sm:block" /> Growth Starts Here!
                        </h2>
                        <p className={`${para} mt-6 max-w-[490px] lg:mt-[41px]`}>
                            Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
                        </p>
                        <div className="mt-8 flex gap-x-[57px] lg:mt-[40px]">
                            {stats.map((s) => (
                                <div key={s.label}>
                                    <div className="font-[family-name:var(--font-outfit)] text-[32px] font-medium leading-[44px] lg:text-[36px]" style={{ color: BLUE }}>{s.value}</div>
                                    <div className="mt-[2px] text-[16px] leading-[24px] text-[#2B2B2B]">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <LearnerStage />
                </div>

                {/* ═════ Block 2 ═════ */}
                <div className="grid grid-cols-1 items-center gap-12 pb-16 pt-6 lg:grid-cols-2 lg:gap-0 lg:pb-[120px] lg:pt-[50px]">
                    <div className="lg:order-2 lg:ml-[13px]">
                        <h2 className={h2}>
                            Create &amp; Manage<br className="hidden sm:block" /> Courses Easily.
                        </h2>
                        <p className={`${para} mt-6 max-w-[560px] lg:mt-[40px]`}>
                            <strong className="font-semibold text-[#1A1A1A]">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
                        </p>
                        <ul className="m-0 mt-6 list-none p-0 pl-[2px] lg:mt-[38px]">
                            {benefits.map((b) => (
                                <li key={b} className="flex h-[40px] items-center font-satoshi gap-[10px]">
                                    {/* <CheckIcon /> */}
                                    <span className="text-[20px] flex  items-center gap-1 font-medium leading-[24px] text-[#222]"> <IoCheckmarkCircle className="fill-primary-blue"/>{b}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:order-1">
                        <CreatorStage />
                    </div>
                </div>
            </div>
        </section>
    );
}