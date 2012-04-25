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
        $(this).attr("src").replace(/.*url=/, "");
        c.l("Open a window");
        $("nav").after("<div class='page-win' id='page1'><iframe src='http://www.baidu.com'></iframe></div>");
        $("#page1").draggable().resizable();
    }, function (event) {
        c.l("Close a window");
    });
});

function test () {
    c.l("testing");
}