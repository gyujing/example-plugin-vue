const examplePlugin = {
  install(Vue, options) {
    // 添加方法
    console.log(options.baseUrl);
    // 添加全局方法 logout
    if (Vue.version.startsWith("3.")) {
      Vue.config.globalProperties.$logout = function () {

      };
    } else {
      Vue.prototype.$logout = function () {

      };
    }
  }
}



export default examplePlugin
