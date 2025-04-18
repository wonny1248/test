document.getElementById("writeForm").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const title = document.getElementById("title").value;
    const tag = document.getElementById("tag").value;
    const author = document.getElementById("author").value;
    const content = document.getElementById("content").value;
    const now = new Date().toISOString();
  
    const notice = {
      title,
      tag,
      author,
      content,
      createdAt: now,
      updatedAt: now
    };
  
    await postNotice(notice);
    alert("게시글이 작성되었습니다.");
    window.location.href = "notice.html";
  });
  