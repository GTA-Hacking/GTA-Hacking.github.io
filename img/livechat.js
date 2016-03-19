// JavaScript Document

$(document).ready(function() {
	
	  /**********************/
	 /*** BOT USER NAMES ***/
	/**********************/
  
	botusernames = [ "Anonymous" ];
	botusernames2 = [ "Anonymous" ];
	botusernames3 = [ "Anonymous" ];
	botusernames4 = [ "Anonymous" ];
	botusernames5 = [ "Anonymous" ];
	botusernames6 = [ "Anonymous" ];
	botusernames7 = [ "John" ];
	botusernames8 = [ "Paul" ];
	botusernames9 = [ "James" ];

	
	
	  /**********************/
	 /*** RESPONSE TIMES ***/
	/**********************/
	
	maximumresponsetime = 15;
	minimumresponsetime = 3;

	  /***********************/
	 /*** PRECONVERSATION ***/
	/***********************/
	
	setTimeout( botconvo, 500 );
	
	  /*************************************/
	 /*** PRECONVERSATION RESPOSNE TIME ***/
	/*************************************/
	
	pre_conv_startup_time = 2;
	pre_conv_responsetime = 4;
	
	  /********************************/
	 /*** PRECONVERSATION MESSAGES ***/
	/********************************/
	
	botmessages = ["I love this generator, generated myself 50,000,000 $!"
	,"Is this really a scam...",
	"it´s not scam mate ;)",
	"I don't know, let me try...be back in a sec",
	"kk, i'll wait...",
	"guys i use this daily :P",
	"Nice work admin , tnx for this awsome generator",
	"it actually works! OMG!",
	"Doood it works, I used it 5 times today!",
	"I want the gta v online money but i don´t wanna RP what i need to do please answer im 14 years oldtimer and i from Netherland",
    "put just money , and in rp just put 0  , i just get 35 mil $$$",
    "ohhh , ok i try now tnx",
    "guys it´s really working? and is safe??",
    "mate i use this generator from 2 months and i not get bann and nothing , but use smart , just 30 mil or 50 mil MAXIM / day and SPLIT in 2 times , now 20 mil and after 5 min again 20 mil , SORRY  FOR MY ENGLISH is not my native language  im from FRANCE",
    "ohhh , ok mate",
    "guys pls help me, i need to complete a survey :((((",
    "bro , you need to make one survey , but it´s easy , i just complete with my mobile , it´s take 5 sec. ;)",
    "nice update with Live Chat and i get my money after 3 min :P xD",
    "guys please send me some $$$$$$$$$$$$ , i don´t know how to do it",
    "OMG go and sleep this game is not for you",
    "please man plsssss send me some $$$$$$$$$$$$",
    "Go and play Mario ))))))))))",
    "Ohhh yeaaaahhhh i just get my money :3 :3",
    "))))) i get daily 20 mil from this generator :P",
    "Ohhh xD xD , well this is my first time :)",
    "nice generator , i just Share this awsome site on my Facebook Group",
    "Do I really have to do the SPAM Verification for get my rp and cash?",
    "yes mate , but with mobile is take 10 seconds ;)",
    "but it´s safe ???",
    "in Netherland is safe , i use this weekly ;)",
    "I´m from France ...",
    "Works great in USA",
    "it´s working in France ;)",
    "ohhh , ok i just go and put my number phone or what i need to do??",
    "Nice work admin",
    "yes mate , just click on one offer and complete it , sometimes it´s with Email or with Code from Mobile depends what country, in france is with mobile ;) sorry for my english",
	"Why do I see stupid survey?",
	"I don't see a survey",
	"At first you have to do survey, but after that, no survey. Awesome",
	"These surveys are really easy, just put in your email usually or with mobile number , depends the country",
	"I love this site :3",
	"awesome!!",
	"not sharing this site with anyone ;) :P",
	"Damn this generator really works, cool!",
	"guys i tryed from pc first and he not work , but i make from Mobile and i get my money and rp , ty so so so much admin , sorry for my english im from Germany",
    "I get my money , tomorow i make again :-*",
    "me 2",
    "Always Outstanding! Highly Recommend this Generator! He is so awesome. I am a repeat tomorow again , i get 80.000.000 / day with this generator I shared on my GTA 5 France Groupe ;) Best Regards admin",
    "I tried to get it working but I cant … pls help me , i have 11 years",
    "OMG 11 years ? Go and play with your brother if you have )))))",
    "I have , but it´s 3 years old :P xD",
    "wtf i´m 14 years and i play this game and btw , just complete one survey and you get $$$$$$$$$$ ;)",
    "I have complete Yesterday and Today AGAIN , yesterday i get 50.000.000 and Today i get 70.000.000 Awsome !!!",
    "Nice , for me it´s the first time :P",
    "I shared in My group on Netherland , i get my money and rp tnx for update admin !!",
    "OOOppppsss i complete the offer in 1 min but i´m so stupid because i put just 2 mil in generator , and i get 2 mil :P :))))))))) it´s ok if i complete again ?",
    "yes mate you can complete again , i make it 3 times today :P",
    "is there anyway you can do this for me please",
    "NO :))",
    "How can I do this ?",
    "mate , just go and put your gamertag , then Amount RP and Money and complete the Spam Verification , for me and for my friends , working",
    "Buuaahhh , With Online Generator it´s Better , i wait too much for this , now in every day i put 90 mil in my account :P",
    "Ty admin for all your work , i just want to tell you , for Netherland it´s working great",
    "I don´t think if admin it´s here , he can´t watch on Live chat every moment, my english is not my native language xD xD :P",
	"Wow this really is sick!",
	"Well what can I do for more Money? :(",
	"Yay now I wont blow even MORE money on this game!",
	"what about sucking something hehe",
	"Time to upgrade my weapons woot woot!",
	"does this really work?" , 
	"let me check" ,
	"yeah buddy it's working",
	"do anyone want to add me? hehe",
	"does*",
	"no",
	":))))))",
	"haha",
	"come on i'll give u free Money hahaha",
	"no ty i already have this site :DDD",
	":DD",
	"does this add the stuff instantly?",
	"wooooah nvm it did lol",
	"anyone playing LoL here?",
	"dude wtf are u talking about",
	"yeah this is a site for GTA5 why do u bring up such a topic like fucking LoL",
	"well ... sorry mate",
	"we have play GTA 5 here who cares about LoL",
	"i do dick",
	"go fck urself..",
	"lol this chat is full of trolls",
	"people is this working?",
	"yeah it is",
	"how do u know?",
	"yes it is working brooo",
	"because it worked for everyone so far , just test it God...!!!",
	"OMG THIS IS FUCKING LEGIT!!!!!! Really Tnx !!!"];
	
	  /************************/
	 /*** RANDOM SHOUTOUTS ***/
	/************************/
	
	maxshouttime = 1;
	minshouttime = 1;
	numbergenerated = ["100.000.000" , "10.000.000" , "100.000.000" , "10.000.000" , "35.000.000" , "25.000.000" , "70.000.000" , "30.000.000" , "80.000.000" , "50.000.000" , "65.000.000" , "90.000.000" , "2.000.000" , "125.000.000"];
	listofresources = ["$"];
	
	  /*****************/
	 /*** RESPONSES ***/
	/*****************/
	
	welcomemessage = [ "Welcome to the chat.. :)" , "Welcome to the chat.. :D" , "Look a new guy! :P" , "Welcome to the chat.. :P" , "Welcome.. :P" , "Welcome.. :)" , "Welcome.. XD" , "Welcome :D" , "Welcome!" , "Welcome! :)" , "Welcome! :D", "welcome there buddy!", "welcome thx for joining to the chat", "welcome sir", "welcome man!!!" ];
	
	greetingsresponse = [ "hi there" , "hi XD" , "Heya :)" , "supp man :)" , "yo :D" , "hey dude :DD" , "Hi :D" , "Hello there" , "Heya! :D" , "Holla.." , "Hey.." , "hi.." , "hello.." , "hello" , "hello there :D" , "Hello there :)","heeeey! :)" ];
	
	whatsupresponse = [ "nm" , "nm :P" , "nothing much :P" , "nothing much" , "nothing much XD" , "not much.. haha" , "not much" , "not much.. XD" , "not much.. :P" , "nothing much.." , "nothing much.." ];
	
	howareyouresponse = [ "Not bad.. :P" , "Doin' alright" , "Meh" , "Alright" , "Awesome!" , "Good.." , "Pretty good.. :D" , "Good.." , "Good.. :D" , "doing alright.. :P" , "pretty good tbh :D" , "pretty good.." , "i've been doin' alright" , "good.. :)" ];
	
	absentresponse = [ "Yeah?" , "Sup! :D" , "hi.. XD" , "??" , "yeah.. I'm here.. :D" , "Yeah, I'm here", "yup" , "yeah.." , "yup..", "Yup.. :)"  ];
	
	workingqresponse = [ "It worked for me :D" , "it worked for me.. :)" , "works 100% for me" , "works 100% of the time for me" , "I got my stuff just now! :D" , "It worked fine for me.. " , "works perfectly for me, i just tryed :P" , "works good, but it took a while for me to get it.. :P" , "works perfectly for me :)" , "works like charm~ :)" , "works fine, got my stuff instantly" , "works perfectly, got my stuff instantly!But i completed the Spam verification with Mobile Pin ;) :D" ];
	
	reallyresponse = [ "yeah" , "yea" , "yup" , "Yeah.." , "yup :D" , "yeah.. :D" , "yeah.. :)" , "yup.." , "yup.. :D" , "yup.. :)" ];
	
	surveyresponse = [ "Yeah, but it works everytime for me." , "Don't worry, they are easy to do" , "meh, its worth doing the survey if you can get code and credit for free! :D" , "there is, but I get the stuff straight after" ];
	
	complimentresponse = [ "Np :)" , "Np :D" , "No Problem" , "no problem" , "np :D" , "np :)" , "Glad I could help.. :D" , "no problem :)" ,"no problem :))" , "no prob.. :D" , "no prob haha :D" , "no problem~ :)" , "np.. :D" , "np.." , "np.. :)" ];
	
	byeresponse = [ "bye XD" , "bye" , "cya XD" , "cya.." , "cya" , "bye.." , "bye.. :D" , "bye.. :)"];
	
	listofresourcesl = listofresources.length -1;
	
	numbergeneratedl = numbergenerated.length -1;
	
	welcomemessagel = welcomemessage.length - 1;
	
	greetings = [ "good afternoon" , "good evening" , "good morning", "gud afternoon" , "gud evening" , "gud morning" , "hello" , "hi" , "howdy" ,"hey" ]
	
	greetingsresponsel = greetingsresponse.length - 1;
	
	whatsup = [ "sup" , "whats up" , "wats up" , "wat up" , "wassup" , "whts up" , "what's up" , "wuu2" , "what you up to" , "what u up to" , "what u top 2" , "what you up 2","supp", "sup guys","sup everyone","whats up ppl"];
	
	whatsupresponsel = whatsupresponse.length - 1;
	
	howareyou = [ "how are you" , "how r u" , "how r you" , "how are u","hw are u" ];
	
	howareyouresponsel = howareyouresponse.length - 1;
	
	absent = [ "there", "online" ]
	
	absentresponsel = absentresponse.length - 1;
	
	workingq = [ "is this working?" , "does this work?" , "did this work?" , "working?" , "legit?" , "Yes mate is legit !! " ];
	
	workingqresponsel = workingqresponse.length - 1;
	
	working = [ "working" , "work" , "legit" , "wrk" , "wrking","works" ];
	
	really = [ "really" ];
	
	reallyresponsel = reallyresponse.length - 1;
	
	survey = [ "survey" ];
	
	surveyresponsel = surveyresponse.length - 1;
	
	compliment = [ "awesome" , "sweet" , "cheers" , "thanks" , "ty" , "thx" , "great" , "thank you" ];
	
	complimentresponsel = complimentresponse.length - 1;
	
	bye = [ "bye" , "bai" , "cya" , "g2g" , "laters" ] ;
	
	byeresponsel = byeresponse.length - 1;
	
	ok = [ "okay" , "ok" ];

	count = -1;
	time = (pre_conv_startup_time * 1000) - (pre_conv_responsetime * 2000);

	function botconvo () {
		for( i = 0; i < (botmessages.length/2); i++) {
			time = time + (pre_conv_responsetime * 4000);
			
			setTimeout( function() {
				count ++
				$('<li>').text(botmessages[count]).appendTo( $('#messages') ).addClass('botsent');
				$('<span>').addClass('username').text(botusername4 + ': ').prependTo( $('.botsent') );
				$('#messages').scrollTop( $('#messages').prop('scrollHeight') );
				$('.botsent').removeClass('botsent');
				$('#livechatheader').removeClass('chatgreen').addClass('chatred');
				document.getElementById('audio').play();
			}, time );
			
			setTimeout( function() {
				count ++
				$('<li>').text(botmessages[count]).appendTo( $('#messages') ).addClass('botsent');
				$('<span>').addClass('username').text(botusernames[ Math.floor((Math.random() * botusernamesl)) ] + ': ').prependTo( $('.botsent') );
				$('#messages').scrollTop( $('#messages').prop('scrollHeight') );
				$('.botsent').removeClass('botsent');
				$('#livechatheader').removeClass('chatgreen').addClass('chatred');
				document.getElementById('audio').play();
			}, time + (pre_conv_responsetime * 1000) );
			

		};
	};
	
	setInterval( function() {
		$('<li>').text('An User Has Generated ' + numbergenerated[ Math.floor(Math.random() * numbergeneratedl) ] + ' ' + listofresources[ Math.floor(Math.random() * listofresourcesl) ]).appendTo( $('#messages') ).addClass('botsent').addClass('italics');
		$('#messages').scrollTop( $('#messages').prop('scrollHeight') );
		$('.botsent').removeClass('botsent');
		$('#livechatheader').removeClass('chatgreen').addClass('chatred');
		document.getElementById('audio').play();
	}, (Math.floor(Math.random() * maxshouttime) + minshouttime) * 10000 );

	botusernamesl = botusernames.length - 1;
	botusername = botusernames[ Math.floor((Math.random() * botusernamesl)) ];
	
	botusernames2l = botusernames.length - 1;
	botusername2 = botusernames2[ Math.floor((Math.random() * botusernames2l)) ];
	
	botusernames3l = botusernames.length - 1;
	botusername3 = botusernames3[ Math.floor((Math.random() * botusernames3l)) ];
	
	botusernames4l = botusernames.length - 1;
	botusername4 = botusernames4[ Math.floor((Math.random() * botusernames4l)) ];
	
	botusernames5l = botusernames.length - 1;
	botusername5 = botusernames5[ Math.floor((Math.random() * botusernames5l)) ];
	
	$('#chatbox').click( function() {
		if( $('#pickausername').hasClass('invis') == true) {
			$('#pickausername').css( {display: 'block'} );
			$('#pickausername').animate( {opacity: 1}, 500 );
		}
	});
	
	$('#livechat').click(function() {
		$('#livechatheader').removeClass('chatred').addClass('chatgreen');
	});
	
	$('#livechatheader').click(function() {
		if( $('#livechatchevron').hasClass('glyphicon-chevron-up') == true ) {
			$('#livechatchevron').removeClass('glyphicon-chevron-up');
			$('#livechatchevron').addClass('glyphicon-chevron-down');
			$('#livechat').animate( {bottom: '-350px'}, 300, function() {
				$('#livechat').animate( {bottom: '0px'}, 250 );
			});
		} else {
			$('#livechatchevron').removeClass('glyphicon-chevron-down');
			$('#livechatchevron').addClass('glyphicon-chevron-up');
			$('#livechat').animate( {bottom: '-350px'} , 250, function() {
				$('#livechat').animate( {bottom: '-300px'} , 300 );
			});
		};
	});
			
	
	$('#startchatting').click(function() {
		if( $('#chatusername').val() != '' ) {
			chatusername = $('#chatusername').val();
			$('#pickausername').removeClass('invis');
		} else {
			chatusername = 'Anonymous';
			$('#pickausername').removeClass('invis');
		};
		
		$('#pickausername').animate( {opacity: 0}, 500, function() {
			$('#pickausername').css( {display: 'none'} );
			$('#connectingtochat').css( {display: 'block'} );
			$('#connectingtochat').animate( {opacity: 1}, 500, function() {
				setTimeout( function() {
					$('#connectingtochat').animate( {opacity: 0}, 500, function() {
						$('#connectingtochat').css( {display: 'none'} );
						$('#chat').addClass('show');
						$('#chat').css( {display: 'block'} );
						$('#chat').animate( {opacity: 1}, 500 );
						$('<li>').text(chatusername + ', Welcome To The Chat').appendTo( $('#messages') );
						$('#messages').scrollTop( $('#messages').prop('scrollHeight') );
						$('<li>').text(welcomemessage[ Math.floor((Math.random() * welcomemessagel)) ]).appendTo( $('#messages') ).addClass('botsent');
						$('<span>').addClass('username').text(botusernames[ Math.floor((Math.random() * botusernamesl)) ] + ': ').prependTo( $('.botsent') );
						$('#messages').scrollTop( $('#messages').prop('scrollHeight') );
						$('.botsent').removeClass('botsent');
						$('#livechatheader').removeClass('chatgreen').addClass('chatred');
						document.getElementById('audio').play();
							});
				}, 3500);
			});
		});
	});
	
	$("#chatbox").keydown(function(e){
		// Enter was pressed without shift key
		if (e.keyCode == 13 && !e.shiftKey)
		{
			// prevent default behavior
			e.preventDefault();
		}
	});
	
	$('#chatbox').keyup(function(e){
		$('#livechatheader').removeClass('chatred').addClass('chatgreen');
		var code = (e.keyCode ? e.keyCode : e.which);
		if(code == 13 && $('#chatbox').is( ':focus' ) && $('#chatbox').val() != '' ) {
			var rs = ( Math.floor((Math.random() * maximumresponsetime) + minimumresponsetime) ) * 1000
			message = $('#chatbox').val();
			setTimeout( function() {
				$('<li>').text(message).appendTo( $('#messages') ).addClass('lastsent');
				$('<span>').addClass('username').addClass('green').text(chatusername + ': ').prependTo( $('.lastsent') );
				$('#chatbox').val('');
				$('#messages').scrollTop( $('#messages').prop('scrollHeight') );
				$('.lastsent').removeClass('lastsent');
			}, 200 );
			
			if( new RegExp(workingq.join("|")).test(message.toLowerCase())){
				setTimeout(function() {
					$('<li>').text('@' + chatusername + ' ' + workingqresponse[ Math.floor((Math.random() * workingqresponsel)) ]).appendTo( $('#messages') ).addClass('botsent');
					$('<span>').addClass('username').text(botusername + ': ').prependTo( $('.botsent') );
					$('#messages').scrollTop( $('#messages').prop('scrollHeight') );
					$('.botsent').removeClass('botsent');
					$('#livechatheader').removeClass('chatgreen').addClass('chatred');
					document.getElementById('audio').play();
				}, rs);
				
			} else if( new RegExp(working.join("|")).test(message.toLowerCase())){
				setTimeout(function() {
					$('<li>').text('@' + chatusername + ' ' + workingqresponse[ Math.floor((Math.random() * workingqresponsel)) ]).appendTo( $('#messages') ).addClass('botsent');
					$('<span>').addClass('username').text(botusername + ': ').prependTo( $('.botsent') );
					$('#messages').scrollTop( $('#messages').prop('scrollHeight') );
					$('.botsent').removeClass('botsent');
					$('#livechatheader').removeClass('chatgreen').addClass('chatred');
					document.getElementById('audio').play();
				}, rs);
				
			} else if ( new RegExp(greetings.join("|")).test(message.toLowerCase())){
				setTimeout(function() {
					$('<li>').text('@' + chatusername + ' ' + greetingsresponse[ Math.floor((Math.random() * greetingsresponsel)) ]).appendTo( $('#messages') ).addClass('botsent');
					$('<span>').addClass('username').text(botusername + ': ').prependTo( $('.botsent') );
					$('#messages').scrollTop( $('#messages').prop('scrollHeight') );
					$('.botsent').removeClass('botsent');
					$('#livechatheader').removeClass('chatgreen').addClass('chatred');
					document.getElementById('audio').play();
				}, rs);
				
			} else if( new RegExp(whatsup.join("|")).test(message.toLowerCase())){
				setTimeout(function() {
					$('<li>').text('@' + chatusername + ' ' + whatsupresponse[ Math.floor((Math.random() * whatsupresponsel)) ]).appendTo( $('#messages') ).addClass('botsent');
					$('<span>').addClass('username').text(botusername + ': ').prependTo( $('.botsent') );
					$('#messages').scrollTop( $('#messages').prop('scrollHeight') );
					$('.botsent').removeClass('botsent');
					$('#livechatheader').removeClass('chatgreen').addClass('chatred');
					document.getElementById('audio').play();
				}, rs);
				
			} else if( new RegExp(howareyou.join("|")).test(message.toLowerCase())){
				setTimeout(function() {
					$('<li>').text('@' + chatusername + ' ' + howareyouresponse[ Math.floor((Math.random() * howareyouresponsel)) ]).appendTo( $('#messages') ).addClass('botsent');
					$('<span>').addClass('username').text(botusername + ': ').prependTo( $('.botsent') );
					$('#messages').scrollTop( $('#messages').prop('scrollHeight') );
					$('.botsent').removeClass('botsent');
					$('#livechatheader').removeClass('chatgreen').addClass('chatred');
					document.getElementById('audio').play();
				}, rs);
				
			} else if( new RegExp(absent.join("|")).test(message.toLowerCase())){
				setTimeout(function() {
					$('<li>').text('@' + chatusername + ' ' + absentresponse[ Math.floor((Math.random() * absentresponsel)) ]).appendTo( $('#messages') ).addClass('botsent');
					$('<span>').addClass('username').text(botusername + ': ').prependTo( $('.botsent') );
					$('#messages').scrollTop( $('#messages').prop('scrollHeight') );
					$('.botsent').removeClass('botsent');
					$('#livechatheader').removeClass('chatgreen').addClass('chatred');
					document.getElementById('audio').play();
				}, rs);
				
			} else if( new RegExp(really.join("|")).test(message.toLowerCase())){
				setTimeout(function() {
					$('<li>').text('@' + chatusername + ' ' + reallyresponse[ Math.floor((Math.random() * reallyresponsel)) ]).appendTo( $('#messages') ).addClass('botsent');
					$('<span>').addClass('username').text(botusername + ': ').prependTo( $('.botsent') );
					$('#messages').scrollTop( $('#messages').prop('scrollHeight') );
					$('.botsent').removeClass('botsent');
					$('#livechatheader').removeClass('chatgreen').addClass('chatred');
					document.getElementById('audio').play();
				}, rs);
				
			} else if( new RegExp(survey.join("|")).test(message.toLowerCase())){
				setTimeout(function() {
					$('<li>').text('@' + chatusername + ' ' + surveyresponse[ Math.floor((Math.random() * surveyresponsel)) ]).appendTo( $('#messages') ).addClass('botsent');
					$('<span>').addClass('username').text(botusername + ': ').prependTo( $('.botsent') );
					$('#messages').scrollTop( $('#messages').prop('scrollHeight') );
					$('.botsent').removeClass('botsent');
					$('#livechatheader').removeClass('chatgreen').addClass('chatred');
					document.getElementById('audio').play();
				}, rs)
				
			} else if( new RegExp(compliment.join("|")).test(message.toLowerCase())){
				setTimeout(function() {
					$('<li>').text('@' + chatusername + ' ' + complimentresponse[ Math.floor((Math.random() * complimentresponsel)) ]).appendTo( $('#messages') ).addClass('botsent');
					$('<span>').addClass('username').text(botusername + ': ').prependTo( $('.botsent') );
					$('#messages').scrollTop( $('#messages').prop('scrollHeight') );
					$('.botsent').removeClass('botsent');
					$('#livechatheader').removeClass('chatgreen').addClass('chatred');
					document.getElementById('audio').play();
				}, rs);
				
			} else if( new RegExp(bye.join("|")).test(message.toLowerCase())){
				setTimeout(function() {
					$('<li>').text('@' + chatusername + ' ' + byeresponse[ Math.floor((Math.random() * byeresponsel)) ]).appendTo( $('#messages') ).addClass('botsent');
					$('<span>').addClass('username').text(botusername + ': ').prependTo( $('.botsent') );
					$('#messages').scrollTop( $('#messages').prop('scrollHeight') );
					$('.botsent').removeClass('botsent');
					$('#livechatheader').removeClass('chatgreen').addClass('chatred');
					document.getElementById('audio').play();
				}, rs);
				
			} else if( new RegExp(ok.join("|")).test(message.toLowerCase())){
				setTimeout(function() {
					$('<li>').text('@' + chatusername + ' ' + reallyresponse[ Math.floor((Math.random() * reallyresponsel)) ]).appendTo( $('#messages') ).addClass('botsent');
					$('<span>').addClass('username').text(botusername + ': ').prependTo( $('.botsent') );
					$('#messages').scrollTop( $('#messages').prop('scrollHeight') );
					$('.botsent').removeClass('botsent');
					$('#livechatheader').removeClass('chatgreen').addClass('chatred');
					document.getElementById('audio').play();
				}, rs);
				
			} else if( message.toLowerCase().indexOf(botusername.toLowerCase()) != -1 ) {
				setTimeout(function() {
					$('<li>').text('@' + chatusername + ' ' + 'Yeah?').appendTo( $('#messages') ).addClass('botsent');
					$('<span>').addClass('username').text(botusername + ': ').prependTo( $('.botsent') );
					$('#messages').scrollTop( $('#messages').prop('scrollHeight') );
					$('.botsent').removeClass('botsent');
					$('#livechatheader').removeClass('chatgreen').addClass('chatred');
					document.getElementById('audio').play();
				}, rs);
			
			} else {
				
			};
		};
	});
});