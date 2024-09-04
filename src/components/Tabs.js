import React, { useState } from 'react';
import OneCardSpread from './oneCardSpread';
import ThreeCardSpread from './threeCardSpread.js';
import FiveCardSpread from './fiveCardSpread.js';

const TabsSetup = ({ title, isActive, onClick }) => {
    const activeStyle = {
        backgroundColor: '#f0f0f0',
        fontWeight: 'bold',
    };

    const notActiveStyle = {
        backgroundColor: '#e0e0e0',
        color: '#555',
    };

    return (
        <div
            onClick={onClick}
            style={{
                ...(isActive ? activeStyle : notActiveStyle),
            }}
        >
            {title}
        </div>
    );
};

export default function Tabs() {
    const [activeTab, setActiveTab] = useState('');

    const handleTabSelection = (tabTitle) => {
        setActiveTab(tabTitle);
    };

    return (
        <div>
            <div style={{ display: 'flex', borderBottom: '2px solid #ccc' }}>
                <TabsSetup
                    title="One Card Spread"
                    isActive={activeTab === 'OneCardSpread'}
                    onClick={() => handleTabSelection('OneCardSpread')}
                />
                <TabsSetup
                    title="Three Card Spread"
                    isActive={activeTab === 'ThreeCardSpread'}
                    onClick={() => handleTabSelection('ThreeCardSpread')}
                />
                <TabsSetup
                    title="Five Card Spread"
                    isActive={activeTab === 'FiveCardSpread'}
                    onClick={() => handleTabSelection('FiveCardSpread')}
                />
            </div>

            <div style={{ padding: '20px', marginTop: '10px', border: '1px solid #ccc'}}>
                {activeTab === 'OneCardSpread' && 
                    <OneCardSpread />
                }
                {activeTab === 'ThreeCardSpread' && 
                    <ThreeCardSpread />
                }
                {activeTab === 'FiveCardSpread' &&
                    <FiveCardSpread />
                }
            </div>
        </div>
    );
}