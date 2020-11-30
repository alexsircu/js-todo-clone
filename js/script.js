$(document).ready(
  function() {

    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);

    $('input').keypress(function(event){
      if (event.which == 13) {
        var userText = $("input").val();

        var context = {
          list : userText
        };
        var html = template(context);
        $(".test").append(html);
      }
    });

    $(document).on( "click", ".delete",
      function() {
        $(this).parent().remove();
      }
    );
  }
);
