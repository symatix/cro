Template.advanced_search.events({
	'click .btn-setSession': function (event) {
		var itemId = this._id;
		var type = Prospero.findOne(itemId).type;
		delete Session.keys.showPainting;
		delete Session.keys.showSculpture;
		delete Session.keys.showOther;
		delete Session.keys.showPigment;

		Session.set("showPainting", false);
		Session.set("showSculpture", false);
		Session.set("showOther", false);
		Session.set("showPigment", false);


		Session.set("itemId", itemId);

		if (type === "Painting") {
			Session.set("showPainting", true);
		}
		if (type === "Sculpture") {
			Session.set("showSculpture", true);
		}
		if (type === "Pigment/dye/binder/varnish/reference materials") {
			Session.set("showPigment", true);
		}
		if (type !== "Painting" && type !== "Sculpture" && type !== "Pigment/dye/binder/varnish/reference materials") {
			Session.set("showOther", true);
		}
	},
	'click .btn_toggleBasic': function (event) {
		event.preventDefault();
		$('.toggleBasic').slideToggle('slow').toggleClass('active');

		if ($('.toggleBasic').hasClass('active')) {
			$('.btn_toggleBasic').text('Expand');
		} else {
			$('.btn_toggleBasic').text('Colapse');
		}
	},
	'change .date-range': function (e) {
		var range = $(e.target).val();
		if (range === "range") {
			Session.set("range", true);
		} else {
			Session.set("range", false);
		}
	},
	'change .sorting-category': function (e) {
		if (e.target.value === "Pigment/dye/binder/varnish/reference materials") {
			$("#colorFamilySelect").removeClass("hidden");
		} else {
			if (!$("#colorFamilySelect").hasClass("hidden")) {
				$("#colorFamilySelect").addClass("hidden");
			}
		}
		SearchIndex.getComponentMethods()
			.addProps('sortBy', $(e.target).val())
	},
	'change .sorting-filter': function (e) {
		SearchIndex.getComponentMethods()
			.addProps('relevance', $(e.target).val())
	},
	'click .search-query': function (event) {
		event.preventDefault();

		SearchIndex.getComponentMethods().addProps('title', $(".search-title").val());
		SearchIndex.getComponentMethods().addProps('author', $(".search-author").val());
		SearchIndex.getComponentMethods().addProps('colorFamily', $("#colorFamily").val());
		SearchIndex.getComponentMethods().addProps('type', $(".search-type").val());
		SearchIndex.getComponentMethods().addProps('technique', $(".search-technique").val());
		SearchIndex.getComponentMethods().addProps('investigated', $(".search-investigated").val());
		SearchIndex.getComponentMethods().addProps('currentOwner', $(".search-currentOwner").val());
		SearchIndex.getComponentMethods().addProps('currentLocation', $(".search-currentLocation").val());
		SearchIndex.getComponentMethods().addProps('inventoryNumber', $(".search-inventoryNumber").val());
		SearchIndex.getComponentMethods().addProps('date', $(".search-date").val());
		SearchIndex.getComponentMethods().addProps('range', $(".date-range").val());
		SearchIndex.getComponentMethods().addProps('dateSecond', $(".search-date-range").val());
		SearchIndex.getComponentMethods().addProps('tags', $(".search-tags").val());
		SearchIndex.getComponentMethods().addProps('name', $(".search-name").val());
		SearchIndex.getComponentMethods().addProps('appearence', $(".search-appearence").val());
		SearchIndex.getComponentMethods().addProps('altName', $(".search-altName").val());
		SearchIndex.getComponentMethods().addProps('chemicalName', $(".search-chemicalName").val());
		SearchIndex.getComponentMethods().addProps('chemicalFormula', $(".search-chemicalFormula").val());
		SearchIndex.getComponentMethods().addProps('pigmentsDyes', $(".search-pigmentsDyes").val());
		SearchIndex.getComponentMethods().addProps('bindingMedium', $(".search-bindingMedium").val());
		SearchIndex.getComponentMethods().addProps('materials', $(".search-materials").val());

		SearchIndex.getComponentMethods().addProps('methodsFirst', $("#methods-select-first").val());
		SearchIndex.getComponentMethods().addProps('methodsSecond', $("#methods-select-second").val());
		SearchIndex.getComponentMethods().addProps('methodsThird', $("#methods-select-third").val());

		//reset input values for next search
		$('input').removeAttr('value');
	},
})
