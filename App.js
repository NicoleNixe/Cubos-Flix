import logoDark from './assets/logo-dark.png';
import { ReactComponent as LightMode } from './assets/light-mode.svg';
import { ReactComponent as ArrowLeftDark } from './assets/arrow-left-dark.svg';
import { ReactComponent as ArrowRightDark } from './assets/arrow-right-dark.svg';
import { ReactComponent as Rating } from './assets/rating.svg';
import { ReactComponent as Play } from './assets/play.svg';
import { ReactComponent as CloseDark } from './assets/close-dark.svg';
import './css/global.css';
import './css/style.css';
import './services/movies.js';
import React, { useState } from 'react';


function App() {

  const filmes = [
    {
      id: 667538,
      backdrop_path: 'https://image.tmdb.org/t/p/original/qWQSnedj0LCUjWNp9fLcMtfgadp.jpg',
      título: 'Transformers: Rise of the Beasts',
      avaliação: '7.3',
    },
    {
      id: 447365,
      backdrop_path: 'https://image.tmdb.org/t/p/original/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg',
      título: 'Guardians of the Galaxy Vol. 3',
      avaliação: '8.1',
    },
    {
      id: 1076487,
      backdrop_path: 'https://image.tmdb.org/t/p/original/uPcN7Ra6AJvmTn432XDohDed4uv.jpg',
      título: 'Warhorse One',
      avaliação: '5.9',
    },
    {
      id: 298618,
      backdrop_path: 'https://image.tmdb.org/t/p/original/itYONYDHpJqTuu8BCXAtHxgpglq.jpg',
      título: 'The Flash',
      avaliação: '6.9',
    },
    {
      id: 346698,
      backdrop_path: 'https://image.tmdb.org/t/p/original/nHf61UzkfFno5X1ofIhugCPus2R.jpg',
      título: 'Barbie',
      avaliação: '8.2',
    },
    {
      id: 385687,
      backdrop_path: 'https://image.tmdb.org/t/p/original/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg',
      título: 'Fast X',
      avaliação: '7.3',
    },
    {
      id: 455476,
      backdrop_path: 'https://image.tmdb.org/t/p/original/oqP1qEZccq5AD9TVTIaO6IGUj7o.jpg',
      título: 'Knights of the Zodiac',
      avaliação: '6.6',
    },
    {
      id: 678512,
      backdrop_path: 'https://image.tmdb.org/t/p/original/uyi0Ytkkw4pgT4GkYZHdqravjT5.jpg',
      título: 'Sound of Freedom',
      avaliação: '8',
    },
    {
      id: 569094,
      backdrop_path: 'https://image.tmdb.org/t/p/original/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg',
      título: 'Spider-Man: Across the Spider-Verse',
      avaliação: '8.5',
    },
    {
      id: 603692,
      backdrop_path: 'https://image.tmdb.org/t/p/original/7I6VUdPj6tQECNHdviJkUHD2u89.jpg',
      título: 'John Wick: Chapter 4',
      avaliação: '7.9',
    },
    {
      id: 976573,
      backdrop_path: 'https://image.tmdb.org/t/p/original/cSYLX73WskxCgvpN3MtRkYUSj1T.jpg',
      título: 'Elemental',
      avaliação: '7.6',
    },
    {
      id: 502356,
      backdrop_path: 'https://image.tmdb.org/t/p/original/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg',
      título: 'The Super Mario Bros. Movie',
      avaliação: '7.8',
    },
    {
      id: 921636,
      backdrop_path: 'https://image.tmdb.org/t/p/original/fjWcAbHRxCSR4kLGvsPEhNjR2ts.jpg',
      título: 'The Out-Laws',
      avaliação: '6.3',
    },
    {
      id: 805320,
      backdrop_path: 'https://image.tmdb.org/t/p/original/aQ05QNSEersEdOzaqdjnrkqxZXE.jpg',
      título: 'Bird Box Barcelona',
      avaliação: '6',
    },
    {
      id: 406563,
      backdrop_path: 'https://image.tmdb.org/t/p/original/PwI3EfasE9fVuXsmMu9ffJh0Re.jpg',
      título: 'Insidious: The Last Key',
      avaliação: '6.3',
    },
    {
      id: 254128,
      backdrop_path: 'https://image.tmdb.org/t/p/original/zcySy6dnSmyqiichtDgO7AEeZoq.jpg',
      título: 'San Andreas',
      avaliação: '6.2',
    },
    {
      id: 1130818,
      backdrop_path: 'https://image.tmdb.org/t/p/original/qe0oK0A5ovrlgH39Ga13dxxw9MU.jpg',
      título: 'Sheroes',
      avaliação: '6',
    },
    {
      id: 445651,
      backdrop_path: 'https://image.tmdb.org/t/p/original/rPBeEi1tU8IhQ9rbdnlLU0d0NR.jpg',
      título: 'The Darkest Minds',
      avaliação: '7',
    },
    {
      id: 447277,
      backdrop_path: 'https://image.tmdb.org/t/p/original/fCw8CVgII6W7ALbIh0SgXax3Hsj.jpg',
      título: 'The Little Mermaid',
      avaliação: '6.3',
    },
    {
      id: 575264,
      backdrop_path: 'https://image.tmdb.org/t/p/original/2fTmypmAAfyQu6NxVB0MtBLVU6Z.jpg',
      título: 'Mission: Impossible - Dead Reckoning Part One',
      avaliação: '7.9',
    },
  ];



  const highlightMovie = {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/original/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg",
    belongs_to_collection: {
      id: 531242,
      name: "Esquadrão Suicida: Coleção",
      poster_path:
        "https://image.tmdb.org/t/p/original/bdgaCpdDh0J0H7ZRpDP2NJ8zxJE.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original/e0uUxFdhdGLcvy9eC7WlO2eLusr.jpg",
    },
    budget: 185000000,
    genres: [
      {
        id: 28,
        name: "Ação",
      },
      {
        id: 35,
        name: "Comédia",
      },
      {
        id: 12,
        name: "Aventura",
      },
    ],
    homepage: "",
    id: 436969,
    imdb_id: "tt6334354",
    original_language: "en",
    original_title: "The Suicide Squad",
    overview:
      "Bem-vindos a Belle Reve, a prisão com a maior taxa de mortalidade dos Estados Unidos. É aqui que os piores supervilões são mantidos e onde eles fazem de tudo para sair, até mesmo se unir à misteriosa e supersecreta Task Force X. Qual a missão do dia? Reunir uma equipe de vilões, incluindo Sanguinário, Pacificador, Capitão Bumerangue, Caça-Ratos 2, Sábio, Tubarão-Rei, Blackguard, Dardo e a psicopata favorita de todo mundo, Arlequina. Depois, armá-los até os dentes e soltá-los na ilha remota de Corto Maltese, cheia de inimigos. O Esquadrão atravessa uma selva repleta de oponentes e forças guerrilheiras durante sua missão de busca e abate. Apenas o Coronel Rick Flag e os dispositivos tecnológicos de Amanda Waller são capazes de mantê-los na linha. E, como sempre, basta um movimento errado para que estejam mortos (seja nas mãos de seus oponentes, de um colega de equipe ou da própria Waller).",
    popularity: 137.148,
    poster_path:
      "https://image.tmdb.org/t/p/original/wTS3dS2DJiMFFgqKDz5fxMTri.jpg",
    production_companies: [
      {
        id: 128064,
        logo_path:
          "https://image.tmdb.org/t/p/original/13F3Jf7EFAcREU0xzZqJnVnyGXu.png",
        name: "DC Films",
        origin_country: "US",
      },
      {
        id: 507,
        logo_path:
          "https://image.tmdb.org/t/p/original/aRmHe6GWxYMRCQljF75rn2B9Gv8.png",
        name: "Atlas Entertainment",
        origin_country: "US",
      },
      {
        id: 11565,
        logo_path: null,
        name: "The Safran Company",
        origin_country: "US",
      },
      {
        id: 174,
        logo_path:
          "https://image.tmdb.org/t/p/original/IuAlhI9eVC9Z8UQWOIDdWRKSEJ.png",
        name: "Warner Bros. Pictures",
        origin_country: "US",
      },
    ],
    production_countries: [
      {
        iso_3166_1: "US",
        name: "United States of America",
      },
    ],
    release_date: "2021-07-28",
    revenue: 168717425,
    runtime: 132,
    spoken_languages: [
      {
        english_name: "English",
        iso_639_1: "en",
        name: "English",
      },
      {
        english_name: "French",
        iso_639_1: "fr",
        name: "Français",
      },
      {
        english_name: "Spanish",
        iso_639_1: "es",
        name: "Español",
      },
    ],
    status: "Released",
    tagline: "Eles estão loucos... para salvar o mundo.",
    title: "O Esquadrão Suicida",
    video: false,
    vote_average: 7.573,
    vote_count: 7473,
  };

  //Visualização dos Filmes
  const filmesPorPagina = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const indiceUltimoFilme = currentPage * filmesPorPagina;
  const indicePrimeiroFilme = indiceUltimoFilme - filmesPorPagina;

  //Busca dos Filmes
  const [searchInput, setSearchInput] = useState('');
  const filmesFiltrados = filmes.filter((filme) =>
    filme.título.toLowerCase().includes(searchInput.toLowerCase())
  );
  const filmesDaPaginaAtual = filmesFiltrados.slice(
    indicePrimeiroFilme,
    indiceUltimoFilme
  );
  const totalPaginas = Math.ceil(filmesFiltrados.length / filmesPorPagina);


  //Escolha Filme do Dia
  const escolherFilmeDoDia = () => {
    const indiceAleatorio = Math.floor(Math.random() * filmes.length);
    return filmes[indiceAleatorio];
  };
  const filmeDoDia = escolherFilmeDoDia();

  //Vídeo Filme do Dia
  const playMovie = {
    iso_639_1: "pt",
    iso_3166_1: "BR",
    name: "Bastidores | O Esquadrão Suicida | HBO Max",
    key: "ovOFmJYRnyQ",
    site: "YouTube",
    size: 1080,
    type: "Behind the Scenes",
    official: true,
    published_at: "2021-09-28T12:00:34.000Z",
    id: "61684c80e004a6005f00ea82",
  };

  return (
    <>
      <header className="header size">
        <div className="header__container-logo">
          <img src={logoDark} alt="Logo" />
          <h1 className="header__title">CUBOS FLIX</h1>
        </div>
        <div className="header__container-right">
          <input
            className="input"
            type="text"
            placeholder="Pesquisar..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <LightMode className="btn-theme" />
        </div>
      </header>
      <div className="container size">
        <div className="movies-container">
          <ArrowLeftDark
            className="btn-prev"
            onClick={() => {
              if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
              }
            }}
          />
          <div className="movies">
            {filmesDaPaginaAtual.map(filme => (
              <div
                key={filme.id}
                className="movie"
                style={{ backgroundImage: `url(${filme.backdrop_path})` }}
              >
                <div className="movie__info">
                  <span className="movie__title" title={filme.título}>
                    {filme.título}
                  </span>
                  <span className="movie__rating">
                    <span>{filme.avaliação}</span>
                    <Rating />
                  </span>
                </div>
              </div>
            ))}
          </div>
          {currentPage < totalPaginas && (
            <ArrowRightDark
              className="btn-next"
              onClick={() => setCurrentPage(currentPage + 1)}
            />
          )}
        </div>
        <div className="highlight size">
          <a className="highlight__video-link" href={`https://www.youtube.com/watch?v=${playMovie.key}`} target="_blank">
            <div className="highlight__video" style={{ backgroundImage: `url(${highlightMovie.backdrop_path})` }}>
              <Play />
            </div>
          </a>
          <div className="highlight__info">
            <div className="highlight__title-rating">
              <h1 className="highlight__title">{highlightMovie.title}</h1>
              <span className="highlight__rating">{highlightMovie.vote_average}</span>
            </div>
            <div className="highlight__genre-launch">
              <span className="highlight__genres"> {highlightMovie.genres.map((genre) => genre.name).join(', ')} </span>
            </div>
            <span className="highlight__launch"> 28 DE JULHO DE 2021</span>
          </div>
          <p className="highlight__description">
            a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using Lorem Ipsum
            is that it has a more-or-less normal distribution of letters, as opposed to
            using 'Content here, content here', making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will uncover many
            web sites still in their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
        </div>
      </div>
      <div className="modal hidden">
        <div className="modal__body">
          <CloseDark className="modal__close" />
          <h3 className="modal__title">The Suicide Squad</h3>
          <img className="modal__img" alt="modal__img" src={logoDark} />
          <p className="modal__description">
            a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using Lorem Ipsum
            is that it has a more-or-less normal distribution of letters, as opposed to
            using 'Content here, content here', making it look like readable English. Many
            desktop publishing packages and web page editors now use Lorem Ipsum as their
            default model text, and a search for 'lorem ipsum' will uncover many web sites
            still in their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
          <div className="modal__genre-average">
            <div className="modal__genres">
              <span className="modal__genre">Gênero1</span>
              <span className="modal__genre">Gênero2</span>
              <span className="modal__genre">Gênero3</span>
            </div>
            <div className="modal__average">1.1</div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;

