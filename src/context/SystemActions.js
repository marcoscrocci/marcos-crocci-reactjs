export const actions = {
    changingLanguage(state, action) {
        return {
            ...state,
            errorChangingLanguage: false,
            isChangingLanguage: true
        }
    },
    languageNotChaged(state, action) {
        return {
            ...state,
            errorChangingLanguage: true,
            isChangingLanguage: false
        }
    },
    languageChaged(state, action) {
        const languageSentences = action.payload;
        return {
            ...state,
            languageSentences,
            errorChangingLanguage: false,
            isChangingLanguage: false
        }
    }
}

export const changeLanguage = (dispatch, language) => {
    
}