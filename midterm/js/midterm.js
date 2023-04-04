var hours = new Date().getHours();

	if(hours<12) {
		document.getElementById("greeting").innerHTML="Good morning! The current hour is: " + hours ;
	} else if(hours<16) {
		document.getElementById("greeting").innerHTML="Good afternoon! The current hour is: " + hours ;
	} else if(hours<20) {
		document.getElementById("greeting").innerHTML="Good evening! The current hour is " + hours ;
	} else {
		document.getElementById("greeting").innerHTML="Good night! The current hour is: " + hours ;
	} 

if (window.innerWidth < 567) {
	document.getElementById("breakpointdata").innerHTML="You are on an extra small device. Please refresh page if you change devices." ;
} else if (window.innerWidth < 768) {
	document.getElementById("breakpointdata").innerHTML="You are currently on a mobile device. Please refresh page if you change devices." ;
} else if (window.innerWidth < 1023) {
	document.getElementById("breakpointdata").innerHTML="You are on a tablet device. Please refresh page if you change devices." ;
} else if (window.innerWidth >= 1024) {
	document.getElementById("breakpointdata").innerHTML="Desktop devices are the best to view my website. Please refresh page if you change devices." ;
} ;
