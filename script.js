class Girl {
    constructor(id, isAlive, name, score, info) {
        this.id = id;
        this.isAlive = isAlive;
        this.name = name;
        this.score = score;
        this.info = info;
    }
    toString() {
        return 'id ' + this.id + '\nname ' + this.name + '\nscore ' + this.score
    }
}


function getArray() {
    girls_array = []
    for (i = 0; i < 4; i++) {
        girls_array[i] = new Girl(i, true, 'Tyan ' + (i + 1) + ' Name ', i * 10, 'girl_info' + (i + 1))
    }
    return girls_array
}



function setModalToGirl(girl) {
    var girl_name = document.getElementById('girl_name')
    girl_name.textContent = girl.name;
    var girl_info = document.getElementById('girl_info')
    girl_info.textContent = girl.info;
    var girl_score = document.getElementById('girl_score')
    girl_score.value = girl.score
    var girl_photo = document.getElementById('girl_photo')
    girl_photo.src = 'images/' + girl.id + '.jpg'

    /*    <div id="modal" class="modal modal-fixed-footer">
        <div class="modal-content">
            <h4>Girl #1</h4>
            <p>She is pretty</p>
            <div class="carousel carousel-slider" fullWidth="true">
                <a class="carousel-item" href="#one!"><img src="images/person1.jpg" width="480" height="480"></a>
                <a class="carousel-item" href="#two!"><img src="images/person2.jpg" width="480" height="480"></a>
                <a class="carousel-item" href="#three!"><img src="images/person3.jpg" width="480" height="480"></a>
            </div>
            <div>
                <input type="range">
            </div>
            <div class="modal-footer">
                <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
            </div>
        </div>
*/
}


girls_array = getArray(3)
var active_girl = girls_array[0]
setModalToGirl(active_girl)
    // console.log(girls_array)

// let elems = document.querySelectorAll('.carousel-item')
// var elems = document.querySelectorAll('.carousel');
// var instances = M.Carousel.init(elems, 'noWrap', dist = 100);
var elems = document.querySelectorAll('.modal');
let instances = M.Modal.init(elems, open);
let parent = document.getElementById('OddGirls')
for (let i = 0; i < girls_array.length; i++) {
    let girl_name = 'Girl #' + (i + 1)
    let p = document.createElement("span")
    p.textContent = girl_name
    let div = document.createElement("div")
    let score = document.createElement('span')
    score.setAttribute('id', 'score' + girls_array[i].id)
    score.textContent = girls_array[i].score
    score.style.marginLeft = "30px"
    div.appendChild(p)
    div.appendChild(score)
    parent.appendChild(div)
    let button = document.createElement('button')
    button.textContent = 'Show more of Girl #' + (i + 1)
    button.setAttribute('data-target', 'modal')
    button.setAttribute('class', 'btn modal-trigger')
    button.setAttribute('id', 'girl-button' + i)
    button.onclick = function() {
        active_girl = girls_array[i]
        setModalToGirl(active_girl)
    }

    parent.appendChild(button)

};


var range = document.getElementById('girl_score')
range.onclick = function() {
    let score = document.getElementById('score' + active_girl.id)
    score.textContent = range.value
    active_girl.score = range.value
}