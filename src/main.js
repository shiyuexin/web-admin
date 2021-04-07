import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import i18n from '@/lang'

//引入路由文件
import router from './router/index'
// 来关闭生产模式下给出的提示
Vue.config.productionTip = false

Vue.use(ElementUI, { size: 'small', zIndex: 3000, i18n: (key, value) => i18n.t(key, value) });
new Vue({
    // 引入路由对象
    router,
    i18n,
    render: h => h(App),
}).$mount('#app')