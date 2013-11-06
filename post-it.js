var Board = function(selector) {

  var $boardElem = $(selector);

  function initialize() {
    $boardElem.click(createPostIt);
  };

  function createPostIt(event) {
    var postIt = new PostIt(event.clientY, event.clientX)
    $boardElem.append(postIt.$elem);
    postIt.$elem.show("scale", {percent: 100, origin: ['top','left']}, 400);
    postIt.$elem.removeClass("hidden");
  };

  initialize();
};

var PostIt = function(yCoord,xCoord) {
  this.$elem = $("#templates > .post-it").clone().css({top: yCoord, left: xCoord});
  this.$elem.resizable();
  this.$elem.draggable({handle: ".header"});
  this.$elem.addClass("hidden")
  this.$elem.on("click", function(event) { event.stopPropagation(); });
  this.$elem.find("a.delete").on('click', this.removePostIt);
};

PostIt.prototype.removePostIt = function(event) {
  //console.log("this === event.target :", this === event.target)
  $(event.target).closest("div.post-it").toggle( "explode",{pieces: 81}, 1000)
  $(event.target).closest("div.post-it").remove()
  event.stopPropagation()
};

$(function() {
  new Board('#board');
});
