import React from 'react'
import {Row,Col} from 'antd'
import {formatDate} from '../utils/utils'


function List({data}){
    return(
        data.map(item => {
            let {id, title, author, visit_count, reply_count, create_at} = item
            return(
                <div key={id} className="box list">
                    <div className="pic" span={5}>
                        <img src={author.avatar_url} style={{width:'100%'}} alt=""/>
                    </div>
                    <div className="flex-1" span={18} offset={1}>
                        <p>{title}</p>
                        <Row>
                            <Col span={12}>
                                {reply_count}/{visit_count}分享
                            </Col>
                            <Col span={12} style={{textAlign:'right'}}>
                                {formatDate(create_at)}
                            </Col>
                        </Row>
                    </div>
                </div>
            )
        })
    )
    
}

export default List