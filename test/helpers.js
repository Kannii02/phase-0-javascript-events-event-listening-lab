import chai from 'chai';
global.expect = chai.expect;
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create a JSDOM instance
const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8');
const dom = new JSDOM(html, {
  url: 'http://localhost', // Set a valid URL for localStorage
});

// Set up global variables to emulate the browser environment
global.window = dom.window;
global.document = dom.window.document;

// Mock localStorage
global.localStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
  clear: () => {},
};
