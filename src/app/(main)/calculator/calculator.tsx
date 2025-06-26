"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { extractLastOperation } from "@/lib/utils";
import { evaluate } from "mathjs";
import { useState } from "react";

const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const operators = ["+", "-", "*", "/"];
const actions = ["C", "DEL", "=", ...operators, "%"];

const buttonValues = [
    ["C", "%", "DEL", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["+/-", "0", ".", "="],
];

const isNegative = (value: string | number) => Number(value) < 0;
export default function Calculator() {
    const [currentStr, setCurrentStr] = useState<string>("");
    const [result, setResult] = useState<string | undefined>(undefined);

    const handleClick = (value: string) => {
        const { operand, operator } = extractLastOperation(currentStr);
        if ([...digits, "%"].includes(value)) {
            if (result) {
                setResult(undefined);
                setCurrentStr(value);
                return;
            }
            setCurrentStr((prevState) => prevState + value);
        } else if (value === "C") {
            setCurrentStr("");
            setResult(undefined);
        } else if (value === "DEL") {
            setCurrentStr((prevState) => prevState.slice(0, -1));
        } else if (value === "+/-") {
            if (result) {
                isNegative(result) ? setResult(result.slice(1)) : setResult(`-${result}`);
                return;
            }

            const index = currentStr.lastIndexOf(operator + operand);
            if (operand) {
                const start = currentStr.lastIndexOf(operand);
                const newOperand = String(-Number(operand));
                setCurrentStr(currentStr.slice(0, start) + newOperand);
            } else if (currentStr) {
                setCurrentStr(String(-Number(currentStr)));
            }
        } else if (value === "=") {
            try {
                let newStr = null;
                if (result && result !== "Lỗi") {
                    newStr = result + operator + operand;
                    setCurrentStr(newStr);
                }
                const evalResult = evaluate(newStr ?? currentStr);
                setResult(String(evalResult));
            } catch (error) {
                setResult("Lỗi");
            }
        } else {
            if (result) {
                setCurrentStr(result + value);
                return;
            }

            setCurrentStr((prevState) => prevState + value);
        }
    };

    return (
        <Card className="mx-auto w-120 max-w-md my-33">
            <CardHeader>
                <CardTitle className="text-center">Máy tính Linax-1605</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="bg-zinc-600 text-white px-2 py-3 min-h-23  font-semibold rounded-md flex flex-col items-end  gap-2">
                    <p className="opacity-70 min-h-6">{(result && currentStr) || " "}</p>
                    <p className="text-3xl"> {result || currentStr || ""}</p>
                </div>
            </CardContent>
            <CardFooter className="mt-4 grid grid-cols-4 gap-4">
                {buttonValues.flat().map((value) => {
                    const variant = value === "=" ? "destructive" : actions.includes(value) ? "secondary" : "default";
                    return (
                        <Button
                            className="col-span-1 rounded-md py-6 text-xl font-bold"
                            key={value}
                            onClick={() => handleClick(value)}
                            variant={variant as any}
                        >
                            {value === "*" ? "x" : value}
                        </Button>
                    );
                })}
            </CardFooter>
        </Card>
    );
}

// "use client";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { extractLastOperation } from "@/lib/utils";
// import { evaluate } from "mathjs";
// import { useState } from "react";

// const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
// const operators = ["+", "-", "x", "/"];
// const actions = ["C", "DEL", "="];

// const buttonValues = [
//     ["C", "%", "DEL", "/"],
//     ["7", "8", "9", "x"],
//     ["4", "5", "6", "-"],
//     ["1", "2", "3", "+"],
//     ["+/-", "0", ".", "="],
// ];

// export default function Calculator() {
//     const [currentStr, setCurrentStr] = useState<string>("");
//     const [result, setResult] = useState<string | undefined>(undefined);

//     const handleClick = (value: string) => {
//         const { operand, operator } = extractLastOperation(currentStr);
//         if ([...digits, "%"].includes(value)) {
//             setCurrentStr((prevState) => prevState + value);
//         } else if (value === "C") {
//             setCurrentStr("");
//             setResult(undefined);
//         } else if (value === "DEL") {
//             setCurrentStr((prevState) => prevState.slice(0, -1));
//         } else if (value === "+/-") {
//             console.log(operand);
//         } else if (value === "=") {
//             try {
//                 let newStr = null;
//                 if (result) {
//                     newStr = result + operator + operand;
//                     setCurrentStr(newStr);
//                 }
//                 const evalResult = evaluate((newStr || currentStr).replace(/x/g, "*"));
//                 setResult(String(evalResult));
//             } catch (error) {
//                 setResult("Lỗi");
//             }
//         } else {
//             if (result) {
//                 setCurrentStr(result + value);
//                 return;
//             }

//             setCurrentStr((prevState) => prevState + value);
//         }
//     };
//     console.log(currentStr, result);
//     return (
//         <Card className="mx-auto w-120 max-w-md mt-70">
//             <CardHeader>
//                 <CardTitle className="text-center">Máy tính Linax-1605</CardTitle>
//             </CardHeader>
//             <CardContent>
//                 <div className="bg-zinc-600 text-white px-2 py-3 min-h-23  font-semibold rounded-md flex flex-col items-end  gap-2">
//                     <p className="opacity-70 min-h-6">{(result && currentStr) || " "}</p>
//                     <p className="text-3xl"> {result || currentStr || ""}</p>
//                 </div>
//             </CardContent>
//             <CardFooter className="mt-4 grid grid-cols-4 gap-2">
//                 {buttonValues.flat().map((value) => (
//                     <Button className="col-span-1 rounded-full" key={value} onClick={() => handleClick(value)}>
//                         {value}
//                     </Button>
//                 ))}
//             </CardFooter>
//         </Card>
//     );
// }
