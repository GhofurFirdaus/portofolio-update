import Link from 'next/Link';
import Navbar from '../components/navbar';
import Head from 'next/head'
function Contact(){
    return(
        <>
            <Head> 
                <title>Contact</title>
            </Head>
            <Navbar/>
            <section className="hero">
                <div className="container">
                    <div className="text-wrapper w-full">
                    <h1 className="title"> Contact</h1>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, architecto! Exercitationem sint aperiam quibusdam velit dolorum,
                     error aut ipsam repellat recusandae totam earum accusamus asperiores laudantium ratione? Vel, inventore distinctio?</p>
                     <ul className="contact-links">
                         <li className="contact-items"> Email : rizkyaprillyo90@gmail.com</li>
                         <li className="contact-items"> Phone : +6282256577896</li>
                     </ul>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Contact;