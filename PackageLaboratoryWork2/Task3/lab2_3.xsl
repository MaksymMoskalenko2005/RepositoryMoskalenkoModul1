<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" encoding="UTF-8" indent="yes" />
    <xsl:template match="/">
        <html>
            <head>
                <title>Студентський квиток</title>
                <link rel="stylesheet" type="text/css" href="lab2_3.css" />
            </head>
            <body>
                <div class="card">
                    <xsl:apply-templates select="card/university" />
                    <xsl:apply-templates select="card/info" />
                </div>
            </body>
        </html>
    </xsl:template>
    <xsl:template match="university">
        <div class="university">
            <xsl:value-of select="." />
        </div>
    </xsl:template>
    <xsl:template match="info">
        <div class="info">
            <div class="name"><xsl:value-of select="name" /></div>
            <div class="faculty"><xsl:value-of select="faculty" /></div>
            <div class="serial"><xsl:value-of select="serial" /></div>
            <div class="issued"><xsl:value-of select="issued" /></div>
            <div class="valid"><xsl:value-of select="valid" /></div>
            <div class="group"><xsl:value-of select="group" /></div>
            <div class="rector"><xsl:value-of select="rector" /></div>
        </div>
    </xsl:template>
</xsl:stylesheet>