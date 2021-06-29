import { promises as fs } from 'fs';
import mergeImages = require('merge-images');
import { Canvas, Image } from 'canvas';
import * as CardData from './data/cards';
import * as builtImages from './build-images.data.json';
import sharp = require('sharp');
import { compress as compress_images } from 'compress-images/promise';

import chalk = require('chalk');
const info = (...args) => console.info(chalk.bold.blue(...args));
const success = (...args) => console.info(chalk.bold.green(...args));
const error = (...args) => console.error(...args);
const progress = (msg, progress, total = 100) => {
  process.stdout.clearLine(1);
  process.stdout.cursorTo(0);
  process.stdout.write(chalk.gray(msg));
  if (progress >= total) {
    console.log();
  }
};

const cardList = CardData.cardList.sort((a, b) => a.energy_cost - b.energy_cost).sort((a, b) => parseInt(a.type, 36) - parseInt(b.type, 36));

const generateImages = async () => {
  const totalImages = cardList.length;
  let imagesGenerated = 0;

  info(`Preparing to generate ${totalImages} cards into decks...`);

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
    {
      src: 'docs/tts/blank_deck.png',
      left: 0,
      top: 0,
      width: 4050,
      height: 4095,
    },
  ];

  let deckID = 0;
  let x = 0;
  let y = 0;

  for (const card of cardList) {

    // Cost
    imageData.push(
      {
        src: `docs/images/cards/${card.id}.png`,
        left: x * 405,
        top: y * 585,
        width: 405,
        height: 585,
      }
    );

    x = x >= 9 ? 0 : x + 1;
    y = x > 0 ? y : y + 1;

    if (imageData.length >= 70 || (imagesGenerated + 1) >= totalImages) {
      imageData.push(
        {
          src: 'docs/images/sleeves/0000.png',
          left: 9 * 405,
          top: 6 * 585,
          width: 405,
          height: 585,
        }
      );

      const b64 = await mergeImages(imageData, {
        Canvas,
        Image,
      });

      await fs.writeFile(`docs/tts/Deck_${deckID}.png`, b64.split(';base64,').pop(), {encoding: 'base64'});

      imageData.splice(0,80);
      imageData.push(
        {
          src: 'docs/tts/blank_deck.png',
          left: 0,
          top: 0,
          width: 4050,
          height: 4095,
        }
      );
      deckID++;
      x = 0;
      y = 0;
    }

    progress(`Generated ${++imagesGenerated}/${totalImages} images...`, imagesGenerated, totalImages);
  }

  success('Deck images generated successfully!');

  // info('Preparing to compress decks...');

  // imagesGenerated = 0;
  // const comp = await compress_images({
  //   source: `docs/images/cards/*(${cardList.map(c => c.id).join('|')})_thumb.png`,
  //   destination: 'docs/images/cards/',
  //   params: {
  //     compress_force: true,
  //     statistic: false,
  //     autoupdate: true,
  //   },
  //   enginesSetup: {
  //     png: {engine: 'pngquant', command: ['--quality=20-70', '--ext=.png', '--force']},
  //   },
  //   onProgress: (err) => err ? error(err) : progress(`Compressed ${++imagesGenerated}/${totalImages} images...`, imagesGenerated, totalImages),
  // });

  // success('Compressed decks successfully!');
};

generateImages();
