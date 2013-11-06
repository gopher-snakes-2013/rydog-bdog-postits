var Board = function( selector ) {

  var $elem = $( selector );

  function initialize() {
    $($elem).click(createPostIt);
  };

  function createPostIt(event) {
    postit = new PostIt(event)
    postit.makeDraggable()
    postit.preventPropagation()
    postit.makeResizable()
    $("a.delete").on('click',removePostIt);
  };

  function removePostIt(event) {
    $(this).closest("div.post-it").remove()
    event.stopPropagation()
  };

  initialize();
};

var PostIt = function( event ) {
    var x = event.clientX
    var y = event.clientY
    var $postIt = ("<div class='post-it' style='top:"+y+"px; left:"+x+"px'><div class='header'><a class='delete'>X</a></div><div class='head-text' contenteditable='true'>Title</div><div class='content' contenteditable='true'></div></div>");

    function initialize() {
      $('#board').append($postIt);
    };

    initialize();
};
PostIt.prototype.makeResizable = function() {
    $( ".post-it" ).resizable();
}

PostIt.prototype.makeDraggable = function() {
    $( ".post-it" ).draggable({handle: ".header"});
}
PostIt.prototype.preventPropagation = function() {
    $('.post-it').click( function(e) {
      e.stopPropagation();
    })
}


// cunstructor function?
var Awesome = function(){
  this.stuff = [1,2,3]
  this.break = function(){ alert("break some stuff")}
}
Awesome.prototype =

$(function() {
  new Board('#board');
});

// $('.post-it#id').remove();