$(document).ready(function(){

    var prev_id, id, filename;

    $("#intro").addClass( "active" );
    $("#core").load("intro.html");
    id = "intro";
    
    $(".menuitem").on("click", function(){
          prev_id = id;
          $("#".concat(prev_id)).removeClass( "active" );
          id = this.id;
          $("#".concat(id)).addClass( "active" );
          filename = id.concat(".html");
          $("#core").load(filename);
        }
      )
  }
)
