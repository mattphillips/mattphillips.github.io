$(document).ready(function() {
    setSidebarHeight();
});

$(window).resize(function() {
    setSidebarHeight();
});

function setSidebarHeight() {
    $('.sidebar').css({
        height: ($(document).height()) + 'px'
    });
}
