

window.onload = function () {
    var target = "<?php echo @$_GET['l']; ?>";

    if (target != "") {

        jQuery('a[href^="#' + target + '"]').on('click', function (e) {
            // e.preventDefault();

            var target = this.hash,
                $target = $(target);

            jQuery('html, body').stop().animate({
                'scrollTop': $target.offset().top - 70
            }, 900, 'swing', function () {
                window.location.hash = target;
            });
        });

    }

};




new WOW().init();

//retailslide slider
$('#retailslide').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    touchDrag: false,
    mouseDrag: false,
    responsive: {
        0: {
            items: 3,
            autoplay: true,
            autoplayTimeout: 1000
        },
        768: {
            items: 3,
            touchDrag: true,
            mouseDrag: true,
            autoplay: true,
            autoplayTimeout: 1000
        },
        1000: {
            items: 7
        }
    }
});
//retailslide slider

//product slider destroyed on desktop slide on mobile
function postsCarousel() {
    var checkWidth = $(window).width();
    var owlPost = $(".product-slider");
    if (checkWidth > 991) {
        if (typeof owlPost.data('owl.carousel owl-theme') != 'undefined') {
            owlPost.data('owl.carousel owl-theme').destroy();
        }
        owlPost.removeClass('owl-carousel owl-theme');
    } else if (checkWidth < 991) {
        owlPost.addClass('owl-carousel owl-theme');
        owlPost.owlCarousel({
            loop: false,
            navRewind: false,
            items: 2,
            margin: 10,
            autoplay: false,
            autoplayTimeout: 2000,
            dots: true,
        });
    }
}

postsCarousel();
$(window).resize(postsCarousel);
//product slider destroyed on desktop slide on mobile


//testimonial slider
$('.testimonial-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1,
            touchDrag: false,
            mouseDrag: false
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});
//testimonial slider

//product-slider slider
$('.product-slider-box').owlCarousel({
    loop: true,
    margin: 40,
    nav: true,
    stagePadding: 100,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});
//product-slider slider

//community slider
$('#community-slide').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});
//community slider

//like on product
$(".heart").click(function () {
    $(this).find('.fa-heart').toggleClass('liked');
    $(this).find('.fa-heart-o').toggleClass('unliked');
});
//like on product

// header scripts
$(document).ready(function () {

    // main header search open
    $(".searchopen").click(function () {
        $(this).toggleClass("is-search");
        $('.searchbox').toggleClass("is-search");
    });

    $(".search-close-btn").click(function () {
        $('.searchbox').toggleClass("is-search");
    });
    // main header search open

    // profile login before
    $(".profileopen").click(function () {
        $(this).toggleClass("is-profileopen");
        $('.prolog').toggleClass("is-profileopen");
    });

    $(".guestclose").click(function () {
        $('.prolog').toggleClass("is-profileopen");
        $('.overlay-blur').toggleClass("is-blur");
        $('body').toggleClass("is-unscroll");
    });
    // profile login before


    // profile login after
    $(".profileopen").click(function () {
        $(this).toggleClass("is-profile-after-login");
        $('.profile-after-login').toggleClass("is-profile-after-login");
        $('.overlay-blur').toggleClass("is-blur");
        $('body').toggleClass("is-unscroll");
    });

    $(".guestclose2").click(function () {
        $('.profile-after-login').toggleClass("is-profile-after-login");
        $('.overlay-blur').toggleClass("is-blur");
        $('body').toggleClass("is-unscroll");
    });
    // profile login after

    // basket login before
    /*$(".basketopen").click(function () {
        $(this).toggleClass("is-basketopen");
        $('.baskdetail').toggleClass("is-basketopen");
        $('.overlay-blur').toggleClass("is-blur");
        $('body').toggleClass("is-unscroll");
        });
*/
    $(".basketopen").click(function () {
        var href = $(this).data('route');
        var obj = $(this);
        openbasket(href, obj);

        /* $.ajax({
            type: "get",
            url: href,
            success: function (response) {
                $('.baskdetail').html(response);
                $(this).toggleClass("is-basketopen");
                $('.baskdetail').toggleClass("is-basketopen");
                $('.overlay-blur').toggleClass("is-blur");
                $('body').toggleClass("is-unscroll");
            },
            error: function (textStatus, errorThrown) {

                console.log(textStatus);
                alert(errorThrown);
            }
        }); */
        $(".megamenu").css("display", "none");
    });




    $(document).on("click", ".closebsk", function () {
        $('.baskdetail').toggleClass("is-basketopen");
        $('.overlay-blur').toggleClass("is-blur");
        $('body').toggleClass("is-unscroll");
    });


    // basket login before


    // Mega menu for shop
    $(".openshop").click(function () {
        $('.megamenu').slideToggle();
    });
    // Mega menu for shop

    // account dashboard
    // $(".archive-title").click(function () {
    //     $('.archive-years').slideToggle();
    // });

    // account dashboard
    $(".left-sortbox").click(function () {
        $(this).parent().find('.right-sortbox').slideToggle();
    });

    // order summery
    $(".threeitem").click(function () {
        $('.sortdropdown').slideToggle();
    });

    $(".threeitem").click(function () {
        $('span').toggleClass('rotate-arrow');
    });


});
// header scripts


