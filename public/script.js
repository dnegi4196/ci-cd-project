window.onload = function () {
  fetch("/api/info")
    .then(response => response.json())
    .then(data => {
      document.getElementById("info").innerHTML = `
        <p><b>Hostname:</b> ${data.hostname}</p>
        <p><b>Uptime:</b> ${Math.floor(data.uptime)} sec</p>
        <p><b>Platform:</b> ${data.platform}</p>
        <p><b>Time:</b> ${data.time}</p>
      `;
    })
    .catch(error => {
      document.getElementById("info").innerHTML = "Error loading data";
      console.error(error);
    });
};
