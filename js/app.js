window.addEventListener("load", function() {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu-fixed");
  const items = document.querySelectorAll(".item");
  menuToggle && menuToggle.addEventListener("click", handleToggleMenu);
  function handleToggleMenu(e) {
    menu && menu.classList.add("active");
  }
  document.addEventListener("click", handleClickOutSide);
  function handleClickOutSide(e) {
    if(e.target.matches(".menu-toggle") || e.target.matches(".menu-fixed, .menu-fixed *")) {
      return;
    }
    menu && menu.classList.remove("active");
  }
  items.forEach(function(item,index) {
    item.onclick= function() {
      const itemActive = document.querySelector(".item.active");
      itemActive.classList.remove("active");
      this.classList.add("active");
    }
  })
})