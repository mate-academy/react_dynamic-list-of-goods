import { createRoot } from 'react-dom/client';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma';
import './App.scss';
import { App } from './App';

const container = document.getElementById('root') as HTMLElement;

createRoot(container).render(<App />);
