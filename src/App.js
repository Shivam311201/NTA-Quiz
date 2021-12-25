import React from "react";
import QuestionHome from "./Components/QuestionHome";
import StartingPage from "./Components/StartingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { OptionProvider } from "./ContextFile/OptionContext";
import { QuestionProvider } from "./ContextFile/QuestionContext";
import { SelectedOptionContextProvider } from "./ContextFile/SelectedOptionContext";
import { VisitedQuestionContextProvider } from "./ContextFile/VisitedQuestionContext";
import ScorePage from "./Components/ScorePage";
import { ScoreProvider } from "./ContextFile/ScoreContext";

function App() {
  return (
    <div>
      <QuestionProvider>
        <OptionProvider>
          <SelectedOptionContextProvider>
            <VisitedQuestionContextProvider>
              <ScoreProvider>
                <Router>
                  <Routes>
                    <Route exact path="/" element={<StartingPage />} />
                    <Route exact path="/Quiz" element={<QuestionHome />} />
                    <Route exact path="/Scorecard" element={<ScorePage />} />
                  </Routes>
                </Router>
              </ScoreProvider>
            </VisitedQuestionContextProvider>
          </SelectedOptionContextProvider>
        </OptionProvider>
      </QuestionProvider>
    </div>
  );
}

export default App;
