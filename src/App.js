import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SurgicalPage from './content/Surgical';
import VisionCarePage from './content/VisionCare';

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path="/surgical" element={<SurgicalPage />}>
          </Route>
          <Route path="/vision-care" element={<VisionCarePage />}>
          </Route>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
