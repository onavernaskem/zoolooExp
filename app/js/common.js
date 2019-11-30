document.onclick = function(e) {
  if (e.target.classList.contains("menu__burger")) {
    document.querySelector(".menu").classList.toggle("menu--opened");
	}
	if (e.target.classList.contains("footer__link")) {		
    findAncestor(e.target, "footer__link-wrapper").querySelector(".share-ways").classList.toggle("share-ways--active")
	}
	if (e.target.classList.contains("share-ways__icon--copy")) {
    document.querySelector(".share-ways").classList.toggle("share-ways--copied");
  }
  if (e.target.classList.contains("nav-card__chkbx")) {
    let par = findAncestor(e.target, "nav-card");
    par.classList.toggle("nav-card--open");
  }
};
function findAncestor(el, cls) {
	while ((el = el.parentElement) && !el.classList.contains(cls));
	return el;
}