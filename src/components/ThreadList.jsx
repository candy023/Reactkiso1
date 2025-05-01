import { useState, useEffect } from 'react';
import './ThreadList.css'; // CSSファイルをインポート

function ThreadList() {
  const [threads, setThreads] = useState([]);
  
  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const response = await fetch('https://railway.bulletinboard.techtrain.dev/threads?offset=0');
        const data = await response.json();
        setThreads(data);
      } catch (error) {
        console.error('Error fetching threads:', error);
      }
    };
    fetchThreads();
  }, []);
  return (
    <div className="box">
      <h2>スレッド一覧</h2>
      <ul className="list">
        {threads.map(thread => (
          <li key={thread.id}>
            {thread.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ThreadList;