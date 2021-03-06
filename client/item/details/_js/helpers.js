Template.registerHelper("isEmpty", function (object) {
	return jQuery.isEmpty(object);
});

Template
	.item_details
	.helpers({
		admin: function () {
			var userCurrent = Meteor
				.user()
				.username;
			var userAdmin = Meteor
				.users
				.findOne({username: "admin"})
				.username;
			if (userCurrent == userAdmin) {
				return true;
			} else {
				return false;
			}
		},
		nextItem: function () {
			const currentItem = Prospero.findOne(this._id);
			let type = Session.keys.categorySelected;

			let field = [
				{
					"info.last_edit": {
						"$lt": currentItem.info.last_edit
					}
				}, {
					"visible": "public"
				}
			];
			// for some reason if allitems are displayed, session is saved as "" string
			// i promise to investigate in the future
			// 12.10.2017
			if (type !== "\"\"") {
				type = type
					.substr(1)
					.slice(0, -1);

				if (type === 'Other') {
					type = {
						$regex: /Archival|Archaeological|other|Architectural|Arts/
					};
				}
				field.push({"type": type})
			}

			const nextItem = Prospero
				.find({
					$and: field
				}, {
					sort: {
						"info.last_edit": -1
					},
					limit: 1
				})
				.fetch();

			// check if it returned an empty array
			if (typeof nextItem !== 'undefined' && nextItem.length > 0) {
				return '/gallery/details/' + nextItem[0]._id;
			} else {
				return false;
			}
		},
		prevItem: function () {
			const currentItem = Prospero.findOne(this._id);
			let type = Session.keys.categorySelected;

			let field = [
				{
					"info.last_edit": {
						"$gt": currentItem.info.last_edit
					}
				}, {
					"visible": "public"
				}
			];
			if (type !== "\"\"") {
				type = type
					.substr(1)
					.slice(0, -1);
				if (type === 'Other') {
					type = {
						$regex: /Archival|Archaeological|other|Architectural|Arts/
					};
				}
				field.push({"type": type})
			}

			const prevItem = Prospero.findOne({$and: field});

			// check if it returned an empty object
			if ($.isEmptyObject(prevItem)) {
				return false;
			} else {
				return '/gallery/details/' + prevItem._id;
			}
		},
		pigmentView: function () {
			var object = Prospero
				.findOne(this._id)
				.type;
			var pigment = "Pigment/dye/binder/varnish/reference materials";
			var sample = "Sample/cross-section";
			if (object === pigment || object === sample) {
				return true;
			}
		},
		methodsView: function () {
			var methods = Object.values(Prospero.findOne(this._id).details.methods);
			var methodsPresent = false;
			for (var i = 0; i < methods.length; i++) {
				if (methods[i] !== false) {
					methodsPresent = true;
					break;
				}
			}
			return methodsPresent;
		},
		originalView: function () {
			var original = Object.values(Prospero.findOne(this._id).materials.original);
			var originalPresent = false;

			original.map(val => {
				if (typeof val === 'string') {
					if (val != '') {
						originalPresent = true;
					}
				}
				if (typeof val === 'object') {
					for (var key in val) {
						if (val[key] != '') {
							originalPresent = true;
						}
					}
				}
			})
			return originalPresent;
		},
		laterView: function () {

			var later = Object.values(Prospero.findOne(this._id).materials.interventions);
			var laterPresent = false;

			later.map(val => {
				if (typeof val === 'string') {
					if (val != '') {
						laterPresent = true;
					}
				}
				if (typeof val === 'object') {
					for (var key in val) {
						if (val[key] != '') {
							laterPresent = true;
						}
					}
				}
			})
			return laterPresent;
		},
		conservationView: function () {

			var conservation = Object.values(Prospero.findOne(this._id).materials.restoration);
			var conservationPresent = false;

			conservation.map(val => {
				if (typeof val === 'string') {
					if (val != '') {
						conservationPresent = true;
					}
				}
				if (typeof val === 'object') {
					for (var key in val) {
						if (val[key] != '') {
							conservationPresent = true;
						}
					}
				}
			})
			return conservationPresent;
		}
	})

Template
	.item_details_basic
	.helpers({
		pigmentObject: function () {
			var object = Prospero
				.findOne(this._id)
				.type;
			var pigment = "Pigment/dye/binder/varnish/reference materials";
			if (object === pigment) {
				return true;
			}
		}
	})

