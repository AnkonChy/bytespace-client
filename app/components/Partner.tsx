import Image from "next/image";

const partners = [
  { id: 1, src: "/image/partners/partner1.png", alt: "Partner 1", width: 208, height: 50 },
  { id: 2, src: "/image/partners/partner2.png", alt: "Partner 2", width: 208, height: 50 },
  { id: 3, src: "/image/partners/partner3.png", alt: "Partner 3", width: 208, height: 50 },
  { id: 4, src: "/image/partners/partner4.png", alt: "Partner 4", width: 208, height: 50 },
  { id: 4, src: "/image/partners/partner5.png", alt: "Partner 5", width: 208, height: 50 },
];

export default function Partner() {
  return (
    <section
      aria-label="Trusted by"
      className="flex w-full items-center justify-center bg-[#F5F5F6] px-6 py-14 sm:py-[72px] lg:h-[202px] lg:py-0"
    >
      <ul className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center justify-items-center gap-x-6 gap-y-10 sm:grid-cols-5">
        {partners.map((partner) => (
          <li key={partner.id} className="flex min-w-0 max-w-full items-center justify-center">
            <Image
              src={partner.src}
              alt={partner.alt}
              width={partner.width}
              height={partner.height}
              className="w-41.75 ]object-contain"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}