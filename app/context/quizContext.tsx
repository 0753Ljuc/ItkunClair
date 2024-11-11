import { PropsWithChildren, useContext } from "react";
import { createContext } from "react";

export interface QuizContextInterface {
  quiz: "CET4" | "CET6";
  quizType: string;
  quizcount: number;
}

const quizContext = createContext<QuizContextInterface | null>(null);

export const useQuizContext = () =>
  useContext(quizContext) as unknown as QuizContextInterface;

export const QuizProvider = ({ children }: PropsWithChildren) => {
  const quizValue: QuizContextInterface = {
    quiz: "CET4",
    quizType: "transition",
    quizcount: 50,
  };

  return (
    <quizContext.Provider value={quizValue}>{children}</quizContext.Provider>
  );
};