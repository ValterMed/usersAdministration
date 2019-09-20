function searchCoincidence() {
  event.preventDefault();
  let word = $(".word-js").val();
  (word != "") ? sendWord(word) : false;
}

function sendWord(word) {
  $.ajax({
    url: `/users/search?word=${word}`,
    method: 'GET',
    success: function(response) {
      var results = response.data_found;
      $(".table-content").html(results);
    },
    error: function() {
      console.log("Error");
    }
  });
}