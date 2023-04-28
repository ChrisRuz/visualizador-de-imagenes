<?php
$imagenId = $_GET['imagen'];
$imagenPath = 'https://sisivey.com/apiobraivey/imagenes/' . $imagenId . '.jpg';
header('Content-Type: image/jpeg');
readfile($imagenPath);
?>
