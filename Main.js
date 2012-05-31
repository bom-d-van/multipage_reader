$(function (undefined) {
    // Global Setting
    c = console;
    c.l = function () {
        foo = arguments;
        c.log(foo);
    };
    // Init
    // Select || Unselect a page block
    $("div.page-block").toggle(function(event) {
        $(this).addClass("selected-page-block");
        // showPageInIframe();
    }, function (e) {
        $(this).removeClass("selected-page-block");
    });
    // Open || Close a iframe window
    $("img.page-thumbnail").toggle(function (event) {
        var url = $(this).attr("src").replace(/.*url=/, ""),
            id = "win" + $(this).parent().parent().attr("id");
        $("body").append("<div class='page-win' id='"+ id + "'><iframe src='" + url + "'></iframe></div>");
        $("#" + id).draggable().resizable().height(650).width(900);
        $(this).parent().click();
    }, function (event) {
        c.l("Close a window");
    });
});

function test () {
    c.l("testing");
}