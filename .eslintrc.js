// ESLint 配置文件遵循commonJS 的导出规则，所导出的对象就是ESLint的配置对象
// 文档：https://cn.eslint.org/docs/user-guide/configuring
module.exports = {
  // 表示当前目录即为根目录，ESLint规则将被限制到该目录下
  root: true,
  // env表示ESLint检测环境
  env: {
    node: true
  },
  // eslint基础配置需要继承的配置
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  /**
   * 错误分为3种
   * off：或者0 关闭
   * warn 警告
   * error 报错
   */
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
