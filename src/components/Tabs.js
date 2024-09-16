import React, { useState } from 'react';
import OneCardSpread from './oneCardSpread';
import ThreeCardSpread from './threeCardSpread.js';
import FiveCardSpread from './fiveCardSpread.js';

const TabsSetup = ({ title, isActive, onClick }) => {
    const activeStyle = {
        backgroundColor: '#f0f0f0',
        fontWeight: 'bold',
        marginRight: '10px',
        marginLeft: '10px'
    };

    const notActiveStyle = {
        backgroundColor: '#e0e0e0',
        color: '#555',
        marginRight: '10px',
        marginLeft: '10px'
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
            <div className="flex justify-center m-auto" style={{ display: 'flex' }}>
                <button>
                    <TabsSetup
                        title="One Card Spread"
                        isActive={activeTab === 'OneCardSpread'}
                        onClick={() => handleTabSelection('OneCardSpread')}
                    />
                </button>
                <button>
                    <TabsSetup
                        title="Three Card Spread"
                        isActive={activeTab === 'ThreeCardSpread'}
                        onClick={() => handleTabSelection('ThreeCardSpread')}
                    />
                </button>
                <button>
                    <TabsSetup
                        title="Five Card Spread"
                        isActive={activeTab === 'FiveCardSpread'}
                        onClick={() => handleTabSelection('FiveCardSpread')}
                    />
                </button>
            </div>

            <div className="flex justify-center" style={{ padding: '20px', marginTop: '10px', paddingBottom: '50px', marginBottom: '50px', backgroundColor: '#333' }}>
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