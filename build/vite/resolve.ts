import path from 'path';
import type { ResolveOptions, AliasOptions } from 'vite';

type myResolveOptions = ResolveOptions & { alias?: AliasOptions };

export function createViteResolve(myDirname: string): myResolveOptions {
    const viteResolve: myResolveOptions = {
        // 引用别名配置
        alias: {
            // 配置@别名
            '@': `${path.resolve(myDirname, 'src')}`,
            // 配置#别名
            '#': `${path.resolve(myDirname, 'types')}`,
        },
        // 导入时想要省略的扩展名列表。
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
    };

    return viteResolve;
}
