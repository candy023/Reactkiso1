// API基本URLを定義
const API_BASE_URL = 'https://railway.bulletinboard.techtrain.dev';

/**
 * スレッド一覧を取得する関数
 */
export const getThreads = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/threads`);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('スレッド一覧の取得に失敗しました:', error);
    throw error;
  }
};

/**
 * 新しいスレッドを作成する関数
 */
export const createThread = async (threadData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/threads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(threadData),
    });
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('スレッドの作成に失敗しました:', error);
    throw error;
  }
};

/**
 * 特定のスレッドの投稿一覧を取得する関数
 */
export const getPosts = async (threadId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/threads/${threadId}/posts`);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`スレッドID ${threadId} の投稿取得に失敗しました:`, error);
    throw error;
  }
};

/**
 * 特定のスレッドに新しい投稿を作成する関数
 */
export const createPost = async (threadId, postData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/threads/${threadId}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`スレッドID ${threadId} への投稿作成に失敗しました:`, error);
    throw error;
  }
};