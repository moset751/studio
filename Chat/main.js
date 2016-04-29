


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

if (data.value == 0) {$(".different").show();
}



if (data.value == 1) {$(".empty").show();
  $(".different").hide();}



if (data.value == 2) {$(".title2").show();
  $(".title").hide();}


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



