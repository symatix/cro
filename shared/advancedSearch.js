import { Index, MongoDBEngine } from 'meteor/easy:search'

SearchIndex = new EasySearch.Index({
	collection: Prospero,
	name: 'searchGallery',
	fields: ['basic', 'materials', 'details.methods'],
	engine: new MongoDBEngine({

		selectorPerField: function (field, searchString, options) {
			const basicSelector = { "isDeleted": "available", "visible": "public" };
			const basicFields = { author: 1, title: 1, tags: 0 };
			var methodsArr = ["aas", "aes", "afm", "analysis", "afm", "binderFiller", "c_14", "colorimetry", "drms", "fors", "ft_ir", "gc_ms", "gl", "granulometry", "hygroscopic", "irpIrrIrfc", "libs", "ol", "om", "pige", "pixe", "plm", "rbs", "rs", "scanning", "semSemEdx", "synchrotron", "tem", "tl", "tlc", "uv_vis", "uvf", "vis", "xrd", "xrf", "xxr"];
			var i;

			//selector
			const sortBy = options.search.props.sortBy;
			// basic
			const author = options.search.props.author;
			const title = options.search.props.title;
			const type = options.search.props.type;
			const technique = options.search.props.technique;
			const date = parseInt(options.search.props.date, 10);
			const dateSecond = parseInt(options.search.props.dateSecond, 10);
			const range = options.search.props.range;
			const currentOwner = options.search.props.currentOwner;
			const currentLocation = options.search.props.currentLocation;
			const inventoryNumber = options.search.props.inventoryNumber;
			const investigated = options.search.props.investigated;
			const name = options.search.props.name;
			const appearence = options.search.props.appearence;
			const altName = options.search.props.altName;
			const chemicalName = options.search.props.chemicalName;
			const chemicalFormula = options.search.props.chemicalFormula;
			const tags = options.search.props.tags;
			const colorFamily = options.search.props.colorFamily;

			// materials
			const pigmentsDyes = options.search.props.pigmentsDyes;
			const bindingMedium = options.search.props.bindingMedium;
			const materials = options.search.props.materials;

			// methods
			const methodsFirst = options.search.props.methodsFirst;
			const methodsSecond = options.search.props.methodsSecond;
			const methodsThird = options.search.props.methodsThird;
			/*
			const elementsDetermined = options.search.props.elementsDetermined;
			const formulaeDetermined = options.search.props.formulaeDetermined;
			const pigmentsIdentified = options.search.props.pigmentsIdentified;
			const interpretation = options.search.props.interpretation;
			*/


			if (sortBy) {
				basicSelector['type'] = options.search.props.sortBy;
			}


			if (author) {
				basicSelector['basic.author'] = { "$regex": ".*" + author + ".*", "$options": "i" };
			}
			if (title) {
				basicSelector['basic.title'] = { "$regex": ".*" + title + ".*", "$options": "i" };
			}
			if (type) {
				basicSelector['type'] = { "$regex": ".*" + type + ".*", "$options": "i" };
				//basicFields['type'] = 1;
			}
			if (date) {
				//var dateNumber = parseInt(date,10);
				basicSelector['basic.date'] = date;

				if (range === "exact") {
					basicSelector['basic.date'] = date;
				}
				if (range === "older") {
					basicSelector['basic.date'] = { $lte: date };
				}
				if (range === "newer") {
					basicSelector['basic.date'] = { $gte: date };
				}
				if (range === "range") {
					//var dateNumberSecond = parseInt(dateSecond,10);
					basicSelector['basic.date'] = { $gte: date, $lte: dateSecond };
				}
			}
			if (technique) {
				basicSelector['basic.technique'] = { "$regex": ".*" + technique + ".*", "$options": "i" };
				//basicFields['technique'] = 1;
			}
			if (currentOwner) {
				basicSelector['basic.currentOwner'] = { "$regex": ".*" + currentOwner + ".*", "$options": "i" };
				basicFields['currentOwner'] = 1;
			}
			if (currentLocation) {
				basicSelector['basic.currentLocation'] = { "$regex": ".*" + currentLocation + ".*", "$options": "i" };
				//basicFields['currentLocation'] = 1;
			}
			if (inventoryNumber) {
				basicSelector['basic.inventoryNumber'] = { "$regex": ".*" + inventoryNumber + ".*", "$options": "i" };
				basicFields['inventoryNumber'] = 1;
			}
			if (investigated) {
				basicSelector['basic.investigated'] = { "$regex": ".*" + investigated + ".*", "$options": "i" };
				//basicFields['investigated'] = 1;
			}
			if (name) {
				basicSelector['basic.name'] = { "$regex": ".*" + name + ".*", "$options": "i" };
				//basicFields['name'] = 1;
			}
			if (appearence) {
				basicSelector['basic.appearence'] = { "$regex": ".*" + appearence + ".*", "$options": "i" };
				//basicFields['appearence'] = 1;
			}
			if (altName) {
				basicSelector['basic.altName'] = { "$regex": ".*" + altName + ".*", "$options": "i" };
				//basicFields['altName'] = 1;
			}
			if (chemicalName) {
				basicSelector['basic.chemicalName'] = { "$regex": ".*" + chemicalName + ".*", "$options": "i" };
				//basicFields['chemicalName'] = 1;
			}
			if (chemicalFormula) {
				basicSelector['basic.chemicalFormula'] = { "$regex": ".*" + chemicalFormula + ".*", "$options": "i" };
				//basicFields['chemicalFormula'] = 1;
			}
			if (tags) {
				basicSelector['basic.tags'] = { "$regex": ".*" + tags + ".*", "$options": "i" };
				basicFields['tags'] = 0;
			}
			if (colorFamily) {
				basicSelector['basic.colorFamily'] = { "$regex": ".*" + colorFamily + ".*", "$options": "i" };
			}

			if (pigmentsDyes) {
				basicSelector['materials.original.pigmentsDyes'] = { "$regex": ".*" + pigmentsDyes + ".*", "$options": "i" };
			}
			if (bindingMedium) {
				basicSelector['materials.original.bindingMedium'] = { "$regex": ".*" + bindingMedium + ".*", "$options": "i" };
			}
			if (materials) {
				basicSelector['materials.original.materials'] = { "$regex": ".*" + materials + ".*", "$options": "i" };
			}


			if (methodsFirst) {
				basicSelector['details.methods.' + methodsFirst] = { $ne: false };
			}
			if (methodsSecond) {
				basicSelector['details.methods.' + methodsSecond] = { $ne: false };
			}
			if (methodsThird) {
				basicSelector['details.methods.' + methodsThird] = { $ne: false };
			}

			//console.log("#**************** Query Issued *******************#");
			//console.log(basicSelector);

			return basicSelector;
		},
		sort: function (searchObject, options) {
			const relevance = options.search.props.relevance

			// return a mongo sort specifier
			if ('title_a' === relevance) {
				return {
					"basic.title": 1
				}
			} else if ('title_z' === relevance) {
				return {
					"basic.title": -1
				}
			} else if ('author_a' === relevance) {
				return {
					"basic.author": 1
				}
			} else if ('author_z' === relevance) {
				return {
					"basic.author": -1
				}
			} else if ('date_older' === relevance) {
				return {
					"basic.date": 1
				}
			} else if ('date_newer' === relevance) {
				return {
					"basic.date": -1
				}
			} else {
				return {
					"basic.title": -1
				}
			}
		},

	}),
})



// WORKING
/*
    selectorPerField: function (field, searchString) {
      if ('basic' === field) {
        // return this selector if the email field is being searched
          var fieldSelector = {"basic.title":{"$regex" : ".*" + searchString + ".*", "$options" : "i"}};


          return  fieldSelector;
        }
      return this.defaultConfiguration().selectorPerField(field, searchString);
    },
*/
