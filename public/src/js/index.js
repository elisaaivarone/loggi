$(document).ready(function () {
  $('#enter').click(function (event) {
    event.preventDefault();
    window.location = "map.html";
  });
  $("#loggi-logo").click((e) => {
    e.preventDefault();
  })

  $("#select-region").change(function () {
    var selectedRegion = $(this).children("option:selected").val();
    changeRegion(selectedRegion)
  });

});


