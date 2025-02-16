<?php
$xml = new DOMDocument;
$xml->load('lab2_3.xml'); 

$xsl = new DOMDocument;
$xsl->load('lab2_3.xsl'); 

$proc = new XSLTProcessor;
$proc->importStylesheet($xsl);
echo $proc->transformToXML($xml);