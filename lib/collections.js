import { Index, MongoDBEngine } from 'meteor/easy:search'

Prospero = new Mongo.Collection("prospero");


Data = new FS.Collection("data", {
  stores: [new FS.Store.FileSystem("data", {path: Meteor.absolutePath + '/data'})]
});

Data.allow({
 insert: function(userId){
 	if (Meteor.userId){
 		return true;
 	}
 },
 update: function(userId){
 	if (Meteor.userId){
 		return true;
 	}
 },
 remove: function(userId){
 	if (Meteor.userId){
 		return true;
 	}
 },
 download: function(userId){
 	if (Meteor.userId){
 		return true;
 	}
 }
})
