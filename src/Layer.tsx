import React, { FC, CSSProperties } from 'react'

const wrapeprStyles: CSSProperties = {
    display: 'flex', 
    justifyContent: 'center',
    width: '100%', 
    height: '100%',
    position: 'absolute',
    zIndex: 16777270, 
    top: 0, 
    left: 0, 
    background: 'rgba(0,0,0,0.35)'
}

const iframeStyles: CSSProperties = {
    width: '450px', 
    height: '100%', 
    zIndex: 16777271, 
    background: '#fff'
}

const Layer: FC = () => (
    <div id='layer_cpay' style={ wrapeprStyles }>

        <iframe 
            id='cpay_ifr' 
            name='cpay_ifr' 
            frameBorder='0' 
            scrolling='auto' 
            style={ iframeStyles } 
        />

    </div>
)

export default Layer