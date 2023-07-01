window.addEventListener("scroll", function() {
  var scrollY = window.scrollY || window.pageYOffset;
  var logo = document.getElementById('sl');
  if (scrollY < 0) {
    return
  }
  logo.style.marginTop = scrollY + 'px';
  if (scrollY >= 80) {
    logo.style.marginTop = '80px';
  }
});
function menu() {  
let element1 = document.getElementById("animation1");
let element2 = document.getElementById("animation2");
let element3 = document.getElementById("animation3");
  element3.classList.toggle('on');
  element1.classList.toggle('on');
  element2.classList.toggle('on');
document.querySelector('ul').classList.toggle('on');
document.querySelector('.hamburger').classList.toggle('on')
}
function joindc() {
document.querySelector('.dbtn').classList.add('on');
setTimeout(function() {
  window.location.href = 'https://discord.gg/8bBxc7nq'
 }, 500);
  setTimeout(function() {
  document.querySelector('.dbtn').classList.remove('on');
 }, 700);
}
