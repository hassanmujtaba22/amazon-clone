export const initialState = {
    basket: [
        // {
        //     id: 5,
        //     title: "The Resistance: Avalon Social Deduction GameDarksiders Genesis - Nephilim Edition - PC Nephilim Edition.",
        //     price: 6.55,
        //     rating: 4,
        //     imageLink: "https://m.media-amazon.com/images/I/517J1Mfca0L._AC_SY200_.jpg"
        // }
    ]
}

// console.log(action);
const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            }    
        default:
            return state
    }
}

export default reducer