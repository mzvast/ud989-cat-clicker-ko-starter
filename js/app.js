var ViewModel = function() {
	var self = this;
	self.clickCount = ko.observable(99);
	self.name = ko.observable('Tabby');
	self.imgSrc = ko.observable('img/4154543904_6e2428c421_z.jpg');
	self.imgAttribution = '';	
	self.incementCounter = function() {
		self.clickCount(self.clickCount()+1);
	};
	self.level = ko.computed(function() {
        return self.clickCount()>100?"Teen":
        (self.clickCount()>10?"Infant":"Newborn");
    });	
    self.nickname = ko.observableArray(
    	[
    		{name:'Tabtab'},
    		{name:'fuck'},
    		{name:'dog'},
    		{name:'doggie'}   		
    	]);
};

ko.applyBindings(new ViewModel())