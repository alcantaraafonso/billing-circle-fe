import React from 'react'

import { Switch, Route, Redirect } from 'react-router'
//Usado no React-router antigo
// import { Router, Route, Redirect, IndexRoute, hashHistory } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import BillingCircle from '../billingCircle/billingCircle'
import App from '../main/app'
import AuthOrApp from '../main/authOrApp'

export default props => (
    <div className='content-wrapper'>
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='billingCircle' component={BillingCircle} />
            <Redirect from='*' to='/' />
        </Switch>
    </div>

)


{/* <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={Dashboard} />
            <Route path='billingCircle' component={BillingCircle} />
        </Route>
        <Redirect from='*' to='/' />
    </Router> */}