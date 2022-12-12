import React, { useEffect, useState } from 'react'
import '../styles/slider.css'

function Slider(props) {

    const [position, setPosition] = useState(0)
    const [marginLeft, setMarginLeft] = useState(0)

    useEffect(() => {
        const thumbWidth=20
        const centerThumb = (thumbWidth/100) * props.percentage * - 1
        setPosition(props.percentage)
        setMarginLeft(centerThumb)
    }, [props.percentage])

    
  return (
    <div className='slider-container'>
        <div className="progress-bar-cover" style={{width: `${position}%`}}></div>
        <div className="thumb" style={{left: `${position}%`, marginLeft: `${marginLeft}px`}}></div>
        <input type="range" value={position} step={0.01} className='range' onChange={props.onChange} />
    </div>
  )
}

export default Slider