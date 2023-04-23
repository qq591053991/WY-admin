import type { ConfigEnv, UserConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'
import { createViteResolve } from './build/vite/resolve';
import { createViteServer } from './build/vite/server';

// https://vitejs.dev/config/
export default (configEnv: ConfigEnv): UserConfig => {
  const { command } = configEnv;

  const isBuild = command === 'build';

  return {
    resolve: createViteResolve(__dirname),
    server: createViteServer(),
    plugins: [react()]
  }
}
