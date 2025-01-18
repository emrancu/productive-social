
import React from 'react';
import { Modal } from 'antd';
import { CloseOutlined, SecurityScanOutlined } from '@ant-design/icons';
import './SettingsModal.css';
import { useProductiveMode } from './hooks/useProductiveMode';
import ModeSwitch from './ModeSwitch/ModeSwitch';
import ConfirmationModal from './Modals/ConfirmationModal';
import SuccessModal from './Modals/SuccessModal';
import {mainStore} from "@/Store/main.js";

const SettingsModal = ({ isOpen, onClose }) => {
    const {
        MODES,
        showConfirmModal,
        showSuccessModal,
        setShowConfirmModal,
        handleModeChange,
        handleBlurChange,
        deactivateMode
    } = useProductiveMode();

    const account = mainStore(state => state.account);

    return (
        <>
            <Modal
                open={isOpen}
                footer={null}
                closable={false}
                width={620}
                rootClassName="settings-modal"
                maskClosable={true}
                onCancel={onClose}
                style={{zIndex: 999999}}
            >
                <div className="modal-container">
                    {/* Header */}
                    <div className="modal-header">
                        <div className="header-title">
                            <SecurityScanOutlined className="shield-icon" />
                            <span>Productive Social</span>
                        </div>
                        <CloseOutlined className="close-icon" onClick={onClose} />
                    </div>

                    {/* Mode Switches */}
                    <ModeSwitch
                        title="Basic Productive Mode"
                        description="Remove ads and basic distractions"
                        isActive={account?.facebook_mode === MODES.BASIC}
                        onChange={(checked) => handleModeChange(checked ? 'basic' : 'none')}
                    />

                    <ModeSwitch
                        title="Decent Internet"
                        description="Automatically blur indecent photos. Avoid major sins. Checkout Khaf Browser for Better."
                        isActive={account?.image_blur ?? false}
                        onChange={(checked) => handleBlurChange(!!checked)}
                    />

                </div>
            </Modal>

            <ConfirmationModal
                isOpen={showConfirmModal}
                onCancel={() => setShowConfirmModal(false)}
                onDeactivate={deactivateMode}
            />

            <SuccessModal isOpen={showSuccessModal} />
        </>
    );
};

export default SettingsModal;