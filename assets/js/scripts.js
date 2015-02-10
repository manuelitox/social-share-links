// window popup to share
//
// Use:
// var socialLinks = new PopUp();
//

var PopUp = function () {
	this.links = document.querySelectorAll(".social-share-links > a");
}

// generate window popup
// 
// @param options (it isn't required)
// 
// use: 
// socialLinks.generate("resizable=yes, top=500, left=500, width=400, height=300");
//

PopUp.prototype.generate = function(options) {
	var target = "_blank", 
			options = options || "resizable=yes, top=500, left=500, width=400, height=300";

	for (var i = this.links.length - 1; i >= 0; i--) {
		this.links[i].addEventListener("click", function(e) {
			e.preventDefault();

			window.open(this.href, target, options);
		})
	};
};