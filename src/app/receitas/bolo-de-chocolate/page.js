// src/app/receitas/bolo-de-chocolate/page.js
import Image from 'next/image'; // Importe o componente Image do Next.js

export default function BoloDeChocolatePage() {
  return (
    <main style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Receita de Bolo de Chocolate Delicioso</h1>
        <br/>
      <p>Um bolo clássico, úmido e perfeito para qualquer ocasião.</p>
        <br/>
       
       <div style={{
        position: 'relative', // ESSENCIAL: o pai do Image com fill precisa ser posicionado
        width: '100%',        // Ocupa a largura total do main
        height: '400px',      // Defina uma altura para o contêiner em telas grandes
        borderRadius: '8px',
        marginBottom: '20px',
        overflow: 'hidden',   // Garante que o borderRadius funcione bem
        // Você pode ajustar a altura com media queries no CSS Module, ex:
        // @media (max-width: 767px) { height: 250px; }
        // @media (min-width: 768px) { height: 400px; }
      }}>
        <Image
          src="/images/bolo-de-chocolate.webp"
          alt="Bolo de Chocolate Delicioso"
          fill // A imagem preencherá este contêiner
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 700px, 900px" // Ajuste os tamanhos aqui!
          style={{ objectFit: 'cover' }} // 'cover' para preencher e cortar, 'contain' para imagem inteira
          priority
        />
      </div>

      <h2>Ingredientes:</h2>  <br/>
      <ul>
        <li>2 xícaras de farinha de trigo</li>
        <li>1 xícara de chocolate em pó 50% cacau</li>
        <li>2 xícaras de açúcar</li>
        <li>1 colher de sopa de fermento em pó</li>
        <li>1 colher de chá de bicarbonato de sódio</li>
        <li>1 pitada de sal</li>
        <li>3 ovos grandes</li>
        <li>1 xícara de leite</li>
        <li>1/2 xícara de óleo vegetal</li>
        <li>1 xícara de água quente</li>
      </ul> 
       <br/> <br/>

      <h2>Modo de Preparo:</h2>
      <ol>  <br/>
        <li>Pré-aqueça o forno a 180°C. Unte e enfarinhe uma forma de 24cm de diâmetro.</li>
        <li>Em uma tigela grande, peneire a farinha, o chocolate em pó, o açúcar, o fermento, o bicarbonato e o sal. Misture bem.</li>
        <li>Em outra tigela, bata os ovos, o leite e o óleo.</li>
        <li>Despeje os ingredientes líquidos sobre os secos e misture bem até incorporar.</li>
        <li>Adicione a água quente e misture até a massa ficar homogênea e fluida.</li>
        <li>Despeje a massa na forma preparada e leve ao forno por aproximadamente 35-40 minutos, ou até que um palito inserido no centro saia limpo.</li>
        <li>Retire do forno, espere amornar e desenforme.</li>
      </ol>
        <br/>
      <h3>Dica:</h3>
      <p>Para uma cobertura simples e deliciosa, derreta 200g de chocolate meio amargo com 100ml de creme de leite. Mexa até ficar homogêneo e despeje sobre o bolo já frio.</p>

      <p>Aproveite seu bolo de chocolate!</p>
    </main>
  );
}