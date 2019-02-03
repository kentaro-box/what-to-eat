<?php
$latitude = $_POST['a'];
$longitude = $_POST['b'];
$key_word = $_POST['food'];
$api = "d01f59366e3bd62b";

$hotpepper = "https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${api}&lat=${latitude}&lng=${longitude}&range=5&keyword=${key_word}";// &keyword=${key_word}   &format=json　　&forma=callback=show　　&forma=callback=jsonData


$xml = $hotpepper;//ファイルを指定
$xmlData = simplexml_load_file($xml);//xmlを読み込む
// var_dump($xmlData);
// echo $xmlData->shop[0]->name;
$photo = $xmlData->shop->photo->pc->l;

?>




<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>What to eat</title>
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="store.css">
</head>
<body>
    <div class="shop">
        <div class="container">
        <h1>あなたにオススメの近くのお店！！</h1>
            <div  class="hotpepper">
            Powered by <a href="http://webservice.recruit.co.jp/">ホットペッパー Webサービス</a>
            </div>
            
<?php foreach ($xmlData->shop as $data) {

    echo "<div class='loop'>";
    echo "<h2>$data->name</h2>";
    foreach ($data->photo as $img) {
       foreach ($img->pc as $l){
           echo "<img src='$l->l'>";
       }
    }
    echo "<p>$data->catch</p>";   
    echo "<p>$data->address</p>";
    foreach ($data->urls as $url) {
        echo "<p><a href='$url->pc'>ホームページはこちらから</a></p>";
    }



    echo "</div>";
}
?>
        </div>
    </div>
</body>
</html>