'use client';

import { useState, useEffect } from "react";
import quiz from "@/data/quiz_data.json";

import StartScreen from "./components/startCard";
import QuizQuestion from "./components/quizQuestionCard";
import ResultsScreen from "./components/resultCard";

export default function Home() {
  const questions = quiz;

  const QUIZ_TITLE = "Guess the Country by Its Neighbors Quiz";
  
  const [appState, setAppState] = useState("start");

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showNextBtn, setShowNextBtn] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [animateWrong, setAnimateWrong] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    if (animateWrong) {
      const timer = setTimeout(() => {
        setAnimateWrong(false);
      }, 820);
      return () => clearTimeout(timer);
    }
  }, [animateWrong]);

  const handleStart = () => {
    setAppState("quiz");
  };

  const handleOptionClick = (option) => {
    if (selectedOption === null) {
      setSelectedOption(option);

      if (option === currentQuestion.correctAnswer) {
        setScore(score + 10);
      } else {
        setAnimateWrong(true);
      }

      setShowNextBtn(true);
    }
  };

  const handleNextBtnClick = () => {
    setShowNextBtn(false);
    setSelectedOption(null);

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setAppState("results");
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setShowNextBtn(false);
    setAppState("start");
  };

  return (
    <div className="flex items-center justify-center min-h-screen lg:p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl border border-[#CCE4FF]">
        {appState === "start" && (
          <StartScreen 
            onStart={handleStart} 
            quizTitle={QUIZ_TITLE}
          />
        )}
        
        {appState === "quiz" && (
          <QuizQuestion 
            currentQuestion={currentQuestion}
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={questions.length}
            score={score}
            selectedOption={selectedOption}
            showNextBtn={showNextBtn}
            animateWrong={animateWrong}
            handleOptionClick={handleOptionClick}
            handleNextBtnClick={handleNextBtnClick}
          />
        )}
        
        {appState === "results" && (
          <ResultsScreen 
            score={score}
            totalQuestions={questions.length}
            onPlayAgain={resetQuiz}
            quizTitle={QUIZ_TITLE}
          />
        )}
      </div>
    </div>
  );
}