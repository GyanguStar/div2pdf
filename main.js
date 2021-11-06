function hiden(el) {
    for (let i of el.parentNode.children) {
        if (i != el) {
            //i.style.visibility = 'hidden';
            i.style.display = 'none';
        }
    }
    if (el.parentNode != document.body) hiden(el.parentNode)
}
