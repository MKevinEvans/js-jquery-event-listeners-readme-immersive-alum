//define functions here
function getIt(){
  $('p').on('click', ()=>alert("Hey!"))
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass("tasty")
  })
}

function pressIt(){
  $('#typing').on('keydown', (e)=>{
    if(e.which === 71 || 103){
      alert("g pressed")
    }
  })
}

$(document).ready(function(){


});

