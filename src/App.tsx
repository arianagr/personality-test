import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import LandingScreen from './components/LandingScreen';
import QuestionScreen from './components/QuestionScreen';
import FinishScreen from './components/FinishScreen';
import './App.css';
import axios from 'axios';
import ProgressBar from './components/ProgressBar';
import DialogBox from './components/DialogBox';
import NavigationButtons from './components/NavigationButtons';

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [personality, setPersonality] = useState('');
  const [answerProvided, setAnswerProvided] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Fetch questions from the backend
  const fetchQuestions = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3001/mock/questions');
      setQuestions(response.data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  // Handle user's answer
  const handleAnswer = (value: number) => {
    setScore((prevScore) => prevScore + value);

    // Check if this is the last question
    if (currentQuestionIndex + 1 < questions.length) {
      const nextIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIndex);
      navigate(`/question/${nextIndex}`); // Navigate to the next question
    } else {
      determinePersonality(); // Determine personality after the last question
    }
  };

  // Determine personality based on the score
  const determinePersonality = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3001/mock/answer', {
        params: { score },
      });
      setPersonality(response.data.personality);
      navigate('/finish'); // Navigate to the finish screen
    } catch (error) {
      console.error('Error fetching personality result:', error);
    } finally {
      setLoading(false);
    }
  };

  // Restart the test
  const restartTest = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setPersonality('');
    navigate('/'); // Navigate back to the landing page
  };

  return (
    <div className="App">
      <div className="main-content">
        {loading && <div className="loading-screen">Loading...</div>}
        {!loading && (
          <Routes>
            <Route path="/" element={<LandingScreen startTest={() => navigate('/question/0')} />} />
            <Route
              path="/question/:id"
              element={
                <>
                  {questions.length > 0 && (
                    <>
                      <ProgressBar currentQuestionIndex={currentQuestionIndex} totalQuestions={questions.length} />
                      <QuestionScreen
                        questions={questions}
                        questionIndex={currentQuestionIndex}
                        handleAnswer={handleAnswer}
                        totalQuestions={questions.length}
                      />
                      <NavigationButtons
                        currentQuestionIndex={currentQuestionIndex}
                        setCurrentQuestionIndex={setCurrentQuestionIndex}
                        navigate={navigate}
                        answerProvided={answerProvided}
                        setShowDialog={setShowDialog}
                        totalQuestions={questions.length}
                      />
                    </>
                  )}
                  {showDialog && <DialogBox setShowDialog={setShowDialog} />}
                </>
              }
            />
            <Route
              path="/finish"
              element={
                <FinishScreen
                  personality={personality}
                  restartTest={restartTest}
                  highlightColor={personality === 'Extrovert' ? '#33a474' : '#f25e62'}
                />
              }
            />
          </Routes>
        )}
      </div>
    </div>
  );
};




export default App;
