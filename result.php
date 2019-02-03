<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>What to eat</title>
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/earlyaccess/nicomoji.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <script src="//ajax.aspnetcdn.com/ajax/jQuery/jquery-3.1.0.min.js"></script>
</head>
<body id="body" class="body">
    
    <div id='container'>
        <div class="content" id="position">
            <div class="title m-b-md wf-nicomoji">
              <h1 id="problem">〇〇が不足している可能性が！？</h1>
            </div>
            <h2 id="choice">ほな、何の食材食べたらええのぉ？？</h2>
            <div class="links-result">
                <div id="cooking">
                    <h3 class="arrow">自分で作る</h3>
                    <a id="1"  href="javascript:void(0)" onclick="window.open('https://www.kyounoryouri.jp/search/recipe?keyword='+ id1 +'/')"></a>
                    <a id="2"  href="javascript:void(0)" onclick="window.open('https://www.kyounoryouri.jp/search/recipe?keyword='+ id2 +'/')"></a>
                    <a id="3"  href="javascript:void(0)" onclick="window.open('https://www.kyounoryouri.jp/search/recipe?keyword='+ id3 +'/')"></a>
                </div>
                <form action="store.php" method="POST" name="form" id="form">
                    <div id="eating-out">
                            <h3 class="arrow">食べに行こぉ〜</h3>
                            <input type="hidden" name="name">
                            <a id="11" class="colorChange"  onclick="food()"></a>
                            <!-- href="javascript:form.submit()" -->
                            <a id="12" class="colorChange" onclick="food()" ></a>
                            <a id="13" class="colorChange" onclick="food()" ></a>
                    </div>
                    <input id="lati" type="hidden" name="a" >
                    <input id="longi" type="hidden" name="b">
                    <input id="longi" type="hidden" name="food">
                </form>
            </div>
        </div>
    </div>
    <div id="acquisition">
    
    </div>
    <!-- <footer>
        免責：健康被害が出ても一切の責任は持ちませんよ〜
    </footer> -->
<script src="result.js"></script>
<script src="jsonp.js"></script>
</body>
</html>