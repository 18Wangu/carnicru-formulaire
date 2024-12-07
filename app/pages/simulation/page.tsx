"use client";

// components/SimulationQuestion.tsx
import { useState } from "react";

const SimulationQuestion = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-center bg-[#149A77] p-14 w-96 rounded-3xl">
            <h1 className="text-2xl font-bold text-[#F8F9E9] mb-4">Quelques questions...</h1>
            <p className="text-lg text-[#F8F9E9] mb-6">Je souhaite simuler :</p>
            <div className="flex space-x-4 mb-6">
                <button
                onClick={() => setSelectedOption("Un chien")}
                className={`px-6 py-2 text-[#F8F9E9] font-medium rounded-lg ${
                    selectedOption === "Un chien" ? "bg-[#E30613]" : "bg-[#E30613] hover:bg-[#E30613]"
                }`}
                >
                Un chien
                </button>
                <button
                onClick={() => setSelectedOption("Un chat")}
                className={`px-6 py-2 text-[#F8F9E9] font-medium rounded-lg ${
                    selectedOption === "Un chat" ? "bg-[#E30613]" : "bg-[#E30613] hover:bg-[#E30613]"
                }`}
                >
                Un chat
                </button>
            </div>
            <button
                className="px-8 py-3 bg-[#B0D8C1] text-[#004339] font-semibold rounded-lg hover:bg-[#B0D8C1] transition"
            >
                suivant
            </button>
        </div>

        <div className="mt-6 w-full px-4">
            <div className="h-1 bg-[#149A77] rounded">
            <div
                className="h-1 bg-[#004339] rounded"
                style={{ width: "25%" }} // Remplace par un calcul dynamique si nécessaire
            ></div>
            </div>
            <p className="text-center text-sm text-[#149A77] mt-2">3 questions restantes</p>
        </div>
    </div>
  );
};

export default SimulationQuestion;
