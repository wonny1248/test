document.addEventListener("DOMContentLoaded", async () => {
    const notices = await fetchNotices();
    const tbody = document.querySelector("#noticeTable tbody");
  
    notices.forEach((notice, index) => {
      const row = document.createElement("tr");
  
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${notice.title}</td>
        <td>${notice.tag}</td>
        <td>${notice.author}</td>
        <td>${notice.createdAt}</td>
        <td>${notice.updatedAt}</td>
      `;
  
      tbody.appendChild(row);
    });
  });
  