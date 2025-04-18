const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw4mvl2UDwrywBF9QKt9aFdvmHnnOFJLCtu3eMVx5ZxnyqZSzUzr0Lc_b9FIu5Lru8B/exec";

async function fetchData() {
    const res = await fetch(SCRIPT_URL);
    return await res.json();
  }
  
  async function postData(data) {
    return await fetch(SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });
  }