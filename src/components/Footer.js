import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'

const Footer = () => {
    return (
        <>


            <div className="footer">
                <div className="card2">
                    <h3>Services</h3>
                    <div className="ser">
                        <ul className="li"><a href="#" className="linkser">Web Design</a></ul>
                        <ul className="li"><a href="#" className="linkser">Design with Figma</a></ul>
                        <ul className="li"><a href="#" className="linkser">Database</a></ul>
                    </div>
                    <h>Social Media</h><br /><br /><br /><br />
                    <div className="social">
                        <a href="https://web.facebook.com/profile.php?id=100008682602660" className="fa fa-facebook"></a>
                        <a href="#" className="fa fa-twitter"></a>
                        <a href="https://www.instagram.com/payzzo/" className="fa fa-instagram"></a>
                        <a href="#" className="fa fa-pinterest"></a>
                        <a href="https://github.com/Patrick-55" className="fa fa-github"></a>
                    </div>

                </div>


                <div className="card2">
                    <h3>Contacts</h3>
                    <p>Kigali City</p>
                    <p>Phone : +250728172130</p>
                    <p>KG 147 St, Kigali, Rwanda</p>

                </div>
                <div className="card2">
                    <p>Reach on me: </p>
                    <input type="text" id="names" className="fullname" placeholder="Your full names" />
                    <input type="Email" id="mail" className="email" placeholder="Enter email..." />
                    <textarea id="comments" className="comment">Type your comment here.</textarea>
                    <button id="button" className="sendbtn">Send</button>
                </div>

            </div>

            <div className="pfoot">
                <p className="pfooter">Klab.co.ltd copyright</p>
            </div>

        </>
    )
}

export default Footer