import useMediaQuery from '@material-ui/core/useMediaQuery';

// Values used across all the app

//================================================
//----> Numbers

export const MAX_IMAGE_SIZE = 5 * 1000000; // 5 MB in bytes
export const COOKIE_DURATION = 100 * 365 * 86400; // 100 years in seconds

//================================================
//----> Strings

export const APP_NAME = 'Mere-C';
export const ZOOM_BG_COLOR = 'rgba(0, 0, 0, 0.75)';
export const IMAGE_SIZE_ERROR = `No more than ${MAX_IMAGE_SIZE / 1000000} MB`;
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

export const STARTED_AS_MOBILE = window.screen.width < 600; // Doesnt change, material XS is < 600
export const IS_IOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
export const useIsMobile = () => useMediaQuery((theme) => theme.breakpoints.down('xs')); // Reacts to resizing

//================================================
//----> Functions

// headerActions - updateNotificationsBadge: "-1" is a negative number.
export const negativeNumberIn = (actionFileName, functionName, number) => {
	console.info(
		`${actionFileName} - ${functionName}:\n"${number}" is a negative number.`
	);
};
