/*******************************************************
 * 定数宣言
 *******************************************************/

// 商品情報リスト
const itemArray = [ // 配列のなかにオブジェクトを宣言しています。constは定数で、値が変更出来ない変数の事です。
    {
        "itemName": "商品A",
        "price": 980,
        "weight": 50
    }, {
        "itemName": "商品B",
        "price": 650,
        "weight": 100
    }, {
        "itemName": "商品C",
        "price": 1200,
        "weight": 400
    }, {
        "itemName": "商品D",
        "price": 5600,
        "weight": 260
    }
];

// 配送会社情報リスト
const shippingCarrierArray = [{
    "shipingCarrierName": "クロネコヤマト",
    "shipingCharges": 450,
    "weigthtLimit": -1 // マイナス値は上限なし
}, {
    "shipingCarrierName": "佐川急便",
    "shipingCharges": 300,
    "weigthtLimit": -1
}, {
    "shipingCarrierName": "ゆうパック",
    "shipingCharges": 400,
    "weigthtLimit": -1
}, {
    "shipingCarrierName": "メール便",
    "shipingCharges": 150,
    "weigthtLimit": 500 // メール便重さ制限
}, ];

//保有ポイント数
var myPoint = document.getElementsByClassName('point_text');
const userPointNum = 1500;

myPoint[0].textContent = userPointNum;

document.getElementById('point_textBox').value = userPointNum;

var totalMoner = 0;
var cartWeight = 0;
var cartTotalMoner = 0;
var pointTotalMoner = 0;
/*******************************************************
 * 初期処理
 * ※ 即時関数(この行が読み込まれたとき実行する)
 *******************************************************/


(function () {

    selectBox();
    clone();
    tableText();
    quponDiscount();
    campDiscount();
    pointDiscount();
    // displayShippingCharges();
    // selectValue();
    Total();
}());


function clone () {
    var tableContents = document.getElementById('tableContents');
    var cartTableTr_Item = document.getElementById('cartTableTr_Item');

    var cartTable = document.getElementById('cartTable'); // 複製元ノード

    if (itemArray.length === 0) {
        document.getElementById('cartTable').style.display="none";
    }

    var hoge2 = document.getElementsByClassName('cart_selectbox');


    for (var i = 0; i < itemArray.length-1; i++) {

        var clone = cartTable.cloneNode(true); // ノードの複製を生成,クローンノード

        tableContents.appendChild(clone); 
    }
    for (var m = 0; m < itemArray.length; m++) {

        hoge2[m].selectedIndex = 1;
        console.log(hoge2[m]);

    }

}

function selectBox() {

   for  (var m = 0; m < 100; m++) {

        // <select id="select"> を取得
        var cartSelect = document.getElementById('select');
        // <option> 要素を宣言
        var cartOption = document.createElement('option');

        cartOption.setAttribute('value', m);
        cartOption.innerHTML = m;

        // 上記で設定した <option value=""></option> を、
        // <select> 内に追加する
        cartSelect.appendChild(cartOption);
    }   

}

function tableText() {

    // クローンしたtable４つをtableに入れてる
    var table = document.getElementsByClassName('cart_table');

    // 初期ロード時　テキストをtextContentしている
    for (var j = 0; j < itemArray.length; j++) {

        var valueName = table[j].getElementsByClassName('value_name');
        var valueMoner = table[j].getElementsByClassName('value_moner');
        var itemMoner = table[j].getElementsByClassName('itemMoner');

        valueName[0].textContent = itemArray[j].itemName;
        valueMoner[0].textContent = itemArray[j].price;
        itemMoner[0].textContent = '¥ ' + itemArray[j].price;

        var oneMoner = itemArray[j].price;
        var select = table[j].getElementsByTagName('select');
        var value = select[0].options[select[0].selectedIndex].value;
        var cartTotalMoner_text = document.getElementsByClassName('total_moner');

        var itemMonerText = document.getElementsByClassName('itemMonerText');
        var oneTotalMoner = 0;

        oneTotalMoner += oneMoner * value;

        cartTotalMoner += oneTotalMoner;

        valueMoner[0].textContent = oneTotalMoner;

        // 個数分金額は変わるのでABCDを足したい。→スコープ問題
        // for文の中で　hogee = 0;　していると、
        // 毎回0になっていって hogee += totalにしても足されていかない

        // カートの中の商品の合計の重さ
        var itemWeight = (itemArray[j].weight) * value;
        cartWeight += itemWeight;

    }
        cartTotalMoner_text[0].textContent = cartTotalMoner;
        itemMonerText[0].textContent = cartTotalMoner;

}

