import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Card from './components/Card';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/" >
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
