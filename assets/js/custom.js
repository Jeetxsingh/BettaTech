if (localStorage.getItem(‘cookieSeen’) != ‘shown’) {
    $(‘.cookie-banner’).delay(2000).fadeIn();
    localStorage.setItem(‘cookieSeen’,’shown’)
  };
  $(‘.close’).click(function() {
    $(‘.cookie-banner’).fadeOut();
  })
fetch('https://api.ipregistry.co/?key=tryout')
    .then(function (response) {
        return response.json();
    })
    .then(function (payload) {
        console.log(payload.location.country.name + ', ' + payload.location.city);
    });