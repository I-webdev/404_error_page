$("button").on("touchstart", animatio);
$("button").on("click", animatio);
function animatio() {
  $("button").addClass("pressed");
  setTimeout(()=>{$("button").removeClass("pressed")}, 0100);
  
}