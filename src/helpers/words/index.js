import { useSelector } from 'react-redux';

import spanishWords from './spanishWords';
import englishWords from './englishWords';

//================================================

const useWords = () => {
	const language = useSelector((state) => state.headerReducer.language);
	let words = spanishWords; // Default
	if (language === 'US') words = englishWords;
	return words;
};

//================================================

export default useWords;
