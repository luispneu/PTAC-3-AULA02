export default async function Home() {
  const respostas = await fetch("https://back-end-ifms-rho.vercel.app/campi",{
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
          <p>{campi.nome_campus}</p>
      <img src="campus.image_url"></img>
        </div>
      ))}
    </main>
  );
}
