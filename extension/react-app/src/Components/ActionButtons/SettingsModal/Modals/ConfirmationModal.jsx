// components/Modals/ConfirmationModal.jsx
import React from 'react';
import { Modal } from 'antd';
import { WarningFilled } from '@ant-design/icons';

const ConfirmationModal = ({ isOpen, onCancel, onDeactivate }) => (
    <Modal
        open={isOpen}
        onCancel={onCancel}
        footer={null}
        width={400}
        className="confirmation-modal"
        maskClosable={true}
    >
        <div className="confirm-content">
            <WarningFilled className="warning-icon" />
            <h3>Deactivate Productive Mode?</h3>
            <p>This will restore all distracting elements on Facebook.</p>
            <div className="confirm-buttons">
                <button className="cancel-btn" onClick={onCancel}>
                    Cancel
                </button>
                <button className="deactivate-btn" onClick={onDeactivate}>
                    Deactivate
                </button>
            </div>
        </div>
    </Modal>
);

export default ConfirmationModal;