// navigation on scroll sticky and shrink animation
$(window).scroll(function (e) {
    if ($(this).scrollTop() > 50) {
        $('header').addClass("sticky");
        $('.logo').addClass("sticky");
        $('.accoutn-activity ul li').addClass("sticky");
        $('.hamburger').addClass("sticky");
        $('.menu-mobile.is-active').addClass("sticky");
    } else {
        $('header').removeClass("sticky");
        $('.logo').removeClass("sticky");
        $('.accoutn-activity ul li').removeClass("sticky");
        $('.hamburger').removeClass("sticky");
        $('.menu-mobile.is-active').removeClass("sticky");
    }
    e.preventDefault();
});
// navigation on scroll sticky and shrink animation



// main sidebar mobile navigation
jQuery("#sidepanel_btn, #sidepanel_overlay").bind("click", function (e) {
    e.preventDefault();
    _pos = "left";
    if (jQuery("#sidepanel").hasClass('sidepanel-inverse')) {
        _pos = "left";
    }

    if (jQuery("#sidepanel").is(":hidden")) {

        jQuery("body").append('<span id="sidepanel_overlay"></span>');

        if (_pos == "left") {
            jQuery("#sidepanel").stop().show().animate({
                "left": "0px"
            }, 150);
            $('.fadeoutleft').addClass("slideoutanimate");
        } else {
            jQuery("#sidepanel").stop().show().animate({
                "right": "0px"
            }, 150);

        }

    } else {

        jQuery("#sidepanel_overlay").remove();

        if (_pos == "left") {
            jQuery("#sidepanel").stop().animate({
                "left": "-768px"
            }, 300);
        } else {
            jQuery("#sidepanel").stop().animate({
                "right": "-768px"
            }, 300);

        }

        setTimeout(function () {
            jQuery("#sidepanel").hide();
        }, 500);

    }

    _sidepanel_overlay();

});
// button close
jQuery("#sidepanel_close").bind("click", function (e) {
    e.preventDefault();
    jQuery("#sidepanel_btn").trigger('click');
    $('.fadeoutleft').removeClass("slideoutanimate");
    $('.baskdetail').removeClass("is-basketopen");

});
// overlay click
function _sidepanel_overlay() {
    jQuery("#sidepanel_overlay").unbind();
    jQuery("#sidepanel_overlay").bind("click", function () {
        jQuery("#sidepanel_btn").trigger('click');
    });
}
// 'esc' key
jQuery(document).keyup(function (e) {
    if (e.keyCode == 27) {
        if (jQuery("#sidepanel").is(":visible")) {
            jQuery("a#sidepanel_btn").trigger('click');
        }
    }
});

$('.subscribeModal').click(function () {
    jQuery("#sidepanel_btn").trigger('click');
    //$('#subscribe').modal('show');
});
// main sidebar mobile navigation


// Choose file upload
$('#chooseFile').bind('change', function () {
    var filename = $("#chooseFile").val();
    if (/^\s*$/.test(filename)) {
        $(".file-upload").removeClass('active');
        $("#noFile").text("No file chosen...");
    } else {
        $(".file-upload").addClass('active');
        $("#noFile").text(filename.replace("C:\\fakepath\\", ""));
    }
});
// Choose file upload


// thumbnail slider on sub products page
$(document).ready(function () {

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 3; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: true,
        autoplay: false,
        dots: true,
        loop: true,
        responsiveRefreshRate: 200,
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function () {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: true,
            nav: true,
            margin: 30,
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });
});
// thumbnail slider on sub products page


