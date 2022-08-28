
let counter = -3

function sliderLogic(ref, e) {
    if(ref.current.dataset.type === "item") {
        
        changeCounter(-e.target.id)
        moveSlider(ref)
        activateItem(ref, e)
        activateMarker(ref, e)
    }
    else if(ref.current.id === "marker") {

        changeCounter(-e.target.id)
        moveSlider(ref)
        activateItem(ref, e)
        activateMarker(ref, e)
    }
}

function moveSlider(ref) {
    const target = ref.current
    const list = target.closest("section").querySelector("#list")
    const width = window.innerWidth

    if(width > 900) {
        list.style = `transform: translateX(${counter * 395}px);`
    } 

    else if(width <=900 && width > 600) {
        list.style = `transform: translateX(${counter * 335}px);`
    }
    
    else {
        list.style = `transform: translateX(${counter * 255}px);`
    }
}

function activateItem(ref, e) {
    const target = ref.current
    const list = target.closest("section").querySelector("#list").childNodes
    const id = e.target.id

    changer(list, id)
}

function activateMarker(ref, e) {
    const target = ref.current
    const list = target.closest("section").querySelector("#marker").childNodes
    const id = e.target.id
    
    changer(list, id)
}

function changer(list, id) {
    for(let i = 0; i < list.length; i++){
        if(list[i].id === id) {
            list[i].setAttribute("data-active", "true")
        }
        else if(list[i] !== id) {
            list[i].setAttribute("data-active", "false")
        }
    }
}

function changeCounter(value) {
    counter = value
}

export default sliderLogic