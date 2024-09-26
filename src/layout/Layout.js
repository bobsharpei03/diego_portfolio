import { Fragment, useEffect, useState } from "react";
import CopyRight from "../components/CopyRight";
import ImageView from "../components/popup/ImageView";
import VideoPopup from "../components/popup/VideoPopup";
import Cursor from "./Cursor";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import PreLoader from "./PreLoader";
import Progressbar from "./Progressbar";
import {aTagClick, dataImage, fatchData, scrollTop, scroll_, stickyNav, wowJsAnimation} from "../utilits";

const Layout = ({ children, dark} ) => {
  const [siteInfo, setSiteInfo] = useState({});
  useEffect( async () => {
    setSiteInfo( await fatchData("/static/siteSetting.json"));
    dataImage();
  }, []);
  useEffect(() => {
    wowJsAnimation();
    aTagClick();
    window.addEventListener("scroll", scroll_);
    window.addEventListener("scroll", stickyNav);
    window.addEventListener("scroll", scrollTop);
  }, []);
/*
  if(typeof Node === 'function' && Node.prototype) {
    const originalRemoveChild = Node.prototype.removeChild;
    Node.prototype.removeChild = function(child) {
      if (child.parentNode !== this) {
        if (console) {
          console.error('Cannot remove a child from a different parent', child, this);
        }
        return child;
      }
      return originalRemoveChild.apply(this, arguments);
    }  
    const originalInsertBefore = Node.prototype.insertBefore;
    Node.prototype.insertBefore = function(newNode, referenceNode) {
      if (referenceNode && referenceNode.parentNode !== this) {
        if (console) {
          console.error('Cannot insert before a reference node from a different parent', referenceNode, this);
        }
        return newNode;
      }
      return originalInsertBefore.apply(this, arguments);
    }
  }*/
  return (
    <Fragment>
      <PreLoader />
      <ImageView />
      <VideoPopup />     
      <div className="dizme_tm_all_wrap" data-magic-cursor="show">
        <MobileMenu logo={siteInfo && siteInfo.logo && siteInfo.logo[dark ? "dark" : "light"]}/>
        {/*<MobileMenu logo={siteInfo && siteInfo.logo && siteInfo.logo[light ? "light" : "light"]}/>*/}
        <Header logo={siteInfo && siteInfo.logo && siteInfo.logo[dark ? "dark" : "light"]}/>
        {/*<Header logo={siteInfo && siteInfo.logo && siteInfo.logo[light ? "light" : "light"]}/>*/}
             {children}          
        <CopyRight brandName={siteInfo && siteInfo.brandName} />
        <Cursor />
        <Progressbar />
      </div>     
    </Fragment>  
  );  
};
export default Layout;