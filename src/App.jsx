import { useState } from 'react';
import './App.css';
import ThreadList from './components/ThreadList';

function App() {
  return (
    
    <div className="App">
      <h1>掲示板アプリ</h1>
      <ThreadList />
    </div>
  );
}

export default App;