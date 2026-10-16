import Image from 'next/image'

// app/page.tsx
export default function Home() {
  return (
    <section className="page">
      <p className="eyebrow"></p>
      <h1>Home</h1>
     


              

     <p className="description">
        
      </p>

      <div className="card">
        <h2>Welcome!</h2>
        <p>Welcome to the app.</p>

            <Image
                src="https://tudublin11.b-cdn.net/icon_aE3ARq5Qudp3i6Ty-5dNtqpE3xtLwyfoWVviXshG_9o%3D.png"
                width={200}
                height={200}
                alt="Picture of the author"
            />

      </div>
    </section>
  );
}
