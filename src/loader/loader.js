import React from 'react'
import $ from 'jquery'
window.$ = window.jQuery = require('jquery');

const Loader = () => {

    $(document).ready(function(){
        
        $('.slide').click(function(){
            $('.toggle').slideDown(2000);
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
        });
        return (
            <div></div>
        )       
}
export default  Loader

