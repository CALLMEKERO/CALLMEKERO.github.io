import React, { useEffect } from 'react';

function InvertMouse() {
    useEffect(() => {
        const circle = document.createElement('div');
        circle.style.position = 'fixed';
        circle.style.width = '40px'; // Smaller size
        circle.style.height = '40px'; // Smaller size
        circle.style.borderRadius = '50%';
        circle.style.border = '2px solid white';
        circle.style.pointerEvents = 'none';
        circle.style.mixBlendMode = 'difference';
        circle.style.backgroundColor = 'white';
        circle.style.zIndex = '1000';
        circle.style.transition = 'width 0.3s ease, height 0.3s ease';
        document.body.appendChild(circle);

        const moveCircle = (e) => {
            circle.style.left = `${e.clientX - 20}px`; // Adjusted for smaller size
            circle.style.top = `${e.clientY - 20}px`; // Adjusted for smaller size
        };

        const enlargeCircle = () => {
            circle.style.width = '60px'; // Smaller size when hovered
            circle.style.height = '60px'; // Smaller size when hovered
            document.body.style.cursor = 'none';
        };

        const shrinkCircle = () => {
            circle.style.width = '40px'; // Smaller size
            circle.style.height = '40px'; // Smaller size
            document.body.style.cursor = 'none';
        };

        window.addEventListener('mousemove', moveCircle);
        document.querySelectorAll('a, button').forEach((element) => {
            element.style.cursor = 'none';
            element.addEventListener('mouseenter', enlargeCircle);
            element.addEventListener('mouseleave', shrinkCircle);
        });

        return () => {
            window.removeEventListener('mousemove', moveCircle);
            document.querySelectorAll('a, button').forEach((element) => {
                element.removeEventListener('mouseenter', enlargeCircle);
                element.removeEventListener('mouseleave', shrinkCircle);
            });
            document.body.removeChild(circle);
        };
    }, []);

    return null;
}

export default InvertMouse;
