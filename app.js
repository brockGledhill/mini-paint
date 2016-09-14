$(document).ready(function() {

  //Set up buttons on top to select the color we're working with.


  var color = '';

  $('#color-buttons a').on('click', function(){
    color = $(this).attr('id');
    //console.log(color);
  });

  //Click in grid and change background of cell that we click in to the "working color".


  $('.box').on('click', function() {
    $(this).attr('class', 'a');
  });

  $('.box').on('dblclick', function() {
    $(this).removeClass(color);
  });

  //could do a mousedown, mouseenter, mouseup to do a continuous line of paint. (.on and . off)

//Make reset button clear working color and reset all background colors to black.

  $('#reset').on('click', function() {
    $('.box').attr('class', 'box');
    color = '';
  });



});
