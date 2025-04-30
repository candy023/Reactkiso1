import { useState } from 'react';
import './App.css';
import ThreadList from './components/ThreadList';

function App() {
  return (
    <div className="title">
      <h1 className="main">掲示板アプリ</h1>
      <ThreadList />
    </div>
  );
}

export default App;