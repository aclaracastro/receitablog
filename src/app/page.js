import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Bem-vindo ao Receitas Culinárias!</h1> <br/>
      <p>Descubra as melhores receitas para todos os gostos.</p><br/> 

      {/* <Image //logo nextjs
        src="/next.svg" // Exemplo de imagem padrão do Next.js
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
        style={{ marginBottom: '20px' }}
      /> */}

      <h2>Nossas Receitas:</h2>
      <ul>
        <li>
          <Link href="/receitas/bolo-de-chocolate">
            Bolo de Chocolate Delicioso
          </Link>
        </li>
      </ul>

      <p>Comece a cozinhar agora mesmo!</p>
    </main>
  );
}