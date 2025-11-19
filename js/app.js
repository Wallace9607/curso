function loadPage(page){
  fetch(`pages/${page}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById("content").innerHTML = html;
      highlightMenu(page);
    });
}

function highlightMenu(page){
  document.querySelectorAll(".nav a").forEach(a => a.classList.remove("active"));
  const target = document.querySelector(`#m-${page}`);
  if (target) target.classList.add("active");
}
