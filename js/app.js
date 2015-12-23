var ViewModel = function() {
	var self = this;
	this.clickCount = ko.observable(9);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/4154543904_6e2428c421_z.jpg');
	this.imgAttribution = '';	
	this.incementCounter = function() {
		this.clickCount(this.clickCount()+1);
	};	
};

ko.applyBindings(new ViewModel())