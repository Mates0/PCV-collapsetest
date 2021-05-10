startblock()

function startblock() {
    document.getElementById("idbutton").addEventListener("click", block)
}
function startnone() {
    document.getElementById("idbutton").addEventListener("click", none)
}

function block() {
    document.getElementById("iddropdown").style.display = "block"
    document.getElementById("idbutton").removeEventListener("click", block)
    startnone()
}

function none() {
    document.getElementById("iddropdown").style.display = "none"
    document.getElementById("idbutton").removeEventListener("click", none)
    startblock()
}