//plus mins sub products page
jQuery(document).ready(function () {
    // This button will increment the value
    $('.qtyplus').click(function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment only if value is < 20
            if (currentVal < 9999) {
                $('input[name=' + fieldName + ']').val(currentVal + 1);
                $('.qtyminus').val("-").removeAttr('style');
            } else {
                $('.qtyplus').val("+").css('color', '#aaa');
                $('.qtyplus').val("+").css('cursor', 'not-allowed');
            }
        } else {
            // Otherwise put a 0 there
            $('input[name=' + fieldName + ']').val(1);

        }
    });
    // This button will decrement the value till 0
    $(".qtyminus").click(function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 1) {
            // Decrement one only if value is > 1
            $('input[name=' + fieldName + ']').val(currentVal - 1);
            $('.qtyplus').val("+").removeAttr('style');
        } else {
            // Otherwise put a 0 there
            $('input[name=' + fieldName + ']').val(1);
            $('.qtyminus').val("-").css('color', '#aaa');
            $('.qtyminus').val("-").css('cursor', 'not-allowed');
        }
    });
});

$(document).on('click', '.qty-plus', function () {
    $(this).prev().val(+$(this).prev().val() + 1);
});
$(document).on('click', '.qty-minus', function () {
    if ($(this).next().val() > 0) $(this).next().val(+$(this).next().val() - 1);
});

//plus mins sub products page


/** parallax level sub products page */
(function ($) {

    var parallax = -0.5;

    var $bg_images = $(".wp-block-cover-image");
    var offset_tops = [];
    $bg_images.each(function (i, el) {
        offset_tops.push($(el).offset().top);
    });

    $(window).scroll(function (e) {
        e.preventDefault();
        var dy = $(this).scrollTop();
        $bg_images.each(function (i, el) {
            var ot = offset_tops[i];
            $(el).css("background-position", "50% " + (dy - ot) * parallax + "px");
        });
    });
})(jQuery);
/** parallax level sub products page */

// more or less paragraph sub products page
$('.moreless-button').click(function () {
    $('.moretext').slideToggle();
    if ($('.moreless-button').text() == "Read more") {
        $(this).text("Read less")
    } else {
        $(this).text("Read more")
    }
});
// more or less paragraph sub products page



//aboutus-slider
$('.aboutus-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
//aboutus-slider

//basket-carousel
$('#basket-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
//basket-carousel







//gallery-main-slider
$('.gallery-main-slider').on('initialized.owl.carousel changed.owl.carousel', function (e) {
    if (!e.namespace) {
        return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
}).owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000
});
//gallery-main-slider



/*Select Dropdown Menu*/
$('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/


$('.dropdown-menu li').click(function () {
    var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
        msg = '<span class="msg">Hidden input value: ';
    $('.msg').html(msg + input + '</span>');
});


//no padd for modal
$('#myModal-video').on('show.bs.modal', function (e) {
    $('body').addClass('test');
});

/*$(document).ready(function() {
    $("#currency_selector").currencySelect({
        defaultCountry:"in",
        onlyCountries: ['in','us'],
        localizedCountries:null,
    });
});*/


/*
$('#currency_selector').flagStrap({
    countries: {
        "IN": "INR",
        "US": "USD"
    },
    buttonSize: "btn-sm",
    buttonType: "btn-danger",
    labelMargin: "20px",
    scrollable: false,
    scrollableHeight: "0px",
    onSelect: function (user_country, element) {

        // alert(user_country);

        // document.cookie = "guest_id=''; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
        var baseUrl = jQuery('meta[name="base-url"]').attr('content')
        // document.cookie = "user_country="+user_country+";"

        //setCookie("user_country", user_country, '30')

        $.ajax({
            type: "get",
            url: baseUrl + "/update_user_currency/" + user_country,
            dataType: 'text',
            success: function (response) {
                location.reload();
            },
            error: function (textStatus, errorThrown) {
                alert(errorThrown);
                location.reload();
            }
        });

    },
    placeholder: {
        value: "",
        text: ""
    }
}); */


function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/*$("#currency_selector").on('change',function(){


});*/
/*
$("#currency_selector").on('change', function () {
    var countryData = $("#currency_selector").countrySelect("getSelectedCountryData");

}); */


/*
$('a[href^="#"]').on('click',function (e) {
    // e.preventDefault();

    var target = this.hash,
    $target = $(target);

   $('html, body').stop().animate({
     'scrollTop': $target.offset().top-80
    }, 900, 'swing', function () {
     window.location.hash = target;
    });
});

 */


$('#addnewaddress').on('change', function (e) {
    // e.preventDefault();

    if (jQuery(this).is(':checked')) {
        $(".shippadd-billing").removeClass('hide');
        jQuery(this).val('1');
        $(".loggedin_new_adrs :input").each(function (e) {

            $(this).prop('required', true);
            $(this).removeClass('ignore');

        });
    } else {
        $(".shippadd-billing").addClass('hide');
        jQuery(this).val('0');
        $(".loggedin_new_adrs :input").each(function (e) {

            $(this).prop('required', false);

            $(this).addClass('ignore');

        });
    }
});




$('#zip_code').on('change', function (e) {
    // e.preventDefault();

    $(this).removeClass('ignore');
    $('#zip_code').valid();

});




$('.country').on('change', function (e) {
    // e.preventDefault();

    var eid = e.target.id;

    console.log(e.target.id);
    var country_name = (e.target.value);
    console.log(country_name);

    var country_value = (jQuery(e.target.selectedOptions).data('countryid'));
    var base_url = jQuery('.hidden_url').val();
    console.log(country_value);

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': jQuery('meta[name="csrf-token"]').attr('content')
        }
    });

    var ajaxurl = base_url + "getstate";
    var type = "POST";

    var formData = {
        country: country_value,
    };

    if (country_name == 'India') {
        $("input[name=phone_no]").attr('maxlength', 11);
        $("input[name=phone_no]").attr('minlength', 10);
    } else {
        $("input[name=phone_no]").attr('maxlength', 12);
        $("input[name=phone_no]").attr('minlength', 6);
    }


    $.ajax({
        type: type,
        url: ajaxurl,
        data: formData,
        dataType: 'json',
        success: function (data) {
            var dd = " <option value=''>-Select-</option>";
            data.forEach((element) => {
                dd += "<option value='" + element['name'] + "' data-stateID='" + element['id'] + "'>" + element['name'] + "</option>";
            });

            jQuery(e.target).closest('.defaultadd-content').find('.state').empty().append(dd);

        },
        error: function (data) {
            console.log(data);
        }
    });

    $('#zip_code').removeClass('ignore');
    $('#zip_code').valid();

});



