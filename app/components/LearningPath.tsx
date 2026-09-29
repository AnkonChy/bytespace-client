import React from "react";
import { TbPencil, TbCode, TbDeviceLaptop, TbBuildingStore, TbVolume, TbCamera } from "react-icons/tb";
import { FaLaptop } from "react-icons/fa6";
export default function LearningPath() {
  const categories = [
    { name: "Design", icon: TbPencil },
    { name: "Development", icon: TbCode },
    { name: "IT & Software", icon: FaLaptop  },
    { name: "Business", icon: TbBuildingStore },
    { name: "Marketing", icon: TbVolume },
    { name: "Photography", icon: TbCamera },
  ];

  return (
    <section className="w-full bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900 tracking-tight leading-tight">
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className="mt-4 text-gray-500 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various fields, ensuring there&apos;s
          something for everyone. Unleash your potential and explore our
          carefully curated categories.
        </p>

        {/* Categories Grid */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-7">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col items-center justify-center py-8  rounded-3xl border border-[#CED0D3] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                {/* Lime Circle Icon Background */}
                <div className="w-16 h-16 rounded-full bg-secondary-green flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <Icon className="text-2xl text-gray-900" />
                </div>
                <p className="font-semibold text-gray-900 text-sm md:text-lg group-hover:text-[#1B19E6] transition-colors">
                  {cat.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
