import * as React from "react";
import * as Helmet from "react-helmet";

/**
 * Generates dynamically populated `<meta>`, `<link>`, and/or `<title>` nodes in
 * the document `<head>` so that web crawlers are able to access the correct
 * metadata immediately on page load. This class is responsible for the home page
 * metadata
 * @returns {xml} The SignUpHelmet component
 */
const SignUpHelmet = () => (
  <Helmet>
    <title>TODO</title>
    <link href="TODO" rel="canonical" />
  </Helmet>
);

export default SignUpHelmet;

// TODO Convert to updated Helmet configuration
