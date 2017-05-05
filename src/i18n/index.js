const localization = window.localStorage && window.localStorage.getItem('localization');
const lang = require(`./${localization || 'zh'}.json`);

export default lang;