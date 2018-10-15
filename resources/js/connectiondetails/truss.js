$(document).ready(function(){

	

    $(".noteHover").hover(function(){
    $('.showNote').show();
    },function(){
        $('.showNote').hide();
    });

    
			
			//End Truss Connection Type Main Optons 
         $(function(){
            $("#eNDConnectiontype").change(function(){
                if($('#eNDConnectiontype').val()=='directlyW'){
                     $(".weldedconnection").show();
                     $(".boltedconnection").hide();
					 $(".Clipangleclass").hide();
					 $(".shearplateclass").hide();
					 $(".endplateclass").hide();
                     
                }
                else if($('#eNDConnectiontype').val()=='directlyB'){
                    $(".weldedconnection").hide();
                    $(".boltedconnection").show();
					$(".Clipangleclass").hide();
					$(".shearplateclass").hide();
					 $(".endplateclass").hide();
                   
                }
				 else if($('#eNDConnectiontype').val()=='ClipAngle'){
                    $(".weldedconnection").hide();
                    $(".boltedconnection").hide();
					$(".Clipangleclass").show();
					$(".shearplateclass").hide();
					 $(".endplateclass").hide();
                   
                }
				else if($('#eNDConnectiontype').val()=='shearplate'){
                    $(".weldedconnection").hide();
                    $(".boltedconnection").hide();
					$(".Clipangleclass").hide();
					$(".shearplateclass").show();
					 $(".endplateclass").hide();
                   
                }
				else if($('#eNDConnectiontype').val()=='endplate'){
                    $(".weldedconnection").hide();
                    $(".boltedconnection").hide();
					$(".Clipangleclass").hide();
					$(".shearplateclass").hide();
					 $(".endplateclass").show();
                   
                }
                
            });
        });
		
		
		
		//Diagonals Truss Connection Type Main Optons 
         $(function(){
            $("#diagonalConnectiontype").change(function(){
                if($('#diagonalConnectiontype').val()=='diagonaldirectlyW'){
                     $(".diagonalwelded").show();
                     $(".diagonalwbolted").hide();
					 $(".diagonalgussetplate").hide();
					
                }
                else if($('#diagonalConnectiontype').val()=='diagonaldirectlyB'){
                    $(".diagonalwelded").hide();
                    $(".diagonalwbolted").show();
					$(".diagonalgussetplate").hide();
					 
                }
				 else if($('#diagonalConnectiontype').val()=='GussetPlate'){
                    $(".diagonalwelded").hide();
                    $(".diagonalwbolted").hide();
					$(".diagonalgussetplate").show();
					
                }
				
            });
        });
		
		//Truss Splice Type Main Optons 
         $(function(){
            $("#spliceConnectiontype").change(function(){
                if($('#spliceConnectiontype').val()=='Directly Welded'){
                     $(".swelded").show();
                     $(".splate").hide();
					
                }
                else if($('#spliceConnectiontype').val()=='Splice Plate'){
                    $(".swelded").hide();
                    $(".splate").show();
				}
                
            });
        });
		
		//Truss Splice plate- combinations LEFT and Right 

        $(function(){

            $(".hideAll").hide();

            $("#ddlLSide, #ddlRSide").change( function(){

                if($('#ddlLSide').val()=='Field Bolted' && $('#ddlRSide').val()=='Field Bolted' || $('#ddlLSide').val()=='Shop Bolted' && $('#ddlRSide').val()=='rSideSB' || $('#ddlLSide').val()=='Field Bolted' && $('#ddlRSide').val()=='rSideSB' || $('#ddlLSide').val()=='Shop Bolted' && $('#ddlRSide').val()=='Field Bolted'  )
                {
                    $(".boltedBoltedConnection").show();
                    $(".weldedWeldedConnection").hide();
                     $(".boltedWelded").hide();
                }

                else if($('#ddlLSide').val()=='Field Welded' && $('#ddlRSide').val()=='Field Welded' || $('#ddlLSide').val()=='Field Welded' && $('#ddlRSide').val()=='Shop Welded' || $('#ddlLSide').val()=='Shop Welded' && $('#ddlRSide').val()=='Field Welded' || $('#ddlLSide').val()=='Shop Welded' && $('#ddlRSide').val()=='Shop Welded'  )
                {
                    $(".boltedBoltedConnection").hide();
                    $(".boltedWelded").hide();
                    $(".weldedWeldedConnection").show();
                }

                else if($('#ddlLSide').val()=='Field Bolted' && $('#ddlRSide').val()=='Field Welded' || $('#ddlLSide').val()=='Field Bolted' && $('#ddlRSide').val()=='Shop Welded' || $('#ddlLSide').val()=='Shop Welded' && $('#ddlRSide').val()=='Field Welded' || $('#ddlLSide').val()=='Shop Bolted' && $('#ddlRSide').val()=='Shop Welded' || $('#ddlLSide').val()=='Field Welded' && $('#ddlRSide').val()=='Field Bolted' || $('#ddlLSide').val()=='Field Welded' && $('#ddlRSide').val()=='Shop Bolted' || $('#ddlLSide').val()=='Shop Welded' && $('#ddlRSide').val()=='Field Bolted' || $('#ddlLSide').val()=='Shop Welded' && $('#ddlRSide').val()=='Shop Bolted')
                {
                    $(".boltedBoltedConnection").show();
                    $(".boltedWelded").show();
                    $(".weldedWeldedConnection").hide();
                }

                

            });
        });

		
		
		
		

		
		//Clip Angle Method
         $(function(){
			 
            $("#ClipAngleMethod").change(function(){
                if($('#ClipAngleMethod').val()=='Field Welded'){
                     $(".fieldwelded").hide();
                     $(".fieldbolted").show();
					
                     
                }
                else if($('#ClipAngleMethod').val()=='Shop Welded'){
                    $(".fieldwelded").show();
                    $(".fieldbolted").hide();
					
                   
                }
				
                
            });
        });
		
		//shearplate Method
         $(function(){
			 
            $("#shearClipAngleMethod").change(function(){
                if($('#shearClipAngleMethod').val()=='shearfieldB'){
                     $(".shearfieldwelded").hide();
                     $(".shearfieldbolted").show();
					
                     
                }
                else if($('#shearClipAngleMethod').val()=='shearfieldW'){
                    $(".shearfieldwelded").show();
                    $(".shearfieldbolted").hide();
					
                   
                }
				
                
            });
        });
		
		
		//endplate Method
         $(function(){
			 
            $("#endClipAngleMethod").change(function(){
                if($('#endClipAngleMethod').val()=='endfieldB'){
                     $(".endfieldwelded").hide();
                     $(".endfieldbolted").show();
					
                     
                }
                else if($('#endClipAngleMethod').val()=='endfieldW'){
                    $(".endfieldwelded").show();
                    $(".endfieldbolted").hide();
					
                   
                }
				
                
            });
        });
		
		
		//Trusses Diagonal shop bolted,shop welded
         $(function(){
			 
            $("#diagonalcomthd").change(function(){
                if($('#diagonalcomthd').val()=='diashopbolted'){
                     $(".diashopbolted").show();
                     $(".diashopwelded").hide();
					
                     
                }
                else if($('#diagonalcomthd').val()=='diashopwelded'){
                    $(".diashopbolted").hide();
                    $(".diashopwelded").show();
					
                   
                }
				
                
            });
        });
		
		
		//Trusses Diagonal show only W selected
         $(function(){
			 
            $("#diagonalProfile").change(function(){
                if($('#diagonalProfile').val()=='diagonalW'){
                     $(".diagonalW").show();
                     $(".diagonalWT").hide();
					 $(".diagonalL").hide();
                     $(".diagonal2L").hide();
					 $(".diagonalHSS").hide();
                     
                }
                else if($('#diagonalProfile').val()=='diagonalWT'){
                     $(".diagonalW").hide();
                     $(".diagonalWT").hide();
					 $(".diagonalL").hide();
                     $(".diagonal2L").hide();
					 $(".diagonalHSS").hide();
                     
                }
				else if($('#diagonalProfile').val()=='diagonalL'){
                     $(".diagonalW").hide();
                     $(".diagonalWT").hide();
					 $(".diagonalL").hide();
                     $(".diagonal2L").hide();
					 $(".diagonalHSS").hide();
                }
				else if($('#diagonalProfile').val()=='diagonal2L'){
                     $(".diagonalW").hide();
                     $(".diagonalWT").hide();
					 $(".diagonalL").hide();
                     $(".diagonal2L").hide();
					 $(".diagonalHSS").hide();
                }
				else if($('#diagonalProfile').val()=='diagonalHSS'){
                     $(".diagonalW").hide();
                     $(".diagonalWT").hide();
					 $(".diagonalL").hide();
                     $(".diagonal2L").hide();
					 $(".diagonalHSS").hide();
                }
				
                
            });
        });
		
		
		  
		
		
			
		$(function(){
			$("#ddlcjp").change( function(){
				if($('#ddlcjp').val()=='grey') { 
					 $("#thisdisable").prop("disabled", true);
				}
				else {  
				   $("#thisdisable").prop("disabled", false);
				}                
			});
		});
		
		$(function(){
			$("#ddlcjp1").change( function(){
				if($('#ddlcjp1').val()=='grey1') { 
					 $("#thisdisable1").prop("disabled", true);
				}
				else {  
				   $("#thisdisable1").prop("disabled", false);
				}                
			});
		});
		
		$(function(){
			$("#ddlcjp2").change( function(){
				if($('#ddlcjp2').val()=='grey2') { 
					 $("#thisdisable2").prop("disabled", true);
				}
				else {  
				   $("#thisdisable2").prop("disabled", false);
				}                
			});
		});
		$(function(){
			$("#ddlcjp3").change( function(){
				if($('#ddlcjp3').val()=='grey3') { 
					 $("#thisdisable3").prop("disabled", true);
				}
				else {  
				   $("#thisdisable3").prop("disabled", false);
				}                
			});
		});
		$(function(){
			$("#ddlcjp4").change( function(){
				if($('#ddlcjp4').val()=='grey4') { 
					 $("#thisdisable4").prop("disabled", true);
				}
				else {  
				   $("#thisdisable4").prop("disabled", false);
				}                
			});
		});
        $(function(){
			$("#ddlcjp5").change( function(){
				if($('#ddlcjp5').val()=='grey5') { 
					 $("#thisdisable5").prop("disabled", true);
				}
				else {  
				   $("#thisdisable5").prop("disabled", false);
				}                
			});
		}); 
		
		$(function(){
			$("#ddlcjp6").change( function(){
				if($('#ddlcjp6').val()=='grey6') { 
					 $("#thisdisable6").prop("disabled", true);
				}
				else {  
				   $("#thisdisable6").prop("disabled", false);
				}                
			});
		}); 
		$(function(){
			$("#ddlcjp7").change( function(){
				if($('#ddlcjp7').val()=='grey7') { 
					 $("#thisdisable7").prop("disabled", true);
				}
				else {  
				   $("#thisdisable7").prop("disabled", false);
				}                
			});
		});
		$(function(){
			$("#ddlcjp8").change( function(){
				if($('#ddlcjp8').val()=='grey8') { 
					 $("#thisdisable8").prop("disabled", true);
				}
				else {  
				   $("#thisdisable8").prop("disabled", false);
				}                
			});
		});
		 
		 
   

    //Table Selection
    $(".cci-select").on('click',function(){
        $("table tbody").find('input[name="selectAll"]').each(function(){
            if($(this).is(":checked")){
                $(this).parents("tr").css({
                    "background": "#f5f9fd",
                    "color": "#414146"
                });
            }
            else {
                $(this).parents("tr").css({
                    "background": "#ffffff",
                    "color": ""
                });
            }
        });
    });
    $(".cci-all").on('click',function(){
        $("table tbody").find('input[name="selectAll"]').each(function(){
            if($(this).is(":checked")){
                $(this).parents("tr").css({
                    "background": "#f5f9fd",
                    "color": "#414146"
                });
            }
            else {
                $(this).parents("tr").css({
                    "background": "#ffffff",
                    "color": ""
                });
            }
        });
    });

    //Cancel Right edit bar
    $(".cancelRFB").on('click', function(){
        $(".memtype-rightedit").hide();
    });

    function resize() {
        var screenheight = window.innerHeight;
        var offset = document.getElementById('header').offsetHeight;
        total = (Number(screenheight) - Number(offset) );
        document.getElementById("add-new-value").style.height = (total + "px" );
    }
    resize();
    window.onresize = function() {
        resize();
    };
});