::[Bat To Exe Converter]
::
::YAwzoRdxOk+EWAjk
::fBw5plQjdCyDJGyX8VAjFBZVXgeNAE+1EbsQ5+n//Nakt14JW+9yUYzU1PmqJfMa7UupU5oswntJjMIPQUgVTRusYBok52dBuQQ=
::YAwzuBVtJxjWCl3EqQJgSA==
::ZR4luwNxJguZRRnk
::Yhs/ulQjdF+5
::cxAkpRVqdFKZSTk=
::cBs/ulQjdFy5
::ZR41oxFsdFKZSDk=
::eBoioBt6dFKZSDk=
::cRo6pxp7LAbNWATEpCI=
::egkzugNsPRvcWATEpCI=
::dAsiuh18IRvcCxnZtBJQ
::cRYluBh/LU+EWAnk
::YxY4rhs+aU+JeA==
::cxY6rQJ7JhzQF1fEqQJQ
::ZQ05rAF9IBncCkqN+0xwdVs0
::ZQ05rAF9IAHYFVzEqQJQ
::eg0/rx1wNQPfEVWB+kM9LVsJDGQ=
::fBEirQZwNQPfEVWB+kM9LVsJDGQ=
::cRolqwZ3JBvQF1fEqQJQ
::dhA7uBVwLU+EWDk=
::YQ03rBFzNR3SWATElA==
::dhAmsQZ3MwfNWATElA==
::ZQ0/vhVqMQ3MEVWAtB9wSA==
::Zg8zqx1/OA3MEVWAtB9wSA==
::dhA7pRFwIByZRRnk
::Zh4grVQjdCyDJGyX8VAjFBZVXgeNAE+1EbsQ5+n//Nazp0QRWuc3dYrJl5WeMNZGpED8cPY=
::YB416Ek+ZG8=
::
::
::978f952a14a936cc963da21a135fa983
@echo

set self=%~f0
if "%1"=="minimized" goto :minimized
cd %~dp0
start "" /min  cmd /c "%self%" minimized
exit /b
:minimized

start /min cmd.exe /k "cd C:/Users/marco/Developments/teilnehmer_app/Teilnehmer_App_V20_Git/backend && node server.js"

start /min cmd.exe /k "cd C:/Users/marco/Developments/teilnehmer_app/Teilnehmer_App_V20_Git/frontend && yarn start"