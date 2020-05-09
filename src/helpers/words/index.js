import { getCookie } from '../constants';
import spanishWords from './spanishWords';
import englishWords from './englishWords';

//================================================

const language = getCookie('language');

let words = spanishWords; // Default

if (language === 'US') words = englishWords;

//================================================

export default words;
