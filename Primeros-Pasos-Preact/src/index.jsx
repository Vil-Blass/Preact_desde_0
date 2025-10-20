// @ts-nocheck
import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';

import { Header } from './components/Header.jsx';
import { Home } from './pages/Home/index.jsx';
import { Instalaciones } from './pages/Instala/intalaciones.jsx';
import { Reparaciones } from './pages/Repara/reparaciones.jsx';
import { Urgencias } from './pages/Urgencia/urgencias.jsx';
import { Solicitudes } from './pages/Solicitud/solicitudes.jsx';
import { Tarifas } from './pages/Tarifas/tarifas.jsx';
import { NotFound } from './pages/_404.jsx';
import './style.css';

export function App() {
	return (
		<LocationProvider>
			<Header />
			<main>
				<Router>
					<Route path="/" component={Home} />
					<Route path='instalaciones' component={Instalaciones} />
					<Route path='reparaciones' component={Reparaciones} />
					<Route path='urgencias' component={Urgencias} />
					<Route path='solicitudes' component={Solicitudes} />
					<Route path='tarifas' component={Tarifas} />
					<Route default component={NotFound} />
				</Router>
			</main>
		</LocationProvider>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
