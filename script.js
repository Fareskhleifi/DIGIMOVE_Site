function menu() {
  let x=document.getElementById("container");
    x.classList.toggle("change");
    var menuList = document.getElementById('menuList');
    menuList.classList.toggle('show');
  }

  document.addEventListener("DOMContentLoaded", function() {
    var scrollButton = document.getElementById('scrollButton');
    function toggleScrollButton() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollButton.style.display = "block";
        } else {
            scrollButton.style.display = "none";
        }
    }
    window.onscroll = function() {
        toggleScrollButton();
    };
    scrollButton.addEventListener('click', function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});
