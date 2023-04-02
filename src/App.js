import './App.css';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Widgets from './Components/Widgets';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Feed/>
      <Widgets/>
    </div>
  );
}

export default App;
