import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getList, showUpdate, showDelete } from './billingCircleAction'

import IconButton from '../common/elements/IconButton'

class BillingCircleList extends Component {
    componentWillMount() {
        this.props.getList()
        
    }

    renderRows() {
        const list = this.props.list || []

        return list.map(bc => (
           <tr key={bc._id}>
               <td>{ bc.name }</td>
               <td>{ bc.month }</td>
               <td>{ bc.year }</td>
               <td>
                    <IconButton buttonClass='warning' iconClass='pencil'
                        handleClick={() => this.props.showUpdate(bc)} />
                    {/* <button className='btn btn-warning'
                        onClick={() => this.props.showUpdate(bc)}>
                            <i className='fa fa-pencil'></i>
                    </button> */}
                    <IconButton buttonClass='danger' iconClass='trash-o'
                        handleClick={() => this.props.showDelete(bc)} />
                    {/* <button className='btn btn-danger'
                        onClick={() => this.props.showDelete(bc)}>
                            <i className='fa fa-trash-o'></i>
                    </button> */}
               </td>
           </tr> 
        ))

    }

    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th className='table-actions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
    
}


const mapStateToProps = state => ({
    list: state.billingCircle.list
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getList,
    showUpdate,
    showDelete
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCircleList)