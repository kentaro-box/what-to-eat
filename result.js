window.onload = function(){

    //JSONーーーーーーーーーーーーーーーーーーーーーーー
const answer = '{ "solution" : [' +
'{ "id": "1","solve": "ヴァイタミンAガ、フソクカシテイルカモシレナイデスネ。","cook":["鳥肝","牛肝","ホウレン草"],"eatout":["焼き鳥","焼肉","ファミレス"]  },' +
'{ "id": "2","solve": "偏食しがち","cook":["a鳥肝","a牛肝","aホウレン草"],"eatout":["a焼き鳥","a焼肉","aファミレス"] },' +
'{ "id": "3","solve": "よく目が充血する","yes": "4","no": "3" },' +
'{ "id": "4","solve": "余り日光にあたらない","yes": "6","no": "5" },' +
'{ "id": "5","solve": "暗いところでは、よく見えない","yes": "100","no": "6" },' +
'{ "id": "6","solve": "寝つきが悪い。または、なんども目が覚める。","yes": "11","no": "7" },' +
'{ "id": "7","solve": "余り魚を食べない","yes": "200","no": "9" },' +
'{ "id": "8","solve": "肌荒れが気になる","yes": "400","no": "8" },' +
'{ "id": "9","solve": "怠い。疲れやすい。","yes": "10","no": "1000" },' +
'{ "id": "11","solve": "貧血気味である","yes": "600","no": "900" },' +
'{ "id": "12","solve": "集中力、思考力が低下していると感じる。","yes": "300","no": "9" } ]}';

//パースしてる
const objct = JSON.parse(answer);

//URLを取得
let url = document.URL;

//パラメーターを向いた部分を変数に格納
const base_url = "http://localhost/what-to-eat/result.html";

//パラメータに対して呼び出す配列を関数化
function display_content () {
    const id1= document.getElementById('1').innerHTML = objct.solution[0].cook[0];
    const id2= document.getElementById('2').innerHTML = objct.solution[0].cook[1];
    const id3= document.getElementById('3').innerHTML = objct.solution[0].cook[2];
    const id11= document.getElementById('11').innerHTML = objct.solution[0].eatout[0];
    const id12= document.getElementById('12').innerHTML = objct.solution[0].eatout[1];
    const id13= document.getElementById('13').innerHTML = objct.solution[0].eatout[2];
}
//パラメーターごとにobj(jsonファイル)の「solve」の指定
if (url === (base_url + "?=100")) {
    const problem = document.getElementById('problem').innerHTML = objct.solution[0].solve;
    display_content();
} else if (url === (base_url + "?=200")) {
    const problem = document.getElementById('problem').innerHTML = objct.solution[1].solve;
    display_content();
} else {
    const problem = document.getElementById('problem').innerHTML = "概ね健康そうだね〜。<br>好きなものたべなー";
}

}