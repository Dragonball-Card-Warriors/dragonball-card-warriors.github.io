import fs = require('fs');
import mergeImages = require('merge-images');
import { Canvas, Image } from 'canvas';
import * as CardData from './data/cards';
import { Context } from 'vm';

const cardID = 2005,
  cardRarity = 'SSR',
  cost = 1,
  symbol = 'yellow',
  attack = 1000,
  hp = 0;

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

const totalImages = CardData.cardList.length;
let imagesGenerated = 0;

console.info(`Preparing to generate ${totalImages} images...`);

CardData.cardList.forEach(card => {
  const imageData: Array<{
    src: string,
    top?: number,
    bottom?: number,
    left?: number,
    right?: number,
    width?: number,
    height?: number,
    custom?: (ctx: Context, image: any) => void,
  }> = [
    {
      src: 'src/images/frame/Background.png',
      custom: (ctx: Context, image: any) => {
        ctx.fillStyle = card.type == CardData.CardType.Event ? '#2C2B62' : '#000';
        ctx.fillRect(0, 0, image.width || image.img.width, image.height || image.img.height);
        ctx.globalCompositeOperation = 'destination-in';
      },
    },
    {
      src: `src/images/card/C_${card.id}.png`,
      top: 17,
      left: 17,
      width: 566,
      height: 966,
    },
    {
      src: `src/images/frame/${CardData.CardType[card.type]}_${CardData.Rarity[card.rarity]}.png`,
    },
    {
      src: `src/images/symbol/${CardData.IconType[card.icon] || 'None'}.png`,
      bottom: 52,
      left: 20,
      width: 170,
      height: 170,
    },
    {
      src: `src/images/cost/${card.energy_cost || 0}.png`,
      top: 80,
      left: card.energy_cost < 10 ? 95 : 70,
      width: card.energy_cost < 10 ? 50 : 100,
      height: 80,
      custom: (ctx, image) => {
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, image.width || image.img.width, image.height || image.img.height);
        ctx.globalCompositeOperation = 'destination-in';
      },
    },
  ];

  if (card.attack != undefined) {
    imageData.push(...getAttackImages(card.attack));
  }
  if (card.hit_points != undefined) {
    imageData.push(...getHPImages(card.hit_points));
  }

  mergeImages(imageData, {
    Canvas,
    Image,
  }).then(b64 => {
    const base64Image = b64.split(';base64,').pop();

    fs.writeFile(`docs/images/cards/${card.id}.png`, base64Image, {encoding: 'base64'}, (e) => e ? console.error('error', e) : null);
    console.info(`Generated ${++imagesGenerated}/${totalImages} images...`);
  });
});
