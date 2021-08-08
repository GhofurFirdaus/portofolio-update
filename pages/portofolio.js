import Link from 'next/Link';
import Navbar from '../components/navbar';
import Head from 'next/head'
function Portfolio(){
    return(
        <>
            <Head>
                <title>Portofolio</title>
            </Head>
            <Navbar/>
            <section className="hero">
                <div className="container">
                    <div className="text-wrapper w-full">
                    <h1 className="title"> Portfolio</h1>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, architecto! Exercitationem sint aperiam quibusdam velit dolorum,
                     error aut ipsam repellat recusandae totam earum accusamus asperiores laudantium ratione? Vel, inventore distinctio?</p>

                     <div>
                         <div className="portofolio-wrapper">
                             <div className="portofolio-item">
                                 <img src="/dev1.png" className="portofolio-image" />
                                 <h4 className="portofolio-name"> Chat App Exploration</h4>
                                 <div className="portofolio-category"> Mobile Dev</div>
                             </div>
                             <div className="portofolio-item">
                                 <img src="/dev2.jpg" className="portofolio-image" />
                                 <h4 className="portofolio-name"> Kajian App</h4>
                                 <div className="portofolio-category"> Mobile Dev</div>
                             </div>
                         </div>
                     </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Portfolio;