import optionsStorage from './options-storage.js';
import browser from 'webextension-polyfill';

browser.runtime.onMessage.addListener(async (message, sender) => {
	if (message.popupOpen) {
		const [tab] = await browser.tabs.query({ active: true });
		const { api } = await optionsStorage.getAll();
		const url = `${api}/api/bookmark?url=${tab.url}`;
		console.log('URL', url);
		fetch(url).then(console.log).catch(console.error);
	}
});
