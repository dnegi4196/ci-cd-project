fetch("/api/info")
  .then(res => res.json())
  .then(data => {
    document.getElementById("info").innerHTML =
      "Host: " + data.hostname + "<br>" +
      "Time: " + data.time;
  });
