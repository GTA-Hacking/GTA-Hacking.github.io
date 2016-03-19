$(document).ready(main);

usernames = [ 'James' , 'Manson' , 'loki11' , 'kfCrew' , 'OMG-TY' , 'July♥' , 'Legit-Generator-OMG' , 'John' , 'robin' , 'Vane C' ];
minPostTime = 10;
maxPostTime = 40;
refreshRate = randomRange(minPostTime*1000, maxPostTime*1000);

websiteName = '';
website = '';
amount = [ '50.000.000' , '25.000.000' , '130.000.000' , '95.000.000' ];
resources = [ 'Money'];

punctuation = [ '! ' , '. ' , '.. ' , ' ' ];

wowKeywords = [ 'Wow' , 'WOW' , 'wow' ];

thisKeywords = [ 'This is ' , 'this is ' , 'This Generator is ' , 'This cheat is ' , 'this Gen is ' , 'this cheat is ' ];
thisKeywords2 = [ 'this ' , 'this is cool ' , 'this cheat ' , 'it ' ];

adverbKeywords = [ 'freaking ' , 'fucking ' , 'fcking ' , 'fking ' , 'bloody ' ];
adjectivesKeywords = [ 'dope' , 'awesome' , 'amazing' , 'genius' , 'incredible' , 'the best' ];

iKeywords = [ 'I cannot ' , 'i cannot ' , "I can't " , "I don't " , "i can't " , "i don't " , ' I can not ' , 'I do not ' , 'i can not ' , 'i do not ' ];
workingKeywords = [ 'believe that this actually works' , 'believe that this is actually working' , 'believe that this works' , 'believe that this is working' , 'actually believe this works' , 'actually believe this is working' , 'actually believe that this is working' , 'believe that this is not fake and actually works' , 'believe that this actually works and is not fake' , 'actually believe that this works and is not fake' , 'actually believe that this is not fake and works' , 'believe that this actually not fake and works' ];
conjunctionKeywords = [ 'but ' , 'however ' , 'though ' , 'unfortunately ' , ' unfortunately though ' , 'except ' ];
conKeywords = [ 'did take a little while' , 'took some time' , 'did take some time' , 'took a little while' ];

meKeywords = [ 'i ' , 'I ' , 'i just ' , 'I just ' ];
gotKeywords = [ 'got ' , 'recieved ' , 'generated ' ];

thanksKeywords = [ 'Thanks' , 'thanks' , 'Thank you' , 'thank you' , 'Thank you so much' , 'thank you so much' , 'tysm' , 'TYSM' ];

emotes1 = [ ':D ' , ':3 ' , ':) ' , 'c: ' ];
emotes2 = [ '=D ' , '=3 ' , '=) ' , 'c= ' ];

function main() {
	if( readCookie('commented') != null ) {
		$('#commentUsernameLabel').addClass('state-disabled');
		$('#commentUsername').attr('disabled' , '');
		$('#commentCommentLabel').addClass('state-disabled');
		$('#commentComment').attr('disabled' , '');
	}

	if( readCookie('comment1Cookie') != null && readCookie('username1Cookie') != null ) {
		username1 = readCookie('username1Cookie');
		username2 = readCookie('username2Cookie');
		username3 = readCookie('username3Cookie');
		usernameArray = [ username1 , username2 , username3 ];

		timePosted11 = randomRange(minPostTime*1000, maxPostTime*1000);
		timePosted22 = randomRange(minPostTime*1000, timePosted11);
		timePosted33 = randomRange(minPostTime*1000, timePosted22);
		timePosted1 = timePostedTimer(timePosted11);
		timePosted2 = timePostedTimer(timePosted22);
		timePosted3 = timePostedTimer(timePosted33);
		timePostedArray = [ timePosted1 , timePosted2 , timePosted3 ];

		comment1 = readCookie('comment1Cookie');
		comment2 = readCookie('comment2Cookie');
		comment3 = readCookie('comment3Cookie');
		commentsArray = [ comment1 , comment2 , comment3 ];
	} else {
		username1 = randomKeyword(usernames);
		username2 = randomKeyword(usernames);
		while( username2 == username1 ) {
			username2 = randomKeyword(usernames);
		}
		username3 = randomKeyword(usernames);
		while( username3 == username2 ) {
			username3 = randomKeyword(usernames);
		}
		usernameArray = [ username1 , username2 , username3 ];

		timePosted11 = randomRange(minPostTime*1000, maxPostTime*1000);
		timePosted22 = randomRange(minPostTime*1000, timePosted11);
		timePosted33 = randomRange(minPostTime*1000, timePosted22);
		timePosted1 = timePostedTimer(timePosted11);
		timePosted2 = timePostedTimer(timePosted22);
		timePosted3 = timePostedTimer(timePosted33);
		timePostedArray = [ timePosted1 , timePosted2 , timePosted3 ];

		comment1 = newCommentCreator(); 
		comment2 = newCommentCreator();
		comment3 = newCommentCreator();
		commentsArray = [ comment1 , comment2 , comment3 ];

		createCookie( 'username1Cookie' , username1 , 0.003 );
		createCookie( 'username2Cookie' , username2 , 0.003 );
		createCookie( 'username3Cookie' , username3 , 0.003 );

		createCookie( 'comment1Cookie' , comment1 , 0.003 );
		createCookie( 'comment2Cookie' , comment2 , 0.003 );
		createCookie( 'comment3Cookie' , comment3 , 0.003 );
	}

	updateComments();

	var commentsTimer = setInterval( timer, 1000 );
	var commentsRefresh = setInterval( getNewComment, refreshRate );

	$('#commentSubmit').click(submitEvent);
}