Template
	.materials_original
	.helpers({
		density: function () {
			var itemId = this._id;
			var weft = Prospero
				.findOne(this._id)
				.materials
				.original
				.density
				.weft;
			var warp = Prospero
				.findOne(this._id)
				.materials
				.original
				.density
				.warp;
			if (weft || warp) {
				return true;
			}
		},
		thicknessOfThread: function () {
			var itemId = this._id;
			var weft = Prospero
				.findOne(this._id)
				.materials
				.original
				.thicknessOfThread
				.weft;
			var warp = Prospero
				.findOne(this._id)
				.materials
				.original
				.thicknessOfThread
				.warp;
			if (weft || warp) {
				return true;
			}
		},
		decorativeFrame: function () {
			var itemId = this._id;
			var periodStyle = Prospero
				.findOne(this._id)
				.materials
				.original
				.decorativeFrame
				.periodStyle;
			var support = Prospero
				.findOne(this._id)
				.materials
				.original
				.decorativeFrame
				.support;
			var priming = Prospero
				.findOne(this._id)
				.materials
				.original
				.decorativeFrame
				.priming;
			var decorativeLayer = Prospero
				.findOne(this._id)
				.materials
				.original
				.decorativeFrame
				.decorativeLayer;
			var varnish = Prospero
				.findOne(this._id)
				.materials
				.original
				.decorativeFrame
				.varnish;
			if (periodStyle || support || priming || decorativeLayer || varnish) {
				return true;
			}
		},
		plaster: function () {
			var itemId = this._id;
			var layers = Prospero
				.findOne(this._id)
				.materials
				.original
				.plaster
				.layers;
			var composition = Prospero
				.findOne(this._id)
				.materials
				.original
				.plaster
				.composition;
			var binderFiller = Prospero
				.findOne(this._id)
				.materials
				.original
				.plaster
				.binderFiller;
			if (layers || composition || binderFiller) {
				return true;
			}
		}
	})

Template
	.materials_interventions
	.helpers({
		density: function () {
			var itemId = this._id;
			var weft = Prospero
				.findOne(this._id)
				.materials
				.interventions
				.density
				.weft;
			var warp = Prospero
				.findOne(this._id)
				.materials
				.interventions
				.density
				.warp;
			if (weft || warp) {
				return true;
			}
		},
		thicknessOfThread: function () {
			var itemId = this._id;
			var weft = Prospero
				.findOne(this._id)
				.materials
				.interventions
				.thicknessOfThread
				.weft;
			var warp = Prospero
				.findOne(this._id)
				.materials
				.interventions
				.thicknessOfThread
				.warp;
			if (weft || warp) {
				return true;
			}
		},
		decorativeFrame: function () {
			var itemId = this._id;
			var periodStyle = Prospero
				.findOne(this._id)
				.materials
				.interventions
				.decorativeFrame
				.periodStyle;
			var support = Prospero
				.findOne(this._id)
				.materials
				.interventions
				.decorativeFrame
				.support;
			var priming = Prospero
				.findOne(this._id)
				.materials
				.interventions
				.decorativeFrame
				.priming;
			var decorativeLayer = Prospero
				.findOne(this._id)
				.materials
				.interventions
				.decorativeFrame
				.decorativeLayer;
			var varnish = Prospero
				.findOne(this._id)
				.materials
				.interventions
				.decorativeFrame
				.varnish;
			if (periodStyle || support || priming || decorativeLayer || varnish) {
				return true;
			}
		},
		plaster: function () {
			var itemId = this._id;
			var layers = Prospero
				.findOne(this._id)
				.materials
				.interventions
				.plaster
				.layers;
			var composition = Prospero
				.findOne(this._id)
				.materials
				.interventions
				.plaster
				.composition;
			var binderFiller = Prospero
				.findOne(this._id)
				.materials
				.interventions
				.plaster
				.binderFiller;
			if (layers || composition || binderFiller) {
				return true;
			}
		}
	})

Template
	.item_details_download
	.helpers({
		file: function () {

			var i;
			var obj = Prospero.findOne(this._id);
			var data = obj.data;
			var methods = obj.details.methods;
			var idArray = [];

			for (var property in data) {
				if (data.hasOwnProperty(property)) {
					var parent = data[property];

					for (var sub_property in parent) {

						if (parent.hasOwnProperty(sub_property)) {
							var child = parent[sub_property];
							if (child[0] == "/" || !child) {} else {
								// delete data entry

								idArray.push(child);
							}
						}
					}
				}
			}

			for (var property in methods) {
				if (methods.hasOwnProperty(property)) {
					var parent = methods[property];

					for (var sub_property in parent) {

						if (parent.hasOwnProperty(sub_property)) {
							var child = parent[sub_property];

							for (var baby in child) {
								if (child.hasOwnProperty(baby)) {
									var result = child[baby];

									if (result[0] == "/" || result.indexOf(' ') > 0 || !result) {} else {
										//delete data entry
										idArray.push(result);
									}
								}
							}
						}
					}
				}
			}
			if (idArray != false) {
				return Data.find({
					_id: {
						$in: idArray
					}
				});
			} else {
				return false;
			}
		}
	})

