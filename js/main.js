$(function(){
    // スムーススクロール
    smoothScroll();

    // ハンバーガーメニュー用
    $('.top-nav-buttom').on('click', function() {
        $('.top-nav-menu').toggleClass('is-active');
    });

    // メニュー内のリンククリック時動作
    $('.menu-link').on('click', function() {
        $('.top-nav-menu').toggleClass('is-active');
    })
});