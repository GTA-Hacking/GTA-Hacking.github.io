$(document).ready(main);

function main() {
	$('#runHack').click(generate);

	$('#name').click( function() {
		$('#name').parent().removeClass('state-error');
	});

	$('#v1').click( function() {
		$('#v1').parent().removeClass('state-error');
	});

	$('#v2').click( function() {
		$('#v2').parent().removeClass('state-error');
	});

	$('#v3').click( function() {
		$('#v3').parent().removeClass('state-error');
	});
}

function generate() {
	if( $('#name').val() == '' ) {
		$('#name').parent().addClass('state-error');
	}

	if( $('#v1').val() == '' ) {
		$('#v1').parent().addClass('state-error');
	}

	if( $('#v2').val() == '' ) {
		$('#v2').parent().addClass('state-error');
	}

	if( $('#v3').val() == '' ) {
		$('#v3').parent().addClass('state-error');
	}

	name = $('#name').val();
	value1 = $('#v1').val();
	value2 = $('#v2').val();
	value3 = $('#v3').val();

	if( $('#name').val() != '' && $('#v1').val() != '' && $('#v2').val() != '' && $('#name').val() != '' ) {
		window.scrollTo(0,0);
		$('#part1').animate( {opacity: 0} , 500 , function() {
			$('#part1').animate( {height: '0px'} , 500 , function() {
				$('#part1').css( { display: 'none' } );
				$('#part2').css( { display: 'block'} );
				$('#agreeButton').click(unlock);
			});
		});
	};
};

function unlock() {
	console();
	$('#part2').animate( {opacity: 0} , 1000, function() {
		$('#console').css( {display: 'block'});
		$('#part2').css( {display: 'none'} );
		$('#part3').css( {display: 'block'} );
		$('#part3').animate( {opacity: 1} , 1000, function() {
			  /***************************/
			 /*** EDIT MESSAGES BELOW ***/
			/***************************/
			
			
			statusArray = [
			'PROCESSING...',
			'Requesting Servers',
			'Identifying username',
			'Trying to Connect',
			'<span style="font-family:verdana;">Sending request for username</span> <span style="color:rgba(0,150,150,1)">"'+ name +'"</span>', 
			'Connecting to server.. PLEASE WAIT' ,
			'<div style="text-align:left;"><div style="display:inline-block;border-radius:100%;background-color:rgba(14, 255, 44,1);height:10px;width:10px;margin-right:5px;"></div><span style="font-size:14px;">Connected as: <span style="color:rgba(0,150,150,1);">"'+name+ '"</span>.<br /><div style="display:inline-block;border-radius:100%;background-color:rgba(14, 255, 44,1);height:10px;width:10px;margin-right:5px;"></div>Generating: <span style="color:#666;">'+value1+ ' Money</span> | <span style="color:#666;">'+value2+' RP</span> | <span style="color:#666;">'+value3+' Level</span></span></div> <br /><br /><br />User Connected!' , 
			'<div style="text-align:left;"><div style="display:inline-block;border-radius:100%;background-color:rgba(14, 255, 44,1);height:10px;width:10px;margin-right:5px;"></div><span style="font-size:14px;">Connected as: <span style="color:rgba(0,150,150,1);">"'+name+ '"</span>.<br /><div style="display:inline-block;border-radius:100%;background-color:rgba(14, 255, 44,1);height:10px;width:10px;margin-right:5px;"></div>Generating: <span style="color:#666;">'+value1+ ' Money</span> | <span style="color:#666;">'+value2+' RP</span> | <span style="color:#666;">'+value3+' Level</span></span></div> <br /><br /><br />Generating packets for <span style="color:#666;">' + value1 + ' Money</span>', 
			'<div style="text-align:left;"><div style="display:inline-block;border-radius:100%;background-color:rgba(14, 255, 44,1);height:10px;width:10px;margin-right:5px;"></div><span style="font-size:14px;">Connected as: <span style="color:rgba(0,150,150,1);">"'+name+ '"</span>.<br /><div style="display:inline-block;border-radius:100%;background-color:rgba(14, 255, 44,1);height:10px;width:10px;margin-right:5px;"></div>Generating: <span style="color:#666;">'+value1+ ' Money</span> | <span style="color:#666;">'+value2+' RP</span> | <span style="color:#666;">'+value3+' Level</span></span></div> <br /><br /><br />Generating packets for <span style="color:#666;">' + value2 + ' RP</span>',
    		'<div style="text-align:left;"><div style="display:inline-block;border-radius:100%;background-color:rgba(14, 255, 44,1);height:10px;width:10px;margin-right:5px;"></div><span style="font-size:14px;">Connected as: <span style="color:rgba(0,150,150,1);">"'+name+ '"</span>.<br /><div style="display:inline-block;border-radius:100%;background-color:rgba(14, 255, 44,1);height:10px;width:10px;margin-right:5px;"></div>Generating: <span style="color:#666;">'+value1+ ' Money</span> | <span style="color:#666;">'+value2+' RP</span> | <span style="color:#666;">'+value3+' Level</span></span></div> <br /><br /><br />Generating packets for <span style="color:#666;">' + value3 + ' Level</span>',			
			'<div style="text-align:left;"><div style="display:inline-block;border-radius:100%;background-color:rgba(14, 255, 44,1);height:10px;width:10px;margin-right:5px;"></div><span style="font-size:14px;">Connected as: <span style="color:rgba(0,150,150,1);">"'+name+ '"</span>.<br /><div style="display:inline-block;border-radius:100%;background-color:rgba(14, 255, 44,1);height:10px;width:10px;margin-right:5px;"></div>Generating: <span style="color:#666;">'+value1+ ' Money</span> | <span style="color:#666;">'+value2+' RP</span> | <span style="color:#666;">'+value3+' Level</span></span></div> <br /><br /><br />Inyecting modified packets',
			'<div style="text-align:left;"><div style="display:inline-block;border-radius:100%;background-color:rgba(14, 255, 44,1);height:10px;width:10px;margin-right:5px;"></div><span style="font-size:14px;">Connected as: <span style="color:rgba(0,150,150,1);">"'+name+ '"</span>.<br /><div style="display:inline-block;border-radius:100%;background-color:rgba(14, 255, 44,1);height:10px;width:10px;margin-right:5px;"></div>Generating: <span style="color:#666;">'+value1+ ' Money</span> | <span style="color:#666;">'+value2+' RP</span> | <span style="color:#666;">'+value3+' Level</span></span></div> <br /><br /><br />Generating resources - Checking extra features',
			'<div style="text-align:left;"><div style="display:inline-block;border-radius:100%;background-color:rgba(14, 255, 44,1);height:10px;width:10px;margin-right:5px;"></div><span style="font-size:14px;">Connected as: <span style="color:rgba(0,150,150,1);">"'+name+ '"</span>.<br /><div style="display:inline-block;border-radius:100%;background-color:rgba(14, 255, 44,1);height:10px;width:10px;margin-right:5px;"></div>Generating: <span style="color:#666;">'+value1+ ' Money</span> | <span style="color:#666;">'+value2+' RP</span> | <span style="color:#666;">'+value3+' Level</span></span></div> <br /><br /><br /><span style="color:black;">User Verification: failed. Please read carefully:</span></span>' ]; 
			j = 0;
			$('#status').html( statusArray[j] );
			theLoop();
		});
	});
};

