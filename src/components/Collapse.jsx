import React, { useState } from 'react';
import vector from '../assets/Vector.png';
import vectorDown from '../assets/VectorDown.png';
import '../styles/Collapse.css';

function Collapse(props) {
    const [isOpen, setIsOpen] = useState(false);

    const collapseOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse">
            <h2 className="collapse-title">
                {props.title}
                <button onClick={collapseOpen}>
                    {isOpen ? (
                        <img src={vector} alt="Open" className="vector" />
                    ) : (
                        <img
                            src={vectorDown}
                            alt="Close"
                            className="vectorDown"
                        />
                    )}
                </button>
            </h2>
            {isOpen && <div className="collapseOpen">{props.content}</div>}
        </div>
    );
}

export default Collapse;
