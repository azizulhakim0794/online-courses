import React from 'react';
import './App.css';
import Header from './components/Header.js'
import Courses from './components/Courses/Courses';
function App() {
  const styleTitle = { width: '99%',textAlign: 'center'}
  return (
    <div className="App">   
   <Header></Header>
   <br/>
   <h4 style={styleTitle}>Buy a Course Which you Want</h4>
   <br/>
   <Courses></Courses>
   
    </div>
  );
}




export default App;
