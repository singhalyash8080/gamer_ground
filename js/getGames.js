
const url = 'https://gamer-ground-backend.herokuapp.com/games/getGames'

var requestOptions = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    }
}

var results = []
var games_range = 0
const ob = ['one', 'two', 'three', 'four']


fetch(url, requestOptions)
    .then(data => { return data.json() })
    .then(res => {
        results = (res.results)
        // console.log(results)

        for (let i = 0; i < ob.length; i++) {

            $('.' + ob[i]).css('background-image', 'url(' + results[games_range + i].background_image + ')')

            $('.' + ob[i]).css('background-repeat', 'no-repeat')
            $('.' + ob[i]).css('background-size', '100% 100%')



            $('.' + ob[i] + '-head').text(results[games_range + i].name)

            $('.' + ob[i] + '-rating').text(results[games_range + i].rating)

            fetch("https://rawg-video-games-database.p.rapidapi.com/games/" + results[games_range + i].id, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
                    "x-rapidapi-key": "1253607fb3mshdbde93c187c0d21p18caa6jsnb04a488a9d9f"
                }
            })
                .then(response => {
                    return (response.json());
                })
                .then(res => {

                    var text = (res.description).split('.')

                    // console.log(text)

                    var modifiedText = ''

                    for (let i = 0; i < text.length; i++) {

                        if (i == 3) break

                        modifiedText += text[i]

                    }

                    $('.' + ob[i] + '-text').html(modifiedText)

                })
                .catch(err => {
                    console.log(err);
                })

            // $('.one-star4').addClass('is-fade')


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

        $('.' + ob[i]).css('background-image', 'url(' + results[games_range + i].background_image + ')')

        $('.' + ob[i]).css('background-repeat', 'no-repeat')

        $('.' + ob[i]).css('background-size', '100% 100%')


        $('.' + ob[i] + '-head').text(results[games_range + i].name)

        $('.' + ob[i] + '-rating').text(results[games_range + i].rating)

        fetch("https://rawg-video-games-database.p.rapidapi.com/games/" + results[games_range + i].id, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
                "x-rapidapi-key": "1253607fb3mshdbde93c187c0d21p18caa6jsnb04a488a9d9f"
            }
        })
            .then(response => {
                return (response.json());
            })
            .then(res => {

                var text = (res.description).split('.')


                var modifiedText = ''

                for (let i = 0; i < text.length; i++) {

                    if (i == 3) break

                    modifiedText += text[i]

                }

                $('.' + ob[i] + '-text').html(modifiedText)

            })
            .catch(err => {
                console.log(err);
            })

        // $('.one-star4').addClass('is-fade')


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





