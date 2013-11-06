var Board = function(selector) {

  var $boardElem = $(selector);

  function initialize() {
    $boardElem.click(createPostIt);
  };

  function createPostIt(event) {
    var postIt = new PostIt(event.clientY, event.clientX)
    $boardElem.append(postIt.$elem);
  };

  initialize();
};

var PostIt = function(yCoord,xCoord) {
  this.$elem = $("#templates > .post-it").clone().css({top: yCoord, left: xCoord});
  this.$elem.resizable();
  this.$elem.draggable({handle: ".header"});
  this.$elem.on("click", function(event) { event.stopPropagation(); });
  this.$elem.find("a.delete").on('click', this.removePostIt);
};

PostIt.prototype.removePostIt = function(event) {
  //console.log("this === event.target :", this === event.target)
  $(event.target).closest("div.post-it").remove()
  event.stopPropagation()
};


$(function() {
  new Board('#board');
});
