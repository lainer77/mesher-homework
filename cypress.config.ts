import { devServer } from '@cypress/vite-dev-server';
import { defineConfig } from 'cypress';

export default defineConfig({
    component: {
        // devServer: {
        //     bundler: 'vite',
        //     framework: 'react',
        // },
        devServer(devServerConfig) {
            return devServer({ ...devServerConfig, framework: 'react' });
        },
    },

    e2e: {
        baseUrl: 'http://localhost:5173',
        setupNodeEvents(on, config) {
            // implement node event listeners here
            console.log(on, config);
        },
    },
});
