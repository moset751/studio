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







var messageContainer = document.querySelectorAll('.messages')[0];
var addLink = document.querySelectorAll('.click')[0];

addLink.addEventListener('click', function () {
  var value = Math.floor(Math.random() * 13);

  Chat.sendMessage({
    sender: 'Tamir',
    type: 'raw',
    value: value
  });
});



Chat.onMessage(function (data) {


   if (data.sender == 'Tamir') {
    return
  }

console.log(data.value)




if (data.value == 0) {$(".empty").show();
  $(".different").hide();}

if (data.value == 1) {$(".work61").show();
 $(".work6").hide();}



 if (data.value == 2) {$(".work6").show();
  $(".work61").hide();}


if (data.value == 3) {$(".work1").show();
  $(".work11").hide();}

if (data.value == 4) {$(".work2").show();
  $(".work21").hide();}

if (data.value == 5) {$(".work3").show();
  $(".work31").hide();}



  if (data.value == 6) {$(".work4").show();
  $(".work41").hide();}



  if (data.value == 7) {$(".work5").show();
  $(".work51").hide();}




    if (data.value == 8) {$(".work11").show();
  $(".work1").hide();}




   if (data.value == 9) {$(".work21").show();
  $(".work2").hide();}


   if (data.value == 10) {$(".work31").show();
  $(".work3").hide();}


if (data.value == 11) {$(".work41").show();
  $(".work4").hide();}



  if (data.value == 12) {$(".work51").show();
  $(".work5").hide();}


})



Chat.onUserCountChange(function (newCount) {
  var userCountElement = document.querySelector('.user-count');
  userCountElement.innerHTML = newCount;
});


var selected = null, // Object of the element to be moved
    x_pos = 0, y_pos = 0, // Stores x & y coordinates of the mouse pointer
    x_elem = 0, y_elem = 0; // Stores top, left values (edge) of the element

// Will be called when user starts dragging an element
function _drag_init(elem) {
    // Store the object of the element which needs to be moved
    selected = elem;
    x_elem = x_pos - selected.offsetLeft;
    y_elem = y_pos - selected.offsetTop;
}

// Will be called when user dragging an element
function _move_elem(e) {
    x_pos = document.all ? window.event.clientX : e.pageX;
    y_pos = document.all ? window.event.clientY : e.pageY;
    if (selected !== null) {
        selected.style.left = (x_pos - x_elem) + 'px';
        selected.style.top = (y_pos - y_elem) + 'px';
    }
}

// Destroy the object when we are done
function _destroy() {
    selected = null;
}

// Bind the functions...
document.getElementById('draggable-element').onmousedown = function () {
    _drag_init(this);
    return true;
};

document.onmousemove = _move_elem;
document.onmouseup = _destroy;




var selected = null, // Object of the element to be moved
    x_pos = 0, y_pos = 0, // Stores x & y coordinates of the mouse pointer
    x_elem = 0, y_elem = 0; // Stores top, left values (edge) of the element

// Will be called when user starts dragging an element
function _drag_init(elem) {
    // Store the object of the element which needs to be moved
    selected = elem;
    x_elem = x_pos - selected.offsetLeft;
    y_elem = y_pos - selected.offsetTop;
}

// Will be called when user dragging an element
function _move_elem(e) {
    x_pos = document.all ? window.event.clientX : e.pageX;
    y_pos = document.all ? window.event.clientY : e.pageY;
    if (selected !== null) {
        selected.style.left = (x_pos - x_elem) + 'px';
        selected.style.top = (y_pos - y_elem) + 'px';
    }
}

// Destroy the object when we are done
function _destroy() {
    selected = null;
}

// Bind the functions...
document.getElementById('draggable-element').onmousedown = function () {
    _drag_init(this);
    return true;
};

document.onmousemove = _move_elem;
document.onmouseup = _destroy;



var selected = null, // Object of the element to be moved
    x_pos = 0, y_pos = 0, // Stores x & y coordinates of the mouse pointer
    x_elem = 0, y_elem = 0; // Stores top, left values (edge) of the element

// Will be called when user starts dragging an element
function _drag_init(elem) {
    // Store the object of the element which needs to be moved
    selected = elem;
    x_elem = x_pos - selected.offsetLeft;
    y_elem = y_pos - selected.offsetTop;
}

// Will be called when user dragging an element
function _move_elem(e) {
    x_pos = document.all ? window.event.clientX : e.pageX;
    y_pos = document.all ? window.event.clientY : e.pageY;
    if (selected !== null) {
        selected.style.left = (x_pos - x_elem) + 'px';
        selected.style.top = (y_pos - y_elem) + 'px';
    }
}

// Destroy the object when we are done
function _destroy() {
    selected = null;
}

// Bind the functions...
document.getElementById('different').onmousedown = function () {
    _drag_init(this);
    return true;
};

document.onmousemove = _move_elem;
document.onmouseup = _destroy;






var selected = null, // Object of the element to be moved
    x_pos = 0, y_pos = 0, // Stores x & y coordinates of the mouse pointer
    x_elem = 0, y_elem = 0; // Stores top, left values (edge) of the element

// Will be called when user starts dragging an element
function _drag_init(elem) {
    // Store the object of the element which needs to be moved
    selected = elem;
    x_elem = x_pos - selected.offsetLeft;
    y_elem = y_pos - selected.offsetTop;
}

// Will be called when user dragging an element
function _move_elem(e) {
    x_pos = document.all ? window.event.clientX : e.pageX;
    y_pos = document.all ? window.event.clientY : e.pageY;
    if (selected !== null) {
        selected.style.left = (x_pos - x_elem) + 'px';
        selected.style.top = (y_pos - y_elem) + 'px';
    }
}

// Destroy the object when we are done
function _destroy() {
    selected = null;
}

// Bind the functions...
document.getElementById('different').onmousedown = function () {
    _drag_init(this);
    return true;
};

document.onmousemove = _move_elem;
document.onmouseup = _destroy;


function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};



$(window).scroll(debounce(function() {
var value = Math.floor(Math.random() * 13);

  Chat.sendMessage({
    sender: 'Tamir',
    type: 'raw',
    value: value
  });
}, 100,true));


