const INITIAL_STATE = {
    summary: {
        credits: 0,
        debits: 0
    }
}

export default function(state = INITIAL_STATE, action){
    switch (action.type) {
        case 'GET_SUMMARY':
            return { ...state, summary: {
                credits: action.payload.data.creditsSum,
                debits: action.payload.data.debitsSum
            }}
        default: {    
            return state
        }  
    }
}