// Used to store the selected movie genre
const selectedGenre = (state = [], action) => {
    if (action.type === 'SET_GENRE') {
        return action.payload;
    }
    return state
}

export default selectedGenre;