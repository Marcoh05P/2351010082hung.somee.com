$(document).ready(function () {
  var arr = [];
  $("ol>li").click(function () {
    $("p#view").text($(this).text());
  });
  $("#yes").click(function () {
    $("p#view").addClass("shadow");
  });
  $("#no").click(function () {
    $("p#view").removeClass("shadow");
  });
  $("#textcolor").change(function () {
    $("p#view").css("color", $(this).val());
  });
  $("#btDel").click(function () {
    var text = $("ol li:last").text();
    if (text == "") return;
    arr.unshift(text);
    $("ol li:last").remove();
  });
  $("#btUndo").click(function () {
    if (arr.length == 0) return;
    var item = "<li>" + arr.shift() + "</li>";
    $("ol").append(item);
    $("ol").on("click", "li", function () {
      $("p#view").text($(this).text());
    });
  });
})
