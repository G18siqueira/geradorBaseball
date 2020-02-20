window.$ = window.jQuery = require('jquery');
require('owl.carousel');
import * as html2canvas from './html2canvas';




/*** HTML2CANVAS ***/
$('.btn-teste').on('click', function(e){
    e.preventDefault();
    console.log('.btn-teste');
    var imagemPrint = document.querySelector("#capture");
    html2canvas(imagemPrint,{
        scrollY: -window.scrollY,
        useCORS:true,
        ignoreElements: document.querySelector('select') 
    }).then(canvas => {
        // $('#capture').append(canvas);
        saveAs(canvas.toDataURL(), 'canvas-teste.png');
    });
    function saveAs(uri, filename) {
        var link = document.createElement('a');
        if (typeof link.download === 'string') {
            link.href = uri;
            link.download = filename;

            //Firefox requires the link to be in the body
            document.body.appendChild(link);

            //simulate click
            link.click();

            //remove the link when done
            document.body.removeChild(link);
        } else {
            window.open(uri);
        }
    }
})