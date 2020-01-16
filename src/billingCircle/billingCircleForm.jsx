import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import labelAndInput from '../common/form/LabelAndInput'
import Button from '../common/elements/button'
import { init } from './billingCircleAction'
import Summary from './summary'
import CreditDebitList from './creditDebitList'


class BillingCircleForm extends Component {

    /**
     * Programação funcional: ter a referência de uma função na variável sum.
     * Esta função recebe como parâmetro o totalAtual e o valorAtual que está sendo passado
     * 
     * Ao final será feito um map/reduce nos valores de crédito e débito. O reduce recebe como parâmetro 
     * a referência da função SUM
     */
    calculateSummary() {
        
        const sum = (total, valorAtual) => total + valorAtual
        return {
            creditSum: this.props.credits.map(c => +c.value || 0).reduce(sum),
            debitSum: this.props.debits.map(d => +d.value || 0).reduce(sum)
        }
    }
    render() {
        //O handleSubmit tá mapeado no props graças ao reduxForm
        const { handleSubmit, readOnly, credits, debits, submitClass, submitLabel } = this.props
        const { creditSum, debitSum } = this.calculateSummary()
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={labelAndInput} 
                        label='Nome' cols='12 4' placeholder='Informe o nome' readOnly={readOnly}/>
                    <Field name='month' component={labelAndInput} 
                        label='Mês' cols='12 4' placeholder='Informe o Mês'
                        type='number' readOnly={readOnly}/>
                    <Field name='year' component={labelAndInput} 
                        label='Ano' cols='12 4' placeholder='Informe o ano'
                        type='number' readOnly={readOnly}/>

                    <Summary credit={creditSum} debit={debitSum}/>
  
                    {/**O valor do atributo field deve ser o que está no estado do redux-form
                    * o valor do atributo list deve ser o que foi mapeado pelo selector do redux-form */}
                    <CreditDebitList list={credits} readOnly={readOnly} label='Créditos' field='credit'/>
                    <CreditDebitList list={debits} readOnly={readOnly}  label='Débitos'  field='debit' showFieldStatus={true}/>

                </div>
                <div className='box-footer'>
                    <Button type='submit' buttonClass={submitClass} label={submitLabel} />
                    {/* <button type='submit' className='btn btn-primary'>Enviar</button> */}

                    <Button type='button' buttonClass='default' label='Cancelar' handleClick={this.props.init}/>
                    {/* <button type='button' className='btn btn-default'
                        onClick={this.props.init}>Cancelar</button> */}
                </div>
            </form>
        )
    }
}

//destroyOnUnmount: false é usando para que o formulário não seja destruído quando outro componente é renderizado
//a variavel BillingCircleForm vai receber uma instancia do objeto BillingCircleForm decorada do redux-form
BillingCircleForm = reduxForm({form: 'billingCircleForm', destroyOnUnmount: false })(BillingCircleForm)

/**
 * O formValueSelector pega a propriedade values do form (que tá no state)
 */
const selector = formValueSelector('billingCircleForm')

const mapStateToProps = state => ({
    credits: selector(state, 'credit'),
    debits: selector(state, 'debit')
    
})

const mapDispatchToProps = dispatch => bindActionCreators({
    init
},dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCircleForm)
