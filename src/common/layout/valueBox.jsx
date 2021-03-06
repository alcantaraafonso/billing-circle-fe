import React from 'react'

import Grid from './grid'

export default props => (
    <Grid cols={props.cols}>
        <div className={`small-box bg-${props.color}`}>
            <div className='inner'>
                <h3>{props.value}</h3>
                <p>{props.texto}</p>
            </div>
            <div className='icon'>
                <i className={`fa fa-${props.icon}`}></i>
            </div>
        </div>
    </Grid>
)