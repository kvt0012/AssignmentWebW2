$(window).scroll(function(){
    var bottomheader = $('.bottomheader'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) bottomheader.addClass('fixed');
    else bottomheader.removeClass('fixed');
  });

 
var myElement = document.querySelector(".thongtinsp");
var myElement2 = document.querySelector(".footWatcher");
var elementWatcher = scrollMonitor.create( myElement );
var elementWatcher2 = scrollMonitor.create( myElement2 );
var motion=anime.timeline();

var bigNews = document.querySelector(".bigNews");

elementWatcher.enterViewport(function() {
    var cd1 = anime({
        targets:'.bigNews',
        translateX: '-800px',
        duration: 500,
        ease:'easeInOutQuint',
        direction: 'reverse',
    })  
    var cd2 = anime({
        targets:'.smallNews',
        translateX: '800px',
        duration: 700,
        ease:'easeInOutQuint',
        direction: 'reverse',
        delay:200,
    })  
    var cd3 = anime({
        targets:'.smallNewsTop  ',
        translateX: '800px',
        duration: 500,
        ease:'easeInOutQuint',
        direction: 'reverse',
        delay:200
    })  
    

   
 
}); 
var k1 = document.getElementById('k1');
var k2= document.getElementById('k2');
var k1Monitor= scrollMonitor.create(k1);
var k2Monitor = scrollMonitor.create(k2);
elementWatcher2.enterViewport(function() {
    wrapCode(k1);
    wrapCode(k2);    
    console.log("da nhin thay");   
}); 
elementWatcher2.exitViewport(function() {
    wrapCode2(k1);
    wrapCode2(k2);

});
function wrapCode(wrapOutSide){
    wrapOutSide.classList.add('effect');
    var original = wrapOutSide.innerHTML;
    var newClass = "<div class='chu'>"+ original +"</div>";
    wrapOutSide.innerHTML= newClass;
    wrapOutSide.insertAdjacentHTML('beforeend','<div class="chunhat"> </div>');
    var chu = wrapOutSide.querySelector('.chu'),
        chunhat=wrapOutSide.querySelector('.chunhat');
    chunhat.style.transform ="scaleX(0)";
    chu.style.opacity="0";
    chunhat.style.transformOrigin="0% 50%";
    anime({
        targets:chunhat,
        easing:"easeInOutQuint",
        scaleX:1,
        duration:400,
        complete: function(){
            chunhat.style.transformOrigin="100% 50%";
            chu.style.opacity="1";
            anime({
                targets:chunhat,
                delay:100,
                easing:"easeInOutQuint",
                duration:400,
                scaleX:0
            });
        }
    })
}
