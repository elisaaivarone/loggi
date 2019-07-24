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
});


