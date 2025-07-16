"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const packages = [
  {
    title: "Basic Defense",
    description: "For minor legal misunderstandings",
    price: "$275",
    bg: "bg-white/90",
    border: "border-yellow-400",
    titleColor: "text-yellow-900",
    button: {
      base: "bg-yellow-900",
      hover: "hover:bg-yellow-950",
      text: "text-yellow-300",
    },
    list: [
      "**Misdemeanors**, **DUIs**, and small-time trouble",
      "24/7 consultation (burner phone approved)",
      "Negotiation to reduce charges",
      "Official-looking paperwork for peace of mind",
    ],
  },
  {
    title: "Lawsuit Shield",
    description: "When someone sues you, bring me too",
    price: "$515",
    bg: "bg-white/90",
    border: "border-yellow-400",
    titleColor: "text-yellow-900",
    button: {
      base: "bg-yellow-900",
      hover: "hover:bg-yellow-950",
      text: "text-yellow-300",
    },
    list: [
      "Includes all **Basic Defense** features",
      "**Civil** and **contract** dispute representation",
      "Creative legal maneuvers",
      "Court presence that wins respect",
    ],
  },
  {
    title: "No-Questions-Asked Plan",
    description: "For clients who don’t like to explain things",
    price: "Price: Depends on the heat",
    bg: "bg-yellow-100/90",
    border: "border-red-700",
    titleColor: "text-red-700",
    button: {
      base: "bg-red-700",
      hover: "hover:bg-red-800",
      text: "text-white",
    },
    list: [
      "**Full discretion** & alias management",
      "**Background cleanups** (technically speaking)",
      "Access to “external resources”",
      "Flexible meetings: laundromats, deserts, wherever",
      "Bonus: I don’t ask, you don’t lie",
    ],
  },
];

export default function Product() {
  return (
    <section
      className="relative py-20 px-6 bg-cover bg-center"
      style={{
        backgroundImage: "url('/bcs-bg2.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <Card
            key={index}
            className={`flex flex-col justify-between ${pkg.bg} ${pkg.border} border shadow-xl transition duration-300`}
          >
            <div>
              <CardHeader className="pb-3">
                <CardTitle className={`text-2xl font-bold ${pkg.titleColor}`}>
                  {pkg.title}
                </CardTitle>
                <CardDescription className="text-sm text-[#444]">
                  {pkg.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="text-xl font-extrabold text-[#2D2D2D] mb-4">
                  {pkg.price}
                </div>
                <ul className="text-sm text-[#333] space-y-2 leading-relaxed">
                  {pkg.list.map((item, i) => (
                    <li key={i}>
                      <span
                        dangerouslySetInnerHTML={{
                          __html:
                            "• " +
                            item.replace(
                              /\*\*(.*?)\*\*/g,
                              "<strong>$1</strong>"
                            ),
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </CardContent>
            </div>

            <CardFooter className="pt-6 mt-auto">
              <Link
                href="https://wa.me/15055034455"
                target="_blank"
                className="w-full"
              >
                <Button
                  className={`w-full text-sm font-semibold ${pkg.button.base} ${pkg.button.hover} ${pkg.button.text}`}
                >
                  Book Now
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
