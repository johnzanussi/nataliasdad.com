import confetti, { type Options, type Origin } from 'canvas-confetti';

type ShowConfettiOptions = { ratio: number } & Options;

const shootConfetti = (
    emoji: string,
    origin: Origin,
    count = 200,
    scalar = 2
) => {

    const emojiShape = confetti.shapeFromText({
        text: emoji,
        scalar
    });

    const confettiSet: ShowConfettiOptions[] = [
        {
            ratio: 0.25,
            spread: 26,
            startVelocity: 55,
        },
        {
            ratio: 0.2,
            spread: 60,
        },
        {
            ratio: 0.35,
            spread: 100,
            decay: 0.91,
            shapes: [emojiShape],
            scalar: 3,
        },
        {
            ratio: 0.1,
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2,
        },
        {
            ratio: 0.1,
            spread: 120,
            startVelocity: 45,
        }
    ];

    requestAnimationFrame(() => {

        confettiSet.forEach(config => {

            const { ratio, ...opts } = config;

            confetti({
                origin,
                ...opts,
                particleCount: Math.floor(count * ratio)
            });

        });

    });

};

const getRelativeVisiblePosition = (element: HTMLElement) => {
    // Get the element's position relative to the viewport
    const rect = element.getBoundingClientRect();

    // Get the viewport dimensions (visible area only)
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Calculate the center point of the element
    const centerX = rect.left + (rect.width / 2);
    const centerY = rect.top + (rect.height / 2);

    // Convert to relative position (0 to 1) within the viewport
    const relativeX = centerX / viewportWidth;
    const relativeY = centerY / viewportHeight;

    return {
        x: relativeX,
        y: relativeY
    };
};

(function() {

    const $confettis = document.querySelectorAll('[data-confetti]') as NodeListOf<HTMLElement>;

    $confettis.forEach(($confetti) => {
        $confetti.addEventListener('click', () => {
            shootConfetti(
                $confetti.dataset.confetti || '🌈',
                getRelativeVisiblePosition($confetti),
            );
        });
    });

})();
