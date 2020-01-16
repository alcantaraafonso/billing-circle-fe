import React from 'react'
import If from '../operators/if'

export default props => (
    <If test={!props.hide}>
        <div className="form-group has-feedback">
            <input {...props.input}
                className='form-control'
                placeholder={props.placeholder}
                type={props.type} />
            <span className={`glyphicon glyphicon-${props.icon} form-control-feedback`}></span>
        </div>
    </If>
)