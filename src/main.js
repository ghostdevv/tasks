import '../style/global.scss';

import { registerSW } from 'virtual:pwa-register';
import HMR from '@roxi/routify/hmr';
import App from './App.svelte';

// Update/register service worker
registerSW()();

// create svelte app
const app = HMR(App, { target: document.body }, 'tasks');

export default app;
