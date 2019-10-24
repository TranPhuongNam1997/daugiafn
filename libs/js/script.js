$( document ).ready(function() {
    var html = $('html, body'),
        navmenu = $('.menu'),
        navToggle = $('.nav-toggle'),
        navDropdownToggle = $('.has-dropdown'),
        overlay = $("<div class='overlay'></div> ");

    navToggle.on('click', function(e) {
        overlay.toggle();
        var $this = $(this);
        e.preventDefault();
        $this.toggleClass('is-active');
        navmenu.toggleClass('is-visible');
        html.toggleClass('nav-open');
    });

    $( "body" ).prepend(overlay);
    overlay.click(function(){
        navToggle.trigger('click');
    });
    // $(".nav-dropdown").hide();
    navDropdownToggle.on('click', function() {
        var $this = $(this);
        $(".nav-dropdown").slideUp();
        if(!$(this).children('ul').is(":visible"))
        {
            $(this).children('ul').slideDown();
        }
        $this.toggleClass('is-active').siblings().removeClass('is-active');
    });

    navDropdownToggle.on('click', '*', function(e) {
        e.stopPropagation();
    });

    // end menumb

    $('.btn-condition').click(function () {
        $('.btn-condition').removeClass('active');
        $(this).addClass('active');
    });

    $("ul.nav-form-rp").hide();
    $(".name-rp").click(function(){
        $('.name-rp').removeClass('rotate-down');

        $("ul.nav-form-rp").slideUp();
        if(!$(this).next().is(":visible"))
        {
            $(this).next().slideDown();
            $(this).addClass('rotate-down');
        }

    });
    $("#back-to-top").click(function () {
        $("html, body").animate({scrollTop : 0},"slow");
        return false;
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >=300) {
            $('#back-to-top').show();
        }
        else {
            $('#back-to-top').hide();
        }
    });
    if (window.innerWidth > 768) {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 1) {
                $('#main-nav').addClass('fixed');
                // $('#main-nav').removeClass('menu-top');
            }
            else {
                // $('#main-nav').addClass('menu-top');
                $('#main-nav').removeClass('fixed');
            }
        });
    }
    $('.view-box-search').hide();
    $('#yes').click(function () {
        $('.view-box-search').slideDown();
    });
    $('#no').click(function () {
        $('.view-box-search').slideUp();
    });
    $('[data-toggle="tooltip"]').tooltip();

});
$(function() {
    $('input[name="daterange"]').daterangepicker({
        opens: 'left'
    }, function(start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
    $(".btn-issuers").select2();
    $(".btn-choose-noti").select2();
    $(".btn-down-select").select2();
    TweenMax.fromTo($('.tbl-animation-top'),0.5,{y: 200,opacity: 0},{y:0,opacity:1});
    TweenMax.staggerFrom($('.section-auction-info .scroll-up-top:nth-child(2n-1)'),0.5,{y: 200,opacity: 0},0.15);
    TweenMax.staggerFrom($('.section-auction-info .scroll-up-top:nth-child(2n)'),0.5,{y: 200,opacity: 0},0.15);
});
