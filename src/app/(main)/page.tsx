import { BackgroundLines } from "@/components/ui/background-lines";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
    return (
        <div>
            <BackgroundLines className="md:h-[85vh] flex items-center justify-center w-full flex-col px-4 relative">
                <h2 className=" bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                    Simple Calculator
                </h2>
                <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
                    Chào mừng đến với ứng dụng máy tính cơ bản của Duy Lee. <br /> Đây là dự án mình làm bằng NextJs và
                    Shadcn UI
                </p>
                <Link href="/calculator" className="mt-6 cursor-pointer z-20 relative">
                    <Button className="cursor-pointer ">Tính toán ngay </Button>
                </Link>
            </BackgroundLines>
        </div>
    );
}
