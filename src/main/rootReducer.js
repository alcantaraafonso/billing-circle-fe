import {combineReducers } from 'redux';

//criando um alias
import { reducer as formReducer} from 'redux-form'
import { reducer as toastrReducer} from 'react-redux-toastr'

import dashboardReducer from '../dashboard/dashboardReducer'
import tabReducer from '../common/layout/tabs/tabReducer'
import billingCircleReducer from '../billingCircle/billingCircleReducer'
import authReducer from '../auth/authReducer'


const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    // billingCircle: () => ({
    //     billingCircle: {
    //     credit: 0,
    //     debit: 0
    // }}),
    billingCircle: billingCircleReducer,
    tab: tabReducer,
    form: formReducer,
    toastr: toastrReducer,
    auth: authReducer
})

export default rootReducer