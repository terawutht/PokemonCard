
const Card = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CARD':
            return [...state, action.data]
        case 'REMOVE_CARD':
            return state.filter((val, index) => val.id != action.id);
        default:
            return state
    }
}


export default Card