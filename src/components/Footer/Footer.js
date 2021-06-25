import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import "./Footer.css";

export default () => {
    return (
        <footer className="section footer-classic context-dark bg-image">
            <div className="center">
                <p className="col">Contatos</p>
                <p className="contact-list">
                    <HiOutlineMail></HiOutlineMail>
                    <a href="mailto:#"> info@example.com</a>
                </p>
                <p className="contact-list">
                    <AiOutlineWhatsApp></AiOutlineWhatsApp>
                    <a href="tel:#"> 24 99999999</a>
                </p>
            </div>
            <div className="row no-gutters social-container">
                <div className="col">
                    <a
                        className="social-inner"
                        href="https://pt-br.facebook.com/"
                    >
                        <span className="icon mdi mdi-facebook"></span>
                        <span>Facebook</span>
                    </a>
                </div>
                <div className="col">
                    <a
                        className="social-inner"
                        href="https://www.instagram.com/"
                    >
                        <span className="icon mdi mdi-instagram"></span>
                        <span>instagram</span>
                    </a>
                </div>
                <div className="col">
                    <a className="social-inner" href="https://twitter.com/">
                        <span className="icon mdi mdi-twitter"></span>
                        <span>twitter</span>
                    </a>
                </div>
                <div className="col">
                    <a
                        className="social-inner"
                        href="https://www.google.com.br/"
                    >
                        <span className="icon mdi mdi-youtube-play"></span>
                        <span>google</span>
                    </a>
                </div>
            </div>
            <div className="rights">
                <span>© </span>
                <span className="copyright-year">2021</span>
                <span></span>
                <span>. </span>
                <span>Copyright</span>
            </div>
        </footer>
    );
};
