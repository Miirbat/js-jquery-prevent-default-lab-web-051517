$(document).ready(function(){
  submitForm()
});


function submitForm(){
$('form').submit(function(event){
  var listItem = $('#item').val() //is value of id item, which is a filled out form.... via HTML form tag...
  $('ol').append( '<li>' + listItem + '</li>' ) //always appending strings and shit. jquery takes things in strings it seems.
  event.preventDefault();
})
}
