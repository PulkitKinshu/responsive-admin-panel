

// For Navtabs

$(function () {
    $('a[data-toggle="tab"]').on('click', function (e) {
        window.localStorage.setItem('activeTab', $(e.target).attr('href'));
    });
    var activeTab = window.localStorage.getItem('activeTab');
    if (activeTab) {
        $('#myTab a[href="' + activeTab + '"]').tab('show');
        window.localStorage.removeItem("activeTab");
    }
});




// For toggling Filters

function openNav() {
    document.getElementById("mySidebar").style.width = "350px";
    document.getElementById("mySidebar").style.marginRight = "0px";

}

function closeNav() {
    document.getElementById("mySidebar").style.width = "350px";
    document.getElementById("mySidebar").style.marginRight = "-350px";

}




// For toggling Menu

function openSideNav() {
    document.getElementById("mySideNav").style.width = "250px";
    document.getElementById("mySideNav").style.marginLeft = "0px";

}

function closeSideNav() {
    document.getElementById("mySideNav").style.width = "250px";
    document.getElementById("mySideNav").style.marginLeft = "-250px";

}