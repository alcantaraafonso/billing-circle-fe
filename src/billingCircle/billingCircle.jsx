import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/layout/tabs/tabs'
import TabsHeader from '../common/layout/tabs/tabsHeader'
import TabsContent from '../common/layout/tabs/tabsContent'
import TabHeader from '../common/layout/tabs/tabHeader'
import TabContent from '../common/layout/tabs/tabContent'
import List from './billingCircleList'
import Form from './billingCircleForm'
import { create, update, remove, init } from './billingCircleAction'


class BillingCircle extends Component {

    componentWillMount() {
        this.props.init()
        
    }

    render() {
        return (
            <div>
                <ContentHeader title='Ciclo de pagamentos' subtitle='Cadastro'/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList'/>
                            <TabHeader label='Incluir' icon='plus' target='tabCreate'/>
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate'/>
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete'/>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent target='tabList'>
                                <List />
                            </TabContent>
                            <TabContent target='tabCreate'>
                                {/* No onSubmit passa-se a action que o redux-form a atrela ao handleSubmit e faz a chamada */}
                                <Form onSubmit={this.props.create} 
                                    submitClass='primary'
                                    submitLabel='Incluir'/>
                            </TabContent>
                            <TabContent target='tabUpdate'>
                                <Form onSubmit={this.props.update} 
                                    submitClass='info'
                                    submitLabel='Alterar'/>
                            </TabContent>
                            <TabContent target='tabDelete'>
                                <Form onSubmit={this.props.remove} readOnly={true}
                                    submitClass='danger'
                                    submitLabel='Excluir'/>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }

}


const mapDispatchToProps = dispatch =>bindActionCreators({
    init,
    create,
    update,
    remove
}, dispatch)

export default connect(null, mapDispatchToProps)(BillingCircle)