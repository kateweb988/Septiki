
document.addEventListener('DOMContentLoaded', function () {
  // $(window).on('load', function () {
  //   $(".calc__btn_one").prop('disabled', !$("input[name='forms']:checked").length);
  //   $("input[name='forms']").on('change', function () {
  //     $(".calc__btn_one").prop('disabled', !$("input[name='forms']:checked").length);
  //   });
  //   $(".calc__btn_two").prop('disabled', !$("input[name='forms']:checked").length);
  //   $("input[name='forms']").on('change', function () {
  //     $(".calc__btn_two").prop('disabled', !$("input[name='forms']:checked").length);
  //   });
  //   $(".calc__btn_three").prop('disabled', !$("input[name='forms']:checked").length);
  //   $("input[name='forms']").on('change', function () {
  //     $(".calc__btn_three").prop('disabled', !$("input[name='forms']:checked").length);
  //   });
  //   $(".calc__btn_four").prop('disabled', !$("input[name='forms']:checked").length);
  //   $("input[name='forms']").on('change', function () {
  //     $(".calc__btn_four").prop('disabled', !$("input[name='forms']:checked").length);
  //   });
  // });
  $('.calc__btn_one').click(function (event) {
    $('.calc__one').css('display', 'none');
    $('.calc__two').fadeIn();
    return false;
  });
  $('.calc__btn_two').click(function (event) {
    $('.calc__two').css('display', 'none');
    $('.calc__three').fadeIn();
    return false;
  });
  $('.calc__btn_three').click(function (event) {
    $('.calc__three').css('display', 'none');
    $('.calc__four').fadeIn();
    return false;
  });
  $('.calc__btn_four').click(function (event) {
    $('.calc__four').css('display', 'none');
    $('.calc__five').fadeIn();
    return false;
  });

  $('.calc__two .calc__prev').click(function (event) {
    $('.calc__two').css('display', 'none');
    $('.calc__one').fadeIn();
    return false;
  });

  $('.calc__three .calc__prev').click(function (event) {
    $('.calc__three').css('display', 'none');
    $('.calc__two').fadeIn();
    return false;
  });

  $('.calc__four .calc__prev').click(function (event) {
    $('.calc__four').css('display', 'none');
    $('.calc__three').fadeIn();
    return false;
  });

  $('.calc__five .calc__prev').click(function (event) {
    $('.calc__five').css('display', 'none');
    $('.calc__four').fadeIn();
    return false;
  });

});
document.addEventListener("DOMContentLoaded", () => {
  // Scroll
  $('.go_to').click(function () { // ловим клик по ссылке с классом go_to
    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
    if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 50 }, 800); // анимируем скроолинг к элементу scroll_el
    }
    return false; // выключаем стандартное действие
  });
});
document.addEventListener("DOMContentLoaded", () => {
  $('.menu li a').click(function (event) {
    $('.menu-btn').toggleClass('active');
    $('.menu').toggleClass('active');
    return false;
  });
});
window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll('.tel'), function (input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});
document.addEventListener("DOMContentLoaded", () => {
  var accordeonButtons = document.getElementsByClassName("accordeon__button");

  //пишем событие при клике на кнопки - вызов функции toggle
  for (var i = 0; i < accordeonButtons.length; i++) {
    var accordeonButton = accordeonButtons[i];

    accordeonButton.addEventListener("click", toggleItems, false);
  }

  //пишем функцию
  function toggleItems() {

    // переменная кнопки(актульная) с классом
    var itemClass = this.className;

    // добавляем всем кнопкам класс close
    for (var i = 0; i < accordeonButtons.length; i++) {
      accordeonButtons[i].className = "accordeon__button closed";
    }

    // закрываем все открытые панели с текстом
    var pannels = document.getElementsByClassName("accordeon__panel");
    for (var z = 0; z < pannels.length; z++) {
      pannels[z].style.maxHeight = 0;
    }

    // проверка. если кнопка имеет класс close при нажатии
    // к актуальной(нажатой) кнопке добававляем активный класс
    // а панели - которая находится рядом задаем высоту
    if (itemClass == "accordeon__button closed") {
      this.className = "accordeon__button active";
      var panel = this.nextElementSibling;
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

  }
});
document.addEventListener("DOMContentLoaded", () => {
  //popup1
  let popupBg = document.querySelector('.popup__bg');
  let popup = document.querySelector('.popup');
  let openPopupButtons = document.querySelectorAll('.card__basket');
  let closePopupButton = document.querySelector('.close-popup');

  openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      popupBg.classList.add('active');
      popup.classList.add('active');
    })
  });

  closePopupButton.addEventListener('click', () => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
  });

  document.addEventListener('click', (e) => {
    if (e.target === popupBg) {
      popupBg.classList.remove('active');
      popup.classList.remove('active');
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      //ваша функция закрытия окна
      popupBg.classList.remove('active');
      popup.classList.remove('active');
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const swiper1 = new Swiper('.swiper1', {
    slidesPerView: 5,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 0,
        loop: true,
        slidesPerView: 1
      },
      767: {
        spaceBetween: 10,
        slidesPerView: 2
      },
      992: {
        spaceBetween: 20,
        slidesPerView: 3
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 5
      }
    }
  });
  const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 0,
        loop: true,
        slidesPerView: 1
      },
      767: {
        spaceBetween: 10,
        slidesPerView: 2
      },
      992: {
        spaceBetween: 20,
        slidesPerView: 3
      },
      1200: {
        spaceBetween: 20,
        slidesPerView: 4
      }
    }
  });
  const swiper3 = new Swiper('.swiper3', {
    slidesPerView: 4,
    spaceBetween: 69,
    pagination: {
      el: ".swiper-pagination4",
    },
    navigation: {
      nextEl: '.swiper-button-next4',
      prevEl: '.swiper-button-prev4',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 0,
        loop: true,
        slidesPerView: 1
      },
      767: {
        spaceBetween: 10,
        slidesPerView: 3
      },
      992: {
        spaceBetween: 20,
        slidesPerView: 4
      },
      1200: {
        spaceBetween: 69,
        slidesPerView: 4
      }
    }
  });
  const swiper33 = new Swiper('.swiper33', {
    slidesPerView: 4,
    spaceBetween: 28,
    pagination: {
      el: ".swiper-pagination4",
    },
    navigation: {
      nextEl: '.swiper-button-next4',
      prevEl: '.swiper-button-prev4',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 0,
        loop: true,
        slidesPerView: 1
      },
      767: {
        spaceBetween: 10,
        slidesPerView: 3
      },
      992: {
        spaceBetween: 20,
        slidesPerView: 4
      },
      1200: {
        spaceBetween: 28,
        slidesPerView: 4
      }
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll('.tab-btn');
  const subTabs = document.querySelectorAll('.sub-tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  const subTabContents = document.querySelectorAll('.sale__box .sub-tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabData = tab.getAttribute('data-tab');
      tabContents.forEach(content => {
        content.classList.remove('active');
        if (content.getAttribute('id') === tabData) {
          content.classList.add('active');
        }
      });
      tabs.forEach(tab => {
        tab.classList.remove('active');
      });
      tab.classList.add('active');
    });
  });

  subTabs.forEach(subTab => {
    subTab.addEventListener('click', () => {
      const subTabData = subTab.getAttribute('data-tab');
      subTabContents.forEach(content => {
        content.classList.remove('active');
        if (content.getAttribute('id') === subTabData) {
          content.classList.add('active');
        }
      });
      subTabs.forEach(subTab => {
        subTab.classList.remove('active');
      });
      subTab.classList.add('active');
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll('.tab-btn');
  const subTabs = document.querySelectorAll('.sub-tab-btn2');
  const tabContents = document.querySelectorAll('.tab-content');
  const subTabContents = document.querySelectorAll('.sub-tab-content2');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabData = tab.getAttribute('data-tab');
      tabContents.forEach(content => {
        content.classList.remove('active');
        if (content.getAttribute('id') === tabData) {
          content.classList.add('active');
        }
      });
      tabs.forEach(tab => {
        tab.classList.remove('active');
      });
      tab.classList.add('active');
    });
  });

  subTabs.forEach(subTab => {
    subTab.addEventListener('click', () => {
      const subTabData = subTab.getAttribute('data-tab');
      subTabContents.forEach(content => {
        content.classList.remove('active');
        if (content.getAttribute('id') === subTabData) {
          content.classList.add('active');
        }
      });
      subTabs.forEach(subTab => {
        subTab.classList.remove('active');
      });
      subTab.classList.add('active');
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll('.tab-btn');
  const subTabs = document.querySelectorAll('.sub-tab-btn3');
  const tabContents = document.querySelectorAll('.tab-content');
  const subTabContents = document.querySelectorAll('.sub-tab-content3');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabData = tab.getAttribute('data-tab');
      tabContents.forEach(content => {
        content.classList.remove('active');
        if (content.getAttribute('id') === tabData) {
          content.classList.add('active');
        }
      });
      tabs.forEach(tab => {
        tab.classList.remove('active');
      });
      tab.classList.add('active');
    });
  });

  subTabs.forEach(subTab => {
    subTab.addEventListener('click', () => {
      const subTabData = subTab.getAttribute('data-tab');
      subTabContents.forEach(content => {
        content.classList.remove('active');
        if (content.getAttribute('id') === subTabData) {
          content.classList.add('active');
        }
      });
      subTabs.forEach(subTab => {
        subTab.classList.remove('active');
      });
      subTab.classList.add('active');
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll('.tab-btn');
  const subTabs = document.querySelectorAll('.sub-tab-btn4');
  const tabContents = document.querySelectorAll('.tab-content');
  const subTabContents = document.querySelectorAll('.sub-tab-content4');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabData = tab.getAttribute('data-tab');
      tabContents.forEach(content => {
        content.classList.remove('active');
        if (content.getAttribute('id') === tabData) {
          content.classList.add('active');
        }
      });
      tabs.forEach(tab => {
        tab.classList.remove('active');
      });
      tab.classList.add('active');
    });
  });

  subTabs.forEach(subTab => {
    subTab.addEventListener('click', () => {
      const subTabData = subTab.getAttribute('data-tab');
      subTabContents.forEach(content => {
        content.classList.remove('active');
        if (content.getAttribute('id') === subTabData) {
          content.classList.add('active');
        }
      });
      subTabs.forEach(subTab => {
        subTab.classList.remove('active');
      });
      subTab.classList.add('active');
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll('.tab-btn');
  const subTabs = document.querySelectorAll('.sub-tab-btn5');
  const tabContents = document.querySelectorAll('.tab-content');
  const subTabContents = document.querySelectorAll('.sub-tab-content5');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabData = tab.getAttribute('data-tab');
      tabContents.forEach(content => {
        content.classList.remove('active');
        if (content.getAttribute('id') === tabData) {
          content.classList.add('active');
        }
      });
      tabs.forEach(tab => {
        tab.classList.remove('active');
      });
      tab.classList.add('active');
    });
  });

  subTabs.forEach(subTab => {
    subTab.addEventListener('click', () => {
      const subTabData = subTab.getAttribute('data-tab');
      subTabContents.forEach(content => {
        content.classList.remove('active');
        if (content.getAttribute('id') === subTabData) {
          content.classList.add('active');
        }
      });
      subTabs.forEach(subTab => {
        subTab.classList.remove('active');
      });
      subTab.classList.add('active');
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll('.tab-btn');
  const subTabs = document.querySelectorAll('.sub-tab-btn6');
  const tabContents = document.querySelectorAll('.tab-content');
  const subTabContents = document.querySelectorAll('.sub-tab-content6');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabData = tab.getAttribute('data-tab');
      tabContents.forEach(content => {
        content.classList.remove('active');
        if (content.getAttribute('id') === tabData) {
          content.classList.add('active');
        }
      });
      tabs.forEach(tab => {
        tab.classList.remove('active');
      });
      tab.classList.add('active');
    });
  });

  subTabs.forEach(subTab => {
    subTab.addEventListener('click', () => {
      const subTabData = subTab.getAttribute('data-tab');
      subTabContents.forEach(content => {
        content.classList.remove('active');
        if (content.getAttribute('id') === subTabData) {
          content.classList.add('active');
        }
      });
      subTabs.forEach(subTab => {
        subTab.classList.remove('active');
      });
      subTab.classList.add('active');
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  let menuBtn = document.querySelector('.menu-btn');
  let menu = document.querySelector('.menu');
  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
  });
});
// svg
$(function () {
  jQuery('img.svg').each(function () {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function (data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');

      // Add replaced image's ID to the new SVG
      if (typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');

      // Check if the viewport is set, else we gonna set it if we can.
      if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }

      // Replace image with new SVG
      $img.replaceWith($svg);

    }, 'xml');

  });
});