function getNewComment () {
	username1 = username2;
	username2 = username3;
	username3 = randomKeyword(usernames);
	while( username3 == username2 || username3 == username1 ) {
		username3 = randomKeyword(usernames);
	}
	usernameArray = [ username1 , username2 , username3 ];

	timePosted11 = timePosted22;
	timePosted22 = timePosted33;
	timePosted33 = 1000;
	timePosted1 = timePostedTimer(timePosted11);
	timePosted2 = timePostedTimer(timePosted22);
	timePosted3 = timePostedTimer(timePosted33);
	timePostedArray = [ timePosted1 , timePosted2 , timePosted3 ];

	comment1 = comment2;
	comment2 = comment3;
	comment3 = newCommentCreator();
	commentsArray = [ comment1 , comment2 , comment3 ];

	createCookie( 'username1Cookie' , username1 , 0.003 );
	createCookie( 'username2Cookie' , username2 , 0.003 );
	createCookie( 'username3Cookie' , username3 , 0.003 );

	createCookie( 'comment1Cookie' , comment1 , 0.003 );
	createCookie( 'comment2Cookie' , comment2 , 0.003 );
	createCookie( 'comment3Cookie' , comment3 , 0.003 );

	refreshRate = randomRange(minPostTime*1000, maxPostTime*1000);
	updateComments();
}

function newCommentCreator() {
	emotesType = Math.floor((Math.random() * 2) + 1);
	part1 = part1Creator();
	part2 = part2Creator();
	part3 = part3Creator();
	part4 = part4Creator();
	part5 = part5Creator();

	allParts = [ part2 , part3 , part4 , part5 ];
	allPartsShuffled = shuffle(allParts);

	newComment = part1 + allPartsShuffled.join('');

	if( newComment == '' ) {
		return newCommentCreator();
	} else {
		return newComment;
	}
}

function part1Creator() {
	if( Math.random() > 0.8 ) {
		return randomKeyword(wowKeywords) + randomKeyword(punctuation) + emote();
	} else {
		return '';
	}
}

function part2Creator() {
	if( Math.random() > 0.4 ) {
		if( Math.random() > 0.5) {
			return randomKeyword(thisKeywords) + randomKeyword(adverbKeywords) + randomKeyword(adjectivesKeywords) + randomKeyword(punctuation) + emote();
		} else {
			return randomKeyword(thisKeywords) + randomKeyword(adjectivesKeywords) + randomKeyword(punctuation) + emote();
		}
	} else {
		return '';
	}
}

function part3Creator() {
	if( Math.random() > 0.6 ) {
		return thanks() + emote();
	} else {
		return '';
	}
}

