$(document).ready(function() {
  /*alert("hi");*/
  $(".logo .logoimg").css({ width: "350px", height: "100px" });
  $(".love").css("opacity", "1");
  $(".friendship").css("opacity", "1");
  $(".funny").css("opacity", "1");
  $(".sad").css("opacity", "1");
  $(".cute").css("opacity", "1");
  $(".cool").css("opacity", "1");
  $(".motivational").css("opacity", "1");
  $(".sarcastic").css("opacity", "1");
  $(".religious").css("opacity", "1");
  $(".box").click(function() {
    let className = this.classList[1];
    $("#everything").hide();
    $("#contentContainer").load(className + ".html");
  });
});