// document.addEventListener("DOMContentLoaded", () => {
//   class ItcTabs {
//     constructor(target, config) {
//       const defaultConfig = {};
//       this._config = Object.assign(defaultConfig, config);
//       this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
//       this._elButtons = this._elTabs.querySelectorAll('.swiper1 .tabs__btn');
//       this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
//       this._eventShow = new Event('tab.itc.change');
//       this._init();
//       this._events();
//     }
//     _init() {
//       this._elTabs.setAttribute('role', 'tablist');
//       this._elButtons.forEach((el, index) => {
//         el.dataset.index = index;
//         el.setAttribute('role', 'tab');
//         this._elPanes[index].setAttribute('role', 'tabpanel');
//       });
//     }
//     show(elLinkTarget) {
//       const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
//       const elLinkActive = this._elTabs.querySelector('.swiper1 .tabs__btn_active');
//       const elPaneShow = this._elTabs.querySelector('.tabs__pane_show');
//       if (elLinkTarget === elLinkActive) {
//         return;
//       }
//       elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
//       elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null;
//       elLinkTarget.classList.add('tabs__btn_active');
//       elPaneTarget.classList.add('tabs__pane_show');
//       this._elTabs.dispatchEvent(this._eventShow);
//       elLinkTarget.focus();
//     }
//     showByIndex(index) {
//       const elLinkTarget = this._elButtons[index];
//       elLinkTarget ? this.show(elLinkTarget) : null;
//     };
//     _events() {
//       this._elTabs.addEventListener('click', (e) => {
//         const target = e.target.closest('.tabs__btn');
//         if (target) {
//           e.preventDefault();
//           this.show(target);
//         }
//       });
//     }
//   }

