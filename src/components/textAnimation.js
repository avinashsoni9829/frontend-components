
import { useEffect } from 'react';
import '../index.css';
import $ from 'jquery';
export const TextAnimationComponent = ({}) => {

   useEffect(() => {
      var current = 1;
      var height = $('.roles').height();
      var noOfDiv = $('.roles').children().length;
      var first = $('.roles div:nth-child(1)');
      
      const interval = setInterval(function(){
        var num = current * -height;
        first.css('margin-top', num + 'px');
        if (current === noOfDiv) {
          first.css('margin-top', '0px');
          current = 1;
        } else {
          current++;
        }  
      }, 2000);
  
      // Cleanup function to clear the interval when the component unmounts
      return () => clearInterval(interval);
    }, []);

     return(
        <>
           <div className="wrapper">
            <div>Current Offers</div>
             <div className="roles">
                <div>Get 20% ⭐️ off on First Buy</div>
                <div>Get Free Home Delievery 🏍️</div>
                <div>Holi Sale Coming This Sunday</div>
                <div>Get Huge 😛 Discount on Bulk Orders </div>
             </div>

           </div>
        </>
     )
}