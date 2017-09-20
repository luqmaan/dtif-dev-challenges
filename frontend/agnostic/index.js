$.ajax({
    url: "https://data.austintexas.gov/resource/h8x4-nvyi.json",
    type: "GET",
    data: {
      "$limit" : 5000,
    }
}).done(function(data) {
  console.log(data);
});

// TODO: replace the static data with API queried data
$.getJSON( "example.json", function( data ) {
  var items = [];
  $.each( data, function( i, dog ) {
    items.push(
      "<ul>" +
        "<li>" + dog.description_of_dog + "</li>" +
        "<li>" + "Owned by: " + dog.first_name + " " + dog.last_name + "</li>" +
        "<li>" + "Lives at: " + dog.location_address + ", " + dog.location_zip + "</li>" +
      "</ul>"
    );
  });

  $( "<div/>", {
    "class": "dog-list",
    html: items.join( "" )
  }).appendTo( ".main" );
});
