function getscore() {
    score=localStorage.getItem("scorekey");
    document.getElementById("score").innerHTML="<h1>Score:"+score+"</h1>";
}

function Back() {
    window.location="activity_1.html";
}