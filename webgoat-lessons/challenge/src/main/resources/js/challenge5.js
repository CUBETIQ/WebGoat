$(document).ready(function () {
    getVotings();
    login('Guest');
})

function login(user) {
    $("#name").text(user);
    $.get("votings/login?user=" + user, function (result, status) {
    });
    getVotings();
}

var html = '<a href="#" class="list-group-item ACTIVE">' +
    '<div class="media col-md-3">' +
    '<figure> ' +
    '<img class="media-object img-rounded" src="images/IMAGE_SMALL" alt="placehold.it/350x250"/>' +
    '</figure>' +
    '</div> ' +
    '<div class="col-md-6">' +
    '<h4 class="list-group-item-heading">TITLE</h4>' +
    '<p class="list-group-item-text">INFORMATION</p>' +
    '</div>' +
    '<div class="col-md-3 text-center">' +
    '<h2>NO_VOTES' +
    '<small> votes</small>' +
    '</h2>' +
    '<button type="button" class="btn BUTTON btn-lg btn-block">Vote Now!</button>' +
    '<div class="stars"> ' +
    '<span class="glyphicon glyphicon-star"></span>' +
    '<span class="glyphicon glyphicon-star"></span>' +
    '<span class="glyphicon glyphicon-star"></span>' +
    '<span class="glyphicon glyphicon-star-empty"></span>' +
    '</div>' +
    '<p>Average AVERAGE<small> /</small>4</p>' +
    '</div>' +
    '<div class="clearfix"></div>' +
    '</a>';

function getVotings() {
    $("#votesList").empty();
    $.get("votings/", function (result, status) {
        for (var i = 0; i < result.length; i++) {
            var voteTemplate = html.replace('IMAGE_SMALL', result[i].imageSmall);
            if ( i === 0 ) {
                voteTemplate = voteTemplate.replace('ACTIVE', 'active');
                voteTemplate = voteTemplate.replace('BUTTON', 'btn-default');
            } else {
                voteTemplate = voteTemplate.replace('ACTIVE', '');
                voteTemplate = voteTemplate.replace('BUTTON', 'btn-primary');
            }

            voteTemplate = voteTemplate.replace('TITLE', result[i].title);
            voteTemplate = voteTemplate.replace('INFORMATION', result[i].information || '');
            voteTemplate = voteTemplate.replace('NO_VOTES', result[i].numberOfVotes || '');
            $("#votesList").append(voteTemplate);
        }
    })
}
