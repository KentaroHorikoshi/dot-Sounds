/* 
    jqurtyの使用を想定した独自ライブラリ
    本処理前に読み込んでください。
    作成時Jqueryバージョン:3.5.1
*/


//  スムーススクロール
function smoothScroll(){
    $('a[href^="#"]').click(function() {
        //　スクロール速度（ミリ秒）
        let speed = 500; 
        // href属性の値を取得(リンク先がなし又は#の場合はページトップを取得)
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html': href);  
        // リンク先のトップ位置を取得
        let position = target.offset().top;

        // ページをスクロールする
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
}