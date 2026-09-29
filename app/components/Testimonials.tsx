import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
});

/**
 * Testimonials (responsive)
 * Pixel-perfect at 1440px. Below that it flows:
 *  < md  : 1 column   |  md : 2 columns   |  lg+ : header row + 3 cards
 * Avatars -> /public/images/testimonials/{sarah,james,alex}.jpg
 */

const items = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/image/testimonial.png",
    quote:
      "“ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.”",
    extra: "",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/image/testimonial.png",
    quote:
      "“I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.”",
    extra: "lg:pb-[39px]",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/image/testimonial.png",
    quote:
      "“As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.”",
    extra: "",
  },
];

export default function Testimonials() {
  return (
    <section
      className={`${poppins.variable} relative w-full overflow-hidden bg-[#FAFBFC] font-[family-name:var(--font-poppins)]`}
    >
      {/* Background blurs */}
      <div className="pointer-events-none absolute left-1/2 top-[-120px] h-[520px] w-[700px] max-w-full -translate-x-[10%] rounded-full bg-[#DDF55A]/70 blur-[110px]" />
      <div className="pointer-events-none absolute right-[-100px] top-[120px] h-[380px] w-[420px] rounded-full bg-[#E4F98A]/60 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-[-150px] left-[-140px] h-[420px] w-[400px] rounded-full bg-[#C4D0F5]/80 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-[-160px] right-[-120px] h-[380px] w-[420px] rounded-full bg-[#E6EBFA] blur-[100px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 pb-16 pt-14 md:px-10 lg:pb-[33px] lg:pt-[61px] xl:pl-[104px] xl:pr-[96px]">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <h2 className="text-[30px] font-semibold leading-[42px] tracking-[-0.005em] text-[#111] sm:text-[36px] sm:leading-[50px] lg:mt-[37px] lg:shrink-0 lg:text-[40px] lg:leading-[56px]">
            Discover What Our
            <br />
            Community Is Saying
          </h2>

          <p className="text-[14px] font-light leading-[26px] text-[#555] sm:text-[15px] sm:leading-[30px] lg:w-[600px] lg:shrink">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:mt-[70px] lg:flex lg:justify-between lg:gap-6">
          {items.map((t) => (
            <article
              key={t.name}
              className={`w-full rounded-[24px] bg-white p-[24px] pb-[28px] shadow-[0_6px_30px_rgba(0,0,0,0.035)] lg:w-auto lg:max-w-[385px] lg:flex-1 lg:pb-[35px] ${t.extra}`}
            >
              <Image
                src={t.avatar}
                alt={t.name}
                width={80}
                height={80}
                className="h-[80px] w-[80px] rounded-full bg-[#E5E7EB] object-cover"
              />
              <h3 className="mt-[24px] text-[20px] font-semibold leading-[30px] text-[#111]">
                {t.name}
              </h3>
              <p className="mt-[5px] text-[14px] font-medium leading-[22px] text-[#0033E6]">
                {t.role}
              </p>
              <p className="mt-[21px] text-[14px] font-normal leading-[29px] text-[#444]">
                {t.quote}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}