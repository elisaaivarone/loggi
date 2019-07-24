$(document).ready(function () {
  $('#enter').click(function (event) {
    event.preventDefault();
    window.location = "map.html";
  });
  $("#loggi-logo").click((e) => {
    e.preventDefault();
  })

  localStorage.setItem('center', myCenter);

  $("#select-region").change(function () {
    let selectedRegion = $(this).children("option:selected").val();
    changeRegion(selectedRegion);
    localStorage.set('center', regionsSP[regionName]);
  });
});


