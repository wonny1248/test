async function fetchPosts() {
    const res = await fetch(SCRIPT_URL);
    const data = await res.json();
    return data.sort((a, b) => b.id - a.id); // 최신순
  }
  
  function getTagClass(tag) {
    switch (tag) {
      case "공지": return "tag-notice";
      case "수상": return "tag-award";
      case "학회": return "tag-conf";
      default: return "tag-etc";
    }
  }
  
  function renderPosts(posts) {
    const tbody = document.getElementById("board-body");
    tbody.innerHTML = "";
  
    posts.forEach((post, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${index + 1}</td>
        <td style="text-align:left;">
          <span class="board-tag ${getTagClass(post.tag)}">${post.tag}</span>
          <a href="view.html?id=${post.id}">${post.title}</a>
        </td>
        <td>${post.attachment ? "📎" : ""}</td>
        <td>${post.author}</td>
        <td>${post.createdAt}</td>
        <td>${post.views || 0}</td>
      `;
      tbody.appendChild(tr);
    });
  }
  
  fetchPosts().then(renderPosts);
  