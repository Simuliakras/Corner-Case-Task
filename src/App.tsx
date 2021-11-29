import React from 'react';
import FaqList from './components/FaqList';
import Header from './components/Header';
import './styles/App.scss';

function App() {

  return (
    <div className="App">
      <Header />
      <FaqList/>
    </div>
  );
}

export default App;