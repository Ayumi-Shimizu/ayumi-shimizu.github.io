
//   $(function() {
//       $(".list-1").css("display","none");
//       $(".button-1").on("click", function(e) {

//       $(".list-2").css('display', 'none');
//       $(".list-2").removeClass("open");

// 	  if($(".list-1").hasClass("open")){ // クリックされた要素がclickedクラスだったら
// 	    $(".list-1").removeClass("open");
// 	  }
// 	  else{
// 	    $(".list-1").addClass("open");
// 	  }
// 		e.preventDefault();
// 	   	$(".list-1").stop().slideToggle();
// 	});
// });

//     $(function() {

//       $(".list-2").css("display","none");
//       $(".button-2").on("click", function(e) {

//       $(".list-1").css('display', 'none');
//       $(".list-1").removeClass("open");

// 	  if($(".list-2").hasClass("open")){ // クリックされた要素がclickedクラスだったら
// 	    $(".list-2").removeClass("open");
// 	  }
// 	  else{
// 	    $(".list-2").addClass("open");
// 	  }      	
//           e.preventDefault();
//           $(".list-2").stop().slideToggle();
//       });
//   });



// 第一機能
// 	ボタンを押すと、リストメニューが降りてくる。もう一度押すと閉じる。
// 第二機能
// 	ボタンを押下した際、他のメニューを開いてる場合それが閉じる。

 $(function() {

 	$('.dropdown-list').hide();

 	console.log($('.dropdown-list'));

 	var $dropdown = $(".dropdown-body a");

 	$dropdown.on("click", function(e) {
 		e.preventDefault();

 	// 	クリックしたメニューとドロップダウンメニューを紐付ける
 	// 	１. クリックしたメニューが何番目かを取得
 	// 		   ⇨ $(this).index() で取得できる
 	// 	    index()は1から始まる

 	// 	2. クリックしたメニューと同じドロップダウンメニューを表示させる
 	// 	ドロップダウンメニューは$('.dropdown-list')で取得できる
 	// 	$('.dropdown-list')の何番目かを絞り込むのは、
 	// 	$('.dropdown-list').eq(数字)で取得できる
 	// 	$('.dropdown-list')で取得してきたものは配列になっている
 	// 	配列は0から始まる
 	// 	なので1番目を取得したい場合は、$('.dropdown-list').eq(0)となる

 	// 	ここで注意したいのは始まる数字が違う
 	// 	クリックしたメニューが何番目 ⇨ $(this).index() = 1, $(this).index() = 2〜
 	// 	$('.dropdown-list')の何番目 ⇨ $('.dropdown-list').eq(0),$('.dropdown-list').eq(1)〜

 	// 	クリックしたメニューが1番目でドロップダウンメニューの１番目を表示させたい場合
		// $(this).index() （1が返ってくる）
		// $('.dropdown-list').eq(0)
		// なのでindexから-1を引く必要がある

		// よって$('.dropdown-list').eq($(this).index()-1)となる



 		var $target = $('.dropdown-list').eq($(this).index()-1);

 		$('.dropdown-list').not($target).hide();
 		$dropdown.not($dropdown.eq($(this).index()-1)).removeClass('open');

 		$target.stop().slideToggle();

 		$(this).toggleClass('open');


 		// if($dropdown.eq($(this).index()-1).hasClass("open")){
 		// 	$('.dropdown-body a').removeClass("open");
 		// }
 		// else {
 		// 	$('.dropdown-body a').eq($(this).index()-1).addClass("open");
 		// }
	});
 });



// $('a[href^="#acher-"]

$(function(){
   // #で始まるアンカーをクリックした場合に処理
       $('a[href^="#"]:not([href$="#"])').click(function() {
      // スクロールの移動速度
      var speed = 700; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});


$(function(){
	$(".expander-wrapper p").hide();
	$(".expander-title").on("click", function(e) {
		e.preventDefault();
		$(".expander-wrapper p").stop().slideToggle(50);

		if($(".expander-title").hasClass("open")){
			$(".expander-title").removeClass("open");
		}
		else {
			$(".expander-title").addClass("open");
		}
	});
});

$(function(){
	$(".pagination-menu li").on("click", function(e) {
		e.preventDefault();
	});
});

$(function(){
$('.slide-menu').click(function() {

		if($(".slide-list").hasClass("open")){
			$(".slide-list").removeClass("open");
			$('.slide-list').stop().animate({left:'-20%'},500);

		}
		else {
			$(".slide-list").addClass("open");
			$('.slide-list').stop().animate({left:'0'},500);
		}

});
});


 $(function() {

 	var $root = $('.js-nesting');
 	var $dropdown = $root.find('.nesting-dropdown-list');

 	$dropdown.hide();

 	$root.find(".nesting-dropdown a").on("click", function(e) {
 		e.preventDefault();

 		$dropdown.hide().removeClass('open');

 		// クリックした要素の次の要素
 		$(this).next('.nesting-dropdown-list')
 		.stop().slideToggle()
 		.toggleClass('open');
	});
 });


// クリックしたら、 jquery クリック
// クリックした要素の　jquery クリックした要素の取得方法
// 次の要素が jquery 次の要素
// スライドしながら出てくる jquery スライド 縦に

// 開いていたらスライドしながら消える 


$(function() {
	$(".js-vertical-text").hide();
    //クリックしたときのファンクションをまとめて指定
    $('.js-vertical-list').click(function(e) {
 		e.preventDefault();
        //.index()を使いクリックされたタブが何番目かを調べ、
//      indexという変数に代入します。
        var index = $('.js-vertical-list').index(this);
 
        //コンテンツを一度すべて非表示にし、
        $('.js-vertical-text').css('display','none');
 
        //クリックされたタブと同じ順番のコンテンツを表示します。
        $('.js-vertical-text').eq(index).fadeIn();
 
        //タブについているクラスselectを消し、
        $('.js-vertical-list').removeClass('select');
 
        //クリックされたタブのみにクラスselectをつけます。
        $(this).addClass('select')
    });
});

// js-vertical-list a をクリックすると、js-vertical-textが切り替わる
// 別のjs-vertical-list aをクリックするとjs-vertical-textが切り替わる

// Live demo

	$(function (){

		var overlay = $('<div class="overlay"></div>').appendTo("body");

		$('.js-modal').hide();
		$('.modal-main').removeClass('js-modal');

		$('.js-modal-launch-btn a').on('click', function (e) {
			e.preventDefault();
			$('.modal-main').addClass('js-modal');
			$('.js-modal').slideDown(1000);
			overlay.fadeIn();
		});

		$('.modal-main:not(.modal-content)').on('click', function () {
			$('.js-modal').slideUp(1000);
			overlay.fadeOut();
			$('.modal-main').removeClass('js-modal');
		});

		// $('.js-modal').hide();
		// $('.modal-main').removeClass('js-modal');

		// $('.js-modal-launch-btn a').on('click',function(e){
 	// 		e.preventDefault();
		// 	// $('.modal-main').addClass('js-modal');

		// 	if ($('.modal-main').hasClass('js-modal')) {
		// 		$('.js-modal').hide();
		// 		$('.modal-main').removeClass('js-modal');
		// 	} else {
		// 		$('.modal-main').addClass('js-modal');
		// 		$('.js-modal').show();
		// 	}
		// 	});



		});














