// import tipoServicios from '../../assets/image/img-varios/servicios-fontaneria.webp';
import './style.css';
import servicios from '../../assets/image/img-varios/servicios-fontaneria.webp';

export function Home() {
	return (
		<div class="home">

			<section class="casa">
				<article class="descripcion-casa">
					<p>¿Tienes el fregadero atascado? ¿Tu cisterna pierde agua?
						¿El radiador gotea? ¿Quieres poner un grifo nuevo? ¿Una
						tubería tiene una fuga? ¿Necesita un fontanero urgente en Bilbao? </p>
				</article>

				<section class="info-casa">

					<article class="img-casa">
						<h2>Servicios de Fontaneria en Bilbao</h2>
						<img src={servicios} alt="servicios" />
					</article>


					<article class="p-casa">
						<p>Fontaneros Cercano es una empresa con más de 3 años de experiencia en
							el sector de la fontanería.
							Te ofrecemos un trabajo de fontanería bien hecho, rápido y económico en Bizkaia.
							Estamos especializados en <strong>reparaciones e instalaciones</strong> de fontanería:<strong> fugas o roturas,
								desatascos, griferías, cisternas, bajantes,
								desagües, radiadores, etc. </strong>
						</p>
						<p>Fontaneros Cercano está formada por los mejores profesionales y te ofrecemos una rápida respuesta a tus
							problemas y un trabajo bien acabado.
							Somos profesionales y eso se nota. Nuestros clientes recomiendan nuestros servicios y se acuerdan de nosotros al
							cabo de los años.
						</p>
						<p>Realizamos trabajos urgentes dentro de nuestro horario: de 8:00 de la mañana a 8:00 de la tarde y sábados de
							10:00 a 15:00.
							<strong>NO COBRAMOS LA REALIZACIÓN DEL PRESUPUESTO</strong>.
						</p>
					</article>

				</section>
			</section>

		</div>
	);
}


