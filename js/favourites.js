
const url = 'https://gamer-ground-backend.herokuapp.com/games/getStoredGames'

var requestOptions = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    }
}

var results = []
var games_range = 0
var ob = ['one', 'two', 'three', 'four']


fetch(url, requestOptions)
    .then(data => { return data.json() })
    .then(res => {
        results = (res)
        console.log(results)

        if (results.length == 0) {
            $('.first').css('display', 'none')
            $('.second').css('display', 'none')
            $('.third').css('display', 'none')
            $('.fourth').css('display', 'none')
            $('.site-btn').css('display', 'none')

            ob = []

        }
        else if (results.length == 1) {
            $('.second').css('display', 'none')
            $('.third').css('display', 'none')
            $('.fourth').css('display', 'none')

            $('.site-btn').css('display', 'none')
            ob = ['one']

        }
        else if (results.length == 2) {
            $('.third').css('display', 'none')
            $('.fourth').css('display', 'none')

            $('.site-btn').css('display', 'none')
            ob = ['one', 'two']

        }
        else if (results.length == 3) {
            $('.fourth').css('display', 'none')

            $('.site-btn').css('display', 'none')
            ob = ['one', 'two', 'three']

        }

        if (ob.length == 0) {
            alert('No games found in favourites ! Please add a game from home page')

            window.location.replace('./index.html')

        }


        for (let i = 0; i < ob.length; i++) {

            $('.' + ob[i]).css('background-image', 'url(' + results[games_range + i].image + ')')

            $('.' + ob[i]).css('background-repeat', 'no-repeat')
            $('.' + ob[i]).css('background-size', '100% 100%')



            $('.' + ob[i] + '-head').text(results[games_range + i].name)

            $('.' + ob[i] + '-rating').text(results[games_range + i].rating)

            $('.' + ob[i] + '-id').text(results[games_range + i].id)

            $('.' + ob[i] + '-text').text(results[games_range + i].description)


            if (results[games_range + i].rating < 2) {

                $('.' + ob[i] + '-star2').addClass('is-fade')
                $('.' + ob[i] + '-star3').addClass('is-fade')
                $('.' + ob[i] + '-star4').addClass('is-fade')
                $('.' + ob[i] + '-star5').addClass('is-fade')

            }
            else if (results[games_range + i].rating < 3) {
                $('.' + ob[i] + '-star3').addClass('is-fade')
                $('.' + ob[i] + '-star4').addClass('is-fade')
                $('.' + ob[i] + '-star5').addClass('is-fade')
            }
            else if (results[games_range + i].rating < 4) {
                $('.' + ob[i] + '-star4').addClass('is-fade')
                $('.' + ob[i] + '-star5').addClass('is-fade')
            }
            else {
                $('.' + ob[i] + '-star5').addClass('is-fade')
            }

        }

    })

$(".site-btn").click(function () {

    games_range += 4

    if ((games_range + 4) > results.length) return

    for (let i = 0; i < ob.length; i++) {

        $('.' + ob[i]).css('background-image', 'url(' + results[games_range + i].image + ')')

        $('.' + ob[i]).css('background-repeat', 'no-repeat')

        $('.' + ob[i]).css('background-size', '100% 100%')


        $('.' + ob[i] + '-head').text(results[games_range + i].name)

        $('.' + ob[i] + '-rating').text(results[games_range + i].rating)

        $('.' + ob[i] + '-id').text(results[games_range + i].id)

        $('.' + ob[i] + '-text').text(results[games_range + i].description)

        if (results[games_range + i].rating < 2) {

            $('.' + ob[i] + '-star2').addClass('is-fade')
            $('.' + ob[i] + '-star3').addClass('is-fade')
            $('.' + ob[i] + '-star4').addClass('is-fade')
            $('.' + ob[i] + '-star5').addClass('is-fade')

        }
        else if (results[games_range + i].rating < 3) {
            $('.' + ob[i] + '-star3').addClass('is-fade')
            $('.' + ob[i] + '-star4').addClass('is-fade')
            $('.' + ob[i] + '-star5').addClass('is-fade')
        }
        else if (results[games_range + i].rating < 4) {
            $('.' + ob[i] + '-star4').addClass('is-fade')
            $('.' + ob[i] + '-star5').addClass('is-fade')
        }
        else {
            $('.' + ob[i] + '-star5').addClass('is-fade')
        }

    }

})

$(".get-details").click(function () {

    var num = this.className.split(' ')[0].split('-')[0]

    var id = ($('.' + num + '-id').html())

    window.location.replace('./game.html?' + id)

})





