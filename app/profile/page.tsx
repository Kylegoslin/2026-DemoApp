import Image from 'next/image'

//app/page.tsx
export default function Home() {
  return (
    <section className="page">
      <p className="eyebrow"></p>
      <h1>Home</h1>
      <p className="description">


      </p>

      <div className="card">
        <h2>Profile</h2>
        <p>Welcome to the app.</p>


    <div style={{ height: "40px" }} />

          <Image
        src="/tux.png"
        width={100}
        height={100}
        alt="Picture of the author"
        />
        </div>
      
      
       <div className="card">
        <h2>Hmmm</h2>
        <p>We should probably login.</p>
      </div>
      
    </section>
  );
}
