import React from "react";
import "../CSS/Footer.css";
// import PrivacyModal from "../ModalView/PrivacyModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faGithub,
    faInstagram,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="item2">
                    {/* <span style={{ paddingRight: 5 }}>Copyright </span>
                    <FontAwesomeIcon icon={faCopyright} />{" "} */}
                    <span style={{color:"aqua",paddingLeft: 5 }}>
                        <b>
                            Made By Zakie Khan
                        </b>
                    </span>
                </div>
                <a
                    href="https://github.com/zakie2003"
                    target="_blank"
                    className="item3"
                >
                    <FontAwesomeIcon style={{color:"white"}} icon={faGithub} />
                </a>
                <a
                    href="http://fb.com/sudiptob2"
                    target="_blank"
                    className="item4"
                >
                    <FontAwesomeIcon style={{color:"white"}} icon={faLinkedin} />
                </a>
                <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    className="item5"
                >
                    <FontAwesomeIcon style={{color:"white"}} icon={faInstagram} />
                </a>

            </div>
        </footer>
    );
};

export default Footer;