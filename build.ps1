$ErrorActionPreference = "Stop"
$root = $PSScriptRoot
Set-Location $root

Write-Host "==> Limpiando build anterior..." -ForegroundColor Cyan
if (Test-Path dist) { Remove-Item dist -Recurse -Force }

Write-Host "==> Compilando React app (index.build.html -> /src/main.tsx)..." -ForegroundColor Cyan
# Usar index.build.html como entry temporal
Copy-Item index.build.html index.html -Force
npm run build 2>&1 | Out-Host
if ($LASTEXITCODE -ne 0) { throw "Build fallido" }

Write-Host "==> Copiando assets con nombres limpios..." -ForegroundColor Cyan
$css = Get-ChildItem dist\assets\*.css | Select-Object -First 1
$js = Get-ChildItem dist\assets\*.js | Select-Object -First 1
$svg = Get-ChildItem dist\assets\*.svg | Select-Object -First 1
Copy-Item $css.FullName "styles.css" -Force
Copy-Item $js.FullName "app.js" -Force

Write-Host "==> Copiando favicon..." -ForegroundColor Cyan
Copy-Item $svg.FullName "favicon.svg" -Force

Write-Host "==> Reescribiendo index.html de produccion..." -ForegroundColor Cyan
# Usar [System.IO.File] para evitar BOM de UTF8
$prodHtml = @"
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <meta name="theme-color" content="#051023" />
  <meta name="description" content="IT-TEL Smart City by GRUPO ITTEL - una plataforma para integrar semaforos, luminarias, sensores, camaras, reclamos y cuadrillas sobre un mapa operativo de la ciudad." />
  <title>IT-TEL Smart City - Ciudades inteligentes en operacion | GRUPO ITTEL</title>
  <link rel="icon" type="image/svg+xml" href="./favicon.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="./styles.css" />
</head>
<body>
  <div id="root"></div>
  <script type="module" src="./app.js"></script>
</body>
</html>
"@
$utf8NoBom = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllText((Join-Path $root "index.html"), $prodHtml, $utf8NoBom)

Write-Host "==> Listo! Archivos para produccion:" -ForegroundColor Green
Write-Host "    index.html, styles.css, app.js, favicon.svg" -ForegroundColor Gray
Write-Host "    + smart-city-caba-hero.png, smart-city-operations-waste-its.png" -ForegroundColor Gray
Write-Host "    + robots.txt, llms.txt" -ForegroundColor Gray
