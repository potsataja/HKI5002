<?php

//echo $_REQUEST[uudis];

if($_REQUEST[uudis] == "1") {
    echo "<b>Uudis 1</b>";
    echo "<br><br>";
    echo "Südasuviselt sooja reede lõpetas Mick Pedaja kontsert Võsul Ukuleles. Ühtlasi sai avapaugu sellega suveürituste kolimine Võsule.";
    echo "<br>";
    echo "<a href='http://virumaateataja.postimees.ee/4119343/vosu-suve-avas-mick-pedaja' target='_blank'>Viide</a>";
}
else if($_REQUEST[uudis] == "2") {
    echo "Uudis 2";
}
else if($_REQUEST[uudis] == "3") {
    include("news-123.php");
}

?>