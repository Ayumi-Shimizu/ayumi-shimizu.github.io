(function(){

  // 経度"xxxxx"、緯度"xxxxx"表記
  var mapConfig = {
    keido : "",
    ido : "",
    mapElm : null
  };

  // ぐるなびAPI
  // フリーワード：居酒屋
  // 経度、緯度を現在位置から半径何メートル以内
  var gurunabiAPI = {
    url : 'http://api.gnavi.co.jp/RestSearchAPI/20150630/?callback=?',
    params : {
      keyid: 'b1a83c80d93c9548863b6ab1e33faba7',
      format: 'json',
      freeword: 'カフェ,喫茶店',
      freeword_condition: 2,
      latitude: null,
      longitude: null,
      range: 2
    }
  }


  // 現在位置取得　map表示
  function showMap() {

    navigator.geolocation.getCurrentPosition(function(position) {
      mapConfig.keido = position.coords.latitude;
      mapConfig.ido = position.coords.longitude;

      getMaps();
    });
  }


  // 現在位置からmap設定
  function getMaps() {

    var latlng = new google.maps.LatLng(mapConfig.keido, mapConfig.ido);
    var options = {
      zoom: 16,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    mapConfig.mapElm = new google.maps.Map(document.getElementById('map'), options);

    var marker = new google.maps.Marker({
      position: latlng,
      map: mapConfig.mapElm,
      title: '現在地'
    });

    new google.maps.Circle({
      center: latlng,       // 中心点(google.maps.LatLng)
      fillColor: '#dc143c',   // 塗りつぶし色
      fillOpacity: 0.5,       // 塗りつぶし透過度（0: 透明 ⇔ 1:不透明）
      map: mapConfig.mapElm,             // 表示させる地図（google.maps.Map）
      radius: 500,          // 半径（ｍ）
      strokeColor: '#dc143c', // 外周色
      strokeOpacity: 1,       // 外周透過度（0: 透明 ⇔ 1:不透明）
      strokeWeight: 1         // 外周太さ（ピクセル）
    });
  }

  var marker = [];
  var infoWindow = [];

  // ぐるなび検索結果からピンを立てる
  function showResult(result) {
    if ( result.total_hit_count > 0 ) {

      for(var i = 0; i < result.rest.length; i++){　　　
        var point = new google.maps.LatLng(result.rest[i].latitude, result.rest[i].longitude);
        marker[i] = new google.maps.Marker({position: point, map: mapConfig.mapElm});
        infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
          content: '<div class="sample">' + result.rest[i].name  +  '</div>' // 吹き出しに表示する内容
        });
        // result.rest[i].url

        markerEvent(i);
          console.log(result.rest[i]);

      }

    } else {
      alert( '検索結果が見つかりませんでした。' );
    }
  }


  // マーカーにクリックイベントを追加
  function markerEvent(i) {
    marker[i].addListener('click', function() { // マーカーをクリックしたとき
      infoWindow[i].open(mapConfig.mapElm, marker[i]); // 吹き出しの表示
    });
  }

  //　住所検索地にピンを立てる
  function codeAddress(address) {
    console.log(address);
    var geocoder = new google.maps.Geocoder();
    // 地図表示に関するオプション
    var mapOptions = {
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false
    };

    mapConfig.mapElm = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    geocoder.geocode( { 'address': address, 'region': 'jp'}, function(results, status) {
      // ジオコーディングが成功した場合
      if (status == google.maps.GeocoderStatus.OK) {
        console.log("ss");
          mapConfig.mapElm.setCenter(results[0].geometry.location);
          var marker = new google.maps.Marker({
            map: mapConfig.mapElm,
            position: results[0].geometry.location
          });
        new google.maps.Circle({
          center: results[0].geometry.location,       // 中心点(google.maps.LatLng)
          fillColor: '#dc143c',   // 塗りつぶし色
          fillOpacity: 0.5,       // 塗りつぶし透過度（0: 透明 ⇔ 1:不透明）
          map: mapConfig.mapElm,             // 表示させる地図（google.maps.Map）
          radius: 500,          // 半径（ｍ）
          strokeColor: '#dc143c', // 外周色 
          strokeOpacity: 1,       // 外周透過度（0: 透明 ⇔ 1:不透明）
          strokeWeight: 1         // 外周太さ（ピクセル）
        });

        mapConfig.keido = results[0].geometry.location.lat();
        mapConfig.ido = results[0].geometry.location.lng();

      }
    });
  }

  // 現在位置のmap表示
  $('.btn-position').on('click', function(){
    showMap();
  });


  // clickボタンを押すと、現在地から半径何メートル以内のカフェを検索
  $('.btn-shop').on('click', function(){
    gurunabiAPI.params.latitude = mapConfig.keido;
    gurunabiAPI.params.longitude = mapConfig.ido;
    $.getJSON(gurunabiAPI.url, gurunabiAPI.params, function(result){
      showResult(result);
    });
  });

      // 住所検索
  $('#addressButton').on('click', function() {
    var address = document.getElementById("address").value;
    codeAddress(address);
  });


    $ (function () {

      var $entryMenu = $('.js-entry-menu');
      var $positionMenu = $('.js-position-menu');
      var $canvas = $('#map-canvas');
      var $map = $('#map');
      // var $top = $('#top');

      $entryMenu.hide();
      $positionMenu.hide();
      $canvas.hide();
      $map.hide();

      $('.js-position').on('click', function () {
        $positionMenu.toggle();
        $map.toggle();
        $entryMenu.hide();
        $canvas.hide();
      });

      $('.js-entry').on('click', function () {
        $positionMenu.hide();
        $map.hide();
        $entryMenu.toggle();
        $canvas.toggle();
      });


      var nav = $('.menu');
      $('.view').on('click', function () {
        nav.toggleClass('menu-non');
        if (nav.hasClass('menu-non')) {
          nav.animate({
            left : '-280px'
          },3000);
        } else if (!nav.hasClass('menu-non')) {
          nav.animate({
            left : '0px'
          },3000);
        }
      });

    });

})();