$('.state').on('change', function (e) {
    // e.preventDefault();

    var eid = e.target.id;

    console.log(e.target.id);

    var state_value = (jQuery(e.target.selectedOptions).data('stateid'));
    console.log(state_value);
    var base_url = jQuery('.hidden_url').val();

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': jQuery('meta[name="csrf-token"]').attr('content')
        }
    });

    var ajaxurl = base_url + "getcity";
    var type = "POST";

    var formData = {
        state: state_value,
    };

    $.ajax({
        type: type,
        url: ajaxurl,
        data: formData,
        dataType: 'json',
        success: function (data) {

            console.log(data);
            var dd = " <option value=''>-Select-</option>";
            data.forEach((element) => {
                dd += "<option value='" + element['name'] + "' data-cityID='" + element['id'] + "'>" + element['name'] + "</option>";
            });

            jQuery(e.target).closest('.defaultadd-content').find('.city').empty().append(dd);

        },
        error: function (data) {
            console.log(data);
        }
    });

});



$('.billing_type').on('click',function (e) {
	// e.preventDefault();

    if( jQuery(this).val() == '0') {
        $(".billing_saved_adrs").removeClass('hide');
        $(".guest_user_billing").removeClass('hide');
        // jQuery(this).val('1');
    }else{
        $(".billing_saved_adrs").addClass('hide');
        $(".guest_user_billing").addClass('hide');
        // jQuery(this).val('0');
    }
});




function add_to_cart(product_id, href, quantity = '') {

    var token = $("meta[name='csrf-token']").attr("content");
    /*if(href === '')
       var href = 'products/add_cart';*/
    if (quantity === '') {
        quantity = $("#product_detail_page_quantity").val();
        if (quantity === '')
            quantity = 1;
    }

    $.ajax({
        type: "POST",
        url: href,
        data: {
            _token: token, product_id: product_id, quantity: quantity
        },
        dataType: 'json',
        beforeSend: function () {

        },
        success: function (response) {
            if (response.status === 200) {
                if (response.new_quantity > 0) {
                    let cart_item = $(".redno").html();
                    if (cart_item === '')
                        cart_item = 0;

                    cart_item = (Number(cart_item) + Number(response.new_quantity))

                    $(".redno").html(cart_item);
                }

                // alert(response.message);
            } else {
                alert(response.message);
            }
            //}
            //alert('blog deleted');
            //location.reload(true);
        },
        error: function (textStatus, errorThrown) {

            console.log(textStatus);
            alert(errorThrown);
        }
    });

}

