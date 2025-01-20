import {useEffect, useState} from 'react';
import {Tooltip, Button} from 'antd';
import {
    FileImageOutlined,
    SettingOutlined, StopOutlined
} from '@ant-design/icons';
import WelcomeModal from "./Welcome.jsx";
import {mainStore} from "@/Store/main.js";
import SettingsModal from "./SettingsModal/SettingsModal.jsx";
import {handlePartialMode, initImageProcessor} from "@/Components/ActionButtons/action.js";

function MainButton() {
    const runningMode = mainStore(state => state.runningMode);
    const setRunningMode = mainStore(state => state.setRunningMode);
    const account = mainStore(state => state.account);
    const totalRemoved = mainStore(state => state.totalRemoved);
    const totalImageMasked = mainStore(state => state.totalImageMasked);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [observer, setObserver] = useState(null);
    const [isSettingModalOpen, setIsSettingModalOpen] = useState(false);

        // Handle data changes in useEffect
        useEffect(() => {

            if (account?.facebook_mode) {

                    if(!runningMode && account?.facebook_mode === 'basic'){

                        handlePartialMode()

                        setRunningMode(account?.facebook_mode)
                    }

                    if(!account?.facebook_mode){
                        setIsSettingModalOpen(true)
                    }else{
                        setIsSettingModalOpen(false)
                    }

                    if(observer && !account?.image_blur){
                        observer.disconnect();
                    }

                    if( !observer && account?.image_blur ){
                        imageBlur();
                    }

            }

        }, [account]);


    const imageBlur = ()=>{

        if(document.querySelector('div[id^="screen-root"]')){
            const mObserver =  initImageProcessor('div[id^="screen-root"]');

            if(mObserver){
                setObserver(mObserver)
            }
        }

        if(document.querySelector("div[id^='mount']")){

          const mObserver = initImageProcessor('div[id^="mount"]');

            if(mObserver){
                setObserver(mObserver)
            }
        }
    }

    const showModal = () => {

        if(!account?.facebook_id){
            setIsModalOpen(true);
        } else {
            setIsSettingModalOpen(true)
        }
    };


    return (
        <>
            <div className="float-button">
                <Button
                    type="primary"
                    size='large'
                    style={{
                        backgroundColor: "#4F46E5"
                    }}

                    onClick={showModal}
                    id={"productive-social-action-button"}
                >
                    <SettingOutlined />

                    <span id={"ps_main_title"}>Productive Social</span>

                </Button>

                {(totalRemoved + totalImageMasked) > 0 && (
                    <div style={{ display: 'flex', gap: '8px', marginTop:'4px' }}>
                        <Tooltip
                            title="Total Image musked"
                            overlayStyle={{ zIndex: 100000 }}
                        >
                            <div style={{
                                backgroundColor: '#ff4d4f',
                                color: 'white',
                                borderRadius: '10px',
                                padding: '0 8px',
                                fontSize: '12px',
                                height: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                cursor: 'pointer'
                            }}>
                                <FileImageOutlined style={{ marginRight: 4 }} />
                                {totalImageMasked}
                            </div>
                        </Tooltip>
                        <Tooltip
                            title="Total Unnecessary Item Removed"
                            overlayStyle={{ zIndex: 100000 }}
                        >
                            <div style={{
                                backgroundColor: '#ff4d4f',
                                color: 'white',
                                borderRadius: '10px',
                                padding: '0 8px',
                                fontSize: '12px',
                                height: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                cursor: 'pointer'
                            }}>
                                <StopOutlined style={{ marginRight: 4 }} />
                                {totalRemoved}
                            </div>
                        </Tooltip>
                    </div>
                )}

            </div>

            <WelcomeModal
                isOpen={isModalOpen && !account?.facebook_id}
                onClose={() => setIsModalOpen(false)}
            />

            <SettingsModal
                isOpen={isSettingModalOpen}
                onClose={() => setIsSettingModalOpen(false)}
            />

        </>
    );
}

export default MainButton;