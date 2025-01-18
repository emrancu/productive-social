import { useEffect } from 'react';
import './App.css';
import MainButton from "./Components/ActionButtons/MainButton.jsx";

import { mainStore } from './Store/main.js';
import { getAccount} from "@/InstantDB/index.js";

function App({userInfo}) {
      const setAccount = mainStore(state => state.setAccount);
      const setMobileApp = mainStore(state => state.setMobileApp);
      const setUserInfo = mainStore(state => state.setUserInfo);


    useEffect(() => {

        setUserInfo(userInfo)

        /**
         * check for mobile application
         */
        if(window?.PS_MOBILE_APP_ACTIVE){

            setMobileApp('yes')

            /**
             *  this is a custom function that bind with window from cordova index.j where create a webview for m.facebook.com
             *  callback function will process from cordova app's index.js file
             */
            window.sendToCordova({
                type: "ps_get_account",
                userInfo: userInfo,
            }, (data)=>{

                if(data?.facebook_id){
                    setAccount(data);
                }

            })

        } else {
           getAccount(userInfo).then(() => 'done')
        }

    }, []);


    return (
        <>

            <MainButton></MainButton>

            {/*{settings && settings?.facebook_mode === 'special' && <div id="fb-feed-extension-main-container"  >*/}
            {/*    <PostList />*/}
            {/*</div>}*/}

        </>
    );
}

export default App;
