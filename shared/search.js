////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////
///////////////
///////////////                                       NEW SEARCH INDEX
///////////////
///////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

GalleryIndex = new EasySearch.Index({
	collection: Prospero,
	name: 'croartiaGallery',
	fields: ['basic.author', 'basic.title', 'basic.name', 'basic.altName', 'basic.tags'],
	defaultSearchOptions: { limit: 10 },
	engine: new EasySearch.MongoDB({
		selector: function (searchObject, options, aggregation) {
			const selector = this.defaultConfiguration().selector(searchObject, options, aggregation);
			const category = options.search.props.guestCategory;
			const sorting = options.search.props.guestSort;


			// use this for deep selector
			//selector['parent.child'] = "<value>";
			if (sorting === "author_a" || sorting === "author_z") {
				selector['basic.author'] = {
					"$exists": 1
				};
			}

			selector.isDeleted = "available";
			selector.visible = "public";
			// filter for the category if set
			if (category === "Other") {
				selector.type = { $regex: /Archival|Archaeological|other|Architectural|Arts/ }
			}
			if (category !== '' && category !== "Other") {
				selector.type = category;
			}

			return selector;
		},
		sort: function (searchObject, options) {
			const guestSort = options.search.props.guestSort

			// return a mongo sort specifier
			if ('addedBy' === guestSort) {
				return {
					"info.addedBy": 1,
				}
			} else if ('last_entry' === guestSort) {
				return {
					"info.createdAt": -1
				}
			} else if ('last_edit' === guestSort) {
				return {
					"info.last_edit": -1
				}
			} else if ('first_entry' === guestSort) {
				return {
					"info.createdAt": 1
				}
			} else if ('title_a' === guestSort) {
				return {
					"basic.title": 1
				}
			} else if ('title_z' === guestSort) {
				return {
					"basic.title": -1
				}
			} else if ('author_a' === guestSort) {
				return {
					"basic.author": 1
				}
			} else if ('author_z' === guestSort) {
				return {
					"basic.author": -1
				}
			} else {
				return {
					"info.last_edit": -1
				}
			}
		}
	}),
})

UsersIndex = new EasySearch.Index({
	collection: Meteor.users,
	use: 'mongo-db',
	name: 'usersDatabase',
	fields: ['profile.full_name', 'profile.institution', 'username', 'profile.email', 'emails'],
	engine: new EasySearch.MongoDB({
		selector: function (searchObject, options, aggregation) {
			const selector = this.defaultConfiguration().selector(searchObject, options, aggregation);
			const sorting = options.search.props.guestSort;

			if (sorting === "author_a" || sorting === "author_z") {
				selector['basic.author'] = {
					"$exists": 1
				};
			}

			return selector;
		},
		sort: function (searchObject, options) {
			const sortBy = options.search.props.sortBy

			// return a mongo sort specifier
			if ('username_a' === sortBy) {
				return {
					"username": 1,
				}
			} else if ('username_z' === sortBy) {
				return {
					"username": -1
				}
			} else if ('name_a' === sortBy) {
				return {
					"profile.full_name": 1
				}
			} else if ('name_z' === sortBy) {
				return {
					"profile.full_name": -1
				}
			} else if ('email_a' === sortBy) {
				return {
					"profile.email": 1
				}
			} else if ('email_z' === sortBy) {
				return {
					"profile.email": -1
				}
			} else if ('institution_a' === sortBy) {
				return {
					"profile.institution": 1
				}
			} else if ('institution_z' === sortBy) {
				return {
					"profile.institution": -1
				}
			}
		},
	}),
})


ModeratorIndex = new EasySearch.Index({
	collection: Prospero,
	name: 'moderatorGallery',
	fields: ['basic.author', 'basic.title', 'basic.tags', 'basic.name', 'basic.altName'],
	engine: new EasySearch.MongoDB({
		selector: function (searchObject, options, aggregation) {
			const selector = this.defaultConfiguration().selector(searchObject, options, aggregation);
			const sorting = options.search.props.guestSort;

			if (sorting === "author_a" || sorting === "author_z") {
				selector['basic.author'] = {
					"$exists": 1
				};
			}
			selector.owner = options.search.userId;
			selector.isDeleted = "available";
			// filter for the category if set

			if (options.search.props.categoryFilter) {
				var option = options.search.props.categoryFilter;
				if (option === "private") {
					selector.visible = options.search.props.categoryFilter;
				} else {
					selector.type = options.search.props.categoryFilter;
				}
			}

			//selector = {"type":"other"};
			return selector;
		},
		sort: function (searchObject, options) {
			const sortByFilter = options.search.props.sortByFilter

			// return a mongo sort specifier
			if ('addedBy' === sortByFilter) {
				return {
					"info.addedBy": 1,
				}
			} else if ('last_entry' === sortByFilter) {
				return {
					"info.createdAt": -1
				}
			} else if ('first_entry' === sortByFilter) {
				return {
					"info.createdAt": 1
				}
			} else if ('last_edit' === sortByFilter) {
				return {
					"info.last_edit": -1
				}
			} else if ('title_a' === sortByFilter) {
				return {
					"basic.title": 1
				}
			} else if ('title_z' === sortByFilter) {
				return {
					"basic.title": -1
				}
			} else if ('author_a' === sortByFilter) {
				return {
					"basic.author": 1
				}
			} else if ('author_z' === sortByFilter) {
				return {
					"basic.author": -1
				}
			} else {
				return {
					"info.last_edit": -1
				}
			}
		},
	}),
	permission: (options) => options.userId,
});

AdminIndex = new EasySearch.Index({
	collection: Prospero,
	name: 'adminGallery',
	fields: ['basic.author', 'basic.title', 'basic.name', 'basic.altName', 'info.addedBy', 'info.fullName', 'basic.tags'],
	engine: new EasySearch.MongoDB({
		selector: function (searchObject, options, aggregation) {
			const selector = this.defaultConfiguration().selector(searchObject, options, aggregation);

			const sorting = options.search.props.guestSort;

			if (sorting === "author_a" || sorting === "author_z") {
				selector['basic.author'] = {
					"$exists": 1
				};
			}
			// filter for the category if set
			if (options.search.props.categoryFilter) {
				var option = options.search.props.categoryFilter;
				if (option === "private") {
					selector.visible = options.search.props.categoryFilter;
					selector.isDeleted = "available";
				} else if (option === "deleted") {
					selector.isDeleted = options.search.props.categoryFilter;
				} else {
					selector.type = options.search.props.categoryFilter;
				}
			}

			return selector;
		},
		sort: function (searchObject, options) {
			const sortBy = options.search.props.sortBy

			// return a mongo sort specifier
			if ('addedBy' === sortBy) {
				return {
					"info.addedBy": 1,
				}
			} else if ('last_edit' === sortBy) {
				return {
					"info.last_edit": -1
				}
			} else if ('last_entry' === sortBy) {
				return {
					"info.createdAt": -1
				}
			} else if ('first_entry' === sortBy) {
				return {
					"info.createdAt": 1
				}
			} else if ('last_edit' === sortBy) {
				return {
					"info.last_edit": -1
				}
			} else if ('title_a' === sortBy) {
				return {
					"basic.title": 1
				}
			} else if ('title_z' === sortBy) {
				return {
					"basic.title": -1
				}
			} else if ('author_a' === sortBy) {
				return {
					"basic.author": 1
				}
			} else if ('author_z' === sortBy) {
				return {
					"basic.author": -1
				}
			} else {
				return {
					"info.last_edit": -1
				}
			}
		},
	}),
})
