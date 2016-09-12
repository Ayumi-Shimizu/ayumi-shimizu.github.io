    $(function () {
    $('.name').textillate({
      //繰り返し true or false
      loop: true,
 
      // アニメーションの間隔時間
      minDisplayTime: 3000,
  
      // アニメーション開始までの遅延時間
      initialDelay: 1000,
  
      // アニメーションの自動スタート  true or false
      autoStart: true,
 
 
      // 開始時のアニメーション詳細設定
      in: {
        // エフェクト(アニメーション)の指定(デモページにある名称を指定）
        effect: 'flipInX',
  
        // 遅延時間の指数
        delayScale: 3,
  
        // 文字ごとの遅延時間
        delay: 50,
  
        // true:アニメーションをすべての文字に同時適用
        sync: false,
  
        // true:文字表示がランダムな順に表示される
        shuffle: false
      },
 
      // 終了時のアニメーション詳細設定
      out: {
        effect: 'flipOutX',
        delayScale: 8,
        delay: 100,
        sync: false,
        shuffle: true,
        }
    });
})

// 歌詞



    $(function () {
    $('.txt1').textillate({loop: true});
    });

$(function hoge() {
    $('.txt1').hide();
    setTimeout(function(){
        $('.txt1').show();
    },1000);

    $('.txt1').textillate({

      //繰り返し true or false
      loop: true,
 
      // アニメーションの間隔時間
      minDisplayTime: 3000,
  
      // アニメーション開始までの遅延時間
      initialDelay: 3000,
  
      // アニメーションの自動スタート  true or false
      autoStart: true,
 
 
      // 開始時のアニメーション詳細設定
      in: {
        // エフェクト(アニメーション)の指定(デモページにある名称を指定）
        effect: 'pulse',
  
        // 遅延時間の指数
        delayScale: 6,
  
        // 文字ごとの遅延時間
        delay: 70,
  
        // true:アニメーションをすべての文字に同時適用
        sync: false,
  
        // true:文字表示がランダムな順に表示される
        shuffle: false
      },
 
      // 終了時のアニメーション詳細設定
      out: {
        effect: 'hinge',
        delayScale: 30,
        delay: 130,
        sync: false,
        shuffle: true,
        callback : function() {
        $('.txt1').css("display", "none");
        }
      }
    });
})

$(function () {
    $('.txt2').textillate({loop: true});
    })
    $(function () {
        $('.txt2').hide();
        setTimeout(function(){
            $('.txt2').show();
        },1000);

        $('.txt2').textillate({
          //繰り返し true or false
          loop: true,
     
          // アニメーションの間隔時間
          minDisplayTime: 3000,
      
          // アニメーション開始までの遅延時間
          initialDelay: 8000,
      
          // アニメーションの自動スタート  true or false
          autoStart: true,
     
     
          // 開始時のアニメーション詳細設定
          in: {
            // エフェクト(アニメーション)の指定(デモページにある名称を指定）
            effect: 'pulse',
      
            // 遅延時間の指数
            delayScale: 6,
      
            // 文字ごとの遅延時間
            delay: 70,
      
            // true:アニメーションをすべての文字に同時適用
            sync: false,
      
            // true:文字表示がランダムな順に表示される
            shuffle: false
          },
     
          // 終了時のアニメーション詳細設定
          out: {
            effect: 'hinge',
            delayScale: 25,
            delay: 80,
            sync: false,
            shuffle: true,
            callback : function() {
            $('.txt2').css("display", "none");
            }
          }
        });
    })

$(function () {
    $('.txt3').textillate({loop: true});
    })
    $(function () {
        $('.txt3').hide();
        setTimeout(function(){
            $('.txt3').show();
        },1000);

        $('.txt3').textillate({
          //繰り返し true or false
          loop: true,
     
          // アニメーションの間隔時間
          minDisplayTime: 3000,
      
          // アニメーション開始までの遅延時間
          initialDelay: 9000,
      
          // アニメーションの自動スタート  true or false
          autoStart: true,
     
     
          // 開始時のアニメーション詳細設定
          in: {
            // エフェクト(アニメーション)の指定(デモページにある名称を指定）
            effect: 'pulse',
      
            // 遅延時間の指数
            delayScale: 6,
      
            // 文字ごとの遅延時間
            delay: 70,
      
            // true:アニメーションをすべての文字に同時適用
            sync: false,
      
            // true:文字表示がランダムな順に表示される
            shuffle: false
          },
     
          // 終了時のアニメーション詳細設定
          out: {
            effect: 'hinge',
            delayScale: 25,
            delay: 80,
            sync: false,
            shuffle: true,
            callback : function() {
            $('.txt3').css("display", "none");
            }
          }
        });
    })

    $(function () {
    $('.txt4').textillate({loop: true});
    });

$(function hoge() {
    $('.txt4').hide();
    setTimeout(function(){
        $('.txt4').show();
    },1000);

    $('.txt4').textillate({

      //繰り返し true or false
      loop: true,
 
      // アニメーションの間隔時間
      minDisplayTime: 3000,
  
      // アニメーション開始までの遅延時間
      initialDelay: 3000,
  
      // アニメーションの自動スタート  true or false
      autoStart: true,
 
 
      // 開始時のアニメーション詳細設定
      in: {
        // エフェクト(アニメーション)の指定(デモページにある名称を指定）
        effect: 'pulse',
  
        // 遅延時間の指数
        delayScale: 6,
  
        // 文字ごとの遅延時間
        delay: 70,
  
        // true:アニメーションをすべての文字に同時適用
        sync: false,
  
        // true:文字表示がランダムな順に表示される
        shuffle: false
      },
 
      // 終了時のアニメーション詳細設定
      out: {
        effect: 'hinge',
        delayScale: 30,
        delay: 130,
        sync: false,
        shuffle: true,
        callback : function() {
        $('.txt4').css("display", "none");
        }
      }
    });
})

     $( function () {

        // 文字列取得
        var hoge = $('#text').text();
        // 文字列を一文字ずつ分割
        var TextArr = hoge.split('');
        // 分割したテキストを「,」で区切る
        var afterText = '';
        for (var i = 0; i < TextArr.length; i++) {
            afterText += TextArr[i] + ',';
        }
        console.log(TextArr);
        // テキストの挿入
        // document.getElementById('after').innerHTML = afterText;

        // var txt = (#text).text();
        // console.log(txt);
        // Math.floor(Math.random() * txt.length);
        // console.log(txt);

    });

    $(document).ready(function() {
 

        try {
            $('body').ripples({
                resolution: 1200,
                dropRadius: 1000,
                perturbance: 0.04,
            });
        }
        catch (e) {
           $('.error').show().text(e);
        }
        setInterval(function() {
            var $el = $('body');
            var x = Math.random() * $el.outerWidth();
            var y = Math.random() * $el.outerHeight();
            var resolution = 10;
            var dropRadius = 20;
            var strength = 0.04 + Math.random() * 0.04;
            $el.ripples('drop', x, y, dropRadius, strength);
        }, 470);
    });

    $(document).ready(function() {
 

        try {
            $('.home-main').ripples({
                resolution: 1200,
                dropRadius: 1000,
                perturbance: 0.04,
            });
        }
        catch (e) {
           $('.error').show().text(e);
        }
        setInterval(function() {
            var $el = $('.home-main');
            var x = Math.random() * $el.outerWidth();
            var y = Math.random() * $el.outerHeight();
            var resolution = 10;
            var dropRadius = 20;
            var strength = 0.04 + Math.random() * 0.04;
            $el.ripples('drop', x, y, dropRadius, strength);
        }, 1070);
    });
