$(function(){
  $('.gift-1').click(function(e){
    $('.content').addClass('show')
    $('.bg-black').addClass('show-bg')
  })
  $('.gift-2').click(function(e){
    $('.video-mp4').addClass('show')
    $('.bg-black').addClass('show-bg')
  })
  $('.gift-3').click(function(e){
    $('.video-mp4-1').addClass('show')
    $('.bg-black').addClass('show-bg')
  })
  $('.bg-black').click(function(e){
    $(".content").removeClass('show');
    $(".video-mp4").removeClass('show');
    $(".video-mp4-1").removeClass('show');
    $(".bg-black").removeClass('show-bg');
  })
})

var vid = document.getElementById("nhac");

function playVid() {
    vid.play();
}

function pauseVid() {
    vid.pause();
}
var i = 0;
var vanBan = 'Một mùa Giáng Sinh nữa lại về, một năm mới tươi sáng hơn đang tới. Mong rằng chúng ta sẽ luôn ở bên cạnh nhau và trải qua nhiều Giáng sinh. Chúc em thật nhiều may mắn, an lành và hạnh phúc. Merry Christmas! Yêu em.';
var tocDo = 50;
function typeWriter() {
  if (i < vanBan.length) {
    document.getElementById("love").innerHTML += vanBan.charAt(i);
    i++;
    setTimeout(typeWriter, tocDo );
  }
}