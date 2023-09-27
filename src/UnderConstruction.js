import React from "react";

const UnderConstruction = ({title}) => {
    return (
        <div>
            <h1>{title}</h1>
            <div style={{display: 'flex', alignItems: 'center', height: '100vh', flexDirection: 'column'}}>
                <h1 style={{fontSize: '2em', color: '#7B1FA2'}}>Under Construction</h1>
                <p style={{fontSize: '1.2em', color: '#555'}}>This section is currently being developed. Please check
                    back later.</p>
            </div>
        </div>
    );
};

export default UnderConstruction;