//   // инициализация .tabs как табов
//   new ItcTabs('.tabs');
// });

// document.addEventListener("DOMContentLoaded", () => {
//   class ItcTabs {
//     constructor(target, config) {
//       const defaultConfig = {};
//       this._config = Object.assign(defaultConfig, config);
//       this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
//       this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
//       this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
//       this._eventShow = new Event('tab.itc.change');
//       this._init();
//       this._events();
//     }
//     _init() {
//       this._elTabs.setAttribute('role', 'tablist');
//       this._elButtons.forEach((el, index) => {
//         el.dataset.index = index;
//         el.setAttribute('role', 'tab');
//         this._elPanes[index].setAttribute('role', 'tabpanel');
//       });
//     }
//     show(elLinkTarget) {
//       const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
//       const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
//       const elPaneShow = this._elTabs.querySelector('.tabs__pane_show');
//       if (elLinkTarget === elLinkActive) {
//         return;
//       }
//       elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
//       elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null;
//       elLinkTarget.classList.add('tabs__btn_active');
//       elPaneTarget.classList.add('tabs__pane_show');
//       this._elTabs.dispatchEvent(this._eventShow);
//       elLinkTarget.focus();
//     }
//     showByIndex(index) {
//       const elLinkTarget = this._elButtons[index];
//       elLinkTarget ? this.show(elLinkTarget) : null;
//     };
//     _events() {
//       this._elTabs.addEventListener('click', (e) => {
//         const target = e.target.closest('.tabs__btn');
//         if (target) {
//           e.preventDefault();
//           this.show(target);
//         }
//       });
//     }
//   }

