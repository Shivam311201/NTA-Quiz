import React, { createContext, useState } from 'react';
import Questions from '../api/questions';

export const VisitedQuestionContext = createContext();

export function VisitedQuestionContextProvider({ children }) {

  var options=[1];
  var len=Questions.length;
  for(var i=1;i<len;i++)
  options.push(-1);

  const [VisitedQuestion,setVisitedQuestion] = useState(options);

  return (
    <VisitedQuestionContext.Provider value={[VisitedQuestion,setVisitedQuestion]}>
      {children}
    </VisitedQuestionContext.Provider>
  );
};