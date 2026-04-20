import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className=" bg-base-300  py-10">
      <div className="container mx-auto footer sm:footer-horizontal text-base-content text-base">
        <aside>
          <img src="/favicon.png" className="w-[50px] mb-1" alt="Logo" />
          <p className="text-justify text-[#ddd] leading-8">
            DevTinder is the ultimate networking hub <br />
            designed exclusively for developers and tech <br /> professionals to
            connect, collaborate, and <br />
            innovate.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link className="link link-hover">Branding</Link> 
          <Link className="link link-hover">Design</Link> 
          <Link className="link link-hover">Marketing</Link> 
          <Link className="link link-hover">Advertisement</Link> 
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link className="link link-hover">About us</Link> 
          <Link className="link link-hover">Contact</Link> 
          <Link className="link link-hover">Jobs</Link> 
          <Link className="link link-hover">Press kit</Link> 
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link className="link link-hover">Terms of use</Link> 
          <Link className="link link-hover">Privacy policy</Link> 
          <Link className="link link-hover">Cookie policy</Link> 
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
