Template.mainCategory.helpers({
	allCount: function () {
		return Prospero.find().count();
	},
	paintingsCount: function () {
		return Prospero.find({ type: "Painting", visible: "public" }).count();
	},
	sculpturesCount: function () {
		return Prospero.find({ type: "Sculpture", visible: "public" }).count();
	},
	referenceCount: function () {
		return Prospero.find({ type: "Pigment/dye/binder/varnish/reference materials", visible: "public" }).count();
	},
	samplesCount: function () {
		return Prospero.find({ type: "Sample/cross-section", visible: "public" }).count();
	},
	otherCount: function () {
		const a = Prospero.find({ type: "Architectural heritage", visible: "public" }).count();
		const b = Prospero.find({ type: "Archival object", visible: "public" }).count();
		const c = Prospero.find({ type: "Archaeological object", visible: "public" }).count();
		const d = Prospero.find({ type: "Arts and crafts object", visible: "public" }).count();
		const e = Prospero.find({ type: "other", visible: "public" }).count();

		return a + b + c + d + e;
	},
})
