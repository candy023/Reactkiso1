import { useState } from 'react';
import ThreadList from './components/ThreadList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>掲示板アプリ</h1>
      </header>
      
      <main className="main">
        <ThreadList />
      </main>

    </div>
  );
}

export default App;