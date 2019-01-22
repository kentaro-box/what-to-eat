window.onload  =  function() {
    

 //aタグのhoverアゥション開始ーーーーーーーーーー

    //下記のconstでHTMLの要素を取得
    const backImage = document.getElementById('back-image');
    const body = document.getElementById('body');
    const title = document.getElementById('title');
    const position = document.getElementById('position');

    // backChange関数を作り、中に各要素の変更したい様に記述 
    function backChange() {
        document.body.style.backgroundColor = "green" ;
        document.body.style.color = "white" ;
        document.body.style.transition = "2s";
        // document.position.style.color = "white" ;
        // document.position.style.transition = "2s";
    }
    //HTML側で取得したbackImageにマウスオバーした時backChange関数の変更をさせてる
    backImage.onmouseover = backChange;

    //backOF関数で上記のマウスアウトした時、body要素の元々のCSSに戻している
    function backOf() {
        document.body.style.backgroundColor = "" ;
        document.body.style.color = "" ;
        document.body.style.transition = "2s";
        // document.position.style.color = "" ;
        // document.position.style.transition = "2s";
    }
    backImage.onmouseout =backOf;

 //aタグのhoverアゥション終了ーーーーーーーーーー
    
 
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
'{ "id": "1","quest": "最近調子がイマイチ良くない。","yes": "2","no": "8" },' +
'{ "id": "2","quest": "偏食しがち","yes": "3","no": "4" },' +
'{ "id": "3","quest": "よく目が充血する","yes": "5","no": "4" },' +
'{ "id": "4","quest": "余り日光にあたらない","yes": "7","no": "6" },' +
'{ "id": "5","quest": "暗いところでは、よく見えない","yes": "100","no": "7" },' +
'{ "id": "6","quest": "寝つきが悪い。または、なんども目が覚める。","yes": "12","no": "8" },' +
'{ "id": "7","quest": "余り魚を食べない","yes": "200","no": "10" },' +
'{ "id": "8","quest": "肌荒れが気になる","yes": "400","no": "9" },' +
'{ "id": "9","quest": "怠い。疲れやすい。","yes": "11","no": "1000" },' +
'{ "id": "11","quest": "貧血気味である","yes": "600","no": "900" },' +
'{ "id": "12","quest": "集中力、思考力が低下していると感じる。","yes": "300","no": "10" } ]}';


//パースしてる
const obj = JSON.parse(question1);

let question = document.getElementById('question');
let yes_number = document.getElementById('yes_number');
let no_number = document.getElementById('no_number');

question.innerHTML = obj.problem[0].quest;
yes_number.innerHTML = obj.problem[0].yes;
no_number.innerHTML = obj.problem[0].no;


const yes = document.getElementById('yes').onclick = function () {
    yes_number = document.getElementById('yes_number').innerHTML;
    
    question.innerHTML = obj.problem[yes_number].quest;
    let yes_number2 =  obj.problem[yes_number].yes;
    document.getElementById('yes_number').innerHTML = yes_number2;
    console.log(yes_number2);
   
    
};

const no = document.getElementById('no').onclick = function () {
    question.innerHTML = obj.problem[noTwo].quest;
};

}
