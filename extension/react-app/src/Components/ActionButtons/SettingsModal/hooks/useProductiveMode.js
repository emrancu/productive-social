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
    const settings = mainStore(state => state.settings);
    const runningMode = mainStore(state => state.runningMode);
    const setSetRunningMode = mainStore(state => state.setSetRunningMode);
    const setBlurImage = mainStore(state => state.setBlurImage);


    const handleModeChange = async (newMode) => {
        if (newMode === MODES.NONE) {
            setShowConfirmModal(true);
            return;
        }

        setShowSuccessModal(true);

        // Update in database
        await updateMode(newMode, settings.id);

        // Show success message
        message.success(`${newMode.charAt(0).toUpperCase() + newMode.slice(1)} mode activated`);

        // Auto hide success modal
        setTimeout(() => {
            setShowSuccessModal(false);
        }, 2000);

        if(newMode === MODES.NONE){
            setTimeout(()=>{
                  window.location.reload()
            }, 300)
        }

    };

    const handleBlurChange = async (status) => {

        setBlurImage(status)

        await updateBlur(status, settings.id);

    };

    const deactivateMode = () => {

        updateMode(MODES.NONE, settings.id);
        setShowConfirmModal(false);
        message.info('Productive Mode deactivated');


        if(runningMode && settings?.facebook_mode === 'basic'){
            setSetRunningMode(null)

          setTimeout(()=>{
              window.location.reload()
          }, 300)

        }

        if(runningMode && settings?.facebook_mode === 'special'){
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