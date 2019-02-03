window.onload = function() {



 const position = document.getElementById('position');
   
 
//表示ポジション調整ーーーーーーーーーーーーーーー

    // const position = document.getElementById("position");
    const container = document.getElementById("container");
    //画面のサイズを取得
    let screen_height = window.innerHeight;
    
    //メニューの高さを計算
    menu_height = Math.floor(screen_height/5,0);
  
    //各メニューにサイズを割当る
    position.style.marginTop = menu_height + "px";

//表示ポジション調整終了ーーーーーーーーーーーーーー


//JSONーーーーーーーーーーーーーーーーーーーーーーー
const question1 = '{ "problem" : [' +
'{ "id": "1","quest": "最近調子がイマイチ良くない。","yes": "1","no": "7" },' +
'{ "id": "2","quest": "偏食しがち","yes": "2","no": "3" },' +
'{ "id": "3","quest": "よく目が充血する","yes": "4","no": "3" },' +
'{ "id": "4","quest": "余り日光にあたらない","yes": "6","no": "5" },' +
'{ "id": "5","quest": "暗いところでは、よく見えない","yes": "100","no": "6" },' +
'{ "id": "6","quest": "寝つきが悪い。または、なんども目が覚める。","yes": "10","no": "7" },' +
'{ "id": "7","quest": "余り魚を食べない","yes": "200","no": "9" },' +
'{ "id": "8","quest": "肌荒れが気になる","yes": "400","no": "8" },' +
'{ "id": "9","quest": "怠い。疲れやすい。","yes": "10","no": "1000" },' +
'{ "id": "11","quest": "貧血気味である","yes": "600","no": "900" },' +
'{ "id": "12","quest": "集中力、思考力が低下していると感じる。","yes": "300","no": "9" } ]}';

//パースしてる
const obj = JSON.parse(question1);

let question = document.getElementById('question');
let yes_number = document.getElementById('yes_number');
let no_number = document.getElementById('no_number');

question.innerHTML = obj.problem[0].quest;
yes_number.innerHTML = obj.problem[0].yes;
no_number.innerHTML = obj.problem[0].no;


//yesボタンクリックで次の質問とそれに付随するyesとnoの値を取得、表示
const yes = document.getElementById('yes').onclick = function () {
    yes_number = document.getElementById('yes_number').innerHTML;
    if (yes_number === "100" || yes_number === "200" || yes_number === "300" || yes_number === "400" || yes_number === "500" || yes_number === "600" || yes_number === "700") {
        var url = document.URL;
        location.href ="http://localhost/what-to-eat/result.php" + "?=" + yes_number;
    } else {
        question.innerHTML = obj.problem[yes_number].quest;
        let yes_number2 =  obj.problem[yes_number].yes;
        let no_number2 =  obj.problem[yes_number].no;
        document.getElementById('yes_number').innerHTML = yes_number2;
        document.getElementById('no_number').innerHTML = no_number2;
    } 
};


//noボタンクリックで次の質問とそれに付随するyesとnoの値を取得、表示
const no = document.getElementById('no').onclick = function () {
    no_number = document.getElementById('no_number').innerHTML;
    if(no_number === "1000" || no_number === "900" ) {
        var url = document.URL;
        location.href ="http://localhost/what-to-eat/result.php" + "?=" + no_number;
    } else {
        question.innerHTML = obj.problem[no_number].quest;
        let yes_number2 =  obj.problem[no_number].yes;
        let no_number2 =  obj.problem[no_number].no;
        document.getElementById('yes_number').innerHTML = yes_number2;
        document.getElementById('no_number').innerHTML = no_number2;
    }
};

}