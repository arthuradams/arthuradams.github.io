$(document).ready(function(){


  console.log('Hello world');

  $("#index").on("click", function(){
      $("#core").load("intro.html");
      console.log("Imdex");
    }
  )

  $("#history").on("click", function(){
      $("#core").html("<b>History!</b>");
      console.log("History");

    }
  )


}
)
