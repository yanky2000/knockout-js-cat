var initialCats = [
	{
		clickCount: 0,
		name: 'Shawn',
		imgSrc: '../img/1.jpg',
		imgAttribution: 'htm1'
	},
	{
		clickCount: 0,
		name: 'Alice',
		imgSrc: '../img/2.jpg',
		imgAttribution: 'htm1'
	},
	{
		clickCount: 0,
		name: 'Tom',
		imgSrc: '../img/3.jpg',
		imgAttribution: 'htm1'
	},
	{
		clickCount: 0,
		name: 'Ausia',
		imgSrc: '../img/4.jpg',
		imgAttribution: 'htm1'
	},
	{
		clickCount: 0,
		name: 'Jack',
		imgSrc: '../img/5.jpg',
		imgAttribution: 'htm1'
	},

];



var Cat = function (data) {
	this.name = ko.observable(data.name);
	this.clickCount = ko.observable(data.clickCount);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nickname = ko.observableArray(data.nickname);

	this.level = ko.computed(function() {
		return this.clickCount() < 10 ? "newborn" : this.clickCount() < 20 ? "infant": "teen";
		},this);
};

var ViewModel = function () {
	var self = this;



	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem){
		self.catList.push(new Cat(catItem));
	});

	this.currentCat = ko.observable(this.catList()[0]);


	this.changeCat = function(clickedCat) {
		self.currentCat(clickedCat);
	};

	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};

};

ko.applyBindings(new ViewModel());