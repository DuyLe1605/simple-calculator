import Calculator from "@/app/(main)/calculator/calculator";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Calculator",
    description: "Ứng dụng máy tính đơn giản được xây dựng với Next.js và React",
};

export default function CalculatorPage() {
    return <Calculator />;
}
