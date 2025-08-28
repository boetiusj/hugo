<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" indent="yes" encoding="UTF-8"/>
  <xsl:template match="/">
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Sitemap for <xsl:value-of select="substring-before(substring-after(/sm:urlset/sm:url[1]/sm:loc,'://'),'/')"/></title>
        <style>
          body{font:16px/1.5 system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;margin:2rem}
          h1{margin:0 0 .5rem}
          ul{list-style:none;padding:0;margin:0}
          li{padding:.35rem 0;border-bottom:1px solid #eee}
          small{opacity:.7}
          a{text-decoration:none}
          a:hover{text-decoration:underline}
        </style>
      </head>
      <body>
        <h1>Sitemap</h1>
        <p><strong><xsl:value-of select="count(/sm:urlset/sm:url)"/></strong> pages</p>
        <ul>
          <xsl:for-each select="/sm:urlset/sm:url">
            <xsl:sort select="sm:lastmod" data-type="text" order="descending"/>
            <li>
              <a href="{sm:loc}"><xsl:value-of select="sm:loc"/></a>
              <xsl:if test="sm:lastmod"><small> — <xsl:value-of select="sm:lastmod"/></small></xsl:if>
            </li>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
