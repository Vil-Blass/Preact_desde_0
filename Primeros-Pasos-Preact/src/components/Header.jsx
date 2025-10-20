import { useLocation } from 'preact-iso';

import './header.css';

//importar la imagen de la cabecera
import plomero from '../assets/image/img-varios/plomero.webp';
import casa from '../assets/image/img-varios/servicios-fontaneria.webp';
import reparar from '../assets/image/img-nav/icon-reparaciones.webp';
import instalar from '../assets/image/img-nav/icon-instalaciones.webp';
import urgencia from '../assets/image/img-nav/icon-urgencias.webp';
import solicitud from '../assets/image/img-nav/icon-presupuesto.webp';
import economi from '../assets/image/img-nav/icon-tarifas.webp';
// import { Instalaciones } from '../pages/instala/intalaciones';

export function Header() {
	const { url } = useLocation();

	return (
		<header class="cabecera">
			<div>
				<img src={plomero} alt="logo" />
				<h1>Fontanero Cercano</h1>
			</div>
			<nav>
				<ul>
					<li>
						<img src={casa} alt="" />
						<a href="/">Home</a>
					</li>
					<li>
						<img src={instalar} alt=" instalar" />
						<a href="/instalaciones">Instalaciones</a>
					</li>
					<li>
						<img src={reparar} alt="reparar" />
						<a href="/reparaciones">Reparaciones</a>
					</li>
					<li>
						<img src={urgencia} alt="urgencia" />
						<a href="/urgencias">Urgencias</a>
					</li>
					<li>
						<img src={solicitud} alt="" />
						<a href="/solicitudes">Solicitudes</a>
					</li>
					<li>
						<img src={economi} alt="tarifas" />
						<a href="/tarifas">Tarifas</a>
					</li>
				</ul>

			</nav>
		</header>
	);
}


