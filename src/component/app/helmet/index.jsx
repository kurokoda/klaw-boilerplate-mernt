import * as React from "react";
import Helmet from "react-helmet";

/**
 * Generates dynamically populated `<meta>`, `<link>`, and/or `<title>` nodes in
 * the document `<head>` so that web crawlers are able to access the correct
 * metadata immediately on page load. This class is responsible for the common
 * metadata which applies to all pages in the app.
 */

const ApplicationHelmet = () => {
  /** Sets the title node */
  const title = "TODO";

  /** Sets the meta nodes */
  const meta = [
    { charset: "utf-8" },
    {
      content: "width=device-width, initial-scale=1, shrink-to-fit=no",
      name: "viewport"
    },
    {
      content: "#000000",
      name: "theme-color"
    },
    {
      content: "IE=edge",
      httpEquiv: "X-UA-Compatible"
    },
    {
      content: "no",
      name: "apple-mobile-web-app-capable"
    },
    {
      content: "black-translucent",
      name: "apple-mobile-web-app-status-bar-style"
    },
    {
      content: "TODO",
      name: "author"
    },
    {
      content: "TODO",
      name: "og:site_name"
    },
    {
      content: "TODO",
      property: "fb:app_id"
    },
    {
      content: "TODO",
      property: "fb:pages"
    }
  ];

  /** Sets the link nodes */
  const link = [
    {
      href: "https://use.fontawesome.com/releases/v5.2.0/css/all.css",
      integrity:
        "sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ",
      rel: "stylesheet",
      type: "text/css"
    }
  ];

  return <Helmet title={title} meta={meta} link={link} />;
};

ApplicationHelmet.propTypes = {};

export default ApplicationHelmet;
