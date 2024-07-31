/* 
Synchronous fns- As the name suggests i.e to be in  sequence,synchronous functions get executed one by one.
they have to wait for the earlier task to get executed ,so that their execution starts

asynchronous fns-we can understand itas k all tha task are started together,that is no task is blocked for further execution,and whichever
 tasks get completed first it is returned



how to know code is async or sync:

-setTimeout,setInterval,promises,fetch,axios,XMLHttpRequest

-if these are used then code is async,else it will be sync

-main motive of async code is in cases where we do not know how much time it will take to
get the response of request,so whenever response comes it executes further tasks in respect
to that response

--for ex a photo req is generated in insta ,so whenever photo comes then only we will show it,
rather than showing it without getting any response,so we will wait till photo comes as we dont know how much time it
may take to get photo in response



how java is async while being single threaded:

-event looping















*/