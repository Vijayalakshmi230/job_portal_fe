import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import './App.css';
import HomeComponents from './components/HomeComponents/HomeComponents';
import JobComponents from './components/JobComponents/JobComponents';

function App() {
  return (
    <Router>
      <div className="App">
      <h1>Job Portal</h1>
      </div>
      <Link to='/'>Home</Link>
      <Link to='/admin/job'>Job</Link>
      <Routes>
        <Route exact path='/' element={<HomeComponents/>}/>
        <Route exact Path='/admin/job' element={<JobComponents/>}/>
      </Routes>
    </Router>
  );
}

export default App;
