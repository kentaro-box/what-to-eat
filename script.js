window.onload  =  function() {
    

 //pタグのhoverアゥション開始ーーーーーーーーーー

    //下記のconstでHTMLの要素を取得
    const backImage = document.getElementById('back-image');
    const body = document.getElementById('body');
    const title = document.getElementById('title');
    const position = document.getElementById('position');

    // backChange関数を作り、中に各要素の変更したい様に記述 
    function backChange() {
        document.body.style.backgroundColor = "#3fb170" ;
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

 //pタグのhoverアゥション終了ーーーーーーーーーー
    
 
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

 






}
