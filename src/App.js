import './App.css';
// import Header from './Components/Header.js'
import Navbar from './Components/Navbar.js'
import Category from './Components/Category.js'
import Blogs from './Components/Blogs.js'
function App() {
  return (
    <div className="App">
      <div>
      <Navbar/>
      </div>
      <div className='subdiv'>
        <Category/>
        <Blogs/>
      </div>
    </div>
  );
}

export default App;
