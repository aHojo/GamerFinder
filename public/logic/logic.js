$("#submit").on("click", function () {
    event.preventDefault();
    let answers = {
      "name": $("#name").val(),
      "photo": $("#photo").val(),
      "scores": [
          $("#q1").val(),
          $("#q2").val(),
          $("#q3").val(),
          $("#q4").val(),
          $("#q5").val(),
          $("#q6").val(),
          $("#q7").val(),
          $("#q8").val(),
          $("#q9").val(),
          $("#q10").val()
        ]
    }
    if(answers.name === ""){
      return alert("Name Required.");
    }
    if(answers.photo === ""){
      return alert("Photo Required");
    }
    if(answers.scores.indexOf("") !== -1){
      return alert("All questions required.");
    }

    $.post("/api/gamers",answers, function (data) {
      $("#match-name").text(data.name);
      $("#match-img").attr("src", data.photo);
      $("#results-modal").modal("toggle");
    });



});