function change_quantity(cart_id, product_id, action_type, href = '') {

    var token = $("meta[name='csrf-token']").attr("content");
    if (href === '')
        var href = 'products/change_quantity';


    var quantity = $("#hidden_qty_" + cart_id + "_" + product_id).val();
    if (action_type === 'plhj_oj') {
        quantity = (Number(quantity) - Number(1));
        //alert(quantity);
        var add_quantity = -1;
        if (quantity <= 0) {
            quantity = 1;
            add_quantity = 0;
            $('#qty_minus_' + cart_id + '_' + product_id).css('color', '#aaa');
            $('#qty_minus_' + cart_id + '_' + product_id).css('cursor', 'not-allowed');

        }
    }
    if (action_type === 'plhj_ok') {
        quantity = (Number(quantity) + Number(1));
        $('#qty_minus_' + cart_id + '_' + product_id).removeAttr('style');
        var add_quantity = 1;
    }

    if (action_type === 'plhj_direct') {
        quantity = $("#qty_" + cart_id + "_" + product_id).val();
        $('#qty_minus_' + cart_id + '_' + product_id).removeAttr('style');
        var add_quantity = quantity;
        // alert('asad');
    }

    var that = this;
    $.ajax({
        type: "POST",
        url: href,
        data: {
            _token: token, cart_id: cart_id, product_id: product_id, quantity: quantity
        },
        dataType: 'json',
        context: this,
        beforeSend: function () {

        },
        success: function (response) {
            if (response.status === 200) {
                var href = $(".basketopen").data('route');
                var obj = $(".basketopen");
                $('.redno').html(response.total_quantity);
                //openbasket(href,obj,calling='change_quantity');
                if (response.product_price == response.item_price_after_discount) {
                    $("#item_price_" + cart_id + "_" + product_id).html(response.product_price);
                    $("#item_price2_" + cart_id + "_" + product_id).html(response.product_price);
                    $("#notdel_" + cart_id + "_" + product_id).html(response.product_price);
                    $("#item_discount_" + cart_id + "_" + product_id).html(response.item_price_after_discount);
                    $("#item_discount2_" + cart_id + "_" + product_id).html(response.item_price_after_discount);
                    $("#del_" + cart_id + "_" + product_id).css('display', 'none');
                    $("#notdel_" + cart_id + "_" + product_id).css('display', 'inherit');
                    $("#item_discount_" + cart_id + "_" + product_id).css('display', 'none');
                    $("#del2_" + cart_id + "_" + product_id).css('display', 'none');
                    $("#item_price_" + cart_id + "_" + product_id).css('display', 'inherit');
                } else {
                    $("#item_price_" + cart_id + "_" + product_id).html(response.product_price);
                    $("#item_price2_" + cart_id + "_" + product_id).html(response.product_price);
                    $("#notdel_" + cart_id + "_" + product_id).html(response.product_price);
                    $("#item_discount_" + cart_id + "_" + product_id).html(response.item_price_after_discount);
                    $("#item_discount2_" + cart_id + "_" + product_id).html(response.item_price_after_discount);
                    $("#del_" + cart_id + "_" + product_id).css('display', 'inherit');
                    $("#notdel_" + cart_id + "_" + product_id).css('display', 'none');
                    $("#item_discount_" + cart_id + "_" + product_id).css('display', 'inherit');
                    $("#item_discount2_" + cart_id + "_" + product_id).css('display', 'inherit');
                    $("#del2_" + cart_id + "_" + product_id).css('display', 'inherit');
                    $("#item_price_" + cart_id + "_" + product_id).css('display', 'inherit');
                    $("#item_price22_" + cart_id + "_" + product_id).css('display', 'none');
                }
                $("#sub_total_" + cart_id).html(response.sub_total);
                $("#discount_" + cart_id).html(response.discount);
                $("#auto_applied_" + cart_id).html(response.auto_apply_discount);
                $("#final_total_" + cart_id).html(response.gross_total);
                if (response.minimum_cart_weight_done === 1)
                    $('.mintytoff').css('display', 'block');
                else
                    $('.mintytoff').css('display', 'none');



                $("#free_items_" + cart_id + "_" + product_id).html(response.free_items);
                $("#qty_" + cart_id + "_" + product_id).html(response.item_quantity);
                $("#hidden_qty_" + cart_id + "_" + product_id).html(response.quantity);
                $("#qty_" + cart_id + "_" + product_id).val(response.item_quantity);
                $("#hidden_qty_" + cart_id + "_" + product_id).val(response.quantity);
                if ((response.qualifying_items.length === 0)) {

                } else {
                    $.each(response.qualifying_items, function (key, value) {
                        $("#free_items_" + cart_id + "_" + value.product_id).html(value.free_items);
                        $("#qty_" + cart_id + "_" + value.product_id).html(value.quantity + value.free_items);
                        $("#hidden_qty_" + cart_id + "_" + value.product_id).html(value.quantity);
                        $("#qty_" + cart_id + "_" + value.product_id).val(value.quantity + value.free_items);
                        $("#hidden_qty_" + cart_id + "_" + value.product_id).val(value.quantity);
                        $("#item_price_" + cart_id + "_" + value.product_id).html((value.price));
                        $("#item_discount_" + cart_id + "_" + value.product_id).html((value.price - value.discount));
                    });
                }
                //$("#slab_discount_"+cart_id).html(response.slab_discount);

                /* if(response.product_discount <= 0)
                    $('.subpricecontent').nextAll('del').remove(); */

                if (quantity === 1)
                    $("#qty_" + cart_id + '_' + product_id).val(quantity);

                var total_item = $(".redno").html();
                //var remaining_items = (Number(total_item) + Number(add_quantity));



                /* if(remaining_items ===0)
                    $(".redno").html(remaining_items);
                else
                    $(".redno").html(remaining_items); */

                $(".minimum_msg").removeClass('hide');
                $(".minimum_msg").removeClass('show');

                if (response.minimum_cart_weight > response.total_gram) {

                    $("#checkout_mms").addClass('disabled_popup');
                    $(".minimum_msg").addClass('show');
                } else {

                    $("#checkout_mms").removeClass('disabled_popup');
                    $(".minimum_msg").addClass('hide');

                }
            } else {
                alert(response.message);
            }
            //}
            //alert('blog deleted');
            //location.reload(true);


        },
        complete: function (response) {

        },
        error: function (textStatus, errorThrown) {

            console.log(textStatus);
            alert(errorThrown);
        }
    });
}

