
function here() {
    navigator.geolocation.getCurrentPosition(here2);
}

function here2(position) {

    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    let a = document.forms[0].a;
    let b = document.forms[0].b;
//    document.getElementById("latit").name=latitude;
// document.getElementById("longi").name=longitude;
let aa = a.value = latitude;
let bb = b.value = longitude;



    // key_word = document.getElementById('11').innerHTML;

    // const api_key = "d01f59366e3bd62b";

    // url_hotpepper = `//webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${api_key}&lat=${latitude}&lng=${longitude}&range=5&keyword=${key_word}`;//&format=json　　&forma=callback=show　　&forma=callback=jsonData
    // const encode_url = encodeURI(url_hotpepper);
    // // console.log(url_hotpepper);

       
    
    // (function() {
    //     var json_url = encode_url;
    //     var script = document.createElement("script");
    //     script.setAttribute("src",json_url);
    //     script.setAttribute("type","application/xml");
    //     document.getElementsByTagName("body")[0].appendChild(script);
     

  
        // }());
    // console.log(show());
    // var element = document.createElement('div').appendChild("body");
    
//     var requestURL = encode_url;
//     console.log(url_hotpepper);
    
//     var script = document.createElement('script');
//     script.src = url_hotpepper;
//     document.body.appendChild(script);
//     document.body.removeChild(script);
//     // &callback=jsonData(data)
//     //コールバックされたJSONデータの読み込み
//     function jsonData(data) {
//     console.log(data);
// }

}
here();

function food() {
  id = event.srcElement.id;
  foods = document.getElementById(id).innerHTML;
  document.forms[0].food.value=foods;

  document.form.submit();
}


// $(function(){
//   $.ajax({
//       url: '//webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=d01f59366e3bd62b&lat=34.5287722&lng=135.5848848&range=5',
//       type:'GET',
//       dataType:'xml',
//       timeout:1000,
//       error:function() {
//           alert("ロード失敗");
//       },
//       success:function(xml){
//         alert("ロード");
//           $(xml).find("sample").each(function() {
//               $("#sample ul").append('<li><a href="' + $(this).find('url').text() +  '" target="_blank">' + $(this).find('title').text() + '</a></li>');
//           });
//       }
//   });
// });
