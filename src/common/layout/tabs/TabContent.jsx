import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

import If from '../../operators/if'

class TabContent extends Component {
    render(){
        const selected = this.props.tab.selected === this.props.target
        const visible = this.props.tab.visible[this.props.target]
        return (
            <If test={visible}>
                <div id={this.props.target}
                    className={`tab-pane ${selected ? 'active': '' }`}>
                    {this.props.children}
                </div>
            </If>
        )
    }
}

const mapStateToMaps = state => ({
    tab: state.tab
})

// const mapDispatchToProps = dispatch => bindActionCreators({
//     selectTab
// }, dispatch)

export default connect(mapStateToMaps)(TabContent)