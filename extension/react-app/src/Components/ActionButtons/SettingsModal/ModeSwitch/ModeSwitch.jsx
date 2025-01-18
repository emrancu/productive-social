import React from 'react';
import { Switch } from 'antd';
import './ModeSwitch.css';

const ModeSwitch = ({ title, description, isActive, onChange }) => {
    return (
        <div className="feature-section">
            <div className="feature-content">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <Switch
                checked={isActive}
                onChange={onChange}
            />
        </div>
    );
};

export default ModeSwitch;