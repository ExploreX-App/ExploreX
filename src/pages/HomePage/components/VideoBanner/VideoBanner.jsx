import React from 'react'
import './VideoBanner.Style.css'

export default function VideoBanner() {
    return (
        <div>
            <video loop autoPlay muted id="bg-video"> 
                <source src={require('./travel video.mov')} type='Video/mp4' />
            </video>
        </div>
    )
}