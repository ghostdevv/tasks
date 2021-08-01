import '../style/global.scss';
import HMR from '@roxi/routify/hmr';
import App from './App.svelte';

const app = HMR(App, { target: document.body }, 'tasks');

export default app;
