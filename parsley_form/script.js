$(document).ready(function(){
$("#form").parsley();
$("#datepicker").datepicker({
  format:('mm/dd/yyyy'),
  startDate : new Date()
});
// $("#select_").change(function(){
// $("#select_").val==m{
//   console.log("Male");
// }
// });
$( "#select_ option:selected" ).text();
});
