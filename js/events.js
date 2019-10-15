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
    if(e.which === 71){
      alert("g pressed")
    }
  })
}

function submitIt(){
  $('')
}

$(document).ready(function(){


});