function part4Creator() {
	if( Math.random() > 0.6 ) {
		if( Math.random() > 0.7 ) {
			return randomKeyword(iKeywords) + randomKeyword(workingKeywords) + ' ' + randomKeyword(conjunctionKeywords) + randomKeyword(thisKeywords2) + randomKeyword(conKeywords) + randomKeyword(punctuation) + emote();
		} else {
			return randomKeyword(iKeywords) + randomKeyword(workingKeywords) + randomKeyword(punctuation) + emote();
		}
	} else {
		return '';
	}
}

function part5Creator() {
	if( Math.random() > 0.7 ) {
		return randomKeyword(meKeywords) + randomKeyword(gotKeywords) + randomKeyword(amount) + ' ' + randomKeyword(resources) + randomKeyword(punctuation) + emote();
	} else {
		return '';
	}
}

function randomKeyword(array) {
	return array[ Math.floor(( Math.random() * array.length )) ];
}

function emote() {
	if( emotesType == 1 ){
		if( Math.random() > 0.3 ) {
			return '';
		} else {
			return randomKeyword(emotes1);
		}
	} else {
		if( Math.random() > 0.3 ) {
			return '';
		} else {
			return randomKeyword(emotes2);
		}
	}
}

function thanks() {
	if( Math.random() > 0.35 ) {
		return randomKeyword(thanksKeywords) + randomKeyword(punctuation);
	} else {
		if( Math.random() > 0.5 ) {
			return randomKeyword(thanksKeywords) + ' ' + website + randomKeyword(punctuation);
		} else {
			return randomKeyword(thanksKeywords) + ' ' + websiteName + randomKeyword(punctuation);
		}
	}
}

function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function updateComments() {
	for(i = 0; i <= 3; i++ ){
		$('#username' + i).html( usernameArray[i - 1] );
		$('#comment' + i).html(commentsArray[i - 1] + '</br> </br>');
		$('#timePosted' + i ).html( timePostedArray[i - 1] );
	}
}

function timePostedTimer(timePosted) {
	var secondsPosted = timePosted/1000;
	if( secondsPosted < 60 ){
		return "Posted a few seconds ago";
	} else if( secondsPosted >= 60 && secondsPosted < 120 ){
		return "Posted a minute ago";
	}
	else {
		var minutesPosted = Math.floor(secondsPosted/60);
		return "Posted " + minutesPosted + " minutes ago";
	}
}

function randomRange(min, max) {
	return Math.round( (Math.random() * (max - min) + min) );
}

function timer() {
	timePosted11 = timePosted11 + 1000;
	timePosted22 = timePosted22 + 1000;
	timePosted33 = timePosted33 + 1000;

	timePosted1 = timePostedTimer(timePosted11);
	timePosted2 = timePostedTimer(timePosted22);
	timePosted3 = timePostedTimer(timePosted33);
	timePostedArray = [ timePosted1 , timePosted2 , timePosted3 ];

	for(i = 0; i <= 3; i++ ){
		$('#timePosted' + i ).html( timePostedArray[i - 1] );
	}
}

function submitEvent() {
	if( $('#commentUsername').val() != '' && $('#commentComment').val() != '' ){
		username1 = username2;
		username2 = username3;
		username3 = $('#commentUsername').val()
		usernameArray = [ username1 , username2 , username3 ];

		timePosted11 = timePosted22;
		timePosted22 = timePosted33;
		timePosted33 = 1000;
		timePosted1 = timePostedTimer(timePosted11);
		timePosted2 = timePostedTimer(timePosted22);
		timePosted3 = timePostedTimer(timePosted33);
		timePostedArray = [ timePosted1 , timePosted2 , timePosted3 ];

		comment1 = comment2;
		comment2 = comment3;
		comment3 = $('#commentComment').val();
		commentsArray = [ comment1 , comment2 , comment3 ];

		updateComments();

		createCookie('commented','',24);

		$('#commentUsername').val('');
		$('#commentComment').val('');
		$('#commentUsernameLabel').addClass('state-disabled');
		$('#commentUsername').attr('disabled' , '');
		$('#commentCommentLabel').addClass('state-disabled');
		$('#commentComment').attr('disabled' , '');
	} else {
		$('#commentUsernameLabel').addClass('state-error');
		$('#commentCommentLabel').addClass('state-error');
	}
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}	

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}