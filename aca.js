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
          $("#core").fadeOut('1000');
          $("#core").hide().load(filename).fadeIn('1000');
        }
      );
    $(".portrait").hover(
      function() {
        $( this ).attr("src","img/arthur_color.png");
      }, function() {
        $( this ).attr("src","img/arthur.png");
      }
    );
  }
)
