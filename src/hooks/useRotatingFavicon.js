import { useEffect } from 'react';

export const useRotatingFavicon = () => {
    useEffect(() => {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext('2d');
        const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        document.getElementsByTagName('head')[0].appendChild(link);

        let angle = 0;
        let animationFrameId;

        const draw = () => {
            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Save context state
            ctx.save();

            // Move to center to rotate
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate(angle * Math.PI / 180);

            // Draw background (circle)
            ctx.beginPath();
            ctx.arc(0, 0, 16, 0, 2 * Math.PI);
            ctx.fillStyle = '#1a1a1a'; // Dark background
            ctx.fill();

            // Draw text "29"
            ctx.fillStyle = '#00ff00'; // Neon green text
            ctx.font = 'bold 16px "Inter", sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('29', 0, 1); // Slight y-offset for visual centering

            // Restore context state
            ctx.restore();

            // Update favicon link
            link.href = canvas.toDataURL('image/x-icon');

            // Increment angle
            angle = (angle + 0.5) % 360; // Slower speed (0.5 degrees per frame)

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);
};