//   // инициализация .tabs как табов
//   new ItcTabs('.tabs2');
// });
// document.addEventListener("DOMContentLoaded", () => {
//   class ItcTabs {
//     constructor(target, config) {
//       const defaultConfig = {};
//       this._config = Object.assign(defaultConfig, config);
//       this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
//       this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
//       this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
//       this._eventShow = new Event('tab.itc.change');
//       this._init();
//       this._events();
//     }
//     _init() {
//       this._elTabs.setAttribute('role', 'tablist');
//       this._elButtons.forEach((el, index) => {
//         el.dataset.index = index;
//         el.setAttribute('role', 'tab');
//         this._elPanes[index].setAttribute('role', 'tabpanel');
//       });
//     }
//     show(elLinkTarget) {
//       const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
//       const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
//       const elPaneShow = this._elTabs.querySelector('.tabs__pane_show');
//       if (elLinkTarget === elLinkActive) {
//         return;
//       }
//       elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
//       elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null;
//       elLinkTarget.classList.add('tabs__btn_active');
//       elPaneTarget.classList.add('tabs__pane_show');
//       this._elTabs.dispatchEvent(this._eventShow);
//       elLinkTarget.focus();
//     }
//     showByIndex(index) {
//       const elLinkTarget = this._elButtons[index];
//       elLinkTarget ? this.show(elLinkTarget) : null;
//     };
//     _events() {
//       this._elTabs.addEventListener('click', (e) => {
//         const target = e.target.closest('.tabs__btn');
//         if (target) {
//           e.preventDefault();
//           this.show(target);
//         }
//       });
//     }
//   }

