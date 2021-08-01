import optionsStorage from './options-storage.js';
import browser from 'webextension-polyfill';

optionsStorage.syncForm('#options-form');

browser.runtime.sendMessage({ popupOpen: true });
