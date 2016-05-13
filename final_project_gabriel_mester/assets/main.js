var username;
var cntrl = $("#remote");
var cntrl_state = false;



$("#bouton").mouseenter(function() {
    cntrl.show();
    $("#bouton").css("height" , "200px");
    $("#bouton").css( "width" , "15vw");
    $("#bouton").css( "border-radius" , "0%");
  });

$("#bouton").mouseleave(function() {
    cntrl.hide();
     $("#bouton").css("height" , "30px");
    $("#bouton").css( "width" , "30px");
       $("#bouton").css( "border-radius" , "100%");
  });



// When the user clicks the submit button, we want to save the
// username they entered, hide the form, and show the color input
$('.submit-button').click(function (e) {
  username = $('.username-input').val();

  $('.username-form').addClass('is-hidden');
  $('.color-input').removeClass('is-hidden');
});


  var audio1 = $("#soundclip-1")[0];
  var audio2 = $("#soundclip-2")[0];
  var audio3 = $("#soundclip-3")[0];
  var audio4 = $("#soundclip-4")[0];
  var audio5 = $("#soundclip-5")[0];
  var audio6 = $("#soundclip-6")[0];
  var audio7 = $("#soundclip-7")[0];
  var audio8 = $("#soundclip-8")[0];
  var audio9 = $("#soundclip-9")[0];
  var audio10 = $("#soundclip-10")[0];
  var audio11 = $("#soundclip-11")[0];
  var audio12 = $("#soundclip-12")[0];
  var audio13 = $("#soundclip-13")[0];

$('#one').click(function () {
  sendMessage(0);
  audio1.play();
  console.log("0");
});

$('#two').click(function () {
  sendMessage(1);
  audio2.play();
  console.log("1");
});

$('#three').click(function () {
  sendMessage(2);
  audio3.play();
  console.log("2");
});

$('#four').click(function () {
  sendMessage(3);
  audio4.play();
  console.log("3");
});

$('#five').click(function () {
  sendMessage(4);
  audio5.play();
  console.log("4");
});

$('#six').click(function () {
  sendMessage(5);
  audio6.play();
  console.log("5");
});

$('#seven').click(function () {
  sendMessage(6);
  audio7.play();
  console.log("6");
});

$('#eight').click(function () {
  sendMessage(7);
  audio8.play();
  console.log("7");
});

$('#nine').click(function () {
  sendMessage(8);
  audio9.play();
  console.log("8");
});

$('#ten').click(function () {
  sendMessage(9);
  audio10.play();
  console.log("9");
});

$('#eleven').click(function () {
  sendMessage(10);
  audio11.play();
  console.log("10");
});

$('#twelve').click(function () {
  sendMessage(11);
  audio12.play();
  console.log("11");
});

$('#thirteen').click(function () {
  sendMessage(12);
  console.log("12");
  $('.message').hide();
});

// This is where the magic happens!!!
// We use the Chat object's `sendMessage` function
// to actually send the message
function sendMessage(value) {
  Chat.sendMessage({
    sender: username,
    type: 'color',
    value: value
  });
};

var firstInput = null;
var firstSender = null;

// This map of color values makes it easy
// for us to interpret the messages we receive
var colorValues = {
  0: 'avatar0',
  1: 'avatar1',
  2: 'avatar2',
  3: 'avatar3',
  4: 'avatar4',
  5: 'avatar5',
  6: 'avatar6',
  7: 'avatar7',
  8: 'avatar8',
  9: 'avatar9',
  10: 'avatar10',
  11: 'avatar11',
  12: 'avatar12',
  13: 'avatar13',
};

var usersObject = {};

var all_users_received = [];

function addNewMessage(userColor, userName){
  var message = $('<div></div>');
  $(message).addClass('message');
  $(message).addId(userName);

  $(message).css("background", "linear-gradient(lightgrey," + userColor + ")");
}


Chat.onMessage(function (data) {
  // Create the message element

  for(var i = 0; i < all_users_received.length; i++){
    if(data.sender == all_users_received[i]){//if we already have this sender
      var exisiting_div = document.findElementById(data.sender);
      //REPLACE DIV
    }else{//if we never had this sender
      //CREATE NEW DIV
      addNewMessage(usersObject[data.sender], data.sender);
      all_users_received.push(data.sender);
    }
  }

            var sender = data.sender;
            var userColor = usersObject[sender];
            var colorz = ["rgb(193,182,195)", "rgb(162,255,217)", "rgb(208,55,91)","rgb(223,130,154)","rgb(172,164,172)","rgb(193,182,195)","rgb(198,231,255)","rgb(56,61,54)","rgb(222,188,216)","rgb(255,178,163)","beige","lightgrey","grey"];

          if (userColor == undefined) {
            usersObject[sender] = colorz[Math.floor(Math.random() * colorz.length)];
            userColor = usersObject[sender];
          };

      

  var message = $('<div></div>');
  $(message).addClass('message');


  $(message).css("background", "linear-gradient(white," + userColor + ")");
  console.log(data.sender);

  // Here's where we assign the color class. We use the
  // message's value to pull a color from our map of
  // colors above
  $(message).addClass(colorValues[data.value]);


  // If the message is from the current user, give it a
  // special class
  if (data.sender == username) {
    $(message).addClass('from-current-user');
  }

  // Create the label element and set its html
  // var messageLabel = $('<div></div>');
  // $(messageLabel).html(data.sender);


  $('.message-container').append(message);


      var lastInput = data.value;
      var lastSender = data.sender;

          //   var randomHeight = heightz[Math.floor(Math.random() * heightz.length)];
          // var heightz = ["40%", "50%", "70%","30%","85%"];


      // if (firstInput == lastInput) {
      if (firstInput == lastInput && !(firstSender == lastSender)) {
        console.log ("cooool");
        $('body').css("background", "linear-gradient(white," + userColor + ")");
                $('.message').css( "width" , "200px");
                $('.message').css( "height" , "200px");
                $('.message').css( "top" , "40%");
                 $('.message').css("background", "linear-gradient(white," + userColor + ")");
              

      };


      firstInput = data.value;
      firstSender = data.sender;


});

                



Chat.onUserCountChange(function (newCount) {
  var userCountElement = document.querySelector('.user-count');
  userCountElement.innerHTML = newCount;
});
