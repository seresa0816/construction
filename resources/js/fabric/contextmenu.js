
var class_context 	= function()
{
	var main 		= this;

	main.clipboard 	= null;

	main.init 	= function()
	{
		main.initEvent();
	}

	main.initEvent = function()
	{
		$("#context_add").click(function()
		{
			if ($(this).hasClass("disabled"))
				return;
			var sel_obj = canvas.getActiveObject();
			if (!sel_obj)
				return;
			
			if(sel_obj && sel_obj.mode == "gridLine")
			{
				if ($("#viewdrpdwn").val() == 1)
				{
					$('#modalBody').load('./ModalBox/gridModal.html',function()
					{
						$('#modalContainer').modal({show:true});
						// $(".distanceNegative").hide();
						$(".gridLabelRow").show();
						// $("#distanceNegative").prop("disabled", true);
		            });
		            if (sel_obj.type == "vert")
		            	gridPlan.axis = "x";
		            else 
		            	gridPlan.axis = "y";
		            gridPlan.position_index = sel_obj.index;

		            gridPlan.insertReady = 1;
				}

				else 
				{

					if (sel_obj.type == "vert")
		            {
		            	$("#message_area p").html("You can't insert Floor from this grid.");
						$("#message_area").fadeIn();

						setTimeout(function()
						{
							$("#message_area").fadeOut();
						}, 3000);
						return;
		            }
					$('#modalBody').load('./ModalBox/floorModal.html',function()
					{
						$('#modalContainer').modal({show:true});
						$(".floorLabelRow").show();
						// $(".distanceElevNegative").hide();
						// $("#distanceElevNegative").prop("disabled", true);
		            });

		            gridElev.position_index = sel_obj.index;

		            gridElev.insertReady = 1;
				}
				main.hideContext();
				return;
			}
			var mode 	= sel_obj.mode;

			if($(this).hasClass("disabled"))
				return;

			shape.shapeDisabled();
			
			switch(mode)
			{
				case "h_brace" : 
					$("#sidebarnav").children("li:nth-child(3)").children("a").trigger("click");
				break;
				case "v_brace" : 
					$("#sidebarnav").children("li:nth-child(4)").children("a").trigger("click");
				break;
				case "truss" : 
					$("#inside-menut").children("li:nth-child(3)").children("a").trigger("click");
				break;
				case "pourStop" : 
					$("#sidebarnav").children("li:nth-child(6)").children("a").trigger("click");
				break;
				case "Beam":
					$("#inside-menub").children("li:nth-child(2)").children("a").trigger("click");
				break;
				case "periBeam":
					$("#inside-menub").children("li:nth-child(1)").children("a").trigger("click");
				break;
				case "Column":
					$("#inside-menuc").children("li:nth-child(1)").children("a").trigger("click");
				break;
				case "postColumn":
					$("#inside-menuc").children("li:nth-child(3)").children("a").trigger("click");
				break;
				case "boxColumn":
					$("#shapes").children("li:nth-child(1)").children("a").trigger("click");
				break;
				case "ibeam":
					$("#inside-menub").children("li:nth-child(3)").children("a").trigger("click");
				break;
				case "cantBeam":
					$("#inside-menub").children("li:nth-child(4)").children("a").trigger("click");
				break;
				case "pgirder":
					$("#inside-menub").children("li:nth-child(5)").children("a").trigger("click");
				break;
				case "builtUpIColumn":
					$("#shapes").children("li:nth-child(2)").children("a").trigger("click");
				break;
				case "builtUpCRColumn":
					$("#shapes").children("li:nth-child(3)").children("a").trigger("click");
				break;
				case "builtUpCHColumn":
					$("#shapes").children("li:nth-child(4)").children("a").trigger("click");
				break;
			}

			memType = sel_obj.memType;

			if (sel_obj.mode != "Column" && memType == "column")
			{
				$("#inside-menuc").children("li:nth-child(1)").children("a").trigger("click");
			}
		});

		$("#context_move").click(function () 
		{
			if ($(this).hasClass("disabled"))
				return;
			var sel_obj = canvas.getActiveObject();

			if (!sel_obj)
				return;

			if (sel_obj && (sel_obj.mode == "periBeam" || sel_obj.mode == "Beam" || sel_obj.mode == "ibeam")) 
			{
				$('#modalBody').load('./ModalBox/moveBeamModal.html', function() 
				{
					$('#modalContainer').modal({show:true});

					$("#moveBeamModal .modalapply").click(function() 
					{
						var sign = 1;
						var distance = convertToUnit($("#moveBeamModal #pbtosft").val(), $("#moveBeamModal #pbtosin").val(), $("#moveBeamModal #pbtosfr").val(), $("#plusminus").val());
						undoAction.addAction("memberPlace");

						if (sel_obj._objects)
						{
							for ( var i = 0; i < sel_obj._objects.length; i ++ ) 
							{
								for ( var j = 0; j < memberList.length ; j ++ ) 
								{
									if (memberList[j].uid == sel_obj._objects[i].mode + "_" + sel_obj._objects[i].uid)
									{
										memberList[j].tos = distance;
										memberList[j].tos_ft = reverseFromUnit(memberList[j].tos).ft;
										memberList[j].tos_in = reverseFromUnit(memberList[j].tos).in;
										memberList[j].tos_fr = reverseFromUnit(memberList[j].tos).fr;
										memberList[j].sign 	 = "+";
										memberList[j].memberProperties.startPoint.z = distance;
										memberList[j].memberProperties.endPoint.z = distance;
									}
								}
							}
						}
						else 
						{
							for ( var j = 0; j < memberList.length; j ++ )
							{
								if (memberList[j].uid == sel_obj.mode + "_" + sel_obj.uid)
								{
									memberList[j].tos = distance;
									memberList[j].tos_ft = reverseFromUnit(memberList[j].tos).ft;
									memberList[j].tos_in = reverseFromUnit(memberList[j].tos).in;
									memberList[j].tos_fr = reverseFromUnit(memberList[j].tos).fr;
									memberList[j].sign 	 = "+";
									memberList[j].memberProperties.startPoint.z = distance;
									memberList[j].memberProperties.endPoint.z = distance;
								}
							}
						}

						$("#moveBeamModal .modalcancel").click();
						reloadGrid();
					})
				});
				main.hideContext();
			}

			if(sel_obj && sel_obj.mode == "gridLine" )
			{
				if ($("#viewdrpdwn").val() == 1)
				{
					$('#modalBody').load('./ModalBox/gridModal.html',function()
					{
						$('#modalContainer').modal({show:true});
						$(".gridLabelRow").hide();
						$(".distanceNegative").show();
						$("#distanceNegative").prop("disabled", false);
		            });
		            if (sel_obj.type == "vert")
		            	gridPlan.axis = "x";
		            else 
		            	gridPlan.axis = "y";
		            gridPlan.position_index = sel_obj.index;

		            gridPlan.insertReady = 0;
				}

				else
				{
					if (sel_obj.type == "vert")
					{
						$("#message_area p").html("You can't move Floor from this grid.");
						$("#message_area").fadeIn();

						setTimeout(function()
						{
							$("#message_area").fadeOut();
						}, 3000);
						return;
					}

					$("#modalBody").load("./ModalBox/floorModal.html", function()
					{
						$('#modalContainer').modal({show:true});
						$(".floorLabelRow").hide();
						$(".distanceElevNegative").show();
						$("#distanceElevNegative").prop("disabled", false);
					})
					gridElev.position_index = sel_obj.index;
					gridElev.insertReady = 0;
				}
				main.hideContext();
				return;
			}
		});

		$("#context_extend").click(function ()
		{
			if ($(this).hasClass("disabled"))
				return;

			shape.shapeDisabled();
			main.hideContext();
			var sel_obj = canvas.getActiveObject();

			if (!sel_obj)
				return;
			if (sel_obj && (sel_obj.mode == "periBeam" || sel_obj.mode == "Beam" || sel_obj.mode == "ibeam" || sel_obj.mode == "pgirder")) 
			{
				$("#modalBody").load('./ModalBox/extendBeamModal.html', function() 
				{
					$('#modalContainer').modal({show:true});
					$("#extendBeamModal .modalapply").click(function() 
					{
						var sign = 1;
						if ($("#extendBeamModal #pblength").val() == "")
						{
							alert("Invalid value!");
							return false;
						}
						undoAction.addAction("memberPlace");

						var distance = convertToUnit($("#extendBeamModal #pblength").val(), $("#extendBeamModal #pbtosin").val(), $("#extendBeamModal #pbtosfr").val(), "+");
						for ( var i = 0 ; i < memberList.length ; i ++ )
						{
							if (memberList[i].uid == sel_obj.mode + "_" + sel_obj.uid)
							{
								if (memberList[i].memberProperties.startPoint.x == memberList[i].memberProperties.endPoint.x) 
								{
									for ( var j = 0 ; j < memberList.length ; j ++ )
									{
										if (j != i)
										{
											if ((memberList[j].type == "Beam" || memberList[j].type == "periBeam" || memberList[j].type == "ibeam" || memberList[j].type == "pgirder") && memberList[j].floor == $("#depthdrpdwn").val() && (memberList[i].memberProperties.startPoint.x == memberList[j].memberProperties.startPoint.x && memberList[i].memberProperties.endPoint.x == memberList[j].memberProperties.endPoint.x))
											{
												if (memberList[i].memberProperties.startPoint.y + distance > memberList[j].memberProperties.startPoint.y && memberList[j].memberProperties.startPoint.y != memberList[j].memberProperties.endPoint.y && memberList[i].memberProperties.startPoint.y < memberList[j].memberProperties.startPoint.y)
												{
													$("#extendBeamModal .modalcancel").click();
													$("#message_area p").html("You can't extend Beam.");
													$("#message_area").fadeIn();

													setTimeout(function()
													{
														$("#message_area").fadeOut();
													}, 3000);
													return;
												}
											}
										}
									}
									memberList[i].memberProperties.endPoint.y = memberList[i].memberProperties.startPoint.y + distance;
								}

								else if (memberList[i].memberProperties.startPoint.y == memberList[i].memberProperties.endPoint.y)
								{
									for ( var j = 0 ; j < memberList.length ; j ++ )
									{
										if (j != i)
										{
											if ((memberList[j].type == "Beam" || memberList[j].type == "periBeam" || memberList[j].type == "ibeam" || memberList[j].type == "pgirder") && memberList[j].floor == $("#depthdrpdwn").val() && (memberList[i].memberProperties.startPoint.y == memberList[j].memberProperties.startPoint.y && memberList[i].memberProperties.endPoint.y == memberList[j].memberProperties.endPoint.y))
											{
												if (memberList[i].memberProperties.startPoint.x + distance > memberList[j].memberProperties.startPoint.x && memberList[j].memberProperties.startPoint.x != memberList[j].memberProperties.endPoint.x && memberList[i].memberProperties.startPoint.x < memberList[j].memberProperties.startPoint.x)
												{
													$("#extendBeamModal .modalcancel").click();
													$("#message_area p").html("You can't extend Beam.");
													$("#message_area").fadeIn();

													setTimeout(function()
													{
														$("#message_area").fadeOut();
													}, 3000);
													return;
												}
											}
										}
									}
									memberList[i].memberProperties.endPoint.x = memberList[i].memberProperties.startPoint.x + distance;
								}

								memberList[i].origin = undefined;
							}
						}

						$("#extendBeamModal .modalcancel").click();
						reloadGrid();
					})
				})
			}
		})

		$("#context_copy").click(function()
		{
			if($(this).hasClass("disabled"))
				return;
			var sel_obj = canvas.getActiveObject();
			canvas.discardActiveObject();

			if(!sel_obj)
				return;

			shape.shapeDisabled();

			main.clipboard = sel_obj;
			main.hideContext();
		});

		$("#context_paste").click(function(evt)
		{
			if(!main.clipboard)
				return;

			var new_obj = null;
			
			if(main.clipboard.type == "new_group")
			{
				var gap_x 	 = 0;
				var gap_y 	 = 0;

				for(var i = 0; i < main.clipboard._objects.length; i ++)
				{
					var pointer = canvas.getPointer(evt.e);
					gap_x = $("#context_menu").position().left - main.clipboard.left;
					gap_y = $("#context_menu").position().top - 135 - main.clipboard.top;
					
					main.clipboard._objects[i].clone(function(cloned)
					{
						cloned.top  += gap_y;
						cloned.left += gap_x;
						cloned.mode = main.clipboard._objects[i].mode;
						cloned.setCoords();
						if (cloned.mode == "Column" || cloned.memType == "column" || cloned.mode == "boxColumn" || cloned.mode == "builtUpIColumn" || cloned.mode == "builtUpCRColumn" || cloned.mode == "builtUpCHColumn" || cloned.mode == "postColumn")
							shape.addSnapColumnPosition(cloned);
						else
							shape.addSnap(cloned);
						canvas.add(cloned);
					});
				}
			}
			else
			{
				main.clipboard.clone(function(cloned)
				{
					var org_pointer = {x: $("#context_menu").offset().left - $(".misc-sidebar").width() - 70, y: $("#context_menu").position().top - $("#expandCanvas").offset().top};
					
					var inverted = fabric.util.invertTransform(canvas.viewportTransform);
					var pointer = fabric.util.transformPoint(org_pointer, inverted);
					cloned.top  = pointer.y;
					cloned.left = pointer.x;
					cloned.mode = main.clipboard.mode;
					undoAction.addAction("memberPlace");
					
					if (main.clipboard.memType == "column" || main.clipboard.mode == "Column" || main.clipboard.mode == "boxColumn" || main.clipboard.mode == "builtUpIColumn" || main.clipboard.mode == "builtUpCRColumn" || main.clipboard.mode == "builtUpCHColumn" || main.clipboard.mode == "postColumn")
					{
						if ($("#viewdrpdwn").val() == 1)
							shape.addSnapColumnPosition(main.clipboard, cloned);
						else 
							shape.addSnapColumn(main.clipboard, cloned, main.clipboard.mode);
					}
					else if (main.clipboard.mode == "paraTruss" || main.clipboard.mode == "trapeTruss" || main.clipboard.mode == "truss") 
					{
						shape.addSnapTruss(cloned);
					}
					else if (main.clipboard.mode == "h_brace")
					{
						// cloned.top -= 70;
						shape.addSnap(main.clipboard, cloned, main.clipboard.mode);
						return;
					}
					else if (main.clipboard.mode == "v_brace")
					{
						shape.addSnapElev(main.clipboard, cloned, main.clipboard.mode);
						return;
					}
					else if (main.clipboard.mode == "Beam" || main.clipboard.mode == "periBeam" || main.clipboard.mode == "pgirder")
					{
						if ($("#viewdrpdwn").val() == 1)
							shape.addSnapBeam(main.clipboard, cloned, main.clipboard.mode);
						else 
						{
							if ($("#viewdrpdwn").val() == 2)
								shape.addSnapBeamElevation(main.clipboard, cloned, main.clipboard.mode, "XZ");
							else 
								shape.addSnapBeamElevation(main.clipboard, cloned, main.clipboard.mode, "YZ");
						}
					}
					else if (main.clipboard.mode == "pourStop")
					{
						if ($("#viewdrpdwn").val() == 1)
						{
							shape.addSnapPourstop(main.clipboard, cloned, "pourstop");
							shape.shapeDisabled();
							main.changeMode();
							main.hideContext();
							// reloadGrid();
							return;
						}
					}
					else 
						shape.addSnap(cloned);

					canvas.add(cloned);
					stopDraggingElement(cloned);
					cloned.setCoords();
					canvas.calcOffset().renderAll();
					reloadGrid();
				});
			}

			shape.shapeDisabled();
			main.changeMode();
			main.hideContext();
		});

		$("#context_delete").click(function(evt)
		{
			var sel_obj = canvas.getActiveObject();

			if ($(this).hasClass("disabled"))
				return;
			
			if(!sel_obj)
				return;
			if(confirm("Are you sure remove this object?"))
			{
				if (sel_obj && sel_obj.mode == "gridLine")
				{
					undoAction.addAction("editGrid");
					if (sel_obj.type != "new_group")
					{
						if ($("#viewdrpdwn").val() == 1)
							gridPlan.remove(sel_obj.type, sel_obj.index);
						else 
							gridElev.remove(sel_obj.type, sel_obj.index);
						main.changeMode();
						main.hideContext();
						canvas.discardActiveObject();
						canvas.renderAll();
						return;
					}
					else if (sel_obj._objects)
					{
						for (var i = sel_obj._objects.length - 1; i >= 0; i --)
						{
							if ($("#viewdrpdwn").val() == 1)
								gridPlan.remove(sel_obj._objects[i].type, sel_obj._objects[i].index);
							else 
								gridElev.remove(sel_obj._objects[i].type, sel_obj._objects[i].index);
						}
						main.hideContext();
						canvas.discardActiveObject();
						canvas.renderAll();
						return;
					}
				}
				undoAction.addAction("memberPlace");
				if (sel_obj._objects)
					for(var i = sel_obj._objects.length - 1; i >= 0; i --)
					{
						for ( var j = memberList.length - 1; j >= 0; j --)
						{
							if (memberList[j].uid == sel_obj._objects[i].mode + "_" + sel_obj._objects[i].uid){
								// memberList.splice(j, 1);
								dataModel.removeData(j, 1);
							}

						}
						canvas.remove(sel_obj._objects[i]);
					}
				for ( var j = memberList.length - 1; j >= 0; j --)
				{
					if (memberList[j].uid == sel_obj.mode + "_" + sel_obj.uid)
					{
						// memberList.splice(j, 1);
						dataModel.removeData(j, 1);
					}
				}
				canvas.remove(sel_obj);
			}
			main.changeMode();
			main.hideContext();
			reloadGrid();

			canvas.discardActiveObject();
			canvas.renderAll();
		});

		$("#context_edit").click(function()
		{
			var sel_obj = canvas.getActiveObject();

			if(!sel_obj)
				return;

			if($(this).hasClass("disabled"))
				return;
			
			$(".active-right").removeClass("active-right");
			if (sel_obj.type != "new_group" || sel_obj.mode == "paraTruss" || sel_obj.mode == "trapeTruss" || sel_obj.mode == "truss")
			{	
				switch(sel_obj.mode)
				{
					case "h_brace" : 
						$('#rightFloat').load('./RightSlideBox/rightBarHBrace.html', function() 
						{
							for (var i = 0; i < memberList.length; i ++)
							{
								if (memberList[i].uid == sel_obj.mode + "_" + sel_obj.uid)
								{
									var configure_hbrace = new_configure.hbrace;
									hbraceMember = memberList[i];
									Object.keys(configure_hbrace.memberProperties).map(function(entry)
									{
										if (entry == "profile")
										{
											if (hbraceMember[entry] != "" && hbraceMember[entry] != "select")
												$("#" + configure_hbrace.memberProperties[entry]).val(hbraceMember.memberProperties[entry]).trigger("change");
										}
										else
											$("#" + configure_hbrace.memberProperties[entry]).val(hbraceMember.memberProperties[entry]);
									});

									Object.keys(configure_hbrace.finishProperties).map(function(entry)
									{
										if (entry != "paintType" && entry != "primerCheck")
											$("#" + configure_hbrace.finishProperties[entry]).val(hbraceMember.finishProperties[entry]);
										else if (entry == "primerCheck")
											$("#" + configure_hbrace.finishProperties[entry]).prop("checked", hbraceMember.finishProperties[entry]).trigger("change");
										else 
											$("input[name='"+configure_hbrace.finishProperties[entry]+"'][value='"+hbraceMember.finishProperties[entry]+"']").prop('checked', true).trigger("change");
									});

									Object.keys(configure_hbrace.connectionProperties).map(function(entry)
									{
										$("#" + configure_hbrace.connectionProperties[entry]).val(hbraceMember.connectionProperties[entry]);
									});
									
									Object.keys(configure_hbrace).map(function(entry) 
									{
										if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
										{
											if ($("#" + configure_hbrace[entry]).is(":checkbox"))
											{
												if (hbraceMember[entry] == "on")
													$("#" + configure_hbrace[entry]).prop('checked', true).trigger("change");
												// else
												// 	$("#" + configure_hbrace[entry]).prop('checked', false).trigger('change');
											}
											else 
											{
												$("#" + configure_hbrace[entry]).val(hbraceMember[entry]);
											}
										}
									});
									$("#hBraceShapes").val(hbraceMember["braceShape"]).trigger("change");
									if (hbraceMember.connectionProperties["connectionGiven"])
									{
										$("#rdinclinedlacing1").click();

										for (var j = 0; j < hbraceMember.connectionProperties.dot; j ++)
										{
											$("#hBraceMark" + (j + 1)).val(hbraceMember.connectionProperties.connGivenMark[j].mark);
											$("#hBraceMethodGusset" + (j + 1)).val(hbraceMember.connectionProperties.connGivenMark[j].gusset);
											$("#hBraceTypeBeam" + (j + 1)).val(hbraceMember.connectionProperties.connGivenMark[j].beam);
											$("#hBraceMethodBeam" + (j + 1)).val(hbraceMember.connectionProperties.connGivenMark[j].gussetBeam);
										}
									}
									else 
									{
										$("#rdinclinedlacing2").click();
										for (var j = 0; j < hbraceMember.connectionProperties.brace; j ++)
										{
											$("#vaxialload" + (j + 1)).val(hbraceMember.connectionProperties.ctbdLoad[j].axial);
										}
									}
									$("#memID").val(i);
									$("#memType").val("hbrace");
								}
							}
						});
					break;
					case "v_brace" :
						$('#rightFloat').load('./RightSlideBox/rightBarVBrace.html', function()
						{
							for (var i = 0; i < memberList.length; i ++)
							{
								if (memberList[i].uid == sel_obj.mode + "_" + sel_obj.uid)
								{
									var configure_vbrace = new_configure.vbrace;
									vbraceMember = memberList[i];
									Object.keys(configure_vbrace.memberProperties).map(function(entry)
									{
										if (entry == "profile")
											$("#" + configure_vbrace.memberProperties[entry]).val(vbraceMember.memberProperties[entry]).trigger("change");
										else
											$("#" + configure_vbrace.memberProperties[entry]).val(vbraceMember.memberProperties[entry]);
									});

									Object.keys(configure_vbrace.finishProperties).map(function(entry)
									{
										if (entry != "paintType" && entry != "primerCheck")
											$("#" + configure_vbrace.finishProperties[entry]).val(vbraceMember.finishProperties[entry]);
										else if (entry == "primerCheck")
											$("#" + configure_vbrace.finishProperties[entry]).prop("checked", vbraceMember.finishProperties[entry]).trigger("change");
										else
											$("input[name='"+configure_vbrace.finishProperties[entry]+"'][value='" + vbraceMember.finishProperties[entry]+"']").prop('checked', true).trigger("change");
									});

									Object.keys(configure_vbrace.connectionProperties).map(function(entry)
									{
										$("#" + configure_vbrace.connectionProperties[entry]).val(vbraceMember.connectionProperties[entry]);
									});
									
									Object.keys(configure_vbrace).map(function(entry) 
									{
										if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
										{
											
											if ($("#" + configure_vbrace[entry]).is(":checkbox"))
											{
												if (vbraceMember[entry] == "on")
													$("#" + configure_vbrace[entry]).prop('checked', true).trigger("change");
												// else
												// 	$("#" + configure_vbrace[entry]).prop('checked', false).trigger('change');
											}
											else 
											{
												$("#" + configure_vbrace[entry]).val(vbraceMember[entry]);
											}
										}
									});
									$("#vBraceShapes").val(vbraceMember["braceShape"]).trigger("change");
									if (vbraceMember.connectionProperties["connectionGiven"])
									{
										$("#rdinclinedlacing1").click();

										for (var j = 0; j < vbraceMember.connectionProperties.dot; j ++)
										{
											$("#vBraceMark" + (j + 1)).val(vbraceMember.connectionProperties.connGivenMark[j].mark).trigger("change");
											$("#vBraceMethodGusset" + (j + 1)).val(vbraceMember.connectionProperties.connGivenMark[j].gusset);
											$("#vBraceTypeBeam" + (j + 1)).val(vbraceMember.connectionProperties.connGivenMark[j].beam);
											$("#vBraceMethodBeam" + (j + 1)).val(vbraceMember.connectionProperties.connGivenMark[j].gussetBeam);
										}
									}
									else 
									{
										$("#rdinclinedlacing2").click();
										for (var j = 0; j < vbraceMember.connectionProperties.brace; j ++)
										{
											$("#vaxialload" + (j + 1)).val(vbraceMember.connectionProperties.ctbdLoad[j].axial);
										}
									}
									$("#memID").val(i);
									$("#memType").val("vbrace");
								}
							}
						});
					break;
					case "pourStop" :
						$('#rightFloat').load('./RightSlideBox/rightBarPourStop.html', function()
						{
							for (var i = 0; i < memberList.length; i ++)
							{
								if (memberList[i].uid == sel_obj.mode + "_" + sel_obj.uid)
								{
									var configure = new_configure.pourstop;
									pourstopMember = memberList[i];
									Object.keys(configure.memberProperties).map(function(entry)
									{
										if (entry == "profile" || entry == "material")
											$("#" + configure.memberProperties[entry]).val(pourstopMember.memberProperties[entry]).trigger("change");
										else
											$("#" + configure.memberProperties[entry]).val(pourstopMember.memberProperties[entry]);
									});

									Object.keys(configure.finishProperties).map(function(entry)
									{
										if (entry != "paintType" && entry != "primerCheck")
											$("#" + configure.finishProperties[entry]).val(pourstopMember.finishProperties[entry]);
										else if (entry == "primerCheck")
											$("#" + configure.finishProperties[entry]).prop("checked", pourstopMember.finishProperties[entry]).trigger("change");
										else
											$("input[name='"+configure.finishProperties[entry]+"'][value='"+pourstopMember.finishProperties[entry]+"']").prop('checked', true).trigger("change");
									});

									Object.keys(configure).map(function(entry) 
									{
										if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
										{
											
											if ($("#" + configure[entry]).is(":checkbox"))
											{
												if (pourstopMember[entry] == "on")
													$("#" + configure[entry]).prop('checked', true).trigger("change");
												// else
												// 	$("#" + configure[entry]).prop('checked', false).trigger('change');
											}
											else if (entry == "weldType")
												$("#" + configure[entry]).val(pourstopMember[entry]).trigger("change");
											else 
											{
												$("#" + configure[entry]).val(pourstopMember[entry]);
											}
										}
									});
									if (pourstopMember['pourposition'] == "specificlength")
									{
										$(".specificlengthshow").show();
									}
									else 
									{
										$(".specificlengthshow").hide();
									}

									if (pourstopMember.memberProperties.orientation == "left")
									{
										$("#pourstop1").prop("checked", true);
										$("#pourstop2").prop("checked", false);
									}
									else 
									{
										$("#pourstop1").prop("checked", false);
										$("#pourstop2").prop("checked", true);
									}

									if (pourstopMember.memberProperties.profile == "Angle")
									{
										$(".showAngle").show();
	                					$(".showBent").hide();
									}
									else 
									{
										$(".showAngle").hide();
	                					$(".showBent").show();
									}

									if (pourstopMember.beamConnectionType == "Welded")
									{
										$(".eshowpsweld").show();
	                					$(".eshowpsbolt").hide();
									}
									else 
									{
										$(".eshowpsweld").hide();
	                					$(".eshowpsbolt").show();
									}

									$("#memID").val(i);
									$("#memType").val("pourstop");
								}
							}
						});
					break;
					case "periBeam" :
						$('#rightFloat').load('./RightSlideBox/rightBarPerimeterBeam.html', function()
						{
							for (var i = 0; i < memberList.length; i ++)
							{
								if (memberList[i].uid == sel_obj.mode + "_" + sel_obj.uid)
								{
									var configure = new_configure.peribeam;
									periMember = memberList[i];
									Object.keys(configure.memberProperties).map(function(entry)
									{
										if (entry == "profile")
										{
											if (periMember.memberProperties[entry] != "")
												$("#" + configure.memberProperties[entry]).val(periMember.memberProperties[entry]).trigger("change");
										}
										else
											$("#" + configure.memberProperties[entry]).val(periMember.memberProperties[entry]);
									});

									Object.keys(configure.finishProperties).map(function(entry)
									{
										if (entry != "paintType" && entry != "primerCheck")
											$("#" + configure.finishProperties[entry]).val(periMember.finishProperties[entry]);
										else if (entry == "primerCheck")
											$("#" + configure.finishProperties[entry]).prop("checked", periMember.finishProperties[entry]).trigger("change");
										else
											$("input[name='"+configure.finishProperties[entry]+"'][value='"+periMember.finishProperties[entry]+"']").prop('checked', true).trigger("change");
									});

									Object.keys(configure.connectionProperties).map(function(entry)
									{
										$("#" + configure.connectionProperties[entry]).val(periMember.connectionProperties[entry]);
									});
									
									Object.keys(configure).map(function(entry) 
									{
										if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
										{
											
											if ($("#" + configure[entry]).is(":checkbox"))
											{
												if (periMember[entry] == "on")
													$("#" + configure[entry]).prop('checked', true).trigger("change");
												// else
												// 	$("#" + configure[entry]).prop('checked', false).trigger('change');
											}
											else if (entry == "stiffWeldType")
												$("#" + configure[entry]).val(periMember[entry]).trigger("change");
											else 
											{
												$("#" + configure[entry]).val(periMember[entry]);
											}
										}
									});

									$(".hideAll").hide();
									$("#" + configure["alignment"]).val(periMember['alignment']).trigger("change");

									if (periMember['alignment'] == "Skewed")
									{
										$(".skewed").show();
						                $(".efieldsFB").hide();
						                $(".efieldsFW").show();
						                $(".einXsplice1").hide();
						                $(".einXsplice2").hide();
						                $(".sloppedSkewed").hide();

						                Object.keys(skew_slop_option.skew).map(function(entry)
						                {
						                	$("#" + skew_slop_option.skew[entry]).val(periMember[entry]);
						                })
									}
									else if (periMember['alignment'] == "Sloped")
									{
										$(".efieldsFW").hide();
						                $(".efieldsFB").show();
						                $(".einXsplice1").show();
						                $(".skewed").hide();
						                $(".sloppedSkewed").hide();
						                Object.keys(skew_slop_option.slop).map(function(entry)
						                {
						                	$("#" + skew_slop_option.slop[entry]).val(periMember[entry]);
						                })
									}
									else if (periMember['alignment'] == "Sloped & Skewed")
									{
										$(".skewed").hide();
						                $(".efieldsFB").hide();
						                $(".efieldsFW").hide();
						                $(".einXsplice1").hide();
						                $(".einXsplice2").hide();
						                $(".sloppedSkewed").show();
						                Object.keys(skew_slop_option.slop_skew).map(function(entry)
						                {
						                	$("#" + skew_slop_option.slop_skew[entry]).val(periMember[entry]);
						                })
									}
									else
									{
										Object.keys(skew_slop_option.slop).map(function(entry)
						                {
						                	$("#" + skew_slop_option.slop[entry]).val(periMember[entry]);
						                });

						                Object.keys(skew_slop_option.slop_skew).map(function(entry)
						                {
						                	$("#" + skew_slop_option.slop_skew[entry]).val(periMember[entry]);
						                });
									}

									if (periMember.splice_count)
									{
										$("#usplicecount").val(periMember.splice_count).trigger("change");
									}

									if (periMember.splice_data && periMember.splice_data.length > 0)
									{
										for ( var j = 0; j < periMember.splice_data.length; j ++ )
										{
											$("#splicePositionLeftEndFt" + (j + 1)).val(periMember.splice_data[j].ft);
											$("#splicePositionLeftEndIn" + (j + 1)).val(periMember.splice_data[j].in);
											$("#splicePositionLeftEndFr" + (j + 1)).val(periMember.splice_data[j].fr);
											$("#parallelmodalprofile" + (j + 1)).val(periMember.splice_data[j].profile);
										}
									}
									$("#spliceconnectionmark").val(periMember.connectionProperties.connMark_Splice);
									$("#memID").val(i);
									$("#memType").val("peribeam");
								}
							}
						});
					break;
					case "Beam":
						$('#rightFloat').load('./RightSlideBox/rightBarGridBeam.html', function()
						{
							for (var i = 0; i < memberList.length; i ++)
							{
								if (memberList[i].uid == sel_obj.mode + "_" + sel_obj.uid)
								{
									var configure = new_configure.gbeam;
									gbeamMember = memberList[i];
									Object.keys(configure.memberProperties).map(function(entry)
									{
										if (entry == "profile")
										{
											if (gbeamMember.memberProperties[entry] != "" && gbeamMember.memberProperties[entry] != "select")
												$("#" + configure.memberProperties[entry]).val(gbeamMember.memberProperties[entry]).trigger("change");
										}
										else
											$("#" + configure.memberProperties[entry]).val(gbeamMember.memberProperties[entry]);
									});

									Object.keys(configure.finishProperties).map(function(entry)
									{
										if (entry != "paintType" && entry != "primerCheck")
											$("#" + configure.finishProperties[entry]).val(gbeamMember.finishProperties[entry]);
										else if (entry == "primerCheck")
											$("#" + configure.finishProperties[entry]).prop("checked", gbeamMember.finishProperties[entry]).trigger("change");
										else
											$("input[name='" + configure.finishProperties[entry] + "'][value='" + gbeamMember.finishProperties[entry]+"']").prop('checked', true).trigger("change");
									});

									Object.keys(configure.connectionProperties).map(function(entry)
									{
										$("#" + configure.connectionProperties[entry]).val(gbeamMember.connectionProperties[entry]);
									});
									
									Object.keys(configure).map(function(entry) 
									{
										if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
										{
											
											if ($("#" + configure[entry]).is(":checkbox"))
											{
												if (gbeamMember[entry] == "on")
													$("#" + configure[entry]).prop('checked', true).trigger("change");
												// else
												// 	$("#" + configure[entry]).prop('checked', false).trigger('change');
											}
											else if (entry == "stiffWeldType")
												$("#" + configure[entry]).val(gbeamMember[entry]).trigger("change");
											else
											{
												$("#" + configure[entry]).val(gbeamMember[entry]);
											}
										}
									});
									$(".hideAll").hide();
									$("#" + configure['alignment']).val(gbeamMember['alignment']).trigger("change");
									if (gbeamMember['alignment'] == "Skewed")
									{
										Object.keys(skew_slop_option.skew).map(function(entry)
						                {
						                	$("#" + skew_slop_option.skew[entry]).val(gbeamMember[entry]);
						                });
									}
									else if (gbeamMember['alignment'] == "Sloped")
									{
										Object.keys(skew_slop_option.slop).map(function(entry)
						                {
						                	$("#" + skew_slop_option.slop[entry]).val(gbeamMember[entry]);
						                })
									}
									else if (gbeamMember['alignment'] == "Sloped & Skewed")
									{
										Object.keys(skew_slop_option.slop_skew).map(function(entry)
						                {
						                	$("#" + skew_slop_option.slop_skew[entry]).val(gbeamMember[entry]);
						                })
									}
									else
									{
										Object.keys(skew_slop_option.slop).map(function(entry)
						                {
						                	$("#" + skew_slop_option.slop[entry]).val(gbeamMember[entry]);
						                });

						                Object.keys(skew_slop_option.slop_skew).map(function(entry)
						                {
						                	$("#" + skew_slop_option.slop_skew[entry]).val(gbeamMember[entry]);
						                });
									};

									if (gbeamMember.splice_count)
									{
										$("#usplicecount").val(gbeamMember.splice_count).trigger("change");
									}

									if (gbeamMember.splice_data && gbeamMember.splice_data.length > 0)
									{
										for ( var j = 0; j < gbeamMember.splice_data.length; j ++ )
										{
											$("#splicePositionLeftEndFt" + (j + 1)).val(gbeamMember.splice_data[j].ft);
											$("#splicePositionLeftEndIn" + (j + 1)).val(gbeamMember.splice_data[j].in);
											$("#splicePositionLeftEndFr" + (j + 1)).val(gbeamMember.splice_data[j].fr);
											$("#parallelmodalprofile" + (j + 1)).val(gbeamMember.splice_data[j].profile);
										}
									}
									$("#spliceconnectionmark").val(gbeamMember.connectionProperties.connMark_Splice);

									$("#memID").val(i);
									$("#memType").val("gbeam");
								}
							}
						});
					break;
					case "postColumn":
						$('#rightFloat').load('./RightSlideBox/rightBarPost.html', function() 
						{
							$("#gridLocX").html("");
							var html = "";
							for (i = 0; i < gridData.xaxis.length; i ++)
							{
								html += "<option value='" + gridData.xaxis[i].Dimension + "'>" + gridData.xaxis[i].Label + "</option>";
							}
							$("#gridLocX").html(html);

							$("#gridLocY").html("");
							html = "";
							for (i = 0; i < gridData.yaxis.length; i++)
							{
								html += "<option value='" + gridData.yaxis[i].Dimension + "'>" + gridData.yaxis[i].Label + "</option>";
							}
							$("#gridLocY").html(html);

							for (i = 0; i < memberList.length; i ++)
							{
								if (memberList[i].uid == sel_obj.mode + "_" + sel_obj.uid)
								{
									var configure = new_configure.post;
									postMember = memberList[i];
									Object.keys(configure.memberProperties).map(function(entry)
									{
										if (entry == "profile")
											$("#" + configure.memberProperties[entry]).val(postMember.memberProperties[entry]).trigger("change");
										else
											$("#" + configure.memberProperties[entry]).val(postMember.memberProperties[entry]);
									});

									Object.keys(configure.finishProperties).map(function(entry)
									{
										if (entry != "paintType" && entry != "primerCheck")
											$("#" + configure.finishProperties[entry]).val(postMember.finishProperties[entry]);
										else if (entry == "primerCheck")
											$("#" + configure.finishProperties[entry]).prop("checked", postMember.finishProperties[entry]).trigger("change");
										else
											$("input[name='" + configure.finishProperties[entry] + "'][value='" + postMember.finishProperties[entry]+"']").prop('checked', true).trigger("change");
									});

									Object.keys(configure.connectionProperties).map(function(entry)
									{
										$("#" + configure.connectionProperties[entry]).val(postMember.connectionProperties[entry]);
									});
									
									Object.keys(configure).map(function(entry) 
									{
										if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
										{
											if ($("#" + configure[entry]).is(":checkbox"))
											{
												if (postMember[entry] == "on")
													$("#" + configure[entry]).prop('checked', true).trigger("change");
												// else
												// 	$("#" + configure[entry]).prop('checked', false).trigger('change');
											}
											else 
											{
												$("#" + configure[entry]).val(postMember[entry]);
											}
										}
									});
									$("#memID").val(i);
									$("#memType").val("post");
								}
							}
						});
					break;
					case "boxColumn":
						$('#rightFloat').load('./RightSlideBox/rightBarBoxColumn1.html',function()
						{
							for (var i = 0; i < memberList.length; i ++)
							{
								if (memberList[i].uid == sel_obj.mode + "_" + sel_obj.uid)
								{
									var configure = new_configure.box;
									boxMember = memberList[i];
									Object.keys(configure.memberProperties).map(function(entry)
									{
										if (entry == "profile")
										{
											if (boxMember.memberProperties[entry] != "" && boxMember.memberProperties[entry] != "select")
												$("#" + configure.memberProperties[entry]).val(boxMember.memberProperties[entry]).trigger("change");
										}
										else
											$("#" + configure.memberProperties[entry]).val(boxMember.memberProperties[entry]);
									});

									Object.keys(configure.finishProperties).map(function(entry)
									{
										if (entry != "paintType" && entry != "primerCheck")
											$("#" + configure.finishProperties[entry]).val(boxMember.finishProperties[entry]);
										else if (entry == "primerCheck")
											$("#" + configure.finishProperties[entry]).prop("checked", boxMember.finishProperties[entry]).trigger("change");
										else
											$("input[name='" + configure.finishProperties[entry] + "'][value='" + boxMember.finishProperties[entry]+"']").prop('checked', true).trigger("change");
									});

									Object.keys(configure).map(function(entry) 
									{
										if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
										{
											
											if ($("#" + configure[entry]).is(":checkbox"))
											{
												if (boxMember[entry] == "on")
													$("#" + configure[entry]).prop('checked', true).trigger("change");
												// else
												// 	$("#" + configure[entry]).prop('checked', false).trigger('change');
											}
											else if (entry == "weld_type")
												$("#" + configure[entry]).val(boxMember[entry]).trigger("change");
											else 
											{
												$("#" + configure[entry]).val(boxMember[entry]);
											}
										}
									});
									$("#c4boxsplicecount").val(boxMember['splice_count']).trigger("change");

									Object.keys(configure.connectionProperties).map(function(entry)
									{
										if (entry == "cap_check")
											$("#" + configure.connectionProperties[entry]).prop("checked", boxMember.connectionProperties[entry]).trigger("change");
										else
										{
											if (entry == "splice_plateConnMark")
											{
												$("#" + configure.connectionProperties[entry]).val(boxMember.connectionProperties[entry]).trigger("change");
											}
											else 
												$("#" + configure.connectionProperties[entry]).val(boxMember.connectionProperties[entry]);
										}
									});
									for ( var j = 0; j < parseInt(boxMember['splice_count']); j ++ )
									{
										$(".c4boxsplice" + (j + 1)).show();
										$("#boxProfile" + (j + 1)).show();
									}

									for ( var j = 0; j < parseInt(boxMember['splice_count']); j ++ )
									{
										$("#splice" + (j + 1) + "PosNeg").val(boxMember.splice_data[j].sign);
										$("#splice" + (j + 1) + "Ft").val(boxMember.splice_data[j].elevation_ft);
										$("#splice" + (j + 1) + "In").val(boxMember.splice_data[j].elevation_in);
										$("#splice" + (j + 1) + "Fr").val(boxMember.splice_data[j].elevation_fr);

										$("#splice" + (j + 1) + "DepthAFt").val(boxMember.splice_data[j].depth_a_ft);
										$("#splice" + (j + 1) + "DepthAIn").val(boxMember.splice_data[j].depth_a_in);
										$("#splice" + (j + 1) + "DepthAFr").val(boxMember.splice_data[j].depth_a_fr);

										$("#splice" + (j + 1) + "WidthBFt").val(boxMember.splice_data[j].width_b_ft);
										$("#splice" + (j + 1) + "WidthBIn").val(boxMember.splice_data[j].width_b_in);
										$("#splice" + (j + 1) + "WidthBFr").val(boxMember.splice_data[j].width_b_fr);

										$("#splice" + (j + 1) + "ThicknessCIn").val(boxMember.splice_data[j].thick_c_in);
										$("#splice" + (j + 1) + "ThicknessCFr").val(boxMember.splice_data[j].thick_c_fr);

										$("#splice" + (j + 1) + "ThicknessDIn").val(boxMember.splice_data[j].thick_d_in);
										$("#splice" + (j + 1) + "ThicknessDFr").val(boxMember.splice_data[j].thick_d_fr);
									}
									$("#memID").val(i);
									$("#memType").val("box");
								}
							}
						});
					break;
					case "builtUpIColumn":
						$('#rightFloat').load('./RightSlideBox/rightBarBuiltUPI.html',function()
						{
							for (var i = 0; i < memberList.length; i ++)
							{
								if (memberList[i].uid == sel_obj.mode + "_" + sel_obj.uid)
								{
									var configure = new_configure.builtup;
									boxMember = memberList[i];
									Object.keys(configure.memberProperties).map(function(entry)
									{
										if (entry == "profile")
										{
											if (boxMember.memberProperties[entry] != "" && boxMember.memberProperties[entry] != "select")
												$("#" + configure.memberProperties[entry]).val(boxMember.memberProperties[entry]).trigger("change");
										}
										else
											$("#" + configure.memberProperties[entry]).val(boxMember.memberProperties[entry]);
									});

									Object.keys(configure.finishProperties).map(function(entry)
									{
										if (entry != "paintType" && entry != "primerCheck")
											$("#" + configure.finishProperties[entry]).val(boxMember.finishProperties[entry]);
										else if (entry == "primerCheck")
											$("#" + configure.finishProperties[entry]).prop("checked", boxMember.finishProperties[entry]).trigger("change");
										else
											$("input[name='" + configure.finishProperties[entry] + "'][value='" + boxMember.finishProperties[entry]+"']").prop('checked', true).trigger("change");
									});

									Object.keys(configure).map(function(entry) 
									{
										if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
										{
											
											if ($("#" + configure[entry]).is(":checkbox"))
											{
												if (boxMember[entry] == "on")
													$("#" + configure[entry]).prop('checked', true).trigger("change");;
											}
											else if (entry == "weld_toptype" || entry == "weld_bottype")
												$("#" + configure[entry]).val(boxMember[entry]).trigger("change");
											else 
											{
												$("#" + configure[entry]).val(boxMember[entry]);
											}
										}
									});

									$("#boxsplicecount").val(boxMember['splice_count']).trigger("change");

									Object.keys(configure.connectionProperties).map(function(entry)
									{
										if (entry == "cap_check")
											$("#" + configure.connectionProperties[entry]).prop("checked", boxMember.connectionProperties[entry]).trigger("change");
										else if (entry == "weld_toptype" || entry == "weld_bottype")
											$("#" + configure.connectionProperties[entry]).val(boxMember.connectionProperties[entry]).trigger("change");
										else
											$("#" + configure.connectionProperties[entry]).val(boxMember.connectionProperties[entry]);
									});
									console.log($("#bc2spcm").val());

									for ( var j = 0; j < parseInt(boxMember['splice_count']); j ++ )
									{
										$(".boxsplice" + (j + 1)).show();
									}

									for ( var j = 0; j < parseInt(boxMember['splice_count']); j ++ )
									{
										$("#splice" + (j + 1) + "PosNeg").val(boxMember.splice_data[j].sign);
										$("#splice" + (j + 1) + "Ft").val(boxMember.splice_data[j].elevation_ft);
										$("#splice" + (j + 1) + "In").val(boxMember.splice_data[j].elevation_in);
										$("#splice" + (j + 1) + "Fr").val(boxMember.splice_data[j].elevation_fr);

										$("#splice" + (j + 1) + "TFPlateThicknessIn").val(boxMember.splice_data[j].topthick_in);
										$("#splice" + (j + 1) + "TFPlateThicknessFr").val(boxMember.splice_data[j].topthick_fr);

										$("#splice" + (j + 1) + "TFPlateWidthFt").val(boxMember.splice_data[j].topwidth_ft);
										$("#splice" + (j + 1) + "TFPlateWidthIn").val(boxMember.splice_data[j].topwidth_in);
										$("#splice" + (j + 1) + "TFPlateWidthFr").val(boxMember.splice_data[j].topwidth_fr);

										$("#splice" + (j + 1) + "BFPlateThicknessIn").val(boxMember.splice_data[j].botthick_in);
										$("#splice" + (j + 1) + "BFPlateThicknessFr").val(boxMember.splice_data[j].botthick_fr);

										$("#splice" + (j + 1) + "BFPlateWidthFt").val(boxMember.splice_data[j].botwidth_ft);
										$("#splice" + (j + 1) + "BFPlateWidthIn").val(boxMember.splice_data[j].botwidth_in);
										$("#splice" + (j + 1) + "BFPlateWidthFr").val(boxMember.splice_data[j].botwidth_fr);

										$("#splice" + (j + 1) + "WebPlateThicknessIn").val(boxMember.splice_data[j].webthick_in);
										$("#splice" + (j + 1) + "WebPlateThicknessFr").val(boxMember.splice_data[j].webthick_fr);

										$("#splice" + (j + 1) + "WebPlateWidthFt").val(boxMember.splice_data[j].webwidth_ft);
										$("#splice" + (j + 1) + "WebPlateWidthIn").val(boxMember.splice_data[j].webwidth_in);
										$("#splice" + (j + 1) + "WebPlateWidthFr").val(boxMember.splice_data[j].webwidth_fr);
									}
									$("#memID").val(i);
									$("#memType").val("builtup");
								}
							}
						});
					break;
					case "builtUpCRColumn":
						$('#rightFloat').load('./RightSlideBox/rightBarBuiltUPX.html',function()
						{
							for (var i = 0; i < memberList.length; i ++)
							{
								if (memberList[i].uid == sel_obj.mode + "_" + sel_obj.uid)
								{
									var configure = new_configure.crucified;
									boxMember = memberList[i];
									Object.keys(configure.memberProperties).map(function(entry)
									{
										if (entry == "profile")
										{
											if (boxMember.memberProperties[entry] != "" && boxMember.memberProperties[entry] != "select")
											{
												$("#" + configure.memberProperties[entry]).val(boxMember.memberProperties[entry]).trigger("change");
											}
										}
										else
											$("#" + configure.memberProperties[entry]).val(boxMember.memberProperties[entry]);
									});

									Object.keys(configure.finishProperties).map(function(entry)
									{
										if (entry != "paintType" && entry != "primerCheck")
											$("#" + configure.finishProperties[entry]).val(boxMember.finishProperties[entry]);
										else if (entry == "primerCheck")
											$("#" + configure.finishProperties[entry]).prop("checked", boxMember.finishProperties[entry]).trigger("change");
										else
											$("input[name='" + configure.finishProperties[entry] + "'][value='" + boxMember.finishProperties[entry] + "']").prop('checked', true);
									});

									Object.keys(configure).map(function(entry) 
									{
										if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
										{
											
											if ($("#" + configure[entry]).is(":checkbox"))
											{
												if (boxMember[entry] == "on")
													$("#" + configure[entry]).prop('checked', true).trigger("change");
											}
											else if (entry == "wt_profile" || entry == "weld_type")
											{
												$("#" + configure[entry]).val(boxMember[entry]).trigger("change");
											}
											else 
											{
												$("#" + configure[entry]).val(boxMember[entry])
											}
										}
									});

									$("#splicecount").val(boxMember['splice_count']).trigger('change');

									Object.keys(configure.connectionProperties).map(function(entry)
									{
										if (entry == "cap_check")
											$("#" + configure.connectionProperties[entry]).prop("checked", boxMember.connectionProperties[entry]).trigger("change");
										else
											$("#" + configure.connectionProperties[entry]).val(boxMember.connectionProperties[entry]);
									});
									
									for ( var j = 0; j < parseInt(boxMember['splice_count']); j ++ )
									{
										$(".splice" + (j + 1)).show();
									}

									for ( var j = 0; j < parseInt(boxMember['splice_count'].replace("sc", "")); j ++ )
									{
										$("#splice" + (j + 1) + "PosNeg").val(boxMember.splice_data[j].sign);
										$("#splice" + (j + 1) + "Ft").val(boxMember.splice_data[j].elevation_ft);
										$("#splice" + (j + 1) + "In").val(boxMember.splice_data[j].elevation_in);
										$("#splice" + (j + 1) + "Fr").val(boxMember.splice_data[j].elevation_fr);
										$("#splice" + (j + 1) + "WProfile").val(boxMember.splice_data[j].profile);
									}
									$("#memID").val(i);
									$("#memType").val("crucified");
								}
							}
						});
					break;
					case "builtUpCHColumn":
						$('#rightFloat').load('./RightSlideBox/rightBarBuiltUPCH.html',function()
						{
							for (var i = 0; i < memberList.length; i ++)
							{
								if (memberList[i].uid == sel_obj.mode + "_" + sel_obj.uid)
								{
									var configure = new_configure.builtupPlate;
									boxMember = memberList[i];
									Object.keys(configure.memberProperties).map(function(entry)
									{
										if (entry == "profile")
										{
											if (boxMember.memberProperties[entry] != "" && boxMember.memberProperties[entry] != "select")
											{
												$("#" + configure.memberProperties[entry]).val(boxMember.memberProperties[entry]).trigger("change");
											}
										}
										else
											$("#" + configure.memberProperties[entry]).val(boxMember.memberProperties[entry]);
									});

									Object.keys(configure.finishProperties).map(function(entry)
									{
										if (entry != "paintType" && entry != "primerCheck")
											$("#" + configure.finishProperties[entry]).val(boxMember.finishProperties[entry]);
										else if (entry == "primerCheck")
											$("#" + configure.finishProperties[entry]).prop("checked", boxMember.finishProperties[entry]).trigger("change");
										else
											$("input[name='" + configure.finishProperties[entry] + "'][value='" + boxMember.finishProperties[entry] + "']").prop('checked', true);
									});

									Object.keys(configure).map(function(entry) 
									{
										if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
										{
											if (entry == "connect_channel")
												$("#" + configure[entry]).val(boxMember[entry]).trigger("change");
											else if ($("#" + configure[entry]).is(":checkbox"))
											{
												if (boxMember[entry] == "on")
													$("#" + configure[entry]).prop('checked', true).trigger("change");
											}
											else 
											{
												$("#" + configure[entry]).val(boxMember[entry]);
											}
										}
									});

									$("#splicecount").val(boxMember['splice_count']).trigger('change');

									Object.keys(configure.connectionProperties).map(function(entry)
									{
										if (entry == "cap_check")
											$("#" + configure.connectionProperties[entry]).prop("checked", boxMember.connectionProperties[entry]).trigger("change");
										else
											$("#" + configure.connectionProperties[entry]).val(boxMember.connectionProperties[entry]);
									});
									
									for ( var j = 0; j < parseInt(boxMember['splice_count']); j ++ )
									{
										$(".splice" + (j + 1)).show();
									}

									for ( var j = 0; j < parseInt(boxMember['splice_count']); j ++ )
									{
										$("#splicee" + (j + 1) + "posneg").val(boxMember.splice_data[j].sign);
										$("#splicePositionLeftEndFt" + (j + 1)).val(boxMember.splice_data[j].elevation_ft);
										$("#splicePositionLeftEndIn" + (j + 1)).val(boxMember.splice_data[j].elevation_in);
										$("#splicePositionLeftEndFr" + (j + 1)).val(boxMember.splice_data[j].elevation_fr);
										$("#spliceel" + (j + 1) + "profile").val(boxMember.splice_data[j].profile);
									}

									$("#memID").val(i);
									$("#memType").val("builtupPlate");
								}
							}
						});
					break;
					case "ibeam":
						$('#rightFloat').load('./RightSlideBox/rightBarInfillBeam.html', function() 
						{

					        for (var i = 0; i < memberList.length; i ++)
							{
								if (memberList[i].uid == sel_obj.mode + "_" + sel_obj.uid)
								{
									var configure = new_configure.ibeam;
									ibeamMember = memberList[i];
									Object.keys(configure.memberProperties).map(function(entry)
									{
										if (entry == "profile")
										{
											if (ibeamMember.memberProperties[entry] != "" && ibeamMember.memberProperties[entry] != "select")
												$("#" + configure.memberProperties[entry]).val(ibeamMember.memberProperties[entry]).trigger("change");
										}
										else
											$("#" + configure.memberProperties[entry]).val(ibeamMember.memberProperties[entry]);
									});

									Object.keys(configure.finishProperties).map(function(entry)
									{
										if (entry != "paintType" && entry != "primerCheck")
											$("#" + configure.finishProperties[entry]).val(ibeamMember.finishProperties[entry]);
										else if (entry == "primerCheck")
											$("#" + configure.finishProperties[entry]).prop("checked", ibeamMember.finishProperties[entry]).trigger("change");
										else
											$("input[name='" + configure.finishProperties[entry] + "'][value='" + ibeamMember.finishProperties[entry] + "']").prop('checked', true);
									});

									Object.keys(configure.connectionProperties).map(function(entry)
									{
										$("#" + configure.connectionProperties[entry]).val(ibeamMember.connectionProperties[entry]);
									});
									
									Object.keys(configure).map(function(entry) 
									{
										if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
										{
											if ($("#" + configure[entry]).is(":checkbox"))
											{
												if (ibeamMember[entry] == "on")
												{
													$("#" + configure[entry]).prop('checked', true).trigger("change");
												}
												else
													$("#" + configure[entry]).prop('checked', false);
											}
											else if (entry == "position_type")
											{
												$("#ESConnectiontype").val(ibeamMember["position_type"]).trigger("change");
											}
											else 
											{
												$("#" + configure[entry]).val(ibeamMember[entry]);
											}
										}
									});
									if (ibeamMember["position_type"] == "UES")
									{
										for ( var j = 0; j < ibeamMember.origindistanceData.length; j ++ )
										{
											$("#ispacing" + (j + 1) + "ft").val(ibeamMember.origindistanceData[j]);
										}
									}

									$(".hideAll").hide();
									$("#infillbeamalignment").val(ibeamMember["alignment"]).trigger("change");

									if (ibeamMember['alignment'] == "Skewed")
									{
										$(".skewed").show();
						                $(".efieldsFB").hide();
						                $(".efieldsFW").show();
						                $(".einXsplice1").hide();
						                $(".einXsplice2").hide();
						                $(".sloppedSkewed").hide();

						                Object.keys(skew_slop_option.skew).map(function(entry)
						                {
						                	$("#" + skew_slop_option.skew[entry]).val(ibeamMember[entry]);
						                })
									}
									else if (ibeamMember['alignment'] == "Sloped")
									{
										$(".efieldsFW").hide();
						                $(".efieldsFB").show();
						                $(".einXsplice1").show();
						                $(".skewed").hide();
						                $(".sloppedSkewed").hide();
						                Object.keys(skew_slop_option.slop).map(function(entry)
						                {
						                	$("#" + skew_slop_option.slop[entry]).val(ibeamMember[entry]);
						                })
									}
									else if (ibeamMember['alignment'] == "Sloped & Skewed")
									{
										$(".skewed").hide();
						                $(".efieldsFB").hide();
						                $(".efieldsFW").hide();
						                $(".einXsplice1").hide();
						                $(".einXsplice2").hide();
						                $(".sloppedSkewed").show();
						                Object.keys(skew_slop_option.slop_skew).map(function(entry)
						                {
						                	$("#" + skew_slop_option.slop_skew[entry]).val(ibeamMember[entry]);
						                })
									}
									else
									{
										$(".efieldsFW").show();
						                $(".efieldsFB").hide();
						                $(".einXsplice1").hide();
						                $(".einXsplice2").hide();
						                $(".skewed").hide();
						                $(".sloppedSkewed").hide();
										Object.keys(skew_slop_option.slop).map(function(entry)
						                {
						                	$("#" + skew_slop_option.slop[entry]).val(ibeamMember[entry]);
						                });

						                Object.keys(skew_slop_option.slop_skew).map(function(entry)
						                {
						                	$("#" + skew_slop_option.slop_skew[entry]).val(ibeamMember[entry]);
						                });
									}
									
									$("#memID").val(i);
									$("#memType").val("ibeam");
								}
							}
						});
					break;
					case "gridLine":
						$('#rightFloat').load('./RightSlideBox/rightBarGrid.html', function() 
						{
							$("#rightGrid #direction").val(sel_obj.type);
							$("#rightGrid #index").val(sel_obj.index);
						});
					break;
					case "cantBeam":
						$('#rightFloat').load('./RightSlideBox/rightBarCantilever.html', function() 
						{
							for (var i = 0; i < memberList.length; i ++)
							{
								if (memberList[i].uid == sel_obj.mode + "_" + sel_obj.uid)
								{
									var configure = new_configure.cantileverBeam;
									cantBeamMember = memberList[i];
									Object.keys(configure.memberProperties).map(function(entry)
									{
										if (entry == "profile" && cantBeamMember.memberProperties[entry] != "select" && cantBeamMember.memberProperties[entry] != "")
											$("#" + configure.memberProperties[entry]).val(cantBeamMember.memberProperties[entry]).trigger("change");
										else if (entry != "profile")
											$("#" + configure.memberProperties[entry]).val(cantBeamMember.memberProperties[entry]);
									});

									Object.keys(configure.finishProperties).map(function(entry)
									{
										if (entry != "paintType" && entry != "primerCheck")
											$("#" + configure.finishProperties[entry]).val(cantBeamMember.finishProperties[entry]);
										else if (entry == "primerCheck")
											$("#" + configure.finishProperties[entry]).prop("checked", cantBeamMember.finishProperties[entry]).trigger("change");
										else
											$("input[name='" + configure.finishProperties[entry] + "'][value='" + cantBeamMember.finishProperties[entry] + "']").prop('checked', true);
									});

									Object.keys(configure.connectionProperties).map(function(entry)
									{
										$("#" + configure.connectionProperties[entry]).val(cantBeamMember.connectionProperties[entry]);
									});
									
									Object.keys(configure).map(function(entry) 
									{
										if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
										{
											if ($("#" + configure[entry]).is(":checkbox"))
											{
												if (cantBeamMember[entry] == "on")
													$("#" + configure[entry]).prop('checked', true).trigger("change");
												// else
												// 	$("#" + configure[entry]).prop('checked', false).trigger('change');
											}
											else 
											{
												$("#" + configure[entry]).val(cantBeamMember[entry]);
											}
										}
									});

									$(".hideAll").hide();

									if (cantBeamMember['alignment'] == "Skewed")
									{
										$("#clbeamalignment").val("Skewed").trigger("change");
										Object.keys(skew_slop_option.skew).map(function(entry)
						                {
						                	$("#" + skew_slop_option.skew[entry]).val(cantBeamMember[entry]);
						                })
									}
									else if (cantBeamMember['alignment'] == "Sloped")
									{
										$("#clbeamalignment").val("Sloped").trigger("change");
										Object.keys(skew_slop_option.slop).map(function(entry)
						                {
						                	$("#" + skew_slop_option.slop[entry]).val(cantBeamMember[entry]);
						                })
									}
									else if (cantBeamMember['alignment'] == "Sloped & Skewed")
									{
										$("#clbeamalignment").val("Sloped & Skewed").trigger("change");
										Object.keys(skew_slop_option.slop_skew).map(function(entry)
						                {
						                	$("#" + skew_slop_option.slop_skew[entry]).val(cantBeamMember[entry]);
						                })
									}
									else
									{
										$("#clbeamalignment").val("Straight").trigger("change");
										Object.keys(skew_slop_option.slop).map(function(entry)
						                {
						                	$("#" + skew_slop_option.slop[entry]).val(cantBeamMember[entry]);
						                });

						                Object.keys(skew_slop_option.slop_skew).map(function(entry)
						                {
						                	$("#" + skew_slop_option.slop_skew[entry]).val(cantBeamMember[entry]);
						                });
									}
									$("#memID").val(i);
									$("#memType").val("cantileverBeam");
								}
							}
						});
					break;
					case "pgirder":
						$('#rightFloat').load('./RightSlideBox/rightBarPlateGirder.html', function() 
						{
							for (var i = 0; i < memberList.length; i ++)
							{
								if (memberList[i].uid == sel_obj.mode + "_" + sel_obj.uid)
								{
									var configure = new_configure.pgirder;
									pgirderMember = memberList[i];
									Object.keys(configure.memberProperties).map(function(entry)
									{
										if (entry == "profile")
										{
											if (pgirderMember.memberProperties[entry] != "" && pgirderMember.memberProperties[entry] != "select")
											{
												$("#" + configure.memberProperties[entry]).val(pgirderMember.memberProperties[entry]).trigger("change");
											}
										}
										else
											$("#" + configure.memberProperties[entry]).val(pgirderMember.memberProperties[entry]);
									});

									Object.keys(configure.finishProperties).map(function(entry)
									{
										if (entry != "paintType" && entry != "primerCheck")
											$("#" + configure.finishProperties[entry]).val(pgirderMember.finishProperties[entry]);
										else if (entry == "primerCheck")
											$("#" + configure.finishProperties[entry]).prop("checked", pgirderMember.finishProperties[entry]).trigger("change");
										else
											$("input[name='" + configure.finishProperties[entry] + "'][value='" + pgirderMember.finishProperties[entry] + "']").prop('checked', true);
									});

									Object.keys(configure.connectionProperties).map(function(entry)
									{
										$("#" + configure.connectionProperties[entry]).val(pgirderMember.connectionProperties[entry]);
									});
									
									Object.keys(configure).map(function(entry) 
									{
										if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
										{
											
											if ($("#" + configure[entry]).is(":checkbox"))
											{
												if (pgirderMember[entry] == "on")
													$("#" + configure[entry]).prop('checked', true).trigger("change");
											}
											else if (entry == "splice_count")
												$("#" + configure[entry]).val(pgirderMember[entry]).trigger("change");
											else 
											{
												$("#" + configure[entry]).val(pgirderMember[entry]);
											}
										}
									});

									$(".hideAll").hide();

									if (pgirderMember['alignment'] == "Skewed")
									{
										$(".skewed").show();
						                $(".efieldsFB").hide();
						                $(".efieldsFW").show();
						                $(".einXsplice1").hide();
						                $(".einXsplice2").hide();
						                $(".sloppedSkewed").hide();

						                Object.keys(skew_slop_option.skew).map(function(entry)
						                {
						                	$("#" + skew_slop_option.skew[entry]).val(pgirderMember[entry]);
						                })
									}
									else if (pgirderMember['alignment'] == "Sloped")
									{
										$(".efieldsFW").hide();
						                $(".efieldsFB").show();
						                $(".einXsplice1").show();
						                $(".skewed").hide();
						                $(".sloppedSkewed").hide();
						                Object.keys(skew_slop_option.slop).map(function(entry)
						                {
						                	$("#" + skew_slop_option.slop[entry]).val(pgirderMember[entry]);
						                })
									}
									else if (pgirderMember['alignment'] == "Sloped & Skewed")
									{
										$(".skewed").hide();
						                $(".efieldsFB").hide();
						                $(".efieldsFW").hide();
						                $(".einXsplice1").hide();
						                $(".einXsplice2").hide();
						                $(".sloppedSkewed").show();
						                Object.keys(skew_slop_option.slop_skew).map(function(entry)
						                {
						                	$("#" + skew_slop_option.slop_skew[entry]).val(pgirderMember[entry]);
						                })
									}
									else
									{
										Object.keys(skew_slop_option.slop).map(function(entry)
						                {
						                	$("#" + skew_slop_option.slop[entry]).val(pgirderMember[entry]);
						                });

						                Object.keys(skew_slop_option.slop_skew).map(function(entry)
						                {
						                	$("#" + skew_slop_option.slop_skew[entry]).val(pgirderMember[entry]);
						                });
									}

									for (var j = 0; j < parseInt(pgirderMember["splice_count"]); j ++)
									{
										$("#splicePositionLeftEndFt" + (j + 1)).val(pgirderMember.splice_data[j].ft);
										$("#splicePositionLeftEndIn" + (j + 1)).val(pgirderMember.splice_data[j].in);
										$("#splicePositionLeftEndFr" + (j + 1)).val(pgirderMember.splice_data[j].fr);
										$("#parallelmodalprofile" + (j + 1)).val(pgirderMember.splice_data[j].profile);

										$("#splicePositionTopThicknessIn" + (j + 1)).val(pgirderMember.splice_data[j].top_thick_in);
										$("#splicePositionTopThicknessFr" + (j + 1)).val(pgirderMember.splice_data[j].top_thick_fr);
										$("#splicePositionTopWidthft" + (j + 1)).val(pgirderMember.splice_data[j].top_width_ft);
										$("#splicePositionTopWidthIn" + (j + 1)).val(pgirderMember.splice_data[j].top_width_in);
										$("#splicePositionTopWidthFr" + (j + 1)).val(pgirderMember.splice_data[j].top_width_fr);

										$("#splicePositionBottomThicknessIn" + (j + 1)).val(pgirderMember.splice_data[j].bottom_thick_in);
										$("#splicePositionBottomThicknessFr" + (j + 1)).val(pgirderMember.splice_data[j].bottom_thick_fr);
										$("#splicePositionBottomWidthft" + (j + 1)).val(pgirderMember.splice_data[j].bottom_width_ft);
										$("#splicePositionBottomWidthIn" + (j + 1)).val(pgirderMember.splice_data[j].bottom_width_in);
										$("#splicePositionBottomWidthFr" + (j + 1)).val(pgirderMember.splice_data[j].bottom_width_fr);

										$("#splicePositionWebThicknessIn" + (j + 1)).val(pgirderMember.splice_data[j].web_thick_in);
										$("#splicePositionWebThicknessFr" + (j + 1)).val(pgirderMember.splice_data[j].web_thick_fr);
										$("#splicePositionWebWidthft" + (j + 1)).val(pgirderMember.splice_data[j].web_width_ft);
										$("#splicePositionWebWidthIn" + (j + 1)).val(pgirderMember.splice_data[j].web_width_in);
										$("#splicePositionWebWidthFr" + (j + 1)).val(pgirderMember.splice_data[j].web_width_fr);
									}

									$("#memID").val(i);
									$("#memType").val("pgirder");
								}
							}
						});
					break;
					case "truss":
						switch (sel_obj.memType)
						{
							case "pitch_vertical":
								$("#rightFloat").load("./RightSlideBox/Rightpitched-vertical.html", function()
								{
									$("#memType").val("");
									var vert_arr = [];
									var memberID = sel_obj.uid;
									var member_index = -1;
									var index;
									if (sel_obj.id_arr != undefined)
										for (j = 0; j < sel_obj.id_arr.length; j ++)
										{
											vert_arr.push(parseInt(sel_obj.id_arr[j].split("_")[2]));
										}
									
									if (vert_arr.length <= 1)
									{
										for ( i = 0; i < memberList.length; i ++ )
										{
											index = parseInt(sel_obj.type.split("_")[2]);
											
											if (memberList[i].uid == "truss_" + memberID)
											{
												$("#pitchedprofile2").val(memberList[i].verticals[index].profile);
												$("#pitchmemorientation").val(memberList[i].verticals[index].orientation);
												$("#pitchedgrade2").val(memberList[i].verticals[index].materialgrade);
												member_index = i;
											}
										}

										$("#rightFloat .qckModifyBtn").click(function()
										{
											memberList[member_index].verticals[index].profile = $("#pitchedprofile2").val();
											memberList[member_index].verticals[index].orientation = $("#pitchmemorientation").val();
											memberList[member_index].verticals[index].materialgrade = $("#pitchedgrade2").val();
										});
									}
									else
									{
										$("#rightFloat .qckModifyBtn").click(function()
										{
											for ( i = 0; i < memberList.length; i ++ )
											{
												if (memberList[i].uid == "truss_" + memberID)
													member_index = i;
											}
											for (j = 0; j < vert_arr.length; j ++)
											{
												index = vert_arr[j];
												memberList[member_index].verticals[index].profile = $("#pitchedprofile2").val();
												memberList[member_index].verticals[index].orientation = $("#pitchmemorientation").val();
												memberList[member_index].verticals[index].materialgrade = $("#pitchedgrade2").val();
											}
											reloadGrid();
											$("#hiddenSlide").click();
											$("#rightFloat").html('');
										});
									}
								});
							break;
							case "pitch_brace":
								$("#rightFloat").load("./RightSlideBox/Rightpitched-inclined.html", function()
								{
									$("#memType").val("");
									var index;
									var memberID = sel_obj.uid;
									var member_index = -1;
									var vert_arr = [];
									if (sel_obj.id_arr != undefined)
										for (j = 0; j < sel_obj.id_arr.length; j ++)
										{
											vert_arr.push(parseInt(sel_obj.id_arr[j].split("_")[2]));
										}

									if (vert_arr.length <= 1)
									{
										for ( i = 0; i < memberList.length; i ++ )
										{
											index = parseInt(sel_obj.type.split("_")[2]);
											if (memberList[i].uid == "truss_" + memberID)
											{
												$("#pitchedprofile3").val(memberList[i].inclinedbracings[index].profile);
												$("#pitchmemorientation2").val(memberList[i].inclinedbracings[index].orientation);
												$("#pitchedgrade3").val(memberList[i].inclinedbracings[index].materialgrade);
												console.log(memberList[i].inclinedbracings[index].pattern);
												$("#shapeicons").val(("s" + layoutToValue(memberList[i].inclinedbracings[index].pattern)));
												member_index = i;
											}
										}
										$("#rightFloat .qckModifyBtn").click(function()
										{
											memberList[member_index].inclinedbracings[index].profile = $("#pitchedprofile3").val();
											memberList[member_index].inclinedbracings[index].orientation = $("#pitchmemorientation2").val();
											memberList[member_index].inclinedbracings[index].materialgrade = $("#pitchedgrade3").val();
											memberList[member_index].inclinedbracings[index].pattern = convertValueToLayout($("#shapeicons").val().replace("s", ""));
											
											reloadGrid();
											$("#hiddenSlide").click();
											$("#rightFloat").html('');
										});
									}
									else 
									{
										$("#rightFloat .qckModifyBtn").click(function()
										{
											for ( i = 0; i < memberList.length; i ++ )
											{
												if (memberList[i].uid == "truss_" + memberID)
													member_index = i;
											}
											for ( j = 0; j < vert_arr.length; j ++ )
											{
												index = vert_arr[j];
												memberList[member_index].inclinedbracings[index].profile = $("#pitchedprofile3").val();
												memberList[member_index].inclinedbracings[index].orientation = $("#pitchmemorientation2").val();
												memberList[member_index].inclinedbracings[index].materialgrade = $("#pitchedgrade3").val();
												memberList[member_index].inclinedbracings[index].pattern = convertValueToLayout($("#shapeicons").val().replace("s", ""));
											}
											reloadGrid();
											$("#hiddenSlide").click();
											$("#rightFloat").html('');
										});
									}
								});
							break;
							case "pitch_topchord":
								$("#rightFloat").load("./RightSlideBox/Rightpitched-top-chord.html", function()
								{
									$("#memType").val("");
									var member_index = -1;
									for (i = 0; i < memberList.length; i ++)
									{
										if (memberList[i].uid = sel_obj.mode + "_" + sel_obj.uid)
										{
											$("#pitchedprofile").val(memberList[i].topchord.profile);
											$("#pitchedorientation").val(memberList[i].topchord.orientation);
											$("#pitchedgrade").val(memberList[i].topchord.materialGrade);
											member_index = i;
										}
									}
									$("#rightFloat .qckModifyBtn").click(function()
									{
										memberList[member_index].topChordProfile = $("#pitchedprofile").val();
										memberList[member_index].topChordOrientation = $("#pitchedorientation").val();
										memberList[member_index].topChordGrade = $("#pitchedgrade").val();
										reloadGrid();
										$("#hiddenSlide").click();
										$("#rightFloat").html('');
									});
								});
							break;
							case "pitch_bottomchord":
								$("#rightFloat").load("./RightSlideBox/Rightpitched-bottom-chord.html", function()
								{
									$("#memType").val("");
									var member_index = -1;
									for (i = 0; i < memberList.length; i ++)
									{
										if (memberList[i].uid = sel_obj.mode + "_" + sel_obj.uid)
										{
											$("#pitchedprofile").val(memberList[i].bottomchord.profile);
											$("#pitchedorientation").val(memberList[i].bottomchord.orientation);
											$("#pitchedgrade").val(memberList[i].bottomchord.materialGrade);
											member_index = i;
										}
									}
									$("#rightFloat .qckModifyBtn").click(function()
									{
										memberList[member_index].bottomChordProfile = $("#pitchedprofile1").val();
										memberList[member_index].bottomChordOrientation = $("#pitchedorientation1").val();
										memberList[member_index].bottomChordGrade = $("#pitchedgrade1").val();
										reloadGrid();
										$("#hiddenSlide").click();
										$("#rightFloat").html('');
									});
								});
							break;
							case undefined:
								$('#rightFloat').load('./RightSlideBox/pitchedrightside.html', function()
								{
									for (var i = 0; i < memberList.length; i ++)
									{
										if (memberList[i].uid == sel_obj.mode + "_" + sel_obj.uid)
										{
											var configure = new_configure.truss;
											trussMember = memberList[i];
											Object.keys(configure.memberProperties).map(function(entry)
											{
												if (entry == "profile")
												{
													if (trussMember.memberProperties[entry] != "select" && trussMember.memberProperties[entry] != "")
													{
														$("#" + configure.memberProperties[entry]).val(trussMember.memberProperties[entry]).trigger("change");
													}
												}
												else 
													$("#" + configure.memberProperties[entry]).val(trussMember.memberProperties[entry]);
											});

											Object.keys(configure.finishProperties).map(function(entry)
											{
												if (entry != "paintType")
													$("#" + configure.finishProperties[entry]).val(trussMember.finishProperties[entry]);
												else
													$("input[name='" + configure.finishProperties[entry] + "'][value='" + trussMember.finishProperties[entry] + "']").prop('checked', true);
											});

											Object.keys(configure.connectionProperties).map(function(entry)
											{
												$("#" + configure.connectionProperties[entry]).val(trussMember.connectionProperties[entry]);
											});
											
											Object.keys(configure).map(function(entry) 
											{
												if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
												{
													
													if ($("#" + configure[entry]).is(":checkbox"))
													{
														if (trussMember[entry] == "on")
															$("#" + configure[entry]).prop('checked', true);
														// else
														// 	$("#" + configure[entry]).prop('checked', false).trigger('change');
													}
													else 
													{
														$("#" + configure[entry]).val(trussMember[entry]);
													}
												}
											});
											
											for ( var j = 0; j < parseInt(trussMember['splice_count']); j ++ )
											{
												$(".tpitXsplice" + (j + 1)).show();
											}

											for ( var j = 0; j < parseInt(trussMember['splice_count']); j ++ )
											{
												$("#splicePosition" + (j + 1) + "LeftEndFt").val(trussMember.splice_data[j].left_ft);
												$("#splicePosition" + (j + 1) + "LeftEndIn").val(trussMember.splice_data[j].left_in);
												$("#splicePosition" + (j + 1) + "LeftEndFr").val(trussMember.splice_data[j].left_fr);
												$("#trapTopChordProfile" + (j + 1)).val(trussMember.splice_data[j].topChordProfile);
												$("#trapBottomChordProfile" + (j + 1)).val(trussMember.splice_data[j].bottomChordProfile);
											}

											if (trussMember.verticalSpacing == "ptUE")
											{
												for (j = 0; j < parseInt(trussMember.inclineNum); j++)
												{
													$(".pshowtv" + (j + 1)).show();
													$("#pitchedvertical" + (j + 1) + "ft").val(trussMember.verticals[j].spacing_ft);
													$("#pitchedvertical" + (j + 1) + "in").val(trussMember.verticals[j].spacing_in);
													$("#pitchedvertical" + (j + 1) + "fr").val(trussMember.verticals[j].spacing_fr);
												}
											}

											$("#memID").val(i);
											$("#memType").val("truss");
										}
									}
								});
							break;
						}
						$("#rightFloat .qckModifyBtn").click(function()
						{
							$("#hiddenSlide").click();
							$("#rightFloat").html('');
						});
					break;
					case "trapeTruss":
						switch (sel_obj.memType)
						{
							case "trape_vertical":
								$("#rightFloat").load("./RightSlideBox/Righttra-vertical.html", function()
								{
									$("#memType").val("");
									var vert_arr = [];
									var memberID = sel_obj.uid;
									var member_index = -1;
									var index;
									if (sel_obj.id_arr != undefined)
										for (j = 0; j < sel_obj.id_arr.length; j ++)
										{
											vert_arr.push(parseInt(sel_obj.id_arr[j].split("_")[2]));
										}
									
									if (vert_arr.length <= 1)
									{
										for ( i = 0; i < memberList.length; i ++ )
										{
											index = parseInt(sel_obj.type.split("_")[2]);
											
											if (memberList[i].uid == "trapeTruss_" + memberID)
											{
												$("#trapezoidalprofile2").val(memberList[i].verticals[index].profile);
												$("#verticalMemberorientation").val(memberList[i].verticals[index].orientation);
												$("#verticalMaterialGrade").val(memberList[i].verticals[index].materialgrade);
												member_index = i;
											}
										}

										$("#rightFloat .qckModifyBtn").click(function()
										{
											memberList[member_index].verticals[index].profile = $("#trapezoidalprofile2").val();
											memberList[member_index].verticals[index].orientation = $("#verticalMemberorientation").val();
											memberList[member_index].verticals[index].materialgrade = $("#verticalMaterialGrade").val();
										});
									}
									else
									{
										$("#rightFloat .qckModifyBtn").click(function()
										{
											for ( i = 0; i < memberList.length; i ++ )
											{
												if (memberList[i].uid == "trapeTruss_" + memberID)
													member_index = i;
											}
											for (j = 0; j < vert_arr.length; j ++)
											{
												index = vert_arr[j];
												memberList[member_index].verticals[index].profile = $("#trapezoidalprofile2").val();
												memberList[member_index].verticals[index].orientation = $("#verticalMemberorientation").val();
												memberList[member_index].verticals[index].materialgrade = $("#verticalMaterialGrade").val();
											}
											reloadGrid();
											$("#hiddenSlide").click();
											$("#rightFloat").html('');
										});
									}
								});
							break;
							case "trape_brace":
								$("#rightFloat").load("./RightSlideBox/Righttra-inclined.html", function()
								{
									$("#memType").val("");
									var index;
									var memberID = sel_obj.uid;
									var member_index = -1;
									var vert_arr = [];
									if (sel_obj.id_arr != undefined)
										for (j = 0; j < sel_obj.id_arr.length; j ++)
										{
											vert_arr.push(parseInt(sel_obj.id_arr[j].split("_")[2]));
										}

									if (vert_arr.length <= 1)
									{
										for ( i = 0; i < memberList.length; i ++ )
										{
											index = parseInt(sel_obj.type.split("_")[2]);
											if (memberList[i].uid == "trapeTruss_" + memberID)
											{
												$("#trapezoidalprofile3").val(memberList[i].inclinedbracings[index].profile);
												$("#inclinedMemberOrientation").val(memberList[i].inclinedbracings[index].orientation);
												$("#inclinedMaterialGrade").val(memberList[i].inclinedbracings[index].materialgrade);
												$("#shapeicons").val("s" + layoutToValue(memberList[i].inclinedbracings[index].pattern));
												member_index = i;
											}
										}
										$("#rightFloat .qckModifyBtn").click(function()
										{
											memberList[member_index].inclinedbracings[index].profile = $("#trapezoidalprofile3").val();
											memberList[member_index].inclinedbracings[index].orientation = $("#inclinedMemberOrientation").val();
											memberList[member_index].inclinedbracings[index].materialgrade = $("#inclinedMaterialGrade").val();
											memberList[member_index].inclinedbracings[index].pattern = convertValueToLayout($("#shapeicons").val().replace("s", ""));

											reloadGrid();
											$("#hiddenSlide").click();
											$("#rightFloat").html('');
										});
									}
									else 
									{
										$("#rightFloat .qckModifyBtn").click(function()
										{
											for ( i = 0; i < memberList.length; i ++ )
											{
												if (memberList[i].uid == "trapeTruss_" + memberID)
													member_index = i;
											}
											for ( j = 0; j < vert_arr.length; j ++ )
											{
												index = vert_arr[j];
												memberList[member_index].inclinedbracings[index].profile = $("#trapezoidalprofile3").val();
												memberList[member_index].inclinedbracings[index].orientation = $("#inclinedMemberOrientation").val();
												memberList[member_index].inclinedbracings[index].materialgrade = $("#inclinedMaterialGrade").val();
												memberList[member_index].inclinedbracings[index].pattern = convertValueToLayout($("#shapeicons").val().replace("s", ""));
											}
											reloadGrid();
											$("#hiddenSlide").click();
											$("#rightFloat").html('');
										});
									}
								});
							break;
							case "trape_topchord":
								$("#rightFloat").load("./RightSlideBox/Righttra-top-chord.html", function()
								{
									$("#memType").val("");
									var member_index = -1;
									for (i = 0; i < memberList.length; i ++)
									{
										if (memberList[i].uid = sel_obj.mode + "_" + sel_obj.uid)
										{
											$("#trapezoidalprofile").val(memberList[i].topchord.profile);
											$("#topChordMemberprofile").val(memberList[i].topchord.orientation);
											$("#topChordMaterialGrade").val(memberList[i].topchord.materialGrade);
											member_index = i;
										}
									}
									$("#rightFloat .qckModifyBtn").click(function()
									{
										memberList[member_index].topChordProfile = $("#trapezoidalprofile").val();
										memberList[member_index].topChordOrientation = $("#topChordMemberprofile").val();
										memberList[member_index].topChordGrade = $("#topChordMaterialGrade").val();
										reloadGrid();
										$("#hiddenSlide").click();
										$("#rightFloat").html('');
									});
								});
							break;
							case "trape_bottomchord":
								$("#rightFloat").load("./RightSlideBox/Righttra-bottom-chord.html", function()
								{
									$("#memType").val("");
									var member_index = -1;
									for (i = 0; i < memberList.length; i ++)
									{
										if (memberList[i].uid = sel_obj.mode + "_" + sel_obj.uid)
										{
											$("#trapezoidalprofile1").val(memberList[i].bottomchord.profile);
											$("#bottomChordMemberprofile").val(memberList[i].bottomchord.orientation);
											$("#bottomChordMaterialGrade").val(memberList[i].bottomchord.materialGrade);
											member_index = i;
										}
									}
									$("#rightFloat .qckModifyBtn").click(function()
									{
										memberList[member_index].bottomChordProfile = $("#trapezoidalprofile1").val();
										memberList[member_index].bottomChordOrientation = $("#bottomChordMemberprofile").val();
										memberList[member_index].bottomChordGrade = $("#bottomChordMaterialGrade").val();
										reloadGrid();
										$("#hiddenSlide").click();
										$("#rightFloat").html('');
									});
								});
							break;
							case undefined:
								$('#rightFloat').load('./RightSlideBox/Trapezodalrightside.html', function()
								{
									for (var i = 0; i < memberList.length; i ++)
									{
										if (memberList[i].uid == sel_obj.mode + "_" + sel_obj.uid)
										{
											var configure = new_configure.trapeTruss;
											trussMember = memberList[i];
											Object.keys(configure.memberProperties).map(function(entry)
											{
												if (entry == "profile")
												{
													if (trussMember.memberProperties[entry] != "select" && trussMember.memberProperties[entry] != "")
													{
														$("#" + configure.memberProperties[entry]).val(trussMember.memberProperties[entry]).trigger("change");
													}
												}
												else 
													$("#" + configure.memberProperties[entry]).val(trussMember.memberProperties[entry]);
											});

											Object.keys(configure.finishProperties).map(function(entry)
											{
												if (entry != "paintType")
													$("#" + configure.finishProperties[entry]).val(trussMember.finishProperties[entry]);
												else
													$("input[name='" + configure.finishProperties[entry] + "'][value='" + trussMember.finishProperties[entry] + "']").prop('checked', true);
											});

											Object.keys(configure.connectionProperties).map(function(entry)
											{
												$("#" + configure.connectionProperties[entry]).val(trussMember.connectionProperties[entry]);
											});
											
											Object.keys(configure).map(function(entry) 
											{
												if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
												{
													
													if ($("#" + configure[entry]).is(":checkbox"))
													{
														if (trussMember[entry] == "on")
															$("#" + configure[entry]).prop('checked', true);
														// else
														// 	$("#" + configure[entry]).prop('checked', false).trigger('change');
													}
													else 
													{
														$("#" + configure[entry]).val(trussMember[entry]);
													}
												}
											});
											
											for ( var j = 0; j < parseInt(trussMember['splice_count']); j ++ )
											{
												$(".traXsplice" + (j + 1)).show();
											}

											for ( var j = 0; j < parseInt(trussMember['splice_count']); j ++ )
											{
												$("#splicePosition" + (j + 1) + "LeftEndFt").val(trussMember.splice_data[j].left_ft);
												$("#splicePosition" + (j + 1) + "LeftEndIn").val(trussMember.splice_data[j].left_in);
												$("#splicePosition" + (j + 1) + "LeftEndFr").val(trussMember.splice_data[j].left_fr);
												$("#trapTopChordProfile" + (j + 1)).val(trussMember.splice_data[j].topChordProfile);
												$("#trapBottomChordProfile" + (j + 1)).val(trussMember.splice_data[j].bottomChordProfile);
											}

											if (trussMember.verticalSpacing == "ptUE")
											{
												for (j = 0; j < parseInt(trussMember.inclineNum); j++)
												{
													$(".pshowtv" + (j + 1)).show();
													$("#trachedvertical" + (j + 1) + "ft").val(trussMember.verticals[j].spacing_ft);
													$("#trachedvertical" + (j + 1) + "in").val(trussMember.verticals[j].spacing_in);
													$("#trachedvertical" + (j + 1) + "fr").val(trussMember.verticals[j].spacing_fr);
												}
											}

											$("#memID").val(i);
											$("#memType").val("trapeTruss");
										}
									}
								});
							break;
						}
						$("#rightFloat .qckModifyBtn").click(function()
						{
							$("#hiddenSlide").click();
							$("#rightFloat").html('');
						});
					break;
					case "paraTruss":
						switch (sel_obj.memType)
						{
							case "para_vertical":
								$("#rightFloat").load("./RightSlideBox/rightparallel-vertical.html", function()
								{
									$("#memType").val("");
									var vert_arr = [];
									var memberID = sel_obj.uid;
									var member_index = -1;
									var index;
									if (sel_obj.id_arr != undefined)
										for (j = 0; j < sel_obj.id_arr.length; j ++)
										{
											vert_arr.push(parseInt(sel_obj.id_arr[j].split("_")[2]));
										}
									
									if (vert_arr.length <= 1)
									{
										for ( i = 0; i < memberList.length; i ++ )
										{
											index = parseInt(sel_obj.type.split("_")[2]);
											
											if (memberList[i].uid == "paraTruss_" + memberID)
											{
												$("#parallelmodalprofile2").val(memberList[i].verticals[index].profile);
												$("#parallelmemorientation2").val(memberList[i].verticals[index].orientation);
												$("#parallelgrade2").val(memberList[i].verticals[index].materialgrade);
												member_index = i;
											}
										}

										$("#rightFloat .qckModifyBtn").click(function()
										{
											memberList[member_index].verticals[index].profile = $("#parallelmodalprofile2").val();
											memberList[member_index].verticals[index].orientation = $("#parallelmemorientation2").val();
											memberList[member_index].verticals[index].materialgrade = $("#parallelgrade2").val();
										});
									}
									else
									{
										$("#rightFloat .qckModifyBtn").click(function()
										{
											for ( i = 0; i < memberList.length; i ++ )
											{
												if (memberList[i].uid == "trapeTruss_" + memberID)
													member_index = i;
											}
											for (j = 0; j < vert_arr.length; j ++)
											{
												index = vert_arr[j];
												memberList[member_index].verticals[index].profile = $("#parallelmodalprofile2").val();
												memberList[member_index].verticals[index].orientation = $("#parallelmemorientation2").val();
												memberList[member_index].verticals[index].materialgrade = $("#parallelgrade2").val();
											}
											reloadGrid();
											$("#hiddenSlide").click();
											$("#rightFloat").html('');
										});
									}
								});
							break;
							case "para_brace":
								$("#rightFloat").load("./RightSlideBox/rightparallel-inclined.html", function()
								{
									$("#memType").val("");
									var index;
									var memberID = sel_obj.uid;
									var member_index = -1;
									var vert_arr = [];
									if (sel_obj.id_arr != undefined)
										for (j = 0; j < sel_obj.id_arr.length; j ++)
										{
											vert_arr.push(parseInt(sel_obj.id_arr[j].split("_")[2]));
										}

									if (vert_arr.length <= 1)
									{
										for ( i = 0; i < memberList.length; i ++ )
										{
											index = parseInt(sel_obj.type.split("_")[2]);
											if (memberList[i].uid == "paraTruss_" + memberID)
											{
												$("#parallelmodalprofile3").val(memberList[i].inclinedbracings[index].profile).trigger("change");
												$("#parallelmodalorientation3").val(memberList[i].inclinedbracings[index].orientation);
												$("#parallelgrade3").val(memberList[i].inclinedbracings[index].materialgrade);
												$("#shapeicons").val("s" + layoutToValue(memberList[i].inclinedbracings[index].pattern)).trigger("change");
												member_index = i;
											}
										}
										$("#rightFloat .qckModifyBtn").click(function()
										{
											memberList[member_index].inclinedbracings[index].profile = $("#parallelmodalprofile3").val();
											memberList[member_index].inclinedbracings[index].orientation = $("#parallelmodalorientation3").val();
											memberList[member_index].inclinedbracings[index].materialgrade = $("#parallelgrade3").val();
											memberList[member_index].inclinedbracings[index].pattern = convertValueToLayout($("#shapeicons").val().replace("s", ""));

											reloadGrid();
											$("#hiddenSlide").click();
											$("#rightFloat").html('');
										});
									}
									else 
									{
										$("#rightFloat .qckModifyBtn").click(function()
										{
											for ( i = 0; i < memberList.length; i ++ )
											{
												if (memberList[i].uid == "paraTruss_" + memberID)
													member_index = i;
											}
											for ( j = 0; j < vert_arr.length; j ++ )
											{
												index = vert_arr[j];
												memberList[member_index].inclinedbracings[index].profile = $("#parallelmodalprofile3").val();
												memberList[member_index].inclinedbracings[index].orientation = $("#parallelmodalorientation3").val();
												memberList[member_index].inclinedbracings[index].materialgrade = $("#parallelgrade3").val();
												memberList[member_index].inclinedbracings[index].pattern = convertValueToLayout($("#shapeicons").val().replace("s", ""));
											}
											reloadGrid();
											$("#hiddenSlide").click();
											$("#rightFloat").html('');
										});
									}
								});
							break;
							case "para_topchord":
								$("#rightFloat").load("./RightSlideBox/rightparallel-top-chord.html", function()
								{
									$("#memType").val("");
									var member_index = -1;
									for (i = 0; i < memberList.length; i ++)
									{
										if (memberList[i].uid = sel_obj.mode + "_" + sel_obj.uid)
										{
											$("#parallelmodalprofile").val(memberList[i].topchord.profile);
											$("#parallelorientation").val(memberList[i].topchord.orientation);
											$("#parallelgrade").val(memberList[i].topchord.materialGrade);
											member_index = i;
										}
									}
									$("#rightFloat .qckModifyBtn").click(function()
									{
										memberList[member_index].topChordProfile = $("#parallelmodalprofile").val();
										memberList[member_index].topChordOrientation = $("#parallelorientation").val();
										memberList[member_index].topChordGrade = $("#parallelgrade").val();
										reloadGrid();
										$("#hiddenSlide").click();
										$("#rightFloat").html('');
									});
								});
							break;
							case "para_bottomchord":
								$("#rightFloat").load("./RightSlideBox/rightparallel-bottom-chord.html", function()
								{
									$("#memType").val("");
									var member_index = -1;
									for (i = 0; i < memberList.length; i ++)
									{
										if (memberList[i].uid = sel_obj.mode + "_" + sel_obj.uid)
										{
											$("#parallelmodalprofile1").val(memberList[i].bottomchord.profile);
											$("#parallelmemorientation").val(memberList[i].bottomchord.orientation);
											$("#parallelgrade1").val(memberList[i].bottomchord.materialGrade);
											member_index = i;
										}
									}
									$("#rightFloat .qckModifyBtn").click(function()
									{
										memberList[member_index].bottomChordProfile = $("#parallelmodalprofile1").val();
										memberList[member_index].bottomChordOrientation = $("#parallelmemorientation").val();
										memberList[member_index].bottomChordGrade = $("#parallelgrade1").val();
										reloadGrid();
										$("#hiddenSlide").click();
										$("#rightFloat").html('');
									});
								});
							break;
							case undefined:
								$('#rightFloat').load('./RightSlideBox/parallelrightside.html', function()
								{
									for (var i = 0; i < memberList.length; i ++)
									{
										if (memberList[i].uid == sel_obj.mode + "_" + sel_obj.uid)
										{
											var configure = new_configure.paraTruss;
											trussMember = memberList[i];
											Object.keys(configure.memberProperties).map(function(entry)
											{
												if (entry == "profile")
												{
													if (trussMember.memberProperties[entry] != "select" && trussMember.memberProperties[entry] != "")
													{
														$("#" + configure.memberProperties[entry]).val(trussMember.memberProperties[entry]).trigger("change");
													}
												}
												else 
													$("#" + configure.memberProperties[entry]).val(trussMember.memberProperties[entry]);
											});

											Object.keys(configure.finishProperties).map(function(entry)
											{
												if (entry != "paintType")
													$("#" + configure.finishProperties[entry]).val(trussMember.finishProperties[entry]);
												else
													$("input[name='" + configure.finishProperties[entry] + "'][value='" + trussMember.finishProperties[entry] + "']").prop('checked', true);
											});

											Object.keys(configure.connectionProperties).map(function(entry)
											{
												$("#" + configure.connectionProperties[entry]).val(trussMember.connectionProperties[entry]);
											});
											
											Object.keys(configure).map(function(entry) 
											{
												if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
												{
													
													if ($("#" + configure[entry]).is(":checkbox"))
													{
														if (trussMember[entry] == "on")
															$("#" + configure[entry]).prop('checked', true);
														// else
														// 	$("#" + configure[entry]).prop('checked', false).trigger('change');
													}
													else 
													{
														$("#" + configure[entry]).val(trussMember[entry]);
													}
												}
											});
											
											for ( var j = 0; j < parseInt(trussMember['splice_count']); j ++ )
											{
												$(".chordXsplice" + (j + 1)).show();
											}

											for ( var j = 0; j < parseInt(trussMember['splice_count']); j ++ )
											{
												$("#splicePosition" + (j + 1) + "LeftEndFt").val(trussMember.splice_data[j].left_ft);
												$("#splicePosition" + (j + 1) + "LeftEndIn").val(trussMember.splice_data[j].left_in);
												$("#splicePosition" + (j + 1) + "LeftEndFr").val(trussMember.splice_data[j].left_fr);
												$("#paraTopChordProfile" + (j + 1)).val(trussMember.splice_data[j].topChordProfile);
												$("#paraBottomChordProfile" + (j + 1)).val(trussMember.splice_data[j].bottomChordProfile);
											}

											$("#memID").val(i);
											$("#memType").val("paraTruss");
										}
									}
								});
							break;
						}
						$("#rightFloat .qckModifyBtn").click(function()
						{
							$("#hiddenSlide").click();
							$("#rightFloat").html('');
						});
					break;
				}
				if (sel_obj.memType == "column" || sel_obj.mode == "Column")
				{
					$('#rightFloat').load('./RightSlideBox/rightBarColumn.html', function()
					{
						for (var i = 0; i < memberList.length; i ++)
						{
							if (memberList[i].uid == "Column_" + sel_obj.uid)
							{
								var configure_column = new_configure.column;
								columnMember = memberList[i];
								Object.keys(configure_column.memberProperties).map(function(entry)
								{
									if (entry == "profile")
									{
										if (columnMember.memberProperties[entry] != "")
											$("#" + configure_column.memberProperties[entry]).val(columnMember.memberProperties[entry]).trigger("change");
									}
									else
										$("#" + configure_column.memberProperties[entry]).val(columnMember.memberProperties[entry]);
								});

								Object.keys(configure_column.finishProperties).map(function(entry)
								{
									if (entry != "paintType" && entry != "primerCheck")
										$("#" + configure_column.finishProperties[entry]).val(columnMember.finishProperties[entry]);
									else if (entry == "primerCheck")
										$("#" + configure_column.finishProperties[entry]).prop("checked", columnMember.finishProperties[entry]).trigger("change");
									else
									{
										$("input[name='" + configure_column.finishProperties[entry] + "'][value='" + columnMember.finishProperties[entry] + "']").prop('checked', true).trigger("change");
									}
								});

								Object.keys(configure_column).map(function(entry) 
								{
									if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties" && entry != "splice_data")
									{
										
										if ($("#" + configure_column[entry]).is(":checkbox"))
										{
											if (columnMember[entry] == "on")
												$("#" + configure_column[entry]).prop('checked', true).trigger("change");
										}
										else if ($("#" + configure_column[entry]).is("input:text"))
										{
											$("#" + configure_column[entry]).val(columnMember[entry]);
										}
										else 
										{
											$("#" + configure_column[entry]).val(columnMember[entry]).trigger("change");
										}
									}
								});

								$("#splicecount").val(columnMember['splice_count']).trigger("change");

								Object.keys(configure_column.connectionProperties).map(function(entry)
								{
									if (entry == "cap_check")
									{
										$("#" + configure_column.connectionProperties[entry]).prop("checked", columnMember.connectionProperties[entry]).trigger("change");
									}
									else
										$("#" + configure_column.connectionProperties[entry]).val(columnMember.connectionProperties[entry]);
								});

								for ( var j = 0; j < parseInt(columnMember['splice_count']); j ++ )
								{
									$("#splice" + (j + 1) + "PosNeg").val(columnMember.splice_data[j].sign);
									$("#splice" + (j + 1) + "Ft").val(columnMember.splice_data[j].elevation_ft);
									$("#splice" + (j + 1) + "In").val(columnMember.splice_data[j].elevation_in);
									$("#splice" + (j + 1) + "Fr").val(columnMember.splice_data[j].elevation_fr);
									$("#splice" + (j + 1) + "Profile").val(columnMember.splice_data[j].profile);
								}
								$("#memID").val(i);
								$("#memType").val("column");
							}
						}
					});
					$('#rightFloat').show();
					// $('.rightFloat') .css({'height': (($(window).height()) - 140)+'px'});
					$(".rightFloatDiv").addClass("active-right");
					$(".rightFloatDiv .rightFloat").css("display", "block");
					$(".rightFloatDiv .left").css("display", "none");
					$(".rightFloatDiv .right").css("display", "block");
				}
				else 
				{
					$('#rightFloat').show();
					// $('.rightFloat') .css({'height': (($(window).height()) - 140)+'px'});
					$(".rightFloatDiv").addClass("active-right");
					$(".rightFloatDiv .rightFloat").css("display", "block");
					$(".rightFloatDiv .left").css("display", "none");
					$(".rightFloatDiv .right").css("display", "block");
				}
			}
			else 
			{
				console.log(sel_obj.mode);
				switch(sel_obj.mode)
				{
					case "h_brace":
						$('#rightFloat').load('./RightSlideBox/rightBarHBrace.html', function() 
						{
							$('.hideAll').hide();
							var h_brace_conf = new_configure.hbrace;
							var tmp_memberList = [];
							var tmp_index = [];
							for (var i = 0; i < sel_obj._objects.length; i ++)
							{
								for (var j = 0; j < memberList.length; j ++)
								{
									if (memberList[j].uid == sel_obj._objects[i].mode + "_" + sel_obj._objects[i].uid)
									{
										tmp_memberList.push(memberList[j]);
										tmp_index.push(j);
									}
								}
							}

							Object.keys(h_brace_conf.memberProperties).map(function(entry)
							{
								var flg = true;
								for (i = 1; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].memberProperties[entry] != tmp_memberList[i].memberProperties[entry])
									{
										flg = false;
										break;
									}
								}
								if (flg)
								{
									if (entry == "profile")
										$("#" + h_brace_conf.memberProperties[entry]).val(tmp_memberList[0].memberProperties[entry]).trigger("change");
									else
										$("#" + h_brace_conf.memberProperties[entry]).val(tmp_memberList[0].memberProperties[entry]);
								}
							});

							Object.keys(h_brace_conf.finishProperties).map(function(entry)
							{
								var flg = true;
								for (i = 1; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].finishProperties[entry] != tmp_memberList[i].finishProperties[entry])
									{
										flg = false;
										break;
									}
								}
								if (flg)
								{
									if (entry != "paintType" && entry != "primerCheck")
										$("#" + h_brace_conf.finishProperties[entry]).val(tmp_memberList[0].finishProperties[entry]);
									else if (entry == "primerCheck")
										$("#" + h_brace_conf.finishProperties[entry]).prop("checked", tmp_memberList[0].finishProperties[entry]).trigger("change");
									else 
										$("input[name='" + h_brace_conf.finishProperties[entry] + "'][value='" + tmp_memberList[0].finishProperties[entry]+ "']").prop('checked', true).trigger("change");

								}
							});

							Object.keys(h_brace_conf.connectionProperties).map(function(entry)
							{
								var flg = true;
								for (i = 1; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].connectionProperties[entry] != tmp_memberList[i].connectionProperties[entry])
									{
										flg = false;
										break;
									}
								}
								if (flg)
								{
									$("#" + h_brace_conf.connectionProperties[entry]).val(tmp_memberList[0].connectionProperties[entry]);
								}
							});

							Object.keys(h_brace_conf).map(function(entry)
							{
								if (entry != "memberProperties" && entry != "connectionProperties" && entry != "finishProperties")
								{
									var flg = true;
									for (i = 1; i < tmp_memberList.length; i ++)
									{
										if (tmp_memberList[0][entry] != tmp_memberList[i][entry])
										{
											flg = false;
											break;
										}
									}

									if (flg)
									{
										$("#" + h_brace_conf[entry]).val(tmp_memberList[0][entry]);
									}
								}
							});
							$("#memID").val(tmp_index.map(String));
							$("#memType").val("hbrace");
						});
					break;
					case "Beam":
						$('#rightFloat').load('./RightSlideBox/rightBarGridBeam.html', function() 
						{
							$('.hideAll').hide();
							var gbeam_conf = new_configure.gbeam;
							var tmp_memberList = [];
							var tmp_index = [];
							for (var i = 0; i < sel_obj._objects.length; i ++)
							{
								for (var j = 0; j < memberList.length; j ++)
								{
									if (memberList[j].uid == sel_obj._objects[i].mode + "_" + sel_obj._objects[i].uid)
									{
										tmp_memberList.push(memberList[j]);
										tmp_index.push(j);
									}
								}
							}

							Object.keys(gbeam_conf.memberProperties).map(function(entry)
							{
								var flg = true;
								for (var i = 1; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].memberProperties[entry] != tmp_memberList[i].memberProperties[entry])
									{
										flg = false;
										break;
									}
								}

								if (flg)
								{
									if (entry == "profile")
										$("#" + gbeam_conf.memberProperties[entry]).val(tmp_memberList[0].memberProperties[entry]).trigger("change");
									else
										$("#" + gbeam_conf.memberProperties[entry]).val(tmp_memberList[0].memberProperties[entry]);
								}
							});

							Object.keys(gbeam_conf.connectionProperties).map(function(entry)
							{
								var flg = true;
								for (var i = 0; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].connectionProperties[entry] != tmp_memberList[i].connectionProperties[entry])
									{
										flg = false;
										break;
									}
								}

								if (flg)
									$("#" + gbeam_conf.connectionProperties[entry]).val(tmp_memberList[0].connectionProperties[entry]);
							});

							Object.keys(gbeam_conf.finishProperties).map(function(entry)
							{
								var flg = true;
								for (var i = 0; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].finishProperties[entry] != tmp_memberList[i].finishProperties[entry])
									{
										flg = false;
										break;
									}
								}

								if (flg)
								{
									if (entry != "paintType" && entry != "primerCheck")
										$("#" + gbeam_conf.finishProperties[entry]).val(tmp_memberList[0].finishProperties[entry]);
									else if (entry == "primerCheck")
										$("#" + gbeam_conf.finishProperties[entry]).prop("checked", tmp_memberList[0].finishProperties[entry]).trigger("change");
									else 
										$("input[name='"+gbeam_conf.finishProperties[entry]+"'][value='"+tmp_memberList[0].finishProperties[entry]+"']").prop('checked', true).trigger("change");
								}
							});

							Object.keys(gbeam_conf).map(function(entry)
							{
								if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
								{
									var flg = true;
									for (i = 1; i < tmp_memberList.length; i ++)
									{
										if (tmp_memberList[0][entry] != tmp_memberList[i][entry])
										{
											flg = false;
											break;
										}
									}

									if (flg)
									{
										if ($("#" + gbeam_conf[entry]).is(":checkbox"))
										{
											if (tmp_memberList[0][entry] == "on")
												$("#" + gbeam_conf[entry]).prop('checked', true).trigger("change");
										}
										else if (entry == "alignment" || entry == "stiffWeldType")
											$("#" + gbeam_conf[entry]).val(tmp_memberList[0][entry]).trigger("change");
										else 
											$("#" + gbeam_conf[entry]).val(tmp_memberList[0][entry]);
									}
								}
							});

							// $(".hideAll").hide();

							if ($("#gbeamalignment").val() == "Skewed")
							{
								Object.keys(skew_slop_option.skew).map(function(entry)
								{
									var flg = true;
									for (i = 1; i < tmp_memberList.length; i ++)
									{
										if (tmp_memberList[0][entry] != tmp_memberList[i][entry])
										{
											flg = false;
											break;
										}
									}
									if (flg)
									{
										$("#" + skew_slop_option.skew[entry]).val(tmp_memberList[0][entry]);
									}
								})
							}
							else if ($("#gbeamalignment").val() == "Sloped")
							{
								Object.keys(skew_slop_option.slop).map(function(entry)
								{
									var flg = true;
									for (i = 1; i < tmp_memberList.length; i ++)
									{
										if (tmp_memberList[0][entry] != tmp_memberList[i][entry])
										{
											flg = false;
											break;
										}
									}
									if (flg)
									{
										$("#" + skew_slop_option.slop[entry]).val(tmp_memberList[0][entry]);
									}
								})
							}
							else if ($("#gbeamalignment").val() == "Sloped & Skewed")
							{
								Object.keys(skew_slop_option.slop_skew).map(function(entry)
								{
									var flg = true;
									for (i = 1; i < tmp_memberList.length; i ++)
									{
										if (tmp_memberList[0][entry] != tmp_memberList[i][entry])
										{
											flg = false;
											break;
										}
									}
									if (flg)
									{
										$("#" + skew_slop_option.slop_skew[entry]).val(tmp_memberList[0][entry]);
									}
								})
							}


							$("#memID").val(tmp_index.map(String));
							$("#memType").val("gbeam");
						})
					break;
					case "periBeam":
						$("#rightFloat").load("./RightSlideBox/rightBarPerimeterBeam.html", function()
						{
							$('.hideAll').hide();
							var peribeam_conf = new_configure.peribeam;
							var tmp_memberList = [];
							var tmp_index = [];
							for (var i = 0; i < sel_obj._objects.length; i ++)
							{
								for (var j = 0; j < memberList.length; j ++)
								{
									if (memberList[j].uid == sel_obj._objects[i].mode + "_" + sel_obj._objects[i].uid)
									{
										tmp_memberList.push(memberList[j]);
										tmp_index.push(j);
									}
								}
							}

							Object.keys(peribeam_conf.memberProperties).map(function(entry)
							{
								var flg = true;
								for (var i = 1; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].memberProperties[entry] != tmp_memberList[i].memberProperties[entry])
									{
										flg = false;
										break;
									}
								}

								if (flg)
								{
									if (entry == "profile")
										$("#" + peribeam_conf.memberProperties[entry]).val(tmp_memberList[0].memberProperties[entry]).trigger("change");
									else
										$("#" + peribeam_conf.memberProperties[entry]).val(tmp_memberList[0].memberProperties[entry]);
								}
							});

							Object.keys(peribeam_conf.connectionProperties).map(function(entry)
							{
								var flg = true;
								for (var i = 0; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].connectionProperties[entry] != tmp_memberList[i].connectionProperties[entry])
									{
										flg = false;
										break;
									}
								}

								if (flg)
								{
									$("#" + peribeam_conf.connectionProperties[entry]).val(tmp_memberList[0].connectionProperties[entry]);
								}
							});

							Object.keys(peribeam_conf.finishProperties).map(function(entry)
							{
								var flg = true;
								for (var i = 0; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].finishProperties[entry] != tmp_memberList[i].finishProperties[entry])
									{
										flg = false;
										break;
									}
								}

								if (flg)
								{
									if (entry != "paintType" && entry != "primerCheck")
										$("#" + peribeam_conf.finishProperties[entry]).val(tmp_memberList[0].finishProperties[entry]);
									else if (entry == "primerCheck")
										$("#" + peribeam_conf.finishProperties[entry]).prop("checked", tmp_memberList[0].finishProperties[entry]).trigger("change");
									else 
										$("input[name='"+peribeam_conf.finishProperties[entry]+"'][value='"+tmp_memberList[0].finishProperties[entry]+"']").prop('checked', true).trigger("change");
								}
							});

							Object.keys(peribeam_conf).map(function(entry)
							{
								if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
								{
									var flg = true;
									for (i = 1; i < tmp_memberList.length; i ++)
									{
										if (tmp_memberList[0][entry] != tmp_memberList[i][entry])
										{
											flg = false;
											break;
										}
									}

									if (flg)
									{
										if ($("#" + peribeam_conf[entry]).is(":checkbox"))
										{
											if (tmp_memberList[0][entry] == "on")
												$("#" + peribeam_conf[entry]).prop('checked', true).trigger("change");
										}
										else if (entry == "alignment" || entry == "stiffWeldType")
											$("#" + peribeam_conf[entry]).val(tmp_memberList[0][entry]).trigger("change");
										else
											$("#" + peribeam_conf[entry]).val(tmp_memberList[0][entry]);
									}
								}
							});

							if ($("#pbeamalignment").val() == "Skewed")
							{
								Object.keys(skew_slop_option.skew).map(function(entry)
								{
									var flg = true;
									for (i = 1; i < tmp_memberList.length; i ++)
									{
										if (tmp_memberList[0][entry] != tmp_memberList[i][entry])
										{
											flg = false;
											break;
										}
									}
									if (flg)
									{
										$("#" + skew_slop_option.skew[entry]).val(tmp_memberList[0][entry]);
									}
								})
							}
							else if ($("#pbeamalignment").val() == "Sloped")
							{
								Object.keys(skew_slop_option.slop).map(function(entry)
								{
									var flg = true;
									for (i = 1; i < tmp_memberList.length; i ++)
									{
										if (tmp_memberList[0][entry] != tmp_memberList[i][entry])
										{
											flg = false;
											break;
										}
									}
									if (flg)
									{
										$("#" + skew_slop_option.slop[entry]).val(tmp_memberList[0][entry]);
									}
								})
							}
							else if ($("#pbeamalignment").val() == "Sloped & Skewed")
							{
								Object.keys(skew_slop_option.slop_skew).map(function(entry)
								{
									var flg = true;
									for (i = 1; i < tmp_memberList.length; i ++)
									{
										if (tmp_memberList[0][entry] != tmp_memberList[i][entry])
										{
											flg = false;
											break;
										}
									}
									if (flg)
									{
										$("#" + skew_slop_option.slop_skew[entry]).val(tmp_memberList[0][entry]);
									}
								})
							}

							$("#memID").val(tmp_index.map(String));
							$("#memType").val("peribeam");
						});
					break;
					case "v_brace":
						$("#rightFloat").load("./RightSlideBox/rightBarVBrace.html", function()
						{
							$('.hideAll').hide();
							var vbrace_conf = new_configure.vbrace;
							var tmp_memberList = [];
							var tmp_index = [];
							for (var i = 0; i < sel_obj._objects.length; i ++)
							{
								for (var j = 0; j < memberList.length; j ++)
								{
									if (memberList[j].uid == sel_obj._objects[i].mode + "_" + sel_obj._objects[i].uid)
									{
										tmp_memberList.push(memberList[j]);
										tmp_index.push(j);
									}
								}
							}

							Object.keys(vbrace_conf.memberProperties).map(function(entry)
							{
								var flg = true;
								for (var i = 1; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].memberProperties[entry] != tmp_memberList[i].memberProperties[entry])
									{
										flg = false;
										break;
									}
								}

								if (flg)
								{
									if (entry == "profile")
										$("#" + vbrace_conf.memberProperties[entry]).val(tmp_memberList[0].memberProperties[entry]).trigger("change");
									else
										$("#" + vbrace_conf.memberProperties[entry]).val(tmp_memberList[0].memberProperties[entry]);
								}
							});

							Object.keys(vbrace_conf.connectionProperties).map(function(entry)
							{
								var flg = true;
								for (var i = 0; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].connectionProperties[entry] != tmp_memberList[i].connectionProperties[entry])
									{
										flg = false;
										break;
									}
								}

								if (flg)
									$("#" + vbrace_conf.connectionProperties[entry]).val(tmp_memberList[0].connectionProperties[entry]);
							});

							Object.keys(vbrace_conf.finishProperties).map(function(entry)
							{
								var flg = true;
								for (var i = 0; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].finishProperties[entry] != tmp_memberList[i].finishProperties[entry])
									{
										flg = false;
										break;
									}
								}

								if (flg)
								{
									if (entry != "paintType" && entry != "primerCheck")
										$("#" + vbrace_conf.finishProperties[entry]).val(tmp_memberList[0].finishProperties[entry]);
									else if (entry == "primerCheck")
										$("#" + vbrace_conf.finishProperties[entry]).prop("checked", tmp_memberList[0].finishProperties[entry]).trigger("change");
									else
										$("input[name='" + vbrace_conf.finishProperties[entry] + "'][value='" + tmp_memberList[0].finishProperties[entry] + "']").prop('checked', true);
								}
							});

							Object.keys(vbrace_conf).map(function(entry)
							{
								if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
								{
									var flg = true;
									for (i = 1; i < tmp_memberList.length; i ++)
									{
										if (tmp_memberList[0][entry] != tmp_memberList[i][entry])
										{
											flg = false;
											break;
										}
									}

									if (flg)
									{
										$("#" + vbrace_conf[entry]).val(tmp_memberList[0][entry]);
									}
								}
							});

							$("#memID").val(tmp_index.map(String));
							$("#memType").val("vbrace");
						});
					break;
					case "pourStop":
						$("#rightFloat").load("./RightSlideBox/rightBarPourStop.html", function()
						{
							$('.hideAll').hide();
							var pourstop_conf = new_configure.pourstop;
							var tmp_memberList = [];
							var tmp_index = [];
							for (var i = 0; i < sel_obj._objects.length; i ++)
							{
								for (var j = 0; j < memberList.length; j ++)
								{
									if (memberList[j].uid == sel_obj._objects[i].mode + "_" + sel_obj._objects[i].uid)
									{
										tmp_memberList.push(memberList[j]);
										tmp_index.push(j);
									}
								}
							}

							Object.keys(pourstop_conf.memberProperties).map(function(entry)
							{
								var flg = true;
								for (var i = 1; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].memberProperties[entry] != tmp_memberList[i].memberProperties[entry])
									{
										flg = false;
										break;
									}
								}

								if (flg)
								{
									if (entry == "profile")
										$("#" + pourstop_conf.memberProperties[entry]).val(tmp_memberList[0].memberProperties[entry]).trigger("change");
									else if (entry == "material")
										$("#" + pourstop_conf.memberProperties[entry]).val(tmp_memberList[0].memberProperties[entry]).trigger("change");
									else
										$("#" + pourstop_conf.memberProperties[entry]).val(tmp_memberList[0].memberProperties[entry]);
								}
							});

							Object.keys(pourstop_conf.finishProperties).map(function(entry)
							{
								var flg = true;
								for (var i = 0; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].finishProperties[entry] != tmp_memberList[i].finishProperties[entry])
									{
										flg = false;
										break;
									}
								}

								if (flg)
								{
									if (entry != "paintType" && entry != "primerCheck")
										$("#" + pourstop_conf.finishProperties[entry]).val(tmp_memberList[0].finishProperties[entry]);
									else if (entry == "primerCheck")
										$("#" + pourstop_conf.finishProperties[entry]).prop("checked", tmp_memberList[0].finishProperties[entry]).trigger("change");
									else
										$("input[name='" + pourstop_conf.finishProperties[entry] + "'][value='" + tmp_memberList[0].finishProperties[entry] + "']").prop('checked', true);
								}
							});

							Object.keys(pourstop_conf).map(function(entry)
							{
								if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
								{
									var flg = true;
									for (i = 1; i < tmp_memberList.length; i ++)
									{
										if (tmp_memberList[0][entry] != tmp_memberList[i][entry])
										{
											flg = false;
											break;
										}
									}

									if (flg)
									{
										$("#" + pourstop_conf[entry]).val(tmp_memberList[0][entry]);
										if (entry == "weldType")
											$("#" + pourstop_conf[entry]).val(tmp_memberList[0][entry]).trigger("change");
									}
								}
							});

							$("#memID").val(tmp_index.map(String));
							$("#memType").val("pourstop");
						})
					break;
					case "Column":
						$("#rightFloat").load("./RightSlideBox/rightBarColumn.html", function()
						{
							$('.hideAll').hide();
							var column_conf = new_configure.column;
							var tmp_memberList = [];
							var tmp_index = [];
							for (var i = 0; i < sel_obj._objects.length; i ++)
							{
								for (var j = 0; j < memberList.length; j ++)
								{
									if (memberList[j].uid == sel_obj._objects[i].mode + "_" + sel_obj._objects[i].uid)
									{
										tmp_memberList.push(memberList[j]);
										tmp_index.push(j);
									}
								}
							}

							Object.keys(column_conf.memberProperties).map(function(entry)
							{
								var flg = true;
								for (var i = 1; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].memberProperties[entry] != tmp_memberList[i].memberProperties[entry])
									{
										flg = false;
										break;
									}
								}

								if (flg)
								{
									if (entry == "profile")
									{
										if (tmp_memberList[0].memberProperties[entry] != "")
											$("#" + column_conf.memberProperties[entry]).val(tmp_memberList[0].memberProperties[entry]).trigger("change");
									}
									else
										$("#" + column_conf.memberProperties[entry]).val(tmp_memberList[0].memberProperties[entry]);
								}
							});

							Object.keys(column_conf.finishProperties).map(function(entry)
							{
								var flg = true;
								for (var i = 0; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].finishProperties[entry] != tmp_memberList[i].finishProperties[entry])
									{
										flg = false;
										break;
									}
								}

								if (flg)
								{
									if (entry != "paintType" && entry != "primerCheck")
										$("#" + column_conf.finishProperties[entry]).val(tmp_memberList[0].finishProperties[entry]);
									else if (entry == "primerCheck")
										$("#" + column_conf.finishProperties[entry]).prop("checked", tmp_memberList[0].finishProperties[entry]).trigger("change");
									else 
										$("input[name='"+column_conf.finishProperties[entry]+"'][value='"+tmp_memberList[0].finishProperties[entry]+"']").prop('checked', true).trigger("change");
								}
							});

							Object.keys(column_conf).map(function(entry)
							{
								if (entry != "memberProperties" && entry != "finishProperties" && entry != "connectionProperties")
								{
									var flg = true;
									for (i = 1; i < tmp_memberList.length; i ++)
									{
										if (tmp_memberList[0][entry] != tmp_memberList[i][entry])
										{
											flg = false;
											break;
										}
									}

									if (flg)
									{
										if ($("#" + column_conf[entry]).is(":checkbox"))
										{
											if (tmp_memberList[0][entry] == "on")
												$("#" + column_conf[entry]).prop("checked", true).trigger("change");
										}
										else if (entry == "splice_count")
										{
											$("#" + column_conf[entry]).val(tmp_memberList[0][entry]).trigger("change");
											for (var j = 0; j < parseInt(tmp_memberList[0][entry]); j ++)
											{
												var tmp_flg = true;
												for (var i = 1; i < tmp_memberList.length; i ++)
												{
													if (tmp_memberList[0]["splice_data"][j]["elevation_ft"] != tmp_memberList[i]["splice_data"][j]["elevation_ft"])
													{
														tmp_flg = false;
														break;
													}
													if (tmp_flg)
													{
														$("#splice" + (j + 1) + "Ft").val(tmp_memberList[0]["splice_data"][j]["elevation_ft"]);
													}
												}
												tmp_flg = true;
												for (var i = 1; i < tmp_memberList.length; i ++)
												{
													if (tmp_memberList[0]["splice_data"][j]["elevation_in"] != tmp_memberList[i]["splice_data"][j]["elevation_in"])
													{
														tmp_flg = false;
														break;
													}
													if (tmp_flg)
													{
														$("#splice" + (j + 1) + "In").val(tmp_memberList[0]["splice_data"][j]["elevation_in"]);
													}
												}
												tmp_flg = true;
												for (var i = 1; i < tmp_memberList.length; i ++)
												{
													if (tmp_memberList[0]["splice_data"][j]["elevation_fr"] != tmp_memberList[i]["splice_data"][j]["elevation_fr"])
													{
														tmp_flg = false;
														break;
													}
													if (tmp_flg)
													{
														$("#splice" + (j + 1) + "Fr").val(tmp_memberList[0]["splice_data"][j]["elevation_fr"]);
													}
												}
												tmp_flg = true;
												for (var i = 1; i < tmp_memberList.length; i ++)
												{
													if (tmp_memberList[0]["splice_data"][j]["profile"] != tmp_memberList[i]["splice_data"][j]["profile"])
													{
														tmp_flg = false;
														break;
													}
													if (tmp_flg)
													{
														$("#splice" + (j + 1) + "Profile").val(tmp_memberList[0]["splice_data"][j]["profile"]);
													}
												}
											}
										}
										else 
											$("#" + column_conf[entry]).val(tmp_memberList[0][entry]);
									}
								}
							});

							Object.keys(column_conf.connectionProperties).map(function(entry)
							{
								var flg = true;
								for (var i = 0; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].connectionProperties[entry] != tmp_memberList[i].connectionProperties[entry])
									{
										flg = false;
										break;
									}
								}

								if (flg)
								{
									if (entry == "cap_check")
										$("#" + column_conf.connectionProperties[entry]).prop("checked", tmp_memberList[0].connectionProperties[entry]).trigger("change");
									else
										$("#" + column_conf.connectionProperties[entry]).val(tmp_memberList[0].connectionProperties[entry]);
								}
							});

							$("#memID").val(tmp_index.map(String));
							$("#memType").val("column");
						});
					break;
					case "boxColumn":
						$('#rightFloat').load('./RightSlideBox/rightBarBoxColumn1.html', function() 
						{
							$('.hideAll').hide();
							var box_conf = new_configure.box;
							var tmp_memberList = [];
							var tmp_index = [];
							for (var i = 0; i < sel_obj._objects.length; i ++)
							{
								for (var j = 0; j < memberList.length; j ++)
								{
									if (memberList[j].uid == sel_obj._objects[i].mode + "_" + sel_obj._objects[i].uid)
									{
										tmp_memberList.push(memberList[j]);
										tmp_index.push(j);
									}
								}
							}

							Object.keys(box_conf.memberProperties).map(function(entry)
							{
								var flg = true;
								for (i = 1; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].memberProperties[entry] != tmp_memberList[i].memberProperties[entry])
									{
										flg = false;
										break;
									}
								}
								if (flg)
								{
									if (entry == "profile")
										$("#" + box_conf.memberProperties[entry]).val(tmp_memberList[0].memberProperties[entry]).trigger("change");
									else
										$("#" + box_conf.memberProperties[entry]).val(tmp_memberList[0].memberProperties[entry]);
								}
							});

							Object.keys(box_conf.finishProperties).map(function(entry)
							{
								var flg = true;
								for (i = 1; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].finishProperties[entry] != tmp_memberList[i].finishProperties[entry])
									{
										flg = false;
										break;
									}
								}
								if (flg)
								{
									if (entry != "paintType" && entry != "primerCheck")
										$("#" + box_conf.finishProperties[entry]).val(tmp_memberList[0].finishProperties[entry]);
									else if (entry == "primerCheck")
										$("#" + box_conf.finishProperties[entry]).prop("checked", tmp_memberList[0].finishProperties[entry]).trigger("change");
									else 
										$("input[name='"+box_conf.finishProperties[entry]+"'][value='"+tmp_memberList[0].finishProperties[entry]+"']").prop('checked', true).trigger("change");
								}
							});

							Object.keys(box_conf).map(function(entry)
							{
								if (entry != "memberProperties" && entry != "connectionProperties" && entry != "finishProperties")
								{
									var flg = true;
									for (i = 1; i < tmp_memberList.length; i ++)
									{
										if (tmp_memberList[0][entry] != tmp_memberList[i][entry])
										{
											flg = false;
											break;
										}
									}

									if (flg)
									{
										if (entry == "splice_count")
										{
											$("#" + box_conf[entry]).val(tmp_memberList[0][entry]).trigger("change");
											for ( var j = 0; j < parseInt(tmp_memberList[0][entry]); j ++)
											{
												var tmp_flg = true;
												for (var i = 1; i < tmp_memberList.length; i ++) 
												{
													if (tmp_memberList[0].splice_data[j].sign != tmp_memberList[i].splice_data[j].sign)
													{
														tmp_flg = false;
														break;
													}
												}
												if (tmp_flg)
													$("#splice" + (j + 1) + "PosNeg").val(tmp_memberList[0].splice_data[j].sign);

												var tmp_flg = true;
												for (var i = 1; i < tmp_memberList.length; i ++) 
												{
													if (tmp_memberList[0].splice_data[j].elevation_ft != tmp_memberList[i].splice_data[j].elevation_ft)
													{
														tmp_flg = false;
														break;
													}
												}
												if (tmp_flg)
													$("#splice" + (j + 1) + "Ft").val(tmp_memberList[0].splice_data[j].elevation_ft);

												var tmp_flg = true;
												for (var i = 1; i < tmp_memberList.length; i ++) 
												{
													if (tmp_memberList[0].splice_data[j].elevation_in != tmp_memberList[i].splice_data[j].elevation_in)
													{
														tmp_flg = false;
														break;
													}
												}
												if (tmp_flg)
													$("#splice" + (j + 1) + "In").val(tmp_memberList[0].splice_data[j].elevation_in);

												var tmp_flg = true;
												for (var i = 1; i < tmp_memberList.length; i ++) 
												{
													if (tmp_memberList[0].splice_data[j].elevation_fr != tmp_memberList[i].splice_data[j].elevation_fr)
													{
														tmp_flg = false;
														break;
													}
												}
												if (tmp_flg)
													$("#splice" + (j + 1) + "Fr").val(tmp_memberList[0].splice_data[j].elevation_fr);

												var tmp_flg = true;
												for (var i = 1; i < tmp_memberList.length; i ++) 
												{
													if (tmp_memberList[0].splice_data[j].depth_a_ft != tmp_memberList[i].splice_data[j].depth_a_ft)
													{
														tmp_flg = false;
														break;
													}
												}
												if (tmp_flg)
													$("#splice" + (j + 1) + "DepthAFt").val(tmp_memberList[0].splice_data[j].depth_a_ft);

												var tmp_flg = true;
												for (var i = 1; i < tmp_memberList.length; i ++) 
												{
													if (tmp_memberList[0].splice_data[j].depth_a_in != tmp_memberList[i].splice_data[j].depth_a_in)
													{
														tmp_flg = false;
														break;
													}
												}
												if (tmp_flg)
													$("#splice" + (j + 1) + "DepthAIn").val(tmp_memberList[0].splice_data[j].depth_a_in);

												var tmp_flg = true;
												for (var i = 1; i < tmp_memberList.length; i ++) 
												{
													if (tmp_memberList[0].splice_data[j].depth_a_fr != tmp_memberList[i].splice_data[j].depth_a_fr)
													{
														tmp_flg = false;
														break;
													}
												}
												if (tmp_flg)
													$("#splice" + (j + 1) + "DepthAFr").val(tmp_memberList[0].splice_data[j].depth_a_fr);

												var tmp_flg = true;
												for (var i = 1; i < tmp_memberList.length; i ++) 
												{
													if (tmp_memberList[0].splice_data[j].width_b_ft != tmp_memberList[i].splice_data[j].width_b_ft)
													{
														tmp_flg = false;
														break;
													}
												}
												if (tmp_flg)
													$("#splice" + (j + 1) + "WidthBFt").val(tmp_memberList[0].splice_data[j].width_b_ft);

												var tmp_flg = true;
												for (var i = 1; i < tmp_memberList.length; i ++) 
												{
													if (tmp_memberList[0].splice_data[j].width_b_in != tmp_memberList[i].splice_data[j].width_b_in)
													{
														tmp_flg = false;
														break;
													}
												}
												if (tmp_flg)
													$("#splice" + (j + 1) + "WidthBIn").val(tmp_memberList[0].splice_data[j].width_b_in);

												var tmp_flg = true;
												for (var i = 1; i < tmp_memberList.length; i ++) 
												{
													if (tmp_memberList[0].splice_data[j].width_b_fr != tmp_memberList[i].splice_data[j].width_b_fr)
													{
														tmp_flg = false;
														break;
													}
												}
												if (tmp_flg)
													$("#splice" + (j + 1) + "WidthBFr").val(tmp_memberList[0].splice_data[j].width_b_fr);

												var tmp_flg = true;
												for (var i = 1; i < tmp_memberList.length; i ++) 
												{
													if (tmp_memberList[0].splice_data[j].thick_c_in != tmp_memberList[i].splice_data[j].thick_c_in)
													{
														tmp_flg = false;
														break;
													}
												}
												if (tmp_flg)
													$("#splice" + (j + 1) + "ThicknessCIn").val(tmp_memberList[0].splice_data[j].thick_c_in);

												var tmp_flg = true;
												for (var i = 1; i < tmp_memberList.length; i ++) 
												{
													if (tmp_memberList[0].splice_data[j].thick_c_fr != tmp_memberList[i].splice_data[j].thick_c_fr)
													{
														tmp_flg = false;
														break;
													}
												}
												if (tmp_flg)
													$("#splice" + (j + 1) + "ThicknessCFr").val(tmp_memberList[0].splice_data[j].thick_c_fr);

												var tmp_flg = true;
												for (var i = 1; i < tmp_memberList.length; i ++) 
												{
													if (tmp_memberList[0].splice_data[j].thick_d_in != tmp_memberList[i].splice_data[j].thick_d_in)
													{
														tmp_flg = false;
														break;
													}
												}
												if (tmp_flg)
													$("#splice" + (j + 1) + "ThicknessDIn").val(tmp_memberList[0].splice_data[j].thick_d_in);

												var tmp_flg = true;
												for (var i = 1; i < tmp_memberList.length; i ++) 
												{
													if (tmp_memberList[0].splice_data[j].thick_d_fr != tmp_memberList[i].splice_data[j].thick_d_fr)
													{
														tmp_flg = false;
														break;
													}
												}
												if (tmp_flg)
													$("#splice" + (j + 1) + "ThicknessDFr").val(tmp_memberList[0].splice_data[j].thick_d_fr);
											}
											for ( var j = 0; j < parseInt(boxMember['splice_count']); j ++ )
											{
												$("#splice" + (j + 1) + "PosNeg").val(boxMember.splice_data[j].sign);
												$("#splice" + (j + 1) + "Ft").val(boxMember.splice_data[j].elevation_ft);
												$("#splice" + (j + 1) + "In").val(boxMember.splice_data[j].elevation_in);
												$("#splice" + (j + 1) + "Fr").val(boxMember.splice_data[j].elevation_fr);

												$("#splice" + (j + 1) + "DepthAFt").val(boxMember.splice_data[j].depth_a_ft);
												$("#splice" + (j + 1) + "DepthAIn").val(boxMember.splice_data[j].depth_a_in);
												$("#splice" + (j + 1) + "DepthAFr").val(boxMember.splice_data[j].depth_a_fr);

												$("#splice" + (j + 1) + "WidthBFt").val(boxMember.splice_data[j].width_b_ft);
												$("#splice" + (j + 1) + "WidthBIn").val(boxMember.splice_data[j].width_b_in);
												$("#splice" + (j + 1) + "WidthBFr").val(boxMember.splice_data[j].width_b_fr);

												$("#splice" + (j + 1) + "ThicknessCIn").val(boxMember.splice_data[j].thick_c_in);
												$("#splice" + (j + 1) + "ThicknessCFr").val(boxMember.splice_data[j].thick_c_fr);

												$("#splice" + (j + 1) + "ThicknessDIn").val(boxMember.splice_data[j].thick_d_in);
												$("#splice" + (j + 1) + "ThicknessDFr").val(boxMember.splice_data[j].thick_d_fr);
											}
										}
										else if (entry == "weld_type")
											$("#" + box_conf[entry]).val(tmp_memberList[0][entry]).trigger("change");
										else
											$("#" + box_conf[entry]).val(tmp_memberList[0][entry]);
									}
								}
							});

							Object.keys(box_conf.connectionProperties).map(function(entry)
							{
								var flg = true;
								for (i = 1; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].connectionProperties[entry] != tmp_memberList[i].connectionProperties[entry])
									{
										flg = false;
										break;
									}
								}
								if (flg)
								{
									$("#" + box_conf.connectionProperties[entry]).val(tmp_memberList[0].connectionProperties[entry]);
								}
							});

							$("#memID").val(tmp_index.map(String));
							$("#memType").val("box");
						});
					break;
					case "builtUpIColumn":
						$('#rightFloat').load('./RightSlideBox/rightBarBuiltUPI.html',function()
						{
							$('.hideAll').hide();
							var builtup_conf = new_configure.builtup;
							var tmp_memberList = [];
							var tmp_index = [];
							for (var i = 0; i < sel_obj._objects.length; i ++)
							{
								for (var j = 0; j < memberList.length; j ++)
								{
									if (memberList[j].uid == sel_obj._objects[i].mode + "_" + sel_obj._objects[i].uid)
									{
										tmp_memberList.push(memberList[j]);
										tmp_index.push(j);
									}
								}
							}

							Object.keys(builtup_conf.memberProperties).map(function(entry)
							{
								var flg = true;
								for (i = 1; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].memberProperties[entry] != tmp_memberList[i].memberProperties[entry])
									{
										flg = false;
										break;
									}
								}
								if (flg)
								{
									$("#" + builtup_conf.memberProperties[entry]).val(tmp_memberList[0].memberProperties[entry]);
								}
							});

							Object.keys(builtup_conf.finishProperties).map(function(entry)
							{
								var flg = true;
								for (i = 1; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].finishProperties[entry] != tmp_memberList[i].finishProperties[entry])
									{
										flg = false;
										break;
									}
								}
								if (flg)
								{
									if (entry != "paintType" && entry != "primerCheck")
										$("#" + builtup_conf.finishProperties[entry]).val(tmp_memberList[0].finishProperties[entry]);
									else if (entry == "primerCheck")
										$("#" + builtup_conf.finishProperties[entry]).prop("checked", tmp_memberList[0].finishProperties[entry]).trigger("change");
									else 
										$("input[name='"+builtup_conf.finishProperties[entry]+"'][value='"+tmp_memberList[0].finishProperties[entry]+"']").prop('checked', true).trigger("change");
								}
							});

							Object.keys(builtup_conf).map(function(entry)
							{
								if (entry != "memberProperties" && entry != "connectionProperties" && entry != "finishProperties")
								{
									var flg = true;
									for (i = 1; i < tmp_memberList.length; i ++)
									{
										if (tmp_memberList[0][entry] != tmp_memberList[i][entry])
										{
											flg = false;
											break;
										}
									}

									if (flg)
									{
										if ($("#" + builtup_conf[entry]).is(":checkbox"))
										{
											if (tmp_memberList[0][entry] == "on")
												$("#" + builtup_conf[entry]).prop("checked", tmp_memberList[0][entry]).trigger("change");
										}
										else if (entry == "weld_toptype" || entry == "weld_bottype" || entry == "splice_count")
											$("#" + builtup_conf[entry]).val(tmp_memberList[0][entry]).trigger("change");
										else 
											$("#" + builtup_conf[entry]).val(tmp_memberList[0][entry]);

										if (entry == "splice_count") {
											for (var j = 0; j < tmp_memberList[0]['splice_count']; j ++)
											{
												var tmp_flg = true;
												for (var i = 1; i < tmp_memberList.length; i ++)
												{
													if (tmp_memberList[0].splice_data[j].sign != tmp_memberList[i].splice_data[j].sign)
													{
														tmp_flg = false;
														break;
													}
												}
												if (tmp_flg)
													$("#splice" + (j + 1) + "PosNeg").val(tmp_memberList[0].splice_data[j].sign);

												tmp_flg = true;
												for (var i = 1; i < tmp_memberList.length; i ++)
												{
													if (tmp_memberList[0].splice_data[j].elevation_ft != tmp_memberList[i].splice_data[j].elevation_ft)
													{
														tmp_flg = false;
														break;
													}
												}
												if (tmp_flg)
													$("#splice" + (j + 1) + "Ft").val(tmp_memberList[0].splice_data[j].elevation_ft);
												tmp_flg = true;
												for (var i = 1; i < tmp_memberList.length; i ++)
												{
													if (tmp_memberList[0].splice_data[j].elevation_in != tmp_memberList[i].splice_data[j].elevation_in)
													{
														tmp_flg = false;
														break;
													}
												}
												if (tmp_flg)
													$("#splice" + (j + 1) + "In").val(tmp_memberList[0].splice_data[j].elevation_in);
												tmp_flg = true;
												for (var i = 1; i < tmp_memberList.length; i ++)
												{
													if (tmp_memberList[0].splice_data[j].elevation_fr != tmp_memberList[i].splice_data[j].elevation_fr)
													{
														tmp_flg = false;
														break;
													}
												}
												if (tmp_flg)
													$("#splice" + (j + 1) + "Fr").val(tmp_memberList[0].splice_data[j].elevation_fr);

												tmp_flg = true;
												for (var i = 1; i < tmp_memberList.length; i ++)
												{
													if (tmp_memberList[0].splice_data[j].topthick_in != tmp_memberList[i].splice_data[j].topthick_in)
													{
														tmp_flg = false;
														break;
													}
												}
												if (tmp_flg)
													$("#splice" + (j + 1) + "TFPlateThicknessIn").val(tmp_memberList[0].splice_data[j].topthick_in);
												tmp_flg = true;
												for (var i = 1; i < tmp_memberList.length; i ++)
												{
													if (tmp_memberList[0].splice_data[j].topthick_fr != tmp_memberList[i].splice_data[j].topthick_fr)
													{
														tmp_flg = false;
														break;
													}
												}
												if (tmp_flg)
													$("#splice" + (j + 1) + "TFPlateThicknessFr").val(tmp_memberList[0].splice_data[j].topthick_fr);

												tmp_flg = true;
												for (var i = 1; i < tmp_memberList.length; i ++)
												{
													if (tmp_memberList[0].splice_data[j].topwidth_ft != tmp_memberList[i].splice_data[j].topwidth_ft)
													{
														tmp_flg = false;
														break;
													}
												}
												if (tmp_flg)
													$("#splice" + (j + 1) + "TFPlateWidthFt").val(tmp_memberList[0].splice_data[j].topwidth_ft);
												tmp_flg = true;
												for (var i = 1; i < tmp_memberList.length; i ++)
												{
													if (tmp_memberList[0].splice_data[j].topwidth_in != tmp_memberList[i].splice_data[j].topwidth_in)
													{
														tmp_flg = false;
														break;
													}
												}
												if (tmp_flg)
													$("#splice" + (j + 1) + "TFPlateWidthIn").val(tmp_memberList[0].splice_data[j].topwidth_in);
												tmp_flg = true;
												for (var i = 1; i < tmp_memberList.length; i ++)
												{
													if (tmp_memberList[0].splice_data[j].topwidth_fr != tmp_memberList[i].splice_data[j].topwidth_fr)
													{
														tmp_flg = false;
														break;
													}
												}
												if (tmp_flg)
													$("#splice" + (j + 1) + "TFPlateWidthFr").val(tmp_memberList[0].splice_data[j].topwidth_fr);

												tmp_flg = true;
												for (var i = 1; i < tmp_memberList.length; i ++)
												{
													if (tmp_memberList[0].splice_data[j].botthick_in != tmp_memberList[i].splice_data[j].botthick_in)
													{
														tmp_flg = false;
														break;
													}
												}
												if (tmp_flg)
													$("#splice" + (j + 1) + "BFPlateThicknessIn").val(tmp_memberList[0].splice_data[j].botthick_in);
												tmp_flg = true;
												for (var i = 1; i < tmp_memberList.length; i ++)
												{
													if (tmp_memberList[0].splice_data[j].botthick_fr != tmp_memberList[i].splice_data[j].botthick_fr)
													{
														tmp_flg = false;
														break;
													}
												}
												if (tmp_flg)
													$("#splice" + (j + 1) + "BFPlateThicknessFr").val(tmp_memberList[0].splice_data[j].botthick_fr);

												tmp_flg = true;
												for (var i = 1; i < tmp_memberList.length; i ++)
												{
													if (tmp_memberList[0].splice_data[j].botwidth_ft != tmp_memberList[i].splice_data[j].botwidth_ft)
													{
														tmp_flg = false;
														break;
													}
												}
												if (tmp_flg)
													$("#splice" + (j + 1) + "BFPlateWidthFt").val(tmp_memberList[0].splice_data[j].botwidth_ft);
												tmp_flg = true;
												for (var i = 1; i < tmp_memberList.length; i ++)
												{
													if (tmp_memberList[0].splice_data[j].botwidth_in != tmp_memberList[i].splice_data[j].botwidth_in)
													{
														tmp_flg = false;
														break;
													}
												}
												if (tmp_flg)
													$("#splice" + (j + 1) + "BFPlateWidthIn").val(tmp_memberList[0].splice_data[j].botwidth_in);
												tmp_flg = true;
												for (var i = 1; i < tmp_memberList.length; i ++)
												{
													if (tmp_memberList[0].splice_data[j].botwidth_fr != tmp_memberList[i].splice_data[j].botwidth_fr)
													{
														tmp_flg = false;
														break;
													}
												}
												if (tmp_flg)
													$("#splice" + (j + 1) + "BFPlateWidthFr").val(tmp_memberList[0].splice_data[j].botwidth_fr);

												tmp_flg = true;
												for (var i = 1; i < tmp_memberList.length; i ++)
												{
													if (tmp_memberList[0].splice_data[j].webthick_in != tmp_memberList[i].splice_data[j].webthick_in)
													{
														tmp_flg = false;
														break;
													}
												}
												if (tmp_flg)
													$("#splice" + (j + 1) + "WebPlateThicknessIn").val(tmp_memberList[0].splice_data[j].webthick_in);
												tmp_flg = true;
												for (var i = 1; i < tmp_memberList.length; i ++)
												{
													if (tmp_memberList[0].splice_data[j].webthick_fr != tmp_memberList[i].splice_data[j].webthick_fr)
													{
														tmp_flg = false;
														break;
													}
												}
												if (tmp_flg)
													$("#splice" + (j + 1) + "WebPlateThicknessFr").val(tmp_memberList[0].splice_data[j].webthick_fr);

												tmp_flg = true;
												for (var i = 1; i < tmp_memberList.length; i ++)
												{
													if (tmp_memberList[0].splice_data[j].webwidth_ft != tmp_memberList[i].splice_data[j].webwidth_ft)
													{
														tmp_flg = false;
														break;
													}
												}
												if (tmp_flg)
													$("#splice" + (j + 1) + "WebPlateWidthFt").val(tmp_memberList[0].splice_data[j].webwidth_ft);
												tmp_flg = true;
												for (var i = 1; i < tmp_memberList.length; i ++)
												{
													if (tmp_memberList[0].splice_data[j].webwidth_in != tmp_memberList[i].splice_data[j].webwidth_in)
													{
														tmp_flg = false;
														break;
													}
												}
												if (tmp_flg)
													$("#splice" + (j + 1) + "WebPlateWidthIn").val(tmp_memberList[0].splice_data[j].webwidth_in);
												tmp_flg = true;
												for (var i = 1; i < tmp_memberList.length; i ++)
												{
													if (tmp_memberList[0].splice_data[j].webwidth_fr != tmp_memberList[i].splice_data[j].webwidth_fr)
													{
														tmp_flg = false;
														break;
													}
												}
												if (tmp_flg)
													$("#splice" + (j + 1) + "WebPlateWidthFr").val(tmp_memberList[0].splice_data[j].webwidth_fr);
											}
										}

									}
								}
							});

							Object.keys(builtup_conf.connectionProperties).map(function(entry)
							{
								var flg = true;
								for (i = 1; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].connectionProperties[entry] != tmp_memberList[i].connectionProperties[entry])
									{
										flg = false;
										break;
									}
								}
								if (flg)
								{
									if (entry == "cap_check")
										$("#" + builtup_conf.connectionProperties[entry]).prop("checked", tmp_memberList[0].connectionProperties[entry]).trigger("change");
									else
										$("#" + builtup_conf.connectionProperties[entry]).val(tmp_memberList[0].connectionProperties[entry])
								}
							});
							
							$("#memID").val(tmp_index.map(String));
							$("#memType").val("builtup");
						});
					break;
					case "builtUpCRColumn":
						$('#rightFloat').load('./RightSlideBox/rightBarBuiltUPX.html',function()
						{
							$('.hideAll').hide();
							var crucified_conf = new_configure.crucified;
							var tmp_memberList = [];
							var tmp_index = [];
							for (var i = 0; i < sel_obj._objects.length; i ++)
							{
								for (var j = 0; j < memberList.length; j ++)
								{
									if (memberList[j].uid == sel_obj._objects[i].mode + "_" + sel_obj._objects[i].uid)
									{
										tmp_memberList.push(memberList[j]);
										tmp_index.push(j);
									}
								}
							}

							Object.keys(crucified_conf.memberProperties).map(function(entry)
							{
								var flg = true;
								for (i = 1; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].memberProperties[entry] != tmp_memberList[i].memberProperties[entry])
									{
										flg = false;
										break;
									}
								}
								if (flg)
								{
									$("#" + crucified_conf.memberProperties[entry]).val(tmp_memberList[0].memberProperties[entry]);
								}
							});

							Object.keys(crucified_conf.finishProperties).map(function(entry)
							{
								var flg = true;
								for (i = 1; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].finishProperties[entry] != tmp_memberList[i].finishProperties[entry])
									{
										flg = false;
										break;
									}
								}
								if (flg)
								{
									if (entry != "paintType" && entry != "primerCheck")
										$("#" + crucified_conf.finishProperties[entry]).val(tmp_memberList[0].finishProperties[entry]);
									else if (entry == "primerCheck")
										$("#" + crucified_conf.finishProperties[entry]).prop("checked", tmp_memberList[0].finishProperties[entry]).trigger("change");
									else 
										$("input[name='"+crucified_conf.finishProperties[entry]+"'][value='"+tmp_memberList[0].finishProperties[entry]+"']").prop('checked', true).trigger("change");
								}
							});

							Object.keys(crucified_conf).map(function(entry)
							{
								if (entry != "memberProperties" && entry != "connectionProperties" && entry != "finishProperties")
								{
									var flg = true;
									for (i = 1; i < tmp_memberList.length; i ++)
									{
										if (tmp_memberList[0][entry] != tmp_memberList[i][entry])
										{
											flg = false;
											break;
										}
									}

									if (flg)
									{
										$("#" + crucified_conf[entry]).val(tmp_memberList[0][entry]);
										if (entry == "wt_profile" || entry == "weld_type" || entry == "splice_count")
											$("#" + crucified_conf[entry]).val(tmp_memberList[0][entry]).trigger("change");

										if (entry == "splice_count")
										{
											for (var j = 0; j < tmp_memberList[0]["splice_count"]; j ++)
											{
												var tmp_flg = true;
												for (var i = 0; i < tmp_memberList.length; i ++)
													if (tmp_memberList[0].splice_data[j].sign != tmp_memberList[i].splice_data[j].sign)
													{
														tmp_flg = false;
														break;
													}
												if (tmp_flg)
													$("#splice" + (j + 1) + "PosNeg").val(tmp_memberList[0].splice_data[j].sign);

												tmp_flg = true;
												for (var i = 0; i < tmp_memberList.length; i ++)
													if (tmp_memberList[0].splice_data[j].elevation_ft != tmp_memberList[i].splice_data[j].elevation_ft)
													{
														tmp_flg = false;
														break;
													}
												if (tmp_flg)
													$("#splice" + (j + 1) + "Ft").val(tmp_memberList[0].splice_data[j].elevation_ft);

												tmp_flg = true;
												for (var i = 0; i < tmp_memberList.length; i ++)
													if (tmp_memberList[0].splice_data[j].elevation_in != tmp_memberList[i].splice_data[j].elevation_in)
													{
														tmp_flg = false;
														break;
													}
												if (tmp_flg)
													$("#splice" + (j + 1) + "In").val(tmp_memberList[0].splice_data[j].elevation_in);

												tmp_flg = true;
												for (var i = 0; i < tmp_memberList.length; i ++)
													if (tmp_memberList[0].splice_data[j].elevation_fr != tmp_memberList[i].splice_data[j].elevation_fr)
													{
														tmp_flg = false;
														break;
													}
												if (tmp_flg)
													$("#splice" + (j + 1) + "Fr").val(tmp_memberList[0].splice_data[j].elevation_fr);

												tmp_flg = true;
												for (var i = 0; i < tmp_memberList.length; i ++)
													if (tmp_memberList[0].splice_data[j].profile != tmp_memberList[i].splice_data[j].profile)
													{
														tmp_flg = false;
														break;
													}
												if (tmp_flg)
													$("#splice" + (j + 1) + "WProfile").val(tmp_memberList[0].splice_data[j].profile);
											}
										}
									}
								}
							});

							Object.keys(crucified_conf.connectionProperties).map(function(entry)
							{
								var flg = true;
								for (i = 1; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].connectionProperties[entry] != tmp_memberList[i].connectionProperties[entry])
									{
										flg = false;
										break;
									}
								}
								if (flg)
								{
									$("#" + crucified_conf.connectionProperties[entry]).val(tmp_memberList[0].connectionProperties[entry]);
								}
							});

							$("#memID").val(tmp_index.map(String));
							$("#memType").val("crucified");
						});
					break;
					case "builtUpCHColumn":
						$('#rightFloat').load('./RightSlideBox/rightBarBuiltUPCH.html',function()
						{
							$('.hideAll').hide();
							var builtupPlate_conf = new_configure.builtupPlate;
							var tmp_memberList = [];
							var tmp_index = [];
							for (var i = 0; i < sel_obj._objects.length; i ++)
							{
								for (var j = 0; j < memberList.length; j ++)
								{
									if (memberList[j].uid == sel_obj._objects[i].mode + "_" + sel_obj._objects[i].uid)
									{
										tmp_memberList.push(memberList[j]);
										tmp_index.push(j);
									}
								}
							}

							Object.keys(builtupPlate_conf.memberProperties).map(function(entry)
							{
								var flg = true;
								for (i = 1; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].memberProperties[entry] != tmp_memberList[i].memberProperties[entry])
									{
										flg = false;
										break;
									}
								}
								if (flg)
								{
									$("#" + builtupPlate_conf.memberProperties[entry]).val(tmp_memberList[0].memberProperties[entry]);
								}
							});

							Object.keys(builtupPlate_conf.finishProperties).map(function(entry)
							{
								var flg = true;
								for (i = 1; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].finishProperties[entry] != tmp_memberList[i].finishProperties[entry])
									{
										flg = false;
										break;
									}
								}
								if (flg)
								{
									if (entry != "paintType" && entry != "primerCheck")
										$("#" + builtupPlate_conf.finishProperties[entry]).val(tmp_memberList[0].finishProperties[entry]);
									else if (entry == "primerCheck")
										$("#" + builtupPlate_conf.finishProperties[entry]).prop("checked", tmp_memberList[0].finishProperties[entry]).trigger("change");
									else 
										$("input[name='"+builtupPlate_conf.finishProperties[entry]+"'][value='"+tmp_memberList[0].finishProperties[entry]+"']").prop('checked', true).trigger("change");
								}
							});

							Object.keys(builtupPlate_conf.connectionProperties).map(function(entry)
							{
								var flg = true;
								for (i = 1; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].connectionProperties[entry] != tmp_memberList[i].connectionProperties[entry])
									{
										flg = false;
										break;
									}
								}
								if (flg)
								{
									$("#" + builtupPlate_conf.connectionProperties[entry]).val(tmp_memberList[0].connectionProperties[entry]);
								}
							});

							Object.keys(builtupPlate_conf).map(function(entry)
							{
								if (entry != "memberProperties" && entry != "connectionProperties" && entry != "finishProperties")
								{
									var flg = true;
									for (i = 1; i < tmp_memberList.length; i ++)
									{
										if (tmp_memberList[0][entry] != tmp_memberList[i][entry])
										{
											flg = false;
											break;
										}
									}

									if (flg)
									{
										$("#" + builtupPlate_conf[entry]).val(tmp_memberList[0][entry]);
									}
								}
							});
							$("#memID").val(tmp_index.map(String));
							$("#memType").val("builtupPlate");
						});
					break;
					case "postColumn":
						$('#rightFloat').load('./RightSlideBox/rightBarPost.html',function()
						{
							$('.hideAll').hide();
							var post_conf = new_configure.post;
							var tmp_memberList = [];
							var tmp_index = [];
							for (var i = 0; i < sel_obj._objects.length; i ++)
							{
								for (var j = 0; j < memberList.length; j ++)
								{
									if (memberList[j].uid == sel_obj._objects[i].mode + "_" + sel_obj._objects[i].uid)
									{
										tmp_memberList.push(memberList[j]);
										tmp_index.push(j);
									}
								}
							}

							Object.keys(post_conf.memberProperties).map(function(entry)
							{
								var flg = true;
								for (i = 1; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].memberProperties[entry] != tmp_memberList[i].memberProperties[entry])
									{
										flg = false;
										break;
									}
								}
								if (flg)
								{
									if (entry == "profile")
										$("#" + post_conf.memberProperties[entry]).val(tmp_memberList[0].memberProperties[entry]).trigger("change");
									else
										$("#" + post_conf.memberProperties[entry]).val(tmp_memberList[0].memberProperties[entry]);
								}
							});

							Object.keys(post_conf.finishProperties).map(function(entry)
							{
								var flg = true;
								for (i = 1; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].finishProperties[entry] != tmp_memberList[i].finishProperties[entry])
									{
										flg = false;
										break;
									}
								}
								if (flg)
								{
									if (entry != "paintType" && entry != "primerCheck")
										$("#" + post_conf.finishProperties[entry]).val(tmp_memberList[0].finishProperties[entry]);
									else if (entry == "primerCheck")
										$("#" + post_conf.finishProperties[entry]).prop("checked", tmp_memberList[0].finishProperties[entry]).trigger("change");
									else 
										$("input[name='"+post_conf.finishProperties[entry]+"'][value='"+tmp_memberList[0].finishProperties[entry]+"']").prop('checked', true).trigger("change");
								}
							});

							Object.keys(post_conf.connectionProperties).map(function(entry)
							{
								var flg = true;
								for (i = 1; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].connectionProperties[entry] != tmp_memberList[i].connectionProperties[entry])
									{
										flg = false;
										break;
									}
								}
								if (flg)
								{
									$("#" + post_conf.connectionProperties[entry]).val(tmp_memberList[0].connectionProperties[entry]);
								}
							});

							Object.keys(post_conf).map(function(entry)
							{
								if (entry != "memberProperties" && entry != "connectionProperties" && entry != "finishProperties")
								{
									var flg = true;
									for (i = 1; i < tmp_memberList.length; i ++)
									{
										if (tmp_memberList[0][entry] != tmp_memberList[i][entry])
										{
											flg = false;
											break;
										}
									}

									if (flg)
									{
										$("#" + post_conf[entry]).val(tmp_memberList[0][entry]);
									}
								}
							});
							$("#memID").val(tmp_index.map(String));
							$("#memType").val("post");
						});
					break;
					case "ibeam":
						$('#rightFloat').load('./RightSlideBox/rightBarInfillBeam.html',function()
						{
							$('.hideAll').hide();
							var ibeam_conf = new_configure.ibeam;
							var tmp_memberList = [];
							var tmp_index = [];
							for (var i = 0; i < sel_obj._objects.length; i ++)
							{
								for (var j = 0; j < memberList.length; j ++)
								{
									if (memberList[j].uid == sel_obj._objects[i].mode + "_" + sel_obj._objects[i].uid)
									{
										tmp_memberList.push(memberList[j]);
										tmp_index.push(j);
									}
								}
							}

							Object.keys(ibeam_conf.memberProperties).map(function(entry)
							{
								var flg = true;
								for (i = 1; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].memberProperties[entry] != tmp_memberList[i].memberProperties[entry])
									{
										flg = false;
										break;
									}
								}
								if (flg)
								{
									$("#" + ibeam_conf.memberProperties[entry]).val(tmp_memberList[0].memberProperties[entry]);
								}
							});

							Object.keys(ibeam_conf.finishProperties).map(function(entry)
							{
								var flg = true;
								for (i = 1; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].finishProperties[entry] != tmp_memberList[i].finishProperties[entry])
									{
										flg = false;
										break;
									}
								}
								if (flg)
								{
									if (entry != "paintType" && entry != "primerCheck")
										$("#" + ibeam_conf.finishProperties[entry]).val(tmp_memberList[0].finishProperties[entry]);
									else if (entry == "primerCheck")
										$("#" + ibeam_conf.finishProperties[entry]).prop("checked", tmp_memberList[0].finishProperties[entry]).trigger("change");
									else 
										$("input[name='"+ibeam_conf.finishProperties[entry]+"'][value='"+tmp_memberList[0].finishProperties[entry]+"']").prop('checked', true).trigger("change");
								}
							});

							Object.keys(ibeam_conf.connectionProperties).map(function(entry)
							{
								var flg = true;
								for (i = 1; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].connectionProperties[entry] != tmp_memberList[i].connectionProperties[entry])
									{
										flg = false;
										break;
									}
								}
								if (flg)
								{
									$("#" + ibeam_conf.connectionProperties[entry]).val(tmp_memberList[0].connectionProperties[entry]);
								}
							});

							Object.keys(ibeam_conf).map(function(entry)
							{
								if (entry != "memberProperties" && entry != "connectionProperties" && entry != "finishProperties")
								{
									var flg = true;
									for (i = 1; i < tmp_memberList.length; i ++)
									{
										if (tmp_memberList[0][entry] != tmp_memberList[i][entry])
										{
											flg = false;
											break;
										}
									}

									if (flg)
									{
										if ($("#" + ibeam_conf[entry]).is(":checkbox"))
										{
											if (tmp_memberList[0][entry] == "on")
												$("#" + ibeam_conf[entry]).prop('checked', true).trigger("change");
										}
										else if (entry == "alignment" || entry == "stiffWeldType")
											$("#" + ibeam_conf[entry]).val(tmp_memberList[0][entry]).trigger("change");
										else
											$("#" + ibeam_conf[entry]).val(tmp_memberList[0][entry]);
									}
								}
							});

							if ($("#infillbeamalignment").val() == "Skewed")
							{
								Object.keys(skew_slop_option.skew).map(function(entry)
								{
									var flg = true;
									for (i = 1; i < tmp_memberList.length; i ++)
									{
										if (tmp_memberList[0][entry] != tmp_memberList[i][entry])
										{
											flg = false;
											break;
										}
									}
									if (flg)
									{
										$("#" + skew_slop_option.skew[entry]).val(tmp_memberList[0][entry]);
									}
								})
							}
							else if ($("#infillbeamalignment").val() == "Sloped")
							{
								Object.keys(skew_slop_option.slop).map(function(entry)
								{
									var flg = true;
									for (i = 1; i < tmp_memberList.length; i ++)
									{
										if (tmp_memberList[0][entry] != tmp_memberList[i][entry])
										{
											flg = false;
											break;
										}
									}
									if (flg)
									{
										$("#" + skew_slop_option.slop[entry]).val(tmp_memberList[0][entry]);
									}
								})
							}
							else if ($("#infillbeamalignment").val() == "Sloped & Skewed")
							{
								Object.keys(skew_slop_option.slop_skew).map(function(entry)
								{
									var flg = true;
									for (i = 1; i < tmp_memberList.length; i ++)
									{
										if (tmp_memberList[0][entry] != tmp_memberList[i][entry])
										{
											flg = false;
											break;
										}
									}
									if (flg)
									{
										$("#" + skew_slop_option.slop_skew[entry]).val(tmp_memberList[0][entry]);
									}
								})
							}
							$("#memID").val(tmp_index.map(String));
							$("#memType").val("ibeam");
						});
					break;
					case "gridLine":
						$('#rightFloat').load('./RightSlideBox/rightBarGrid.html', function() 
						{
							$("#rightGrid #direction").val(sel_obj.type);
							$("#rightGrid #index").val(sel_obj.index);
						});
					break;
					case "pgirder":
						$('#rightFloat').load('./RightSlideBox/rightBarPlateGirder.html',function()
						{
							$('.hideAll').hide();
							var pgirder_conf = new_configure.pgirder;
							var tmp_memberList = [];
							var tmp_index = [];
							for (var i = 0; i < sel_obj._objects.length; i ++)
							{
								for (var j = 0; j < memberList.length; j ++)
								{
									if (memberList[j].uid == sel_obj._objects[i].mode + "_" + sel_obj._objects[i].uid)
									{
										tmp_memberList.push(memberList[j]);
										tmp_index.push(j);
									}
								}
							}

							Object.keys(pgirder_conf.memberProperties).map(function(entry)
							{
								var flg = true;
								for (i = 1; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].memberProperties[entry] != tmp_memberList[i].memberProperties[entry])
									{
										flg = false;
										break;
									}
								}
								if (flg)
								{
									$("#" + pgirder_conf.memberProperties[entry]).val(tmp_memberList[0].memberProperties[entry]);
								}
							});

							Object.keys(pgirder_conf.finishProperties).map(function(entry)
							{
								var flg = true;
								for (i = 1; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].finishProperties[entry] != tmp_memberList[i].finishProperties[entry])
									{
										flg = false;
										break;
									}
								}
								if (flg)
								{
									if (entry != "paintType" && entry != "primerCheck")
										$("#" + pgirder_conf.finishProperties[entry]).val(tmp_memberList[0].finishProperties[entry]);
									else if (entry == "primerCheck")
										$("#" + pgirder_conf.finishProperties[entry]).prop("checked", tmp_memberList[0].finishProperties[entry]).trigger("change");
									else 
										$("input[name='"+pgirder_conf.finishProperties[entry]+"'][value='"+tmp_memberList[0].finishProperties[entry]+"']").prop('checked', true).trigger("change");
								}
							});

							Object.keys(pgirder_conf.connectionProperties).map(function(entry)
							{
								var flg = true;
								for (i = 1; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].connectionProperties[entry] != tmp_memberList[i].connectionProperties[entry])
									{
										flg = false;
										break;
									}
								}
								if (flg)
								{
									$("#" + pgirder_conf.connectionProperties[entry]).val(tmp_memberList[0].connectionProperties[entry]);
								}
							});

							Object.keys(pgirder_conf).map(function(entry)
							{
								if (entry != "memberProperties" && entry != "connectionProperties" && entry != "finishProperties")
								{
									var flg = true;
									for (i = 1; i < tmp_memberList.length; i ++)
									{
										if (tmp_memberList[0][entry] != tmp_memberList[i][entry])
										{
											flg = false;
											break;
										}
									}

									if (flg)
									{
										if (entry == "alignment")
											$("#" + pgirder_conf[entry]).val(tmp_memberList[0][entry]).trigger("change");
										else
											$("#" + pgirder_conf[entry]).val(tmp_memberList[0][entry]);
									}
								}
							});

							if ($("#plategrideralignment").val() == "Skewed")
							{
								Object.keys(skew_slop_option.skew).map(function(entry)
								{
									var flg = true;
									for (i = 1; i < tmp_memberList.length; i ++)
									{
										if (tmp_memberList[0][entry] != tmp_memberList[i][entry])
										{
											flg = false;
											break;
										}
									}
									if (flg)
									{
										$("#" + skew_slop_option.skew[entry]).val(tmp_memberList[0][entry]);
									}
								})
							}
							else if ($("#plategrideralignment").val() == "Sloped")
							{
								Object.keys(skew_slop_option.slop).map(function(entry)
								{
									var flg = true;
									for (i = 1; i < tmp_memberList.length; i ++)
									{
										if (tmp_memberList[0][entry] != tmp_memberList[i][entry])
										{
											flg = false;
											break;
										}
									}
									if (flg)
									{
										$("#" + skew_slop_option.slop[entry]).val(tmp_memberList[0][entry]);
									}
								})
							}
							else if ($("#plategrideralignment").val() == "Sloped & Skewed")
							{
								Object.keys(skew_slop_option.slop_skew).map(function(entry)
								{
									var flg = true;
									for (i = 1; i < tmp_memberList.length; i ++)
									{
										if (tmp_memberList[0][entry] != tmp_memberList[i][entry])
										{
											flg = false;
											break;
										}
									}
									if (flg)
									{
										$("#" + skew_slop_option.slop_skew[entry]).val(tmp_memberList[0][entry]);
									}
								})
							}
							$("#memID").val(tmp_index.map(String));
							$("#memType").val("pgirder");
						});
					break;
					case "cantBeam":
						$('#rightFloat').load('./RightSlideBox/rightBarCantilever.html',function()
						{
							$('.hideAll').hide();
							var pgirder_conf = new_configure.cantileverBeam;
							var tmp_memberList = [];
							var tmp_index = [];
							for (var i = 0; i < sel_obj._objects.length; i ++)
							{
								for (var j = 0; j < memberList.length; j ++)
								{
									if (memberList[j].uid == sel_obj._objects[i].mode + "_" + sel_obj._objects[i].uid)
									{
										tmp_memberList.push(memberList[j]);
										tmp_index.push(j);
									}
								}
							}

							Object.keys(pgirder_conf.memberProperties).map(function(entry)
							{
								var flg = true;
								for (i = 1; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].memberProperties[entry] != tmp_memberList[i].memberProperties[entry])
									{
										flg = false;
										break;
									}
								}
								if (flg)
								{
									$("#" + pgirder_conf.memberProperties[entry]).val(tmp_memberList[0].memberProperties[entry]);
								}
							});

							Object.keys(pgirder_conf.finishProperties).map(function(entry)
							{
								var flg = true;
								for (i = 1; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].finishProperties[entry] != tmp_memberList[i].finishProperties[entry])
									{
										flg = false;
										break;
									}
								}
								if (flg)
								{
									if (entry != "paintType" && entry != "primerCheck")
										$("#" + pgirder_conf.finishProperties[entry]).val(tmp_memberList[0].finishProperties[entry]);
									else if (entry == "primerCheck")
										$("#" + pgirder_conf.finishProperties[entry]).prop("checked", tmp_memberList[0].finishProperties[entry]).trigger("change");
									else 
										$("input[name='"+pgirder_conf.finishProperties[entry]+"'][value='"+tmp_memberList[0].finishProperties[entry]+"']").prop('checked', true).trigger("change");
								}
							});

							Object.keys(pgirder_conf.connectionProperties).map(function(entry)
							{
								var flg = true;
								for (i = 1; i < tmp_memberList.length; i ++)
								{
									if (tmp_memberList[0].connectionProperties[entry] != tmp_memberList[i].connectionProperties[entry])
									{
										flg = false;
										break;
									}
								}
								if (flg)
								{
									$("#" + pgirder_conf.connectionProperties[entry]).val(tmp_memberList[0].connectionProperties[entry]);
								}
							});

							Object.keys(pgirder_conf).map(function(entry)
							{
								if (entry != "memberProperties" && entry != "connectionProperties" && entry != "finishProperties")
								{
									var flg = true;
									for (i = 1; i < tmp_memberList.length; i ++)
									{
										if (tmp_memberList[0][entry] != tmp_memberList[i][entry])
										{
											flg = false;
											break;
										}
									}

									if (flg)
									{
										if ($("#" + pgirder_conf[entry]).is(":checkbox"))
										{
											if (tmp_memberList[0][entry] == "on")
												$("#" + pgirder_conf[entry]).prop('checked', true).trigger("change");
										}
										else if (entry == "alignment" || entry == "stiffWeldType")
											$("#" + pgirder_conf[entry]).val(tmp_memberList[0][entry]).trigger("change");
										else
											$("#" + pgirder_conf[entry]).val(tmp_memberList[0][entry]);
									}
								}
							});

							if ($("#clbeamalignment").val() == "Skewed")
							{
								Object.keys(skew_slop_option.skew).map(function(entry)
								{
									var flg = true;
									for (i = 1; i < tmp_memberList.length; i ++)
									{
										if (tmp_memberList[0][entry] != tmp_memberList[i][entry])
										{
											flg = false;
											break;
										}
									}
									if (flg)
									{
										$("#" + skew_slop_option.skew[entry]).val(tmp_memberList[0][entry]);
									}
								})
							}
							else if ($("#clbeamalignment").val() == "Sloped")
							{
								Object.keys(skew_slop_option.slop).map(function(entry)
								{
									var flg = true;
									for (i = 1; i < tmp_memberList.length; i ++)
									{
										if (tmp_memberList[0][entry] != tmp_memberList[i][entry])
										{
											flg = false;
											break;
										}
									}
									if (flg)
									{
										$("#" + skew_slop_option.slop[entry]).val(tmp_memberList[0][entry]);
									}
								})
							}
							else if ($("#clbeamalignment").val() == "Sloped & Skewed")
							{
								Object.keys(skew_slop_option.slop_skew).map(function(entry)
								{
									var flg = true;
									for (i = 1; i < tmp_memberList.length; i ++)
									{
										if (tmp_memberList[0][entry] != tmp_memberList[i][entry])
										{
											flg = false;
											break;
										}
									}
									if (flg)
									{
										$("#" + skew_slop_option.slop_skew[entry]).val(tmp_memberList[0][entry]);
									}
								})
							}
							$("#memID").val(tmp_index.map(String));
							$("#memType").val("cantileverBeam");
						});
					break;
				}

				$('#rightFloat').show();
				// $('.rightFloat') .css({'height': (($(window).height()) - 140)+'px'});
				$(".rightFloatDiv").addClass("active-right");
				$(".rightFloatDiv .rightFloat").css("display", "block");
				$(".rightFloatDiv .left").css("display", "none");
				$(".rightFloatDiv .right").css("display", "block");
			}
			main.hideContext();
		});

		$("#context_group").on("click", "dd", function()
		{
			var mode 		= $(this).attr("mode");
			var height 		= 31 * $("#context_global").children().length;
			var group  		= canvas.getActiveObject();
			var group_new 	= [];
			var group_sel 	= null;
			var group_x 	= 999999;
			var group_y 	= 999999;
			var uid;

			$("#context_group").removeClass("active");
			if (mode != "truss" && mode != "trapeTruss" && mode != "paraTruss")
			{
				$("#context_global").addClass("active");
				$("#context_global").css("height", height + "px");
			}
			if (mode == "truss")
			{
				var pos = {x: $("#context_global").offset.left, y: $("#context_global").offset.top};
				main.showTrussContext(pos);
				return;
			}
			else if (mode == "trapeTruss")
			{
				var pos = {x: $("#context_global").offset.left, y: $("#context_global").offset.top};
				main.showTrapeTrussContext(pos);
				return;
			}
			else if (mode == "paraTruss")
			{
				var pos = {x: $("#context_global").offset.left, y: $("#context_global").offset.top};
				main.showParaTrussContext(pos);
				return;
			}
			for(var i = 0; i < group._objects.length; i ++)
			{
				group._objects[i].setCoords();

				if(mode == group._objects[i].mode)
				{
					if(group.mode == mode)
					{
						group_y = Math.min(group_y, group.top);
						group_x = Math.min(group_x, group.left);
					}
					else
					{
						group_y = Math.min(group_y, group.top  + group._objects[i].top  + group.height / 2);
						group_x = Math.min(group_x, group.left + group._objects[i].left + group.width  / 2);
					}

					uid = group._objects[i].uid;

					group_new.push(group._objects[i]);
				}
			}

			if (group.group)
			{
				group_new.push(group.group);
			}

			if (mode == "truss")
			{
				var pos = {x: $("#context_global").offset.left, y: $("#context_global").offset.top};
				main.showTrussContext(pos);
				return;
			}
			else if (mode == "trapeTruss")
			{
				var pos = {x: $("#context_global").offset.left, y: $("#context_global").offset.top};
				main.showTrapeTrussContext(pos);
				return;
			}
			else if (mode == "paraTruss")
			{
				var pos = {x: $("#context_global").offset.left, y: $("#context_global").offset.top};
				main.showParaTrussContext(pos);
				return;
			}
			else 
			{
				group_sel = new fabric.Group(group_new, {
					top 	: group_y,
					left 	: group_x,
					mode 	: mode,
					type 	: "new_group"
				});
			}
			
			canvas.discardActiveObject();
			if ((mode == "Column" || mode == "boxColumn" || mode == "builtUpIColumn" || mode == "builtUpCRColumn" || mode == "builtUpCHColumn" || mode == "postColumn") && $("#viewdrpdwn").val() == 1)
				for (i = 0; i < group_new.length; i ++ )
				{
					group_new[i].setPositionByOrigin({x: group_new[i].defaultX, y: group_new[i].defaultY}, 'center', 'center');
				}

			delete group_new;
			canvas.setActiveObject(group_sel);
			canvas.calcOffset();
			canvas.renderAll();

			var pos = {x: $("#context_global").offset.left, y: $("#context_global").offset.top};
			
			main.showContext(pos, "global", "group");
		});
	}

	main.showTrapeTrussContext = function(pos)
	{
		var sel_obj = canvas.getActiveObject();
		var buffArr = [];
		var topchord_num = 0;
		var bottomchord_num = 0;
		var vertical_num = 0;
		var brace_num = 0;
		var trussMember;
		var mode, uid;
		for (i = 0; i < sel_obj._objects.length; i ++)
		{
			if (sel_obj._objects[i].memType == "trape_topchord")
			{
				topchord_num ++;
				mode = sel_obj._objects[i].mode;
				uid = sel_obj._objects[i].uid;
			}
			if (sel_obj._objects[i].memType == "trape_bottomchord")
			{
				bottomchord_num ++;
				mode = sel_obj._objects[i].mode;
				uid = sel_obj._objects[i].uid;
			}
			if (sel_obj._objects[i].memType == "trape_vertical")
			{
				vertical_num ++;
				mode = sel_obj._objects[i].mode;
				uid = sel_obj._objects[i].uid;
			}
			if (sel_obj._objects[i].memType == "trape_brace")
			{
				brace_num ++;
				mode = sel_obj._objects[i].mode;
				uid = sel_obj._objects[i].uid;
			}
			if (buffArr.indexOf(sel_obj._objects[i].memType) != -1)
				continue;

			buffArr.push(sel_obj._objects[i].mode);
		}

		for (i = 0; i < memberList.length; i ++)
		{
			if (memberList[i].uid == mode + "_" + uid)
			{
				trussMember = memberList[i];
				break;
			}
		}

		if (trussMember == undefined)
			return;

		// $("#context_truss").removeClass("active");
		var group  		= canvas.getActiveObject();
		if (topchord_num == 1 && bottomchord_num == 1 && vertical_num == trussMember.vert_data.length && brace_num == trussMember.vert_data.length - 1)
		{
			$("#context_global").addClass("active");
			var height 	= 31 * $("#context_global").children().length;
			$("#context_global").css("height", height + "px");
			
			var group_x = 99999;
			var group_y = 99999;

			var group_new = [];
			var group_sel = null;

			for(var i = 0; i < group._objects.length; i ++)
			{
				group._objects[i].setCoords();

				if(mode == group._objects[i].mode)
				{
					group._objects[i].setCoords();

					if(group.mode == "trapeTruss")
					{
						group_y = Math.min(group_y, group.top);
						group_x = Math.min(group_x, group.left);
					}
					else
					{
						group_y = Math.min(group_y, group.top  + group._objects[i].top  + group.height / 2);
						group_x = Math.min(group_x, group.left + group._objects[i].left + group.width  / 2);
					}

					uid = group._objects[i].uid;

					group_new.push(group._objects[i]);
				}
			}

			if (group.group)
			{
				group_new.push(group.group);
			}

			group_sel = new fabric.Group(group_new, {
				left 	: group_x,
				top 	: group_y,
				mode 	: "trapeTruss",
				uid 	: uid,
				type 	: "new_group"
			});

			delete group_new;
			
			canvas.discardActiveObject();
			canvas.setActiveObject(group_sel);
			canvas.calcOffset();
			canvas.renderAll();

			main.showContext(pos, "trapeTruss", "global");
			$("#context_trape").removeClass("active");
		}
		else 
		{
			$("#context_trape").addClass("active");
			$("#trape_topchord").addClass("disabled");
			$("#trape_bottomchord").addClass("disabled");
			$("#trape_verticals").addClass("disabled");
			$("#trape_brace").addClass("disabled");

			$("#context_trape").css("height", 124 + "px");
			if (topchord_num > 0)
			{
				$("#trape_topchord").removeClass("disabled");
			}
			if (bottomchord_num > 0)
			{
				$("#trape_bottomchord").removeClass("disabled");
			}
			if (vertical_num > 0)
			{
				$("#trape_verticals").removeClass("disabled");
			}
			if (brace_num > 0)
			{
				$("#trape_brace").removeClass("disabled");
			}
		}
	}

	main.showParaTrussContext = function(pos)
	{
		var sel_obj = canvas.getActiveObject();
		var buffArr = [];
		var topchord_num = 0;
		var bottomchord_num = 0;
		var vertical_num = 0;
		var brace_num = 0;
		var trussMember;
		var mode, uid;
		for (i = 0; i < sel_obj._objects.length; i ++)
		{
			if (sel_obj._objects[i].memType == "para_topchord")
			{
				topchord_num ++;
				mode = sel_obj._objects[i].mode;
				uid = sel_obj._objects[i].uid;
			}
			if (sel_obj._objects[i].memType == "para_bottomchord")
			{
				bottomchord_num ++;
				mode = sel_obj._objects[i].mode;
				uid = sel_obj._objects[i].uid;
			}
			if (sel_obj._objects[i].memType == "para_vertical")
			{
				vertical_num ++;
				mode = sel_obj._objects[i].mode;
				uid = sel_obj._objects[i].uid;
			}
			if (sel_obj._objects[i].memType == "para_brace")
			{
				brace_num ++;
				mode = sel_obj._objects[i].mode;
				uid = sel_obj._objects[i].uid;
			}
			if (buffArr.indexOf(sel_obj._objects[i].memType) != -1)
				continue;

			buffArr.push(sel_obj._objects[i].mode);
		}

		for (i = 0; i < memberList.length; i ++)
		{
			if (memberList[i].uid == mode + "_" + uid)
			{
				trussMember = memberList[i];
				break;
			}
		}

		if (trussMember == undefined)
			return;

		// $("#context_truss").removeClass("active");
		var group  		= canvas.getActiveObject();
		if (topchord_num == 1 && bottomchord_num == 1 && vertical_num == trussMember.inclineNum && brace_num == trussMember.vert_data.length + 1)
		{
			$("#context_global").addClass("active");
			var height 	= 31 * $("#context_global").children().length;
			$("#context_global").css("height", height + "px");
			
			var group_x = 99999;
			var group_y = 99999;

			var group_new = [];
			var group_sel = null;

			for(var i = 0; i < group._objects.length; i ++)
			{
				group._objects[i].setCoords();

				if(mode == group._objects[i].mode)
				{
					group._objects[i].setCoords();

					if(group.mode == "paraTruss")
					{
						group_y = Math.min(group_y, group.top);
						group_x = Math.min(group_x, group.left);
					}
					else
					{
						group_y = Math.min(group_y, group.top  + group._objects[i].top  + group.height / 2);
						group_x = Math.min(group_x, group.left + group._objects[i].left + group.width  / 2);
					}

					uid = group._objects[i].uid;

					group_new.push(group._objects[i]);
				}
			}

			if (group.group)
			{
				group_new.push(group.group);
			}

			group_sel = new fabric.Group(group_new, {
				left 	: group_x,
				top 	: group_y,
				mode 	: "paraTruss",
				uid 	: uid,
				type 	: "new_group"
			});

			delete group_new;
			
			canvas.discardActiveObject();
			canvas.setActiveObject(group_sel);
			canvas.calcOffset();
			canvas.renderAll();

			main.showContext(pos, "paraTruss", "global");
			$("#context_para").removeClass("active");
		}
		else 
		{
			$("#context_para").addClass("active");
			$("#para_topchord").addClass("disabled");
			$("#para_bottomchord").addClass("disabled");
			$("#para_verticals").addClass("disabled");
			$("#para_brace").addClass("disabled");

			$("#context_para").css("height", 124 + "px");
			if (topchord_num > 0)
			{
				$("#para_topchord").removeClass("disabled");
			}
			if (bottomchord_num > 0)
			{
				$("#para_bottomchord").removeClass("disabled");
			}
			if (vertical_num > 0)
			{
				$("#para_verticals").removeClass("disabled");
			}
			if (brace_num > 0)
			{
				$("#para_brace").removeClass("disabled");
			}
		}
	}

	main.showTrussContext = function(pos)
	{
		var sel_obj = canvas.getActiveObject();
		var buffArr = [];
		var topchord_num = 0;
		var bottomchord_num = 0;
		var vertical_num = 0;
		var brace_num = 0;
		var trussMember;
		var mode, uid;
		for (i = 0; i < sel_obj._objects.length; i ++)
		{
			if (sel_obj._objects[i].memType == "pitch_topchord")
			{
				topchord_num ++;
				mode = sel_obj._objects[i].mode;
				uid = sel_obj._objects[i].uid;
			}
			if (sel_obj._objects[i].memType == "pitch_bottomchord")
			{
				bottomchord_num ++;
				mode = sel_obj._objects[i].mode;
				uid = sel_obj._objects[i].uid;
			}
			if (sel_obj._objects[i].memType == "pitch_vertical")
			{
				vertical_num ++;
				mode = sel_obj._objects[i].mode;
				uid = sel_obj._objects[i].uid;
			}
			if (sel_obj._objects[i].memType == "pitch_brace")
			{
				brace_num ++;
				mode = sel_obj._objects[i].mode;
				uid = sel_obj._objects[i].uid;
			}
			if (buffArr.indexOf(sel_obj._objects[i].memType) != -1)
				continue;

			buffArr.push(sel_obj._objects[i].mode);
		}

		for (i = 0; i < memberList.length; i ++)
		{
			if (memberList[i].uid == mode + "_" + uid)
			{
				trussMember = memberList[i];
				break;
			}
		}

		if (trussMember == undefined)
			return;

		var group  		= canvas.getActiveObject();
		if (topchord_num == 1 && bottomchord_num == 1 && vertical_num == trussMember.vert_data.length && brace_num == trussMember.vert_data.length - 1)
		{
			$("#context_global").addClass("active");
			var height 	= 31 * $("#context_global").children().length;
			$("#context_global").css("height", height + "px");
			
			var group_x = 99999;
			var group_y = 99999;

			var group_new = [];
			var group_sel = null;

			for(var i = 0; i < group._objects.length; i ++)
			{
				group._objects[i].setCoords();

				if(mode == group._objects[i].mode)
				{
					group._objects[i].setCoords();

					if(group.mode == "truss")
					{
						group_y = Math.min(group_y, group.top);
						group_x = Math.min(group_x, group.left);
					}
					else
					{
						group_y = Math.min(group_y, group.top  + group._objects[i].top  + group.height / 2);
						group_x = Math.min(group_x, group.left + group._objects[i].left + group.width  / 2);
					}

					uid = group._objects[i].uid;

					group_new.push(group._objects[i]);
				}
			}

			if (group.group)
			{
				group_new.push(group.group);
			}

			group_sel = new fabric.Group(group_new, {
				left 	: group_x,
				top 	: group_y,
				mode 	: "truss",
				uid 	: uid,
				type 	: "new_group"
			});

			delete group_new;
			
			canvas.discardActiveObject();
			canvas.setActiveObject(group_sel);
			canvas.calcOffset();
			canvas.renderAll();

			main.showContext(pos, "truss", "global");
			$("#context_truss").removeClass("active");
		}
		else 
		{
			$("#context_truss").addClass("active");
			$("#truss_topchord").addClass("disabled");
			$("#truss_bottomchord").addClass("disabled");
			$("#truss_verticals").addClass("disabled");
			$("#truss_brace").addClass("disabled");

			$("#context_truss").css("height", 124 + "px");
			if (topchord_num > 0)
			{
				$("#truss_topchord").removeClass("disabled");
			}
			if (bottomchord_num > 0)
			{
				$("#truss_bottomchord").removeClass("disabled");
			}
			if (vertical_num > 0)
			{
				$("#truss_verticals").removeClass("disabled");
			}
			if (brace_num > 0)
			{
				$("#truss_brace").removeClass("disabled");
			}
		}
	}

	$("#context_truss").on("click", "dd", function()
	{
		if ($(this).hasClass("disabled"))
			return;
		var group  		= canvas.getActiveObject();
		var id = $(this).attr("id");
		var memType = "";
		if (id == "truss_topchord")
			memType = "pitch_topchord";
		if (id == "truss_bottomchord")
			memType = "pitch_bottomchord";
		if (id == "truss_verticals")
			memType = "pitch_vertical";
		if (id == "truss_brace")
			memType = "pitch_brace";

		$("#context_truss").removeClass("active");

		var group_new = [];
		var group_sel = null;

		var group_x = 99999;
		var group_y = 99999;
		var uid = "";

		var id_arr = [];
		for(var i = 0; i < group._objects.length; i ++)
		{
			group._objects[i].setCoords();

			if(memType == group._objects[i].memType)
			{
				group._objects[i].setCoords();

				if(group.mode == "truss")
				{
					group_y = Math.min(group_y, group.top);
					group_x = Math.min(group_x, group.left);
				}
				else
				{
					group_y = Math.min(group_y, group.top  + group._objects[i].top  + group.height / 2);
					group_x = Math.min(group_x, group.left + group._objects[i].left + group.width  / 2);
				}

				uid = group._objects[i].uid;

				group_new.push(group._objects[i]);

				id_arr.push(group._objects[i].type);
			}
		}

		if (group.group)
		{
			group_new.push(group.group);
		}

		group_sel = new fabric.Group(group_new, {
			left 	: group_x,
			top 	: group_y,
			mode 	: "truss",
			uid 	: uid,
			memType : memType,
			type 	: "new_group",
			id_arr 	: id_arr
		});

		delete group_new;
		
		canvas.discardActiveObject();
		canvas.setActiveObject(group_sel);
		canvas.calcOffset();
		canvas.renderAll();
		var pos = {x: $("#context_global").offset.left, y: $("#context_global").offset.top};
		main.showContext(pos, "global", "group");
	});

	$("#context_trape").on("click", "dd", function()
	{
		if ($(this).hasClass("disabled"))
			return;
		var group  		= canvas.getActiveObject();
		var id = $(this).attr("id");
		var memType = "";
		if (id == "trape_topchord")
			memType = "trape_topchord";
		if (id == "trape_bottomchord")
			memType = "trape_bottomchord";
		if (id == "trape_verticals")
			memType = "trape_vertical";
		if (id == "trape_brace")
			memType = "trape_brace";

		$("#context_trape").removeClass("active");

		var group_new = [];
		var group_sel = null;

		var group_x = 99999;
		var group_y = 99999;
		var uid = "";

		var id_arr = [];
		for(var i = 0; i < group._objects.length; i ++)
		{
			group._objects[i].setCoords();

			if(memType == group._objects[i].memType)
			{
				group._objects[i].setCoords();

				if(group.mode == "trapeTruss")
				{
					group_y = Math.min(group_y, group.top);
					group_x = Math.min(group_x, group.left);
				}
				else
				{
					group_y = Math.min(group_y, group.top  + group._objects[i].top  + group.height / 2);
					group_x = Math.min(group_x, group.left + group._objects[i].left + group.width  / 2);
				}

				uid = group._objects[i].uid;

				group_new.push(group._objects[i]);

				id_arr.push(group._objects[i].type);
			}
		}

		if (group.group)
		{
			group_new.push(group.group);
		}

		group_sel = new fabric.Group(group_new, {
			left 	: group_x,
			top 	: group_y,
			mode 	: "trapeTruss",
			uid 	: uid,
			memType : memType,
			type 	: "new_group",
			id_arr 	: id_arr
		});

		delete group_new;
		
		canvas.discardActiveObject();
		canvas.setActiveObject(group_sel);
		canvas.calcOffset();
		canvas.renderAll();
		var pos = {x: $("#context_global").offset.left, y: $("#context_global").offset.top};
		main.showContext(pos, "global", "group");
	});

	$("#context_para").on("click", "dd", function()
	{
		if ($(this).hasClass("disabled"))
			return;
		var group  		= canvas.getActiveObject();
		var id = $(this).attr("id");
		var memType = "";
		if (id == "para_topchord")
			memType = "para_topchord";
		if (id == "para_bottomchord")
			memType = "para_bottomchord";
		if (id == "para_verticals")
			memType = "para_vertical";
		if (id == "para_brace")
			memType = "para_brace";

		$("#context_para").removeClass("active");

		var group_new = [];
		var group_sel = null;

		var group_x = 99999;
		var group_y = 99999;
		var uid = "";

		var id_arr = [];
		for(var i = 0; i < group._objects.length; i ++)
		{
			group._objects[i].setCoords();

			if(memType == group._objects[i].memType)
			{
				group._objects[i].setCoords();

				if(group.mode == "paraTruss")
				{
					group_y = Math.min(group_y, group.top);
					group_x = Math.min(group_x, group.left);
				}
				else
				{
					group_y = Math.min(group_y, group.top  + group._objects[i].top  + group.height / 2);
					group_x = Math.min(group_x, group.left + group._objects[i].left + group.width  / 2);
				}

				uid = group._objects[i].uid;

				group_new.push(group._objects[i]);

				id_arr.push(group._objects[i].type);
			}
		}

		if (group.group)
		{
			group_new.push(group.group);
		}

		group_sel = new fabric.Group(group_new, {
			left 	: group_x,
			top 	: group_y,
			mode 	: "paraTruss",
			uid 	: uid,
			memType : memType,
			type 	: "new_group",
			id_arr 	: id_arr
		});

		delete group_new;
		
		canvas.discardActiveObject();
		canvas.setActiveObject(group_sel);
		canvas.calcOffset();
		canvas.renderAll();
		var pos = {x: $("#context_global").offset.left, y: $("#context_global").offset.top};
		main.showContext(pos, "global", "group");
	})

	main.showContext = function(pos, mode, previous_mode)
	{
		var height 	= 31 * $("#context_" + mode).children().length;
		if (mode == "group")
		{
			$("#context_group").children().map(function()
			{
				if ($(this).attr("mode") == "builtUpCHColumn")
				{
					height += 31;
					return;
				}
			})
		}
		var sel_obj = canvas.getActiveObject();
		$("#context_add").addClass("disabled");
		$("#context_move").addClass("disabled");
		$("#context_copy").addClass("disabled");
		$("#context_edit").addClass("disabled");
		$("#context_delete").addClass("disabled");
		$("#context_extend").addClass("disabled");

		if (previous_mode == "group" || (sel_obj && sel_obj.type == "new_group")) {
			$("#context_delete").removeClass("disabled");
			if (sel_obj.mode != "gridLine")
				$("#context_edit").removeClass("disabled");
			if (sel_obj.mode == "truss" || sel_obj.mode == "paraTruss" || sel_obj.mode == "trapeTruss")
			{
				// $("#context_delete").addClass("disabled");
				$("#context_edit").removeClass("disabled");
			}
		}

		if (sel_obj && (previous_mode != "group" && sel_obj.type != "new_group"))
		{
			if (sel_obj.mode == "gridLine")
			{
				$("#context_add").removeClass("disabled");
				$("#context_move").removeClass("disabled");
				$("#context_copy").addClass("disabled");
				$("#context_edit").removeClass("disabled");
				$("#context_delete").removeClass("disabled");
			}
			else if (sel_obj.mode == "Column" || sel_obj.mode == "boxColumn" || sel_obj.mode == "builtUpIColumn" || sel_obj.mode == "builtUpCRColumn" || sel_obj.mode == "builtUpCHColumn" )
			{
				$("#context_copy").removeClass("disabled");
				$("#context_edit").removeClass("disabled");
				$("#context_delete").removeClass("disabled");
			}
			else if (sel_obj.mode == "periBeam" || sel_obj.mode == "Beam" || sel_obj.mode == "pgirder")
			{
				if (!checkBeamSlop(sel_obj))
					$("#context_move").removeClass("disabled");
				if (!checkBeamSkew(sel_obj))
				{
					$("#context_copy").removeClass("disabled");
				}
				$("#context_edit").removeClass("disabled");
				$("#context_extend").removeClass("disabled");
				$("#context_delete").removeClass("disabled");
			}
			else if (sel_obj.mode == "cantBeam")
			{
				$("#context_edit").removeClass("disabled");
				$("#context_delete").removeClass("disabled");
			}
			else if (sel_obj.mode == "h_brace")
			{
				$("#context_copy").removeClass("disabled");
				$("#context_edit").removeClass("disabled");
				$("#context_delete").removeClass("disabled");
			}
			else if (sel_obj.mode == "v_brace")
			{
				$("#context_copy").removeClass("disabled");
				$("#context_edit").removeClass("disabled");
				$("#context_delete").removeClass("disabled");
			}
			else if (sel_obj.mode == "pourStop")
			{
				$("#context_copy").removeClass("disabled");
				$("#context_edit").removeClass("disabled");
				$("#context_delete").removeClass("disabled");
			}
			else if (sel_obj.mode == "truss" || sel_obj.mode == "paraTruss" || sel_obj.mode == "trapeTruss")
			{

				$("#context_edit").removeClass("disabled");
				if (mode != "global")
					$("#context_delete").removeClass("disabled");
				if (sel_obj.mode == "truss")
				{
					$("#context_truss").removeClass("active");
				}
				if (sel_obj.mode == "trapeTruss")
				{
					$("#context_trape").removeClass("active");
				}
				else if (sel_obj.mode == "paraTruss")
				{
					$("#context_para").removeClass("active");
				}
			}
			else if (sel_obj.memType == "pitch_brace" || sel_obj.memType == "pitch_vertical" || sel_obj.memType == "pitch_topchord" || sel_obj.memType == "pitch_bottomchord")
			{
				$("#context_edit").removeClass("disabled");
				// $("#context_delete").removeClass("disabled");
			}
			else if (sel_obj.memType == "para_brace" || sel_obj.memType == "para_vertical" || sel_obj.memType == "para_topchord" || sel_obj.memType == "para_bottomchord")
			{
				$("#context_edit").removeClass("disabled");
				// $("#context_delete").removeClass("disabled");
			}
			else if (sel_obj.memType == "trape_brace" || sel_obj.memType == "trape_vertical" || sel_obj.memType == "trape_topchord" || sel_obj.memType == "trape_bottomchord")
			{
				$("#context_edit").removeClass("disabled");
				// $("#context_delete").removeClass("disabled");
			}
			else if (sel_obj.mode == "ibeam")
			{
				if (!checkBeamSlop(sel_obj))
					$("#context_move").removeClass("disabled");
				$("#context_edit").removeClass("disabled");
				$("#context_extend").removeClass("disabled");
				$("#context_delete").removeClass("disabled");
			}
			else if (sel_obj.mode == "postColumn")
			{
				$("#context_edit").removeClass("disabled");
				$("#context_delete").removeClass("disabled");
			}

			// else if (sel_obj.mode == "truss")
			// {
			// 	$("#context_edit").removeClass("disabled");
			// }
		}

		if(main.clipboard)
		{
			$("#context_paste").removeClass("disabled");
		}
		else
		{
			$("#context_paste").addClass("disabled");
		}

		$("#context_menu").css(
		{
			"left" 	  : pos.x,
			"top" 	  : pos.y,
			"display" : "block"
		});

		$("#context_" + mode).addClass("active");
		$("#context_" + mode).css("opacity", "0");
		$("#context_" + mode).animate({height : height + "px", opacity : 1}, 150);
	}

	main.changeMode  = function()
	{
		vbrace.isDrawReady = 0;
		hbrace.isDrawReady = 0;
		canvas.defaultCursor = 'default';
		truss.isDrawReady  = 0;
	}

	main.hideContext = function()
	{
		$("#context_menu .active").css("height", "0px");
		$("#context_menu .active").removeClass("active");
		$("#context_menu").css("display", "none");
	}

	main.init();
}
