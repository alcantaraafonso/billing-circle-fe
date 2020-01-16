import axios from 'axios'

import { toastr } from 'react-redux-toastr'

//ActionCreator do Redux-Form
import { reset as resetForm, initialize } from 'redux-form'

import { showTabs, selectTab } from '../common/layout/tabs/tabActions'

import urls from '../common/config/urls'

const INITIAL_VALUES_FORM = {
    credit: [{}],
    debit: [{}]
}

export function getList() {
    const request = axios.get(`${urls.BASE_URL}/billingCircle`)
    return { type: 'BILLING_LIST_FETCHED', payload: request }    
}

/**
 * Action chamado via handleSubmit do Redux-form e foi mapeada na criação da instância do Form em billingCircle.jsx
 * @param {*} values 
 */
export function create(values) {
    return submit(values, 'post')
}

/**
 * Action chamado via handleSubmit do Redux-form e foi mapeada na criação da instância do Form em billingCircle.jsx
 * @param {*} values 
 */
export function update(values) {
    return submit(values, 'put')
    
}

/**
 * Action chamado via handleSubmit do Redux-form e foi mapeada na criação da instância do Form em billingCircle.jsx
 * @param {*} values 
 */
export function remove(values) {
    return submit(values, 'delete')
    
}

function submit(values, methodHttp) {
     //O redux thunk necessita que se retorne uma função
    return dispatch => {
        const id = values._id ? values._id : ''

        axios[methodHttp](`${urls.BASE_URL}/billingCircle/${id}`, values)
            .then(response => {
                toastr.success('Sucesso', 'Operação realizada com sucesso.')
                //originalmente o dispatch recebe uma action, mas como é usado o middleware multi,
                //é possível passar um array e chamar várias Actions
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(
                    error => toastr.error('Erro', error)
                )
            })

    }
}

/*
Chamado quando se clica no botão de edição da lista
*/
export function showUpdate(billingCircle) {
    //retornando um array de actions via middleware multi
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCircleForm', billingCircle)
    ]
}

/**
* Chamado quando se clica no botão de deleção da lista
* esta action inicializa o formulario, atraves da action initialize do Redux-Form, e a este é passado
* os valores do billingCircle que foi recuperado do backend e tá disponível na lista. 
*/
//TODO para refatorar o código para reaproveitar o método show update
export function showDelete(billingCircle) {
    //retornando um array de actions via middleware multi
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCircleForm', billingCircle)
    ]
}

/**
 * Usaddo pela action create após a execução d promise
 */
export function init() {
    return [
        // resetForm('billingCircleForm'),
        getList(),
        selectTab('tabList'),
        showTabs('tabList', 'tabCreate' ),
        initialize('billingCircleForm', INITIAL_VALUES_FORM)
    ]
}

//usada para adicionar crédito a um determinado lançamento
export function addCredit() {
    return { type: 'TEMP', payload: '' }    
}