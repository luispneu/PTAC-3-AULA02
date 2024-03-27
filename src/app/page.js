import Image from "next/Image";

export default async function Home() {
  const respostas = await fetch("https://back-end-ifms-rho.vercel.app/campi", {
    next: {
      revalidate: 1
    }
  });
  const campus = await respostas.json();
  return (
    <main>
      <h1>Home!!</h1>
      {campus.map((campi) => (
        <div key={campi.id}>
          <Image
            src={campi.image_url}
            alt={`Imagem do campus ${campi.nome_campus}`}
            width={500}
            height={300}
          />
          <p>{campi.nome_campus}</p>
        </div>
      ))}
    </main>
  );
}
