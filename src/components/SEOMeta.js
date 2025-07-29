import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import SEOContext from "../contexts/SEOContext.jsx";


const SEOMeta = ({ page = "homepage" }) => {
  const { seoData, globalKeywords } = useContext(SEOContext);
  const pageSEO = seoData[page] || seoData.homepage;
  return (
    <Helmet>
      <meta name="keywords" content={globalKeywords.join(", ")} />
      <meta name="description" content={pageSEO.description} />
      <title>{pageSEO.title}</title>
    </Helmet>
  );
};

export default SEOMeta;
