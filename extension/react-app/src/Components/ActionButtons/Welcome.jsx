import React from 'react';
import { Modal, Button } from 'antd';
import { InfoCircleOutlined, CheckOutlined, ClockCircleOutlined, BulbOutlined, CloseOutlined } from '@ant-design/icons';
import './WelcomeModal.css';
import { db, addAccount } from '@/InstantDB/index';
import {mainStore} from "@/Store/main.js";

const WelcomeModal = ({ isOpen, onClose }) => {
    const userInfo = mainStore(state => state.userInfo);
    const activeNow = async ()=>{

        if(userInfo?.ACCOUNT_ID){
            await addAccount(userInfo)

            setTimeout(()=>{
                window.location.reload();
            }, 1000)
        }

        onClose();
    }

    return (
        <Modal
            open={isOpen}
            footer={null}
            closable={false}
            width={520}
            className="welcome-modal"
            style={{ padding: 0 }}
        >
            <div className="modal-container">
                {/* Header */}
                <div className="modal-header">
                    <div className="header-title">
                        <div className="info-circle">
                            <InfoCircleOutlined />
                        </div>
                        <span>Welcome to Productive Social</span>
                    </div>
                    <Button
                        type="text"
                        icon={<CloseOutlined />}
                        onClick={onClose}
                        className="close-button"
                    />
                </div>

                <div className="modal-content">
                    {/* Description */}
                    <p className="description">
                        Stay focused with Productive Social, the Chrome extension designed to remove distractions like videos, Marketplace, Reels, Stories, sponsored content, and friend suggestions. Simplify your Facebook experience and make every moment online more intentional.
                    </p>

                    {/* Footer Buttons */}
                    <div className="modal-footer">
                        <Button
                            size="large"
                            onClick={onClose}
                            className="maybe-later-btn"
                        >
                            Maybe Later
                        </Button>
                        <Button
                            size="large"
                            type="primary"
                            className="activate-btn"
                            onClick={activeNow}
                        >
                            Activate Now
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default WelcomeModal;