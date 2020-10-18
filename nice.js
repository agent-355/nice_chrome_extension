// const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a, div');

// for (let i = 0; i < text.length; i++) {
//     if (text[i].innerHTML.includes('69') || text[i].innerHTML.includes(69)) {
//         let a = 0; //console.log('Found a 69!');
//         text[i].innerHTML = text[i].innerHTML.replace('69', '69 (NICE!)');
//     }
// }

var elementsInsideBody = [...document.body.getElementsByTagName('*')];
// This makes an array of everything inside the body tag


//a function that loops through every single item
function findAndReplace() {
    elementsInsideBody.forEach(element => {
        element.childNodes.forEach(child => {
            if (child.nodeType === 3) {
                replaceText(child);
            }
        });

    });
}

function replaceText(node) {
    let value = node.nodeValue;
    value = value.replace(/69/gi, '69 (NICE!)');
    value = value.replace(/sixty-nine/gi, 'sixty-nine (NICE!)');
    value = value.replace(/sixty nine/gi, 'sixty nine (NICE!)');
    node.nodeValue = value;
}

window.onload = findAndReplace();