function remove_from_cart(cart_id, product_id, href = '') {
    // alert(href);return;
    var token = $("meta[name='csrf-token']").attr("content");
    if (href === '')
        var href = 'products/change_quantity';

    $.ajax({
        type: "POST",
        url: href,
        data: {
            _token: token, cart_id: cart_id, product_id: product_id
        },
        dataType: 'json',
        beforeSend: function () {

        },
        success: function (response) {
            if (response.status === 200) {
                var href = $(".basketopen").data('route');
                var obj = $(".basketopen");
                $('.redno').html(response.total_quantity);
                openbasket(href, obj, calling = 'remove_item');
                /* $("#sortbox_"+cart_id+"_"+product_id).html('');
                $("#sub_total_"+cart_id).html(response.sub_total);
               $("#discount_"+cart_id).html(response.discount);
               $("#auto_applied_"+cart_id).html(response.auto_apply_discount);
               $("#final_total_"+cart_id).html(response.gross_total);
               var total_item = $(".redno").html();
               var removed_quantity = response.removed_quantity;
               var remaining_items = (Number(total_item) - Number(removed_quantity));


               if(remaining_items ===0)
                    $(".redno").html(remaining_items);
               else
                    $(".redno").html(remaining_items);


                    $(".minimum_msg").removeClass('hide');
                    $(".minimum_msg").removeClass('show');

                if (response.minimum_cart_weight > response.total_gram){
                   // $("#checkout_mms").attr('disabled',true);
                   $("#checkout_mms").addClass('disabled_popup');
                   $(".minimum_msg").addClass('show');
               }else{
                   // $("#checkout_mms").removeAttr('disabled');
                   $("#checkout_mms").removeClass('disabled_popup');
                    $(".minimum_msg").addClass('hide');

               } */



            } else {
                alert(response.message);
            }
            //}
            //alert('blog deleted');
            //location.reload(true);
        },
        error: function (textStatus, errorThrown) {

            console.log(textStatus);
            alert(errorThrown);
        }
    });
}

function openbasket(href, obj, calling = '') {

    $.ajax({
        type: "get",
        url: href,
        success: function (response) {
            $('.baskdetail').html(response);
            if (calling == '') {
                $(obj).toggleClass("is-basketopen");
                $('.baskdetail').toggleClass("is-basketopen");
                $('.overlay-blur').toggleClass("is-blur");
                $('body').toggleClass("is-unscroll");
            }

        },
        error: function (textStatus, errorThrown) {

            console.log(textStatus);
            alert(errorThrown);
        }
    });
}

function saveaddresscheckout() {
    var token = $("meta[name='csrf-token']").attr("content");
    var name = $("#name").val();
    var address = $("#address").val();
    var state = $("#newstate").val();
    var city = $("#city").val();
    var country = $("#newcountry").val();
    var zip = $("#zip").val();
    var phone = $("#phone").val();
    var apartment = $("#apartment").val();
    var address_save_as = $("#address_save_as").val();
    var defaultname = $("#default").val();


    if (name == "" || address == "" || state == "" || city == "" || country == "" || zip == "" || phone == "" || apartment == "" || address_save_as == "") {
        alert("Please fill the complete form");
        return false;
    } else {
        $.ajax({
            type: "POST",
            url: "my_address",
            data: {
                _token: token, name: name, address: address, state: state, city: city, zip_code: zip, country: country,
                phone_no: phone, apartment: apartment, address_save_as: address_save_as, defaultname: defaultname
            },
            dataType: 'json',
            complete: function (data, textStatus, xhr) {
                location.reload(true);
            }
        });
    }

}