// 商品個数が変わった時の表示
function selectValue() {
    cartTotalMoner = 0;
    cartWeight = 0;

    tableText();
    quponDiscount();
    campDiscount();
    pointDiscount();
    selectDeli();
    displayShippingCharges();
    Total();
}


function quponDiscount() {
    // クーポン割引
    var checkedQupon = document.getElementsByName("qupon-group");
    var quponText = document.getElementsByClassName('qupon_text');
    var quponTotal = document.getElementsByClassName('qupon_total');

    var checkedQupon_value = (checkedQupon[0].value);
    quponText[0].textContent = checkedQupon_value;

    var quponTotalMoner = cartTotalMoner - checkedQupon_value;
    quponTotal[0].textContent = quponTotalMoner;

}

function campDiscount() {
    // キャンペーン割引
    var checkedCamp = document.getElementsByName("camp-group");
    var campText = document.getElementsByClassName('camp_text');
    var campTotal = document.getElementsByClassName('camp_total');

    var checkedCamp_value = (checkedCamp[0].value);

    campText[0].textContent = checkedCamp_value;

    var campTotalMoner = cartTotalMoner - checkedCamp_value;

    campTotal[0].textContent = campTotalMoner;
}

function pointDiscount() {
    // ポイント利用
    var point_value = document.getElementById("point_textBox").value;

    var hoge = document.getElementById("point_textBox");

    var pointText = document.getElementsByClassName('discount_point_text');
    var pointTotal = document.getElementsByClassName('point_total');
    var MyPoint = document.getElementsByClassName('point_text');
    var itemPointText = document.getElementsByClassName('itemPointText');

    pointTotalMoner = cartTotalMoner - point_value;
    pointText[0].textContent = point_value;
    pointTotal[0].textContent = pointTotalMoner;
    itemPointText[0].textContent = point_value;

    var monerMark = document.getElementsByClassName('monerMark');

    var dicsountTotalText = document.getElementsByClassName('discount_totaltext');

    var errorMessageBox = document.getElementsByClassName('qupon_contents');

    var totalMonerText = document.getElementsByClassName('Total');

    if(parseInt(point_value, 10) < 1 ||  point_value.match(/[^0-9]+/,'')) {
        pointText[0].textContent = '半角数字で入力してください';
        monerMark[0].textContent = '';
        pointTotal[0].textContent = '';
        totalMonerText[0].textContent = '';
        pointText[0].classList.add('errorMessage');
    } else {
        monerMark[0].textContent = '- ¥';
    }

    if (userPointNum < point_value) {
        pointText[0].textContent = MyPoint[0].innerHTML + 'pt以内で記入してください';
        hoge.value = 1500;
        monerMark[0].textContent = '';
        pointTotal[0].textContent = '';
        totalMonerText[0].textContent = '';
        pointText[0].classList.add('errorMessage');

    }

    if (cartTotalMoner < point_value) {
        pointText[0].textContent = '商品合計金額を超えるポイントは利用出来ません';
        monerMark[0].textContent = '';
        pointTotal[0].textContent = '';
        totalMonerText[0].textContent = '';
        pointText[0].classList.add('errorMessage');


    }

}


    // alert("コメントを外してみるといつ実行したかわかると思います");

/*******************************************************
 * ポイントが入力(キーボードのキーが押され、指が上がった際)された時に呼ばれる関数
 * ※onKeyupじゃなくてonChangeでもよいのでそのあたりは自分で判断し変更してください
 *******************************************************/
function changeUsePoint(inputPointObj){
    pointDiscount();
    Total();
}

/*******************************************************
 * 配送会社が変更された時呼ばれる関数
 *******************************************************/
function changeShippingCarrier(shipCarrierSelectBox){

    displayShippingCharges();
    Total();

}

