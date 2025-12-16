export const easeOutExpo = [0.16, 1, 0.3, 1];

export const pageStagger = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.2,
        },
    },
};

export const fadeUp = {
    hidden: {
        opacity: 0,
        y: 40,
        filter: "blur(6px)",
    },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.8,
            ease: easeOutExpo,
        },
    },
};
