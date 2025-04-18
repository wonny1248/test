const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw4mvl2UDwrywBF9QKt9aFdvmHnnOFJLCtu3eMVx5ZxnyqZSzUzr0Lc_b9FIu5Lru8B/exec";

// 게시글 목록 가져오기
async function fetchNotices() {
    try {
      const res = await fetch(SCRIPT_URL);
      return await res.json();
    } catch (err) {
      console.error("불러오기 실패:", err);
      return [];
    }
  }
// // 게시글 작성
// async function postNotice(notice) {
//   try {
//     const response = await fetch(SCRIPT_URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "text/plain"
//       },
//       body: JSON.stringify(notice)
//     });
//     return await response.json();
//   } catch (error) {
//     console.error("게시글 작성 중 오류 발생:", error);
//   }
// }
