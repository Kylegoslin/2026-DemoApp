"use client";

import { useEffect, useState } from "react";

import Image from 'next/image'

// app/page.tsx
export default function Home() {

    // state to hold the fox image URL
    // when it loads, the variable is empty, but when the API 
    // returns a fox image, it will be stored in this variable.
    const [fox, setFox] = useState(null);


    // function to fetch a random fox image from the API
    // If we want to see what the API returns, we can always
    // open the link to the API in a browser: https://randomfox.ca/floof/

    async function getFox() {
        const response = await fetch("https://randomfox.ca/floof/");
        const data = await response.json();

        setFox(data.image);
    }

    useEffect(() => {
        getFox();
    }, []);


    return (
        <section className="page">
            <p className="eyebrow"></p>
            <h1>Random Fox</h1>

             // button to get a new fox
            // notice how the onClick calls the getFox function 
            // to fetch a new fox image
            // styling is added here for lazyness, 
            // but you can also add styling in the CSS file
            <button
                onClick={getFox}
                style={{
                    backgroundColor: "#f97316",
                    color: "white",
                    padding: "12px 20px",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "16px",
                    cursor: "pointer",
                    marginTop: "15px",
                }}
            >
                Give me another fox 🦊
            </button>[]

            <div className="card">
                <h2></h2>
                <p style={{ height: 40 }}> Here is a random fox.. enjoy!</p>



   {/* This piece of code works in two ways, it first
    checks to see if the "fox" variable has a value  and
    if it does, it displays the fox image.

    Think of the {fox &&} but as saying "if fox has a value, 
    then display the image"
    */}
                {fox && (
                    <img
                        src={fox}
                        alt="Random fox"
                        width={500}
                    />
                )}

            </div>


        </section>



    );
}
