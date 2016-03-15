var ViewModel = function () {
	this.name = ko.observable('Tabby');
	this.clickCount = ko.observable(0);
	this.imgSrc = ko.observable("../img/1.jpg");
	this.imgAttribution = ko.observable('../img/1.jpg');
	this.nickname = ko.observableArray(['whooyee', 'chappy', 'josh']);

	this.level = ko.computed(function() {
		return this.clickCount() < 10 ? "newborn" : this.clickCount() < 20 ? "infant": "teen";
		},this);

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);

	};

};

ko.applyBindings(new ViewModel());