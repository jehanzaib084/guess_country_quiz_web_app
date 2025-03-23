import React from 'react';
import Image from 'next/image';

const StartScreen = ({ onStart, quizTitle }) => {
  return (
    <div className="relative flex items-center justify-center rounded-lg p-6 w-full h-[85vh] shadow-lg overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg_image.webp"
          alt="Geography quiz background"
          fill
          priority
          sizes="100vw"
          style={{objectFit: 'cover'}}
        />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center rounded-lg bg-white px-6 py-3 shadow-lg border border-[#CCE4FF] w-[360px]">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 mb-2 rounded-lg bg-[#F7FAFD] border border-[#CCE4FF] px-3 py-1 text-sm">
          Geography & Travel
        </div>
        <div className="mb-6 text-2xl pt-2 text-center">
          {quizTitle}
        </div>
        <button 
          onClick={onStart}
          className="mb-6 w-full rounded-md bg-[#0E3F70] px-6 py-3 border border-[#05192C] border-3 font-semibold text-lg text-white hover:bg-[#0B3259] hover:cursor-pointer focus:outline-none focus:ring-2"
        >
          Start
        </button>
        <div className="flex w-full items-center justify-between text-sm font-medium">
          <div>20 Questions</div>
          <div className="flex items-center gap-2">
            <span id="timer-bonus-label">Timer Bonus</span>
            <label 
              htmlFor="timer-bonus" 
              className="relative inline-flex cursor-pointer items-center"
              aria-labelledby="timer-bonus-label"
            >
              <input 
                type="checkbox" 
                id="timer-bonus" 
                className="sr-only peer" 
                aria-labelledby="timer-bonus-label"
              />
              <div className="h-6 w-11 rounded-full bg-[#C2C2C2] peer-checked:bg-[#0E3F70]"></div>
              <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-5 border border-black"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;