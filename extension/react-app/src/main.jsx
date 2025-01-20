import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

setTimeout(()=>{

    const containerDIv = document.getElementById('fb-feed-container');

    if(containerDIv){
        const appRoot = document.createElement('div');
        appRoot.id = 'fb-feed-extension-root';
        containerDIv.prepend(appRoot);
    }

}, 200)


setTimeout(()=>{

    let userInfo = null;

    /**
     * get account information of facebook to store InstantDB for  web version. Like: user_id, etc
     */
    const scriptTag = Array.from(document.querySelectorAll('script[type="application/json"]'))
        .find(tag => tag.textContent.includes('"CurrentUserInitialData"'));
    if(scriptTag){
        const jsonContent = scriptTag.textContent;

        const regex = /\[\s*"CurrentUserInitialData",\s*\[.*?\],\s*\{.*?\},\s*\d+\s*\]/s;
        const match = jsonContent.match(regex);

        if (match) {
            const extractedObject =  JSON.parse(match[0]);
            userInfo = extractedObject[2]
        }
    }


    if(!userInfo){

        /**
         * get account information of facebook to store InstantDB for  mobile version(m.facebook.com. Like: user_id
         */

        const scriptTags = document.querySelectorAll('script[nonce]');
        for (const scriptTag of scriptTags) {

            const scriptContent = scriptTag.textContent;
            if (scriptContent.includes('"userid"')) {

                const match = scriptContent.match(/"userid":(\d+)/);
                if (match) {
                    userInfo = { ACCOUNT_ID: match[1], USER_ID: match[1], NAME: ''}
                    break;
                }
            }
        }
    }

    if(userInfo && document.getElementById('fb-feed-extension-root')){

        createRoot(document.getElementById('fb-feed-extension-root')).render(
            <StrictMode>
                <App userInfo={userInfo}/>
            </StrictMode>,
        )
    }

}, 1000)


/**
 *  remove loader of Productive Social
 */
setTimeout(() => {
    const loader = document.getElementById('fb-feed-loader');
    if (loader) {
        // Add fade out animation
        loader.style.transition = 'opacity 0.5s ease';
        loader.style.opacity = '0';

        // Remove loader after animation
        setTimeout(() => {
            loader.remove();

            // Make body visible after loader fades
            document.body.style.setProperty('visibility', 'visible', 'important');

        }, 500);
    }

}, 1300);

