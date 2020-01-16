import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'
import Row from '../common/layout/row'
import ValueBox from '../common/layout/valueBox'
import { getSummary } from './dashBoardAction'



class Dashboard extends Component {

    componentWillMount() {
        //Gerando a chamada pra a Action
        this.props.getSummary()
    }

    render() {
        const { credits, debits } = this.props.summary
        return (
            <div>
                <ContentHeader title='Dashboard' subtitle='Versão 1.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' value={`R$ ${credits}`} texto='Total de Créditos' icon='bank' />
                        <ValueBox cols='12 4' color='red' value={`R$ ${debits}`} texto='Total de Débitos' icon='credit-card' />
                        <ValueBox cols='12 4' color='blue' value={`R$ ${credits - debits}`} texto='Valor consolidado' icon='money' />
                    </Row>
                </Content>
            </div>
        )
    }

}

/**
 * Recebe o ESTADO atualizado
 * @param {*} state 
 */
const mapStateToProps = state => ({
    summary: state.dashboard.summary
})

/**
 * Dispatchs para os reduceres, ou seja, recebe o resultado da Action
 * @param {*} dispatch 
 */
const mapDispatchToPros = dispatch => bindActionCreators({
    getSummary

}, dispatch)
export default connect(mapStateToProps, mapDispatchToPros)(Dashboard)