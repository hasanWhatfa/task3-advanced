import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css';
import LoaderComponent from "./LoaderComponent/LoaderComponent";

const HandleLoadingComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  useEffect(() => {
    if (!loading) {
      AOS.init();
      AOS.refresh();
    }
  }, [loading]);

  return (
    <>
      {loading ? <LoaderComponent /> : <Outlet />}
    </>
  );
};

export default HandleLoadingComponent;
