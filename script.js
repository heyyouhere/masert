    const GIRLS_AMOUNT = 30
    const SERVER_IP = '127.0.0.1'

    class Girl {
        constructor(id, isAlive, wasVoted, name, score, info) {
            this.id = id;
            this.isAlive = isAlive;
            this.wasVoted = wasVoted;
            this.name = name;
            this.score = score;
            this.info = info;
        }
        toString() {
            return 'id ' + this.id + '\nname ' + this.name + '\nscore ' + this.score
        }
    }


    var girls_names = [
        "Sarah",
        "Rebecca",
        "Jessica",
        "Julia",
        "Ellen",
        "Megan",
        "Joanna",
        "Rachel",
        "Anna",
        "Jennifer",
        "Emily",
        "Samantha",
        "Lauren",
        "Maria",
        "Victoria",
        "Michelle",
        "Beyoncé",
        "Oprah Winfrey",
        "Hillary",
        "Ruth Bader",
        "Malala",
        "Ellen DeGeneres",
        "Taylor",
        "Shonda",
        "Maya Angelou",
        "Jenna Jameso",
        "Susannah",
        "Serena",
        "Nancy Pelosi",
        "Amal Clooney"
    ]
    var girls_info = [
        "Sarah is an ambitious young woman who is determined to make her mark in the beauty contest. She has an eye for detail and refuses to settle for anything less than perfection.",
        "Rebecca is an outgoing and confident contestant with a sparkle in her eye. She loves the thrill of competition and knows how to make an impression with her unique style.",
        "Jessica is a classic beauty who is determined to outshine her rivals. She has a natural poise and elegance that have earned her plenty of admirers.",
        "Julia is an extroverted performer who loves to show off her talents. She has a passion for fashion and knows how to rock the stage with her infectious energy.",
        "Ellen is a natural beauty who exudes grace and sophistication. Her soft demeanour is often seen as a sign of strength, winning her plenty of admirers.",
        "Megan is a determined and driven contestant who is determined to make her mark. She has a strong sense of style and an eye for detail that cant be ignored.",
        "Joanna is an outgoing and confident contestant who loves to show off her talents. She has a bubbly personality that often wins her admirers and plenty of attention.",
        "Rachel is a talented performer who is determined to make her mark in the competition. She has a unique style and a flair for the dramatic that cant be ignored.",
        "Anna is a classic beauty who loves to showcase her talents. She has a natural poise and elegance that have earned her plenty of admirers.",
        "Jennifer is a devoted and passionate contestant who is determined to make her mark. She has an eye for detail and refuses to settle for anything less than perfection.",
        "Emily is an ambitious young woman who loves to show off her talents. She is determined to make her mark in the competition and is willing to go the extra mile to do so.",
        "Samantha is an outgoing and confident contestant with a sparkling personality. She loves the thrill of competition and knows how to make an impression with her unique style.",
        "Lauren is a talented performer who is determined to make her mark in the competition. She has a passion for fashion and knows how to rock the stage with her infectious energy.",
        "Maria is a classic beauty who exudes grace and elegance. Her soft demeanour is often seen as a sign of strength, winning her plenty of admirers.",
        "Victoria is an ambitious young woman who is determined to make her mark in the competition. She has a strong sense of style and an eye for detail that cant be ignored.",
        "Sarah is an ambitious young woman who is determined to make her mark in the beauty contest. She has an eye for detail and refuses to settle for anything less than perfection.",
        "Rebecca is an outgoing and confident contestant with a sparkle in her eye. She loves the thrill of competition and knows how to make an impression with her unique style.",
        "Jessica is a classic beauty who is determined to outshine her rivals. She has a natural poise and elegance that have earned her plenty of admirers.",
        "Julia is an extroverted performer who loves to show off her talents. She has a passion for fashion and knows how to rock the stage with her infectious energy.",
        "Ellen is a natural beauty who exudes grace and sophistication. Her soft demeanour is often seen as a sign of strength, winning her plenty of admirers.",
        "Megan is a determined and driven contestant who is determined to make her mark. She has a strong sense of style and an eye for detail that cant be ignored.",
        "Joanna is an outgoing and confident contestant who loves to show off her talents. She has a bubbly personality that often wins her admirers and plenty of attention.",
        "Rachel is a talented performer who is determined to make her mark in the competition. She has a unique style and a flair for the dramatic that cant be ignored.",
        "Anna is a classic beauty who loves to showcase her talents. She has a natural poise and elegance that have earned her plenty of admirers.",
        "Jennifer is a devoted and passionate contestant who is determined to make her mark. She has an eye for detail and refuses to settle for anything less than perfection.",
        "Emily is an ambitious young woman who loves to show off her talents. She is determined to make her mark in the competition and is willing to go the extra mile to do so.",
        "Samantha is an outgoing and confident contestant with a sparkling personality. She loves the thrill of competition and knows how to make an impression with her unique style.",
        "Lauren is a talented performer who is determined to make her mark in the competition. She has a passion for fashion and knows how to rock the stage with her infectious energy.",
        "Maria is a classic beauty who exudes grace and elegance. Her soft demeanour is often seen as a sign of strength, winning her plenty of admirers.",
        "Victoria is an ambitious young woman who is determined to make her mark in the competition. She has a strong sense of style and an eye for detail that cant be ignored."
    ]







    function setModalToGirl(girl) {
        document.getElementById('girl_name').textContent = girl.name;
        document.getElementById('girl_info').textContent = girl.info;
        document.getElementById('girl_score').value = girl.score
        document.getElementById('girl_photo').src = 'images/' + girl.id + '.jpg'
        document.getElementById('modal_score').textContent = girl.score
    }

    var girls_array = []
    for (let i = 0; i < GIRLS_AMOUNT; i++) {
        console.log()
        girls_array[i] = new Girl(i, true, false, girls_names[i], 50, girls_info[i])
        if ((i == 3) || (i == 12) || (i == 15) || (i == 13) || (i == 1)) {
            girls_array[i].isAlive = false;
        }
    }

    var active_girl = girls_array[0]
    setModalToGirl(active_girl)
        // console.log(girls_array)
    document.getElementById('girl_name').style.color = 'white'
    document.getElementById('girl_info').style.color = 'white'

    // let elems = document.querySelectorAll('.carousel-item')
    // var elems = document.querySelectorAll('.carousel');
    // var instances = M.Carousel.init(elems, 'noWrap', dist = 100);

    var elems = document.querySelectorAll('.modal');
    let instances = M.Modal.init(elems, open);
    let parent
    let card_height = 140
    let card_width = card_height + 50
    document.getElementById('FirstRow').setAttribute('style', 'margin-left:' + (card_width / 3) + 'px')
    document.getElementById('ThirdRow').setAttribute('style', 'margin-left:' + (card_width / 3) + 'px')
    document.getElementById('FourthRow').setAttribute('style', 'margin-left:' + 2 * (card_width / 3) + 'px')

    for (let i = 0; i < girls_array.length; i++) {

        let card = document.createElement('span')
        card.setAttribute('id', 'card')
        let number = document.createElement('span')
        let name = document.createElement("span")
        number.setAttribute('align', 'top')
        name.setAttribute('align', 'top')

        number.textContent = '#' + girls_array[i].id
        name.textContent = ' ' + girls_array[i].name

        let button = document.createElement('input')
        button.setAttribute('style', 'height: ' + card_height + 'px; width:' + card_width + 'px')


        button.setAttribute('type', 'image')
        button.setAttribute('src', 'images/new_girl.png')
            // button.setAttribute('src', 'images/' + i + '.jpg')
        button.textContent = 'Show more of Girl #' + (i + 1)
        button.setAttribute('data-target', 'modal')
        button.setAttribute('class', 'btn modal-trigger')
        button.style.background = 'transparent'
        button.setAttribute('id', 'girl-button' + i)
        button.setAttribute('align', 'bottom')
        button.onclick = function() {
            girls_array[i].wasVoted = true
            active_girl = girls_array[i]
            setModalToGirl(active_girl)
        }

        let score = document.createElement('span')
        score.setAttribute('class', 'circle')
        score.setAttribute('id', 'score' + girls_array[i].id)
        score.textContent = girls_array[i].score

        // card.appendChild(test_div)
        score.setAttribute('align', 'top')

        number.style.color = 'white'
        name.style.color = 'white'
            // card.appendChild(number)
            // card.appendChild(name)
            // card.appendChild(score)

        // card.appendChild(info_div)
        card.appendChild(button)
        if (i < 9) {
            parent = document.getElementById('FirstRow')
        } else if (i < 18) {
            parent = document.getElementById('SecondRow')
        } else if (i < 26) {
            parent = document.getElementById('ThirdRow')
        } else {
            parent = document.getElementById('FourthRow')
        }
        parent.appendChild(card)
            // parent.appendChild()
    };

    var sendButton = document.createElement("button")
    sendButton.setAttribute('id', 'sendButton')
    sendButton.setAttribute('style', 'margin-left:13%; width: 300px; height: 80px')
    sendButton.textContent = 'OK'


    sendButton.onclick = function() {
        var notVotedGirlsID = []
        for (let i = 0; i < girls_array.length; i++) {
            if (!girls_array[i].wasVoted) {
                notVotedGirlsID.push(i)
            }
        }
        if (!notVotedGirlsID) {
            console.log('Ready to send!')
            let IPxhr = new XMLHttpRequest();
            IPxhr.open('POST', SERVER_IP, true);
            result = ''
            for (let i = 0; i < 5; i++) {
                result += document.getElementById('score' + i).value + '&';
            }
            result = document.getElementById('judge').value + '&' + result;
            console.log(result)
            IPxhr.send(result)

        } else {
            for (let i = 0; i < notVotedGirlsID.length; i++) {
                console.log(notVotedGirlsID[i])
            }
        }
    }

    parent.appendChild(sendButton)


    //Updating Scores on mane page and in text field in modal
    var range = document.getElementById('girl_score')
    range.oninput = function() {
        let score = document.getElementById('score' + active_girl.id)
            // score.textContent = range.value
        active_girl.score = range.value
        document.getElementById('modal_score').textContent = range.value

    }



    //Losers block
    var deleteButton = document.getElementById('remove_girls')
    deleteButton.onclick = function() {
        for (var i = 0; i < GIRLS_AMOUNT; i++) {
            if (!girls_array[i].isAlive) {
                document.getElementById('girl-button' + i).disabled = true;
                document.getElementById('girl-button' + i).style.filter = 'grayscale(1)'
                console.log('norm')

            } else {
                // document.getElementById('girl-button' + i).setAttribute('class', "btn disabled")
            }

        }
    }