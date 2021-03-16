import fs = require('fs');
import mergeImages = require('merge-images');
import { Canvas, Image } from 'canvas';
import * as CardData from './data/cards';
import * as builtImages from './build-images.data.json';

enum Rarities {
  N = 1,
  R,
  SR,
  SSR,
}

const keysToCheck = [
  'id',
  'type',
  'rarity',
  'icon',
  'energy_cost',
  'attack',
  'hit_points',
];

function getAttackImages(stat = 1000) {
  const stats = stat.toString().split('').reverse();
  const right = 145;

  return stats.map((num, i) => {
    return {
      src: `src/images/attack/${num}.png`,
      bottom: 145,
      right: right + (i * 46),
      width: 46,
      height: 88,
    };
  });
}

function getHPImages(stat = 1000) {
  const stats = stat.toString().split('').reverse();
  const right = 145;

  return stats.map((num, i) => {
    return {
      src: `src/images/hp/${num}.png`,
      bottom: 48,
      right: right + (i * 46),
      width: 46,
      height: 88,
    };
  });
}

console.info('Checking if any images need updating...');

const cardList = CardData.cardList.filter(card => {
  for (const key of keysToCheck) {
    const c = builtImages.find(c => c.id == card.id);
    if (!c || card[key] != c[key]) {
      // need to regenerate image, as key doesn't match
      return true;
    }
  }
  return false;
});

const generateImages = async () => {
  const totalImages = cardList.length;
  let imagesGenerated = 0;

  console.info(`Preparing to generate ${totalImages} images...`);

  for (const card of cardList) {
    const imageData: Array<{
      src: string,
      top?: number,
      bottom?: number,
      left?: number,
      right?: number,
      width?: number,
      height?: number,
      custom?: (ctx: CanvasRenderingContext2D, image: any) => void,
    }> = [
      // Backdrop
      {
        src: 'docs/generator/images/Black.png',
        top: 4,
        left: 4,
        width: 620,
        height: 996,
        custom: (ctx: CanvasRenderingContext2D, image: any) => {
          ctx.fillStyle = card.type == CardData.CardType.Event ? '#2C2B62' : '#000';
          ctx.fillRect(0, 0, image.width || image.img.width, image.height || image.img.height);
          ctx.globalCompositeOperation = 'destination-in';
        },
      },
      // Main Image
      {
        src: `src/images/card/C_${card.id}.png`,
        top: 17,
        left: 17,
        width: 566,
        height: 966,
      },
      // Symbol
      {
        src: `docs/generator/images/symbol/${CardData.IconType[card.icon].toLowerCase() || 'none'}.png`,
        bottom: 52,
        left: 20,
        width: 170,
        height: 170,
      },
      // Cost
      {
        src: `docs/generator/images/cost/${card.type != CardData.CardType.Special ? 'standard' : 'special'}.png`,
        left: 2,
        top: -4,
        width: 241,
        height: 250,
      },
      {
        src: `docs/generator/images/cost/${card.energy_cost || 0}.png`,
        top: 78,
        left: card.energy_cost < 10 ? 96 : 70,
        width: card.energy_cost < 10 ? 50 : 100,
        height: 80,
        custom: (ctx, image) => {
          ctx.fillStyle = '#000';
          ctx.fillRect(0, 0, image.width || image.img.width, image.height || image.img.height);
          ctx.globalCompositeOperation = 'destination-in';
        },
      },
      {
        src: `docs/generator/images/cost/${card.type != CardData.CardType.Special ? 'standard' : 'special'}_gloss.png`,
        left: 2,
        top: -4,
        width: 241,
        height: 250,
      },
    ];

    // Card stats
    if (card.attack != undefined || card.hit_points != undefined) {
      imageData.push({
        src: 'docs/generator/images/Stats.png',
        left: 184,
        top: 754,
      });
      if (card.attack != undefined) {
        imageData.push(...getAttackImages(card.attack));
      }
      if (card.hit_points != undefined) {
        imageData.push(...getHPImages(card.hit_points));
      }
    }

    // Frame/Rarity (must be last)
    imageData.push({
      src: `docs/generator/images/frame/${Rarities[card.rarity]}.png`,
    });

    const b64 = await mergeImages(imageData, {
      Canvas,
      Image,
    });

    const base64Image = b64.split(';base64,').pop();

    fs.writeFile(`docs/images/cards/${card.id}.png`, base64Image, {encoding: 'base64'}, (e) => e ? console.error('error', e) : null);
    console.info(`Generated ${++imagesGenerated}/${totalImages} images...`);
  }

  console.info('Images generated successfully!');

  console.info('Saving card list...');

  fs.writeFile('src/build-images.data.json', JSON.stringify(CardData.cardList.map(card => {
    const data = {};
    for (const key of keysToCheck) {
      data[key] = card[key];
    }
    return data;
  })), (e) => e ? console.error('error', e) : null);

  console.info('Card list saved!');
};

if (cardList.length) {
  generateImages();
} else {
  console.info('All card images up to date!');
}
