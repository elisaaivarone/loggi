$(document).ready(function () {
  console.log('oi')
  $('#enter').click(function (event) {
    event.preventDefault();
    window.location = "map.html";
  });
  $("#loggi-logo").click((e) => {
    e.preventDefault();
    console.log('olar')
  })

  
$('#wrapper ul li #collapseTwo .bg-white .collapse-header li a').click(function(e){
  if(this.target.val() == "centro") {
    e.preventDefault();
    alert("oi")
  };
});

});


