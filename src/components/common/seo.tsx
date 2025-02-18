import { env } from "@/config/env";
import { Analytics } from "@vercel/analytics/react";

type SEOProps = {
 title: string;
 description?: string;
 keywords: string;
 image: string;
};

const SEO = ({ title, description, keywords, image }: SEOProps) => {
 return (
  <>
   <meta
    name="description"
    property="description"
    content={description}
    key="desc"
   />
   <meta
    name="keywords"
    property="keywords"
    content={keywords}
    key="keywords"
   />
   <meta name="og:title" property="og:title" content={title} />
   <meta
    name="og:description"
    property="og:description"
    content={description}
   />
   <meta name="og:image" property="og:image" content={image} />
   <meta name="og:image:width" property="og:image:width" content="1920" />
   <meta name="og:image:height" property="og:image:height" content="1080" />
   <meta name="og:url" property="og:url" content={`${env.PUBLIC_URL}`} />
   <meta
    name="og:site_name"
    property="og:site_name"
    content="www.maymiquy.cloud"
   />
   <meta name="og:type" property="og:type" content="website" />
   <meta name="og:locale" property="og:locale" content="en-US" />
   <meta name="twitter:card" property="twitter:card" content="summary" />
   <meta name="twitter:title" property="twitter:title" content={title} />
   <meta
    name="twitter:description"
    property="twitter:description"
    content={description}
   />
   <meta name="twitter:image" property="twitter:image" content={image} />
   <meta
    name="twitter:image:width"
    property="twitter:image:width"
    content="1920"
   />
   <meta
    name="twitter:image:height"
    property="twitter:image:height"
    content="1080"
   />
   <meta name="robots" property="robots" content="index, follow" />
   <meta
    name="googlebot"
    property="googlebot"
    content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
   />
   <link rel="shorcut icon" href="/favicon.png" />
   <Analytics />
  </>
 );
};

export default SEO;
