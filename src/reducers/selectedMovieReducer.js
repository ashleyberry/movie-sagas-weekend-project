// Used to store the selected movie details
const selectedMovie = (state = [], action) => {
    if (action.type === 'SET_MOVIE') {
        return action.payload;
    }
    return state
}

export default selectedMovie;