import OptionsSync from 'webext-options-sync';

export default new OptionsSync({
	defaults: {
		api: 'http://localhost:3000',
	},
	migrations: [
		OptionsSync.migrations.removeUnused
	],
	logging: true
});
