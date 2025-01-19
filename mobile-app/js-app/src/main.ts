 import {startFacebook} from './webview'


function onDeviceReady() {

   // hide app loader
   setTimeout(function() {
       let splash: any = document.querySelector('div#customSplash');
       splash.style.transition = 'opacity 0.5s ease';
       splash.style.opacity = '0';
       setTimeout(function() {
           splash.parentNode.removeChild(splash);
       }, 500);
   }, 3000);


    startFacebook()

}



document.addEventListener('deviceready', onDeviceReady, false);
