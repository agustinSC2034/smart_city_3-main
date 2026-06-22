$ErrorActionPreference = "Stop"
$root = $PSScriptRoot
Set-Location $root

Write-Host "==> Limpiando builds anteriores..." -ForegroundColor Cyan
if (Test-Path dist) { Remove-Item dist -Recurse -Force }
if (Test-Path dist-presentation) { Remove-Item dist-presentation -Recurse -Force }

Write-Host "==> Compilando landing (index.build.html -> /src/main.tsx)..." -ForegroundColor Cyan
Copy-Item index.build.html index.html -Force
npm.cmd run build 2>&1 | Out-Host
if ($LASTEXITCODE -ne 0) { throw "Build de landing fallido" }

Write-Host "==> Compilando presentacion (/src/presentacion-main.tsx)..." -ForegroundColor Cyan
npm.cmd run build:presentation 2>&1 | Out-Host
if ($LASTEXITCODE -ne 0) { throw "Build de presentacion fallido" }

Write-Host "==> Copiando assets de la landing con nombres limpios..." -ForegroundColor Cyan
$css = Get-ChildItem dist\assets\*.css | Select-Object -First 1
$js = Get-ChildItem dist\assets\*.js | Select-Object -First 1
Copy-Item $css.FullName "styles.css" -Force
Copy-Item $js.FullName "app.js" -Force

Write-Host "==> Copiando bundle de la presentacion..." -ForegroundColor Cyan
$presJs = Join-Path $root "dist-presentation\presentacion.js"
$presCss = Join-Path $root "dist-presentation\presentacion.css"
if (-not (Test-Path $presJs)) { throw "No se genero dist-presentation\presentacion.js" }
Copy-Item $presJs "presentacion.js" -Force
if (Test-Path $presCss) { Copy-Item $presCss "presentacion.css" -Force }

Write-Host "==> Copiando favicon y logo..." -ForegroundColor Cyan
Copy-Item "public\favicon.png" "favicon.png" -Force
Copy-Item "public\Logo_Ittel_AI.png" "Logo_Ittel_AI.png" -Force
if (Test-Path "public\plataforma") {
  if (-not (Test-Path "plataforma")) { New-Item -ItemType Directory -Path "plataforma" | Out-Null }
  Copy-Item "public\plataforma\*" "plataforma" -Recurse -Force
}
if (Test-Path "public\clients") {
  if (-not (Test-Path "clients")) { New-Item -ItemType Directory -Path "clients" | Out-Null }
  Copy-Item "public\clients\*" "clients" -Recurse -Force
}
if (Test-Path "public\contacto.php") {
  Copy-Item "public\contacto.php" "contacto.php" -Force
}
Copy-Item "public\smart-city-caba-hero-2.png" "smart-city-caba-hero-2.png" -Force

Write-Host "==> Reescribiendo index.html de produccion (landing)..." -ForegroundColor Cyan
$prodHtml = @"
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <meta name="theme-color" content="#051023" />
  <meta name="description" content="IT-TEL Smart City by GRUPO ITTEL - una plataforma para integrar semaforos, luminarias, sensores, camaras, reclamos y cuadrillas sobre un mapa operativo de la ciudad." />
  <title>IT-TEL Smart City - Ciudades inteligentes en operacion | GRUPO ITTEL</title>
  <link rel="icon" type="image/png" href="./favicon.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="./styles.css" />
  <script src="https://www.google.com/recaptcha/api.js?render=explicit" async defer></script>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="./app.js"></script>
</body>
</html>
"@
$utf8NoBom = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllText((Join-Path $root "index.html"), $prodHtml, $utf8NoBom)

Write-Host "==> Generando ruta estatica /presentacion/..." -ForegroundColor Cyan
$presentationRoot = Join-Path $root "presentacion"
if (-not (Test-Path $presentationRoot)) { New-Item -ItemType Directory -Path $presentationRoot | Out-Null }
$presentationHtml = @"
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <meta name="theme-color" content="#051023" />
  <meta name="description" content="Presentacion online de IT-TEL Smart City by GRUPO ITTEL." />
  <title>Presentacion Smart City | GRUPO ITTEL</title>
  <link rel="icon" type="image/png" href="../favicon.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../presentacion.css" />
</head>
<body>
  <div id="root"></div>
  <script type="module" src="../presentacion.js"></script>
</body>
</html>
"@
[System.IO.File]::WriteAllText((Join-Path $presentationRoot "index.html"), $presentationHtml, $utf8NoBom)

Write-Host "==> Listo! Archivos para produccion:" -ForegroundColor Green
Write-Host "    index.html, styles.css, app.js, favicon.png, Logo_Ittel_AI.png" -ForegroundColor Gray
Write-Host "    presentacion/index.html, ../presentacion.js, ../presentacion.css" -ForegroundColor Gray
Write-Host "    + plataforma/*.png" -ForegroundColor Gray
Write-Host "    + smart-city-caba-hero-2.png, smart-city-operations-waste-its.png" -ForegroundColor Gray
Write-Host "    + robots.txt, llms.txt" -ForegroundColor Gray
