import request from '../utils/request';

export default {
    namespace: 'index',
    state: {
        data:[],
        tab:'all',
        page:1,
        limit:10
    },
    reducers: {
        getList(state, action) {
            let {data,tab,page,limit} = action.payload
            return {...state,data};
        }
    },
    effects: {
        *get({ payload:{tab,page,limit} }, { call, put }) {
            const data = yield request(`/v1/topics?tab=${tab}&page=${page}&limit=${limit}`)
            
            yield put({ type: 'getList',payload:{data:data.data.data} });
        }
    },
    subscriptions: {
    //   setup({ dispatch, history }) {
    //     return history.listen(({ pathname, query }) => {
    //         if (pathname === '/') {
    //             dispatch({ type: 'get', payload: {tab:'all',page:1,limit:10} });
    //         }
    //     });
    //   },
    },
};