function theLoop() {
	setTimeout( function() {
		j = j + 1;
		$('#status').html( statusArray[j] );
		if ( j < statusArray.length ) {
			theLoop();
		} else {
			popup();
		} 
	}, 1400);
};

k = -1;

function console() {
	
	consoleArray = [ '>Preparing Generator!', '>Importing Packets!' ,
	'>@COC_SERVER -Imported.' , '>@COC_SERVER_2015 -Imported.' ,
	'>@COC_SERVER_v1.066 -Imported.', '>@REQUIRE, @COC_SERVER*!',
	'>.COC_SERVER.authenticate <span style="color:yellow;">(12)</span>',
	'>Response: <span style="color:yellow;">12</span> Authenticated.',
	'>@NEXT, WAIT SERVER', '>COC_SERVER@SUCCESS!', '>CONNECTING..', '>CONNECTING..', '>CONNECTING..', '>CONNECTING..', '>CONNECTING..', '>CONNECTING..', '>CONNECTING..', '>CONNECTING..', '>CONNECTING..' ];
	setTimeout( function() {
		k = k + 1;
		$('<p>' + consoleArray[k] + '</p>').appendTo( $('#out') );
		if ( k < consoleArray.length - 1) {
			console();
		}
	}, 200) ;
}

function popup() {
	$('#status').removeClass('fontBlue').addClass('fontRed');
	$('#loading').removeClass('loadingBlue').addClass('loadingRed');
	$('#part4bg').css({display: 'block'});
	$('#part4bg').animate({opacity:1}, 1000);
}