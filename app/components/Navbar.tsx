import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-1 left-0 w-full z-50">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-8 lg:px-16 py-5">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <Image
              src="/Image/logo.png"
              alt="ByteSpace logo"
              width={28}
              height={28}
              className="w-7 h-7 object-contain"
            />
            <span className="text-white text-2xl font-bold tracking-tight font-clash">
              ByteSpace
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="relative text-white font-satoshi font-bold"
          >
            Home
          </Link>
          <Link
            href="/courses"
            className="text-white font-satoshi hover:text-lime-accent transition-colors"
          >
            Courses
          </Link>
          <Link
            href="/creators"
            className="text-white font-satoshi hover:text-lime-accent transition-colors"
          >
            Creators
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/signin"
            className="text-white font-satoshi hover:text-lime-accent transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/joinus"
            className="text-white font-satoshi hover:text-lime-accent transition-colors"
          >
            Join Us
          </Link>
          <Link
            href="/cart"
            className="text-white hover:text-lime-accent transition-colors"
          >
            <Image
              src="/Image/navicon.png"
              alt="ByteSpace logo"
              width={28}
              height={28}
              className="w-4 h-4 object-contain"
            />
          </Link>
        </div>

        <button className="md:hidden text-white">
          <Image
            src="/Image/navicon.png"
            alt="ByteSpace logo"
            width={28}
            height={28}
            className="w-4 h-4 object-contain"
          />
        </button>
      </div>
    </nav>
  );
}
