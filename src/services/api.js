// APIのURLを定義
const API_URL = 'https://railway.bulletinboard.techtrain.dev';

export const getThreads = async () => {
  try {
    
    const response = await fetch(`${API_URL}/threads`);
    
    // レスポンスが成功しなかった場合はエラーをスロー
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    
    // レスポンスをJSONに変換して返却
    return await response.json();
  } catch (error) {
    console.error('スレッド一覧の取得に失敗しました:', error);
    throw error;
  }
};
  