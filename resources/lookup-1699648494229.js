(function(window, undefined) {
  var dictionary = {
    "44b12c26-7b72-4358-a936-5cf7b988d540": "DetalleElemento",
    "0d9062e1-4c86-4813-b947-02bf8894e457": "Resultados",
    "74e6202c-8dc7-4857-9704-85db376d237c": "Ajustes",
    "c5a59da6-d0dd-4f31-b78b-dc2c8a6a4641": "BuscadorIA",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Principal",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);