//配送業者option作成

( function () {


    for  (var k = 0; k < shippingCarrierArray.length; k++) {

        var shippingText = document.getElementsByClassName('postage_text');

        // <select id="select"> を取得
        var select = document.getElementById('deliSelect');
        // <option> 要素を宣言
        var option = document.createElement('option');

        // class名追加
        option.classList.add('deliName');

        var shipingCarrierName = shippingCarrierArray[k].shipingCarrierName;

        // console.log(shipingCarrierName);

        option.setAttribute('value', shipingCarrierName);
        option.textContent = shipingCarrierName;

        // 上記で設定した <option value=""></option> を、
        // <select> 内に追加する
        select.appendChild(option);

    }

    selectDeli();
    displayShippingCharges();
    Total();

}());

function selectDeli() {
    var deliSelect = document.getElementById('deliSelect');
    console.log(deliSelect);
    if (cartWeight <= 500) {
        deliSelect.selectedIndex = 3;

    } else if (cartWeight >= 500) {
        deliSelect.selectedIndex = 1;
        deliSelect.options[3].disabled = true;
    }
}


// 配送業者の計算
function displayShippingCharges(){

    var deliSelect = document.getElementById('deliSelect');
    var optionValue = document.postage_normalForm.deli_select.value;
    var postageText = document.getElementsByClassName('postage_text');
    var postageValue = document.getElementsByClassName('postage_value');

    var itemPostageText = document.getElementsByClassName('itemPostageText');

    // deliSelect.selectedIndex = null;

    postageText[1].textContent = optionValue;
    itemPostageText[0].textContent = optionValue;

    var selectindex = document.postage_normalForm.deliSelect.selectedIndex;

    document.postage_normalForm.deliSelect.selectedIndex = -1;
    document.postage_normalForm.deliSelect.selectedIndex = selectindex;

    // optionValue[selectindex].selected = true;

    // console.log(deliSelect);

    if(selectindex === 0) {
        postageValue[0].textContent = shippingCarrierArray[0].shipingCharges;
        itemPostageText[0].textContent = shippingCarrierArray[0].shipingCharges;

    } else if (selectindex === 1) {
        postageValue[0].textContent = shippingCarrierArray[1].shipingCharges;
        itemPostageText[0].textContent = shippingCarrierArray[1].shipingCharges;
    } else if (selectindex === 2) {
        postageValue[0].textContent = shippingCarrierArray[2].shipingCharges;
        itemPostageText[0].textContent = shippingCarrierArray[2].shipingCharges;
    } else if (selectindex === 3) {
        postageValue[0].textContent = shippingCarrierArray[3].shipingCharges;
        itemPostageText[0].textContent = shippingCarrierArray[3].shipingCharges;
    }

    var options = document.getElementById('deliSelect').options;

}

function Total() {

   var deliSelect = document.getElementById('deliSelect');
    var optionValue = document.postage_normalForm.deli_select.value;
    var postageText = document.getElementsByClassName('postage_text');
    var postageValue = document.getElementsByClassName('postage_value');

    // deliSelect.selectedIndex = null;

    postageText[1].textContent = optionValue;

    var selectindex = document.postage_normalForm.deliSelect.selectedIndex;

    document.postage_normalForm.deliSelect.selectedIndex = -1;
    document.postage_normalForm.deliSelect.selectedIndex = selectindex;

    if(selectindex === 0) {
        postageValue[0].textContent = shippingCarrierArray[0].shipingCharges;
    } else if (selectindex === 1) {
        postageValue[0].textContent = shippingCarrierArray[1].shipingCharges;
    } else if (selectindex === 2) {
        postageValue[0].textContent = shippingCarrierArray[2].shipingCharges;
    } else if (selectindex === 3) {
        postageValue[0].textContent = shippingCarrierArray[3].shipingCharges;
    }

    var IntpostageValue = parseInt(postageValue[0].innerHTML);

    var TotalMoner = (pointTotalMoner + IntpostageValue);

    var totalText = document.getElementsByClassName('Total');
    totalText[0].textContent = TotalMoner;

    // selectDeli();
    pointDiscount();
}

