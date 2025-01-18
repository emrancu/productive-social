// components/StatsGrid/StatsGrid.jsx
import React from 'react';
import { Row, Col } from 'antd';
import './StatsGrid.css';

const StatsGrid = () => {
    return (
        <div className="stats-section">
            <Row gutter={[16, 16]}>
                <Col span={12}>
                    <div className="stat-card">
                        <div className="stat-header">
                            <div className="stat-icon">Ad</div>
                            <span>Ads Blocked</span>
                        </div>
                        <div className="stat-value">247</div>
                    </div>
                </Col>
                <Col span={12}>
                    <div className="stat-card">
                        <div className="stat-header">
                            <div className="stat-icon">▶</div>
                            <span>Reels Hidden</span>
                        </div>
                        <div className="stat-value">183</div>
                    </div>
                </Col>
                <Col span={12}>
                    <div className="stat-card">
                        <div className="stat-header">
                            <div className="stat-icon">👍</div>
                            <span>Suggestions Blocked</span>
                        </div>
                        <div className="stat-value">156</div>
                    </div>
                </Col>
                <Col span={12}>
                    <div className="stat-card">
                        <div className="stat-header">
                            <div className="stat-icon">⏱</div>
                            <span>Active Time</span>
                        </div>
                        <div className="stat-value">32h</div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default StatsGrid;