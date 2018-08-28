import React from 'react';
import { Tabs } from 'antd';
import List from './List'

const TabPane = Tabs.TabPane;

function Index({dispatch,data}){
    function callback(key){
        dispatch({ 
            type: 'index/get', 
            payload: {tab:key,page:1} 
        });
    }

    return (
        <Tabs defaultActiveKey="all" onChange={callback}>
            <TabPane tab="全部" key="all">
                <List data={data} />
            </TabPane>
            <TabPane tab="精华" key="good">
                <List data={data} />
            </TabPane>
            <TabPane tab="分享" key="share">
                <List data={data} />
            </TabPane>
            <TabPane tab="问答" key="ask">
                <List data={data} />
            </TabPane>
            <TabPane tab="招聘" key="job">
                <List data={data} />
            </TabPane>
        </Tabs>
    );
    
}

Index.propTypes = {
};

export default Index;
