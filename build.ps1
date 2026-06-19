$ErrorActionPreference = "Stop"
$root = $PSScriptRoot
Set-Location $root

Write-Host "==> Limpiando build anterior..." -ForegroundColor Cyan
if (Test-Path dist) { Remove-Item dist -Recurse -Force }

Write-Host "==> Compilando React app (index.build.html -> /src/main.tsx)..." -ForegroundColor Cyan
Copy-Item index.build.html index.html -Force
npm.cmd run build 2>&1 | Out-Host
if ($LASTEXITCODE -ne 0) { throw "Build fallido" }

Write-Host "==> Copiando assets con nombres limpios..." -ForegroundColor Cyan
$css = Get-ChildItem dist\assets\*.css | Select-Object -First 1
$js = Get-ChildItem dist\assets\*.js | Select-Object -First 1
Copy-Item $css.FullName "styles.css" -Force
Copy-Item $js.FullName "app.js" -Force

Write-Host "==> Copiando favicon y logo..." -ForegroundColor Cyan
Copy-Item "public\favicon.png" "favicon.png" -Force
Copy-Item "public\Logo_Ittel_AI.png" "Logo_Ittel_AI.png" -Force
if (Test-Path "public\plataforma") {
  if (-not (Test-Path "plataforma")) { New-Item -ItemType Directory -Path "plataforma" | Out-Null }
  Copy-Item "public\plataforma\*" "plataforma" -Recurse -Force
}

Write-Host "==> Reescribiendo index.html de produccion..." -ForegroundColor Cyan
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
  <link rel="stylesheet" href="../styles.css" />
</head>
<body>
  <div id="root"></div>
  <script type="module" src="../app.js"></script>
</body>
</html>
"@
[System.IO.File]::WriteAllText((Join-Path $presentationRoot "index.html"), $presentationHtml, $utf8NoBom)

$distPresentation = Join-Path $root "dist\presentacion"
if (-not (Test-Path $distPresentation)) { New-Item -ItemType Directory -Path $distPresentation | Out-Null }
$distHtmlPath = Join-Path $root "dist\index.html"
if (Test-Path $distHtmlPath) {
  $distPresentationHtml = [System.IO.File]::ReadAllText($distHtmlPath).Replace("./assets/", "../assets/")
  [System.IO.File]::WriteAllText((Join-Path $distPresentation "index.html"), $distPresentationHtml, $utf8NoBom)
}

Write-Host "==> Listo! Archivos para produccion:" -ForegroundColor Green
Write-Host "    index.html, styles.css, app.js, favicon.png, Logo_Ittel_AI.png" -ForegroundColor Gray
Write-Host "    + presentacion/index.html" -ForegroundColor Gray
Write-Host "    + plataforma/*.png" -ForegroundColor Gray
Write-Host "    + smart-city-caba-hero.png, smart-city-operations-waste-its.png" -ForegroundColor Gray
Write-Host "    + robots.txt, llms.txt" -ForegroundColor Gray
