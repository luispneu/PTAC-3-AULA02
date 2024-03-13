export default async function Home() {
  const respostas = await fetch("http://localhost:3000/api",{
    next:{
      revalidate: 1
    }
  });
  const campus = await respostas.json();
  return (
    <main>
      <h1>Home!!</h1>
      {campus.map((campi) => (
        <div>
          <p>{campi.nome_campi}</p>
      <img src="campi.imagem_url"></img>
        </div>
      ))}
    </main>
  );
}
