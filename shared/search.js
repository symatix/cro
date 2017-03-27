PaintingIndex = new EasySearch.Index({
  collection: Prospero,
  name:'paintingGallery',
  fields: ["basic.author", "basic.title"],
  engine: new EasySearch.MongoDB({
    // user search - has to filter hidden items
        selector: function(searchObject, options, aggregation) {
            var selector = this.defaultConfiguration().selector(searchObject, options, aggregation);
            selector.type = "Painting"
            //console.log(selector);
            return selector;
        },
        sort: function (searchObject, options) {
          const sortBy = options.search.props.sortBy

          // return a mongo sort specifier
          if ('last_entry' === sortBy) {
            return {
              "createdAt": -1
            }
          } else if ('first_entry' === sortBy) {
            return {
              "createdAt": 1
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
          }
        },
  }),
})
SculptureIndex = new EasySearch.Index({
  collection: Prospero,
  name:'sculptureGallery',
  fields: ["basic.author", "basic.title"],
  engine: new EasySearch.MongoDB({
    // user search - has to filter hidden items
        selector: function(searchObject, options, aggregation) {
            var selector = this.defaultConfiguration().selector(searchObject, options, aggregation);
            selector.type = "Sculpture"
            //console.log(selector);
            return selector;
        },
        sort: function (searchObject, options) {
          const sortBy = options.search.props.sortBy

          // return a mongo sort specifier
          if ('last_entry' === sortBy) {
            return {
              "createdAt": -1
            }
          } else if ('first_entry' === sortBy) {
            return {
              "createdAt": 1
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
          }
        },
  }),
})
ArchitecturalIndex = new EasySearch.Index({
  collection: Prospero,
  name:'architecturalGallery',
  fields: ["basic.author", "basic.title"],
  engine: new EasySearch.MongoDB({
    // user search - has to filter hidden items
        selector: function(searchObject, options, aggregation) {
            var selector = this.defaultConfiguration().selector(searchObject, options, aggregation);
            selector.type = "Architectural heritage"
            //console.log(selector);
            return selector;
        },
        sort: function (searchObject, options) {
          const sortBy = options.search.props.sortBy

          // return a mongo sort specifier
          if ('last_entry' === sortBy) {
            return {
              "createdAt": -1
            }
          } else if ('first_entry' === sortBy) {
            return {
              "createdAt": 1
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
          }
        },
  }),
})
ArchivalIndex = new EasySearch.Index({
  collection: Prospero,
  name:'archivalGallery',
  fields: ["basic.author", "basic.title"],
  engine: new EasySearch.MongoDB({
    // user search - has to filter hidden items
        selector: function(searchObject, options, aggregation) {
            var selector = this.defaultConfiguration().selector(searchObject, options, aggregation);
            selector.type = "Archival object"
            //console.log(selector);
            return selector;
        },
        sort: function (searchObject, options) {
          const sortBy = options.search.props.sortBy

          // return a mongo sort specifier
          if ('last_entry' === sortBy) {
            return {
              "createdAt": -1
            }
          } else if ('first_entry' === sortBy) {
            return {
              "createdAt": 1
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
          }
        },
  }),
})
ArchaeologicalIndex = new EasySearch.Index({
  collection: Prospero,
  name:'archaeologicalGallery',
  fields: ["basic.author", "basic.title"],
  engine: new EasySearch.MongoDB({
    // user search - has to filter hidden items
        selector: function(searchObject, options, aggregation) {
            var selector = this.defaultConfiguration().selector(searchObject, options, aggregation);
            selector.type = "Archaeological object"
            //console.log(selector);
            return selector;
        },
        sort: function (searchObject, options) {
          const sortBy = options.search.props.sortBy

          // return a mongo sort specifier
          if ('last_entry' === sortBy) {
            return {
              "createdAt": -1
            }
          } else if ('first_entry' === sortBy) {
            return {
              "createdAt": 1
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
          }
        },
  }),
})
PigmentIndex = new EasySearch.Index({
  collection: Prospero,
  name:'pigmentGallery',
  fields: ["basic.author", "basic.title"],
  engine: new EasySearch.MongoDB({
    // user search - has to filter hidden items
        selector: function(searchObject, options, aggregation) {
            var selector = this.defaultConfiguration().selector(searchObject, options, aggregation);
            selector.type = "Pigment/dye/binder/varnish/reference materials"
            //console.log(selector);
            return selector;
        },
        sort: function (searchObject, options) {
          const sortBy = options.search.props.sortBy

          // return a mongo sort specifier
          if ('last_entry' === sortBy) {
            return {
              "createdAt": -1
            }
          } else if ('first_entry' === sortBy) {
            return {
              "createdAt": 1
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
          }
        },
  }),
})
OtherIndex = new EasySearch.Index({
  collection: Prospero,
  name:'otherGallery',
  fields: ["basic.author", "basic.title"],
  engine: new EasySearch.MongoDB({
    // user search - has to filter hidden items
        selector: function(searchObject, options, aggregation) {
            var selector = this.defaultConfiguration().selector(searchObject, options, aggregation);
            selector.type = "other"
            //console.log(selector);
            return selector;
        },
        sort: function (searchObject, options) {
          const sortBy = options.search.props.sortBy

          // return a mongo sort specifier
          if ('last_entry' === sortBy) {
            return {
              "createdAt": -1
            }
          } else if ('first_entry' === sortBy) {
            return {
              "createdAt": 1
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
          }
        },
  }),
})
EditorIndex = new EasySearch.Index({
  collection: Prospero,
  name:'editorGallery',
  fields: ['basic.author', 'basic.title'],
  engine: new EasySearch.MongoDB({
        selector: function(searchObject, options, aggregation) {
            var selector = this.defaultConfiguration().selector(searchObject, options, aggregation);
            selector.visible = {$ne:"hidden"}
            selector.userId = options.search.userId
            //console.log(selector);
            return selector;
		},
        sort: function (searchObject, options) {
          const sortBy = options.search.props.sortBy

          // return a mongo sort specifier
          if ('last_edit' === sortBy) {
            return {
              "last_edit": -1,
            }
          } else if ('last_entry' === sortBy) {
            return {
              "createdAt": -1
            }
          } else if ('first_entry' === sortBy) {
            return {
              "createdAt": 1
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
          }
        },
  }),
})
AdminIndex = new EasySearch.Index({
  collection: Prospero,
  name:'adminGallery',
  fields: ['basic.author', 'basic.title', 'addedBy'],
  engine: new EasySearch.MongoDB({
    sort: function (searchObject, options) {
      const sortBy = options.search.props.sortBy

      // return a mongo sort specifier
          if ('addedBy' === sortBy) {
            return {
              "addedBy": 1,
            }
          } else if ('last_entry' === sortBy) {
            return {
              "createdAt": -1
            }
          } else if ('first_entry' === sortBy) {
            return {
              "createdAt": 1
            }
          } else if ('last_edit' === sortBy) {
            return {
              "last_edit": -1
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
          }
    },
  }),
})
