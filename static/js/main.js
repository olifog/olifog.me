window.onload = function() {
    const scale = 0.01

    let xtarget, ytarget

    function trackPosition(event) {
        xtarget = (((window.innerWidth / 2) - event.clientX) * scale)
        ytarget = (((window.innerHeight / 2) - event.clientY) * scale)

        document.body.style.backgroundPosition = xtarget + "px " + ytarget + "px"
        document.body.style.height = window.innerHeight.toString()
    }

	window.addEventListener("mousemove", trackPosition);
}