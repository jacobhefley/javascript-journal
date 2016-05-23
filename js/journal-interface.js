var Entry = require('./../js/Entry.js').Entry;

$(document).ready(function(){
  $('#journal').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new Entry(title, body);
    $('#journal').prepend("<h4>" + newEntry.title + " body length:" + newEntry.words() + "</h4> <br> <p>" + newEntry.body + "</p> <hr>" );
    console.log(newEntry);
  });
});