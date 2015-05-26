$(function() {
	
   $( "#b1" ).click(function() {
   $( "#slide1" ).toggleClass( "vis" );
});
	$( "#bc1" ).click(function() {
   $( "#slide1" ).removeClass( "vis" );
});
		$( "#b2" ).click(function() {
   $( "#slide2" ).toggleClass( "vis" );
});
	$( "#bc2" ).click(function() {
   $( "#slide2" ).removeClass( "vis" );
});
		$( "#b3" ).click(function() {
   $( "#slide3" ).toggleClass( "vis" );
});
	$( "#bc3" ).click(function() {
   $( "#slide3" ).removeClass( "vis" );
});
		$( "#b4" ).click(function() {
   $( "#slide4" ).toggleClass( "vis" );
});
	$( "#bc4" ).click(function() {
   $( "#slide4" ).removeClass( "vis" );
});
		$( "#b5" ).click(function() {
   $( "#slide5" ).toggleClass( "vis" );
});
	$( "#bc5" ).click(function() {
   $( "#slide5" ).removeClass( "vis" );
});
		$( "#b6" ).click(function() {
   $( "#slide6" ).toggleClass( "vis" );
});
	$( "#bc6" ).click(function() {
   $( "#slide6" ).removeClass( "vis" );
});

		$( "#allweb" ).click(function() {
   $( "#add" ).addClass( "vis" );
   $( "#allweb" ).addClass( "novis" );
   $( "#allweb2" ).removeClass( "novis" );
   
});
	$( "#allweb2" ).click(function() {
   $( "#add" ).removeClass( "vis" );
   $( "#allweb" ).removeClass( "novis" );
   $( "#allweb2" ).addClass( "novis" );
});

});

function isEmail(email) {
         // регулярное вырожение для проверки введенного адреса
         var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
         return regex.test(email);
      }
      
      function completeInviteForm() {
         setTimeout(function() { $("#completeform").fadeOut(400, function(){
            $.ajax({ 
                type: 'POST', 
                 url: 'form.php',  
                 data: 'email='+$("#email").val(),  
                 success: function(){  
                 $('#completeform').before('<div class="subsc"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Подписаны</div>');}
                });
         });
         }, 1100);
      }
      
      var erdiv    = $("#error");
      var btnwrap  = $("#btnwrap");
      
      
      $(document).ready(function(){
         $("#sendbtn").on("click", function(e){
            // После нажатия на кнопку отменяем стандартное поведение браузера
            // и создаем переменную
            e.preventDefault();
            var emailval = $("#email").val();
            
            
            if(!isEmail(emailval)) {
               $( "#email" ).addClass( "error" );
            }
            
            if(isEmail(emailval)) {
               (completeInviteForm(), 900);
            }
         });
      });

function isEmail3(email3) {
         // регулярное вырожение для проверки введенного адреса
         var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
         return regex.test(email3);
      }
      
      function completeInviteForm3() {
         setTimeout(function() { $("#completeform3").fadeOut(400, function(){
            $.ajax({ 
                type: 'POST', 
                 url: 'form3.php',  
                 data: 'email3='+$("#email3").val()+'&name3='+$("#name3").val()+'&phone3='+$("#phone3").val(),  
                 success: function(){  
                 $('#completeform3').before('<div class="subsc3"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Подписаны</div>');}
                });
         });
         }, 1100);
      }
      
      var erdiv    = $("#error3");
      var btnwrap  = $("#btnwrap3");
      
      
      $(document).ready(function(){
         $("#sendbtn3").on("click", function(e){
            // После нажатия на кнопку отменяем стандартное поведение браузера
            // и создаем переменную
            e.preventDefault();
            var emailval = $("#email3").val();
            
            
            if(!isEmail(emailval)) {
               $( "#email3" ).addClass( "error" );
            }
            
            if(isEmail(emailval)) {
               (completeInviteForm(), 900);
            }
         });
      });