Template
	.item_details_download_old
	.helpers({
		basic: function () {
			var itemId = this._id;
			var file1 = Prospero
				.findOne(itemId)
				.data
				.basic
				.front;
			var file2 = Prospero
				.findOne(itemId)
				.data
				.basic
				.back;
			var file3 = Prospero
				.findOne(itemId)
				.data
				.basic
				.side;
			var file4 = Prospero
				.findOne(itemId)
				.data
				.basic
				.signature;
			var file5 = Prospero
				.findOne(itemId)
				.data
				.basic
				.basic_files;
			if (file1 || file2 || file3 || file4 || file5) {
				return true;
			}
		},
		original: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.data
				.original
				.photoOne;
			var pic2 = Prospero
				.findOne(itemId)
				.data
				.original
				.photoTwo;
			var pic3 = Prospero
				.findOne(itemId)
				.data
				.original
				.photoThree;
			var pic4 = Prospero
				.findOne(itemId)
				.data
				.original
				.photoFour;
			var file5 = Prospero
				.findOne(itemId)
				.data
				.original
				.files;
			if (pic1 || pic2 || pic3 || pic4 || file5) {
				return true;
			}
		},
		interventions: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.data
				.interventions
				.photoOne;
			var pic2 = Prospero
				.findOne(itemId)
				.data
				.interventions
				.photoTwo;
			var pic3 = Prospero
				.findOne(itemId)
				.data
				.interventions
				.photoThree;
			var pic4 = Prospero
				.findOne(itemId)
				.data
				.interventions
				.photoFour;
			var file5 = Prospero
				.findOne(itemId)
				.data
				.interventions
				.files;
			if (pic1 || pic2 || pic3 || pic4 || file5) {
				return true;
			}
		},
		restoration: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.data
				.restoration
				.photoOne;
			var pic2 = Prospero
				.findOne(itemId)
				.data
				.restoration
				.photoTwo;
			var pic3 = Prospero
				.findOne(itemId)
				.data
				.restoration
				.photoThree;
			var pic4 = Prospero
				.findOne(itemId)
				.data
				.restoration
				.photoFour;
			var file5 = Prospero
				.findOne(itemId)
				.data
				.restoration
				.files;
			if (pic1 || pic2 || pic3 || pic4 || file5) {
				return true;
			}
		},
		aas: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.aas
				.files
				.aasFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.aas
				.files
				.aasFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.aas
				.files
				.aasFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.aas
				.files
				.aasFiles4;
			var file5 = Prospero
				.findOne(itemId)
				.details
				.methods
				.aas
				.files
				.aasFiles5;
			if (pic1 || pic2 || pic3 || pic4 || file5) {
				return true;
			}
		},
		afm: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.afm
				.files
				.afmFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.afm
				.files
				.afmFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.afm
				.files
				.afmFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.afm
				.files
				.afmFiles4;
			var file5 = Prospero
				.findOne(itemId)
				.details
				.methods
				.afm
				.files
				.afmFiles5;
			if (pic1 || pic2 || pic3 || pic4 || file5) {
				return true;
			}
		},
		analysis: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.analysis
				.files
				.analysisFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.analysis
				.files
				.analysisFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.analysis
				.files
				.analysisFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.analysis
				.files
				.analysisFiles4;
			var file5 = Prospero
				.findOne(itemId)
				.details
				.methods
				.analysis
				.files
				.analysisFiles5;
			if (pic1 || pic2 || pic3 || pic4 || file5) {
				return true;
			}
		},
		binderFiller: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.binderFiller
				.files
				.binderFillerFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.binderFiller
				.files
				.binderFillerFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.binderFiller
				.files
				.binderFillerFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.binderFiller
				.files
				.binderFillerFiles4;
			var file5 = Prospero
				.findOne(itemId)
				.details
				.methods
				.binderFiller
				.files
				.binderFillerFiles5;
			if (pic1 || pic2 || pic3 || pic4 || file5) {
				return true;
			}
		},
		c_14: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.c_14
				.files
				.c_14Files1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.c_14
				.files
				.c_14Files2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.c_14
				.files
				.c_14Files3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.c_14
				.files
				.c_14Files4;
			var file5 = Prospero
				.findOne(itemId)
				.details
				.methods
				.c_14
				.files
				.c_14Files5;
			if (pic1 || pic2 || pic3 || pic4 || file5) {
				return true;
			}
		},
		colorimetry: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.colorimetry
				.files
				.colorimetryFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.colorimetry
				.files
				.colorimetryFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.colorimetry
				.files
				.colorimetryFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.colorimetry
				.files
				.colorimetryFiles4;
			var file5 = Prospero
				.findOne(itemId)
				.details
				.methods
				.colorimetry
				.files
				.colorimetryFiles5;
			if (pic1 || pic2 || pic3 || pic4 || file5) {
				return true;
			}
		},
		drms: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.drms
				.files
				.drmsFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.drms
				.files
				.drmsFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.drms
				.files
				.drmsFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.drms
				.files
				.drmsFiles4;
			var file5 = Prospero
				.findOne(itemId)
				.details
				.methods
				.drms
				.files
				.drmsFiles5;
			if (pic1 || pic2 || pic3 || pic4 || file5) {
				return true;
			}
		},
		fors: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.fors
				.files
				.forsFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.fors
				.files
				.forsFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.fors
				.files
				.forsFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.fors
				.files
				.forsFiles4;
			var file5 = Prospero
				.findOne(itemId)
				.details
				.methods
				.fors
				.files
				.forsFiles5;
			if (pic1 || pic2 || pic3 || pic4 || file5) {
				return true;
			}
		},
		ft_ir: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.ft_ir
				.files
				.ft_irFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.ft_ir
				.files
				.ft_irFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.ft_ir
				.files
				.ft_irFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.ft_ir
				.files
				.ft_irFiles4;
			var file5 = Prospero
				.findOne(itemId)
				.details
				.methods
				.ft_ir
				.files
				.ft_irFiles5;
			if (pic1 || pic2 || pic3 || pic4 || file5) {
				return true;
			}
		},
		gc_ms: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.gc_ms
				.files
				.gc_msFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.gc_ms
				.files
				.gc_msFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.gc_ms
				.files
				.gc_msFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.gc_ms
				.files
				.gc_msFiles4;
			var file5 = Prospero
				.findOne(itemId)
				.details
				.methods
				.gc_ms
				.files
				.gc_msFiles5;
			if (pic1 || pic2 || pic3 || pic4 || file5) {
				return true;
			}
		},
		gl: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.gl
				.files
				.glFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.gl
				.files
				.glFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.gl
				.files
				.glFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.gl
				.files
				.glFiles4;
			var file5 = Prospero
				.findOne(itemId)
				.details
				.methods
				.gl
				.files
				.glFiles5;
			if (pic1 || pic2 || pic3 || pic4 || file5) {
				return true;
			}
		},
		granulometry: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.granulometry
				.files
				.granulometryFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.granulometry
				.files
				.granulometryFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.granulometry
				.files
				.granulometryFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.granulometry
				.files
				.granulometryFiles4;
			var file5 = Prospero
				.findOne(itemId)
				.details
				.methods
				.granulometry
				.files
				.granulometryFiles5;
			if (pic1 || pic2 || pic3 || pic4 || file5) {
				return true;
			}
		},
		hygroscopic: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.hygroscopic
				.files
				.hygroscopicFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.hygroscopic
				.files
				.hygroscopicFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.hygroscopic
				.files
				.hygroscopicFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.hygroscopic
				.files
				.hygroscopicFiles4;
			var file5 = Prospero
				.findOne(itemId)
				.details
				.methods
				.hygroscopic
				.files
				.hygroscopicFiles5;
			if (pic1 || pic2 || pic3 || pic4 || file5) {
				return true;
			}
		},
		irpIrrIrfc: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.irpIrrIrfc
				.files
				.irpIrrIrfcFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.irpIrrIrfc
				.files
				.irpIrrIrfcFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.irpIrrIrfc
				.files
				.irpIrrIrfcFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.irpIrrIrfc
				.files
				.irpIrrIrfcFiles4;
			var file5 = Prospero
				.findOne(itemId)
				.details
				.methods
				.irpIrrIrfc
				.files
				.irpIrrIrfcFiles5;
			if (pic1 || pic2 || pic3 || pic4 || file5) {
				return true;
			}
		},
		libs: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.libs
				.files
				.libsFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.libs
				.files
				.libsFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.libs
				.files
				.libsFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.libs
				.files
				.libsFiles4;
			var file5 = Prospero
				.findOne(itemId)
				.details
				.methods
				.libs
				.files
				.libsFiles5;
			if (pic1 || pic2 || pic3 || pic4 || file5) {
				return true;
			}
		},
		ol: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.ol
				.files
				.olFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.ol
				.files
				.olFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.ol
				.files
				.olFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.ol
				.files
				.olFiles4;
			var file5 = Prospero
				.findOne(itemId)
				.details
				.methods
				.ol
				.files
				.olFiles5;
			if (pic1 || pic2 || pic3 || pic4 || file5) {
				return true;
			}
		},
		om: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.om
				.files
				.omFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.om
				.files
				.omFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.om
				.files
				.omFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.om
				.files
				.omFiles4;
			var file5 = Prospero
				.findOne(itemId)
				.details
				.methods
				.om
				.files
				.omFiles5;
			if (pic1 || pic2 || pic3 || pic4 || file5) {
				return true;
			}
		},
		pige: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.pige
				.files
				.pigeFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.pige
				.files
				.pigeFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.pige
				.files
				.pigeFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.pige
				.files
				.pigeFiles4;
			var file5 = Prospero
				.findOne(itemId)
				.details
				.methods
				.pige
				.files
				.pigeFiles5;
			if (pic1 || pic2 || pic3 || pic4 || file5) {
				return true;
			}
		},
		pixe: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.pixe
				.files
				.pixeFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.pixe
				.files
				.pixeFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.pixe
				.files
				.pixeFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.pixe
				.files
				.pixeFiles4;
			var file5 = Prospero
				.findOne(itemId)
				.details
				.methods
				.pixe
				.files
				.pixeFiles5;
			if (pic1 || pic2 || pic3 || pic4 || file5) {
				return true;
			}
		},
		plm: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.plm
				.files
				.plmFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.plm
				.files
				.plmFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.plm
				.files
				.plmFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.plm
				.files
				.plmFiles4;
			var file5 = Prospero
				.findOne(itemId)
				.details
				.methods
				.plm
				.files
				.plmFiles5;
			if (pic1 || pic2 || pic3 || pic4 || file5) {
				return true;
			}
		},
		rbs: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.rbs
				.files
				.rbsFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.rbs
				.files
				.rbsFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.rbs
				.files
				.rbsFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.rbs
				.files
				.rbsFiles4;
			var file5 = Prospero
				.findOne(itemId)
				.details
				.methods
				.rbs
				.files
				.rbsFiles5;
			if (pic1 || pic2 || pic3 || pic4 || file5) {
				return true;
			}
		},
		rs: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.rs
				.files
				.rsFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.rs
				.files
				.rsFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.rs
				.files
				.rsFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.rs
				.files
				.rsFiles4;
			var file5 = Prospero
				.findOne(itemId)
				.details
				.methods
				.rs
				.files
				.rsFiles5;
			if (pic1 || pic2 || pic3 || pic4 || file5) {
				return true;
			}
		},
		scanning: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.scanning
				.files
				.scanningFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.scanning
				.files
				.scanningFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.scanning
				.files
				.scanningFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.scanning
				.files
				.scanningFiles4;
			var file5 = Prospero
				.findOne(itemId)
				.details
				.methods
				.scanning
				.files
				.scanningFiles5;
			if (pic1 || pic2 || pic3 || pic4 || file5) {
				return true;
			}
		},
		semSemEdx: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.semSemEdx
				.files
				.semSemEdxFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.semSemEdx
				.files
				.semSemEdxFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.semSemEdx
				.files
				.semSemEdxFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.semSemEdx
				.files
				.semSemEdxFiles4;
			var file5 = Prospero
				.findOne(itemId)
				.details
				.methods
				.semSemEdx
				.files
				.semSemEdxFiles5;
			if (pic1 || pic2 || pic3 || pic4 || file5) {
				return true;
			}
		},
		synchrotron: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.synchrotron
				.files
				.synchrotronFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.synchrotron
				.files
				.synchrotronFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.synchrotron
				.files
				.synchrotronFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.synchrotron
				.files
				.synchrotronFiles4;
			var file5 = Prospero
				.findOne(itemId)
				.details
				.methods
				.synchrotron
				.files
				.synchrotronFiles5;
			if (pic1 || pic2 || pic3 || pic4 || file5) {
				return true;
			}
		},
		tem: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.tem
				.files
				.temFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.tem
				.files
				.temFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.tem
				.files
				.temFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.tem
				.files
				.temFiles4;
			var file5 = Prospero
				.findOne(itemId)
				.details
				.methods
				.tem
				.files
				.temFiles5;
			if (pic1 || pic2 || pic3 || pic4 || file5) {
				return true;
			}
		},
		tl: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.tl
				.files
				.tlFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.tl
				.files
				.tlFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.tl
				.files
				.tlFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.tl
				.files
				.tlFiles4;
			var file5 = Prospero
				.findOne(itemId)
				.details
				.methods
				.tl
				.files
				.tlFiles5;
			if (pic1 || pic2 || pic3 || pic4 || file5) {
				return true;
			}
		},
		tlc: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.tlc
				.files
				.tlcFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.tlc
				.files
				.tlcFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.tlc
				.files
				.tlcFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.tlc
				.files
				.tlcFiles4;
			var file5 = Prospero
				.findOne(itemId)
				.details
				.methods
				.tlc
				.files
				.tlcFiles5;
			if (pic1 || pic2 || pic3 || pic4 || file5) {
				return true;
			}
		},
		uv_vis: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.uv_vis
				.files
				.uv_visFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.uv_vis
				.files
				.uv_visFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.uv_vis
				.files
				.uv_visFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.uv_vis
				.files
				.uv_visFiles4;
			var file5 = Prospero
				.findOne(itemId)
				.details
				.methods
				.uv_vis
				.files
				.uv_visFiles5;
			if (pic1 || pic2 || pic3 || pic4 || file5) {
				return true;
			}
		},
		uvf: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.uvf
				.files
				.uvfFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.uvf
				.files
				.uvfFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.uvf
				.files
				.uvfFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.uvf
				.files
				.uvfFiles4;
			var file5 = Prospero
				.findOne(itemId)
				.details
				.methods
				.uvf
				.files
				.uvfFiles5;
			if (pic1 || pic2 || pic3 || pic4 || file5) {
				return true;
			}
		},
		vis: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.vis
				.files
				.visFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.vis
				.files
				.visFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.vis
				.files
				.visFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.vis
				.files
				.visFiles4;
			var file5 = Prospero
				.findOne(itemId)
				.details
				.methods
				.vis
				.files
				.visFiles5;
			if (pic1 || pic2 || pic3 || pic4 || file5) {
				return true;
			}
		},
		xrd: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.xrd
				.files
				.xrdFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.xrd
				.files
				.xrdFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.xrd
				.files
				.xrdFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.xrd
				.files
				.xrdFiles4;
			var file5 = Prospero
				.findOne(itemId)
				.details
				.methods
				.xrd
				.files
				.xrdFiles5;
			if (pic1 || pic2 || pic3 || pic4 || file5) {
				return true;
			}
		},
		xrf: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.xrf
				.files
				.xrfFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.xrf
				.files
				.xrfFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.xrf
				.files
				.xrfFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.xrf
				.files
				.xrfFiles4;
			var file5 = Prospero
				.findOne(itemId)
				.details
				.methods
				.xrf
				.files
				.xrfFiles5;
			if (pic1 || pic2 || pic3 || pic4 || file5) {
				return true;
			}
		},
		xrr: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.xrr
				.files
				.xrrFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.xrr
				.files
				.xrrFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.xrr
				.files
				.xrrFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.xrr
				.files
				.xrrFiles4;
			var file5 = Prospero
				.findOne(itemId)
				.details
				.methods
				.xrr
				.files
				.xrrFiles5;
			if (pic1 || pic2 || pic3 || pic4 || file5) {
				return true;
			}
		}
	})
