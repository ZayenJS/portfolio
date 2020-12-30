export const pageTransition = {
  initial: {
    x: '-100vw',
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      x: { duration: 1 },
      opacity: { duration: 1.25 },
    },
  },
  exit: {
    x: '100vw',
    opacity: 0,
    transition: {
      x: { duration: 0.75 },
      opacity: { duration: 0.75 },
    },
  },
};
