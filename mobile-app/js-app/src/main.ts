import {startFacebook} from './webview'


function onDeviceReady() {
    startFacebook()
}



document.addEventListener('deviceready', onDeviceReady, false);
