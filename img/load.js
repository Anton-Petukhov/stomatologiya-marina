document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('img[src^="img/"]').forEach((img) => {
    const name = img.getAttribute("src").replace(/^img\//, "");
    if (window.IMAGES && window.IMAGES[name]) img.src = window.IMAGES[name];
  });
});
