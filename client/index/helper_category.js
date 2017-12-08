Template.mainCategory.helpers({
	allCount: function () {
		return Prospero.find().count();
	},
	paintingsCount: function () {
		return Prospero.find({ type: "Painting" }).count();
	},
	sculpturesCount: function () {
		return Prospero.find({ type: "Sculpture" }).count();
	},
	referenceCount: function () {
		return Prospero.find({ type: "Pigment/dye/binder/varnish/reference materials" }).count();
	},
	samplesCount: function () {
		return Prospero.find({ type: "Sample/cross-section" }).count();
	},
	otherCount: function () {
		const a = Prospero.find({ type: "Architectural heritage" }).count();
		const b = Prospero.find({ type: "Archival object" }).count();
		const c = Prospero.find({ type: "Archaeological object" }).count();
		const d = Prospero.find({ type: "Arts and crafts object" }).count();
		const e = Prospero.find({ type: "other" }).count();

		return a + b + c + d + e;
	},
})
