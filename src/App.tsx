import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowAllCreators from './routes/ShowAllCreator';
import ViewCreator from './routes/ViewCreator';
import EditCreator from './routes/EditCreator';
import AddCreator from './routes/AddCreator';
import NavBar from './components/NavBar';



const App = () => {
  return (
    <Router>
      <div className="flex">
        <NavBar />
        <div className="flex-grow">
          <Routes>
            <Route path="/all" element={<ShowAllCreators />} />
            <Route path="/add" element={<AddCreator />} />
            <Route path="/view/:id" element={<ViewCreator />} />
            <Route path="/edit/:id" element={<EditCreator />} />
          </Routes>
        </div>
      </div>
    </Router >
  );
}
export default App;