//////////
//
// rest of verification
//
/////////
Template
	.materials_original
	.helpers({
		originalObj: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.data
				.original
				.photoOne;
			var pic2 = Prospero
				.findOne(itemId)
				.data
				.original
				.photoTwo;
			var pic3 = Prospero
				.findOne(itemId)
				.data
				.original
				.photoThree;
			var pic4 = Prospero
				.findOne(itemId)
				.data
				.original
				.photoFour;
			if (pic1 || pic2 || pic3 || pic4) {
				return true;
			}
		}
	})
Template
	.materials_interventions
	.helpers({
		originalObj: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.data
				.interventions
				.photoOne;
			var pic2 = Prospero
				.findOne(itemId)
				.data
				.interventions
				.photoTwo;
			var pic3 = Prospero
				.findOne(itemId)
				.data
				.interventions
				.photoThree;
			var pic4 = Prospero
				.findOne(itemId)
				.data
				.interventions
				.photoFour;
			if (pic1 || pic2 || pic3 || pic4) {
				return true;
			}
		}
	})
Template
	.materials_restoration
	.helpers({
		originalObj: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.data
				.restoration
				.photoOne;
			var pic2 = Prospero
				.findOne(itemId)
				.data
				.restoration
				.photoTwo;
			var pic3 = Prospero
				.findOne(itemId)
				.data
				.restoration
				.photoThree;
			var pic4 = Prospero
				.findOne(itemId)
				.data
				.restoration
				.photoFour;
			if (pic1 || pic2 || pic3 || pic4) {
				return true;
			}
		}
	})
