// IntersectionObserver 를 등록한다.
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry.target.classList.contains('letter'));
    // console.log(entry.target);
    if (entry.intersectionRatio > 0) {
      if (entry.target.classList.contains('letter')) {
        entry.target.style.top = '0%';
        entry.target.style.opacity = '1';
      } else if (entry.target.classList.contains('text')) {
        entry.target.style.left = '0%';
        entry.target.style.opacity = '1';
      } else {
        entry.target.style.opacity = '1';
      }
    }
  });
});

// 관찰할 대상을 선언하고, 해당 속성을 관찰시킨다.
const boxElList = document.querySelectorAll('.section-animation');
boxElList.forEach((el) => {
  io.observe(el);
});

const TOP_BTN = document.querySelector('#top-btn');
let BODY = document.querySelector('body');

window.addEventListener('scroll', () => {
  if (this.scrollY > 1000) {
    console.log(TOP_BTN);
    TOP_BTN.style.opacity = '1';
  } else {
    TOP_BTN.style.opacity = '0';
  }
});
TOP_BTN.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// SideBar

let sidebar = document.querySelector('.sidebar');
let outsidebar_btn = document.querySelector('.out-sidebar-btn');
const SIDEBAR_BTN = document.querySelectorAll('.sidebar-btn');
let menu = document.querySelector('.menu');

SIDEBAR_BTN.forEach((e) => {
  console.log(e);
  e.addEventListener('click', () => {
    if (window.outerWidth > 1024) {
      sidebar.classList.remove('on-sidebar');
      BODY.style.overflowY = 'scroll';
    } else if (!sidebar.classList.contains('on-sidebar')) {
      sidebar.classList.add('on-sidebar');
      BODY.style.overflowY = 'hidden';
    } else {
      sidebar.classList.remove('on-sidebar');
      BODY.style.overflowY = 'scroll';
    }
  });
});