function update_address(id) {
    var token = $("meta[name='csrf-token']").attr("content");
    var name = $("#name_" + id).val();
    var address = $("#address_" + id).val();
    var state = $("#state_" + id).val();
    var city = $("#city_" + id).val();
    var country = $("#country_" + id).val();
    var zip = $("#zip_" + id).val();
    var phone = $("#phone_" + id).val();
    var apartment = $("#apartment_" + id).val();
    var address_save_as = $("#address_save_as_" + id).val();
    var defaultname = $("#default_" + id).val();
    $.ajax({
        type: "POST",
        url: "update_address",
        data: {
            _token: token, name: name, address: address, state: state, city: city, zip_code: zip, country: country,
            phone_no: phone, apartment: apartment, address_id: id, address_save_as: address_save_as, defaultname: defaultname
        },
        dataType: 'json',
        beforeSend: function () {

        },
        success: function (response) {
            if (response.status === 200)
                alert(response.message)
            else
                alert(response.message)
            location.reload(true);
        },
        error: function (textStatus, errorThrown) {

            console.log(textStatus);
            alert(errorThrown);
        }
    });
}

function delete_address(id) {
    var token = $("meta[name='csrf-token']").attr("content");
    $.ajax({
        type: "post",
        url: "delete_address/" + id,
        data: {
            _token: token
        },
        dataType: 'json',
        beforeSend: function () {

        },
        success: function (response) {
            if (response.status === 200)
                alert(response.message)
            else
                alert(response.message)
            location.reload(true);
        },
        error: function (textStatus, errorThrown) {

            console.log(textStatus);
            alert(errorThrown);
        }
    });
}

function search_user_orders() {
    var keyword = $("#search_keyword").val();
    $.ajax({
        type: "get",
        url: "search_user_order?keyword=" + keyword,
        dataType: 'html',
        beforeSend: function () {
            $("#user_order").html('Loading...');
        },
        success: function (response) {
            $("#user_order").html(response);
        },
        error: function (textStatus, errorThrown) {
            $("#user_order").html('Something went wrong please try again');
            console.log(textStatus);
            alert(errorThrown);
        }
    });
}

$('.wrapper-address').on('click', '.deleteaddress', function () {
    $('.deleteaddress').closest('.wrapper-address').find('.element').not(':first').last().remove();
});
$('.wrapper-address').on('click', '.clone_btn', function () {
    $('.clone_btn').closest('.wrapper-address').find('.element').first().clone().appendTo('.results');
});

$(document).ready(function () {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $('#login').on('submit', function (e) {
        e.preventDefault();
        var href = $('#login').attr('action');

        var formData = {
            email: $('#email').val(),
            password: $('#password').val(),
        }
        $.ajax({
            type: "POST",
            url: href,
            data: formData,
            dataType: 'json',
            success: function (data) {
                if (data.status === 0)
                    $("#error_message").html(data.message);
                else
                    location.reload(true);
            },
            error: function (data) {
                alert("Something went wrong");
            }
        });

    });

});


$(function () {



    jQuery('.ratemepls').each(function () {
        var currentElement = $(this);

        // var eid = this.target.id;

        var eid = (currentElement.attr('id'));
        console.log(eid);

        var value = currentElement.data('rate');

        rating = value;

        jQuery("#" + eid).rateYo({
            rating: rating,
            numStars: 5,
            precision: 2,
            starWidth: "18px",
            spacing: "8px",
            rtl: false,
            multiColor: {

                startColor: "#b6140e",
                endColor: "#b6140e"
            },
            onInit: function () {

                console.log("On Init");
            },
            onSet: function () {

                console.log("On Set");
            }
        }).on("rateyo.set", function () {
            console.log("rateyo.set");
        })
            .on("rateyo.change", function () {
                console.log("rateyo.change");
            });
    });


});

