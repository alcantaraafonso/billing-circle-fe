import React from 'react'

import { Link } from 'react-router-dom'

/**
 * Para usar o componente Link deve-se passar a variável path sem #, se for usar o elemento <a> deve-se usar o 
 * path com #
 * 
 * ex: de Link
 * <Link to={props.path}> <i> </Link>
 */
export default props => (
    <li>
        <Link to={props.path}>
            <i className={`fa fa-${props.icon}`}></i> <span>{props.label}</span>
        </Link>
    </li>
)