<?php

$imagenId = $_GET['imagen'];

$imagenId = $_GET['imagen'];

// Validar que la imagen existe antes de continuar
$url = "https://sisivey.com/apiobraivey/imagenes/" . $imagenId . ".JPG";
$headers = get_headers($url);
if (!$headers || strpos($headers[0], '404 Not Found') !== false) {
  // Devolver una imagen de error o un error 404
  header("HTTP/1.0 404 Not Found");
  exit;
}

// Leer la imagen y devolverla al navegador
$imagen = file_get_contents($url);
header("Content-Type: image/jpeg");
echo $imagen;
echo "Imagen cargada correctamente";
?>
```
