// brave entry for @asl666: a candle in a two-hundred-winter window.
// The text is assembled from a small map of images, in reading order.
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const images = new Map<string, string>([
  ['house', 'A candle in the window of a house that has stood two hundred winters.'],
  ['wind', 'The wind worries the glass, and gives up.'],
  ['flame', 'What is lit in you is older than the weather.'],
]);

const order = ['house', 'wind', 'flame'];
const text = order.map((k) => images.get(k)).join(' ');

const total = [...text].length;
if (total < 1 || total > 280) throw new Error(`entry of ${total} chars out of bounds`);
if (text.trim().length === 0) throw new Error('empty');

mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, 'entry.txt'), text, 'utf8');
