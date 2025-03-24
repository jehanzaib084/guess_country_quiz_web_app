import React from "react";
import Image from "next/image";

const QuizQuestion = ({
  currentQuestion,
  currentQuestionIndex,
  totalQuestions,
  score,
  selectedOption,
  showNextBtn,
  animateWrong,
  handleOptionClick,
  handleNextBtnClick,
}) => {
  const getButtonStyle = (option) => {
    let style =
      "w-full py-3 px-4 border border-2 rounded-lg text-gray-700 transition ";

    if (selectedOption !== null && selectedOption !== option) {
      style += "animate-fadeIn";
    }

    if (
      selectedOption === option &&
      option !== currentQuestion.correctAnswer &&
      animateWrong
    ) {
      style += "animate-shake ";
    }

    if (selectedOption === null) {
      return (
        style +
        "bg-white border-[#A2CDFFFF] hover:bg-[#F0F7FEFF] hover:border-[#14599D] cursor-pointer"
      );
    }

    if (option === currentQuestion.correctAnswer) {
      return style + "bg-white border-green-500 ring-1 ring-green-500";
    }

    if (selectedOption === option) {
      return style + "bg-white border-red-500 ring-1 ring-red-500";
    }

    return style + "bg-white border-gray-300 opacity-75 hidden md:inline-block";
  };

  const showXMark = (option) => {
    return (
      selectedOption === option && option !== currentQuestion.correctAnswer
    );
  };

  return (
    <>
      {/* Header for Questions screen */}
      <div className="flex rounded-t-lg justify-between items-center px-6 py-4 text-[14px] md:text-[16px]">
        <div>
          <h1 className="font-bold">Guess the Country Quiz</h1>
        </div>
        <div className="flex items-center gap-2">
          <span>
            <span className="font-bold">{currentQuestionIndex + 1}</span> of{" "}
            <span className="font-bold">{totalQuestions}</span>
          </span>
          <span className="bg-[#F7FAFD] p-2">
            Score: <span className="font-bold">{score}</span>
          </span>
        </div>
      </div>

      {/* Question screen content */}
      <div className="border-t rounded-b-lg border-[#CCE4FF] bg-[#F7FAFD]">
        {/* Question statement here */}
        <div className="px-6">
          <p className="text-center text-[20px] font-medium text-gray-700 py-3">
            {currentQuestion.question}
          </p>
        </div>

        {/* Options buttons here */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 px-6 pt-2 pb-6">
          {currentQuestion.options.map((option, index) => (
            <div key={index} className="flex justify-center">
              <div className="relative w-full max-w-[80%] md:max-w-full">
                <button
                  onClick={() => handleOptionClick(option)}
                  disabled={
                    selectedOption !== null && selectedOption !== option
                  }
                  className={getButtonStyle(option)}
                  aria-label={option}
                >
                  {option}
                </button>

                {showXMark(option) && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold animate-shake">
                    ✕
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Next button here */}
        {showNextBtn && (
          <div className="flex items-center justify-center w-full pb-6">
            <button
              onClick={handleNextBtnClick}
              className="flex items-center justify-center align-center rounded-md bg-[#0E3F70] px-6 py-3 border border-[#05192C] font-semibold text-lg text-white hover:bg-[#0B3259] hover:cursor-pointer focus:outline-none focus:ring-2 w-[120px] sm:w-[160px] animate-fadeIn"
            >
              <span>Next</span>
              <Image
                src="/right-arrow.svg"
                alt="Next"
                width={20}
                height={20}
                className="text-white pl-1"
              />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default QuizQuestion;
