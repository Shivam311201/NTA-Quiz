import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QuestionProvider } from './ContextFile/QuestionsContext';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
   <QuestionProvider>
    <App />
   </QuestionProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
