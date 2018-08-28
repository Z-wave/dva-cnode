import React from 'react';
import { connect } from 'dva';
import {Spin} from 'antd'
import Index from '../components/Index'
import {isBottom} from '../utils/utils'

class IndexPage extends React.Component{
    constructor(props){
        super(props)
        this.more = this.props.more
        this.timer = () => {}
    }

    getList(tab,page){
        this.props.dispatch({ 
            type: 'index/get', 
            payload: {tab,page} 
        });
    }
    
    componentDidMount(){
        this.getList()
        this.timer = setInterval(()=>{
            this.halderScroll()
        },1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }
    

    halderScroll(){
        let {tab,page,more } = this.props

        if(isBottom() && more){
            page++
            this.getList(tab,page)
            this.more = false
        }

    }

    render(){
        let { loading } = this.props
        console.log(this.props)
        return (
            <Spin tip="Loading..." spinning={loading}>
                <Index {...this.props} />
            </Spin>
        );
    }
}

function mapStateToProps(state) {
    let {data,tab,page,limit,more} = state.index

    return {
        data,
        tab,
        page,
        limit,
        more,
        loading:state.loading.global
    };
}

export default connect(mapStateToProps)(IndexPage);
