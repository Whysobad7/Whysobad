const defaultState = {
	darkTheme: localStorage.getItem('darkTheme') === 'true' ? true : false,
};

const CHANGE_THEME = 'CHANGE_THEME';

export const themeReducer = (state = defaultState, action) => {
	switch (action.type) {
		case CHANGE_THEME:
			const newDarkTheme = !state.darkTheme;
			localStorage.setItem('darkTheme', newDarkTheme);
			return { ...state, darkTheme: newDarkTheme };
		default:
			return state
	}
}

export const changeTheme = () => ({
	type: CHANGE_THEME,
})