 //get browser window scroolwidth
 function getScrollWidth() {

     return (0);

 }

 // ClearForm
 function clearForm(form) {
     $(':input', form).each(function() {
         var type = this.type;
         var tag = this.tagName.toLowerCase();
         if (type == 'text' || type == 'password' || tag == 'textarea') $(this).val('');
         else if (type == 'checkbox' || type == 'radio') this.checked = false;
         else if (tag == 'select') this.selectedIndex = -1;
     });
 }




 //phone mask
 $(document).on("focus", "input[name=phone]", function() {
     $.mask.definitions[9] = '';
     $.mask.definitions.d = '[0-9]';
     $("input[name=phone]").mask("+d (ddd) ddd-dd-dd", { placeholder: "_" });
 });





 //check phone
 var phoneError = false;

 function checkPhone(phoneInp) {
     var lengt = phoneInp.val().length;
     if (lengt === 0) {
         phoneError = true;
     } else {
         phoneError = false;
     }
     return phoneError;
 }






 // YandexGoal
 function goal(goal_id) {
     yaCounter36635055.reachGoal(goal_id);
 }

 function goal(goal_id) {
     yaCounter37737740.reachGoal(goal_id);
 }

 $(".goalButton").on('click', function() {
     var goal_id = $(this).data('goal');
     goal(goal_id);
 });



 $(document).on('click', '.scroll', function() {
     var top = '.mfp-wrap';

     $(top).animate({
         scrollTop: 553
     }, 500);
     return false;
 });
 //scroolTop functions - end


 //top menu fisxing init
 function topMenuInit(hlnHeight) {
     if ($(window).scrollTop() > hlnHeight) {
         $('.hln').addClass('fixed');
     } else {
         $('.hln').removeClass('fixed');
     }
 }

 topMenuInit($('.hln').height());

 var scrollTimeout;

 window.addEventListener('scroll', function(evt) {
     clearTimeout(scrollTimeout);
     scrollTimeout = setTimeout(topMenuInit($('.hln').height()), 50);
 });
 //top menu fisxing init - end



 //Popups
 $('.mfp-button').magnificPopup({
     type: 'inline',
     closeMarkup: '<button title="Close (Esc)" type="button" class="mfp-close">Х</button>',
     removalDelay: 300,
     mainClass: 'mfp-fade',
     overflowY: "scroll",
     callbacks: {
         open: function() {
             $('.hln').css('padding-right', 17);
         },
         close: function() {
             $('.hln').css('padding-right', 0);
         }
     }
 });


 $(".btn-write").magnificPopup({
     type: 'inline',
     closeMarkup: '<button title="Close (Esc)" type="button" class="mfp-close">Х</button>',
     removalDelay: 300,
     mainClass: 'mfp-fade',
     overflowY: "scroll",
     callbacks: {
         open: function() {
             $('.hln').css('padding-right', 17);
             $(".popup").find('form').find('input[type="text"]').val('');
             $(".popup").find('form').find('textarea').val('');

         },
         close: function() {
             $('.hln').css('padding-right', 0);
         }
     }
 });

 $(".work-hover a").magnificPopup({
     type: 'ajax',
     closeMarkup: '<button title="Close (Esc)" type="button" class="mfp-close">Х</button>',
     removalDelay: 300,
     mainClass: 'mfp-fade',
     callbacks: {
         beforeOpen: function() {
             var goal_id = this.st.el.data('goal');
             goal(goal_id);
         },
         open: function() {
             $('.hln').css('padding-right', 17);
         },
         close: function() {
             $('.hln').css('padding-right', 0);
         }
     }
     // modal:true
 });



 $('.asd__link').magnificPopup({
     type: 'image',
     closeMarkup: '<button title="Close (Esc)" type="button" class="mfp-close">Х</button>',
     gallery: {
         enabled: true
     },
     callbacks: {
         open: function() {
             $('.hln').css('padding-right', 17);
         },
         close: function() {
             $('.hln').css('padding-right', 0);
         }
     }
 });
 $('.clients_item_cert a').magnificPopup({
     type: 'image',
     closeMarkup: '<button title="Close (Esc)" type="button" class="mfp-close">Х</button>',
     callbacks: {
         open: function() {
             $('.hln').css('padding-right', 17);
         },
         close: function() {
             $('.hln').css('padding-right', 0);
         }
     }
 });
 $('.amo_cert_left_side a').magnificPopup({
     type: 'image',
     closeMarkup: '<button title="Close (Esc)" type="button" class="mfp-close">Х</button>',
     callbacks: {
         open: function() {
             $('.hln').css('padding-right', 17);
         },
         close: function() {
             $('.hln').css('padding-right', 0);
         }
     }
 });

 var myMap;
 $(document).on('ready', function() {
     if ($('.hln').length) {
         var heightHln = $('.hln').outerHeight() * -1;
         $('.anchor').parent().css('position', 'relative');
         $('.anchor').css('top', heightHln);
     }
     $('#clients_about').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         infinite: true,
         adaptiveHeight: true,
         prevArrow: '<button type=\"button\" class=\"slick-prev\"></button>',
         nextArrow: '<button type=\"button\" class=\"slick-next\"></button>',
         responsive: [{
             breakpoint: 730,
             settings: {
                 arrows: false,
                 dots: true
             }
         }]
     });

     $('#clients_slider').slick({
         slidesToShow: 5,
         slidesToScroll: 5,
         infinite: false,
         adaptiveHeight: true,
         prevArrow: '<button type=\"button\" class=\"slick-prev\"></button>',
         nextArrow: '<button type=\"button\" class=\"slick-next\"></button>',
         responsive: [{
             breakpoint: 730,
             settings: {
                 slidesToShow: 3,
                 slidesToScroll: 1
             },
             breakpoint: 546,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1,
                 arrows: false,
                 dots: true
             }
         }]
     });
     $('.slider3').slick({
         slidesToShow: 3,
         slidesToScroll: 3,
         adaptiveHeight: true,
         prevArrow: '<button type=\"button\" class=\"slick-prev\"></button>',
         nextArrow: '<button type=\"button\" class=\"slick-next\"></button>',
         responsive: [{
             breakpoint: 1200,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
             },
             breakpoint: 730,
             settings: {
                 arrows: false,
                 dots: true,
                 slidesToShow: 1,
                 slidesToScroll: 1
             }
         }]
     });

     $('.asd').slick({
         slidesToShow: 5,
         slidesToScroll: 1,
         arrows: false,
         infinite: false,
         adaptiveHeight: true,
         responsive: [{
                 breakpoint: 1200,
                 settings: {
                     slidesToShow: 3,
                     slidesToScroll: 3,
                     dots: true
                 }
             },
             {
                 breakpoint: 730,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 2,
                     dots: true
                 }
             }
         ]
     });
     $('.rotate_slider2').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: true,
         infinite: false,
         adaptiveHeight: true,
         prevArrow: '<button type=\"button\" class=\"slick-prev btn-blue\"><span class="text">ПРЕДЫДУЩИЙ ШАГ</span></button>',
         nextArrow: '<button type=\"button\" class=\"slick-next btn-blue\"><span class="text">СЛЕДУЮЩИЙ ШАГ</span></button>',
         adaptiveHeight: true,
         responsive: [{
             breakpoint: 546,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1,
                 arrows: false,
                 dots: true
             }
         }]
     });
     $('.rotate_slider').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: true,
         infinite: false,
         adaptiveHeight: true,
         prevArrow: '<button type=\"button\" class=\"slick-prev btn-blue\"><span class="text">ПРЕДЫДУЩИЙ ШАГ</span></button>',
         nextArrow: '<button type=\"button\" class=\"slick-next btn-blue\"><span class="text">СЛЕДУЮЩИЙ ШАГ</span></button>',
         responsive: [{
             breakpoint: 730,
             settings: {
                 arrows: false,
                 dots: true
             }
         }]
     });
     $('#bx-pager a').on('click', function(e) {
         e.preventDefault();
         var slideIndex = $(this).data('slide-index');
         $('.rotate_slider').slick('slickGoTo', slideIndex);


     });
     $('.podhod_step').on('click', function() {
         var goto = $(this).data('num');
         $('.rotate_slider').slick('slickGoTo', goto);
     });

     //rotation slider
     var rotval = 0,
         rotvall = 0,
         rotvalll = 0;

     $('.rotate_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {

         $('.podhod_step').removeClass('active');
         $('.podhod_step').eq(nextSlide).addClass('active');

         $('#bx-pager a').removeClass('active');
         $('#bx-pager a').eq(nextSlide).addClass('active');

         $(".links-ss .ss").each(function(index, el) {

             if ($(this).hasClass('s-1')) {
                 rotval += 45;
                 $(this).css('transform', 'rotate(' + rotval + 'deg)');
             }
             if ($(this).hasClass('s-2')) {
                 rotvall += 87;
                 $(this).css('transform', 'rotate(' + rotval + 'deg)');
             }
             if ($(this).hasClass('s-3')) {
                 rotvalll += 97;
                 $(this).css('transform', 'rotate(' + rotvalll + 'deg)');
             }

         });
     });




     var $grid = $('.works_items').isotope({
         // options
         itemSelector: '.work',
         columnWidth: '.work',
         stagger: 30,
         layoutMode: 'packery',
         getSortData: {
             sortinfo: '[data-sortinfo] parseInt'
         },
         sortBy: 'sortinfo',
     });


     $('.works-nav__item').each(function(){
        if($(this).hasClass('active') && $(this).data('show') === '.land-block'){
            $('.work').hide();
            $('.land-block').slice(0,11).removeClass('hidden');
            $('.land-block').slice(12,$('.show').length - 1).addClass('hidden');
            
            $('.land-block').show();
            $grid.isotope('layout');
        }
     });
     $('.works-nav__item').on('click', function(e) {
         e.preventDefault();
         $('.works-nav__item').removeClass('active');
         $(this).addClass('active');

         var show = $(this).data('show');


         


         $('.work').hide();

         $(show).slice(0,11).removeClass('hidden');
         $(show).slice(12,$('.show').length - 1).addClass('hidden');

         $(show).show();

         $('#showAllWorks').removeClass('hidden');

         $grid.isotope('layout');

     });
     $('#showAllWorks').on('click', function(e) {
         e.preventDefault();
         $(this).addClass('hidden');
         $('.work').removeClass('hidden');
         $grid.isotope('layout');

     });


     $('.you_ad__controll__item').on('click', function() {
         $('.you_ad__controll__item').removeClass('active');
         $(this).addClass('active');

         $('.you_ad__item').hide();
         var item = $(this).data('item');;
         $(item).show();
     });




     //mobile menu

     var slideout = new Slideout({
         'panel': document.getElementById('panel'),
         'menu': document.getElementById('menu'),
         'padding': 256,
         'tolerance': 70,
         'touch': false
     });

     $('#hamburger').on('click', function() {
         slideout.toggle();
     });
     $('#hamb2').on('click', function() {
         slideout.toggle();
     });
     $('#close_hamb').on('click', function() {
         slideout.toggle();
     });
     if ($('.hln').length) {
         var fixed = document.querySelector('.hln');
     }
     if ($('.hln_static').length) {
         var fixed = document.querySelector('.hln_static');
         var fixed2;
     }


     slideout.on('translate', function(translated) {
         fixed.style.transform = 'translateX(' + translated + 'px)';
         fixed2 = document.getElementById('rc-phone');
         if (fixed2) {
             fixed2.style.transform = 'translateX(' + translated + 'px)';
         }
     });

     slideout.on('beforeopen', function() {
         fixed.style.transition = 'transform 300ms ease';
         fixed.style.transform = 'translateX(256px)';

         fixed2 = document.getElementById('rc-phone');
         if (fixed2) {
             fixed2.style.transition = 'transform 300ms ease';
             fixed2.style.transform = 'translateX(256px)';
         }

     });

     slideout.on('beforeclose', function() {
         fixed.style.transition = 'transform 300ms ease';
         fixed.style.transform = 'translateX(0px)';
         fixed.style.transform = 'none';

         fixed2 = document.getElementById('rc-phone');
         if (fixed2) {
             fixed2.style.transition = 'transform 300ms ease';
             fixed2.style.transform = 'translateX(0px)';
             fixed2.style.transform = 'none';
         }
     });

     slideout.on('open', function() {
         fixed.style.transition = '';
     });

     slideout.on('close', function() {
         fixed.style.transition = '';


     });

     //mobile menu - end



     //top sale block init
     var saleOffVal = localStorage.getItem('saleOff');

     if ($('.sale').length && !saleOffVal) {

         var saleHeight = $('.sale').data('height');
         $('.sale').height(saleHeight);
     }
     $('#sale_close').on('click', function() {
         $('.sale').height(0);
         localStorage.setItem('saleOff', 1);
     });

     //top sale block button scroolTo

     var topElemHeight = $('.hln').outerHeight() - $('.hln').find('.sale').height();
     $('.to_pluses').on('click', function(e) {

         var toElem = $(this).attr('href');
         $('.sale').height(0);
         var scrolltop = $(toElem).offset().top - topElemHeight;

         $(top).animate({
             scrollTop: scrolltop
         }, 1000);
         localStorage.setItem('saleOff', 1);
         e.preventDefault();
     });


     $('.spoiler-head').click(function() {
         var par = $(this).parent();
         if (par.hasClass('active')) {
             par.removeClass('active');
             par.children('.spoiler-body').slideUp('slow');
         } else {
             par.addClass('active');
             par.children('.spoiler-body').slideDown('slow');
         }
     });
     //top sale block init - end

     $('#go_top').on('click', function(e) {

         $(top).animate({
             scrollTop: 0
         }, 1000);
         e.preventDefault();

     });

     //yandex map
     if ($('#map').length) {




         ymaps.ready(function() {
             var myPlacemark = new ymaps.Placemark([55.769174, 37.58829], {}, {
                 // Опции.
                 // Необходимо указать данный тип макета.
                 iconLayout: 'default#imageWithContent',
                 // Своё изображение иконки метки.
                 iconImageHref: 'img/icons/map.png',
                 // Размеры метки.
                 iconImageSize: [85, 129],
                 // Смещение левого верхнего угла иконки относительно
                 // её "ножки" (точки привязки).
                 iconImageOffset: [-42, -129],
             });

             myMap = new ymaps.Map('map', {
                 center: [55.769174, 37.58829],
                 zoom: 16,
                 controls: ['zoomControl']

             }, {
                 searchControlProvider: 'yandex#search'
             });
             myMap.behaviors.disable('scrollZoom');
             myMap.geoObjects
                 .add(myPlacemark);

             var documentWidth = $(window).width();

             if (documentWidth <= 1200) {

                 var position = myMap.getGlobalPixelCenter();
                 myMap.setGlobalPixelCenter([position[0] - 100, position[1]]);

             }


         });

     }

     //yandex map - end






 });


 //thanks msgs
 function showMsg() {
     $.magnificPopup.open({
         items: {
             src: '<div id=\"thanks\" class=\"mfp-with-anim form-popup mf_popup\"><p>Спасибо, ваше сообщение отправлено. Наш менеджер скоро свяжется с вами</p></div>'
         },
         closeMarkup: '<button title="Close (Esc)" type="button" class="mfp-close">Х</button>',
         type: 'inline',
         removalDelay: 300,
         mainClass: 'mfp-fade'
     }, 0);
 }

 function showMsg2() {
     $.magnificPopup.open({
         items: {
             src: 'http://soroka-marketing.ru/spasibo.html'
         },
         closeMarkup: '<button title="Close (Esc)" type="button" class="mfp-close">Х</button>',
         type: 'ajax',
         removalDelay: 300,
         mainClass: 'mfp-fade'
     }, 0);
 }
 //thanks msgs - end

 var timer;

 $(document).on('af_complete', function(event, response) {

     if (response.success) {

         yaCounter37737740.reachGoal('SEND_MAIL');

         var form = response.form;
         // Если у формы определённый id
         if (form.attr('id') == 'case_form') {

             showMsg2();
             clearTimeout(timer);
             timer = setTimeout(function() { $.magnificPopup.close(); }, 2500);

         } else {
             showMsg();
             clearTimeout(timer);
             timer = setTimeout(function() { $.magnificPopup.close(); }, 2500);
         }



     }

 });