window.onload = function(){

    //表示ポジション調整ーーーーーーーーーーーーーーー

    // const position = document.getElementById("position");
    const container = document.getElementById("container");
    //画面のサイズを取得
    let screen_height = window.innerHeight;
    
    //メニューの高さを計算
    menu_height = Math.floor(screen_height/6,0);
  
    //各メニューにサイズを割当る
    position.style.marginTop = menu_height + "px";

//表示ポジション調整終了ーーーーーーーーーーーーーー

//JSONーーーーーーーーーーーーーーーーーーーーーーー
const answer = '{ "solution" : [' +
'{ "id": "1","solve": "ヴァイタミンAガ、フソクシテイルカモシレナイデスネ。","cook":["鶏レバー","うなぎ肝","牛レバー"],"eatout":["焼き鳥","うなぎ屋","焼肉"]  },' +
'{ "id": "2","solve": "ビタミンDが不足しているかも！？"                 ,"cook":["いくら","鮭","うなぎ"],"eatout":["寿司","紅鮭","鰻屋"] },' +
'{ "id": "3","solve": "タンパク質が不足しているかもしれないです。"        ,"cook":["ささみ、ムネ肉、カモ","生ハム","牛ヒレ、肩ロース、牛モモ"],"eatout":["焼き鳥","イタリアン","焼肉"] },' +
'{ "id": "4","solve": "ビタミンB２が不足しているかも！？"               ,"cook":["うなぎ","牛乳","牛レバー"],"eatout":["鰻屋","銭湯","焼肉"] },' +
'{ "id": "5","solve": "ビタミンB群が足りない？？"                      ,"cook":["豚ヒレ(B1,B2)","マグロ(B6,ナイアシン)","牛レバー(B12)"],"eatout":["豚肉","寿司","焼肉"] },' +
'{ "id": "7","solve": "鉄分足りないかも？？",                         "cook":["鶏レバー","貝類","玉子"],"eatout":["焼き鳥","寿司","おでん"] },' +
'{ "id": "8","solve": "休養が必要かもよー！！"                        ,"cook":["美味しいもの","美味しいもの","美味しいもの"],"eatout":["美味しいもの","美味しいもの","美味しいもの"] },' +
'{ "id": "9","solve": "たぶん健康と思う。"                           ,"cook":["好きなもの作ってー","ー","ー"],"eatout":["好きなもの食べてー","ー","ー"] }' +
']}';

//パースしてる
const objct = JSON.parse(answer);

//URLを取得
let url = document.URL;

//パラメーターを向いた部分を変数に格納
const base_url = "http://localhost/what-to-eat/result.php";

//パラメータに対して呼び出す配列を関数化
function display_content (x) {
    slice_url = url.slice( -3 );
    
    id1= document.getElementById('1').innerHTML = objct.solution[x].cook[0];
    id2= document.getElementById('2').innerHTML = objct.solution[x].cook[1];
    id3= document.getElementById('3').innerHTML = objct.solution[x].cook[2];
    const id11= document.getElementById('11').innerHTML = objct.solution[x].eatout[0];
    const id12= document.getElementById('12').innerHTML = objct.solution[x].eatout[1];
    const id13= document.getElementById('13').innerHTML = objct.solution[x].eatout[2];
    return x;
}


//パラメーターごとにobj(jsonファイル)の「solve」の指定
if (url === (base_url + "?=100")) {
    const problem = document.getElementById('problem').innerHTML = objct.solution[0].solve;
    display_content(0);
} else if (url === (base_url + "?=200")) {
    const problem = document.getElementById('problem').innerHTML = objct.solution[1].solve;
    display_content(1);
} else if (url === (base_url + "?=300")) {
    const problem = document.getElementById('problem').innerHTML = objct.solution[2].solve;
    display_content(2);
} else if (url === (base_url + "?=400")) {
    const problem = document.getElementById('problem').innerHTML = objct.solution[3].solve;
    display_content(3);
} else if (url === (base_url + "?=500")) {
    const problem = document.getElementById('problem').innerHTML = objct.solution[4].solve;
    display_content(4);
} else if (url === (base_url + "?=600")) {
    const problem = document.getElementById('problem').innerHTML = objct.solution[5].solve;
    display_content(5);
} else if (url === (base_url + "?=900")) {
    const problem = document.getElementById('problem').innerHTML = objct.solution[6].solve;
    display_content(6);
} else if (url === (base_url + "?=1000")) {
    const problem = document.getElementById('problem').innerHTML = objct.solution[7].solve;
    display_content(7);
} else {
    const problem = document.getElementById('problem').innerHTML = "概ね健康そうだね〜。<br>好きなものたべなー";
}

}

