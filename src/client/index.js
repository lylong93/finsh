import Vue from 'vue'
import App from './App.vue'

// export function createApp () {
    // const app = new Vue({
    //   // 根实例简单的渲染应用程序组件。
    //   render: h => h(App)
    // })

    const app = new Vue({
      data: {
          url: 'www.baidu.com'
        },      
      template: `<div>访问的 URL 是： {{ url }}</div>`,
  })
    // return { app }

    export default app
//   }