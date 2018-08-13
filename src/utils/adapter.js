const documentElement = document.documentElement;

function callback() {
	let clientWidth = documentElement.clientWidth;

	// 屏幕宽度大于780，不在放大
	clientWidth = clientWidth < 780 ? clientWidth : 780;

	documentElement.style.fontSize = clientWidth / 750 * 75 + 'px';
}

document.addEventListener( 'DOMContentLoaded', callback );
window.addEventListener( 'orientationchange' in window ? 'orientationchange' : 'resize', callback );