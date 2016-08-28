$(document).ready(function(){

    $("#core").load("intro.html");

    $(".menuitem").on("click", function(){

        var id = this.id;

        var filename = id.concat(".html");

        $("#core").load(filename);
      }
    )

    // $("#history").on("click", function(){
    //     $("#core").html("history.html");
    //   }
    // )


}
)
