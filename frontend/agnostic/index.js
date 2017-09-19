$.ajax({
    url: "https://data.austintexas.gov/resource/h8x4-nvyi.json",
    type: "GET",
    data: {
      "$limit" : 5000,
    }
}).done(function(data) {
  console.log(data);
});
