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
const genRandHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

const fullDeckData = {
  'ObjectStates': [
    {
      'Name': 'DeckCustom',
      'Transform': {
        'posX': 0,
        'posY': 0,
        'posZ': 0,
        'rotX': 0,
        'rotY': 180,
        'rotZ': 180,
        'scaleX': 1,
        'scaleY': 1,
        'scaleZ': 1,
      },
      'Nickname': 'DBCW Full Deck',
      'Description': 'Dragonball Card Warriors full deck',
      'LayoutGroupSortIndex': 0,
      'Value': 0,
      'Locked': false,
      'Grid': true,
      'Snap': true,
      'IgnoreFoW': false,
      'MeasureMovement': false,
      'DragSelectable': true,
      'Autoraise': true,
      'Sticky': true,
      'Tooltip': true,
      'GridProjection': false,
      'HideWhenFaceDown': true,
      'Hands': false,
      'SidewaysCard': false,
      'DeckIDs': [],
      'CustomDeck': {},
      'ContainedObjects': [],
    },
  ],
};

const cardList = CardData.cardList.sort((a, b) => a.id - b.id);

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

  let deckID = 1;
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

    fullDeckData.ObjectStates[0].DeckIDs.push(card.id);
    fullDeckData.ObjectStates[0].ContainedObjects.push({
      'GUID': genRandHex(6),
      'Name': 'Card',
      'Transform': {
        'posX': 0,
        'posY': 0,
        'posZ': 0,
        'rotX': 0,
        'rotY': 180,
        'rotZ': 180,
        'scaleX': 1,
        'scaleY': 1,
        'scaleZ': 1,
      },
      'Nickname': card.name,
      'Description': `${card.abilities ? `Abilities:\n${card.abilities.join(' - ')}\n\n` : ''}${card.effects ? `Effects:\n${card.effects.join('\n')}` : ''}`,
      'Locked': false,
      'Grid': true,
      'Snap': true,
      'IgnoreFoW': false,
      'MeasureMovement': false,
      'DragSelectable': true,
      'Autoraise': true,
      'Sticky': true,
      'Tooltip': true,
      'GridProjection': false,
      'Hands': true,
      'CardID': card.id,
      'SidewaysCard': false,
    });

    if (imageData.length >= 70 || (imagesGenerated + 1) >= totalImages) {
      fullDeckData.ObjectStates[0].CustomDeck[deckID] = {
        'FaceURL': `https://dragonball-card-warriors.github.io/tts/Deck_${deckID}.png`,
        'BackURL': 'https://dragonball-card-warriors.github.io/images/sleeves/0025.png',
        'NumWidth': 10,
        'NumHeight': 7,
        'BackIsHidden': false,
        'UniqueBack': false,
        'Type': 0,
      };
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

  info('Saving deck list...');

  await fs.writeFile('docs/tts/DBCW_FullDeck.json', JSON.stringify(fullDeckData, null, 2));

  success('Deck list saved!');

  info('Preparing to compress decks...');

  let imagesCompressed = 0;

  const comp = await compress_images({
    source: `docs/tts/*(${Object.keys(fullDeckData.ObjectStates[0].CustomDeck).map(c => `Deck_${c}`).join('|')}).png`,
    destination: 'docs/tts/',
    params: {
      compress_force: true,
      statistic: false,
      autoupdate: true,
    },
    enginesSetup: {
      png: {engine: 'pngquant', command: ['--quality=20-70', '--ext=.png', '--force']},
    },
    onProgress: (err) => err ? error(err) : progress(`Compressed ${++imagesCompressed}/${deckID} decks...`, imagesGenerated, totalImages),
  });

  success('Compressed decks successfully!');
};

generateImages();
