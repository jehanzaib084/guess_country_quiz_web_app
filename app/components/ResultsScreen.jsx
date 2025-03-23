import React from "react";
import Image from "next/image";

const ResultsScreen = ({ score, totalQuestions, onPlayAgain, quizTitle }) => {
  const scorePercentage = (score / (totalQuestions * 10)) * 100;
  const dashOffset = 100 - scorePercentage;

  return (
    <>
      {/* Header for result screen */}
      <div className="flex rounded-t-lg justify-evenly items-center bg-[#FAFCFF] border-b border-[#CCE4FF]">
        <div className="relative flex items-center justify-center align-center border-b-2 w-full border-gray-800 px-6 py-4">
          <button className="font-semibold text-gray-800 hover:text-blue-500">
            Score
          </button>
        </div>
      </div>

      {/* Result screen content */}
      <div className="relative flex items-center justify-center rounded-lg p-6 h-[85vh] shadow-lg overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg_image.webp"
            alt="Geography quiz background"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center rounded-lg bg-[#FAFCFF] px-6 py-3 shadow-lg border border-[#CCE4FF] w-[380px]">
          <h1 className="font-bold text-md text-center">{quizTitle}</h1>

          <div className="relative size-60 my-4">
            <svg
              className="size-full -rotate-90"
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                className="stroke-current text-gray-200"
                strokeWidth="3"
              ></circle>
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                className="stroke-current text-[#14599D]"
                strokeWidth="3"
                strokeDasharray="100"
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
              ></circle>
            </svg>

            <div className="absolute flex flex-col top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <span className="text-center text-4xl font-bold text-[#14599D]">
                {score / 10} / {totalQuestions}
              </span>
              <span className="text-xs text-center">{score} points</span>
            </div>

            <div className="absolute -top-1 start-1/2 transform -translate-x-1/2 text-white bg-[#14599D] rounded-lg p-2 font-bold">
              {score >= totalQuestions * 5 ? "Congrats!" : "Nice Try!"}
            </div>
          </div>

          <div>
            <button
              onClick={onPlayAgain}
              className="flex align-center justify-center mb-6 w-full rounded-md text-[#5C8DBD] px-4 py-2 text-sm border ring ring-offset-0 ring-[#CCE4FF] hover:ring-[#0B3259] hover:cursor-pointer focus:outline-none focus:ring-2"
            >
              <Image
                src="/reload.svg"
                alt="Reload"
                width={14}
                height={14}
                className="mr-1"
              />
              <span>Play Again</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultsScreen;
