var ViewModel = function() {	
	this.clickCount = ko.observable(99);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/4154543904_6e2428c421_z.jpg');
	this.imgAttribution = '';	
	this.incementCounter = function() {
		this.clickCount(this.clickCount()+1);
	};
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