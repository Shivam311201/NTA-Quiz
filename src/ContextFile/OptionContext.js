import React, { createContext, useState } from 'react';
import Questions from '../api/questions';

export const OptionContext = createContext();

export function OptionProvider({ children }) {

    const [Options,setOptions] = useState(Questions[0].options);

  return (
    <OptionContext.Provider value={[Options,setOptions]}>
      {children}
    </OptionContext.Provider>
  );
};