Template
	.method_techniques_view_aas
	.helpers({
		originalObj: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.aas
				.files
				.aasFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.aas
				.files
				.aasFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.aas
				.files
				.aasFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.aas
				.files
				.aasFiles4;
			if (pic1 || pic2 || pic3 || pic4) {
				return true;
			}
		}
	})
Template
	.method_techniques_view_aes
	.helpers({
		originalObj: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.aes
				.files
				.aesFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.aes
				.files
				.aesFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.aes
				.files
				.aesFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.aes
				.files
				.aesFiles4;
			if (pic1 || pic2 || pic3 || pic4) {
				return true;
			}
		}
	})
Template
	.method_techniques_view_afm
	.helpers({
		originalObj: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.afm
				.files
				.afmFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.afm
				.files
				.afmFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.afm
				.files
				.afmFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.afm
				.files
				.afmFiles4;
			if (pic1 || pic2 || pic3 || pic4) {
				return true;
			}
		}
	})
Template
	.method_techniques_view_analysis
	.helpers({
		originalObj: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.analysis
				.files
				.analysisFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.analysis
				.files
				.analysisFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.analysis
				.files
				.analysisFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.analysis
				.files
				.analysisFiles4;
			if (pic1 || pic2 || pic3 || pic4) {
				return true;
			}
		}
	})
