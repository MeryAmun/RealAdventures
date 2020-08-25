import React from 'react'
import $ from 'jquery'
window.$ = window.jQuery = require('jquery');

const Loader = () => {

    $(document).ready(function(){
        
        $('.navbtn').click(function(){
            $('.nave').fadeIn(3000);
        });

        $('.navbtn').click(function(){
            $('.nave').fadeOut(3000);
        });

        $('.slide').click(function(){
            $('.toggle').slideDown(3000);
        });

        $('.slide').mouseenter(function(){
            $('.toggle').slideUp(3000);
        });

     $('.nave').click(function(){
        $('.nave').fadeOut(3000);
     });

     var allQuotes = $('blockquotes');
     var currentQuote = 0;

     function changeQuote(){

         $(allQuotes[currentQuote]).fadeOut(2000, function(){

            if(currentQuote == allQuotes.length - 1){
                currentQuote = 0;
            }else{ currentQuote++;
   
            }
            $(allQuotes[currentQuote]).fadeIn(2000);


         });
        
     }
 var quoteTimer = setInterval(changeQuote, 5000);

 var allImages = $('gallery');
 var currentImage = 0;

 function changeImage(){

     $(allImages[currentImage]).fadeOut(2000, function(){

        if(currentImage == allImages.length - 1){
            currentImage = 0;
        }else{ currentImage++;

        }
        $(allImages[currentImage]).fadeIn(2000);


     });
    
 }
var ImageTimer = setInterval(changeImage, 5000);
        });
        return (
            <div></div>
        )       
}
export default  Loader

