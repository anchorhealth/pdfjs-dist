// HACK adding DOMParser to read XMP metadata.
global.DOMParser = require('./domparsermock').DOMParserMock;

var pdfjsLib = require('./build/pdf.combined');

// Turn off warnings that print to stdout
pdfjsLib.PDFJS.verbosity = pdfjsLib.PDFJS.VERBOSITY_LEVELS.errors;

module.exports = pdfjsLib;