//   // инициализация .tabs как табов
//   new ItcTabs('.tabs3');
// });
// document.addEventListener("DOMContentLoaded", () => {
//   class ItcTabs {
//     constructor(target, config) {
//       const defaultConfig = {};
//       this._config = Object.assign(defaultConfig, config);
//       this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
//       this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
//       this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
//       this._eventShow = new Event('tab.itc.change');
//       this._init();
//       this._events();
//     }
//     _init() {
//       this._elTabs.setAttribute('role', 'tablist');
//       this._elButtons.forEach((el, index) => {
//         el.dataset.index = index;
//         el.setAttribute('role', 'tab');
//         this._elPanes[index].setAttribute('role', 'tabpanel');
//       });
//     }
//     show(elLinkTarget) {
//       const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
//       const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
//       const elPaneShow = this._elTabs.querySelector('.tabs__pane_show');
//       if (elLinkTarget === elLinkActive) {
//         return;
//       }
//       elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
//       elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null;
//       elLinkTarget.classList.add('tabs__btn_active');
//       elPaneTarget.classList.add('tabs__pane_show');
//       this._elTabs.dispatchEvent(this._eventShow);
//       elLinkTarget.focus();
//     }
//     showByIndex(index) {
//       const elLinkTarget = this._elButtons[index];
//       elLinkTarget ? this.show(elLinkTarget) : null;
//     };
//     _events() {
//       this._elTabs.addEventListener('click', (e) => {
//         const target = e.target.closest('.tabs__btn');
//         if (target) {
//           e.preventDefault();
//           this.show(target);
//         }
//       });
//     }
//   }

//   // инициализация .tabs как табов
//   new ItcTabs('.tabs4');
// });
// document.addEventListener("DOMContentLoaded", () => {
//   class ItcTabs {
//     constructor(target, config) {
//       const defaultConfig = {};
//       this._config = Object.assign(defaultConfig, config);
//       this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
//       this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
//       this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
//       this._eventShow = new Event('tab.itc.change');
//       this._init();
//       this._events();
//     }
//     _init() {
//       this._elTabs.setAttribute('role', 'tablist');
//       this._elButtons.forEach((el, index) => {
//         el.dataset.index = index;
//         el.setAttribute('role', 'tab');
//         this._elPanes[index].setAttribute('role', 'tabpanel');
//       });
//     }
//     show(elLinkTarget) {
//       const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
//       const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
//       const elPaneShow = this._elTabs.querySelector('.tabs__pane_show');
//       if (elLinkTarget === elLinkActive) {
//         return;
//       }
//       elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
//       elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null;
//       elLinkTarget.classList.add('tabs__btn_active');
//       elPaneTarget.classList.add('tabs__pane_show');
//       this._elTabs.dispatchEvent(this._eventShow);
//       elLinkTarget.focus();
//     }
//     showByIndex(index) {
//       const elLinkTarget = this._elButtons[index];
//       elLinkTarget ? this.show(elLinkTarget) : null;
//     };
//     _events() {
//       this._elTabs.addEventListener('click', (e) => {
//         const target = e.target.closest('.tabs__btn');
//         if (target) {
//           e.preventDefault();
//           this.show(target);
//         }
//       });
//     }
//   }

