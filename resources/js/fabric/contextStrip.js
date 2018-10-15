/**
 * 
 */
     
$.contextMenu({
        selector: '.context-menu-one', 
        build: function($trigger, e) {
          
            return {
                callback: function(key, options) {
                    process(key, options)
             
                },
                items: loadContextMenuItems()
            };
        }
    });
     	

    var count=0;
function process(key, options) {
                    var m = "clicked: " + key;
                    console.log(m);
               // on Clicking of COntext Menu Dialog to open
                    if(key=="editColumn"){
                    	//$('#columnModal').show();
                    		//	$('#columnModal').modal('show'); 
                    	
                    
                      
                    }
                    else if(key=="editBeam"){
                    //	$("#beamModal").show();
                    	
                    }
}



function loadContextMenuItems(){
    
    var ActiveObj = canvas.getActiveObject();
            
    if (!ActiveObj && typeof ActiveObj == 'undefined' ){

        console.log("default");
              return  {
                    "refresh": {name: "Refresh", icon: ""}
                }

    }
         else {   
                         
               console.log(ActiveObj);
               // For Multy select
                if (typeof ActiveObj._objects !='undefined'){
                    console.log("multiselect");
                        for (var obj in ActiveObj._objects){

                             var selObj = ActiveObj._objects[obj];                   
                              var DtaStruObj = memberList.filter(function( obj ) {
                              return obj.id == selObj.id;
                            });
                            

                            DtaStruObj[0].profile=$('#BeamProfileTxt').val();
                            DtaStruObj[0].materialGrade=$('#BeamGradeTxt').val();
                            DtaStruObj[0].class=$('#BeamClassTxt').val();
                           
                        }
                    }
                    // For Individual
                else{
                    console.log("multiselect");
                    
                      var DataStruObj = memberList.filter(function( obj ) {
                              return obj.id == ActiveObj.id;
                            });
                    console.log(DataStruObj);
                    if (DataStruObj[0].type=="Beam"){
                            return  {
                                "Inquire": {name: "Inquire", icon: ""},
                                "editBeam": {name: "Edit Beam", icon: "edit"},
                                "deleteBeam": {name: "Delete Beam", icon: "delete"},
                            
                            }                        
                    }
                   else if (DataStruObj[0].type=="Column"){
                            return  {
                                "Inquire": {name: "Inquire", icon: ""},
                                "editColumn": {name: "Edit Column", icon: "edit"},
                                "deleteColumn": {name: "Delete Column", icon: "delete"},
                            
                            }                        
                    }
                  
                    
                }
            }
          
}