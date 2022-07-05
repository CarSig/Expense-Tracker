import React, { useState } from "react";
import { SliderPicker } from 'react-color'

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const defaultColor = getRandomColor();

const ColorPicker = () => {
    const [color, setColor] = useState(getRandomColor());
    return (
        <div className="color-picker">
            <SliderPicker color={color} onChangeComplete={(color) => { setColor(color.hex) }} />
            <br />
            <div style={{ backgroundColor: color, height: "60px", width: "60px" }}>

            </div>

        </div>
    )
}

export default ColorPicker