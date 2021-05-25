import React from 'react';

function Loading() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <lottie-player
                src="https://assets4.lottiefiles.com/private_files/lf30_kanwuonz.json"
                background="transparent"
                speed="1"
                style={{ width: '300px', height: '300px' }}
                loop
                autoplay
            ></lottie-player>
        </div>
    );
}

export default Loading;
