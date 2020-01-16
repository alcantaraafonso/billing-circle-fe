import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, arrayInsert, arrayRemove } from 'redux-form'

import Grid from '../common/layout/grid'
import IconButton from '../common/elements/IconButton'
import Input from '../common/form/input'
import If from '../common/operators/if'

class CreditDebitList extends Component {
    
    add(index, item ={}){
        if(!this.props.readOnly) {
            this.props.arrayInsert('billingCircleForm', this.props.field, index, item)
        }
    }
    
    remove(index){
        if(!this.props.readOnly && this.props.list.length > 1) {
            this.props.arrayRemove('billingCircleForm', this.props.field, index)
        }
    }
    
    renderRows() {
        const list = this.props.list || []
        const { showFieldStatus, field, readOnly} = this.props

        //Retornando um callback com os itens e o indexes
        return list.map((item, index) => (
            <tr key={index}>
                <td><Field name={`${field}[${index}].name`} component={Input} 
                    placeholder='Informe o nome' readOnly={readOnly} /></td>
                <td><Field name={`${field}[${index}].value`} component={Input} 
                    placeholder='Informe o valor' readOnly={readOnly} /></td>
                <If test={showFieldStatus}>
                    <td><Field name={`${field}[${index}].status`} component={Input} 
                        placeholder='Informe o status' readOnly={readOnly} /></td>
                </If>
                <td>
                    <IconButton buttonClass='success' iconClass='plus' handleClick={() => this.add(index + 1)}/>
                    <IconButton buttonClass='warning' iconClass='clone' handleClick={() => this.add(index + 1, item)} />
                    <IconButton buttonClass='danger' iconClass='trash-o' handleClick={() => this.remove(index)} />
                </td>
            </tr>
        ))
    }

    render() {
        const { showFieldStatus, label } = this.props
        return (
            <Grid cols='12 6'>
                <fieldset>
                    <legend>{label}</legend>
                </fieldset>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                            <If test={showFieldStatus}>
                                <th>Status</th>
                            </If>                            
                            <th className='table-actions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </Grid>
        )
    }
}

// const mapStateToProps = state => ({
//     billingCircle: state.billingCircle
// })

const mapDispatchToProps = dispatch => bindActionCreators({
    arrayInsert,
    arrayRemove
}, dispatch)

export default connect(null, mapDispatchToProps)(CreditDebitList)

