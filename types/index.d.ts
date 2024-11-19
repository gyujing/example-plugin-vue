// types/example-plugin-vue.d.ts

import Vue, { PluginObject } from 'vue';

// 声明一个兼容 Vue 2 和 Vue 3 的插件类型
declare type CompatibleVuePlugin = PluginObject<any> & {
  install(vue: typeof Vue, options?: { [key: string]: any }): void;
};

// 声明插件的全局方法类型
declare type LogoutMethod = () => void;

// 声明插件类型
declare const examplePlugin: CompatibleVuePlugin & {
  // 由于 TypeScript 声明文件不能直接改变 Vue 类的原型或全局属性，
  // 我们这里仅声明了插件的存在，并没有直接声明对 Vue.prototype 或 Vue.config.globalProperties 的修改。
  // 用户需要在代码中自行类型断言或使用扩展类型来兼容。
};

// 为了更好地与 Vue 3 集成，我们可以使用 Vue 3 的全局属性扩展类型
// 注意：这通常需要在用户的 tsconfig.json 中启用或创建额外的全局类型定义
declare module 'vue' {
  interface Vue {
    $logout?: LogoutMethod; // Vue 2 用户可能需要类型断言
  }

  interface VueConstructor {
    config: {
      globalProperties: {
        $logout?: LogoutMethod; // Vue 3 全局属性
      };
    };
  }
}



// 导出插件
export default examplePlugin;