/*Experimenting with the jquery offset and position

*/
$(document).ready(function () {



    // var cartCountValue = 0;
    var cartCount = $('.cart .count');

    // $(cartCount).text(cartCountValue);


    // $('.random-btn').on('click', function() {
    //   $('.cart').offset({
    //     top: getRndInteger(0, window.innerHeight - 100),
    //     left: getRndInteger(0, window.innerWidth - 100)
    //   });
    // });

    $('.cart-btn').on('click', function () {
        var cartBtn = this;
        var cartCountPosition = $(cartCount).offset();
        var btnPosition = $(this).offset();
        var leftPos =
            cartCountPosition.left < btnPosition.left
                ? btnPosition.left - (btnPosition.left - cartCountPosition.left)
                : cartCountPosition.left;
        var topPos =
            cartCountPosition.top < btnPosition.top
                ? cartCountPosition.top
                : cartCountPosition.top;
        $(cartBtn)
            .append("<span class='count'>1</span>");

        $(cartBtn).find(".count").each(function (i, count) {
            $(count).offset({
                left: leftPos,
                top: topPos
            })
                .animate(
                    {
                        opacity: 0
                    },
                    1500,
                    function () {
                        $(this).remove();
                        cartCountValue++;
                        $(cartCount).text(cartCountValue);
                    }
                );
        });
    });

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }



    $(document).on('click', '.disabled_popup', function () {
        // swal("Oops!",Â "Please add minimum quantity to checkout",Â "error");
        return false;
    });


    $(document).ready(function () {

        var sync1 = $("#main-banner-slide-one");
        var sync2 = $("#main-banner-slide");
        var slidesPerPage = 1; //globaly define number of elements per page
        var syncedSecondary = true;

        sync1.owlCarousel({
            items: 1,
            animateIn: 'fadeIn',
            slideSpeed: 10000,
            autoplayHoverPause: true,
            nav: false,
            autoplay: true,
            dots: true,
            loop: true,
            responsiveRefreshRate: 200,
            navText: ['<i class="catch fa fa-angle-right"></i>', '<i class="catch fa fa-angle-left"></i>'],
        }).on('changed.owl.carousel', syncPosition);

        sync2
            .on('initialized.owl.carousel', function () {
                sync2.find(".owl-item").eq(0).addClass("current");
            })
            .owlCarousel({
                items: slidesPerPage,
                dots: true,
                nav: false,
                slideSpeed: 5000,
                slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel

                responsiveRefreshRate: 100
            }).on('changed.owl.carousel', syncPosition2);

        function syncPosition(el) {
            //if you set loop to false, you have to restore this next line
            //var current = el.item.index;

            //if you disable loop you have to comment this block
            var count = el.item.count - 1;
            var current = Math.round(el.item.index - (el.item.count / 2) - .5);

            if (current < 0) {
                current = count;
            }
            if (current > count) {
                current = 0;
            }

            //end block

            sync2
                .find(".owl-item")
                .removeClass("current")
                .eq(current)
                .addClass("current");
            var onscreen = sync2.find('.owl-item.active').length - 1;
            var start = sync2.find('.owl-item.active').first().index();
            var end = sync2.find('.owl-item.active').last().index();

            if (current > end) {
                sync2.data('owl.carousel').to(current, 100, true);
            }
            if (current < start) {
                sync2.data('owl.carousel').to(current - onscreen, 100, true);
            }
        }

        function syncPosition2(el) {
            if (syncedSecondary) {
                var number = el.item.index;
                sync1.data('owl.carousel').to(number, 100, true);
            }
        }

        sync2.on("click", ".owl-item", function (e) {
            e.preventDefault();
            var number = $(this).index();
            sync1.data('owl.carousel').to(number, 300, true);
        });
    });

    // parallex
    var rellax = new Rellax('.rellax', {
        speed: -3,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    });


    $(document).on('click', '.map-point-sm', function () {
        var show = $(this).data('show');
        $(show).removeClass("hide").siblings().addClass("hide");
        $('.map-point-sm').hide();
        $(".searh_result").html('');
    });


    $(document).on('click', '.search-close-btn', function () {
        $(".searh_result").html('');
    });

    $(document).on('click', '.review_close', function () {

        $(".writereview").removeClass('hide');
        $(".writereviewmain").show();
        $(".writereview ").addClass('hide');
    });


    $(document).on('keyup', '#search_bar', function () {
        var search = $("#search_bar").html();
        var baseUrl = jQuery('meta[name="base-url"]').attr('content')

        if (search.length == 0) {
            $(".searh_result").html('');
        }

        if (search.length > 3) {
            $.ajax({
                type: "get",
                url: baseUrl + "/search-product/" + search,
                success: function (response) {
                    $(".searh_result").html(response);
                },
                error: function (textStatus, errorThrown) {
                    console.log(textStatus);
                }
            });
        }

    });


    $('#toggle').click(function () {
        $('.toggle').slideToggle('fast').addClass("view");
        return false;
    });


});


