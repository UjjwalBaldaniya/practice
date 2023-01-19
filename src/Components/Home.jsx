import React from 'react'
import img2 from '../Photos/2.webp'
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineFacebook, AiOutlineYoutube } from "react-icons/ai";

const Home = () => {
    return (
        <>
            <div className="home1">
                <main>
                    <h1>Tech Master</h1>
                    <p>Soulution your all Problem</p>
                </main>
            </div>

            <div className="home2">
                <img src={img2} alt='image2' />
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste facilis molestias quaerat similique asperiores. Obcaecati nulla voluptatum molestiae repudiandae minus aliquid iusto reiciendis officiis consequatur dolorum officia, aut alias numquam, veniam tenetur unde voluptate!</p>
                </div>
            </div>

            <div className="home3">
                <div>
                    <h1>Who we are ?</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, laborum officia placeat omnis quisquam deserunt reiciendis deleniti inventore officiis sint, illo, fugit magnam. Nostrum, officiis, placeat ipsam temporibus natus modi maiores iure voluptatibus aspernatur tempora ab sapiente. Similique repellendus, deserunt repudiandae nostrum rerum ipsam est aperiam, nulla nam adipisci sapiente, sit pariatur. Quis asperiores aperiam accusamus veritatis nam porro. Odit est consequuntur harum laboriosam repellat quod eveniet soluta minima exercitationem.</p>
                </div>
            </div>

            <div className="home4">
                <div className="icons">
                    <h1>Brands</h1>
                    <article>
                        <div style={{ animationDelay: '0.3s' }}>
                            <AiOutlineInstagram />
                            <p>Instagram</p>
                        </div>
                        <div style={{animationDelay: '0.5s'}}>
                            <AiOutlineYoutube />
                            <p>Youtube</p>
                        </div>
                        <div style={{animationDelay: '0.7s'}}>
                            <AiOutlineFacebook />
                            <p>Facebook</p>
                        </div>
                        <div style={{animationDelay: '1s'}}>
                            <AiOutlineTwitter />
                            <p>Twitter</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home