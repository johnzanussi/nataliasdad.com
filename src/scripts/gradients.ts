export const gradients: Record<string, string> = {
    'blue': 'bg-gradient-to-b from-cyan-700 to-indigo-700',
    'purple': 'bg-gradient-to-b from-purple-500 to-purple-900',
    'orange': 'bg-gradient-to-b from-orange-700 to-yellow-600',
    'red': 'bg-gradient-to-b from-rose-600 to-orange-600',
    'yellow': 'bg-gradient-to-b from-yellow-400 to-amber-800',
    'bluegreen': 'bg-gradient-to-l from-blue-500 via-teal-500 to-green-500',
    'green': 'bg-gradient-to-tl from-green-600 via-emerald-400 to-emerald-700',
    'pink': 'bg-gradient-to-tl from-pink-400 to-rose-600',
};

const gradientClasses = Object.values(gradients);

export const randomGradient = () => {
    const random = Math.floor(Math.random() * gradientClasses.length);
    return gradientClasses[random];
};
