import useMediaQuery from '@material-ui/core/useMediaQuery';

// Values used across all the app

//================================================
//----> Numbers

export const COOKIE_DURATION = 100 * 365 * 86400; // 100 years in seconds

//================================================
//----> Strings

export const APP_NAME = 'Mere-C';
export const DEFAULT_ERROR_MESSAGE = 'App not loading. Please try again in few minutes.';

export const PATHS = {
	home: '/',
	users: '/users',
	groups: '/groups',
	history: '/history',
	rewards: '/rewards',
	requests: '/requests',
	schedules: '/schedules',
	permissions: '/permissions'
};

//================================================
//----> Booleans

export const IS_IOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
export const useIsMobile = () => useMediaQuery((theme) => theme.breakpoints.down('md'));

//================================================
//----> Functions

// headerActions - updateNotificationsBadge: "-1" is a negative number.
export const negativeNumberIn = (actionFileName, functionName, number) => {
	console.info(
		`${actionFileName} - ${functionName}:\n"${number}" is a negative number.`
	);
};

// Finds and returns the wanted cookie from the cookies string
export const getCookie = (wantedCookie) => {
	// ['name=value', 'cookieName=cookieValue']
	const allCookies = document.cookie.split('; ');

	for (const cookie of allCookies) {
		// name = cookieName ; value = cookieValue
		const [name, value] = cookie.split('=');
		// Breaks by returning the value
		if (name === wantedCookie) return value;
	}
	return null; // If cookie isnt there
};
