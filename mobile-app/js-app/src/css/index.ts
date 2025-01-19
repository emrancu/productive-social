
/**
 * productive Social app css (after build)
 * we need to inject css inline because it's not work if we do not inject css as inline css.
 */


export const  injectStyle = (webview: any)=>{

    // @ts-ignore
    webview.executeScript({
        code: ` 
        
function injectStyle(id) {
   if(!document.getElementById('stylesheet_' + id)) {
           const style = document.createElement("style");
            style.id = 'stylesheet_' + id
            style.textContent = \`
            
.welcome-modal .ant-btn-primary{background:#111827}.welcome-modal .ant-btn-primary:hover{background:#1f2937}.modal-container{padding:0!important}.modal-header{padding-left:0!important;padding-right:0!important}.float-button{position:fixed!important;right:20px!important;top:92px!important;transform:translateY(-50%)!important;z-index:99999!important}.mode-button{width:100%!important;margin-bottom:20px!important;height:auto!important;padding:14px!important;font-size:22px!important}@media (max-width: 800px){.float-button{top:66px!important;right:12px!important}#ps_main_title{display:none!important}}.welcome-modal .ant-modal-content{padding:0;border-radius:12px;overflow:hidden;box-shadow:0 20px 25px -5px #0000001a,0 10px 10px -5px #0000000a}.modal-container{width:100%}.modal-header{display:flex;justify-content:space-between;align-items:center;padding:24px 32px;border-bottom:1px solid #f0f0f0}.header-title{display:flex;align-items:center;gap:12px;font-size:24px;font-weight:600}.info-circle{width:24px;height:24px;display:flex;align-items:center;justify-content:center;border:1px dashed #d9d9d9;border-radius:50%}.info-circle .anticon{font-size:14px;color:#666}.close-button{border:none;font-size:18px}.modal-content{padding:24px 32px}.description{font-size:20px;color:#666;margin-bottom:32px}.features-list{display:flex;flex-direction:column;gap:24px;margin-bottom:32px}.feature-item{display:flex;align-items:flex-start;gap:12px}.feature-item .anticon{font-size:18px;color:#666;margin-top:4px}.feature-text{display:flex;flex-direction:column;gap:4px}.feature-title{font-size:20px;font-weight:500}.feature-description{font-size:18px;color:#666}.bottom-message{display:flex;align-items:flex-start;gap:12px;background-color:#f5f5f5;padding:24px;border-radius:8px;margin-bottom:32px}.bottom-message .anticon{font-size:18px;color:#666;margin-top:4px}.bottom-message span{font-size:18px;color:#666}.modal-footer{display:flex;justify-content:flex-end;gap:16px;padding-top:8px}.maybe-later-btn:hover{background:#f0f0f0}.settings-modal .ant-modal-content{padding:0;border-radius:16px;overflow:hidden;background:#fff}.modal-container{padding:24px;width:auto}.modal-header{display:flex;justify-content:space-between;align-items:center;padding-bottom:16px;border-bottom:1px solid #f0f0f0;margin:0 0 24px}.header-title{display:flex;align-items:center;gap:12px}.header-title span{font-size:20px;font-weight:500}.shield-icon{color:#4f46e5;font-size:24px}.close-icon{font-size:20px;cursor:pointer;color:#666}.feature-section{background-color:#f8f9ff;padding:20px;border-radius:12px;display:flex;justify-content:space-between;align-items:center;margin-bottom:24px}.feature-content h2{font-size:22px;font-weight:500;margin:0;color:#111}.stats-section{margin:0 -8px 24px}.stat-card{background:#f8f9ff;padding:16px;border-radius:12px;height:100%}.stat-header{display:flex;align-items:center;gap:8px;color:#666;margin-bottom:12px}.stat-icon{background:#f0f0f0;padding:6px;border-radius:8px;font-size:14px;width:32px;height:32px;display:flex;align-items:center;justify-content:center}.stat-value{font-size:28px;font-weight:600;color:#111}.toggles-section{display:flex;flex-direction:column;gap:24px}.toggle-item{display:flex;justify-content:space-between;align-items:center}.toggle-label{display:flex;align-items:center;gap:12px}.toggle-label span{font-size:16px;color:#111}.toggle-icon{background:#f0f0f0;padding:6px;border-radius:8px;font-size:14px;width:32px;height:32px;display:flex;align-items:center;justify-content:center}.settings-modal .ant-switch{min-width:44px;height:24px;background:#e5e7eb}.settings-modal .ant-switch-checked{background:#4f46e5!important}.settings-modal .ant-switch-handle{width:20px;height:20px;top:2px}.settings-modal .ant-switch-handle:before{border-radius:50%;background-color:#fff}.confirmation-modal .confirm-content{text-align:center;padding:24px}.confirmation-modal .warning-icon{font-size:48px;color:#faad14;margin-bottom:16px}.confirmation-modal h3{font-size:20px;margin-bottom:8px}.confirmation-modal p{color:#666;margin-bottom:24px}.confirmation-modal .confirm-buttons{display:flex;justify-content:center;gap:16px}.confirmation-modal button{padding:8px 24px;border-radius:6px;font-size:16px;cursor:pointer}.confirmation-modal .cancel-btn{background:#f0f0f0;border:none}.confirmation-modal .deactivate-btn{background:#ff4d4f;color:#fff;border:none}.success-modal .success-content{text-align:center;padding:32px}.success-modal .success-icon{font-size:48px;color:#52c41a;margin-bottom:16px}.success-modal h3{font-size:20px;margin-bottom:8px}.success-modal p{color:#666}.feature-section{background-color:#f8f9ff;padding:20px;border-radius:12px;display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}.feature-content h2{font-size:20px;font-weight:500;margin:0;color:#111}.feature-content p{color:#666;margin:4px 0 0;font-size:16px}.feature-section .ant-switch{min-width:44px;height:24px}.feature-section .ant-switch-checked{background:#4f46e5!important}.feature-section .ant-switch-checked .ant-switch-handle{top:2px}.feature-section:hover{background-color:#f3f4ff}

 #fb-feed-loader{visibility:visible!important}#fb-feed-extension-main-container{position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100vh;background-color:#fff;z-index:999;overflow-y:auto;overflow-x:hidden;padding:0 20px 20px;scroll-behavior:smooth;scrollbar-width:thin}#fb-feed-extension-main-container::-webkit-scrollbar{width:8px}#fb-feed-extension-main-container::-webkit-scrollbar-track{background:#f1f1f1}#fb-feed-extension-main-container::-webkit-scrollbar-thumb{background:#888;border-radius:4px}#fb-feed-extension-main-container::-webkit-scrollbar-thumb:hover{background:#555}.cover-create-area{position:fixed;z-index:999999;background-color:#ebebeb}.cover-create-area.left{left:0;top:0;bottom:0}.cover-create-area.right{right:0;top:0;bottom:0}.cover-create-area.top{right:0;top:0;left:0}.cover-create-area.bottom{right:0;bottom:0;left:0}.productive-social-blur{filter:blur(5px)}.productive-social-hide-visibility{z-index:-1!important;visibility:hidden!important}.productive-social-hide-visibility-clean{position:absolute;top:0;left:0;right:0;background:#c9f7c9bf;bottom:0;text-align:center;padding-top:45%;font-style:italic;color:#94c08e}.productive-social-hide-menu{display:none!important;opacity:0!important;pointer-events:none;background-color:#fff}.productive-social-hide-menu>div{pointer-events:none;visibility:hidden}
     \`
            document.head.appendChild(style);    
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

injectStyle("34862482764267423648");  

  `});
}
