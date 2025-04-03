import React from 'react';
import "./ThreadList.css";

function ThreadList() {
  return (
    <div className="thread-list">
      <h2>スレッド一覧</h2>
      <ul>
        <li>任天堂スイッチ2</li>
        <li>マインクラフトアプデについて</li>
        <li>大谷翔平３号ホームラン</li>
      </ul>
    </div>
  );
}

export default ThreadList;