import { expect } from 'chai';
global.expect = expect;

import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

// Load HTML file
const html = fs.readFileSync(path.resolve('index.html'), 'utf-8');

// Create a DOM environment
const dom = new JSDOM(html, { url: 'http://localhost' });

// Set global variables to simulate browser environment
global.window = dom.window;
global.document = dom.window.document;

// Mock localStorage if needed
global.localStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
  clear: () => {},
};
