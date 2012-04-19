(function (undefined) {
    // Global Setting
    c = console;
    c.l = function () {
        foo = arguments;
        c.log(foo);
    };
    // Init
    
})();

function test () {
    c.l("testing");
}