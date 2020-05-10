const initialState = 0

export default function reducer (state = initialState, action) {
    switch (action, type) {
        case 'BUY_ACORN': {
            return {count: state.count + 1}
        }
        case 'EAT_ACORN': {
            // ne menjen 0 ala:
            return {count: Math.max(state.count - 1, 0)}
        }
        default: {
            return state;
        }
    }
    
}