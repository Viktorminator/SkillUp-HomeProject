import React from 'react';
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer';
import PostPage from './PostPage/PostPage'
import {Route} from 'react-router-dom'

import '../common/style/base.css'


function App() {
  return (
    <div>
      <Header/>
      <Route exact path='/' component={Main}/> 
      <Route exact path='/:id' component={PostPage}/> 
      <Footer/>
    </div>
  );
}

export default App;
