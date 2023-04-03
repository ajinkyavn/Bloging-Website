import './App.css';
// import Register from './Components/Register';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Widgets from './Components/Widgets';
// import Login  from './Components/Login';
// import Register from './Components/Register';
// import './css/Login.css'

function App() {
  return (
    <div className="App">
      <Sidebar/> 
      <Feed/>
      <Widgets/>
      {/* <Login/> */}
      {/* <Register/> */}
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// // import logo from './logo.svg';
// // import './App.css';
// // import { Login } from "./Components/Login";
// // import { Register } from "./Components/Register";
// import PostBlog from "./Components/PostBlog";

// function App() {
//   // const [currentForm, setCurrentForm] = useState('login');

//   // const toggleForm = (formName) => {
//   //   setCurrentForm(formName);
//   // }

//   return (
//     <div className="App">
//       {/* {
//         currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
//       } */}
//       <PostBlog/>
//     </div>
//   );
// }

// export default App;
