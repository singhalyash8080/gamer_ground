const queryString = window.location.search

const game_id = (queryString.split('?')[1])

const url = 'https://gamer-ground-backend.herokuapp.com/games/getGameDetailsById'

var requestOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ "id": game_id })
}

var game = ''
var rating = ''
var description = ''
var image = ''

fetch(url, requestOptions)
    .then(data => { return data.json() })
    .then((resp) => {

        console.log(resp)
        $('.one-rating').text(resp.rating)

        $('.one').css('background-image', 'url(' + resp.image + ')')

        $('.one').css('background-repeat', 'no-repeat')
        $('.one').css('background-size', '100% 100%')

        $('.one-head').text(resp.name)

        image = resp.image

        game = resp.name

        rating = resp.rating

        if (resp.rating < 2) {

            $('.one-star2').addClass('is-fade')
            $('.one-star3').addClass('is-fade')
            $('.one-star4').addClass('is-fade')
            $('.one-star5').addClass('is-fade')

        }
        else if (resp.rating < 3) {
            $('.one-star3').addClass('is-fade')
            $('.one-star4').addClass('is-fade')
            $('.one-star5').addClass('is-fade')
        }
        else if (resp.rating < 4) {
            $('.one-star4').addClass('is-fade')
            $('.one-star5').addClass('is-fade')
        }
        else {
            $('.one-star5').addClass('is-fade')
        }

        $('.game-det').text(resp.description)

        description = resp.description

        if (resp.requirements[0] == null) {
            $('.game-req').text('---')
        }
        else {
            $('.game-req').html(resp.requirements[0].minimum)

        }

        var store_links = '<ul>'

        for (let i = 0; i < resp.stores.length; i++) {

            store_links += '<li><a style="text-decoration:underline;" href="' + (resp.stores[i].url) + '" target="_blank">' + (resp.stores[i].url) + '</a></li><br>'

        }

        store_links += '</ul>'

        $('.game-stores').html(store_links)


        $('.game-link').html('<a style="text-decoration:underline;" href="' + (resp.link) + '" target="_blank">' + (resp.link) + '</a><br>')


    })

$('.add-to-favourites').click(function () {

    var requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "id":game_id,
            "rating": rating,
            "name": game,
            "description": description,
            "image": image
        })


    }

    const url = 'https://gamer-ground-backend.herokuapp.com/games/storeGame'


    fetch(url, requestOptions)
        .then(data => { return data.json() })
        .then((resp) => {
            alert('Game added to fvourites successfully!')
        })

})