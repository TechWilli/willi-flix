import React, { useEffect } from 'react';
import Menu from './components/Menu'
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {

	const { categorias } = dadosIniciais;

	useEffect(() => {
		console.log('categorias', categorias);

	}, []);

	return (
		<div style={{ background: "#141414" }}>
			<Menu />

			<BannerMain
				videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
				url={dadosIniciais.categorias[0].videos[0].url}
				videoDescription={`O React Hooks veio para tirar muitas das dores de cabeça de usar Class Components
				no React, agora sendo possível construir sua aplicação apelas com funções, os Hooks caem como
				uma luva para todos os Devs!`}
			/>

			{categorias.map(categorias => {
				return (
					categorias.titulo === 'Font End' ?
					<Carousel ignoreFirstVideo category={categorias} />
					: <Carousel category={categorias} />
				);
			})}

			<Footer />
		</div>
	);
}

export default App;