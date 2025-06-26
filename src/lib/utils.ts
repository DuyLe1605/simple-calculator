import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const extractLastOperation = (expression: string) => {
    const match = expression.match(/([+\-*/])\s*([\d.]+)\s*$/);

    if (match) {
        return {
            operator: match[1],
            operand: match[2],
        };
    }
    return {
        operator: "",
        operand: expression,
    };
};
