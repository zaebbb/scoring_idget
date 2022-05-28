function contentHeader(numb = "", del = false){
    let widget__header__text = document.querySelector(".widget__header--text")

    if(widget__header__text){

        let widget__header__line = document.querySelector(".widget__header--line.active__line")

        widget__header__text.textContent = numb + "/10"

        if(del){
            widget__header__line.style.setProperty("--i", numb + "5%")
        } else {
            widget__header__line.style.setProperty("--i", numb + "0%")
        }
    }

}

export default contentHeader