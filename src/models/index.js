import request from '../utils/request';

export default {
    namespace: 'index',
    state: {
        data:[],
        tab:'all',
        page:1,
        limit:10,
        more:true
    },
    reducers: {
        getList(state, action) {
            let {data,tab,page,limit} = action.payload
            if(tab !== state.tab){
                state.data = []
            }
            state.tab = tab
            state.page = page
            state.limit = limit
            return {...state,data:state.data.concat(data)};
        }
    },
    effects: {
        *get({ payload:{tab,page,limit} }, { call, put, select }) {
            const model = yield select(state => state.index)
            const useTab = tab ? tab : model.tab
            const usePage = page ? page : model.page
            const useLimit = limit ? limit : model.limit

            const data = yield request(`/v1/topics?tab=${useTab}&page=${usePage}&limit=${useLimit}`)
            
            yield put({ type: 'getList',payload:{data:data.data.data,tab:useTab,page:usePage,limit:useLimit} });
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
