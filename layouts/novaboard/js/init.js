jQuery.noConflict();
jQuery(document).ready(function($) {

    // код для popup галереи
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });

    // код для показа карты по клику
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // загрузка видео по клику
    "use strict";
    $(function() {
        $(".youtube").each(function() {
            // Based on the YouTube ID, we can easily find the thumbnail image
            $(this).css('background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/sddefault.jpg)');

            // Overlay the Play icon to make it look like a video player
            $(this).append($('<div/>', { 'class': 'play' }));

            $(document).delegate('#' + this.id, 'click', function() {
                // Create an iFrame with autoplay set to true
                var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
                if ($(this).data('params')) iframe_url += '&' + $(this).data('params');

                // The height and width of the iFrame should be the same as parent
                var iframe = $('<iframe/>', { 'frameborder': '0', 'src': iframe_url, 'width': $(this).width(), 'height': $(this).height() })

                // Replace the YouTube thumbnail with YouTube HTML5 Player
                $(this).replaceWith(iframe);
            });
        });
    });


    // вывод  popup формы
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#id-field-login',
        closeBtnInside: true,

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                if ($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#id-field-login';
                }
            }
        }
    });


    // плагин carouFredSel для слайдера
    $("#slides").carouFredSel({
        circular: true,
        infinite: true,
        direction: "left",
        auto: {
            play: true,
            timeoutDuration: 3000
        },
        scroll: {
            fx: "crossfade",
            duration: 750,
            pauseOnHover: true
        },
        prev: {
            button: "#slider_prev",
            //key: "left"
        },
        next: {
            button: "#slider_next",
            //key: "right"
        },
        pagination: "#slider_pag"
    });


    // делаю одинаковые отступы в меню
    //функция имеет параметр width - ширина меню
    $.fn.fullWideMenu = function(width) {
        var $menu = $(this), //запишем элемент которому применена наша функция
            $menuItems = $('>li', $menu), //элементы меню
            qty = $menuItems.length, //кол-во элементов меню
            itemWidth = 0, //ширина пункта меню
            mWidth = 0, //ширина всех пунктов меню
            delta = 0, //отступ между меню
            decimal = 0, //дробная часть отступа
            floatPart = 0; //суммарная дробная часть отступа между всеми пунктами, округленная к ближайшему меньшему целому значению

        //обходим каждый пункт меню
        $menuItems.each(function() {
            itemWidth = Math.ceil($(this)[0].getBoundingClientRect().width); //узнаем реальную ширину пункта и округляем ее к ближайшему большему целому числу

            $(this).width(itemWidth); //задаем округленную ширину текущему пункту
            mWidth += itemWidth; //подсчитываем суммарную ширину всех пунктов
        });

        delta = (width - mWidth) / (qty - 1); //узнаем значение отступа между пунктами меню
        decimal = delta % 1; //берем дробную часть у отступа

        delta = Math.floor(delta); //округляем отступ к ближайшему меньшему целому числу
        floatPart = Math.floor(decimal * (qty - 1)); //суммарное округленное значение дробных частей отступа между пунктами

        $menuItems.css({ paddingLeft: delta + 'px' }); //всем пунктам меню задаем отступ слева
        $menuItems.first().css({ paddingLeft: 0 }); //у первого пункта убираем его, т.к. отступ должен быть только между пунктами меню
        $menuItems.last().css({ paddingLeft: (delta + floatPart) + 'px' }); //последнему пункту к отступу суммируем дробную часть всех отступов
    }

    //применяем функцию к нашему меню со значение ширины = 980 пикселов
    $('.main-navigation').fullWideMenu(976); // 976, т.к. у активного пункта меню идет border по 2зч в каждую строны

});
