(() => {
  // app.js
  document.addEventListener("alpine:init", () => {
    Alpine.store("settings", {
      data: Alpine.$persist({
        version: 1,
        ftname: "",
        fthandle: "",
        ftavatar: "",
        fttext: "",
        ftreplies: "69",
        ftretweets: "420",
        ftlikes: "1.337",
        ftstats: "31.415",
        ftverified: true
      }).as("fake-tweet-generator")
    });
  });
  window.addEventListener("storage", () => {
    location.reload();
  });
})();
