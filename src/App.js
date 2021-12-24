import React from "react";
import Home from "./Components/Home";
import { OptionProvider } from "./ContextFile/OptionContext";
import { QuestionProvider } from "./ContextFile/QuestionContext";
import { SelectedOptionContextProvider } from "./ContextFile/SelectedOptionContext";

function App() {
  return (
    <div>
      <QuestionProvider>
        <OptionProvider>
          <SelectedOptionContextProvider>
            <Home />
          </SelectedOptionContextProvider>
        </OptionProvider>
      </QuestionProvider>
    </div>
  );
}

export default App;
