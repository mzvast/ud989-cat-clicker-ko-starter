var ViewModel = function() {
	var self = this;
	this.currentCat = ko.observable(new Cat());	
	this.incementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount()+1);
	};

};

var Cat = function() {
	this.clickCount = ko.observable(99);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/4154543904_6e2428c421_z.jpg');
	this.imgAttribution = '';	
	this.level = ko.computed(function() {
        return this.clickCount()>100?"Teen":
        (this.clickCount()>10?"Infant":"Newborn");
    },this);	
    this.nickname = ko.observableArray(
    	[
    		'Tabtab',
    		'fuck',
    		'dog',
    		'doggie'   		
    	]);	
};
ko.applyBindings(new ViewModel())