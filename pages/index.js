"use client"; // This is a client component
import Head from "next/head";
import { Fragment } from "react";
//import Layout from "../src/layout/Layout";
import Cursor from "../src/layout/Cursor";
import PreLoader from "../src/layout/PreLoader";
import Link from "next/link";

//const inter = Inter({ subsets: ["latin"] });
//export default function Home() {
  
  const Index = () => {
  return (
    <Fragment>
      <Head>
        <title>Diego Maquill | Intro</title>
      </Head>
      <PreLoader />
      <div className="dizme_tm_all_wrap" data-magic-cursor="show">
        <div className="dizme_tm_intro">
          <div className="dizme_tm_intro_fixed_price">
            <span className="anim" />
            <span className="anim" />
            <span className="anim" />
            <a href="#" target="_blank" className="pricing-info anim">
              -20%
            </a>
          </div>
          <div className="short_info">
            <img src="img/logo/logo.png" alt="image" />
            <h3>Personal Portfolio Template</h3>
          </div>
          <span className="intro_line" />
          <span className="intro_line_2" />
          <span className="intro_line_3" />
          <div className="demos">
            <div className="left">
              <div className="desc">
                <img src="img/intro/light.png" alt="image" />
                <h3 className="title">Light Demo</h3>
              </div>
              <Link className="intro_link" href="/homelight" ></Link>
            </div>
            <div className="right">
              <div className="desc">
                <img src="img/intro/dark.png" alt="image" />
                <h3 className="title">Dark Demo</h3>
              </div>
              <Link className="intro_link" href="/homedark"></Link>
            </div>
          </div>
        </div>
        {/* CURSOR */}
        <Cursor />
        {/* /CURSOR */}
      </div>
    </Fragment>
  );
}
export default Index;