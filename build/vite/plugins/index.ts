import { PluginOption, splitVendorChunkPlugin } from "vite";

export function createVitePlugin() {
    const plugins: PluginOption = [
        // 分块
        splitVendorChunkPlugin()
    ];

    return plugins
}