export const useOverflow = () => ({
  overflow: (overflow: 'hidden' | '') => (document.body.style.overflow = overflow),
});
