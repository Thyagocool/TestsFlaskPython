
$("#error").hide();


$('#initialValue').bind('keyup', function(e){
           if(e.keyCode < 47 || e.keyCode >57 ){
               alert(" Only numbers are accepted! ");
               $(this).val("");
           }
       })

$('#qtMonth').bind('keyup', function(e){
           if(e.keyCode < 47 || e.keyCode >57 ){
               alert(" Only numbers are accepted! ");
               $(this).val("");
           }
       })


$(function(){
  
    $("#formLogin").submit(function(event){
      event.preventDefault();
    });

    $("#submit").click(function(){

      var vEmail = $("#email").val();
      var vPass = $("#password").val();

      $.ajax({
        type: "POST",
        url: "https://reqres.in/api/register",
        data: { email: vEmail, password: vPass},
        dataType: 'json',
        success: function( res ){
         console.log(res.token);
         if(res.token){
          loginForm(res.token);
         }
        },
        error: function(e) {
          showMsg(e.responseJSON.error);
          var timer = setInterval(function(){
            showMsg("");
            $("#error").hide();
          }, 2500);
        
        },
      });
  
    });
  
  });


function showMsg(msg){
  $("#error").show();
  document.getElementById("error").innerHTML = msg;
}

function loginForm(token){
  if(token){
    sessionStorage.setItem("token", token);
    window.location.href = "calc.html"
  }
}

$("#calcvalues").click(function(){

    $("#calcForm").submit(function(event){
      event.preventDefault();
    });

  var vinitialValue = $("#initialValue").val();
  var vqtMonth = $("#qtMonth").val();
  var vDiv = document.getElementById("result");
  
  var arr = { initialValue: vinitialValue, qtMonth: vqtMonth };
  $.ajax({
        type: "POST",
        url: "http://127.0.0.1:5000/api/calc-interests",
        data: { initialValue: vinitialValue, qtMonth: vqtMonth },
        async: false,
        success: function( res ){
         console.log(res.FinalValue);
         $('#result').val(res.FinalValue);
         

        },
        error: function(e) {
          console.log(e);
        
        },
      });
  
});

$("#gitHub").click(function(){
  $("#calcForm").submit(function(event){
    event.preventDefault();
  });

  $.ajax({
        type: "GET",
        url: "http://127.0.0.1:5000/api/show-me-your-code",
        async: false,
        success: function( res ){
         console.log(res.url);
         window.location.href = res.url;
        },
        error: function(e) {
          console.log(e);

        
        },
      });
  
});