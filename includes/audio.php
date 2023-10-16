<?php
// $txt = $_POST['txt'];
if (isset($_POST['txt'])) {
    $txt = $_POST['txt'];
    $txt = htmlspecialchars($txt);
    $txt = rawurlencode($txt);
    $audio = file_get_contents('https://translate.google.com/translate_tts?ie=UTF-8&client=gtx&q=' . $txt . '&tl=en-IN');
    $speech = "<audio controls='controls' autoplay></audio>";
    echo $speech;
}
// echo "<iframe hidden src='http://translate.google.com/translate_tts?ie=UTF-8&q=Welcome%20back%20" . $txt . "&tl=en&total=2&idx=0&textlen=5&prev=input'></iframe>";
?>