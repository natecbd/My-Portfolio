window.onload = function(){

    let b = byId("why-b")
    b.onclick = function() {
        alert("Why did you have me make this Dan?")
    }
}

function byId(a) {
    return document.getElementById(a);
};
