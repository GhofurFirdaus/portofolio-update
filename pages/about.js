import Link from 'next/Link';
import Navbar from '../components/navbar';
import Head from 'next/head'
function About(){
    return(
        <>
            <Head>
                <title>About</title>
            </Head>
            <Navbar/>
            <section className="hero">
                <div className="container">
                    <div className="text-wrapper w-full">
                    <h1 className="title"> About</h1>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, architecto! Exercitationem sint aperiam quibusdam velit dolorum,
                     error aut ipsam repellat recusandae totam earum accusamus asperiores laudantium ratione? Vel, inventore distinctio?</p>
                    </div>
                </div>
            </section>
        </>
    );
}
export default About;