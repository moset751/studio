$('document').ready(function() {

     // We need to duplicate the whole body of the website so if you scroll down you can see both the bottom and the top at the same time. Before we do this we need to know the original height of the website.
     var origDocHeight = document.body.offsetHeight;

     // now we know the height we can duplicate the body    
     $("body").contents().clone().appendTo("body");


     $(document).scroll(function(){ // detect scrolling

         var scrollWindowPos = $(document).scrollTop(); // store how far we have scrolled

         if(scrollWindowPos >= origDocHeight ) { // if we scrolled further then the original doc height
             $(document).scrollTop(0); // then scroll to the top
         }       
     });

 });







var scale = 1,
    gestureArea = document.getElementById('gesture-area'),
    scaleElement = document.getElementById('scale-element'),
    resetTimeout;

interact(gestureArea)
  .gesturable({
    onstart: function (event) {
      clearTimeout(resetTimeout);
      scaleElement.classList.remove('reset');
    },
    onmove: function (event) {
      scale = scale * (1 + event.ds);

      scaleElement.style.webkitTransform =
      scaleElement.style.transform =
        'scale(' + scale + ')';

      dragMoveListener(event);
    },
    onend: function (event) {
      resetTimeout = setTimeout(reset, 1000);
      scaleElement.classList.add('reset');
    }
  })
  .draggable({ onmove: dragMoveListener });

function reset () {
  scale = 1;
  scaleElement.style.webkitTransform =
  scaleElement.style.transform =
    'scale(1)';
}


