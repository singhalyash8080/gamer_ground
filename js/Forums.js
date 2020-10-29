var users_range = 0

var comments = []

const url = 'https://gamer-ground-backend.herokuapp.com/games/getAllComments'

var requestOptions = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    }
}

fetch(url, requestOptions)
    .then(data => { return data.json() })
    .then(res => {
        // console.log(res)

        $('.community-top-title').text('All members (' + res.length + ')')

        var count = 0

        for (let i = users_range; i < res.length; i++) {


            $('.community-post-list').append('<li><div class="community-post"><div class="author-avator"> </div><div class="post-content"><h5>' + res[i].name + '<span>posted an update for <b>' + res[i].game + '</b> </span></h5><p>' + res[i].comment + '</p></div></div></li>')

            count += 1

            if (count == 5) {
                users_range += 4
                break
            }

        }

        $('.author-avator').css('background-image', 'url("https://www.pikpng.com/pngl/m/16-168770_user-iconset-no-profile-picture-icon-circle-clipart.png")')
        $('.author-avator').css('background-repeat', 'no-repeat')
    
        $('.author-avator').css('background-size', '100% 100%')

    })

function loadMoreComments() {

    const url = 'https://gamer-ground-backend.herokuapp.com/games/getAllComments'

    var requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    }

    fetch(url, requestOptions)
        .then(data => { return data.json() })
        .then(res => {
            // console.log(res)

            comments = res

            $('.community-post-list').empty()


            var count = 0

            for (let i = users_range + 1; i < comments.length; i++) {

                $('.community-post-list').append('<li><div class="community-post"><div class="author-avator"> </div><div class="post-content"><h5>' + res[i].name + '<span>posted an update for <b>' + res[i].game + '</b> </span></h5><p>' + res[i].comment + '</p></div></div></li>')

                count += 1

                if (count == 5) {
                    users_range += 4
                    break
                }

            }

            
            $('.author-avator').css('background-image', 'url("https://www.pikpng.com/pngl/m/16-168770_user-iconset-no-profile-picture-icon-circle-clipart.png")')
            $('.author-avator').css('background-repeat', 'no-repeat')
        
            $('.author-avator').css('background-size', '100% 100%')
        })

}

function searhGameComment() {


    const url = 'https://gamer-ground-backend.herokuapp.com/games/getCommentByGameName'

    var body = {
        "game": ($('#searhGameComment').val()).toUpperCase()
    }

    var requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    }

    fetch(url, requestOptions)
        .then(data => { return data.json() })
        .then(res => {
            // console.log(res)

            if (res.length > 0) {
                $('.community-post-list').empty()
            }
            else{

                alert('No comment on this game exists !')
            }


            for (let i = 0; i < res.length; i++) {

                $('.community-post-list').append('<li><div class="community-post"><div class="author-avator"> </div><div class="post-content"><h5>' + res[i].name + '<span>posted an update for <b>' + res[i].game + '</b> </span></h5><p>' + res[i].comment + '</p></div></div></li>')

            }

            $('.author-avator').css('background-image', 'url("https://www.pikpng.com/pngl/m/16-168770_user-iconset-no-profile-picture-icon-circle-clipart.png")')
            $('.author-avator').css('background-repeat', 'no-repeat')
        
            $('.author-avator').css('background-size', '100% 100%')

        })


}

function addComment() {

    console.log('yes')

    const url = 'https://gamer-ground-backend.herokuapp.com/games/addComment'

    var body = {
        "name": ($('#username').val()),
        "game": ($('#game').val()).toUpperCase(),
        "comment": ($('#cmnt').val())

    }

    console.log(body)

    var requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    }

    fetch(url, requestOptions)
        .then(() => {


            alert('Comment submitted succesfully !')
        })
        .catch(() => {
            alert('Error submitting comment! Try again')
        })


}