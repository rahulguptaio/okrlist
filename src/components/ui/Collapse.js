import React, { useState } from 'react';
import './Collapse.css';
import Expand from '../../assets/expand.svg';

const Collapse = ({ component, children }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <>
            <div className="collapse-heading">
                <button
                    className="collapse-button"
                    onClick={() => setIsCollapsed((previousValue) => { return !previousValue })}
                >
                    <img className={isCollapsed ? 'show' : 'hide'} src={Expand} alt="expand" />
                </button>
                <div className="collapse-title">{component}</div>
            </div>
            <div
                className={`collapse-content ${isCollapsed ? 'collapsed' : 'expanded'} collapse-item`}
                aria-expanded={isCollapsed}
            >
                {children}
            </div>
        </>
    );
};

export default Collapse;