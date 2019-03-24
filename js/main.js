$(function(){
	function startTime() {
	  var today = new Date();
	  var h = today.getHours();
	  var m = today.getMinutes();
	  var s = today.getSeconds();
	  m = checkTime(m);
	  s = checkTime(s);
	  document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
	  var t = setTimeout(startTime, 500);
	}
	function checkTime(i) {
	  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	  return i;
	}
	$('#htmlBody').ready(function(){
		startTime();
	});
	$('#searchField').keypress(function(e) {
	    if(e.which == 13) {
	        if($('#searchField').val()!='')
	        	window.location.href = "http://www.google.com/search?q="+$('#searchField').val();
	        else
	        	alert('Please enter a keyword to search!');
	    }
	});
});