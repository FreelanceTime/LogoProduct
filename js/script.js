//const { parseHTML } = require("cheerio");

//1 для меню бургера в шапке
    $('.header__burger').click(function (event) {
        $('.header__burger,.menu__body' ).toggleClass('active');
    });

    $('.menu-page__burger').click(function (event) {
        $('.menu-page__burger').toggleClass('active');//крестик для бургера в боковом меню
        $('.menu-page__body').slideToggle("slow");//боковое меню выезжает вниз 
    });
    

    if (document.documentElement.clientWidth < 992) {
        let menuParents = document.querySelectorAll('.menu-page__parent a');
        for (index = 0; index < menuParents.length; index++) {
            const menuParent = menuParents[index];
            menuParent.addEventListener("click", function (e) {
                menuParent.parentElement.classList.toggle('active');
                e.preventDefault();
            });
        }
    } else {
        let menuParents = document.querySelectorAll('.menu-page__parent');
        for (index = 0; index < menuParents.length; index++) {
            const menuParent = menuParents[index];
            menuParent.addEventListener("mouseenter", function (e) {
                menuParent.classList.add('active');
            });
            menuParent.addEventListener("mouseleave", function (e) {
                menuParent.classList.remove('active');
            });
        }
    }
/*let menuPageBurger = document.querySelectorAll('.menu-page__burger');
let menuPageBody = document.querySelectorAll('.menu-page__body');
menuPageBurger.addEventListener("click", function(e) {
    menuPageBurger.classList.toggle('active');

});*/
//ниже простой способ повернуть стрелку в строке "везде"

$('.search-page__title').click(function (event) {
    $('.search-page__select').toggleClass('active');//переворачивается стрелка
    $('.categories-search').slideToggle("slow");//меню для поиска выезжает вниз 
}); 

//ниже для выбора товаров из выпадающего меню под "Везде"

let searchSelect = document.querySelector('.search-page__title');
let checkboxCategories = document.querySelectorAll('.categories-search__checkbox');
for (let index = 0; index < checkboxCategories.length; index++) {
    const checkboxCategory = checkboxCategories[index];
    checkboxCategory.addEventListener("change", function (e) {
        checkboxCategory.classList.toggle('active');
        let checkboxActiveCategories = document.querySelectorAll('.categories-search__checkbox.active');
        if (checkboxActiveCategories.length > 0) {
            searchSelect.classList.add('categories');
            let searchQuantity = searchSelect.querySelector('.search-page__quantity');
            searchQuantity.innerHTML = searchQuantity.getAttribute('data-text') + ' ' + checkboxActiveCategories.length;
        } else {
            searchSelect.classList.remove('categories');
        }
    });
}
let imagesSubSlider = new Swiper('.images-product__subslider', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
})
let imagesMainSlider = new Swiper('.images-product__mainslider', {
    loop: true,
    thumbs: {//ЧТОБЫ СЛАЙДЕРЫ БЫЛИ ВЗАИМОСВЯЗАНЫ. ПЕРЕМЕННЫЕ НАЗНАЧЕНЫ И К ГЛАВНОМУ ПРИВЯЗЫВАЕТСЯ САБСЛАЙД
        swiper: imagesSubSlider
    },
   //ЧТОБЫ ВЫДЕЛЕННЫЙ СВЯЗАННЫЙ СЛАЙД БЫЛ В РАМКЕ, НУЖНО ПОЯВЛЯЮЩИЙСЯ КЛАСС swiper-slide-thumb-active СТИЛИЗОВАТЬ В РАМКУ
})

//ДЛЯ КВОНТИТИ НА СТРАНИЦЕ PAGEpRODUCT. счетчик в инпуте

let quantityButtons = document.querySelectorAll('.quantity__button');
if (quantityButtons.length > 0) {
    for (let index = 0; index < quantityButtons.length; index++){
        const quantityButton = quantityButtons[index];
        quantityButton.addEventListener("click", function (e) {
            let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
            if (quantityButton.classList.contains('quantity-button__plus')) {
                value++;
            } else {
                value = value - 1;
                if (value < 1) {
                    value = 1
                }
            }
            quantityButton.closest('.quantity').querySelector('input').value = value;
        });
    }
}

//ВАРИАНТ ДЛЯ ВЫДЕЛЕНИЯ ССЫЛОК ДЛЯ ТАБС ПРИ НАВЕДЕНИИ МЫШЬЮ
/*let productItems = document.querySelectorAll('.info-product__item');
let tabsItems = document.querySelectorAll('.tabs-item');
for (let index = 0; index < tabsItems.length; index++) {
    const tabsItem = tabsItems[index];
    tabsItem.addEventListener("mouseenter", function (e) {
        tabsItem.classList.add('active');
    });
    tabsItem.addEventListener("mouseleave", function (e) {
        tabsItem.classList.remove('active');
    });
}*/
//код ДЛЯ БЛОКА ДЛЯ ВЫДЕЛЕНИЯ ССЫЛОК И НУЖНОЙ ВКЛАДКИ
$('.js-tab-trigger').click(function() {
    let id = $(this).attr('data-tab'),
        content = $('.js-tab-content[data-tab="'+ id +'"]');
    
    $('.js-tab-trigger.active').removeClass('active');
    $(this).addClass('active');
    
    $('.js-tab-content.active').removeClass('active');
    content.addClass('active');
 });
 
 let jsTriggers = document.querySelectorAll('.js-tab-trigger'),
     jsContents = document.querySelectorAll('.js-tab-content');
 
 jsTriggers.forEach(function(trigger) {
    trigger.addEventListener('click', function() {
       let id = this.getAttribute('data-tab'),
           content = document.querySelector('.js-tab-content[data-tab="'+id+'"]'),
           activeTrigger = document.querySelector('.js-tab-trigger.active'),
           activeContent = document.querySelector('.js-tab-content.active');
       
       activeTrigger.classList.remove('active');
       trigger.classList.add('active');
       
       activeContent.classList.remove('active');
       content.classList.add('active');
    });
 });


