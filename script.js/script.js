function go(play) {
	var video = document.getElementById('video');
	play.style.display = 'none';
	video.innerHTML = '<iframe src="https://www.youtube.com/embed/cLCnPwln8e0" frameborder="0" allowfullscreen></iframe>';
}