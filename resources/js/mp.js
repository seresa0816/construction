
        $(document).ready(function() {
            // builtup's
			$("#wsp").hide();
            $(function(){
                $("#ddlbuiltup1").change( function(){
                    if($('#ddlbuiltup1').val()=='dw'){
                        $("#dw").show();
                        $("#wsp").hide();
                        $("#singlewsp").hide();                    
                    }
                    else if($('#ddlbuiltup1').val()=='wsp'){
                         $("#dw").hide();
                        $("#wsp").show();
                        $("#singlewsp").show();
                    }                    
                });
            });
            $(function(){
                $("#eddlbuiltup1").change( function(){
                    if($('#eddlbuiltup1').val()=='edw'){
                        $("#edw").show();
                        $("#ewsp").hide();
                        $("#esinglewsp").hide();                    
                    }
                    else if($('#eddlbuiltup1').val()=='ewsp'){
                         $("#edw").hide();
                        $("#ewsp").show();
                        $("#esinglewsp").show();
                    }                    
                });
            });
            // hide scroll wrapper
          function setHeight() {
            windowHeight = $(window).innerHeight();
            // $('#expandCanvas').css('min-height', windowHeight);
            $('#expandCanvas') .css({'height': (($(window).height()) - 140)+'px'});
          };
          setHeight();
          
          $(window).resize(function() {
            setHeight(); 
          });
        });
        $(document).ready(function() {
          function setHeight() {
            windowHeight = $(window).innerHeight();
            // $('#expandCanvas').css('min-height', windowHeight);
            $('.rightFloat') .css({'height': (($(window).height()) - 140)+'px'});
          };
          setHeight();
          
          $(window).resize(function() {
            setHeight();
          });
        });


        jQuery(document).ready(function() {

            // show sub-menu
            $('.boxColumn').mouseover(function() {
                $('#shapes').show();
            });
            $('.boxColumn').mouseleave(function(){
                $('#shapes').hide();
            });
            
            // Button Click off for icon menu
            $("#items > li").click(function(){
            $("#op").text("You have selected "+$(this).text());
            });

            $('#main-propertyColumn').on('click', function() { 
              $(this).disabled('onclick'); 
            });

            $('#main-propertyBeam').on('click', function() { 
              $(this).disabled('onclick'); 
            });

            $('#main-propertyTrusses').on('click', function() { 
              $(this).disabled('onclick'); 
            });

            $('#main-propertyBuiltup').on('click', function() { 
              $(this).disabled('onclick'); 
            });

            //Multi select dropdown
            /*$(".chosen-select").chosen({
                no_results_text: "Oops, nothing found!"
                  
            });*/
            $(".slide-rightbar.right").on('click', function(){
                $(".right").hide();
                $(".left").show();
                $(".editperipheral .rightFloat").hide();
            });
            $(".slide-rightbar.left").on('click', function(){
                $(".left").hide();
                $(".right").show();
                $(".editperipheral .rightFloat").show();
            });
            $(".editcolumn .right").on('click', function(){
                $(".right").hide();
                $(".left").show();
                $(".editcolumn .rightFloat").hide();
            });
            $(".editcolumn .left").on('click', function(){
                $(".left").hide();
                $(".right").show();
                $(".editcolumn .rightFloat").show();
            });
            $(".editPostColumn .right").on('click', function(){
                $(".right").hide();
                $(".left").show();
                $(".editPostColumn .rightFloat").hide();
            });
            $(".editPostColumn .left").on('click', function(){
                $(".left").hide();
                $(".right").show();
                $(".editPostColumn .rightFloat").show();
            });
            $(".editHbrace .right").on('click', function(){
                $(".right").hide();
                $(".left").show();
                $(".editHbrace .rightFloat").hide();
            });
            $(".editHbrace .left").on('click', function(){
                $(".left").hide();
                $(".right").show();
                $(".editHbrace .rightFloat").show();
            });
            $(".editVbrace .right").on('click', function(){
                $(".right").hide();
                $(".left").show();
                $(".editVbrace .rightFloat").hide();
            });
            $(".editVbrace .left").on('click', function(){
                $(".left").hide();
                $(".right").show();
                $(".editVbrace .rightFloat").show();
            });
            $(".editPourstop .right").on('click', function(){
                $(".right").hide();
                $(".left").show();
                $(".editPourstop .rightFloat").hide();
            });
            $(".editPourstop .left").on('click', function(){
                $(".left").hide();
                $(".right").show();
                $(".editPourstop .rightFloat").show();
            });
            $(".editPlategirder .right").on('click', function(){
                $(".right").hide();
                $(".left").show();
                $(".editPlategirder .rightFloat").hide();
            });
            $(".editPlategirder .left").on('click', function(){
                $(".left").hide();
                $(".right").show();
                $(".editPlategirder .rightFloat").show();
            });
            $(".editBoxcolumn .right").on('click', function(){
                $(".right").hide();
                $(".left").show();
                $(".editBoxcolumn .rightFloat").hide();
            });
            $(".editBoxcolumn .left").on('click', function(){
                $(".left").hide();
                $(".right").show();
                $(".editBoxcolumn .rightFloat").show();
            });
            $(".editBuiltup2 .right").on('click', function(){
                $(".right").hide();
                $(".left").show();
                $(".editBuiltup2 .rightFloat").hide();
            });
            $(".editBuiltup2 .left").on('click', function(){
                $(".left").hide();
                $(".right").show();
                $(".editBuiltup2 .rightFloat").show();
            });
            $(".editBuiltup3 .right").on('click', function(){
                $(".right").hide();
                $(".left").show();
                $(".editBuiltup3 .rightFloat").hide();
            });
            $(".editBuiltup3 .left").on('click', function(){
                $(".left").hide();
                $(".right").show();
                $(".editBuiltup3 .rightFloat").show();
            });
            $(".editBuiltup4 .right").on('click', function(){
                $(".right").hide();
                $(".left").show();
                $(".editBuiltup4 .rightFloat").hide();
            });
            $(".editBuiltup4 .left").on('click', function(){
                $(".left").hide();
                $(".right").show();
                $(".editBuiltup4 .rightFloat").show();
            });
			$(".editBuiltup4 .right").on('click', function(){
                $(".right").hide();
                $(".left").show();
                $(".editBuiltup4 .rightFloat").hide();
            });
            $(".editBuiltup4 .left").on('click', function(){
                $(".left").hide();
                $(".right").show();
                $(".editBuiltup4 .rightFloat").show();
            });
			
			$(".editinfill.right").on('click', function(){
                $(".right").hide();
                $(".left").show();
                $(".editinfill .rightFloat").hide();
            });
            $(".editinfill .left").on('click', function(){
                $(".left").hide();
                $(".right").show();
                $(".editinfill .rightFloat").show();
            });

            // Edit FM -column
            $(".ecsplice1").hide();
            $(".ecsplice2").hide();
            $(function(){
                $("#ecsplicecount").change( function(){
                    if($('#ecsplicecount').val()=='ecsc0'){
                        $(".ecsplice1").hide();
                        $(".ecsplice2").hide();
                    }
                    else if($('#ecsplicecount').val()=='ecsc1'){
                        $(".ecsplice1").show();
                        $(".ecsplice2").hide();
                    }
                    else if ($('#ecsplicecount').val()=='ecsc2'){
                        $(".ecsplice1").show();
                        $(".ecsplice2").show();
                    }
                });
            });           

            // splice count -columnmodal
            $(".splice1").hide();
            $(".splice2").hide();
            $(function(){
                $("#splicecount").change( function(){
                    if($('#splicecount').val()=='sc0'){
                        $(".splice1").hide();
                        $(".splice2").hide();
                    }
                    else if($('#splicecount').val()=='sc1'){
                        $(".splice1").show();
                        $(".splice2").hide();
                    }
                    else if ($('#splicecount').val()=='sc2'){
                        $(".splice1").show();
                        $(".splice2").show();
                    }
                });
            });
			// splice count -built-up1 modal
			$(".b1splice1").hide();
            $(".b1splice2").hide();
            $(function(){
                $("#b1splicecount").change( function(){
                    if($('#b1splicecount').val()=='b1sc0'){
                        $(".b1splice1").hide();
                        $(".b1splice2").hide();
                    }
                    else if($('#b1splicecount').val()=='b1sc1'){
                        $(".b1splice1").show();
                        $(".b1splice2").hide();
                    }
                    else if ($('#b1splicecount').val()=='b1sc2'){
                        $(".b1splice1").show();
                        $(".b1splice2").show();
                    }
                });
            });
			
			// splice count -built-up2 modal
            $(".boxsplice1").hide();
            $(".boxsplice2").hide();
            $(function(){
                $("#boxsplicecount").change( function(){
                    if($('#boxsplicecount').val()=='box0'){
                        $(".boxsplice1").hide();
                        $(".boxsplice2").hide();
                    }
                    else if($('#boxsplicecount').val()=='box1'){
                        $(".boxsplice1").show();
                        $(".boxsplice2").hide();
                    }
                    else if ($('#boxsplicecount').val()=='box2'){
                        $(".boxsplice1").show();
                        $(".boxsplice2").show();
                    }
                });
            });

            // splice count - built-up3 modal
            $(function(){
                $("#b3splicecount").change( function(){
                    if($('#b3splicecount').val()=='b3sc0'){
                        $(".b3splice1").hide();
                        $(".b3splice2").hide();
                    }
                    else if($('#b3splicecount').val()=='b3sc1'){
                        $(".b3splice1").show();
                        $(".b3splice2").hide();
                    }
                    else if ($('#b3splicecount').val()=='b3sc2'){
                        $(".b3splice1").show();
                        $(".b3splice2").show();
                    }
                });
            });
             // splice count - boxmodal
            $("#boxProfile1").hide();
            $(".c4boxsplice2").hide();
            $("#boxProfile2").hide();
            $(".c4boxsplice1").hide();
            $(function(){
                $("#c4boxsplicecount").change( function(){
                    if($('#c4boxsplicecount').val()=='c4box0'){
                        $(".c4boxsplice1").hide();
                        $("#boxProfile1").hide();
                        $(".c4boxsplice2").hide();
                        $("#boxProfile2").hide();
                        $("#Boxdiag2").hide();

                    }
                    else if($('#c4boxsplicecount').val()=='c4box1'){
                        $(".c4boxsplice1").show();
                        $("#boxProfile1").show();
                        $(".c4boxsplice2").hide();
                        $("#boxProfile2").hide();
                        $("#Boxdiag2").show();
                    }
                    else if ($('#c4boxsplicecount').val()=='c4box2'){
                        $(".c4boxsplice1").show();
                        $("#boxProfile1").show();
                        $(".c4boxsplice2").show();
                        $("#boxProfile2").show();
                        $("#Boxdiag2").show();
                    }
                });
            });
            // splice count - editBoxmodal
            
            $(function(){
                $("#ec4boxsplicecount").change( function(){
                    if($('#ec4boxsplicecount').val()=='ec4box0'){
                        $(".ec4boxsplice1").hide();
                        $("#eboxProfile1").hide();
                        
                        $(".ec4boxsplice2").hide();
                        $("#eboxProfile2").hide();
                        $("#eBdiag2").hide();
                    }
                    else if($('#ec4boxsplicecount').val()=='ec4box1'){
                        $(".ec4boxsplice1").show();
                        $("#eboxProfile1").show();
                        $(".ec4boxsplice2").hide();
                        $("#eboxProfile2").hide();
                        $("#eBdiag2").show();
                    }
                    else if ($('#ec4boxsplicecount').val()=='ec4box2'){
                        $(".ec4boxsplice1").show();
                        $("#eboxProfile1").show();
                        $(".ec4boxsplice2").show();
                        $("#eboxProfile2").show();
                        $("#eBdiag2").show();
                    }
                });
            });
            // splice count -editBuiltup2(I) modal
            $(".isplice1").hide();
            $(".isplice2").hide();
            $(function(){
                $("#isplicecount").change( function(){
                    if($('#isplicecount').val()=='i0'){
                        $(".isplice1").hide();
                        $(".isplice2").hide();
                    }
                    else if($('#isplicecount').val()=='i1'){
                        $(".isplice1").show();
                        $(".isplice2").hide();
                    }
                    else if ($('#isplicecount').val()=='i2'){
                        $(".isplice1").show();
                        $(".isplice2").show();
                    }
                });
            });
            // splice count -editBuiltup3(X) modal
            $(".sXsplice1").hide();
            $(".sXsplice2").hide();
            $(function(){
                $("#cXsplicecount").change( function(){
                    if($('#cXsplicecount').val()=='sX0'){
                        $(".sXsplice1").hide();
                        $(".sXsplice2").hide();
                    }
                    else if($('#cXsplicecount').val()=='sX1'){
                        $(".sXsplice1").show();
                        $(".sXsplice2").hide();
                    }
                    else if ($('#cXsplicecount').val()=='sX2'){
                        $(".sXsplice1").show();
                        $(".sXsplice2").show();
                    }
                });
            });
            // splice count -editBuiltup4(Channel) modal
            $(function(){
                $("#chsplicecount").change( function(){
                    if($('#chsplicecount').val()=='ch0'){
                        $(".chsplice1").hide();
                        $(".chsplice2").hide();
                    }
                    else if($('#chsplicecount').val()=='ch1'){
                        $(".chsplice1").show();
                        $(".chsplice2").hide();
                    }
                    else if ($('#chsplicecount').val()=='ch2'){
                        $(".chsplice1").show();
                        $(".chsplice2").show();
                    }
                });
            });
            // splice count - editcolumn
            $(function(){
                $("#esplicecount").change( function(){
                    if($('#esplicecount').val()=='esc0'){
                        $(".esplice1").hide();
                        $(".esplice2").hide();
                    }
                    else if($('#esplicecount').val()=='esc1'){
                        $(".esplice1").show();
                        $(".esplice2").hide();
                    }
                    else if ($('#esplicecount').val()=='esc2'){
                        $(".esplice1").show();
                        $(".esplice2").show();
                    }
                });
            });
            //PourStop Material
            $(".showBent").hide();
            $(function(){
                $("#psMaterial").change( function(){
                    if($('#psMaterial').val()=='valA'){
                        $(".showAngle").show();
                        $(".showBent").hide();
                    }
                    else if ($('#psMaterial').val()=='valB'){
                        $(".showAngle").hide();
                        $(".showBent").show();
                    }
                });
            });
            //editPourStop Material
            $(".eshowBent").hide();
            $(function(){
                $("#epsMaterial").change( function(){
                    if($('#epsMaterial').val()=='evalA'){
                        $(".eshowAngle").show();
                        $(".eshowBent").hide();
                    }
                    else if ($('#epsMaterial').val()=='evalB'){
                        $(".eshowAngle").hide();
                        $(".eshowBent").show();
                    }
                });
            });

			// splice count pit
            $(".pitXsplice1").hide();
            $(".pitXsplice2").hide();
            $(function(){
                $("#pitsplicecount").change( function(){
                    if($('#pitsplicecount').val()=='pitX0'){
                        $(".pitXsplice1").hide();
                        $(".pitXsplice2").hide();
                    }
                    else if($('#pitsplicecount').val()=='pitX1'){
                        $(".pitXsplice1").show();
                        $(".pitXsplice2").hide();
                    }
                    else if ($('#pitsplicecount').val()=='pitX2'){
                        $(".pitXsplice1").show();
                        $(".pitXsplice2").show();
                    }
                });
            });
			
            $(".tpitXsplice1").hide();
            $(".tpitXsplice2").hide();
            $(function(){
                $("#tpitsplicecount").change( function(){
                    if($('#tpitsplicecount').val()=='tpitX0'){
                        $(".tpitXsplice1").hide();
                        $(".tpitXsplice2").hide();
                    }
                    else if($('#tpitsplicecount').val()=='tpitX1'){
                        $(".tpitXsplice1").show();
                        $(".tpitXsplice2").hide();
                    }
                    else if ($('#tpitsplicecount').val()=='tpitX2'){
                        $(".tpitXsplice1").show();
                        $(".tpitXsplice2").show();
                    }
                });
            });
            // Spacing b/w Verticals Pitched-Trusses
            $(".pshowtv1").hide();
            $(".pshowtv2").hide();
            $(function(){
                $("#pt1verticals").change( function(){
                    if($('#pt1verticals').val()=='ptES'){
                        $(".pshowtv1").hide();
                        $(".pshowtv2").hide();
                    }
                    else if($('#pt1verticals').val()=='ptUE'){
                        $(".pshowtv1").show();
                        $(".pshowtv2").hide();
                    }
                });
            });
            $(function(){
                $("#pverticalnum").change( function(){
                    if($('#pverticalnum').val()=='ptv1'){
                        $(".pshowtv1").show();
                        $(".pshowtv2").hide();
                    }
                    else if($('#pverticalnum').val()=='ptv2'){
                        $(".pshowtv1").show();
                        $(".pshowtv2").show();
                    }
                });
            });
			// splice count tra
            $(".traXsplice1").hide();
            $(".traXsplice2").hide();
            $(function(){
                $("#tracXsplicecount").change( function(){
                    if($('#tracXsplicecount').val()=='traX0'){
                        $(".traXsplice1").hide();
                        $(".traXsplice2").hide();
                    }
                    else if($('#tracXsplicecount').val()=='traX1'){
                        $(".traXsplice1").show();
                        $(".traXsplice2").hide();
                    }
                    else if ($('#tracXsplicecount').val()=='traX2'){
                        $(".traXsplice1").show();
                        $(".traXsplice2").show();
                    }
                });
            });
            //Trapizol Spacing b/w Verticals
            $(".t2trashowtv1").hide();
            $(".t2trashowtv2").hide();
            $(function(){
                $("#tra1verticals").change( function(){
                    if($('#tra1verticals').val()=='tra2ES'){
                        $(".trashowtv1").hide();
                        $(".trashowtv2").hide();
                    }
                    else if($('#tra1verticals').val()=='tra2UE'){
                        $(".trashowtv1").show();
                        $(".trashowtv2").hide();
                    }
                });
            });
            $(function(){
                $("#t2verticalnumt1").change( function(){
                    if($('#t2verticalnumt1').val()=='t2tratv1'){
                        $(".t2trashowtv1").show();
                        $(".t2trashowtv2").hide();
                    }
                    else if($('#t2verticalnumt1').val()=='t2tratv2'){
                        $(".t2trashowtv1").show();
                        $(".t2trashowtv2").show();
                    }
                });
            });
			// splice count infill
            $(".infillXsplice1").hide();
            $(".infillXsplice2").hide();
            $(function(){
                $("#infillcXsplicecount").change( function(){
                    if($('#infillcXsplicecount').val()=='infillX0'){
                        $(".sXsplice1").hide();
                        $(".sXsplice2").hide();
                    }
                    else if($('#infillcXsplicecount').val()=='infillX1'){
                        $(".infillXsplice1").show();
                        $(".infillXsplice2").hide();
                    }
                    else if ($('#tracXsplicecount').val()=='infillX2'){
                        $(".infillXsplice1").show();
                        $(".infillXsplice2").show();
                    }
                });
            });
            // splice count Trusses1
            $(".chordXsplice1").hide();
            $(".chordXsplice2").hide();
            $(function(){
                $("#chordcXsplicecount").change( function(){
                    if($('#chordcXsplicecount').val()=='chordX0'){
                        $(".chordXsplice1").hide();
                        $(".chordXsplice2").hide();
                    }
                    else if($('#chordcXsplicecount').val()=='chordX1'){
                        $(".chordXsplice1").show();
                        $(".chordXsplice2").hide();
                    }
                    else if ($('#chordcXsplicecount').val()=='chordX2'){
                        $(".chordXsplice1").show();
                        $(".chordXsplice2").show();
                    }
                });
            });
            // Spacing b/w Verticals Trusses1
            $(".showtv1").hide();
            $(".showtv2").hide();
            $(function(){
                $("#t1verticals").change( function(){
                    if($('#t1verticals').val()=='t1ES'){
                        $(".showtv1").hide();
                        $(".showtv2").hide();
                    }
                    else if($('#t1verticals').val()=='t1UE'){
                        $(".showtv1").show();
                        $(".showtv2").hide();
                    }
                });
            });
            $(function(){
                $("#verticalnumt1").change( function(){
                    if($('#verticalnumt1').val()=='tv1'){
                        $(".showtv1").show();
                        $(".showtv2").hide();
                    }
                    else if($('#verticalnumt1').val()=='tv2'){
                        $(".showtv1").show();
                        $(".showtv2").show();
                    }
                });
            });
            // infill position
            $(".inXsplice2").hide();
            $(function(){
                $("#incXsplicecount").change( function(){
                    if($('#incXsplicecount').val()=='inX1'){
                        $(".inXsplice1").show();
                        $(".inXsplice2").hide();
                    }
                    else if ($('#incXsplicecount').val()=='inX2'){
                        $(".inXsplice1").show();
                        $(".inXsplice2").show();
                    }
                });
            });
			
			//Infill position
         $(function(){
            $("#ESConnectiontype").change(function(){
                if($('#ESConnectiontype').val()=='ES'){
                     $(".fieldsFW").show();
                     $(".fieldsFB").hide();
                     $(".inXsplice1").hide();
                     $(".inXsplice2").hide();
                }
                else if($('#ESConnectiontype').val()=='UES'){
                    $(".fieldsFW").hide();
                    $(".fieldsFB").show();
                    $(".inXsplice1").show();
                }
                
            });
        });

         //editPourStop Weld/Bolt details
        $(".eshowpsbolt").hide();
            $(function(){
                $("#epousrstopWB").change( function(){
                    if($('#epousrstopWB').val()=='epsWelded'){
                        $(".eshowpsweld").show();
                        $(".eshowpsbolt").hide();
                    }
                    else if($('#epousrstopWB').val()=='epsBolted'){
                        $(".eshowpsbolt").show();
                        $(".eshowpsweld").hide();
                    }
                });
            });
            $(function(){
            $("#epsWeldtype").change(function(){
                if($('#epsWeldtype').val()=='eweldtype1'){
                     $(".ehidewt2").show();
                }
                else 
                    $(".ehidewt2").hide();
                    
            });
        });

        //PourStop Weld/Bolt details
        $(".showpsbolt").hide();
            $(function(){
                $("#pousrstopWB").change( function(){
                    if($('#pousrstopWB').val()=='psWelded'){
                        $(".showpsweld").show();
                        $(".showpsbolt").hide();
                    }
                    else if($('#pousrstopWB').val()=='psBolted'){
                        $(".showpsbolt").show();
                        $(".showpsweld").hide();
                    }
                });
            });

        $(function(){
            $("#psWeldtype").change(function(){
                if($('#psWeldtype').val()=='weldtype1'){
                     $(".hidewt2").show();
                }
                else 
                    $(".hidewt2").hide();
                    
            });
        });
		
		
		
		
		
		
		
		
		
		
		
		
            // Connection details - Pitched Models
			$(".pshape2").hide();
			$(".pshape3").hide();
			$(".pshape4").hide();
			$(".pshape5").hide();
			$(".pshape6").hide();
            $(function(){
                $("#pshapes").change(function(){
                    if($('#pbshapes').val()=='pfs'){
                        $(".pshape1").show();
                        $(".pshape2").hide();
                        $(".pshape3").hide();
                        $(".pshape4").hide();
                        $(".pshape5").hide();
                        $(".pshape6").hide();
                        
                    }
                    else if($('#pshapes').val()=='pbs'){
                        $(".pshape1").hide();
                        $(".pshape2").show();
                        $(".pshape3").hide();
                        $(".pshape4").hide();
                        $(".pshape5").hide();
                        $(".pshape6").hide();
                    }
                    else if($('#pshapes').val()=='pas'){
                        $(".pshape1").hide();
                        $(".pshape2").hide();
                        $(".pshape3").show();
                        $(".pshape4").hide();
                        $(".pshape5").hide();
                        $(".pshape6").hide();
                    }
                    else if($('#pshapes').val()=='pvs'){
                        $(".pshape1").hide();
                        $(".pshape2").hide();
                        $(".pshape3").hide();
                        $(".pshape4").show();
                        $(".pshape5").hide();
                        $(".pshape6").hide();
                    }
                    else if($('#pshapes').val()=='pxs'){
                        $(".pshape1").hide();
                        $(".pshape2").hide();
                        $(".pshape3").hide();
                        $(".pshape4").hide();
                        $(".pshape5").show();
                        $(".pshape6").hide();
                    }
                    else if($('#pshapes').val()=='pws'){
                        $(".pshape1").hide();
                        $(".pshape2").hide();
                        $(".pshape3").hide();
                        $(".pshape4").hide();
                        $(".pshape5").hide();
                        $(".pshape6").show();
                    }
                    
                });
            });
			
			
			
			
			
			
			
			 // Connection details - trapezoidal Models
			$(".trashape2").hide();
			$(".trashape3").hide();
			$(".trashape4").hide();
			$(".trashape5").hide();
			$(".trashape6").hide();
            $(function(){
                $("#trashapes").change(function(){
                    if($('#pbshapes').val()=='trafs'){
                        $(".trashape1").show();
                        $(".trashape2").hide();
                        $(".trashape3").hide();
                        $(".trashape4").hide();
                        $(".trashape5").hide();
                        $(".trashape6").hide();
                        
                    }
                    else if($('#trashapes').val()=='trabs'){
                        $(".trashape1").hide();
                        $(".trashape2").show();
                        $(".trashape3").hide();
                        $(".trashape4").hide();
                        $(".trashape5").hide();
                        $(".trashape6").hide();
                    }
                    else if($('#trashapes').val()=='traas'){
                        $(".trashape1").hide();
                        $(".trashape2").hide();
                        $(".trashape3").show();
                        $(".trashape4").hide();
                        $(".trashape5").hide();
                        $(".trashape6").hide();
                    }
                    else if($('#trashapes').val()=='travs'){
                        $(".trashape1").hide();
                        $(".trashape2").hide();
                        $(".trashape3").hide();
                        $(".trashape4").show();
                        $(".trashape5").hide();
                        $(".trashape6").hide();
                    }
                    else if($('#trashapes').val()=='traxs'){
                        $(".trashape1").hide();
                        $(".trashape2").hide();
                        $(".trashape3").hide();
                        $(".trashape4").hide();
                        $(".trashape5").show();
                        $(".trashape6").hide();
                    }
                    else if($('#trashapes').val()=='traws'){
                        $(".trashape1").hide();
                        $(".trashape2").hide();
                        $(".trashape3").hide();
                        $(".trashape4").hide();
                        $(".trashape5").hide();
                        $(".trashape6").show();
                    }
                    
                });
            });
			
			
           
        
		
			
            // Connection details - Hbrace
            $(function(){
                $("#hbshapes").change( function(){
                    if($('#hbshapes').val()=='hfs'){
                        $(".Hshape1").show();
                        $(".Hshape2").hide();
                        $(".Hshape3").hide();
                        $(".Hshape4").hide();
                        $(".Hshape5").hide();
                        $(".Hshape6").hide();
                        
                    }
                    else if($('#hbshapes').val()=='hbs'){
                        $(".Hshape1").hide();
                        $(".Hshape2").show();
                        $(".Hshape3").hide();
                        $(".Hshape4").hide();
                        $(".Hshape5").hide();
                        $(".Hshape6").hide();
                    }
                    else if($('#hbshapes').val()=='has'){
                        $(".Hshape1").hide();
                        $(".Hshape2").hide();
                        $(".Hshape3").show();
                        $(".Hshape4").hide();
                        $(".Hshape5").hide();
                        $(".Hshape6").hide();
                    }
                    else if($('#hbshapes').val()=='hvs'){
                        $(".Hshape1").hide();
                        $(".Hshape2").hide();
                        $(".Hshape3").hide();
                        $(".Hshape4").show();
                        $(".Hshape5").hide();
                        $(".Hshape6").hide();
                    }
                    else if($('#hbshapes').val()=='hxs'){
                        $(".Hshape1").hide();
                        $(".Hshape2").hide();
                        $(".Hshape3").hide();
                        $(".Hshape4").hide();
                        $(".Hshape5").show();
                        $(".Hshape6").hide();
                    }
                    else if($('#hbshapes').val()=='hws'){
                        $(".Hshape1").hide();
                        $(".Hshape2").hide();
                        $(".Hshape3").hide();
                        $(".Hshape4").hide();
                        $(".Hshape5").hide();
                        $(".Hshape6").show();
                    }
                    
                });
            });

            $(function(){
                $("#ehbshapes").change( function(){
                    if($('#ehbshapes').val()=='ehfs'){
                        $(".Hshape1").show();
                        $(".Hshape2").hide();
                        $(".Hshape3").hide();
                        $(".Hshape4").hide();
                        $(".Hshape5").hide();
                        $(".Hshape6").hide();
                        
                    }
                    else if($('#ehbshapes').val()=='ehbs'){
                        $(".Hshape1").hide();
                        $(".Hshape2").show();
                        $(".Hshape3").hide();
                        $(".Hshape4").hide();
                        $(".Hshape5").hide();
                        $(".Hshape6").hide();
                    }
                    else if($('#ehbshapes').val()=='ehas'){
                        $(".Hshape1").hide();
                        $(".Hshape2").hide();
                        $(".Hshape3").show();
                        $(".Hshape4").hide();
                        $(".Hshape5").hide();
                        $(".Hshape6").hide();
                    }
                    else if($('#ehbshapes').val()=='ehvs'){
                        $(".Hshape1").hide();
                        $(".Hshape2").hide();
                        $(".Hshape3").hide();
                        $(".Hshape4").show();
                        $(".Hshape5").hide();
                        $(".Hshape6").hide();
                    }
                    else if($('#ehbshapes').val()=='ehxs'){
                        $(".Hshape1").hide();
                        $(".Hshape2").hide();
                        $(".Hshape3").hide();
                        $(".Hshape4").hide();
                        $(".Hshape5").show();
                        $(".Hshape6").hide();
                    }
                    else if($('#ehbshapes').val()=='ehws'){
                        $(".Hshape1").hide();
                        $(".Hshape2").hide();
                        $(".Hshape3").hide();
                        $(".Hshape4").hide();
                        $(".Hshape5").hide();
                        $(".Hshape6").show();
                    }
                    
                });
            });

            // Connection details - Vbrace
			$(".Vshape2").hide();
			$(".Vshape3").hide();
			$(".Vshape4").hide();
			$(".Vshape5").hide();
			$(".Vshape6").hide();
            $(function(){
                $("#vbshapes").change(function(){
                    if($('#vbshapes').val()=='vfs'){
                        $(".Vshape1").show();
                        $(".Vshape2").hide();
                        $(".Vshape3").hide();
                        $(".Vshape4").hide();
                        $(".Vshape5").hide();
                        $(".Vshape6").hide();
                        
                    }
                    else if($('#vbshapes').val()=='vbs'){
                        $(".Vshape1").hide();
                        $(".Vshape2").show();
                        $(".Vshape3").hide();
                        $(".Vshape4").hide();
                        $(".Vshape5").hide();
                        $(".Vshape6").hide();
                    }
                    else if($('#vbshapes').val()=='vas'){
                        $(".Vshape1").hide();
                        $(".Vshape2").hide();
                        $(".Vshape3").show();
                        $(".Vshape4").hide();
                        $(".Vshape5").hide();
                        $(".Vshape6").hide();
                    }
                    else if($('#vbshapes').val()=='vvs'){
                        $(".Vshape1").hide();
                        $(".Vshape2").hide();
                        $(".Vshape3").hide();
                        $(".Vshape4").show();
                        $(".Vshape5").hide();
                        $(".Vshape6").hide();
                    }
                    else if($('#vbshapes').val()=='vxs'){
                        $(".Vshape1").hide();
                        $(".Vshape2").hide();
                        $(".Vshape3").hide();
                        $(".Vshape4").hide();
                        $(".Vshape5").show();
                        $(".Vshape6").hide();
                    }
                    else if($('#vbshapes').val()=='vws'){
                        $(".Vshape1").hide();
                        $(".Vshape2").hide();
                        $(".Vshape3").hide();
                        $(".Vshape4").hide();
                        $(".Vshape5").hide();
                        $(".Vshape6").show();
                    }
                    
                });
            });
            $(function(){
                $("#evbshapes").change(function(){
                    if($('#evbshapes').val()=='evfs'){
                        $(".Vshape1").show();
                        $(".Vshape2").hide();
                        $(".Vshape3").hide();
                        $(".Vshape4").hide();
                        $(".Vshape5").hide();
                        $(".Vshape6").hide();
                        
                    }
                    else if($('#evbshapes').val()=='evbs'){
                        $(".Vshape1").hide();
                        $(".Vshape2").show();
                        $(".Vshape3").hide();
                        $(".Vshape4").hide();
                        $(".Vshape5").hide();
                        $(".Vshape6").hide();
                    }
                    else if($('#evbshapes').val()=='evas'){
                        $(".Vshape1").hide();
                        $(".Vshape2").hide();
                        $(".Vshape3").show();
                        $(".Vshape4").hide();
                        $(".Vshape5").hide();
                        $(".Vshape6").hide();
                    }
                    else if($('#evbshapes').val()=='evvs'){
                        $(".Vshape1").hide();
                        $(".Vshape2").hide();
                        $(".Vshape3").hide();
                        $(".Vshape4").show();
                        $(".Vshape5").hide();
                        $(".Vshape6").hide();
                    }
                    else if($('#evbshapes').val()=='evxs'){
                        $(".Vshape1").hide();
                        $(".Vshape2").hide();
                        $(".Vshape3").hide();
                        $(".Vshape4").hide();
                        $(".Vshape5").show();
                        $(".Vshape6").hide();
                    }
                    else if($('#evbshapes').val()=='evws'){
                        $(".Vshape1").hide();
                        $(".Vshape2").hide();
                        $(".Vshape3").hide();
                        $(".Vshape4").hide();
                        $(".Vshape5").hide();
                        $(".Vshape6").show();
                    }
                    
                });
            });
        });
		
		
		
		
		


function showContent(selectObject) {
    // selectObject is a select element which is passed by using "this" argument
    // didn't check for value or object, so it is not flexible
    var selectedIndex = selectObject.selectedIndex;
    var tmpElem
    // skip the 0 index because it has no associated block to display
    for (var i=1; i<selectObject.options.length; i++) {
      tmpElem = document.getElementById(selectObject.options[i].value);
      if (i==selectedIndex) {  // show the element
        tmpElem.className = tmpElem.className.replace("hideContent", "showContent")
      }
      else {  // hide it
        tmpElem.className = tmpElem.className.replace("showContent", "hideContent")
      }
    }
  }


    