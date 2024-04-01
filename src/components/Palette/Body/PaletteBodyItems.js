import React, { useState } from 'react';
import notify from "../../../data/src_notify.mp3"

export const PaletteBodyItems = ({ colors }) => {
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const [selectedColor, setSelectedColor] = useState('');
    const [clickSound] = useState(new Audio(notify));

    const copyToClipboard = (color) => {
        navigator.clipboard.writeText(color)
        .then(() => {
            setSelectedColor(color);
            setIsOverlayVisible(true);
            setTimeout(() => {
                setIsOverlayVisible(false);
            }, 1000);
            clickSound.play();
        })
        .catch((error) => {
            console.error('Error copying color to clipboard:', error);
        });
    };

    return (
        <div className="relative w-full h-full grid grid-cols-5">
            {colors.map((element) => (
                <button
                    key={element.id}
                    className="relative w-full h-full flex justify-end items-end flex-col p-3"
                    style={{ background: `${element.color}` }}
                    onClick={() => copyToClipboard(element.color)}
                >
                    <p className="text-lg text-white font-medium">{element.name[0].toUpperCase() + element.name.slice(1)}</p>
                </button>
            ))}
            {isOverlayVisible && (
                <div
                    className="fixed inset-0 flex flex-col justify-center items-center"
                    style={
                    {
                        background: `${selectedColor}`,
                    }
                }>
                    <div className="w-full h-1/3 flex justify-center items-center text-white text-8xl font-medium bg-white bg-opacity-50">
                        PAST ME!
                    </div>
                    <div className="w-full h-24 flex items-center text-white text-4xl justify-center">
                        {selectedColor}
                    </div>
                </div>
            )}
        </div>
    );
};