import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import JobComponents from './components/JobComponents/JobComponents';
import HomeComponents from './components/HomeComponents/HomeComponents';
import UpdateComponents from './components/UpdateComponents/UpdateComponents';

function App() {
  return (
    <Router>
            <div className="container">
              <h1>Job Portal App</h1>
              
            <nav className="nav-menu">
                <Link to="/" >Home</Link>
                <Link to="/admin/add" >Add Jobs</Link>
                <Link to="/admin/edit" >Edit Jobs</Link>
            </nav>
           <Routes>
                 <Route exact path='/' element={<HomeComponents/>}></Route>
                 <Route path='/admin/add' element={<JobComponents/>}></Route>
                 <Route path='/admin/edit' element={<UpdateComponents/>}></Route>
          </Routes>
          </div>
       </Router>
  );
}

export default App;