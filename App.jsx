import assembly from './assets/img/js.img.png';
import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav>
          <div>
            <img src={assembly} alt="logo do seu trabalho" className='java script' />
          </div>
          <div>
            <h1>Java script</h1>
          </div>
          <div></div>
        </nav>
      </header>
      <main>
        <div className="historia">
          <h2>Historia</h2>
          <ul>
            <li>O JavaScript surgiu em 1995, criado por Brendan Eich para a Netscape, com o objetivo de tornar as páginas da web mais interativas. A linguagem foi inicialmente chamada de Mocha, depois LiveScript, e finalmente JavaScript. </li>
          </ul>
        </div>
        <div className='comofuncionadiv'>
          <h2 className='comoFunciona'>Como funciona</h2>
          <ul>
            <li>JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web — toda vez que uma página da web faz mais do que simplesmente mostrar a você informação estática — mostrando conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D animados, etc.</li>
          </ul>
        </div>
      </main>
      <footer>
        <h3>Desenvolvido por: Thiago / 2°C TEC</h3>
      </footer>
    </>
  );
}

export default App;
