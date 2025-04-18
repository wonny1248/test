document.addEventListener("DOMContentLoaded", async () => {
    const notices = await fetchNotices();
    const tbody = document.querySelector("#noticeTable tbody");
  
    const sorted = notices.sort((a, b) => b.id - a.id);
  
    sorted.forEach((item, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${item.title || "-"}</td>
        <td>${item.author || "-"}</td>
        <td>${item.createdAt || "-"}</td>
        <td>${item.updatedAt || "-"}</td>
      `;
      tbody.appendChild(tr);
    });
  });
  