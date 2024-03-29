import Home from './components/Home';
import MuscleGroup from './components/MuscleGroup';
import MuscleById from './components/MuscleById';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/group" element={<MuscleGroup />} />
        <Route path="/muscle/:id" element={<MuscleById />} />
      </Routes>
    </Router>    
  )
}

export default App