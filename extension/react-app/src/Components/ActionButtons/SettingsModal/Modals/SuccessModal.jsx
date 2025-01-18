// components/Modals/SuccessModal.jsx
import React from 'react';
import { Modal } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';

const SuccessModal = ({ isOpen }) => (
    <Modal
        open={isOpen}
        footer={null}
        closable={false}
        width={400}
        className="success-modal"
        maskClosable={false}
    >
        <div className="success-content">
            <CheckCircleFilled className="success-icon" />
            <h3>Productive Mode Activated</h3>
            <p>Enjoy a distraction-free Facebook experience!</p>
        </div>
    </Modal>
);

export default SuccessModal;