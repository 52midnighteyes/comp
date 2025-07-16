"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    //master container
    <div className="min-w-screen flex items-center justify-between min-h-[75px] px-[25px] bg-[#FFD700]">
      <div>
        <div>
          <Image
            src="/better_callsaul.svg.png"
            alt="logo-los-pollos-hermanos"
            width={50}
            height={50}
            className=" drop-shadow-white drop-shadow-2xl"
          />
        </div>
      </div>
      <div className="flex gap-[20px] font-bold text-[14px]">
        <Link href="/">About Us</Link>
        <Link href="/">Teams</Link>
        <Link href="/">Services</Link>
        <Link href="/">Blog</Link>
      </div>

      <div className="min-w-[160px] flex justify-between items-center ">
        <Button>
          <Link href="/auth/login">Log In</Link>
        </Button>
        <Button>
          <Link href="/auth/registe">Sing Up</Link>
        </Button>
      </div>
    </div>
  );
}
