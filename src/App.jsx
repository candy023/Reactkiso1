import { useState } from 'react';
import ThreadList from './components/ThreadList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>掲示板アプリ</h1>
      </header>
      
      <main className="App-main">
        <ThreadList />
      </main>
      
      <footer className="App-footer">
        <p>&copy; 2025 掲示板アプリ</p>
      </footer>
    </div>
  );
}

export default App;