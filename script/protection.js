document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});

document.addEventListener("dragstart", (event) => {
  if (event.target.tagName === "IMG") {
    event.preventDefault();
  }
});

document.addEventListener("selectstart", (event) => {
  event.preventDefault();
});
