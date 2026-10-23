@echo off
cd /d "%~dp0"

echo Starting Backend Server on http://localhost:8000 ...
start "LibraEase Backend (Port 8000)" cmd /k "cd Server && npm.cmd run dev"

ping 127.0.0.1 -n 3 >nul

echo Starting Frontend App on http://localhost:5000 ...
start "LibraEase Frontend (Port 5000)" cmd /k "cd App && npm.cmd run dev"

ping 127.0.0.1 -n 4 >nul

echo Opening http://localhost:5000 in browser ...
start http://localhost:5000
