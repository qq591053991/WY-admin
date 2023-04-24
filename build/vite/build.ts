import type { BuildOptions } from 'vite';

type myBuildOptions = BuildOptions & { minify?: boolean | 'terser' | 'esbuild' };

export function createViteBuild(): BuildOptions {
    const BuildConfig: myBuildOptions = {
        target: 'es2015',
        outDir: 'dist',
        assetsDir: 'static',
        // 是否生成 sourcemap 文件
        sourcemap: false,
        // 启用/禁用 brotli 压缩大小报告
        reportCompressedSize: false,
        // 混淆
        minify: "terser",
        // terserOptions: {
        //     compress: {
        //         // 去除打包后的console
        //         drop_console: true
        //     }
        // }
        // 规定触发警告的 chunk 大小
        chunkSizeWarningLimit: 500
    }
    return BuildConfig;
}
