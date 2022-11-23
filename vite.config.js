import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { normalizePath } from 'vite'
import path from 'path'
/*  引入 css Modules  */
const variablePath = normalizePath(path.resolve('./src/assets/style/varible.scss'))
/* autoprefixer */
import autoprefixer from 'autoprefixer';
/* windicss */
import windi from 'vite-plugin-windicss'
export default defineConfig({
  plugins: [react(
  //   {
  //   babel: {
  //     plugins: [
  //       /* 适配 tyled-components */
  //       "babel-plugin-styled-components",
  //       /* 适配 emotion */
  //       "@emotion/babel-plugin",
  //     ],
  //   },
  //   jsxImportSource:'@emotion/react'
  //  }
 
  ),
  windi()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${variablePath}";`,
      }
    },
    /*  处理 css modulea calssName */
    modules: {
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
    /* 进行 PostCSS 配置 */
    postcss: {
      plugins: [
        autoprefixer({
          // 指定目标浏览器
          overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11']
        })
      ]
    }
  }
})
