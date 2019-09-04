var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var cow = text;

            if (text.includes('Happiness')) {
                cow = text.replace(/Happiness/gi, 'Cow Palace');
            } else if (text.includes('happiness')) {
                cow = text.replace(/happiness/gi, 'Cow Palace');
            } else if (text.includes('HAPPINESS')) {
                cow = text.replace(/HAPPINESS/gi, 'Cow Palace');
            }
            if (cow !== text) {
                element.replaceChild(document.createTextNode(cow), node);
            } 
        }
    }
}