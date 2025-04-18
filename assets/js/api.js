const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw4mvl2UDwrywBF9QKt9aFdvmHnnOFJLCtu3eMVx5ZxnyqZSzUzr0Lc_b9FIu5Lru8B/exec";

// 게시글 목록 가져오기
async function fetchNotices() {
  try {
    const response = await fetch(SCRIPT_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("데이터를 가져오는 중 오류 발생:", error);
    return [];
  }
}

// 게시글 작성
async function postNotice(notice) {
  try {
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain"
      },
      body: JSON.stringify(notice)
    });
    return await response.json();
  } catch (error) {
    console.error("게시글 작성 중 오류 발생:", error);
  }
}
