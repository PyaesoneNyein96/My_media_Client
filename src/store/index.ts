import { createStore } from 'vuex'
import AuthModule from './auth/index'
import ActionLogModule from './ActionLog/index'

const store = createStore({
  modules: {
    auth: AuthModule,
    actionLog: ActionLogModule,
  }
})


export default store
