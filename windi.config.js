import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
    // 开启attrbutify;
    attributify: true,
    // shortcuts配置
    shortcuts: {
        "flex-c": "flex justify-center items-center",
        "t-2":"text-2xl"
    }
});