Template
	.method_techniques_view_binderFiller
	.helpers({
		originalObj: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.analysis
				.files
				.analysisFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.analysis
				.files
				.analysisFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.analysis
				.files
				.analysisFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.analysis
				.files
				.analysisFiles4;
			if (pic1 || pic2 || pic3 || pic4) {
				return true;
			}
		}
	})
Template
	.method_techniques_view_c_14
	.helpers({
		originalObj: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.c_14
				.files
				.c_14Files1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.c_14
				.files
				.c_14Files2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.c_14
				.files
				.c_14Files3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.c_14
				.files
				.c_14Files4;
			if (pic1 || pic2 || pic3 || pic4) {
				return true;
			}
		}
	})
Template
	.method_techniques_view_colorimetry
	.helpers({
		originalObj: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.colorimetry
				.files
				.colorimetryFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.colorimetry
				.files
				.colorimetryFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.colorimetry
				.files
				.colorimetryFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.colorimetry
				.files
				.colorimetryFiles4;
			if (pic1 || pic2 || pic3 || pic4) {
				return true;
			}
		}
	})
Template
	.method_techniques_view_drms
	.helpers({
		originalObj: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.drms
				.files
				.drmsFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.drms
				.files
				.drmsFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.drms
				.files
				.drmsFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.drms
				.files
				.drmsFiles4;
			if (pic1 || pic2 || pic3 || pic4) {
				return true;
			}
		}
	})
Template
	.method_techniques_view_fors
	.helpers({
		originalObj: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.fors
				.files
				.forsFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.fors
				.files
				.forsFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.fors
				.files
				.forsFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.fors
				.files
				.forsFiles4;
			if (pic1 || pic2 || pic3 || pic4) {
				return true;
			}
		}
	})