//   // инициализация .tabs как табов
//   new ItcTabs('.tabs5');
// });
// document.addEventListener("DOMContentLoaded", () => {
//   class ItcTabs {
//     constructor(target, config) {
//       const defaultConfig = {};
//       this._config = Object.assign(defaultConfig, config);
//       this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
//       this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
//       this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
//       this._eventShow = new Event('tab.itc.change');
//       this._init();
//       this._events();
//     }
//     _init() {
//       this._elTabs.setAttribute('role', 'tablist');
//       this._elButtons.forEach((el, index) => {
//         el.dataset.index = index;
//         el.setAttribute('role', 'tab');
//         this._elPanes[index].setAttribute('role', 'tabpanel');
//       });
//     }
//     show(elLinkTarget) {
//       const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
//       const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
//       const elPaneShow = this._elTabs.querySelector('.tabs__pane_show');
//       if (elLinkTarget === elLinkActive) {
//         return;
//       }
//       elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
//       elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null;
//       elLinkTarget.classList.add('tabs__btn_active');
//       elPaneTarget.classList.add('tabs__pane_show');
//       this._elTabs.dispatchEvent(this._eventShow);
//       elLinkTarget.focus();
//     }
//     showByIndex(index) {
//       const elLinkTarget = this._elButtons[index];
//       elLinkTarget ? this.show(elLinkTarget) : null;
//     };
//     _events() {
//       this._elTabs.addEventListener('click', (e) => {
//         const target = e.target.closest('.tabs__btn');
//         if (target) {
//           e.preventDefault();
//           this.show(target);
//         }
//       });
//     }
//   }

//   // инициализация .tabs как табов
//   new ItcTabs('.tabs6');
// });
// document.addEventListener("DOMContentLoaded", () => {
//   class ItcTabs {
//     constructor(target, config) {
//       const defaultConfig = {};
//       this._config = Object.assign(defaultConfig, config);
//       this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
//       this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
//       this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
//       this._eventShow = new Event('tab.itc.change');
//       this._init();
//       this._events();
//     }
//     _init() {
//       this._elTabs.setAttribute('role', 'tablist');
//       this._elButtons.forEach((el, index) => {
//         el.dataset.index = index;
//         el.setAttribute('role', 'tab');
//         this._elPanes[index].setAttribute('role', 'tabpanel');
//       });
//     }
//     show(elLinkTarget) {
//       const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
//       const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
//       const elPaneShow = this._elTabs.querySelector('.tabs__pane_show');
//       if (elLinkTarget === elLinkActive) {
//         return;
//       }
//       elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
//       elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null;
//       elLinkTarget.classList.add('tabs__btn_active');
//       elPaneTarget.classList.add('tabs__pane_show');
//       this._elTabs.dispatchEvent(this._eventShow);
//       elLinkTarget.focus();
//     }
//     showByIndex(index) {
//       const elLinkTarget = this._elButtons[index];
//       elLinkTarget ? this.show(elLinkTarget) : null;
//     };
//     _events() {
//       this._elTabs.addEventListener('click', (e) => {
//         const target = e.target.closest('.tabs__btn');
//         if (target) {
//           e.preventDefault();
//           this.show(target);
//         }
//       });
//     }
//   }

//   // инициализация .tabs как табов
//   new ItcTabs('.tabs7');
// });
