var AdmZip = require('adm-zip');

// creating archives
var zip = new AdmZip();
zip.addLocalFile('xml/req.xml');
zip.addLocalFile('xml/ack.xml');
var willSendthis = zip.toBuffer();
zip.writeZip('zip/files.zip');

// reading archives
var zip = new AdmZip('zip/files.zip');
zip.extractAllTo('extracted', true);
