import React from 'react';
import FaqList from './components/FaqList';
import Header from './components/Header';
import './styles/App.scss';

function App() {

//Click listener for highlighting FAQ items if other HTML elements is clicked
  document.addEventListener('click', (e) => {
    document.querySelectorAll('.item-wrapper').forEach(item => {
      item.classList.add('highlighted');
  
      setTimeout(() => {
        item.classList.remove('highlighted');
      }, 200);
    });
  });

  return (
    <div className="App">
      <Header />
      <FaqList/>
    </div>
  );
}

export default App;