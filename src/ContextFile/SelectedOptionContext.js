import React, { createContext, useState } from 'react';
import Questions from '../api/questions';

export const SelectedOptionContext = createContext();

export function SelectedOptionContextProvider({ children }) {

  var options=[];
  var len=Questions.length;
  for(var i=0;i<len;i++)
  options.push(-1);

  const [selectedOption,setSelectedOption] = useState(options);

  return (
    <SelectedOptionContext.Provider value={[selectedOption,setSelectedOption]}>
      {children}
    </SelectedOptionContext.Provider>
  );
};