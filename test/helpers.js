import chai from 'chai';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

global.expect = chai.expect;

const html = fs.readFileSync(path.resolve('index.html'), 'utf-8');
const dom = new JSDOM(html, { url: 'http://localhost' });

global.window = dom.window;
global.document = dom.window.document;

// Mock localStorage to prevent errors
global.localStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
  clear: () => {},
};
