import { useState } from 'react';
import { message } from 'antd';
import { mainStore } from "@/Store/main.js";
import {updateBlur, updateMode} from '@/InstantDB/index';

  const MODES = {
    NONE: null,
    BASIC: 'basic',
    SPECIAL: 'special'
};

export const useProductiveMode = () => {

    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const account = mainStore(state => state.account);
    const runningMode = mainStore(state => state.runningMode); 
    const setBlurImage = mainStore(state => state.setBlurImage);


    const handleModeChange = async (newMode) => {
        if (newMode === MODES.NONE) {
            setShowConfirmModal(true);
            return;
        }

        setShowSuccessModal(true);

        if(window?.PS_MOBILE_APP_ACTIVE){

            /**
             *  this is a custom function that bind with window from cordova index.j where create a webview for m.facebook.com
             *  callback function will process from cordova app's index.js file
             */
            window.sendToCordova({
                type: "ps_update_account_mode",
                userInfo: account,
                newMode: newMode
            })

        }else{

            // Update in database
            await updateMode(newMode, account.id);

        }

        // Show success message
        message.success(`${newMode.charAt(0).toUpperCase() + newMode.slice(1)} mode activated`);

        // Auto hide success modal
        setTimeout(() => {
            setShowSuccessModal(false);

            setTimeout(()=>{
                window.location.reload()
            }, 300)


        }, 2000);

    };

    const handleBlurChange = async (status) => {

        setBlurImage(status)

        if(window?.PS_MOBILE_APP_ACTIVE){

            /**
             *  this is a custom function that bind with window from cordova index.j where create a webview for m.facebook.com
             *  callback function will process from cordova app's index.js file
             */
            window.sendToCordova({
                type: "ps_update_decent_image",
                userInfo: account,
                status: status
            })

        } else {

            await updateBlur(status, account.id);

        }

        setTimeout(()=>{
            window.location.reload()
        }, 1000)

    };

    const deactivateMode = () => {

        updateMode(MODES.NONE, account.id);
        setShowConfirmModal(false);
        message.info('Productive Mode deactivated');


        if(runningMode && account?.facebook_mode === 'basic'){
            setSetRunningMode(null)

          setTimeout(()=>{
              window.location.reload()
          }, 300)

        }

        if(runningMode && account?.facebook_mode === 'special'){
            setSetRunningMode(null)

            setTimeout(()=>{
                window.location.reload()
            }, 300)

        }

    };

    return {
        MODES,
        showConfirmModal,
        showSuccessModal,
        setShowConfirmModal,
        setShowSuccessModal,
        handleModeChange,
        handleBlurChange,
        deactivateMode,
    };
};