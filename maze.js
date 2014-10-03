var lost = false; 

window.onload = function() {
    $("start").onclick = startClick;
    $("end").onmouseover = overEnd;
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overBoundary;
    }
};

function overBoundary() {
    lost = true;
    var boundaries = $$("div#maze div.boundary");
    for (var r = 0; r < boundaries.length; r++) {
        boundaries[r].addClassName("youlose");
    }
}

function startClick() {
    lost = false;
    var boundaries = $$("div#maze div.boundary");
    for (var k = 0; k < boundaries.length; k++) {
        boundaries[k].removeClassName("youlose");
    }
}

function overEnd() {
    if(lost) {
        alert("You Lose!");
    } else {
        alert("You win!");
    }
}