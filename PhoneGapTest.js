$(function () {

    $("#btnCamera").click(function () {
        alert("hello");
        navigator.camera.getPicture(
            function () { alert("success"); },
            function () { alert("failed"); },
            { quality: 50, destinationType: Camera.DestinationType.DATA_URL }
        );

    });
});