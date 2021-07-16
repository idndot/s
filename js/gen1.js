/* Loader */
document.body.insertAdjacentHTML("beforeend",'<div id="load_page" class="load_hide"><div class="load_er load_spin"></div></div>'),window.addEventListener("beforeunload",function(){const d=document.getElementById("load_page");setTimeout(function(){d.style.display="block"},1),setTimeout(function(){d.classList.remove("load_hide"),d.classList.add("load_show")},200)});
