document.addEventListener("alpine:init", () => {
  Alpine.store("tweet", {
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
      ftverified: true,
    }).as("ftg"),
  });
});

document.addEventListener("alpine:init", () => {
  Alpine.data("app", () => ({
    // open: false,

    // toggle() {
    //     this.open = ! this.open
    // }

    clearLocalStorage() {
      localStorage.clear();
    },
    reloadPage() {
      location.reload();
    },
  }));
});

// we check for updates on local storage and reload all browser showing this website
window.addEventListener("storage", () => {
  location.reload();
});
