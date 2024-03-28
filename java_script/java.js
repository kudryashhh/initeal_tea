$(document).ready(function(){
   $(function(){
     $(".teapot_crishka_1").draggable();
});

});


$(document).ready(function(){
  $(".second_screen").addClass("sectionnone");
  $('#leaf1_1').click(function(){
      $(".first_screen").addClass("sectionnone");
      $(".second_screen").removeClass("sectionnone").addClass("sectionblock");

  });


  $(".cvetok1").click(function(){
    $(".first_screen").removeClass("sectionnone").addClass("sectionblock");
    $(".second_screen").addClass("sectionnone").removeClass("sectionblock");

});
});

$(document).ready(function(){
  $(function(){
    $(".cup1_1").draggable();
});
});

$(document).ready(function(){
  $(function(){
    $(".flower3_vaze").draggable();
});
});


$(document).ready(function(){
  $(function(){
    $(".cup2_1").draggable();
});

});

$(document).ready(function(){
  $(function(){
    $(".cup3_1").draggable();
});

});

$(document).ready(function(){
  $(function(){
    $(".cup4_1").draggable();
});

});

$(document).ready(function(){
  $(".third_screen").addClass("sectionnone");
  $(".leaf2_1").click(function(){
      $(".first_screen").addClass("sectionnone");
      $(".third_screen").removeClass("sectionnone").addClass("sectionblock");

  });


  $(".cvetok2").click(function(){
    $(".first_screen").removeClass("sectionnone").addClass("sectionblock");
    $(".third_screen").addClass("sectionnone").removeClass("sectionblock");

});
});


window.onload = function() {
  

  let struns = document.getElementById("struns");
  struns.addEventListener("click", (e) => {
    let strn = e.target;
    strn.classList.add("box_animate_1");
    setTimeout(() => strn.classList.remove("box_animate_1"), 2100);
  })
};

$(document).ready(function(){
  $(".fourth_screen").addClass("sectionnone");
  $(".leaf3_1").click(function(){
      $(".first_screen").addClass("sectionnone");
      $(".fourth_screen").removeClass("sectionnone").addClass("sectionblock");
  });


$(".cvetok3").click(function(){
  $(".first_screen").removeClass("sectionnone").addClass("sectionblock");
  $(".fourth_screen").addClass("sectionnone").removeClass("sectionblock");
});

});

$(document).ready(function(){
  $(function(){
    $(".flower1_vaze").draggable();
});

});

$(document).ready(function(){
  $(function(){
    $(".flower2_vaze").draggable();
});

});

setInterval (function(){
  var rand1 = Math.floor(Math.random() * 1000);
  var rand2 = Math.floor(Math.random() * 1000);
  var box = document.getElementById('box');
  var dot = document.getElementById('bee');
  if(rand1 >= box.clientWidth){
    rand1 = box.clientWidth - 10
  }
  if(rand2 >= box.clientHeight){
    rand2 = box.clientHeight - 10
  }
  dot.style.left = rand1 + 'px';
  dot.style.top = rand2 + 'px';
},1000)

$(document).ready(function(){
  $('#bee').click(function(){
    $(this).addClass("play")
});

$(function() {
    let audio = $('#bee_audio'), tile= $('#bee');

    function play()
    {
        audio[0].play();
    }
    function pause()
    {
        audio[0].pause();
    }
    tile.on('click',function(){
        $(this).is('.play') ? play() : pause()
        $(this).removeClass("play")
    })
})
})


$(document).ready(function(){
  $(".animation_1, .animation_2, .animation_3, .animation_4").click(function(){
    $(this).addClass("play")
});

$(function() {
    let audio = $('#strn1'), tile= $(".animation_1");

    function play()
    {
        audio[0].play();
    }
    function pause()
    {
        audio[0].pause();
    }
    tile.on('click',function(){
        $(this).is('.play') ? play() : pause()
        $(this).removeClass("play")
    });
});

$(function() {
  let audio = $('#strn2'), tile= $(".animation_2");

  function play()
  {
      audio[0].play();
  }
  function pause()
  {
      audio[0].pause();
  }
  tile.on('click',function(){
      $(this).is('.play') ? play() : pause()
      $(this).removeClass("play")
  });
});

$(function() {
  let audio = $('#strn3'), tile= $(".animation_3");

  function play()
  {
      audio[0].play();
  }
  function pause()
  {
      audio[0].pause();
  }
  tile.on('click',function(){
      $(this).is('.play') ? play() : pause()
      $(this).removeClass("play")
  });
});

$(function() {
  let audio = $('#strn4'), tile= $(".animation_4");

  function play()
  {
      audio[0].play();
  }
  function pause()
  {
      audio[0].pause();
  }
  tile.on('click',function(){
      $(this).is('.play') ? play() : pause()
      $(this).removeClass("play")
  })
});
});

$(document).ready(function(){
  $(".spasibo").addClass("sectionnone");
  $(".gotovo").click(function(){
      $(".soberi").addClass("sectionnone");
      $(".spasibo").removeClass("sectionnone").addClass("sectionblock");
      $(".gotovo").addClass("sectionnone")
  });
});







$(document).ready(function(){
  $(".cvetok1, .cvetok2, .cvetok3, .gotovo, #leaf1_1, .leaf2_1, .leaf3_1").click(function(){
    $(this).addClass("play")
});

$(function() {
    let audio = $('#kaplya'), tile= $(".cvetok1, .cvetok2, .cvetok3");

    function play()
    {
        audio[0].play();
    }
    function pause()
    {
        audio[0].pause();
    }
    tile.on('click',function(){
        $(this).is('.play') ? play() : pause()
        $(this).removeClass("play")
    });
});

$(function() {
  let audio = $('#kaplya2'), tile= $(".gotovo, #leaf1_1, .leaf2_1, .leaf3_1");

  function play()
  {
      audio[0].play();
  }
  function pause()
  {
      audio[0].pause();
  }
  tile.on('click',function(){
      $(this).is('.play') ? play() : pause()
      $(this).removeClass("play")
  });
});
});




