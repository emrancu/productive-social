import {addAccount, getAccount, updateBlur, updateMode} from "../instant-db";
import {injectStyle} from "../css";


let webview: any = null;

// let isServiceRunning: boolean = false;
let isWebViewRunning: boolean = false;

export const startFacebook = ()=>{

    if (!isWebViewRunning) {

        try {

            const options = 'location=no,zoom=no,enableViewportScale=no,hidenavigationbuttons=yes';

            // @ts-ignore
            webview = cordova.InAppBrowser.open('https://m.facebook.com', '_blank', options);

            webview.addEventListener('loadstop', function() {
                injectScript();
            });

            webview.addEventListener('message', async (event: any) => {

                const data = event.data

                if(data.type === 'ps_get_account'){
                    const account = await getAccount(data.userInfo)

                    webview.executeScript({
                        code: `
                      var callbackData = ${JSON.stringify(account)};
                      window.PS_MESSAGE_CALLBACK["${data.callback_uid}"](callbackData);
                       `,
                    });
                }

                if(data.type === 'ps_update_account_mode'){
                     await updateMode(data.newMode, data.userInfo?.id)
                }

                if(data.type === 'ps_update_decent_image'){
                     await updateBlur(data.status, data.userInfo?.id)
                }

                if(data.type === 'productive_image_process'){

                    // @ts-ignore
                    window.processImage(data, (response: any) =>{

                        webview.executeScript({
                            code: `
                      var callbackData = ${JSON.stringify(response)};
                      window.PS_MESSAGE_CALLBACK["${data.callback_uid}"](callbackData);
                      delete window.PS_MESSAGE_CALLBACK["${data.callback_uid}"]
                       `,
                        });

                    })

                }

                if(data.type === 'ps_register_account'){
                    await addAccount(data.userInfo)
                }

            });

            isWebViewRunning = true;

        } catch (error) {
            console.error('Error starting WebView:', error);

        }
    }
}



function injectScript() {

 injectStyle(webview);

    // @ts-ignore
 webview.executeScript({
        code: ` 
        
function injectScript(src, id) {
    if(!document.getElementById('ps_script_' + id)) {
        const script = document.createElement('script');
        script.src = src;   
        script.id = 'ps_script_' + id;
        script.type = 'text/javascript'; 
        document.head.appendChild(script);
    }
}

function injectInlineScript( id) {
   if(!document.getElementById('ps_script_' + id)) { 
         const script = document.createElement('script');
          script.id = 'ps_script_' + id
        
        script.textContent = \`
        
        window.PS_MOBILE_APP_ACTIVE = 'yes'
        window.PS_MESSAGE_CALLBACK = {}

 
        function generateUUID() {
          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = (Math.random() * 16) | 0;
            const v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
          });
        }
      
        window.sendToCordova = (data, callback = null)=>{
            
            if(callback){
             const uuid =  generateUUID()
             data.callback_uid = uuid
             window.PS_MESSAGE_CALLBACK[uuid]= callback
            }
           
            window.webkit.messageHandlers.cordova_iab.postMessage(
                JSON.stringify(data)
            );
        } 
        \`;
 
        document.head.appendChild(script);
    }
}

injectInlineScript("34862482712267423632"); 
 
// check on extension - public/js/content.js
injectScript('https://pub-f091aa110d8a404eae2809211dc7f591.r2.dev/productive-social/build/content.js?v=1.0.0.4', '100012001');

// This is the main app file (after build)- check on extension - public/app/index.js
injectScript('https://pub-f091aa110d8a404eae2809211dc7f591.r2.dev/productive-social/build/index.js?v=1.0.0.4', '100012002');
 

  `});


}
