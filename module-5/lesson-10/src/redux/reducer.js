const STATE = {
    loading: false,
    error: false,
    post: [],
    text: "redux js"
}

export const reducer = (state = STATE, action) => {

    switch (action.type) {
        case 'OPEN':
            return {
                ...state,
                loading: true
            }
        case 'EDIT_TEXT':
            return {
                ...state,
                text: 'VUEX.js'
            }
    }


    return state
}
