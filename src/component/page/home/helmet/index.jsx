import * as React from "react";
import * as Helmet from "react-helmet";

/**
 * Generates dynamically populated `<meta>`, `<link>`, and/or `<title>` nodes in
 * the document `<head>` so that web crawlers are able to access the correct
 * metadata immediately on page load. This class is responsible for the home page
 * metadata
 * @returns {xml} The HomeHelmet component
 */
const HomeHelmet = () => (
  <Helmet>
    <title>TODO</title>
    <link href="TODO" rel="canonical" />
  </Helmet>
);

export default HomeHelmet;

// TODO Convert to updated Helmet configuration
