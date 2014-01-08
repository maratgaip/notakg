<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>contents demo</title>
    <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
 <style>
 #namba{
 display:none;
 }
 body{
 background:none!important;
 }

 </style>
</head>
<body>
<div id="namba">
<?php
$link = $_GET['music_id'];
$homepage = file_get_contents('http://download.files.namba.kg/files/'.$link);
echo $homepage;
?>
     </div>

 <script>
    $(document).ready(function(){
          var timeout = setTimeout(myFunction, 1000);
          var myFunction = new function() {
                $('.startdownload').css('background-color', '#000');
                 var href = $('.startdownload a:eq(1)').attr('href');
                                $("#mp3_src").attr("src", href);
                                var player = $("#audio_player");
                                   // maybe then do something
                                   player[0].load();
                                   player[0].play();
                }
      });

    </script>

    <audio id="audio_player" controls>
      <source id="mp3_src" src="aaaa" type="audio/mpeg">
      Your browser does not support the audio tag.
    </audio>
</body>
</html>