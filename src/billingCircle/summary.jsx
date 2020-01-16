import React from 'react'

import Grid from '../common/layout/grid'
import Row from '../common/layout/row'
import ValueBox from '../common/layout/valueBox'

export default props => (
    <Grid cols='12'>
        <fieldset>
            <legend>Resumo</legend>
            <Row>
                <ValueBox cols='12 4' color='green' value='10' texto='Total de créditos' icon='bank' 
                    value={`R$ ${props.credit}`}/>
                <ValueBox cols='12 4' color='red' value='10' texto='Total de Débitos' icon='credit-card' 
                    value={`R$ ${props.debit}`}/>
                <ValueBox cols='12 4' color='blue' value='00' texto='Valor Consolidado' icon='money' 
                    value={`R$ ${props.credit - props.debit}`}/>
            </Row>
        </fieldset>
    </Grid>
)