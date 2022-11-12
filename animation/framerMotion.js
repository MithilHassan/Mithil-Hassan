export const slideLeftTransition = {
  hidden: {
    x: 0,
  },
  visible: {
    x: "150%",
    transition: { duration: 1 },
  },
  exit: {
    x: 0,
    transition: { delay: 0.5, duration: 1, type: "tween" },
  },
};
export const slideRightTransition = {
  hidden: {
    x: 0,
  },
  visible: {
    x: "-150%",
    transition: { duration: 1 },
  },
  exit: {
    x: 0,
    transition: { delay: 0.5, duration: 1, type: "tween" },
  },
};
export const slideLeft = {
  hidden: {
    x: 0,
  },
  visible: {
    x: "150%",
    transition: { delay: 0.5, duration: 1 },
  },
  exit: {
    x: 0,
    transition: { duration: 1 },
  },
};
export const slideRight = {
  hidden: {
    x: 0,
  },
  visible: {
    x: "-150%",
    transition: { delay: 0.5, duration: 1 },
  },
  exit: {
    x: 0,
    transition: { duration: 1 },
  },
};
export const popIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, duration: 0.5, ease: "easeOut", type: "tween" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};
export const popOut = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 0,
    transition: { delay: 0.5, duration: 1.5, ease: "easeOut" },
  },
  exit: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};
export const slideUp = {
  hidden: {
    y: 200,
  },
  visible: {
    y: 0,
    transition: { duration: 1, type: "tween" },
  },
  exit: {
    y: 100,
    transition: { duration: 1 },
  },
};
export const slideDown = {
  hidden: {
    y: 0,
  },
  visible: {
    y: "100%",
    transition: { delay: 0.5, duration: 1.5 },
  },
  exit: {
    y: 0,
    transition: { duration: 1 },
  },
};
