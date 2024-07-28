import { useEffect } from 'react';
import '../index.css';
import $ from 'jquery';
export const SmoothNavBarScroll = ({}) => {
  useEffect(() => {
    
    $('a[href^="#"]').on('click', function(e) {
      e.preventDefault();
      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 70
      }, 'swing', function() {
        window.location.hash = target;
      });
    });

   
    return () => {
      $('a[href^="#"]').off('click');
    };
  }, []);
    return(
        <>
           <div className="header">
            <a href="#target1">Home</a>
            <a href="#target2">About</a>
            <a href="#target3">Gallery</a>
            <a href="#target4">Contact Us</a>
           </div>


           <div className="container">
              <div className="target" id="target1">
                <h1>Home</h1>
              </div>

              <div className="target" id="target2">
                <h1>About</h1>
              </div>

              <div className="target" id="target3">
                <h1>Gallery</h1>
              </div>

              <div className="target" id="target4">
                <h1>Contact Us</h1>
              </div>

           </div>
        
        </>
    )
}