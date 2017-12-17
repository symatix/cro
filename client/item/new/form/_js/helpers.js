Template.form.helpers({
	results: function () {
		var painting = Session.get("showPainting");
		var sculpture = Session.get("showSculpture");
		var sample = Session.get("showSample");
		var other = Session.get("showOther");
		var pigment = Session.get("showPigment");
		var result = "[dev notes - formType check] - painting: " + painting + " / sculpture: " + sculpture + " / sample: " + sample + " / other: " + other + " / pigment: " + pigment;
		return result
	},
	notIntruder: function () {
		var sample = Session.get("showSample");
		var pigment = Session.get("showPigment");
		if (sample || pigment) {
			return false;
		} else {
			return true;
		}
	},
	painting: function () {
		if (Session.get("showPainting")) {
			return true;
		}
	},
	sculpture: function () {
		if (Session.get("showSculpture")) {
			return true;
		}
	},
	other: function () {
		if (Session.get("showOther")) {
			return true;
		}
	},
	sample: function () {
		if (Session.get("showSample")) {
			return true;
		}
	},
	exclusive: function () {
		var painting = Session.get("showPainting");
		var sculpture = Session.get("showSculpture");
		var sample = Session.get("showSample");
		var other = Session.get("showOther");
		if (painting || sculpture || other) {
			return true;
		}
	},
	pigment: function () {
		if (Session.get("showPigment")) {
			return true;
		}
	}
})

Template.basic_pigment.helpers({
	natural: function () {
		if (this._id) {
			var type = Prospero.findOne(this._id).basic.pigmentType;
			if (type === "natural") {
				return "selected";
			}
		}
	},
	synthetic: function () {
		if (this._id) {
			var type = Prospero.findOne(this._id).basic.pigmentType;
			if (type === "synthetic") {
				return "selected";
			}
		}
	},
	naturalSyntetic: function () {
		if (this._id) {
			var type = Prospero.findOne(this._id).basic.pigmentType;
			if (type === "naturalSyntetic") {
				return "selected";
			}
		}
	},
	white: function () {
		if (this._id) {
			var color = Prospero.findOne(this._id).basic.colorFamily;
			if (color === "white") {
				return "selected";
			}
		}
	},
	yellow: function () {
		if (this._id) {
			var color = Prospero.findOne(this._id).basic.colorFamily;
			if (color === "yellow") {
				return "selected";
			}
		}
	},
	orange: function () {
		if (this._id) {
			var color = Prospero.findOne(this._id).basic.colorFamily;
			if (color === "orange") {
				return "selected";
			}
		}
	},
	red: function () {
		if (this._id) {
			var color = Prospero.findOne(this._id).basic.colorFamily;
			if (color === "red") {
				return "selected";
			}
		}
	},
	purple: function () {
		if (this._id) {
			var color = Prospero.findOne(this._id).basic.colorFamily;
			if (color === "purple") {
				return "selected";
			}
		}
	},
	blue: function () {
		if (this._id) {
			var color = Prospero.findOne(this._id).basic.colorFamily;
			if (color === "blue") {
				return "selected";
			}
		}
	},
	green: function () {
		if (this._id) {
			var color = Prospero.findOne(this._id).basic.colorFamily;
			if (color === "green") {
				return "selected";
			}
		}
	},
	brown: function () {
		if (this._id) {
			var color = Prospero.findOne(this._id).basic.colorFamily;
			if (color === "brown") {
				return "selected";
			}
		}
	},
	black: function () {
		if (this._id) {
			var color = Prospero.findOne(this._id).basic.colorFamily;
			if (color === "black") {
				return "selected";
			}
		}
	},
	white: function () {
		if (this._id) {
			var color = Prospero.findOne(this._id).basic.colorFamily;
			if (color === "metals") {
				return "selected";
			}
		}
	},
})
Template.basic_other.helpers({
	otherPlaceholder: function () {
		return Session.get("placeholder");
	}
})
