// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// install VSCode extension Prettier - Code firmatter
//File-Settings-Editor: Default formatter - choose Prettier
//                Editor: Format on Save - true
//Viev-Comand Palette - , and type: Format Document With
const x = 28;

if (x === 24) console.log(56);

//File-Preference-User Snippets-New Global Snippets File
//TODO Highlight extencion

//atomatic reloading of page
//1
//Use Live server extention
console.log(x);

//2
//Download and install atomatic reloading of page
//Open Terminal
//cls - clear terminal
//node -v    - to see version of nodeJS
//then: npm install live-server -g
//then: live-server

// I've runned Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser in PowerShell (maybe should be removed due to security reasons)

//start status was:
// PS C:\Users\small> Get-ExecutionPolicy -List

//         Scope ExecutionPolicy
//         ----- ---------------
// MachinePolicy       Undefined
//    UserPolicy       Undefined
//       Process       Undefined
//   CurrentUser       Undefined
//  LocalMachine       Undefined

//After document saving page is automatically reloaded with new data.
//End of 2
