import React, { createContext, useState } from 'react';

export const questionContext = createContext();

export function QuestionProvider({ children }) {

  const [questions, setQuestions] = useState([]);

  return (
    <questionContext.Provider value={[questions, setQuestions]}>
      {children}
    </questionContext.Provider>
  );
};