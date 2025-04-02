// src/App.jsx
import { useState } from 'react';
import './App.css'
// 将来的に実装するコンポーネント（現段階でのプレースホルダー）
// import ThreadList from './components/ThreadList';
// import ThreadDetail from './components/ThreadDetail';

function App() {
  // 選択されたスレッドIDの状態
  const [selectedThreadId, setSelectedThreadId] = useState(null);

  r
  return (
    <div className="App">
      <header className="App-header">
        <h1>掲示板アプリ</h1>
      </header>
      
      <main className="App-main">
        {/* ここにコンテンツが入ります - 開発中はシンプルなメッセージだけ表示 */}
        <p>掲示板アプリケーションを開発中です。</p>
        
        {/* スレッド一覧と詳細表示の切り替えは後で実装 */}
        {/* {selectedThreadId ? (
          <ThreadDetail threadId={selectedThreadId} onBack={() => setSelectedThreadId(null)} />
        ) : (
          <ThreadList onSelectThread={(id) => setSelectedThreadId(id)} />
        )} */}
      </main>
      
      <footer className="App-footer">
        <p>© 2025 掲示板アプリ</p>
      </footer>
    </div>
  );
}

export default App;