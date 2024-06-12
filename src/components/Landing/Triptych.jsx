import React from 'react';
import triptik1 from "../../images/triptik1.png"
import triptik2 from "../../images/triptik2.png"
import triptik3 from "../../images/triptik3.png"

const images = [
    triptik1,
    triptik2,
    triptik3,
];

const Triptych = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center">
            {images.map((src, index) => (
                <div key={index} className="m-2">
                    <img src={src} alt={`Triptych ${index + 1}`} className="w-full h-auto object-cover" />
                </div>
            ))}
        </div>
    );
};

export default Triptych;
