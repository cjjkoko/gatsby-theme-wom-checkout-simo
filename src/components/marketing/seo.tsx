/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

// @ts-ignore
import React from "react"
import { Helmet } from "react-helmet"

function SEO({ description, lang, meta, title }) {
  return <Helmet/>
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}



export default SEO
