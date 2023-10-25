import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ReadBlog from './pages/ReadBlog';
import CreateBlog from './pages/CreateBlog';
import UpdateBlog from './pages/UpdateBlog';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import ProductList from './pages/ProductList';
import SingleProduct from './pages/SingleProduct';
import Services from './pages/Services';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

 var paddingTop={
  paddingTop:"4%"
 }


  return (
    <Router>
      <div>
        <Header/>
      </div>
        <div className="main" style={paddingTop}>
          
          <Routes>

        
              <Route path='/' element={<Home/>} />
              <Route path='/read' element={<ReadBlog/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/create' element={<CreateBlog/>} />
              <Route path='/update' element={<UpdateBlog/>} />
              <Route path='/blog' element={<Blog/>} />
              <Route path='/product-list' element={<ProductList/>} />
              <Route path='/single-product' element={<SingleProduct/>} />
              <Route path='/services' element={<Services/>} />
          
          </Routes>
        </div>
      <Footer/>
    </Router>
  );
}

export default App;





// import logo from './logo.svg';
// import './App.css';
// import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
