import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
	if(Meteor.users.find().count() === 0){
		Accounts.createUser({
		    	username:"admin",
		        password: "admin",
		        profile:{
					visible:0,
		        	full_name: "admin",
		        	email: "admin@prospero.com",
		        	institution: "Prospero",
		       		telephone: "091 / 555 - 007"
		        }
		});
		console.log("ADMIN created");
	}
// start of dummy
	if(Prospero.find().count() === 0){
		console.log("no data found > generating dummy input");
		//pictures
		Prospero.insert({
			visible:"public",
		    type:"Painting",
		    data:{
		      basic:{
		        front:"/1front.jpg",
		        back:"/1back.jpg",
		        side:"/1side.jpg",
		        signature:"/1sig.jpg",
		      	},
		      original:{
		          photoOne:"/original1.jpg",
		          photoTwo:"/original2.jpg",
		          photoThree:"/original3.jpg",
		      },
		      restoration:{
		          photoOne:"/restoration1.jpg",
		          photoTwo:"/restoration2.jpg",
		          photoThree:"/restoration3.jpg",
		      }
		    },
			basic:{
				author:"Miroslav Kraljević",
				title:"The Satyr and the Peasant",
				date:"1910",
			    technique:"oil on canvas",
			  	dimensions_noFrame:"196; 199,9",
				dimensions_frame:"201,5; 207",
				currentOwner:"Academy of fine arts, Zagreb",
				currentLocation:"Council hall, Academy of fine arts, Ilica 85, Zagreb, Croatia",
			    inventoryNumber:"ALU: 191; OKIRU: 298",
			    investigated:"VIS, UVF, XRF",
			},
			materials:{
				original:{
					primingGround:"Chalk, glue, lead white pigment, linseed oil",
					pigmentsDyes:"lead white, vermilion, yellow ochre, burnt umber, red ochre, cobalt blue, black iron oxide, chrome oxide green, bone black",
					bendingMedium:"linseed oil, glue",
					underdrawingPentimento:"Visible, with graphite pen",
					supportStrainer:"canvas",
					support:"linen canvas",
					thickness:"4",
					notes:{
						artHistory:"Miroslava Kraljevića je kopija istoimene slike antwerpenskog slikara Jacoba Jordaensa iz 1620./1621. godine, koja prikazuje scenu iz jedne od Ezopovih priča. Slika je nastala na platnu dimenzija 196 x 199,9 cm i uokvirena je u secesijski okvir s umjetnom pozlatom. Budući da se radi o kopiji koja ikonografski gledano ne odstupa od originala, opis teme Kraljevićeve slike je u potpunosti istovjetan već opisu originala (vidi poglavlja priloženog diplomskog rada Mirne Međeral: 3. SATIR I SELJAK JACOBA JORDAENSA, 3.1. Opis slike i 3.2. Literarni izvor) Važno je napomenuti kako Kraljević nije bio upoznat s temom Jordaensove slike i pričom koja je poslužila kao literarni izvor te, samim time, njegova kopija ne nosi didaktičku poruku kakvu posjeduje original.",
						figureCaption:"Density of threads; Left canvas border; Detail of a preparatory drawing",
					},
				},
				interventions:{
					filler:"Lead white pigment + unknown binder",
					stretcher:"Jednostruki patentni klinasti podokvir, jelovina"
				},
				restoration:{
					executor:"Mirna Međeral",
					responsiblePerson:"Tamara Ukrainčik",
					investor:"Academy of fine arts, Zagreb, Ministry of culture, Croatia",
					duration:"7/2014-9/2015",
					notes:{
						figureCaption:"Painting before conservation/restoration works; painting after conservation/restoration works",
					}
				}
			},
			details:{
				methods:{
					vis:{notes:{
							caption:"Painting before conservation/restoration works; painting after conservation/restoration works; ack view of the painting",
						},
						files:{
							visFiles1:"/vis1.jpg",
							visFiles2:"/vis2.jpg",
						}
					},
					uvf:{
						experimentalParameters:"Black light, Canon EOS 80D, f4, 1/250",
						notes:{
							caption:"UVF photograph of the painting after removing dust and dirt",
						},
						files:{
							uvfFiles1:"/uvf1.jpg",
						}
					},
					xrf:{
						experimentalParameters:"Rh anode, 35 kV, 0,1 mA, acquisition time 100 s, 1,5 mm spot size, 7 mm source-target distance, 11 mm target-detector distance",
						pigmentsDyes:"lead white, vermilion, yellow ochre, burnt umber, red ochre, cobalt blue, black iron oxide, chrome oxide green, bone black",
						priming:"Chalk with lead white",
						files:{
							xrfFiles5:"/XRF-spectre.zip",
						}
					}
				}
			}
		});
		//sculptures
		Prospero.insert({
				visible:"public",
			    type:"Sculpture",
			    data:{
			      basic:{
			        front:"/dummy/sculpture2.jpg",
			      	},
			    },
				basic:{
					author:"Sculpture Author",
					title:"Title",
					date:"10.11.2016",
			},
		});
		//Architectural heritage 
		Prospero.insert({
				visible:"public",
			    type:"Architectural heritage",
			    data:{
			      basic:{
			        front:"/dummy/arch3.jpg",
			      	},
			    },
				basic:{
					author:"Heritage Author",
					title:"Title",
					date:"10.11.2016",
			},
		});
		//Archival object 
		Prospero.insert({
				visible:"public",
			    type:"Archival object",
			    data:{
			      basic:{
			        front:"/dummy/script4.jpeg",
			      	},
			    },
				basic:{
					author:"Archival Author",
					title:"Title",
					date:"10.11.2016",
			},
		});
		//Archaeological object 
		Prospero.insert({
				visible:"public",
			    type:"Archaeological object",
			    data:{
			      basic:{
			        front:"/dummy/object4.jpg",
			      	},
			    },
				basic:{
					author:"Archaeological Author",
					title:"Title",
					date:"10.11.2016",
			},
		});
		//Pigment 
		Prospero.insert({
			visible:"public",
		    type:"Pigment/dye/binder/varnish/reference materials",
		    data:{
		      basic:{
		        front:"/pigment.jpg",
		      	},
		    },
			basic:{
				title:"Azurite",
				appearence:"Blue pigment",
				altName:"mountain blue (English), Azurit (German), azzurite (Italian)",
				manufacturer:"Azurite MP, extra deep coarse, Kremer Pigmente Germany",
				pigmentType:"natural and synthetic",
				chemicalName:"Copper hydroxide carbonate, basic copper(II)- carbonate",
				chemicalFormula:"2CuCO3.Cu(OH)2",
				purity:"pure",
				stateForm:"powder, extra deep coarse",
				grainSize:"100-125 μm",
				periodFrom:"Antiquity",
				periodTo:"1700",
				colorIndex:"PB 30",
				investigated:"XRF, Raman spectrometry",
		        notes:{
		          briefDescription:"Azurite is composed of mineral basic carbonate of copper, found in many parts of the world in the upper oxidized portions of copper ore deposits. Azurite mineral is usually associated in nature with malachite, the green basic carbonate of copper that is far more abundant. Occasional use began with Egyptians, but it was uncommon until the Middle Ages when the manufacture of the ancient synthetic pigment &quot;Egyptian blue&quot; was forgotten. Produced artificially from the 17th century, it was replaced when &quot;Prussian blue&quot; is discovered in the 18th century. Azurite was the most important blue pigment in European painting throughout the middle ages and Renaissance. There are records of its use also in Japan and Ancient Egypt. Replaced when &quot;Prussian blue&quot; is discovered in the 18th century, azurite was the most important blue pigment in European painting throughout the middle ages and Renaissance. It was made artificially from the 17th century.",
		          degradation:"the intensity of the blue is due to the presence of copper and the way it is chemically bound to the hydroxyl (OH) and carbonate (CO 3 ) groups. Azurite has good permanence in oil and tempera media, although it is subjected to two process of degradation into green or into black. Indeed, malachite, another naturally occurring copper mineral, is just a more oxidized form of the mineral azurite. Hence it is the increased 3 oxidation that causes the colour change from blue to green. The formula for the change includes the addition of a water molecule to that of two azurite molecule which releases one of carbon dioxide and leaves three malachite molecules. Oxidation is ongoing hence the slow transformation from blue to green. Azurite suffer also the alteration in a black pigment, the copper oxide, tenorite.",
		          sources:"http://www.webexhibits.org/pigments/indiv/overview/azurite.html",
		      	}
			},
			details:{
				methods:{
					rs:{
						experimentalParameters:"785 nm laser, 45 s acquisition time, excitation/collection geometry: 90°/90°, beam size 7 mm",
						bands:"403vs, 767m, 1098m",
						notes:{
							comments:"Comparison with University College London (UCL) database",
							caption:"Raman spectrum of the azurite in powder form",
						},
						files:{
							rsFiles1:"/rs-pigment.jpg",
							rsFiles5:"/rs-pigment.spc",
						}
					},
					xrf:{
						experimentalParameters:"Rh transmission tube, 35 kV, 0.1 mA, air, tube-target- detector geometry: 90°(8mm)/45°(11mm), 1.5 mm beam size",
						elements:"Cu, Ca, Si",
						influence:"Ca and Cl from paper on which the pigment was placed",
						pigmentsDyes:"lead white, vermilion, yellow ochre, burnt umber, red ochre, cobalt blue, black iron oxide, chrome oxide green, bone black",
						priming:"Chalk with lead white",
						files:{
							xrfFiles1:"/xrf-pigment.jpg",
							xrfFiles5:"/xrf-pigment.rar",
						}
					}
				}
			}
		});
		//Samples 
		Prospero.insert({
				visible:"public",
			    type:"Sample/cross-section",
			    data:{
			      basic:{
			        front:"/dummy/cross1.jpeg",
			      	},
			    },
				basic:{
					author:"Material Author",
					title:"Title",
					date:"10.11.2016",
			},
		});
		//Other 
		Prospero.insert({
				visible:"public",
			    type:"other",
			    data:{
			      basic:{
			        front:"/dummy/other3.jpeg",
			      	},
			    },
				basic:{
					author:"Other Author",
					title:"Title",
					date:"10.11.2016",
				},
		});
	var count = Prospero.find().count();
	console.log("Inserted " + count + " dummy objects");
	}
// end of dummy

});
