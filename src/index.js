import dva from 'dva';
import './index.less';
import createLoading from 'dva-loading'

// 1. Initialize
const app = dva();

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(require('./models/index').default);
app.model(require('./models/todos').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
