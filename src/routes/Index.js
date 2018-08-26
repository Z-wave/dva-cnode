import React from 'react';
import { connect } from 'dva';
import Index from '../components/Index'

class IndexPage extends React.Component{
    constructor(props){
        super(props)
    }
    getList(){
        this.props.dispatch({ 
            type: 'index/get', 
            payload: {tab:'all',page:1,limit:10} 
        });
    }
    componentDidMount(){
        this.getList()
    }

    render(){
        console.log(this.props)
        return (
            <Index dispatch={this.props.dispatch} data={this.props.data} />
        );
    }
}

function mapStateToProps(state) {
    let {data,tab,page,limit} = state.index

    return {
        data,
        tab,
        page,
        limit
    };
}

export default connect(mapStateToProps)(IndexPage);