Template
	.method_techniques_view_ft_ir
	.helpers({
		originalObj: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.ft_ir
				.files
				.ft_irFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.ft_ir
				.files
				.ft_irFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.ft_ir
				.files
				.ft_irFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.ft_ir
				.files
				.ft_irFiles4;
			if (pic1 || pic2 || pic3 || pic4) {
				return true;
			}
		}
	})
Template
	.method_techniques_view_gc_ms
	.helpers({
		originalObj: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.gc_ms
				.files
				.gc_msFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.gc_ms
				.files
				.gc_msFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.gc_ms
				.files
				.gc_msFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.gc_ms
				.files
				.gc_msFiles4;
			if (pic1 || pic2 || pic3 || pic4) {
				return true;
			}
		}
	})
Template
	.method_techniques_view_gl
	.helpers({
		originalObj: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.gl
				.files
				.glFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.gl
				.files
				.glFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.gl
				.files
				.glFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.gl
				.files
				.glFiles4;
			if (pic1 || pic2 || pic3 || pic4) {
				return true;
			}
		}
	})
Template
	.method_techniques_view_granulometry
	.helpers({
		originalObj: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.granulometry
				.files
				.granulometryFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.granulometry
				.files
				.granulometryFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.granulometry
				.files
				.granulometryFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.granulometry
				.files
				.granulometryFiles4;
			if (pic1 || pic2 || pic3 || pic4) {
				return true;
			}
		}
	})
Template
	.method_techniques_view_hygroscopic
	.helpers({
		originalObj: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.hygroscopic
				.files
				.hygroscopicFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.hygroscopic
				.files
				.hygroscopicFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.hygroscopic
				.files
				.hygroscopicFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.hygroscopic
				.files
				.hygroscopicFiles4;
			if (pic1 || pic2 || pic3 || pic4) {
				return true;
			}
		}
	})
Template
	.method_techniques_view_irpIrrIrfc
	.helpers({
		originalObj: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.irpIrrIrfc
				.files
				.irpIrrIrfcFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.irpIrrIrfc
				.files
				.irpIrrIrfcFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.irpIrrIrfc
				.files
				.irpIrrIrfcFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.irpIrrIrfc
				.files
				.irpIrrIrfcFiles4;
			if (pic1 || pic2 || pic3 || pic4) {
				return true;
			}
		}
	})
Template
	.method_techniques_view_libs
	.helpers({
		originalObj: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.libs
				.files
				.libsFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.libs
				.files
				.libsFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.libs
				.files
				.libsFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.libs
				.files
				.libsFiles4;
			if (pic1 || pic2 || pic3 || pic4) {
				return true;
			}
		}
	})
Template
	.method_techniques_view_ol
	.helpers({
		originalObj: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.ol
				.files
				.olFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.ol
				.files
				.olFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.ol
				.files
				.olFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.ol
				.files
				.olFiles4;
			if (pic1 || pic2 || pic3 || pic4) {
				return true;
			}
		}
	})
Template
	.method_techniques_view_om
	.helpers({
		originalObj: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.om
				.files
				.omFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.om
				.files
				.omFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.om
				.files
				.omFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.om
				.files
				.omFiles4;
			if (pic1 || pic2 || pic3 || pic4) {
				return true;
			}
		}
	})
Template
	.method_techniques_view_pige
	.helpers({
		originalObj: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.pige
				.files
				.pigeFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.pige
				.files
				.pigeFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.pige
				.files
				.pigeFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.pige
				.files
				.pigeFiles4;
			if (pic1 || pic2 || pic3 || pic4) {
				return true;
			}
		}
	})
Template
	.method_techniques_view_pixe
	.helpers({
		originalObj: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.pixe
				.files
				.pixeFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.pixe
				.files
				.pixeFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.pixe
				.files
				.pixeFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.pixe
				.files
				.pixeFiles4;
			if (pic1 || pic2 || pic3 || pic4) {
				return true;
			}
		}
	})
Template
	.method_techniques_view_plm
	.helpers({
		originalObj: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.plm
				.files
				.plmFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.plm
				.files
				.plmFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.plm
				.files
				.plmFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.plm
				.files
				.plmFiles4;
			if (pic1 || pic2 || pic3 || pic4) {
				return true;
			}
		}
	})
Template
	.method_techniques_view_rbs
	.helpers({
		originalObj: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.rbs
				.files
				.rbsFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.rbs
				.files
				.rbsFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.rbs
				.files
				.rbsFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.rbs
				.files
				.rbsFiles4;
			if (pic1 || pic2 || pic3 || pic4) {
				return true;
			}
		}
	})
Template
	.method_techniques_view_rs
	.helpers({
		originalObj: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.rs
				.files
				.rsFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.rs
				.files
				.rsFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.rs
				.files
				.rsFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.rs
				.files
				.rsFiles4;
			if (pic1 || pic2 || pic3 || pic4) {
				return true;
			}
		}
	})
