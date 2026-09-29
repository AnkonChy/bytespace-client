import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FiBarChart2 } from "react-icons/fi";
import SectionHeader from "./ui/SectionHeader";
import { HiChartBar } from "react-icons/hi";

export default function Courses() {
    const categories = [
        { name: "Featured", active: true },
        { name: "Music", active: false },
        { name: "Drawing & Painting", active: false },
        { name: "Marketing", active: false },
        { name: "Animation", active: false },
        { name: "Social Media", active: false },
        { name: "UI/UX Design", active: false },
        { name: "Creative Marketing", active: false },
        { name: "Digital Illustration", active: false },
        { name: "Film & Video", active: false },
        { name: "Crafts", active: false },
        { name: "Freelance & Entrepreneurship", active: false },
        { name: "Graphic Design", active: false },
        { name: "Photography", active: false },
        { name: "Productivity", active: false },
        { name: "Web Development", active: false },
        { name: "Data Science", active: false },
        { name: "Cooking", active: false },
    ];

    const courses = [
        {
            title: "Learn Figma from Basic",
            rating: "4.5",
            author: "purepearl studio",
            level: "Beginner",
            price: "$25",
            image:
                "/image/Courses/course1.jpg",
        },
        {
            title: "Build Digital Asset",
            rating: "4.5",
            author: "purepearl studio",
            level: "Beginner",
            price: "$25",
            image:
                "/image/Courses/course1.jpg",
        },
        {
            title: "the Power of Big Data",
            rating: "4.5",
            author: "purepearl studio",
            level: "Beginner",
            price: "$25",
            image:
                "/image/Courses/course1.jpg",
        },
        {
            title: "Balancing Productivity an...",
            rating: "4.5",
            author: "purepearl studio",
            level: "Beginner",
            price: "$25",
            image:
                "/image/Courses/course1.jpg",
        },
        {
            title: "Mastering Money Manage...",
            rating: "4.5",
            author: "purepearl studio",
            level: "Beginner",
            price: "$25",
            image:
                "/image/Courses/course1.jpg",
        },
        {
            title: "From Idea to Startup Succ...",
            rating: "4.5",
            author: "purepearl studio",
            level: "Beginner",
            price: "$25",
            image:
                "/image/Courses/course1.jpg",
        },
    ];

    return (
        <section className="w-full bg-white py-16 lg:py-24 border-t border-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Header */}
                <SectionHeader
                    title={["Discover Your Passion,", "Build Your Skills"]}
                    description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
                />

                {/* Filter Pills */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 max-w-5xl mx-auto">
                    {categories.map((cat, idx) => (
                        <button
                            key={idx}
                            className={`px-4.5 py-2.5 rounded-full text-xs md:text-base font-satoshi transition-all duration-200 ${cat.active
                                ? "bg-secondary-green text-gray-900 font-semibold shadow-sm"
                                : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-gray-200/80"
                                }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                    <button className="text-xs md:text-sm font-satoshi text-primary-blue hover:underline px-2 py-2">
                        + More
                    </button>
                </div>

                {/* Course Cards Grid */}
                <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, idx) => (
                        <div
                            key={idx}
                            className="group bg-white rounded-3xl p-4 border border-[#CED0D3] shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between"
                        >
                            {/* Image Container with Overlay Badges */}
                            <div>
                                <div className="relative w-full h-52 rounded-2xl overflow-hidden bg-gray-100">
                                    <Image
                                        src={course.image}
                                        alt={course.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Bottom Image Badges overlay */}
                                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-1.5">
                                        {["17 Lessons", "2 hours 16 mins", "59 Comments"].map((item) => (
                                            <span
                                                key={item}
                                                className="bg-white/60 backdrop-blur-md rounded-full px-3 py-1.5 shadow-sm border border-white/40 text-[10px] md:text-[11px] font-medium text-[#4F4F4F] whitespace-nowrap"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Card Title & Rating */}
                                <div className="mt-4 flex items-start justify-between gap-2 px-1">
                                    <h3 className="font-semibold text-gray-900 text-base md:text-xl leading-snug line-clamp-1">
                                        {course.title}
                                    </h3>
                                    <div className="flex items-center gap-1 shrink-0 text-[#4F4F4F] text-lg font-medium mt-0.5">
                                        <span>{course.rating}</span>
                                        <FaStar className="text-[#CED0D3] text-lg" />
                                    </div>
                                </div>

                                {/* Author */}
                                <p className="px-1 text-xs font-medium mt-1">
                                    by <span className="text-primary-blue">{course.author}</span>
                                </p>

                                {/* Level Badge & Avatar Stack */}
                                <div className="mt-4 flex items-center gap-1 px-1">
                                    <div className="inline-flex items-center gap-1.5 bg-[#F5F5F6] px-3.5 py-2 rounded-full text-xs text-[#4B4C53] font-medium">
                                        <HiChartBar className="text-[#4B4C53] text-sm" />
                                        <span className="text-sm">{course.level}</span>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="flex -space-x-2">
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
                                            <div className="bg-secondary-green text-[10px] font-satoshi w-7 h-7 rounded-full border-2 border-white overflow-hidden flex items-center justify-center">
                                                26+
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Price Row */}
                            <div className="mt-5 pt-3 border-gray-100 flex items-baseline gap-1 px-1">
                                <span className="text-xl font-bold text-primary-blue">
                                    {course.price}
                                </span>
                                <span className="text-xs text-gray-400 font-normal">
                                    /lifetime
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
