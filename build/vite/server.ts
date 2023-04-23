import type { ServerOptions } from 'vite';

export function createViteServer(): ServerOptions {
    const viteServer: ServerOptions = {
        // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
        host: true,
        // 服务器端口号
        port: 3000,
        // 端口已被占用时是否尝试使用下一个可用的端口 true：直接退出，而不是尝试下一个可用端口 false：尝试下一个可用端口
        strictPort: false,
        // 启动项目时自动在浏览器打开应用程序
        open: true,
        // 强制使依赖预构建
        // force: false,
        // 为开发服务器配置 CORS
        cors: true,
        // 自定义代理规则
        proxy: {
            '/api': {
                target: '',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    };
    return viteServer;
}