Template
	.method_techniques_view_scanning
	.helpers({
		originalObj: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.scanning
				.files
				.scanningFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.scanning
				.files
				.scanningFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.scanning
				.files
				.scanningFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.scanning
				.files
				.scanningFiles4;
			if (pic1 || pic2 || pic3 || pic4) {
				return true;
			}
		}
	})
Template
	.method_techniques_view_semSemEdx
	.helpers({
		originalObj: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.semSemEdx
				.files
				.semSemEdxFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.semSemEdx
				.files
				.semSemEdxFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.semSemEdx
				.files
				.semSemEdxFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.semSemEdx
				.files
				.semSemEdxFiles4;
			if (pic1 || pic2 || pic3 || pic4) {
				return true;
			}
		}
	})
Template
	.method_techniques_view_synchrotron
	.helpers({
		originalObj: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.synchrotron
				.files
				.synchrotronFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.synchrotron
				.files
				.synchrotronFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.synchrotron
				.files
				.synchrotronFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.synchrotron
				.files
				.synchrotronFiles4;
			if (pic1 || pic2 || pic3 || pic4) {
				return true;
			}
		}
	})
Template
	.method_techniques_view_tem
	.helpers({
		originalObj: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.tem
				.files
				.temFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.tem
				.files
				.temFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.tem
				.files
				.temFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.tem
				.files
				.temFiles4;
			if (pic1 || pic2 || pic3 || pic4) {
				return true;
			}
		}
	})
Template
	.method_techniques_view_tl
	.helpers({
		originalObj: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.tl
				.files
				.tlFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.tl
				.files
				.tlFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.tl
				.files
				.tlFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.tl
				.files
				.tlFiles4;
			if (pic1 || pic2 || pic3 || pic4) {
				return true;
			}
		}
	})
Template
	.method_techniques_view_tlc
	.helpers({
		originalObj: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.tlc
				.files
				.tlcFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.tlc
				.files
				.tlcFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.tlc
				.files
				.tlcFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.tlc
				.files
				.tlcFiles4;
			if (pic1 || pic2 || pic3 || pic4) {
				return true;
			}
		}
	})
Template
	.method_techniques_view_uv_vis
	.helpers({
		originalObj: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.uv_vis
				.files
				.uv_visFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.uv_vis
				.files
				.uv_visFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.uv_vis
				.files
				.uv_visFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.uv_vis
				.files
				.uv_visFiles4;
			if (pic1 || pic2 || pic3 || pic4) {
				return true;
			}
		}
	})
Template
	.method_techniques_view_uvf
	.helpers({
		originalObj: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.uvf
				.files
				.uvfFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.uvf
				.files
				.uvfFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.uvf
				.files
				.uvfFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.uvf
				.files
				.uvfFiles4;
			if (pic1 || pic2 || pic3 || pic4) {
				return true;
			}
		}
	})
Template
	.method_techniques_view_vis
	.helpers({
		originalObj: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.vis
				.files
				.visFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.vis
				.files
				.visFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.vis
				.files
				.visFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.vis
				.files
				.visFiles4;
			if (pic1 || pic2 || pic3 || pic4) {
				return true;
			}
		}
	})
Template
	.method_techniques_view_uvf
	.helpers({
		originalObj: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.uvf
				.files
				.uvfFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.uvf
				.files
				.uvfFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.uvf
				.files
				.uvfFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.uvf
				.files
				.uvfFiles4;
			if (pic1 || pic2 || pic3 || pic4) {
				return true;
			}
		}
	})
Template
	.method_techniques_view_vis
	.helpers({
		originalObj: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.vis
				.files
				.visFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.vis
				.files
				.visFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.vis
				.files
				.visFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.vis
				.files
				.visFiles4;
			if (pic1 || pic2 || pic3 || pic4) {
				return true;
			}
		}
	})
Template
	.method_techniques_view_xrd
	.helpers({
		originalObj: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.xrd
				.files
				.xrdFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.xrd
				.files
				.xrdFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.xrd
				.files
				.xrdFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.xrd
				.files
				.xrdFiles4;
			if (pic1 || pic2 || pic3 || pic4) {
				return true;
			}
		}
	})
Template
	.method_techniques_view_xrf
	.helpers({
		originalObj: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.xrf
				.files
				.xrfFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.xrf
				.files
				.xrfFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.xrf
				.files
				.xrfFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.xrf
				.files
				.xrfFiles4;
			if (pic1 || pic2 || pic3 || pic4) {
				return true;
			}
		}
	})
Template
	.method_techniques_view_xrr
	.helpers({
		originalObj: function () {
			var itemId = this._id;
			var pic1 = Prospero
				.findOne(itemId)
				.details
				.methods
				.xrr
				.files
				.xrrFiles1;
			var pic2 = Prospero
				.findOne(itemId)
				.details
				.methods
				.xrr
				.files
				.xrrFiles2;
			var pic3 = Prospero
				.findOne(itemId)
				.details
				.methods
				.xrr
				.files
				.xrrFiles3;
			var pic4 = Prospero
				.findOne(itemId)
				.details
				.methods
				.xrr
				.files
				.xrrFiles4;
			if (pic1 || pic2 || pic3 || pic4) {
				return true;
			}
		}
	})
