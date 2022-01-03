export { clickAway } from './events';

export const getSpeakerClasses = (volume: number, classes: any) => {
  let speakerClasses = classes.Speaker;

  if (volume >= 1 && volume <= 32) {
    speakerClasses = [speakerClasses, classes.Speaker__Low].join(' ');
  } else if (volume >= 33 && volume <= 64) {
    speakerClasses = [speakerClasses, classes.Speaker__Medium].join(' ');
  } else if (volume >= 65 && volume <= 100) {
    speakerClasses = [speakerClasses, classes.Speaker__High].join(' ');
  } else {
    speakerClasses = [speakerClasses, classes.Speaker__Mute].join(' ');
  }

  return speakerClasses;
};

export const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min + 1);

export const baseTitle = 'David Nogueira - Développeur web | Portfolio';
