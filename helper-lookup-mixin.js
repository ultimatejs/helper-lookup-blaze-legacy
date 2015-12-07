if(Meteor.isServer) return HelperLookupBlazeLegacy = {}; //so server side rendering isn't broken

HelperLookupBlazeLegacy = {
		__lookup(name, args) {
			if(Template.__helpers[name]) { //global helper
				return Template.__helpers[name].apply(this, args);
			}
			else return this[name]();
		}
};