window.fbAsyncInit = function() {
   const accessToken = 'EAAYuEXSiDrYBAEVNS3lNYC1dZCgtTJMiPHyavV7bHUtGUPOTJ8l6okh781ELuKyV3MVWOz3G9oZAb1tfq5uPDUBHLrYZBd1yyyf4E4EL60ZCGYNLcZCuwWPgGW3ZC07PL4pQkw1uC5YKkhAPQ8pZCTNEi7JvbCA3ONdCXHDnAXX3wZDZD';

   FB.init({
     appId      : '1739502366363318',
     secret     : '74dd45d1396c551e9f35567f22223cdb',
     status     : true,
     cookie     : true,
     xfbml      : true,
     oauth      : true,
     version    : 'v2.8'
   });

   FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        console.log('Logged in.');
      }
      else {
        console.log('initiate FB login...');
        FB.login();
        console.log('FB.login() should have run');
      }
    });

   FB.api(
    '/me?access_token=' + accessToken,
    'GET',
    {"fields":"id,name,events"},
    function(response) {
        console.log(response);
        /*
        console.log(response.events.data[0]);
        console.log('Event name: ', response.events.data[0].name);
        console.log('Starts: ', response.events.data[0].start_time);
        console.log('Ends: ', response.events.data[0].end_time);
        console.log('Description: ', response.events.data[0].description);
        console.log('RSVP Status: ', response.events.data[0].rsvp_status);
        console.log('Event ID: ', response.events.data[0].id);
        //console.log(response.events.data[0].place);
        console.log(' ');
        console.log('Where');
        //console.log(response.events.data[0].place.location);
        console.log('Location name: ', response.events.data[0].place.name);
        console.log(response.events.data[0].place.location.street);
        console.log(response.events.data[0].place.location.city + ' ' + response.events.data[0].place.location.state + ', '+ response.events.data[0].place.location.zip);
        console.log(response.events.data[0].place.location.country);
        console.log(response.events.data[0].place.location.latitude);
        console.log(response.events.data[0].place.location.longitude);
        console.log('Place ID: ', response.events.data[0].place.id);*/
    }
  );
 };
