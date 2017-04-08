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
  name:'croartiaGallery',
  fields: ['basic.author', 'basic.title', 'type'],
  engine: new EasySearch.MongoDB({
    selector: function(searchObject, options, aggregation) {
      const selector = this.defaultConfiguration().selector(searchObject, options, aggregation);


      selector.isDeleted = "available";
      selector.visible = "public";

      // filter for the category if set
      
      if (options.search.props.guestCategory) {
        var option = options.search.props.guestCategory;
        selector.type = options.search.props.guestCategory;
      } 

      //selector = {"type":"other"};
      //console.log(selector);
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
          } 
    },
  }),
})

UsersIndex = new EasySearch.Index({
  collection: Meteor.users,
  use: 'mongo-db',
  name:'usersDatabase',
  fields: ['profile.full_name', 'profile.institution', 'username','profile.email','emails'],
  engine: new EasySearch.MongoDB({
    selector: function(searchObject, options, aggregation) {
      const selector = this.defaultConfiguration().selector(searchObject, options, aggregation);
      
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
          }  else if ('institution_a' === sortBy) {
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
  name:'moderatorGallery',
  fields: ['basic.author', 'basic.title', 'type'],
  engine: new EasySearch.MongoDB({
    selector: function(searchObject, options, aggregation) {
      const selector = this.defaultConfiguration().selector(searchObject, options, aggregation);

      selector.owner = options.search.userId;
      selector.isDeleted = "available";
      // filter for the category if set
      
      if (options.search.props.categoryFilter) {
        var option = options.search.props.categoryFilter;
        if (option==="private"){
          selector.visible = options.search.props.categoryFilter;
        } else {
          selector.type = options.search.props.categoryFilter;
        }
      }

      //selector = {"type":"other"};
      //console.log(selector);
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
          }
    },
    defaultSearchOptions: {
      limit: 4 // could also have skip and props
    }
  }),
  permission: (options) => options.userId,
})
AdminIndex = new EasySearch.Index({
  collection: Prospero,
  name:'adminGallery',
  fields: ['basic.author', 'basic.title', 'info.addedBy', 'type'],
  engine: new EasySearch.MongoDB({
    selector: function(searchObject, options, aggregation) {
      const selector = this.defaultConfiguration().selector(searchObject, options, aggregation);

      // filter for the category if set
      if (options.search.props.categoryFilter) {
        var option = options.search.props.categoryFilter;
        if (option==="private"){
          selector.visible = options.search.props.categoryFilter;
          selector.isDeleted = "available";
        } else if(option==="deleted"){
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
          }
    },
  }),
})



////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////
///////////////
///////////////                                       OLD SEARCH INDEX
///////////////
///////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////



PaintingIndex = new EasySearch.Index({
  collection: Prospero,
  name:'paintingGallery',
  fields: ["basic.author", "basic.title"],
  props:{
    'typeFilter' : [],
  },
  engine: new EasySearch.MongoDB({
    // user search - has to filter hidden items
        selector: function(searchObject, options, aggregation) {
            var selector = this.defaultConfiguration().selector(searchObject, options, aggregation);
            selector = {"type":"Painting", "visible":"public", "isDeleted":"available"};
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
            selector = {"type":"Sculpture", "visible":"public", "isDeleted":"available"};
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
            selector = {"type":"Architectural heritage", "visible":"public", "isDeleted":"available"};
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
            selector = {"type":"Archival object", "visible":"public", "isDeleted":"available"};
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
            selector = {"type":"Archaeological object", "visible":"public", "isDeleted":"available"};
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
            selector = {"type":"Pigment/dye/binder/varnish/reference materials", "visible":"public", "isDeleted":"available"};
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
            selector = {"type":"other", "visible":"public", "isDeleted":"available"};
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

