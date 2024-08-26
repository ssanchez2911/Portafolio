$(document).ready(function () {


    if ($(window).width() > 800) {


 

    $( "#banner1" ).hover(
        function() {
            $("#text1").fadeIn( 2000 );
            $("#text1").css("width", "60%");
           
            

            
          
            
            
        
        }, function() {
            $("#text1").hide();

        }
      );


    $( "#banner2" ).hover(
        function() {
            $("#text2").fadeIn( 2000 );
            
        
        }, function() {
            $("#text2").hide();

        }
      );
    


    $( "#card1" ).hover(
        function() {
            $("#t1").fadeIn( 900 );
            $("#ct1").css("color", "#ffffff");
            $("#ct1").css("font-weight", "bold");
        
        }, function() {
            $("#t1").hide();
            $("#ct1").css("color", "black");
            $("#ct1").css("font-weight", "normal"); 
        }
      );

      $( "#card2" ).hover(
        function() {
            $("#t2").fadeIn( 900 );
            $("#ct2").css("color", "#ffffff");
            $("#ct2").css("font-weight", "bold");
        
        }, function() {
            $("#t2").hide();
            $("#ct2").css("color", "black"); 
            $("#ct2").css("font-weight", "normal"); 
        }
      );

      $( "#card3" ).hover(
        function() {
            $("#t3").fadeIn( 900 );
            $("#ct3").css("color", "#ffffff");
            $("#ct3").css("font-weight", "bold");
        
        }, function() {
            $("#t3").hide();
            $("#ct3").css("color", "black");
            $("#ct3").css("font-weight", "normal");  
        }
      );

      $( "#card4" ).hover(
        function() {
            $("#t4").fadeIn( 900 );
            $("#ct4").css("color", "#ffffff");
            $("#ct4").css("font-weight", "bold");
        
        }, function() {
            $("#t4").hide();
            $("#ct4").css("color", "#ffffff");
            $("#ct4").css("font-weight", "normal");  
        }
      );

      $( "#card5" ).hover(
        function() {
            $("#t5").fadeIn( 900 );
            $("#ct5").css("color", "#ffffff");
            $("#ct5").css("font-weight", "bold");
        
        }, function() {
            $("#t5").hide();
            $("#ct5").css("color", "#ffffff");
            $("#ct5").css("font-weight", "normal");  
        }
      );



    var lastScrollTop = 0;
    $(window).scroll(function(event){
    var st = $(this).scrollTop();
    if (st > lastScrollTop){

        $("#pag1").mouseout(function () {

            $("#pag2").mouseenter(function () {
                $("nav").css("height", "10vh", 550);
                $(".img-logo").css("width", "120px", 550);
                $(".img-logo").css("height", "80px", 550);

            });

        });

        $("#pag2").mouseout(function () {

            $("#pag3").mouseenter(function () {
                $("nav").css("height", "10vh", 550);
                $(".img-logo").css("width", "120px", 550);
                $(".img-logo").css("height", "80px", 550);
            });
        });

        $("#pag3").mouseout(function () {

            $("#pag4").mouseenter(function () {
                $("nav").css("height", "10vh", 550);
                $(".img-logo").css("width", "120px", 550);
                $(".img-logo").css("height", "80px", 550);
            });
        });
       
    } else {

        $("#pag2").mouseout(function () {

            $("#pag1").mouseenter(function () {
                $("nav").css("height", "13vh", 550);
                $(".img-logo").css("width", "150px", 550);
                $(".img-logo").css("height", "100px", 550);
            });
        });
    }
    lastScrollTop = st;

    $("#pag1").mouseover(function () {


        $("nav").css("height", "13vh", 550);
        $(".img-logo").css("width", "150px", 550);
        $(".img-logo").css("height", "100px", 550);
        
            
        });
    });
    }

    else {

        
    $( "#banner1" ).hover(
        function() {
            $("#text1").fadeIn( 2000 );
            
        
        }, function() {
            $("#text1").hide();

        }
      );


    $( "#banner2" ).hover(
        function() {
            $("#text2").fadeIn( 2000 );
            
        
        }, function() {
            $("#text2").hide();

        }
      );
    


    $( "#card1" ).hover(
        function() {
            $("#t1").fadeIn( 900 );
            $("#ct1").css("color", "#ffffff");
            $("#ct1").css("font-weight", "bold");
        
        }, function() {
            $("#t1").hide();
            $("#ct1").css("color", "black");
            $("#ct1").css("font-weight", "normal"); 
        }
      );

      $( "#card2" ).hover(
        function() {
            $("#t2").fadeIn( 900 );
            $("#ct2").css("color", "#ffffff");
            $("#ct2").css("font-weight", "bold");
        
        }, function() {
            $("#t2").hide();
            $("#ct2").css("color", "black"); 
            $("#ct2").css("font-weight", "normal"); 
        }
      );

      $( "#card3" ).hover(
        function() {
            $("#t3").fadeIn( 900 );
            $("#ct3").css("color", "#ffffff");
            $("#ct3").css("font-weight", "bold");
        
        }, function() {
            $("#t3").hide();
            $("#ct3").css("color", "black");
            $("#ct3").css("font-weight", "normal");  
        }
      );

      $( "#card4" ).hover(
        function() {
            $("#t4").fadeIn( 900 );
            $("#ct4").css("color", "#ffffff");
            $("#ct4").css("font-weight", "bold");
        
        }, function() {
            $("#t4").hide();
            $("#ct4").css("color", "#ffffff");
            $("#ct4").css("font-weight", "normal");  
        }
      );

      $( "#card5" ).hover(
        function() {
            $("#t5").fadeIn( 900 );
            $("#ct5").css("color", "#ffffff");
            $("#ct5").css("font-weight", "bold");
        
        }, function() {
            $("#t5").hide();
            $("#ct5").css("color", "#ffffff");
            $("#ct5").css("font-weight", "normal");  
        }
      );



    }


});

    

    

    

       



