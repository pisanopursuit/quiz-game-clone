////////////////////////////////////////////////////////////
// GAME v1.6
////////////////////////////////////////////////////////////

/*!
 * 
 * GAME SETTING CUSTOMIZATION START
 * 
 */

var screenSettings = {
	stageW:1200, //game width
	stageH:650, //game height
	portraitW:380, //game portrait width
	portraitH:600, //game portrait height
	fitToScreen:true, //fit to browser screen
	maintainAspectRatio:true, //maintain aspect ratio
	viewportMode:{enable:false, viewport:"portrait", text:"Rotate your device <br/>to portrait"}, //device viewport mode, portrait or landscape
}

var quickGameSettings = {
	player:'Player',
	players:'Players',
	totalPlayer:4, //maximum 4 players
	score:100, //game score
	secondChance:true, //second chance for other players to score
	secondChanceSelect:false, //auto select player when 2 players only)
	instructionDelay:3,
	keyCode:[65,70,72,76], //keyboard code
	key:['A','F','H','L'], //keyboard
	timerSettings:{
		status:true, //enable/disable game timer
		timer:25000, //countdown timer
		secondTimer:10000, //second chance countdown timer
	}
}

var gridStyleSettings = {
	player:'Team',
	players:'Teams',
	totalPlayer:4, //maximum 4 players
	maxCategory:5, //max category
	levels:[10,50,100,200,500], //category level points (maximum 5)
	secondChance:true, //second chance for other players to score
	secondChanceSelect:true, //auto select player when 2 players only)
	timerSettings:{
		status:true, //enable/disable game timer
		timer:25000, //countdown timer
		secondTimer:10000, //second chance countdown timer
	},
	categoryName:'Grid Style' //category name for scoreboard submit score
}

//game text display
var gameTextDisplay = {
	playerDetails:'[PLAYER] Details',
	instruction:'Tap on your name to answer questions',
	instructionKeyboard:'Or press KEYBOARD to answer questions :',
	randomPlayer:'Picking Teams to begin...',
	selectCategory:'Select a category to score'
}

//category settings
var categorySettings = {
	status:true, //show/hide category select page
	allOption:true, //add ALL category select option
	allText:"All", //text for all category select option
	sort:true, //sort category alphatically, except All option always at last
	breadcrumb:" > ",//symbol for breadcrumb
	breadcrumbTop:"Back" //breadcrumb top level name
};

//category table property
var gridStyleProperty = {
	fontSize:30,
	lineHeight:30,
	color:"#fff",
	offsetTop:-15,
	margin:5
};

var gridStyleButtonProperty = {
	status:true, //toggle answer button background
	roundNumber:0, //category button background round corner number
	color:"#29B99A", //category button background colour
	shadowColor:"#1E9B7E", //active category button background shadow colour
	activeColor:"#f27e21", //active category button background colour
	activeShadowColor:"#c26b1e", //category button background shadow colour
	disabledColor:"#797979", //disabled category button background colour
	disabledShadowColor:"#494949", //disabled category button background shadow colour
	labelColor:'#4383C4', //label background colour
	labelShadowColor:'#3575AA', //label background shadow colour
};

//players property
var playersProperty = {
	fontSize:35,
	lineHeight:35,
	color:"#fff",
	offsetTop:-12,
	margin:5
};

var playersButtonProperty = {
	status:true, //toggle player button background
	roundNumber:15, //player button background round corner number
	color:"#FAA819", //player button background colour
	shadowColor:"#C3832B", //player button background shadow colour
	activeColor:"#E64D3C", //active player button background colour
	activeShadowColor:"#BA3529", //active player button background shadow colour
	disabledColor:"#797979", //disabled player button background colour
	disabledShadowColor:"#494949", //disabled player button background shadow colour
};

//question settings
var questionSettings = {
	totalQuestionLimit:0, //set more than 0 to limit total questions,
	randomQuestion:false, //true or false to enable randomize questions
	revealAnswer:true, //enable reveal answer
	loader:"LOADING QUESTION...", //loader text display
	totalText:"[NUMBER]/[TOTAL]", //total question text display,
	scoreText:'[NUMBER] PTS', //score text display
	showCorrectWrong:true, //enable show correct or wrong text
	explanation:true, //enable show explanation
	correctDisplayText:"That's Correct!", //correct answer text display
	wrongDisplayText:"Incorrect!", //wrong answer text display
	playerScore:'[PLAYER] score [NUMBER] PTS', //player score text display
	playerNoScore:'No player score' //no player score display
};

//answer settings
var answerSettings = {
	randomAnswer:true, //true or false to enable randomize answer
	lists:true, //enable answer list style
	listsText:["a) ","b) ","c) ","d) ","e) ","f) ","g) ","h) "], //answer list style format, maximum 8
	animation:true, //enable answer animation
};

//question property
var questionProperty = {
	fontSize:40,
	lineHeight:48,
	color:"#fff",
	top:25,
	left:5,
	width:90,
	height:30,
	align:"center"
};

//video property
var videoProperty = {
	top:15,
	left:30,
	width:40,
	height:41,
	autoplay:true,
	controls:true
};

//answers property
var answersProperty = {
	fontSize:35,
	lineHeight:35,
	color:"#fff",
	align:"center",
	width:30,
	height:14,
	offsetTop:-18
};

var answersButtonProperty = {
	status:true, //toggle answer button background
	roundNumber:15, //answer button background round corner number
	color:"#1bb99a", //answer button background colour
	shadowColor:"#209d7f", //answer button background shadow colour
	answerdColor:"#f27e21", //answered button background colour
	answerdShadowColor:"#c26b1e", //answered button background shadow colour
	wrongColor:"#8e9093", //answered button background colour
	wrongShadowColor:"#6a6b6e", //answered button background shadow colour
};

//audio settings
var audioSettings = {
	questionDelay:300, //timer delay to play question audio
	answerDelay:100, //timer delay to play answer audio
};

//answers property
var inputProperty = {
	fontSize:35,
	lineHeight:35,
	color:"#333",
	background:"#fff",
	wrongColor:"#333",
	wrongBackground:"#999",
	align:"center",
	width:20,
	height:12,
	top:50,
	left:40,
	offsetTop:-18
};

//drag drop settings
var dragDropSettings = {
	revertSpeed:0.5, //revert speed
	listEnable:false, //enable drag answer list style
	droppedAnswerAgain:true, //enable drag answer again after dropped
	randomAnswer:true, //enable drag answer display in random sequence
	dragBorder:"#fff",
	dropStroke:"1px",
	dropBackground:""
};

//drag drop property
var dropLabelProperty = {
	fontSize:40,
	lineHeight:40,
	color:"#fff",
	align:"right",
	offsetTop:-18
};

//group drop property
var groupDropProperty = {
	border:"#fff",
	stroke:"1px",
	background:"",
	dropMax:4,
	dropWidth:40,
	dropHeight:30,
	dropOffLeft:1,
	dropOffTop:3,
	fontSize:40,
	lineHeight:40,
	color:"#fff",
	align:"right",
	offsetTop:-18
};

//explanation property
var explanationProperty = {
	fontSize:35,
	lineHeight:35,
	color:"#fff",
	align:"center",
	top:45,
	left:5,
	width:90,
	height:10
};

//result settings
var resultSettings = {
	mode:"score", //display result by "score"
	reverse:false, //display result in reverse
	resultWinner: "Congratulation [PLAYER]",
	resultNoWinner: "There are no winner",
	resultAnswer:'Answer : [NUMBER]',
	resultCorrect:'Correct : [NUMBER]',
	resultSteal:'Steal : [NUMBER]',
};

//Social share, [SCORE] will replace with game score
var shareSettings = {
	shareEnable:true, //toggle share
	shareTitle:"Highscore on Quiz Game 2 Game is [SCORE]pts", //social share score title
	shareMessage:"[SCORE] is mine new highscore on Quiz Game 2 Game! Try it now!", //social share score message
}

/*!
 *
 * GAME SETTING CUSTOMIZATION END
 *
 */
$.editor = {enable:false};
var playerData = {index:-1, lastIndex:-1, player:[], chance:0, chanceCon:false, exclude:[], score:0, answered:false, secondChance:false, secondChanceSelect:false, secondAnswered:false, answerType:'', answer_arr:[], category:0, timer:false, animation:false, gridCategory_arr:[], grid:false};
var gameData = {type:'quick', page:'', questionNum:0, sequenceNum:0, categoryNum:0, category_arr:[], categoryThumb_arr:[], sequence_arr:[], targetArray:null, targetAnswerSequence:null, mode:'landscape', oldMode:'landscape', build:false, settings:{}};
var storeData = {status:false, timerDate:0};

var quesLandscape_arr = [];
var quesPortrait_arr = [];
var quesLandscapeSequence_arr = [];
var quesPortraitSequence_arr = [];
var totalPlayerData = {page:1, total:2, min:2, max:4};
var gridStyleData = {page:1, total:1};
var resultData = {page:1, total:1};
var categoryData = {page:1, total:0, thumb:16, max:3, level:0, parent:'', breadcrumb:[]};

var audioLandscape_arr = [];
var audioPortrait_arr = [];
var audioData = {audioNum:0, audioInterval:null};

var timeData = {enable:false, startDate:null, nowDate:null, timer:0};

var gameSettingsObjects = ['questionSettings','answerSettings','resultSettings','shareSettings'];
var gameSettingsData = {};

/*!
 * 
 * GAME BUTTONS - This is the function that runs to setup button event
 * 
 */
function buildGameButton(){
	if($.browser.mobile || isTablet){

	}else{
		var isInIframe = (window.location != window.parent.location) ? true : false;
		if(isInIframe){
			this.document.onkeydown = keydown;
			this.document.onkeyup = keyup;
		
			$(window).blur(function() {
				appendFocusFrame();
			});
			appendFocusFrame();
        }else{
            this.document.onkeydown = keydown;
			this.document.onkeyup = keyup;
        }
	}

	$('#buttonVersus').click(function() {
		playSound('soundClick');
		
		gameData.type = 'quick';
		totalPlayerData.max = quickGameSettings.totalPlayer;
		goPage('players');
    });

	$('#buttonGridStyle').click(function() {
		playSound('soundClick');
		
		gameData.type = 'grid';
		totalPlayerData.max = gridStyleSettings.totalPlayer;
		goPage('players');
    });

	$('#buttonStart').click(function() {
		playSound('soundClick');
		checkGameMode();
    });

	$('#buttonLocal').click(function() {
		playSound('soundClick');
		socketData.online = false;
		$('#buttonVersus').show();
		$('#buttonGridStyle').show();
		$('#buttonStart').hide();
		$('#buttonLocal').hide();
		$('#buttonOnline').hide();
    });

	$('#buttonOnline').click(function() {
		playSound('soundClick');
		socketData.online = true;
		checkQuickGameMode();
    });

	$('#buttonVersusMode').click(function() {
		playSound('soundClick');
		
		gameData.type = 'quick';
		postSocketUpdate('category', {type:gameData.type});
    });

	$('#buttonGridStyleMode').click(function() {
		playSound('soundClick');
		
		gameData.type = 'grid';
		postSocketUpdate('grid');
    });

	$('#buttonCompletePlayers').click(function() {
		playSound('soundClick');
		
		buildGamePlayers();
		if(gameData.type == 'quick'){
			if(categorySettings.status){
				goPage('category');
			}else{
				goPage('game');
			}
		}else{
			goPage('game');
		}
    });

	$('#buttonNextPlayer').click(function() {
		playSound('soundClick');
		togglePlayerDetails(true);
    });
	
	$('#buttonPrevPlayer').click(function() {
		playSound('soundClick');
		togglePlayerDetails(false);
    });

	$('#buttonMorePlayer').click(function() {
		playSound('soundClick');
		toggleTotalPlayer(true);
    });
	
	$('#buttonLessPlayer').click(function() {
		playSound('soundClick');
		toggleTotalPlayer(false);
    });
	
	$('#buttonNextCat').click(function() {
		playSound('soundClick');
		toggleCategory(true);
    });
	
	$('#buttonPrevCat').click(function() {
		playSound('soundClick');
		toggleCategory(false);
    });

	$('#buttonNextGridStyle').click(function() {
		playSound('soundClick');
		toggleGridStylePage(true);
    });
	
	$('#buttonPrevGridStyle').click(function() {
		playSound('soundClick');
		toggleGridStylePage(false);
    });
	
	$('#buttonOk').click(function() {
		playSound('soundClick');
		toggleConfirm(false);
		stopGame();
		goPage('main');

		if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
			exitSocketRoom();
		}
    });
	
	$('#buttonCancel').click(function() {
		playSound('soundClick');
		toggleConfirm(false);
    });
	
	$('#buttonNextQues').click(function() {
		playSound('soundClick');

		if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
			postSocketUpdate('prepareNextQuestion');
		}else{
			prepareNextQuestion();
		}
    });
	
	$('#buttonPreviewQues').click(function() {
		playSound('soundClick');
		previewQuestion();
    });
	
	$('#buttonReplay').click(function() {
		playSound('soundClick');
		goPage('main');
    });
	
	$('#buttonMoreOption').click(function() {
		playSound('soundClick');
		$('#resultHolder .defaultOption').hide();
		$('#resultHolder .saveOption').show();
    });

	$('#buttonBackOption').click(function() {
		playSound('soundClick');
		$('#resultHolder .defaultOption').show();
		$('#resultHolder .saveOption').hide();
    });

	$('#buttonNextResultPlayer').click(function() {
		playSound('soundClick');
		toggleResultWinners(true);
    });
	
	$('#buttonPrevResultPlayer').click(function() {
		playSound('soundClick');
		toggleResultWinners(false);
    });
	
	$('#buttonFacebook').click(function() {
        share('facebook');
    });
	
	$('#buttonTwitter').click(function() {
        share('twitter');
    });
	
	$('#buttonWhatsapp').click(function() {
        share('whatsapp');
    });
	
	$('#buttonOption').click(function() {
		playSound('soundClick');
        toggleGameOption();
    });
	
	$('#buttonSound').click(function() {
		playSound('soundClick');
        toggleGameMute();
    });
	
	$('#buttonFullscreen').click(function() {
		playSound('soundClick');
        toggleFullScreen();
    });
	
	$('#buttonExit').click(function() {
		playSound('soundClick');
		toggleGameOption();
        toggleConfirm(true);
    });

	$(window).focus(function() {
        //resizeGameDetail();
    });
}

function checkGameMode(){
	if ( typeof initSocket == 'function' && multiplayerSettings.enable) {
		if(multiplayerSettings.localPlay){
			$('#buttonVersus').hide();
			$('#buttonGridStyle').hide();
			$('#buttonStart').hide();
			$('#buttonLocal').show();
			$('#buttonOnline').show();
		}else{
			checkQuickGameMode();
		}
	}else{
		goPage('players');
	}
}

function checkQuickGameMode(){
	socketData.online = true;
	if(!multiplayerSettings.enterName){
		$('#buttonVersus').hide();
		$('#buttonGridStyle').hide();
		$('#buttonStart').hide();
		$('#buttonLocal').hide();
		$('#buttonOnline').hide();

		addSocketRandomUser();
	}else{
		goPage('name');
	}
}

function appendFocusFrame(){
	$('#mainHolder').prepend('<div id="focus" style="position:absolute; width:100%; height:100%; z-index:1000;"></div');
	$('#focus').click(function(){
		$('#focus').remove();
	});	
}

/*!
 * 
 * KEYBOARD EVENTS - This is the function that runs for keyboard events
 * 
 */
function keydown(event) {
	if(gameData.paused){
		return;	
	}
	
	var keyIndex = quickGameSettings.keyCode.indexOf(event.keyCode);
	if(keyIndex != -1){
		if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {

		}else{
			actionGamePlayer(keyIndex);
		}
	}
}

function keyup(event) {
	if(gameData.paused){
		return;	
	}
}

/*!
 * 
 * GAME SETTINGS - This is the function that runs to store game settings
 * 
 */
function storeSettings(){
	for(var n=0; n<gameSettingsObjects.length; n++){
		if(typeof window[gameSettingsObjects[n]] != 'undefined'){
			gameSettingsData[gameSettingsObjects[n]] = {};
			
			$.each(window[gameSettingsObjects[n]], function(objKey, objValue){
				gameSettingsData[gameSettingsObjects[n]][objKey] = objValue;
			});
		}
	}
}

/*!
 * 
 * GAME STYLE - This is the function that runs to build game style
 * 
 */
function buildGameStyle(){
	$('.preloadText').html(questionSettings.loader);
	
	toggleConfirm(false);
}


/*!
 * 
 * DISPLAY PAGES - This is the function that runs to display pages
 * 
 */
function goPage(page){
	gameData.page = page;

	$('#logoHolder').hide();
	$('#playersHolder').hide();
	$('#modeHolder').hide();
	$('#categoryHolder').hide();
	$('#gameHolder').hide();
	$('#resultHolder').hide();
	$('#buttonExit').show();

	$('#roomWrapper').hide();
	$('#roomWrapper .innerContent').hide();
	$('.fontLogText').hide();
	
	var targetContainer = '';
	switch(page){
		case 'main':
			targetContainer = $('#logoHolder');

			$('#buttonExit').hide();
			$('#buttonLocal').hide();
			$('#buttonOnline').hide();
			$('#buttonStart').hide();
			$('.preloadText').hide();

			if ( typeof initSocket == 'function' && multiplayerSettings.enable) {
				if(gameData.xmlComplete){
					$('#buttonVersus').hide();
					$('#buttonGridStyle').hide();
					$('#buttonStart').show();
				}
			}
		break;

		case 'name':
			targetContainer = $('#roomWrapper');
			$('#roomWrapper .nameContent').show();
			$('#roomWrapper .fontNameError').html('');
			$('#enterName').show();
		break;
			
		case 'room':
			targetContainer = $('#roomWrapper');
			$('#roomWrapper .roomContent').show();
			switchSocketRoomContent('lists');
		break;

		case 'players':
			targetContainer = $('#playersHolder');
			resetPlayerDetails();
			displayPlayerDetails();
		break;

		case 'mode':
			targetContainer = $('#modeHolder');

			if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
				if(!socketData.host){
					$('#buttonVersusMode').hide();
					$('#buttonGridStyleMode').hide();
				}
			}
		break;
		
		case 'category':
			targetContainer = $('#categoryHolder');
		break;
		
		case 'game':
			targetContainer = $('#gameHolder');
			startGame();
		break;
		
		case 'result':
			targetContainer = $('#resultHolder');
			if(!shareSettings.shareEnable){
				$('#shareOption').hide();	
			}
			
			playSound('soundResult');
			stopGame();

			buildResultWinners();
			goScorePage('');
			
			toggleSaveButton(true);
		break;
	}
	
	targetContainer.show();
	TweenMax.to(targetContainer, 0, {opacity:0, overwrite:true});
	TweenMax.to(targetContainer, 1, {opacity:1, overwrite:true});
	resizeGameDetail();
}

/*!
 * 
 * BUILD PLAYERS DETAILS - This is the function that runs to build player details page
 * 
 */
function resetPlayerDetails(){
	$('#playersList li').each(function(index, element) {
		if(gameData.type == 'quick'){
			$('.fontPlayerDetailsTitle').html(gameTextDisplay.playerDetails.replace('[PLAYER]', quickGameSettings.player));
			$(this).find('.name').html(quickGameSettings.player+' '+(index+1));
		}else{
			$('.fontPlayerDetailsTitle').html(gameTextDisplay.playerDetails.replace('[PLAYER]', gridStyleSettings.player));
			$(this).find('.name').html(gridStyleSettings.player+' '+(index+1));
		}
	});

	totalPlayerData.page = 0;
	totalPlayerData.total = totalPlayerData.total > totalPlayerData.max ? totalPlayerData.max : totalPlayerData.total;
	displayPlayerDetails();
}

function togglePlayerDetails(con){
	if(con){
		totalPlayerData.page++;
		totalPlayerData.page = totalPlayerData.page > totalPlayerData.total-1 ? totalPlayerData.total-1 : totalPlayerData.page;
	}else{
		totalPlayerData.page--;
		totalPlayerData.page = totalPlayerData.page < 0 ? 0 : totalPlayerData.page;
	}
	displayPlayerDetails();	
}

function toggleTotalPlayer(con){
	if(con){
		totalPlayerData.total++;
		totalPlayerData.total = totalPlayerData.total > totalPlayerData.max ? totalPlayerData.max : totalPlayerData.total;
	}else{
		totalPlayerData.total--;
		totalPlayerData.total = totalPlayerData.total < totalPlayerData.min ? totalPlayerData.min : totalPlayerData.total;
	}

	totalPlayerData.page = 0;
	displayPlayerDetails();	
}

function displayPlayerDetails(){
	if(totalPlayerData.max == 2){
		$('#buttonMorePlayer').hide();
		$('#buttonLessPlayer').hide();
	}else{
		$('#buttonMorePlayer').show();
		$('#buttonLessPlayer').show();
	}

	var playerOrTeam  = quickGameSettings.players;
	if(gameData.type != 'quick'){
		playerOrTeam  = gridStyleSettings.players;
	}
	$('.totalPlayers').html(totalPlayerData.total + ' ' + playerOrTeam);

	$('#playerSelectLists').removeClass('flexTwoLists');
	$('#playerSelectLists').removeClass('flexThreeLists');

	if(gameData.mode == 'portrait'){
		$('#playersList li').hide();
		$('#playersList li').each(function(index, element) {
			if(index == totalPlayerData.page){
				$(this).show();
			}
		});
	}else{
		$('#playersList li').hide();
		$('#playersList li').each(function(index, element) {
			if(index < totalPlayerData.total){
				$(this).show();
			}
		});

		if(totalPlayerData.total == 2){
			$('#playerSelectLists').addClass('flexTwoLists');
		}else if(totalPlayerData.total == 3){
			$('#playerSelectLists').addClass('flexThreeLists');
		}
	}
}

/*!
 * 
 * BUILD CATEGORY - This is the function that runs to build category page
 * 
 */
function buildCategory(){	
	categoryData.thumb = findCategoryLevel();
	resetCategory();
	
	$('#categoryList').empty();	
	for(var c=0; c<gameData.categoryThumb_arr.length; c++){
		var createThumbnail = false;
		var thumbSrc = 'assets/item_thumb.svg';
		
		if(categoryData.level == 0){
			if(gameData.categoryThumb_arr[c].parent ==''){
				createThumbnail = true;
				if(gameData.categoryThumb_arr[c].src != ''){
					thumbSrc = gameData.categoryThumb_arr[c].src;
				}
			}
		}else{
			if(gameData.categoryThumb_arr[c].parent == categoryData.breadcrumb[categoryData.breadcrumb.length-1]){
				createThumbnail = true;
				if(gameData.categoryThumb_arr[c].src != ''){
					thumbSrc = gameData.categoryThumb_arr[c].src;
				}
			}
		}
		
		if(createThumbnail){
			var catID = '';
			var categoryHTML = '<li class="categoryThumb buttonClick" '+catID+'><div><img src="'+thumbSrc+'" /></div><div class="categoryTitle fontCategory resizeFont" data-fontSize="30" data-lineHeight="30">'+gameData.categoryThumb_arr[c].name+'</div></li>';
			$('#categoryList').append(categoryHTML);
		}
	}
	
	$('#categoryNav').empty();
	var breadcrumbHTML = '';
	for(var c=0; c<categoryData.breadcrumb.length; c++){
		var activeClass = 'buttonClick active';
		if(categoryData.breadcrumb.length == 1 && c == 0){
			activeClass = '';
		}else if(c == categoryData.breadcrumb.length-1){
			activeClass = '';
		}
		
		if(c != 0){
			breadcrumbHTML += '<span class="fontCategoryNav resizeFont" data-fontSize="30" data-lineHeight="30">'+categorySettings.breadcrumb+'</span>';
		}
		
		breadcrumbHTML += '<span class="categoryNavName fontCategoryNav resizeFont '+activeClass+'" data-fontSize="30" data-lineHeight="30" data-parent="'+c+'">'+categoryData.breadcrumb[c]+'</span>';
		
		if(categoryData.breadcrumb.length == 1 && c == 0){
			breadcrumbHTML = '';	
		}
	}
	
	$('#categoryNav').append(breadcrumbHTML);
	$('.categoryThumb').click(function(){
		playSound('soundClick');
		
		if(gameData.categoryLevel_arr.indexOf($(this).text()) == -1){
			gameData.categoryNum = gameData.category_arr.indexOf($(this).text());
			
			if(categorySettings.allOption && $(this).text() == categorySettings.allText){
				if(gameData.targetArray.length > 0){
					if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
						if(socketData.host){
							postSocketUpdate('start');
						}
					}else{
						goPage('game');
					}
				}else{
					alert('There are no question in selected category!');
				}
			}else{
				var categoryExist = gameData.targetArray.findIndex(x => x.category === $(this).text());
				if(categoryExist != -1){
					if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
						if(socketData.host){
							postSocketUpdate('start');
						}
					}else{
						goPage('game');
					}
				}else{
					alert('There are no question in selected category!');
				}
			}
		}else{
			categoryData.level++;
			categoryData.breadcrumb.push($(this).text());
			categoryData.page = 1;

			if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
				if(socketData.host){
					postSocketUpdate('updatecategorylevel', {page:categoryData.page, level:categoryData.level, breadcrumb:categoryData.breadcrumb});
				}
			}else{
				buildCategory();
				resizeGameDetail();
			}
		}
	});
	
	$('.categoryNavName').click(function(){
		if($(this).hasClass('active')){
			playSound('soundClick');
			
			var parentLevel = Number($(this).attr('data-parent'));
			categoryData.breadcrumb.length = parentLevel+1;
			categoryData.level = parentLevel;	
			categoryData.page = 1;

			if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
				if(socketData.host){
					postSocketUpdate('updatecategorylevel', {page:categoryData.page, level:categoryData.level, breadcrumb:categoryData.breadcrumb});
				}
			}else{
				buildCategory();
				resizeGameDetail();
			}
		}
	});
	
	displayCategory();
}

function buildCategoryLevel(){
	if(categorySettings.sort){
		sortOnObject(gameData.categoryThumb_arr, 'name');
		for(var c=0; c<gameData.categoryThumb_arr.length; c++){
			if(gameData.categoryThumb_arr[c].name == categorySettings.allText){
				gameData.categoryThumb_arr.push({src:gameData.categoryThumb_arr[c].src, name:gameData.categoryThumb_arr[c].name, parent:gameData.categoryThumb_arr[c].parent, settings:{}});
				gameData.categoryThumb_arr.splice(c,1);
				c = gameData.categoryThumb_arr.length;
			}
		};
	}
	
	categoryData.breadcrumb.push(categorySettings.breadcrumbTop);
	
	gameData.categoryLevel_arr = [];
	for(var c=0; c<gameData.categoryThumb_arr.length; c++){
		if(gameData.categoryThumb_arr[c].parent !=''){
			gameData.categoryLevel_arr.push(gameData.categoryThumb_arr[c].parent);
		}
	};
}

function findCategoryLevel(){
	var totalCategory = 0;
	for(var t=0; t<gameData.categoryThumb_arr.length; t++){
		if(categoryData.level == 0){
			if(gameData.categoryThumb_arr[t].parent ==''){
				totalCategory++;
			}
		}else{
			if(gameData.categoryThumb_arr[t].parent == categoryData.breadcrumb[categoryData.breadcrumb.length-1]){
				totalCategory++;
			}
		}
	}
	
	return totalCategory;
}

function resetCategory(){
	if(gameData.mode == 'portrait'){
		categoryData.max = 4;
	}else{
		categoryData.max = 3;
	}
	
	categoryData.total = categoryData.thumb/categoryData.max;
	if (String(categoryData.total).indexOf('.') > -1){
		categoryData.total=Math.floor(categoryData.total)+1;
	}
	
	displayCategory();
}

function toggleCategory(con){
	if(con){
		categoryData.page++;
		categoryData.page = categoryData.page > categoryData.total ? categoryData.total : categoryData.page;
	}else{
		categoryData.page--;
		categoryData.page = categoryData.page < 1 ? 1 : categoryData.page;
	}

	if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
		if(socketData.host){
			postSocketUpdate('updatecategory', {page:categoryData.page, level:categoryData.level, breadcrumb:categoryData.breadcrumb});
		}
	}else{
		displayCategory();
	}
}

function displayCategory(){
	$('#buttonPrevCat').hide();
	$('#buttonNextCat').hide();
	
	var startPageNum = (categoryData.page-1) * categoryData.max;
	var endPageNum = startPageNum + categoryData.max;
	
	if(categoryData.page > 1){
		$('#buttonPrevCat').show();
	}
	
	if(categoryData.total > 1 && categoryData.page != categoryData.total){
		$('#buttonNextCat').show();
	}

	if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
		if(!socketData.host){
			$('#buttonPrevCat').hide();
			$('#buttonNextCat').hide();
		}
	}
	
	$('#categoryList li').hide();
	$('#categoryList li').each(function(index, element) {
        if(index >= startPageNum && index < endPageNum){
			$(this).show();
		}
    });
}

/*!
 * 
 * FILTER CATEGORY - This is the function that runs to filter category
 * 
 */
function filterCategoryQuestion(){
	gameData.sequence_arr = [];
	for(n=0;n<gameData.targetArray.length;n++){
		if(gameData.targetArray[n].gameType.indexOf(gameData.type) != -1){
			gameData.sequence_arr.push(n);
		}
	}
	
	if($.editor.enable){
		return;
	}
	
	//do nothing if category page is off
	if(!categorySettings.status){
		return;
	}
	
	//do nothing if category all is selected
	if(categorySettings.allOption && gameData.category_arr[gameData.categoryNum] == categorySettings.allText){

		return;
	}
	
	//filter the category
	gameData.sequence_arr = [];
	for(n=0;n<gameData.targetArray.length;n++){
		if(gameData.category_arr[gameData.categoryNum] == gameData.targetArray[n].category && gameData.targetArray[n].gameType.indexOf(gameData.type) != -1){
			gameData.sequence_arr.push(n);
		}
	}
}

/*!
 * 
 * RETRIEVE CATEGORY SETTINGS - This is the function that runs to retrieve category settings
 * 
 */
function checkCategorySettings(){
	//reset
	for(var n=0; n<gameSettingsObjects.length; n++){
		$.each(gameSettingsData[gameSettingsObjects[n]], function(objKey, objValue){
			window[gameSettingsObjects[n]][objKey] = gameSettingsData[gameSettingsObjects[n]][objKey];
		});
	}

	//retrieve
	var categoryIndex = gameData.categoryThumb_arr.findIndex(x => x.id === String(playerData.category));
	if(categoryIndex != -1){
		var retrieveCategorySettings = gameData.categoryThumb_arr[categoryIndex].settings;
		$.each(retrieveCategorySettings, function(objSKey, objSValue){
			//exist settings
			if(gameSettingsObjects.indexOf(objSKey) != -1){
				//exist settings value
				$.each(objSValue, function(objKey, objValue){
					if(window[objSKey][objKey] != undefined){
						window[objSKey][objKey] = retrieveCategorySettings[objSKey][objKey];
					}
				});
			}
		});
	}
}

/*!
 * 
 * BUILD RESULT WINNERS - This is the function that runs to build result winners
 * 
 */
function toggleResultWinners(con){
	if(con){
		resultData.page++;
		resultData.page = resultData.page > playerData.player.length-1 ? playerData.player.length-1 : resultData.page;
	}else{
		resultData.page--;
		resultData.page = resultData.page < 0 ? 0 : resultData.page;
	}
	displayResultWinners();	
}

function resetResultWinners(){
	resultData.page = 0;
	displayResultWinners();
}

function buildResultWinners(){
	$('#resultHolder .defaultOption').show();
	$('#resultHolder .saveOption').hide();

	var isEqualScore = true;
	var overallScore = 0;

	for(var n=0; n<playerData.player.length; n++){
		if(n == 0){
			overallScore = playerData.player[n].score;
		}else{
			if(overallScore != playerData.player[n].score){
				isEqualScore = false;
			}
		}
	}
	sortOnObject(playerData.player, 'score', true);

	if(isEqualScore){
		$('.fontResultTitle').html(resultSettings.resultNoWinner);
	}else{
		$('.fontResultTitle').html(resultSettings.resultWinner.replace('[PLAYER]', playerData.player[0].name));
	}

	TweenMax.killTweensOf($('.fontResultTitle'));
	TweenMax.to($('.fontResultTitle'), 0, {scaleX:.8, scaleY:.8, alpha:0, overwrite:true});
	TweenMax.to($('.fontResultTitle'), 1, {delay:.2, scaleX:1, scaleY:1, alpha:1, ease:Elastic.easeOut, overwrite:true});

	var classArray = ['.first','.second','.third','.four'];
	for(var n=0; n<playerData.player.length; n++){
		if(isEqualScore){
			$('#playersScoreList').find(classArray[n]).find('.medal').hide();
		}else{
			$('#playersScoreList').find(classArray[n]).find('.medal').show();
		}
		$('#playersScoreList').find(classArray[n]).find('.fontResultName').html(playerData.player[n].name);

		$('#playersScoreList').find(classArray[n]).find('.fontResultScore').html(addCommas(questionSettings.scoreText.replace('[NUMBER]',Math.floor(0))));
		animateResultScore(n, classArray);

		var playerStats = resultSettings.resultAnswer.replace('[NUMBER]',playerData.player[n].answer);
		playerStats += '<br>' + resultSettings.resultCorrect.replace('[NUMBER]',playerData.player[n].correct);

		if(gameData.secondChance){
			playerStats += '<br>' + resultSettings.resultSteal.replace('[NUMBER]',playerData.player[n].steal);
		}
		$('#playersScoreList').find(classArray[n]).find('.fontResultStats').html(playerStats);
	}

	$('#uName').val(playerData.player[0].name);
	playerData.score = playerData.player[0].score;

	if(gameData.type == 'quick'){
		if(categorySettings.status){
			saveGame(playerData.score, gameData.category_arr[gameData.categoryNum]);
		}else{
			saveGame(playerData.score, '');
		}
	}else{
		saveGame(playerData.score, gridStyleSettings.categoryName);
	}
	displayResultWinners();
}

function animateResultScore(n, classArray){
	playerData.player[n].updateScore = 0;
	TweenMax.to(playerData.player[n], 1, {delay:.5, updateScore:playerData.player[n].score, overwrite:true, onUpdate:function(){
		$('#playersScoreList').find(classArray[n]).find('.fontResultScore').html(addCommas(questionSettings.scoreText.replace('[NUMBER]',Math.floor(playerData.player[n].updateScore))));
	}});
}

function displayResultWinners(){
	$('#playersScoreList').removeClass('flexTwoLists');
	$('#playersScoreList').removeClass('flexThreeLists');

	// Create the add-on
	$.fn.orderChildren = function(order) {
		this.each(function() {
			var el = $(this);
			for(var i = order.length - 1; i >= 0; i--) {
				el.prepend(el.children(order[i]));
			}
		});
		return this;
	};

	if(gameData.mode == 'portrait'){
		$("#playersScoreList ul").orderChildren([
			".first",
			".second",
			".third",
			".four"
		]);

		$('#playersScoreList .winnerlist').hide();
		$('#playersScoreList .winnerlist').each(function(index, element) {
			if(index == (resultData.page)){
				$(this).show();
			}
		});
	}else{
		$("#playersScoreList ul").orderChildren([
			".second",
			".first",
			".third",
			".four"
		]);

		$('#playersScoreList .winnerlist').hide();
		for(var n=0; n<playerData.player.length; n++){
			$('#playersScoreList .winnerlist').eq(n).show();
		}

		if(playerData.player.length == 2){
			$('#playersScoreList').addClass('flexTwoLists');
		}else if(playerData.player.length == 3){
			$('#playersScoreList').addClass('flexThreeLists');
		}
	}
}

/*!
 * 
 * START GAME - This is the function that runs to start play game
 * 
 */
function startGame(){
	checkCategorySettings();
	
	gameData.questionNum = 0;
	gameData.sequenceNum = 0;
	gameData.secondChance = gameData.type == 'quick' ? quickGameSettings.secondChance : gridStyleSettings.secondChance;
	gameData.secondChanceSelect = gameData.type == 'quick' ? quickGameSettings.secondChanceSelect : gridStyleSettings.secondChanceSelect;
	playerData.score = 0;
	playerData.grid = false;
	playerData.index = -1;
	playerData.lastIndex = -1;
	
	timeData.mode = 'countdown';

	resetTimerDisplay();
	$('.gameTimer').hide();
	$('.gameTotal').hide();
	$('.gameScore').hide();
	$('.gameChance').hide();

	$('.gameChance').removeClass('gameChanceWithPoints');
	$('#chanceHolder').hide();
	
	$('#gameStatus .gameQuestionStatus').html('');

	$('#gridStyleLists').empty();
	$('#gridStyleHolder').hide();

	if(gameData.type == 'quick'){
		filterCategoryQuestion();
		if(questionSettings.randomQuestion && !$.editor.enable){
			shuffle(gameData.sequence_arr);
		}

		if($.editor.enable){
			loadQuestion();
		}else{
			if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
				if(socketData.host){
					socketData.loaded = 0;
					postSocketUpdate('sequence', gameData.sequence_arr);
				}
				postSocketUpdate('loadquestion');
			}else{
				showPlayerInstruction();
			}
		}
	}else{
		$('.gameChance').addClass('gameChanceWithPoints');
		if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
			if(socketData.host){
				selectGridCategory();
				postSocketUpdate('buildGridStyle', playerData.gridCategory_arr);
			}
		}else{
			selectGridCategory();
			buildGridStyle();
			toggleGridStyle(true);
		}
	}
}

 /*!
 * 
 * STOP GAME - This is the function that runs to stop play game
 * 
 */
function stopGame(){
	stopAudio();
	TweenMax.killAll(false, true, false);
	$('.questionHolder').remove();
}

function saveGame(score, type){
	if ( typeof toggleScoreboardSave == 'function' ) { 
		$.scoreData.score = score;
		if(typeof type != 'undefined'){
			$.scoreData.type = type;	
		}
		toggleScoreboardSave(true);
	}

	/*$.ajax({
      type: "POST",
      url: 'saveResults.php',
      data: {score:score},
      success: function (result) {
          console.log(result);
      }
    });*/
}

function showPlayerInstruction(){
	$('#questionLoaderHolder').hide();
	$('#questionHolder').hide();
	$('#questionResultHolder').hide();
	$('#instructionHolder').show();

	var instructionsHTML = gameTextDisplay.instruction;

	if(window.matchMedia("(pointer: coarse)").matches) {
		// touchscreen
	}else{
		instructionsHTML += '<br>'+gameTextDisplay.instructionKeyboard;
		for(var n=0; n<playerData.player.length; n++){
			instructionsHTML += '<br>['+quickGameSettings.key[n]+'] = '+playerData.player[n].name;
		}
	}

	$('#instructionHolder .fontInstruction').html(instructionsHTML);

	TweenMax.to($('#questionHolder'), quickGameSettings.instructionDelay, {overwrite:true, onComplete:function(){
		$('#instructionHolder').hide();
		$('.gameTotal').show();
		loadQuestion();
	}});
}

/*!
 * 
 * BUILD PLAYERS - This is the function that runs to build players
 * 
 */
function buildGamePlayers(){
	$('#gamePlayersHolder').empty();

	playerData.player = [];
	for(var n=0; n<totalPlayerData.total; n++){
		var playerName = $('#player'+(n+1)).val();
		var playerOrTeam  = quickGameSettings.player;
		if(gameData.type != 'quick'){
			playerOrTeam  = gridStyleSettings.player;
		}
		playerName = playerName == '' ? playerOrTeam+(n+1) : playerName;
		playerData.player.push({name:playerName, score:0, updateScore:0, answer:0, correct:0, steal:0});
	}

	var totalPlayers = playerData.player.length;

	var value = {};
	value.fontSize = playersProperty.fontSize;
	value.lineHeight = playersProperty.lineHeight;
	value.offsetTop = playersProperty.offsetTop;
	value.color = playersProperty.color;
	value.margin = playersProperty.margin;

	var playerW = 20;
	var playerSpace = 1;
	var totalW = (playerW * totalPlayers) + (playerSpace * (totalPlayers-1));
	var pos = {left:50-(totalW/2), top:85};
	
	for(var n=0; n<playerData.player.length; n++){
		value.width = 20;
		value.height = 10;
		value.top = 0;
		value.left = 0;
		value.text = playerData.player[n].name;
		value.score = playerData.player[n].score;

		var playerWrapperHTML = "<div id='playerStats"+n+"' class='player fitImg resizeBorder' data-border='"+playersButtonProperty.roundNumber+"' style='border-radius: "+playersButtonProperty.roundNumber+"px "+playersButtonProperty.roundNumber+"px "+playersButtonProperty.roundNumber+"px "+playersButtonProperty.roundNumber+"px; -moz-border-radius: "+playersButtonProperty.roundNumber+"px "+playersButtonProperty.roundNumber+"px "+playersButtonProperty.roundNumber+"px "+playersButtonProperty.roundNumber+"px; -webkit-border-radius: "+playersButtonProperty.roundNumber+"px "+playersButtonProperty.roundNumber+"px "+playersButtonProperty.roundNumber+"px "+playersButtonProperty.roundNumber+"px; width:"+value.width+"%; height:"+value.height+"%; top:"+value.top+"%; left:"+value.left+"%;'></div>";
		$('#gamePlayersHolder').append(playerWrapperHTML);
		
		if(playersButtonProperty.status){
			var backgroundShadowHTML = "<div class='shadow resizeBorder' data-border='"+playersButtonProperty.roundNumber+"' style='border-radius: "+playersButtonProperty.roundNumber+"px "+playersButtonProperty.roundNumber+"px "+playersButtonProperty.roundNumber+"px "+playersButtonProperty.roundNumber+"px; -moz-border-radius: "+playersButtonProperty.roundNumber+"px "+playersButtonProperty.roundNumber+"px "+playersButtonProperty.roundNumber+"px "+playersButtonProperty.roundNumber+"px; -webkit-border-radius: "+playersButtonProperty.roundNumber+"px "+playersButtonProperty.roundNumber+"px "+playersButtonProperty.roundNumber+"px "+playersButtonProperty.roundNumber+"px; background:"+playersButtonProperty.shadowColor+"; width:100%; height:100%; position:absolute; top:"+value.offsetTop+"%; left:0;'></div>";
			$('#playerStats'+n).append(backgroundShadowHTML);
			
			var backgroundHTML = "<div class='background resizeBorder' data-border='"+playersButtonProperty.roundNumber+"' style='border-radius: "+playersButtonProperty.roundNumber+"px "+playersButtonProperty.roundNumber+"px "+playersButtonProperty.roundNumber+"px "+playersButtonProperty.roundNumber+"px; -moz-border-radius: "+playersButtonProperty.roundNumber+"px "+playersButtonProperty.roundNumber+"px "+playersButtonProperty.roundNumber+"px "+playersButtonProperty.roundNumber+"px; -webkit-border-radius: "+playersButtonProperty.roundNumber+"px "+playersButtonProperty.roundNumber+"px "+playersButtonProperty.roundNumber+"px "+playersButtonProperty.roundNumber+"px; background:"+playersButtonProperty.color+"; width:100%; height:85%; position:absolute; top:"+value.offsetTop+"%; left:0;'></div>";
			$('#playerStats'+n).append(backgroundHTML);
		}
		
		var playerHTML = "<div id='playerText"+n+"' class='text fontPlayerName resizeFont' data-fontSize='"+value.fontSize+"' data-lineHeight='"+value.lineHeight+"' style='position:relative; margin:0 "+value.margin+"%; font-size:"+value.fontSize+"px; line-height:"+value.lineHeight+"px; color:"+value.color+";'><span class='icon' style='display:inline-block; width:"+(value.width/1.2)+"%; margin-right:"+value.margin+"%;'><img src='assets/item_avatar.svg' /></span><span class='name'>"+value.text+"</span><span class='score'>"+value.score+"</span></div>";
		$('#playerStats'+n).append(playerHTML);
		
		var clickHTML = "<div class='buttonClick resizeBorder' data-border='"+playersButtonProperty.roundNumber+"' style='position:absolute; border-radius: "+playersButtonProperty.roundNumber+"px "+playersButtonProperty.roundNumber+"px "+playersButtonProperty.roundNumber+"px "+playersButtonProperty.roundNumber+"px; -moz-border-radius: "+playersButtonProperty.roundNumber+"px "+playersButtonProperty.roundNumber+"px "+playersButtonProperty.roundNumber+"px "+playersButtonProperty.roundNumber+"px; -webkit-border-radius: "+playersButtonProperty.roundNumber+"px "+playersButtonProperty.roundNumber+"px "+playersButtonProperty.roundNumber+"px "+playersButtonProperty.roundNumber+"px; width:100%; height:100%; position:absolute; top:"+value.offsetTop+"%;'></div>";
		$('#playerStats'+n).append(clickHTML);

		pos.left += playerW + playerSpace;

		$('#playerStats'+n).attr('data-id', n);
		buildGamePlayerEvent('#playerStats'+n);
	}

	resetGamePlayers();
	animateGamePlayers('name');
}

function resetGamePlayers(){
	var value = {};
	var totalPlayers = playerData.player.length;

	var playerW = 20;
	var playerH = 10;
	var spaceW = 1;
	var spaceH = 11;
	var totalW = (playerW * totalPlayers) + (spaceW * (totalPlayers-1));
	var pos = {left:50-(totalW/2), oriLeft:50-(totalW/2), top:85, col:0, maxCol:4};

	if(gameData.mode == 'portrait'){
		playerW = 40;
		playerH = 7;
		spaceW = 2;
		spaceH = 8;

		totalPlayers = 2;
		totalW = (playerW * totalPlayers) + (spaceW * (totalPlayers-1));
		pos = {left:50-(totalW/2),  oriLeft:50-(totalW/2), top:83, col:0, maxCol:2};
	}
	
	for(var n=0; n<playerData.player.length; n++){
		value.width = playerW;
		value.height = playerH;
		value.top = pos.top;
		value.left = pos.left;

		$('#playerStats'+n).css('width', value.width + '%');
		$('#playerStats'+n).css('height', value.height + '%');
		$('#playerStats'+n).css('top', value.top + '%');
		$('#playerStats'+n).css('left', value.left + '%');

		pos.left += playerW + spaceW;
		pos.col++;

		if(pos.col >= pos.maxCol){
			pos.col = 0;
			pos.left = pos.oriLeft;
			pos.top += spaceH;
		}
	}

}

function buildGamePlayerEvent(obj){
	if(!$.editor.enable){
		$(obj).click(function(){
			var playerIndex = Number($(this).attr('data-id'));
			if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
				if(playerIndex == socketData.gameIndex){
					postSocketUpdate('actionGamePlayer', playerIndex);
				}
			}else{
				actionGamePlayer(playerIndex);
			}
		});
	}
}

function actionGamePlayer(playerIndex){
	if($.editor.enable){
		return;
	}

	if(playerIndex < playerData.player.length){
		if(playerData.index == -1 && playerData.playerSelect){
			if(playerData.exclude.indexOf(playerIndex) == -1){
				playerData.index = playerIndex;
				focusTapPlayer(playerIndex);
				
				if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
					if(playerIndex == socketData.gameIndex){
						togglePlayerAction(false, false);
					}
				}else{
					togglePlayerAction(false, false);
				}
			}
		}else if(!playerData.animation){
			displayGamePlayerScore(playerIndex);
		}
	}
}

function togglePlayerAction(con, exclude){
	if(con){
		if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
			
		}else{
			if(gameData.type != 'quick' && !playerData.secondChance){
				return;
			}
		}

		if(gameData.secondChanceSelect && playerData.player.length == 2){

		}else{
			if(exclude){
				if(playerData.index != -1){
					playerData.exclude.push(playerData.index);
				}
			}
			playerData.index = -1;
			resetActivePlayer();
		}

		$('#gamePlayersHolder').css('pointer-events','auto');
		$('#questionHolder').css('pointer-events','none');
	}else{
		$('#gamePlayersHolder').css('pointer-events','none');
		$('#questionHolder').css('pointer-events','auto');
	}
}

function animateGamePlayerScore(con){
	var playerIndex = playerData.index;

	if(con){
		var currentScore = quickGameSettings.score;
		if(gameData.type != 'quick'){
			currentScore = gridStyleSettings.levels[playerData.pointID];
		}

		var scoreText = questionSettings.playerScore.replace('[PLAYER]', playerData.player[playerIndex].name);
		scoreText = scoreText.replace('[NUMBER]', addCommas(currentScore));
		$('.questionPlayerText').html(scoreText);

		var curScaleNum = .5;
		
		$('#playerStats'+playerIndex+' .score').html('+'+addCommas(questionSettings.scoreText.replace('[NUMBER]', currentScore)));

		$('#playerStats'+playerIndex+' .name').hide();
		$('#playerStats'+playerIndex+' .score').show();
		$('#playerStats'+playerIndex+' .score').css('opacity', 0);

		playerData.player[playerIndex].score += currentScore;

		TweenMax.to($('#playerStats'+playerIndex+' .score'), 0, {opacity:1, overwrite:true});
		TweenMax.to($('#playerStats'+playerIndex), 0, {scaleX:curScaleNum, scaleY:curScaleNum, overwrite:true});
		TweenMax.to($('#playerStats'+playerIndex), 1, {scaleX:1, scaleY:1, overwrite:true, ease:Elastic.easeOut, onComplete:function(){
			TweenMax.to($('#playerStats'+playerIndex), 1, {delay:.5, overwrite:true, onComplete:function(){
				animateGamePlayers('score');
			}});
		}});
	}else{
		$('.questionPlayerText').html(questionSettings.playerNoScore);
		animateGamePlayers('score');
	}
}

function animateGamePlayers(type){
	for(var n=0; n<playerData.player.length; n++){
		if(type == 'score'){
			displayGamePlayerScore(n);
		}else{
			displayGamePlayerName(n);
		}
	}
}

function displayGamePlayerScore(n){
	TweenMax.killTweensOf($('#playerStats'+n+' .name'));
	
	$('#playerStats'+n+' .name').hide();
	$('#playerStats'+n+' .score').show();
	$('#playerStats'+n+' .score').css('opacity', 0);
	$('#playerStats'+n+' .score').attr('data-score', 0);

	TweenMax.to(playerData.player[n], 1, {updateScore:playerData.player[n].score, overwrite:true, onUpdate:function(){
		$('#playerStats'+n+' .score').html(addCommas(questionSettings.scoreText.replace('[NUMBER]',Math.floor(playerData.player[n].updateScore))));
	}});

	TweenMax.to($('#playerStats'+n+' .score'), 1, {opacity:1, overwrite:true, onComplete:function(){
		TweenMax.to($('#playerStats'+n+' .score'), 1, {delay:1, opacity:1, overwrite:true, onComplete:function(){
			displayGamePlayerName(n);
		}});
	}});
}

function displayGamePlayerName(n){
	TweenMax.killTweensOf(playerData.player[n]);
	TweenMax.killTweensOf($('#playerStats'+n));
	TweenMax.killTweensOf($('#playerStats'+n+' .score'));

	playerData.player[n].updateScore = playerData.player[n].score;
	
	$('#playerStats'+n+' .score').hide();
	$('#playerStats'+n+' .name').show();
	$('#playerStats'+n+' .name').css('opacity', 0);
	
	TweenMax.to($('#playerStats'+n+' .name'), 1, {opacity:1, overwrite:true, onComplete:function(){
		
	}});
}

function resetActivePlayer(){
	$('#gamePlayersHolder .player').each(function(index, element) {
		$(this).removeClass('playerFocus');
	});

	$('.player').find('.background').css('background', playersButtonProperty.color);
	$('.player').find('.shadow').css('background', playersButtonProperty.shadowColor);

	for(var n=0; n<playerData.exclude.length; n++){
		var playerIndex = playerData.exclude;
		$('#playerStats'+playerIndex).find('.background').css('background', playersButtonProperty.disabledColor);
		$('#playerStats'+playerIndex).find('.shadow').css('background', playersButtonProperty.disabledShadowColor);
	}

	if(playerData.answered){
		$('.player').find('.background').css('background', playersButtonProperty.disabledColor);
		$('.player').find('.shadow').css('background', playersButtonProperty.disabledShadowColor);
	}
}

function focusTapPlayer(n){	
	playSound('soundPlayerSelect');

	//reset animation
	$('#gamePlayersHolder .player').each(function(index, element) {
		$(this).removeClass('playerFocus');
		TweenMax.to($(this), 0, {scaleX:1, scaleY:1, alpha:1, overwrite:true});	
	});
	
	$('.player').find('.background').css('background', playersButtonProperty.disabledColor);
	$('.player').find('.shadow').css('background', playersButtonProperty.disabledShadowColor);

	$('#playerStats'+n).find('.background').css('background', playersButtonProperty.activeColor);
	$('#playerStats'+n).find('.shadow').css('background', playersButtonProperty.activeShadowColor);

	$('#playerStats'+n).addClass('playerFocus');

	//select animation
	var curScaleNum = .5;
	TweenMax.to($('#playerStats'+n), 0, {scaleX:curScaleNum, scaleY:curScaleNum, overwrite:true});
	TweenMax.to($('#playerStats'+n), 1, {scaleX:1, scaleY:1, overwrite:true, ease:Elastic.easeOut, onComplete:function(){
		
	}});
}

/*!
 * 
 * BUILD GRID STYLE - This is the function that runs to build grid style
 * 
 */
function selectGridCategory(){
	playerData.gridCategory_arr = [];
	for(n=0;n<gameData.targetArray.length;n++){
		if(gameData.targetArray[n].gameType.indexOf(gameData.type) != -1){
			playerData.gridCategory_arr.push(gameData.targetArray[n].category);
		}
	}

	playerData.gridCategory_arr = unique(playerData.gridCategory_arr);
	shuffle(playerData.gridCategory_arr);
}

function buildGridStyle(){
	$('#gridStyleLists').empty();
	gridStyleData.page = 1;

	var totalCategory = playerData.gridCategory_arr.length;
	totalCategory = totalCategory > gridStyleSettings.maxCategory ? gridStyleSettings.maxCategory : totalCategory;

	var value = {};
	value.fontSize = gridStyleProperty.fontSize;
	value.lineHeight = gridStyleProperty.lineHeight;
	value.offsetTop = gridStyleProperty.offsetTop;
	value.color = gridStyleProperty.color;
	value.margin = gridStyleProperty.margin;

	var catW = 15;
	var catH = 9;
	var catSpaceW = .5;
	var catSpaceH = 10;
	var totalW = (catW * totalCategory) + (catSpaceW * (totalCategory-1));
	var pos = {left:50-(totalW/2), top:12};

	playerData.gridPoints_arr = [];
	
	for(var n=0; n<totalCategory; n++){
		value.width = catW;
		value.height = catH;
		value.top = pos.top;
		value.left = pos.left;
		value.text = playerData.gridCategory_arr[n];

		var gridContainerHTML = "<div id='gridContainer"+n+"' class='gridContainer'></div>";
		$('#gridStyleLists').append(gridContainerHTML);

		var categoryWrapperHTML = "<div id='category"+n+"' class='gridStyle fitImg resizeBorder' data-border='"+gridStyleButtonProperty.roundNumber+"' style='border-radius: "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px; -moz-border-radius: "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px; -webkit-border-radius: "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px; width:"+value.width+"%; height:"+value.height+"%; top:"+value.top+"%; left:"+value.left+"%;'></div>";
		$('#gridContainer'+n).append(categoryWrapperHTML);
		
		if(gridStyleButtonProperty.status){
			var backgroundShadowHTML = "<div class='shadow resizeBorder' data-border='"+gridStyleButtonProperty.roundNumber+"' style='border-radius: "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px; -moz-border-radius: "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px; -webkit-border-radius: "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px; background:"+gridStyleButtonProperty.labelShadowColor+"; width:100%; height:100%; position:absolute; top:"+value.offsetTop+"%; left:0;'></div>";
			$('#category'+n).append(backgroundShadowHTML);
			
			var backgroundHTML = "<div class='background resizeBorder' data-border='"+gridStyleButtonProperty.roundNumber+"' style='border-radius: "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px; -moz-border-radius: "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px; -webkit-border-radius: "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px; background:"+gridStyleButtonProperty.labelColor+"; width:100%; height:85%; position:absolute; top:"+value.offsetTop+"%; left:0;'></div>";
			$('#category'+n).append(backgroundHTML);
		}
		
		var categoryHTML = "<div id='categoryText"+n+"' class='text fontAnswer resizeFont' data-fontSize='"+value.fontSize+"' data-lineHeight='"+value.lineHeight+"' style='position:relative; margin:0 "+value.margin+"%; font-size:"+value.fontSize+"px; line-height:"+value.lineHeight+"px; color:"+value.color+"; text-align:center;'>"+value.text+"</div>";
		$('#category'+n).append(categoryHTML);

		playerData.gridPoints_arr.push({category:playerData.gridCategory_arr[n], levels:[]})

		//points
		for(var l=0; l<gridStyleSettings.levels.length; l++){
			var sequence_arr = [];
			for(q=0;q<gameData.targetArray.length;q++){
				if(gameData.targetArray[q].gameType.indexOf(gameData.type) != -1 && gameData.targetArray[q].categoryLevel == (l+1) && gameData.targetArray[q].category == playerData.gridCategory_arr[n]){
					sequence_arr.push(q);
				}
			}
			
			if(questionSettings.randomQuestion){
				shuffle(sequence_arr);	
			}
			playerData.gridPoints_arr[n].levels.push({seq:sequence_arr, index:0});

			value.top += catSpaceH;
			value.text = addCommas(questionSettings.scoreText.replace('[NUMBER]', (gridStyleSettings.levels[l])));

			var pointWrapperHTML = "<div id='cat"+n+"_point"+l+"' class='gridStyle fitImg resizeBorder' data-border='"+gridStyleButtonProperty.roundNumber+"' style='border-radius: "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px; -moz-border-radius: "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px; -webkit-border-radius: "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px; width:"+value.width+"%; height:"+value.height+"%; top:"+value.top+"%; left:"+value.left+"%;'></div>";
			$('#gridContainer'+n).append(pointWrapperHTML);
			
			if(gridStyleButtonProperty.status){
				var backgroundShadowHTML = "<div class='shadow resizeBorder' data-border='"+gridStyleButtonProperty.roundNumber+"' style='border-radius: "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px; -moz-border-radius: "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px; -webkit-border-radius: "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px; background:"+gridStyleButtonProperty.shadowColor+"; width:100%; height:100%; position:absolute; top:"+value.offsetTop+"%; left:0;'></div>";
				$('#cat'+n+'_point'+l).append(backgroundShadowHTML);
				
				var backgroundHTML = "<div class='background resizeBorder' data-border='"+gridStyleButtonProperty.roundNumber+"' style='border-radius: "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px; -moz-border-radius: "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px; -webkit-border-radius: "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px; background:"+gridStyleButtonProperty.color+"; width:100%; height:85%; position:absolute; top:"+value.offsetTop+"%; left:0;'></div>";
				$('#cat'+n+'_point'+l).append(backgroundHTML);
			}
			
			var pointHTML = "<div id='categoryPointsText"+n+"' class='text fontAnswer resizeFont' data-fontSize='"+value.fontSize+"' data-lineHeight='"+value.lineHeight+"' style='position:relative; margin:0 "+value.margin+"%; font-size:"+value.fontSize+"px; line-height:"+value.lineHeight+"px; color:"+value.color+"; text-align:center;'>"+value.text+"</div>";
			$('#cat'+n+'_point'+l).append(pointHTML);
			
			var clickHTML = "<div class='buttonClick resizeBorder' data-border='"+gridStyleButtonProperty.roundNumber+"' style='position:absolute; border-radius: "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px; -moz-border-radius: "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px; -webkit-border-radius: "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px "+gridStyleButtonProperty.roundNumber+"px; width:100%; height:100%; position:absolute; top:"+value.offsetTop+"%;'></div>";
			$('#cat'+n+'_point'+l).append(clickHTML);

			$('#cat'+n+'_point'+l).attr('data-id', l);
			$('#cat'+n+'_point'+l).attr('data-cat-id', n);

			buildGridStyleEvent('#cat'+n+'_point'+l);
		}
		pos.left += catW + catSpaceW;
	}

	resetGridStyle();
}

function resetGridStyle(){
	var totalCategory = playerData.gridCategory_arr.length;
	totalCategory = totalCategory > gridStyleSettings.maxCategory ? gridStyleSettings.maxCategory : totalCategory;

	gridStyleData.total = totalCategory;

	var value = {};

	var catW = 15;
	var catH = 9;
	var catSpaceW = .5;
	var catSpaceH = 10;
	var totalW = (catW * totalCategory) + (catSpaceW * (totalCategory-1));
	var pos = {left:50-(totalW/2), oriLeft:50-(totalW/2), top:12, col:0, colMax:totalCategory};

	if(gameData.mode == 'portrait'){
		totalCategory = 1;

		catW = 45;
		catH = 8;
		catSpaceW = 2;
		catSpaceH = 10;

		totalW = (catW * totalCategory) + (catSpaceW * (totalCategory-1));
		pos = {left:50-(totalW/2), oriLeft:50-(totalW/2), top:12, col:0, colMax:0};
	}
	
	for(var n=0; n<playerData.gridCategory_arr.length; n++){
		value.width = catW;
		value.height = catH;
		value.top = pos.top;
		value.left = pos.left;

		$('#category'+n).css('width', value.width + '%');
		$('#category'+n).css('height', value.height + '%');
		$('#category'+n).css('top', value.top + '%');
		$('#category'+n).css('left', value.left + '%');

		//points
		for(var l=0; l<gridStyleSettings.levels.length; l++){
			value.top += catSpaceH;

			$('#cat'+n+'_point'+l).css('width', value.width + '%');
			$('#cat'+n+'_point'+l).css('height', value.height + '%');
			$('#cat'+n+'_point'+l).css('top', value.top + '%');
			$('#cat'+n+'_point'+l).css('left', value.left + '%');
		}
		
		pos.left += catW + catSpaceW;
		pos.col++;

		if(pos.col > pos.colMax){
			pos.col = 0;
			pos.left = pos.oriLeft;
		}
	}

	displayGridStyle();
}

function buildGridStyleEvent(obj){
	if(!$.editor.enable){
		$(obj).click(function(){
			if(!$(obj).hasClass('disabled')){
				if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
					if(playerData.index == socketData.gameIndex){
						postSocketUpdate('focusGridStyle', $(obj).attr('id'));
					}
				}else{
					focusGridStyle(obj);
				}
			}
		});
	}
}

function focusGridStyle(obj){
	$('#gridStyleHolder .gridStyle').each(function(index, element) {
		$(obj).removeClass('gridFocus');
	});
	
	playerData.lastIndex = playerData.index;
	var catID = $(obj).attr('data-cat-id');
	var pointID = $(obj).attr('data-id');

	playerData.pointID = pointID;
	gameData.sequence_arr = playerData.gridPoints_arr[catID].levels[pointID].seq;
	gameData.questionNum = playerData.gridPoints_arr[catID].levels[pointID].index;

	$(obj).find('.background').css('background', gridStyleButtonProperty.activeColor);
	$(obj).find('.shadow').css('background', gridStyleButtonProperty.activeShadowColor);
	
	playSound('soundSelectAnswer');
	togglePlayerAction(true, false);

	//select animation
	$(obj).addClass('gridFocus');

	var curScaleNum = .5;
	TweenMax.to($(obj), 0, {scaleX:curScaleNum, scaleY:curScaleNum, overwrite:true});
	TweenMax.to($(obj), 1, {scaleX:1, scaleY:1, overwrite:true, ease:Elastic.easeOut, onComplete:function(){
		$(obj).addClass('disabled');
		$(obj).find('.background').css('background', gridStyleButtonProperty.disabledColor);
		$(obj).find('.shadow').css('background', gridStyleButtonProperty.disabledShadowColor);

		if(gameData.sequence_arr.length > 0){
			$('#gameStatus .gameScoreStatus').html(addCommas(questionSettings.scoreText.replace('[NUMBER]', (gridStyleSettings.levels[pointID]))));
			toggleGridStyle(false);
			if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
				if(socketData.host){
					socketData.loaded = 0;
				}
				postSocketUpdate('loadquestion');
			}else{
				loadQuestion();
			}
		}else{
			if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
				if(playerData.index == socketData.gameIndex){
					togglePlayerAction(false, false);
				}
			}else{
				togglePlayerAction(false, false);
			}
			alert('There are no question in selected category!');
			checkGridStyleComplete();
		}	
	}});
}

function toggleGridStyle(con){
	if(con){
		playerData.grid = true;
		playerData.secondChance = false;
		playerData.index = playerData.lastIndex;
		togglePlayerAction(true, false);
		toggleQuestionLoader(false);

		if(playerData.lastIndex == -1){
			$('#gridStyleHolder .fontGridStatus').html(gameTextDisplay.randomPlayer);
			if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
				if(socketData.host){
					selectRandomGamePlayer();
				}
			}else{
				selectRandomGamePlayer();
			}
		}else{
			TweenMax.to($('#questionHolder'), 1, {overwrite:true, onComplete:function(){
				switchGridStylePlayer();
				highlightPlayer();
			}});
		}
		
		$('#questionHolder').hide();
		$('#questionResultHolder').hide();
		$('#gridStyleHolder').show();

		$('.gameScore').hide();
		$('.gameTimer').hide();
		$('#chanceHolder').hide();
		$('.gameChance').hide();
		
		checkGridStyleComplete();
		animateGamePlayers('name');
	}else{
		playerData.grid = false;
		$('#gridStyleHolder').hide();
		$('.gameScore').show();
	}
}

function checkGridStyleComplete(){
	var totalCategoryPoints = gridStyleData.total * gridStyleSettings.levels.length;

	if(totalCategoryPoints == $('#gridStyleLists .disabled').length){
		TweenMax.to($('#questionHolder'), 3, {overwrite:true, onComplete:function(){
			goPage('result');
		}});
	}
}

function toggleGridStylePage(con){
	if(con){
		gridStyleData.page++;
		gridStyleData.page = gridStyleData.page > gridStyleData.total ? 1 : gridStyleData.page;
	}else{
		gridStyleData.page--;
		gridStyleData.page = gridStyleData.page < 1 ? gridStyleData.total : gridStyleData.page;
	}
	displayGridStyle();	
}

function displayGridStyle(){
	if(gameData.mode == 'portrait'){
		$('#gridStyleLists .gridContainer').hide();
		$('#gridStyleLists .gridContainer').each(function(index, element) {
			if(index == (gridStyleData.page-1)){
				$(this).show();
			}
		});
	}else{
		$('#gridStyleLists .gridContainer').show();
	}
}

function selectRandomGamePlayer(){
	playerData.chance = 0;
	playerData.updateChance = 0;
	playerData.index = randomIntFromInterval(0,playerData.player.length-1);

	TweenMax.to(playerData, 3, {delay:1, chance:35, overwrite:true, onUpdate:function(){
		if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
			if(socketData.host){
				postSocketUpdate('updateCounter', {index:playerData.index, chance:playerData.chance, updateChance:playerData.updateChance});
			}
		}else{
			updateCounter();
		}
	},onComplete:function(){
		if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
			if(socketData.host){
				postSocketUpdate('updateCounterComplete');
			}
		}else{
			$('#gridStyleHolder .fontGridStatus').html(gameTextDisplay.selectCategory);
			highlightPlayer();
		}
	}});
}

function updateCounter(){
	if(playerData.updateChance != Math.round(playerData.chance)){
		playerData.updateChance = Math.round(playerData.chance);

		playSound('soundCounter');
		switchGridStylePlayer();

		var currentBgColor = playersButtonProperty.activeColor;
		var currentBgShadowColor = playersButtonProperty.activeShadowColor;
		var currentDimBgColor = playersButtonProperty.disabledColor;
		var currentDimBgShadowColor = playersButtonProperty.disabledShadowColor;

		$('.player').find('.background').css('background', currentDimBgColor);
		$('.player').find('.shadow').css('background', currentDimBgShadowColor);

		$('#playerStats'+playerData.index).find('.background').css('background', currentBgColor);
		$('#playerStats'+playerData.index).find('.shadow').css('background', currentBgShadowColor);
	}
}

function switchGridStylePlayer(){
	playerData.index++;
	playerData.index = playerData.index >= playerData.player.length ? 0 : playerData.index;
}

function highlightPlayer(){
	playSound('soundPlayerSelect');
	
	var currentBgColor = playersButtonProperty.activeColor;
	var currentBgShadowColor = playersButtonProperty.activeShadowColor;
	var currentDimBgColor = playersButtonProperty.disabledColor;
	var currentDimBgShadowColor = playersButtonProperty.disabledShadowColor;

	$('.player').find('.background').css('background', currentDimBgColor);
	$('.player').find('.shadow').css('background', currentDimBgShadowColor);

	$('#playerStats'+playerData.index).find('.background').css('background', currentBgColor);
	$('#playerStats'+playerData.index).find('.shadow').css('background', currentBgShadowColor);

	$('#gamePlayersHolder .player').each(function(index, element) {
		$(this).removeClass('playerFocus');
	});
	$('#playerStats'+playerData.index).addClass('playerFocus');

	var curScaleNum = .5;
	TweenMax.to($('#playerStats'+playerData.index), 0, {scaleX:curScaleNum, scaleY:curScaleNum, overwrite:true});
	TweenMax.to($('#playerStats'+playerData.index), 1, {scaleX:1, scaleY:1, overwrite:true, ease:Elastic.easeOut, onComplete:function(){
		if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
			togglePlayerAction(true, false);
			if(playerData.index == socketData.gameIndex){
				togglePlayerAction(false, false);
			}
		}else{
			togglePlayerAction(false, false);
		}
	}});
}

/*!
 * 
 * LOAD QUESTION - This is the function that runs to load new question
 * 
 */
function loadQuestion(){
	createjs.Sound.stop();
	
	$('.gameChance').hide();
	$('#questionHolder').show();
	$('#questionResultHolder').hide();

	if(!$.editor.enable){
		timeData.accumulate = 0;
		timeData.countdown = gameData.type == 'quick' ? quickGameSettings.timerSettings.timer : gridStyleSettings.timerSettings.timer;
		timeData.status = gameData.type == 'quick' ? quickGameSettings.timerSettings.status : gridStyleSettings.timerSettings.status;
		
		playerData.answered = false;
		playerData.playerSelect = false;
		playerData.timer = false;
		playerData.secondChance = false;
		playerData.secondAnswered = false;
		playerData.exclude = [];

		togglePlayerAction(true, false);

		storeData.timerDate = 0;
		storeData.status = false;
	}
	
	playerData.answer_arr = [];
	toggleQuestionLoader(true);
	removeSoundAssets();
	resetQuestion();
	fileFest=[];
	gameData.build = false;
	gameData.sequenceNum = gameData.sequence_arr[gameData.questionNum];
		
	var randomAnswerLayout = false;
	if(answerSettings.randomAnswer && !$.editor.enable){
		randomAnswerLayout = true;
	}
	
	if(gameData.targetArray[gameData.sequenceNum].answers.drag == 'true' && dragDropSettings.randomAnswer && !$.editor.enable){
		randomAnswerLayout = true;	
	}
	
	//landscape & portrait
	quesLandscapeSequence_arr = [];
	quesPortraitSequence_arr = [];
	
	audioLandscape_arr=[];
	audioPortrait_arr=[];
	
	for(var t=0; t<2; t++){
		var loopTargetArray = t == 0 ? quesLandscape_arr : quesPortrait_arr;
		var loopTargetSeqArray = t == 0 ? quesLandscapeSequence_arr : quesPortraitSequence_arr;
		var loopAudioArray = t == 0 ? audioLandscape_arr : audioPortrait_arr;
		var thisMode = t == 0 ? 'landscape' : 'portrait';
		
		var submitButton = -1;
		for(var n=0;n<loopTargetArray[gameData.sequenceNum].answers.answer.length;n++){
			if(loopTargetArray[gameData.sequenceNum].answers.answer[n].submit == 'false' || loopTargetArray[gameData.sequenceNum].answers.answer[n].submit == undefined){
				loopTargetSeqArray.push(n);
			}else{
				submitButton = n;
			}
		}
		
		if(loopTargetArray[gameData.sequenceNum].background.text != '' && loopTargetArray[gameData.sequenceNum].background.text != undefined){
			fileFest.push({src:loopTargetArray[gameData.sequenceNum].background.text, id:thisMode+'backgroundImage', type: createjs.LoadQueue.IMAGE})
		}
		
		if(loopTargetArray[gameData.sequenceNum].type == 'image'){
			fileFest.push({src:loopTargetArray[gameData.sequenceNum].text, id:thisMode+'questionImage', type: createjs.LoadQueue.IMAGE})
		}
		
		var questionAudio = loopTargetArray[gameData.sequenceNum].audio;
		questionAudio = questionAudio == undefined ? '' : questionAudio;
		
		if(questionAudio != ''){
			loopAudioArray.push({type:'question', id:thisMode+'questionAudio', list:0});
			fileFest.push({src:loopTargetArray[gameData.sequenceNum].audio, id:thisMode+'questionAudio'})
		}
		
		if(randomAnswerLayout){
			shuffle(loopTargetSeqArray);
		}

		if(submitButton != -1){
			loopTargetSeqArray.push(submitButton);
		}
		
		for(var n=0;n<loopTargetArray[gameData.sequenceNum].groups.length;n++){
			var groupAudio = loopTargetArray[gameData.sequenceNum].groups[n].audio;
			groupAudio = groupAudio == undefined ? '' : groupAudio;
			
			if(groupAudio != ''){
				loopAudioArray.push({type:'group', id:thisMode+'groupAudio'+n, list:n});
				fileFest.push({src:loopTargetArray[gameData.sequenceNum].groups[n].audio, id:thisMode+'groupAudio'+n})
			}
		}
		
		for(var n=0;n<loopTargetArray[gameData.sequenceNum].answers.answer.length;n++){
			if(loopTargetArray[gameData.sequenceNum].answers.answer[n].type == 'image'){
				fileFest.push({src:loopTargetArray[gameData.sequenceNum].answers.answer[n].text, id:thisMode+'answerImage'+n, type: createjs.LoadQueue.IMAGE})
			}
			
			if(loopTargetArray[gameData.sequenceNum].answers.answer[n].dropLabelType == 'image'){
				fileFest.push({src:loopTargetArray[gameData.sequenceNum].answers.answer[n].dropLabelText, id:thisMode+'answerLabelImage'+n, type: createjs.LoadQueue.IMAGE})
			}
			
			var answerNum = loopTargetSeqArray[n];
			var answerAudio = loopTargetArray[gameData.sequenceNum].answers.answer[answerNum].audio;
			answerAudio = answerAudio == undefined ? '' : answerAudio;
			
			if(answerAudio != '' && checkBoolean(loopTargetArray[gameData.sequenceNum].answers.answer[answerNum].dragEnable)){
				loopAudioArray.push({type:'answer', id:thisMode+'answerAudio'+answerNum, list:n});
				fileFest.push({src:loopTargetArray[gameData.sequenceNum].answers.answer[answerNum].audio, id:thisMode+'answerAudio'+answerNum})
			}
		}
		
		for(var n=0;n<loopTargetArray[gameData.sequenceNum].inputs.length;n++){
			if(loopTargetArray[gameData.sequenceNum].inputs[n].type == 'image'){
				fileFest.push({src:loopTargetArray[gameData.sequenceNum].inputs[n].text, id:thisMode+'inputImage'+n, type: createjs.LoadQueue.IMAGE})
			}
		}
		
		if(loopTargetArray[gameData.sequenceNum].explanation.type == 'image'){
			fileFest.push({src:loopTargetArray[gameData.sequenceNum].explanation.text, id:thisMode+'explanationImage', type: createjs.LoadQueue.IMAGE})
		}
		
		var explanationAudio = loopTargetArray[gameData.sequenceNum].explanation.audio;
		explanationAudio = explanationAudio == undefined ? '' : explanationAudio;
		
		if(explanationAudio != ''){
			loopAudioArray.push({type:'explanation', id:thisMode+'explanationAudio', list:0});
			fileFest.push({src:loopTargetArray[gameData.sequenceNum].explanation.audio, id:thisMode+'explanationAudio'});
		}
	}
	
	if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
		postSocketUpdate('loadQuestionReady');
	}else{
		if(fileFest.length > 0){
			loadQuestionAssets();
		}else{
			buildQuestion();
		}
	}
}

/*!
 * 
 * BUILD QUESTION - This is the function that runs to build question
 * 
 */
function buildQuestion(){
	animateGamePlayers('name');
	if(gameData.type == 'quick'){
		playerData.playerSelect = true;
	}else{
		if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
			if(playerData.index == socketData.gameIndex){
				togglePlayerAction(false, false);
			}
		}else{
			togglePlayerAction(false, false);
		}
	}

	toggleQuestionLoader(false);
	stopAudio();
	toggleAudioInterval(false);
	audioData.audioNum = 0;
	resetQuestion();
	
	if(gameData.mode == 'landscape'){
		gameData.targetArray = quesLandscape_arr;
		gameData.targetAnswerSequence = quesLandscapeSequence_arr;
		gameData.targetAudio = audioLandscape_arr;
	}else{
		gameData.targetArray = quesPortrait_arr;
		gameData.targetAnswerSequence = quesPortraitSequence_arr;
		gameData.targetAudio = audioPortrait_arr;	
	}
	
	//total display
	var curQuestionText = questionSettings.totalText.replace('[NUMBER]', (gameData.questionNum+1));
	var totalQuestionsLength = gameData.sequence_arr.length;
	
	if(questionSettings.totalQuestionLimit != 0){
		var totalMax = questionSettings.totalQuestionLimit > totalQuestionsLength ? totalQuestionsLength : questionSettings.totalQuestionLimit;
		curQuestionText = curQuestionText.replace('[TOTAL]', totalMax);
	}else{	
		curQuestionText = curQuestionText.replace('[TOTAL]', totalQuestionsLength);
	}
	$('#gameStatus .gameQuestionStatus').html(curQuestionText);
	
	buildBackground();
	
	//questions
	var value = getArrayValue('question');
	if(value.type == 'image'){
		var questionHTML = '<div class="question fontQuestion fitImg" style="top:'+value.top+'%; left:'+value.left+'%; width:'+value.width+'%; "><img src="'+gameData.targetArray[gameData.sequenceNum].text+'" /></div>';
	}else{
		var questionHTML = '<div class="question fontQuestion resizeFont" data-fontSize="'+value.fontSize+'" data-lineHeight="'+value.lineHeight+'" style="font-size:'+value.fontSize+'px; line-height:'+value.lineHeight+'px; color:'+value.color+';  text-align:'+value.align+'; top:'+value.top+'%; left:'+value.left+'%; width:'+value.width+'%; height:'+value.height+'%; ">'+gameData.targetArray[gameData.sequenceNum].text+'</div>';
	}
	$('#questionHolder').append(questionHTML);
	
	playerData.answerRevealed = false;
	playerData.answerResult = false;

	buildGroups();
	buildAnswers();
	buildInputs();
	buildVideo();
	buildExplanation();
	gameData.build = true;
	resizeGameDetail();
	
	if(playerData.answered){
		presetAnswered();
		return;	
	}
	
	if(gameData.targetAudio.length == 0){
		initAnimateAnswers();
	}else if(gameData.targetAudio.length == 1 && gameData.targetAudio[0].type == 'question'){
		initAnimateAnswers();	
	}
	
	if($.editor.enable){
		if(edit.con == 'explanation'){
			$('#questionResultHolder').show();
			$('#questionHolder').hide();
			playerData.answered = true;
			playAudioLoop('explanation');
			$('#explanationHolder').show();
		}
		setBorderFocus();
	}
	
	if($.editor.enable && !edit.replay){
		return;	
	}
	
	resetTimerDisplay();
	$('#questionHolder').css('opacity', 0);
	TweenMax.to($('#questionHolder'), .5, {alpha:1, overwrite:true, onComplete:function(){
		if(gameData.targetAudio.length > 0){
			playAudioLoop();
		}
		
		if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
			if(socketData.host){
				toggleGameTimer(true);
				storeData.status = true;
			}
		}else{
			toggleGameTimer(true);
			storeData.status = true;
		}
	}});
}

function resetQuestion(){	
	$('#questionHolder').empty();	
	$('#explanationHolder').empty();
}

function buildBackground(){
	//questions
	var value = getArrayValue('background');
	if(value.image != ''){
		var bgHolderHTML = '<div id="bgHolder"></div>'
		$('#questionHolder').append(bgHolderHTML);
		
		var backgroundHTML = '<div class="background fitImg" style="top:'+value.top+'%; left:'+value.left+'%; width:'+value.width+'%; "><img src="'+gameData.targetArray[gameData.sequenceNum].background.text+'" /></div>';
		$('#bgHolder').append(backgroundHTML);
	}
}

/*!
 * 
 * GET ARRAY VALUE - This is the function that runs to get array value
 * 
 */
function getArrayValue(type, answerNum, n){
	var value = {type:'', submit:'', text:'', top:'', left:'', width:'', height:'', fontSize:'', lineHeight:'', color:'', background:'', align:'', correctAnswer:''};
	
	if(type == 'background'){
		value.image = !checkValue(gameData.targetArray[gameData.sequenceNum].background.text) ? '' : gameData.targetArray[gameData.sequenceNum].background.text;
		value.top = !checkValue(gameData.targetArray[gameData.sequenceNum].background.top) ? 0 : gameData.targetArray[gameData.sequenceNum].background.top;
		value.left = !checkValue(gameData.targetArray[gameData.sequenceNum].background.left) ? 0 : gameData.targetArray[gameData.sequenceNum].background.left;
		value.width = !checkValue(gameData.targetArray[gameData.sequenceNum].background.width) ? 100 : gameData.targetArray[gameData.sequenceNum].background.width;
		value.height = !checkValue(gameData.targetArray[gameData.sequenceNum].background.height) ? 100 : gameData.targetArray[gameData.sequenceNum].background.height;
	}else if(type == 'question'){
		value.type = gameData.targetArray[gameData.sequenceNum].type;
		value.top = !checkValue(gameData.targetArray[gameData.sequenceNum].top) ? questionProperty.top : gameData.targetArray[gameData.sequenceNum].top;
		value.left = !checkValue(gameData.targetArray[gameData.sequenceNum].left) ? questionProperty.left : gameData.targetArray[gameData.sequenceNum].left;
		value.width = !checkValue(gameData.targetArray[gameData.sequenceNum].width) ? questionProperty.width : gameData.targetArray[gameData.sequenceNum].width;
		value.height = !checkValue(gameData.targetArray[gameData.sequenceNum].height) ? questionProperty.height : gameData.targetArray[gameData.sequenceNum].height;
		value.fontSize = !checkValue(gameData.targetArray[gameData.sequenceNum].fontSize) ? questionProperty.fontSize : gameData.targetArray[gameData.sequenceNum].fontSize;
		value.lineHeight = !checkValue(gameData.targetArray[gameData.sequenceNum].lineHeight) ? questionProperty.lineHeight : gameData.targetArray[gameData.sequenceNum].lineHeight;
		value.color = !checkValue(gameData.targetArray[gameData.sequenceNum].color) ? questionProperty.color : gameData.targetArray[gameData.sequenceNum].color;
		value.align = !checkValue(gameData.targetArray[gameData.sequenceNum].align) ? questionProperty.align : gameData.targetArray[gameData.sequenceNum].align;
	}else if(type == 'video'){
		value.embed = gameData.targetArray[gameData.sequenceNum].videos[answerNum].embed;
		value.top = !checkValue(gameData.targetArray[gameData.sequenceNum].videos[answerNum].top) ? videoProperty.top : gameData.targetArray[gameData.sequenceNum].videos[answerNum].top;
		value.left = !checkValue(gameData.targetArray[gameData.sequenceNum].videos[answerNum].left) ? videoProperty.left : gameData.targetArray[gameData.sequenceNum].videos[answerNum].left;
		value.width = !checkValue(gameData.targetArray[gameData.sequenceNum].videos[answerNum].width) ? videoProperty.width : gameData.targetArray[gameData.sequenceNum].videos[answerNum].width;
		value.height = !checkValue(gameData.targetArray[gameData.sequenceNum].videos[answerNum].height) ? videoProperty.height : gameData.targetArray[gameData.sequenceNum].videos[answerNum].height;
		value.autoplay = !checkValue(gameData.targetArray[gameData.sequenceNum].videos[answerNum].autoplay) ? videoProperty.autoplay : gameData.targetArray[gameData.sequenceNum].videos[answerNum].autoplay;
		value.controls = !checkValue(gameData.targetArray[gameData.sequenceNum].videos[answerNum].controls) ? videoProperty.controls : gameData.targetArray[gameData.sequenceNum].videos[answerNum].controls;
	}else if(type == 'answer'){
		value.submit = gameData.targetArray[gameData.sequenceNum].answers.answer[answerNum].submit;
		value.type = gameData.targetArray[gameData.sequenceNum].answers.answer[answerNum].type;
		value.text = gameData.targetArray[gameData.sequenceNum].answers.answer[answerNum].text;	
		value.top = !checkValue(gameData.targetArray[gameData.sequenceNum].answers.answer[n].top) ? questionProperty.top : gameData.targetArray[gameData.sequenceNum].answers.answer[n].top;
		value.left = !checkValue(gameData.targetArray[gameData.sequenceNum].answers.answer[n].left) ? questionProperty.left : gameData.targetArray[gameData.sequenceNum].answers.answer[n].left;
		value.width = !checkValue(gameData.targetArray[gameData.sequenceNum].answers.answer[n].width) ? answersProperty.width : gameData.targetArray[gameData.sequenceNum].answers.answer[n].width;
		value.height = !checkValue(gameData.targetArray[gameData.sequenceNum].answers.answer[n].height) ? answersProperty.height : gameData.targetArray[gameData.sequenceNum].answers.answer[n].height;
		value.fontSize = !checkValue(gameData.targetArray[gameData.sequenceNum].answers.answer[n].fontSize) ? answersProperty.fontSize : gameData.targetArray[gameData.sequenceNum].answers.answer[n].fontSize;
		value.lineHeight = !checkValue(gameData.targetArray[gameData.sequenceNum].answers.answer[n].lineHeight) ? answersProperty.lineHeight : gameData.targetArray[gameData.sequenceNum].answers.answer[n].lineHeight;
		value.color = !checkValue(gameData.targetArray[gameData.sequenceNum].answers.answer[n].color) ? answersProperty.color : gameData.targetArray[gameData.sequenceNum].answers.answer[n].color;
		value.align = !checkValue(gameData.targetArray[gameData.sequenceNum].answers.answer[n].align) ? answersProperty.align : gameData.targetArray[gameData.sequenceNum].answers.answer[n].align;
		value.offsetTop = !checkValue(gameData.targetArray[gameData.sequenceNum].answers.answer[n].offsetTop) ? answersProperty.offsetTop : gameData.targetArray[gameData.sequenceNum].answers.answer[n].offsetTop;
		
		value.dragEnable = gameData.targetArray[gameData.sequenceNum].answers.answer[answerNum].dragEnable == 'false' ? false : true;
		value.dropEnable = gameData.targetArray[gameData.sequenceNum].answers.answer[answerNum].dropEnable == 'false' ? false : true;
		value.dropLabelType = gameData.targetArray[gameData.sequenceNum].answers.answer[answerNum].dropLabelType;
		value.dropLabelText = !checkValue(gameData.targetArray[gameData.sequenceNum].answers.answer[answerNum].dropLabelText) ? '' : gameData.targetArray[gameData.sequenceNum].answers.answer[answerNum].dropLabelText;	
		value.dropLabelTop = !checkValue(gameData.targetArray[gameData.sequenceNum].answers.answer[n].dropLabelTop) ? 0 : gameData.targetArray[gameData.sequenceNum].answers.answer[n].dropLabelTop;
		value.dropLabelLeft = !checkValue(gameData.targetArray[gameData.sequenceNum].answers.answer[n].dropLabelLeft) ? 0 : gameData.targetArray[gameData.sequenceNum].answers.answer[n].dropLabelLeft;
		value.dropLabelWidth = !checkValue(gameData.targetArray[gameData.sequenceNum].answers.answer[n].dropLabelWidth) ? 0 : gameData.targetArray[gameData.sequenceNum].answers.answer[n].dropLabelWidth;
		value.dropLabelHeight = !checkValue(gameData.targetArray[gameData.sequenceNum].answers.answer[n].dropLabelHeight) ? 0 : gameData.targetArray[gameData.sequenceNum].answers.answer[n].dropLabelHeight;
		value.dropLabelFontSize = !checkValue(gameData.targetArray[gameData.sequenceNum].answers.answer[n].dropLabelFontSize) ? dropLabelProperty.fontSize : gameData.targetArray[gameData.sequenceNum].answers.answer[n].dropLabelFontSize;
		value.dropLabelLineHeight = !checkValue(gameData.targetArray[gameData.sequenceNum].answers.answer[n].dropLabelLineHeight) ? dropLabelProperty.lineHeight : gameData.targetArray[gameData.sequenceNum].answers.answer[n].dropLabelLineHeight;
		value.dropLabelColor = !checkValue(gameData.targetArray[gameData.sequenceNum].answers.answer[n].dropLabelColor) ? dropLabelProperty.color : gameData.targetArray[gameData.sequenceNum].answers.answer[n].dropLabelColor;
		value.dropLabelAlign = !checkValue(gameData.targetArray[gameData.sequenceNum].answers.answer[n].dropLabelAlign) ? dropLabelProperty.align : gameData.targetArray[gameData.sequenceNum].answers.answer[n].dropLabelAlign;
		value.dropLabelOffsetTop = !checkValue(gameData.targetArray[gameData.sequenceNum].answers.answer[n].dropLabelOffsetTop) ? dropLabelProperty.offsetTop : gameData.targetArray[gameData.sequenceNum].answers.answer[n].dropLabelOffsetTop;
		
		value.dropLeft = !checkValue(gameData.targetArray[gameData.sequenceNum].answers.answer[n].dropLeft) ? questionProperty.left : gameData.targetArray[gameData.sequenceNum].answers.answer[n].dropLeft;
		value.dropTop = !checkValue(gameData.targetArray[gameData.sequenceNum].answers.answer[n].dropTop) ? questionProperty.top : gameData.targetArray[gameData.sequenceNum].answers.answer[n].dropTop;
		value.dropWidth = !checkValue(gameData.targetArray[gameData.sequenceNum].answers.answer[n].dropWidth) ? answersProperty.width : gameData.targetArray[gameData.sequenceNum].answers.answer[n].dropWidth;
		value.dropHeight = !checkValue(gameData.targetArray[gameData.sequenceNum].answers.answer[n].dropHeight) ? answersProperty.height : gameData.targetArray[gameData.sequenceNum].answers.answer[n].dropHeight;
		
		value.dropOffLeft = !checkValue(gameData.targetArray[gameData.sequenceNum].answers.answer[n].dropOffLeft) ? 0 : gameData.targetArray[gameData.sequenceNum].answers.answer[n].dropOffLeft;
		value.dropOffTop = !checkValue(gameData.targetArray[gameData.sequenceNum].answers.answer[n].dropOffTop) ? 0 : gameData.targetArray[gameData.sequenceNum].answers.answer[n].dropOffTop;
		
	}else if(type == 'input'){
		value.type = gameData.targetArray[gameData.sequenceNum].inputs[answerNum].type;
		value.submit = gameData.targetArray[gameData.sequenceNum].inputs[answerNum].submit;
		value.correctAnswer = gameData.targetArray[gameData.sequenceNum].inputs[answerNum].correctAnswer;
		value.top = !checkValue(gameData.targetArray[gameData.sequenceNum].inputs[answerNum].top) ? inputProperty.top : gameData.targetArray[gameData.sequenceNum].inputs[answerNum].top;
		value.left = !checkValue(gameData.targetArray[gameData.sequenceNum].inputs[answerNum].left) ? inputProperty.left : gameData.targetArray[gameData.sequenceNum].inputs[answerNum].left;
		value.width = !checkValue(gameData.targetArray[gameData.sequenceNum].inputs[answerNum].width) ? inputProperty.width : gameData.targetArray[gameData.sequenceNum].inputs[answerNum].width;
		value.height = !checkValue(gameData.targetArray[gameData.sequenceNum].inputs[answerNum].height) ? inputProperty.height : gameData.targetArray[gameData.sequenceNum].inputs[answerNum].height;
		value.fontSize = !checkValue(gameData.targetArray[gameData.sequenceNum].inputs[answerNum].fontSize) ? inputProperty.fontSize : gameData.targetArray[gameData.sequenceNum].inputs[answerNum].fontSize;
		value.lineHeight = !checkValue(gameData.targetArray[gameData.sequenceNum].inputs[answerNum].lineHeight) ? inputProperty.lineHeight : gameData.targetArray[gameData.sequenceNum].inputs[answerNum].lineHeight;
		value.color = !checkValue(gameData.targetArray[gameData.sequenceNum].inputs[answerNum].color) ? inputProperty.color : gameData.targetArray[gameData.sequenceNum].inputs[answerNum].color;
		value.background = !checkValue(gameData.targetArray[gameData.sequenceNum].inputs[answerNum].background) ? inputProperty.background : gameData.targetArray[gameData.sequenceNum].inputs[answerNum].background;
		value.align = !checkValue(gameData.targetArray[gameData.sequenceNum].inputs[answerNum].align) ? inputProperty.align : gameData.targetArray[gameData.sequenceNum].inputs[answerNum].align;
		value.offsetTop = !checkValue(gameData.targetArray[gameData.sequenceNum].inputs[answerNum].offsetTop) ? inputProperty.offsetTop : gameData.targetArray[gameData.sequenceNum].inputs[answerNum].offsetTop;	
	}else if(type == 'explanation'){
		value.type = gameData.targetArray[gameData.sequenceNum].explanationType;
		value.top = !checkValue(gameData.targetArray[gameData.sequenceNum].explanation.top) ? explanationProperty.top : gameData.targetArray[gameData.sequenceNum].explanation.top;
		value.left = !checkValue(gameData.targetArray[gameData.sequenceNum].explanation.left) ? explanationProperty.left : gameData.targetArray[gameData.sequenceNum].explanation.left;
		value.width = !checkValue(gameData.targetArray[gameData.sequenceNum].explanation.width) ? explanationProperty.width : gameData.targetArray[gameData.sequenceNum].explanation.width;
		value.height = !checkValue(gameData.targetArray[gameData.sequenceNum].explanation.height) ? explanationProperty.height : gameData.targetArray[gameData.sequenceNum].explanation.height;
		value.fontSize = !checkValue(gameData.targetArray[gameData.sequenceNum].explanation.fontSize) ? explanationProperty.fontSize : gameData.targetArray[gameData.sequenceNum].explanation.fontSize;
		value.lineHeight = !checkValue(gameData.targetArray[gameData.sequenceNum].explanation.lineHeight) ? explanationProperty.lineHeight : gameData.targetArray[gameData.sequenceNum].explanation.lineHeight;
		value.color = !checkValue(gameData.targetArray[gameData.sequenceNum].explanation.color) ? explanationProperty.color : gameData.targetArray[gameData.sequenceNum].explanation.color;
		value.align = !checkValue(gameData.targetArray[gameData.sequenceNum].explanation.align) ? explanationProperty.align : gameData.targetArray[gameData.sequenceNum].explanation.align;
	}else if(type == 'group'){
		value.correctAnswer = gameData.targetArray[gameData.sequenceNum].groups[n].correctAnswer;
		value.dropMax = !checkValue(gameData.targetArray[gameData.sequenceNum].groups[n].dropMax) ? groupDropProperty.dropMax : gameData.targetArray[gameData.sequenceNum].groups[n].dropMax;
		value.dropTop = !checkValue(gameData.targetArray[gameData.sequenceNum].groups[n].dropTop) ? 0 : gameData.targetArray[gameData.sequenceNum].groups[n].dropTop;
		value.dropLeft = !checkValue(gameData.targetArray[gameData.sequenceNum].groups[n].dropLeft) ? 0 : gameData.targetArray[gameData.sequenceNum].groups[n].dropLeft;
		value.dropWidth = !checkValue(gameData.targetArray[gameData.sequenceNum].groups[n].dropWidth) ? groupDropProperty.dropWidth : gameData.targetArray[gameData.sequenceNum].groups[n].dropWidth;
		value.dropHeight = !checkValue(gameData.targetArray[gameData.sequenceNum].groups[n].dropHeight) ? groupDropProperty.dropHeight : gameData.targetArray[gameData.sequenceNum].groups[n].dropHeight;
		
		value.dropOffLeft = !checkValue(gameData.targetArray[gameData.sequenceNum].groups[n].dropOffLeft) ? groupDropProperty.dropOffLeft : gameData.targetArray[gameData.sequenceNum].groups[n].dropOffLeft;
		value.dropOffTop = !checkValue(gameData.targetArray[gameData.sequenceNum].groups[n].dropOffTop) ? groupDropProperty.dropOffTop : gameData.targetArray[gameData.sequenceNum].groups[n].dropOffTop;
		
		value.type = gameData.targetArray[gameData.sequenceNum].groups[n].type;
		value.text = !checkValue(gameData.targetArray[gameData.sequenceNum].groups[n].text) ? '' : gameData.targetArray[gameData.sequenceNum].groups[n].text;	
		value.top = !checkValue(gameData.targetArray[gameData.sequenceNum].groups[n].top) ? 0 : gameData.targetArray[gameData.sequenceNum].groups[n].top;
		value.left = !checkValue(gameData.targetArray[gameData.sequenceNum].groups[n].left) ? 0 : gameData.targetArray[gameData.sequenceNum].groups[n].left;
		value.width = !checkValue(gameData.targetArray[gameData.sequenceNum].groups[n].width) ? 0 : gameData.targetArray[gameData.sequenceNum].groups[n].width;
		value.height = !checkValue(gameData.targetArray[gameData.sequenceNum].groups[n].height) ? 0 : gameData.targetArray[gameData.sequenceNum].groups[n].height;
		value.fontSize = !checkValue(gameData.targetArray[gameData.sequenceNum].groups[n].fontSize) ? groupDropProperty.fontSize : gameData.targetArray[gameData.sequenceNum].groups[n].fontSize;
		value.lineHeight = !checkValue(gameData.targetArray[gameData.sequenceNum].groups[n].lineHeight) ? groupDropProperty.lineHeight : gameData.targetArray[gameData.sequenceNum].groups[n].lineHeight;
		value.color = !checkValue(gameData.targetArray[gameData.sequenceNum].groups[n].color) ? groupDropProperty.color : gameData.targetArray[gameData.sequenceNum].groups[n].color;
		value.align = !checkValue(gameData.targetArray[gameData.sequenceNum].groups[n].align) ? groupDropProperty.align : gameData.targetArray[gameData.sequenceNum].groups[n].align;
		value.offsetTop = !checkValue(gameData.targetArray[gameData.sequenceNum].groups[n].offsetTop) ? groupDropProperty.offsetTop : gameData.targetArray[gameData.sequenceNum].groups[n].offsetTop;
	}
		
	return value;	
}

function checkValue(value){
	if(value == undefined || value == ''){
		return false;
	}else{
		return true;
	}
}

/*!
 * 
 * AUDIO - This is the function that runs to play question and answer audio
 * 
 */
function playAudioLoop(con){
	if(gameData.targetAudio.length <= 0){
		return;	
	}
	
	toggleAudioInterval(false);
	if(con == 'explanation'){
		audioData.audioNum = gameData.targetAudio.length-1;
		if(gameData.targetAudio[audioData.audioNum].type == 'explanation' && playerData.answered){
			TweenMax.to(audioData, 1, {overwrite:true, onComplete:function(){
				playAudio(gameData.targetAudio[audioData.audioNum].id);
			}});
		}
	}else{
		if(gameData.targetAudio[audioData.audioNum].type == 'question'){
			playAudio(gameData.targetAudio[audioData.audioNum].id);
		}else if(gameData.targetAudio[audioData.audioNum].type == 'group'){
			playAudio(gameData.targetAudio[audioData.audioNum].id);
		}else if(gameData.targetAudio[audioData.audioNum].type == 'answer'){
			playAudio(gameData.targetAudio[audioData.audioNum].id);
			animateAnswer(gameData.targetAudio[audioData.audioNum].list);
		}
	}
}

function playAudioComplete(){
	audioData.audioNum++;
	if(audioData.audioNum < gameData.targetAudio.length){
		toggleAudioInterval(true);
	}
}

function toggleAudioInterval(con){
	if(con){
		var audioTimer = audioSettings.answerDelay;
		if(gameData.targetAudio.length > 0 && gameData.targetAudio[audioData.audioNum].type == 'question'){
			audioTimer = audioSettings.questionDelay	
		}
		audioData.audioInterval = setInterval(function(){
			playAudioLoop();
		}, audioTimer);
	}else{
		TweenMax.killTweensOf(audioData);
		clearInterval(audioData.audioInterval);
		audioData.audioInterval = null;
	}
}

/*!
 * 
 * BUILD VIDEO - This is the function that runs to build video
 * 
 */
function buildVideo(){
	if(gameData.targetArray[gameData.sequenceNum].videos[0] == undefined){
		return;
	}
	if(gameData.targetArray[gameData.sequenceNum].videos[0].types.length <= 0){
		return;
	}
	
	var value = getArrayValue('video', 0);
	var videoProperty = '';
	var videoWrapperHTML = '<div id="videoHolder" style="top:'+value.top+'%; left:'+value.left+'%; width:'+value.width+'%; height:'+value.height+'%;">';
	
	if(value.embed == 'youtube'){
		for(var n=0; n<gameData.targetArray[gameData.sequenceNum].videos[0].types.length; n++){
			videoWrapperHTML += gameData.targetArray[gameData.sequenceNum].videos[0].types[n].src;
		}
		videoWrapperHTML += '</div>';
	}else{
		if(value.autoplay == 'true' || value.autoplay == true){
			videoProperty += ' autoplay';
		}
		if(value.controls == 'true' || value.controls == true){
			videoProperty += ' controls';
		}
		videoWrapperHTML += '<video width="100%" height="100%"'+videoProperty+'>';
		
		for(var n=0; n<gameData.targetArray[gameData.sequenceNum].videos[0].types.length; n++){
			videoWrapperHTML += '<source src="'+gameData.targetArray[gameData.sequenceNum].videos[0].types[n].src+'" type="'+gameData.targetArray[gameData.sequenceNum].videos[0].types[n].type+'">';
		}
		videoWrapperHTML += 'Your browser does not support the video tag.';
		videoWrapperHTML += '</video>';
		videoWrapperHTML += '</div>';
	}
	
	$('#questionHolder').append(videoWrapperHTML);
	if(value.embed == 'youtube'){
		$('#videoHolder iframe').attr('data-src',$('#videoHolder iframe').attr('src'));
	}
}

/*!
 * 
 * BUILD GROUP - This is the function that runs to build groups
 * 
 */
function buildGroups(){
	if(gameData.targetArray[gameData.sequenceNum].groups.length <= 0){
		return;	
	}
	
	var groupHolderHTML = '<div id="groupHolder"></div>'
	$('#questionHolder').append(groupHolderHTML);
	
	for(n=0;n<gameData.targetArray[gameData.sequenceNum].groups.length;n++){
		var value = getArrayValue('group', n, n);
		
		//label
		if(value.type == 'image'){
			var groupLabelWrapperHTML = "<div id='groupLabel"+n+"' class='groupDropLabel fitImg' style='width:"+value.width+"%; height:"+value.height+"%; top:"+value.top+"%; left:"+value.left+"%;'><img src='"+value.text+"' /></div>";
		}else{
			var groupLabelWrapperHTML = "<div id='groupLabel"+n+"' class='groupDropLabel fontAnswer resizeFont' data-fontSize='"+value.fontSize+"' data-lineHeight='"+value.lineHeight+"' style='width:"+value.width+"%; height:"+value.height+"%; top:"+value.top+"%; left:"+value.left+"%; font-size:"+value.fontSize+"px; line-height:"+value.lineHeight+"px; color:"+value.color+"; text-align:"+value.align+";'>"+value.text+"</div>";	
		}

		$('#groupHolder').append(groupLabelWrapperHTML);

		//drop group
		var dropLeft = Number(value.dropLeft) + Number(value.dropOffLeft);
		var dropTop = Number(value.dropTop) + Number(value.dropOffTop);

		var groupDropWrapperHTML = "<div id='groupDrop"+n+"' class='groupDrop' style='width:"+value.dropWidth+"%; height:"+value.dropHeight+"%; top:"+value.dropTop+"%; left:"+value.dropLeft+"%; border:"+groupDropProperty.border+" solid "+groupDropProperty.stroke+"; background:"+groupDropProperty.background+";' data-left='"+dropLeft+"%' data-top='"+dropTop+"%' data-offleft='"+value.dropOffLeft+"%' data-offtop='"+value.dropOffTop+"%' data-width='"+value.dropWidth+"%' data-height='"+value.dropHeight+"%' data-max='"+value.dropMax+"' data-answer='"+value.correctAnswer+"' data-id='"+n+"'></div>";

		$('#groupHolder').append(groupDropWrapperHTML);
	}
}

/*!
 * 
 * BUILD ANSWERS - This is the function that runs to build answers
 * 
 */
function buildAnswers(){
	if(gameData.targetArray[gameData.sequenceNum].answers.answer.length <= 0){
		return;	
	}
	
	var answerHolderHTML = '<div id="answerHolder"></div>'
	$('#questionHolder').append(answerHolderHTML);
	playerData.answerType = 'select';
	if(gameData.targetArray[gameData.sequenceNum].answers.drag == 'true'){
		playerData.answerType = 'drag';
	}
	
	var answerArray = gameData.targetArray[gameData.sequenceNum].answers.correctAnswer.split(',').map(function(item) {
		return parseInt(item, 10);
	});
	
	playerData.correctAnswer = [];
	for(n=0;n<gameData.targetArray[gameData.sequenceNum].answers.answer.length;n++){
		var answerNum = gameData.targetAnswerSequence[n];
		if(answerArray.indexOf((answerNum+1)) != -1 && playerData.answerType != 'drag'){
			playerData.correctAnswer.push(n+1);
		}
		
		var value = getArrayValue('answer', answerNum, n);
		var dragLabel = getArrayValue('answer', n, n);
		
		if(value.type == 'image'){
			var answerHTML = '<div id="answer'+n+'" class="answer fitImg buttonClick" style="top:'+value.top+'%; left:'+value.left+'%; width:'+value.width+'%; "><img src="'+value.text+'" /></div>';
			$('#answerHolder').append(answerHTML);
		}else{
			var curAnswerList = '';
			if(answerSettings.lists){
				curAnswerList = answerSettings.listsText[n];
			}
			if(value.submit == 'true'){
				curAnswerList = '';
			}
			
			if(playerData.answerType == 'drag' && !dragDropSettings.listEnable){
				curAnswerList = '';	
			}
			
			var answerWrapperHTML = "<div id='answer"+n+"' class='answer resizeBorder' data-border='"+answersButtonProperty.roundNumber+"' style='border-radius: "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px; -moz-border-radius: "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px; -webkit-border-radius: "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px; width:"+value.width+"%; height:"+value.height+"%; top:"+value.top+"%; left:"+value.left+"%;'></div>";
			
			$('#answerHolder').append(answerWrapperHTML);
			
			if(answersButtonProperty.status){
				var backgroundShadowHTML = "<div class='shadow resizeBorder' data-border='"+answersButtonProperty.roundNumber+"' style='border-radius: "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px; -moz-border-radius: "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px; -webkit-border-radius: "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px; background:"+answersButtonProperty.shadowColor+"; width:100%; height:100%; position:absolute; top:"+value.offsetTop+"%; left:0;'></div>";
				$('#answer'+n).append(backgroundShadowHTML);
				
				var backgroundHTML = "<div class='background resizeBorder' data-border='"+answersButtonProperty.roundNumber+"' style='border-radius: "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px; -moz-border-radius: "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px; -webkit-border-radius: "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px; background:"+answersButtonProperty.color+"; width:100%; height:85%; position:absolute; top:"+value.offsetTop+"%; left:0;'></div>";
				$('#answer'+n).append(backgroundHTML);
			}
			
			var answerHTML = '<div id="text'+n+'" class="fontAnswer resizeFont" data-fontSize="'+value.fontSize+'" data-lineHeight="'+value.lineHeight+'" style="position:absolute; top:0; left:0; width:100%; height:85%; display:flex; align-items:center; justify-content:center; gap:12px; font-size:'+value.fontSize+'px; line-height:1; color:'+value.color+'; text-align:'+value.align+';">'+curAnswerList+value.text+'</div>';

			$('#answer'+n).append(answerHTML);
			
			var clickHTML = "<div class='buttonClick resizeBorder' data-border='"+answersButtonProperty.roundNumber+"' style='position:absolute; border-radius: "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px; -moz-border-radius: "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px; -webkit-border-radius: "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px; width:100%; height:100%; position:absolute; top:"+value.offsetTop+"%;'></div>";
			$('#answer'+n).append(clickHTML);
		}
		
		$('#answer'+n).attr('data-id', n);
		$('#answer'+n).attr('data-type', value.type);
		$('#answer'+n).attr('data-submit', value.submit);
		
		if(playerData.answerType == 'drag' && value.submit != 'true'){
			if(gameData.targetArray[gameData.sequenceNum].groups.length > 0){
				$('#answer'+n).attr('data-ori-id', answerNum+1);
				$('#answer'+n).attr('data-top', value.top+'%');
				$('#answer'+n).attr('data-left', value.left+'%');
				$('#answer'+n).addClass('groupDrag');
			}else{
				if(value.dragEnable){
					$('#answer'+n).addClass('dragActive');
				}else{
					$('#answer'+n).hide();
				}

				//drop label
				if(dragLabel.dropLabelType == 'image'){
					var answerDropLabelWrapperHTML = "<div id='dropLabel"+n+"' class='dropLabel fitImg' style='width:"+dragLabel.dropLabelWidth+"%; height:"+dragLabel.dropLabelHeight+"%; top:"+dragLabel.dropLabelTop+"%; left:"+dragLabel.dropLabelLeft+"%;'><img src='"+dragLabel.dropLabelText+"' /></div>";
				}else{
					var answerDropLabelWrapperHTML = "<div id='dropLabel"+n+"' class='dropLabel fontAnswer resizeFont' data-fontSize='"+dragLabel.dropLabelFontSize+"' data-lineHeight='"+dragLabel.dropLabelLineHeight+"' style='width:"+dragLabel.dropLabelWidth+"%; height:"+dragLabel.dropLabelHeight+"%; top:"+dragLabel.dropLabelTop+"%; left:"+dragLabel.dropLabelLeft+"%; font-size:"+dragLabel.dropLabelFontSize+"px; line-height:"+dragLabel.dropLabelLineHeight+"px; color:"+dragLabel.dropLabelColor+"; text-align:"+dragLabel.dropLabelAlign+";'>"+dragLabel.dropLabelText+"</div>";	
				}

				$('#answerHolder').append(answerDropLabelWrapperHTML);

				//drop group
				var dropLeft = Number(value.dropLeft) + Number(value.dropOffLeft);
				var dropTop = Number(value.dropTop) + Number(value.dropOffTop);

				var answerDropWrapperHTML = "<div id='drop"+n+"' class='drop' style='width:"+value.dropWidth+"%; height:"+value.dropHeight+"%; top:"+value.dropTop+"%; left:"+value.dropLeft+"%; border:"+dragDropSettings.dragBorder+" solid "+dragDropSettings.dropStroke+"; background:"+dragDropSettings.dropBackground+";' data-left='"+dropLeft+"%' data-top='"+dropTop+"%'></div>";

				if(dragLabel.dropEnable){
					$('#answerHolder').append(answerDropWrapperHTML);
				}

				$('#answer'+n).attr('data-top', value.top+'%');
				$('#answer'+n).attr('data-left', value.left+'%');
				$('#answer'+n).attr('data-answer', answerNum);
				$('#answer'+n).addClass('drag');
			}
		}
		
		buildAnswerEvent('#answer'+n);
	}
	
	if(playerData.answerType == 'drag'){
		setDragIndex();
	}
}

/*!
 * 
 * BUILD INPUTS - This is the function that runs to build inputs
 * 
 */
function buildInputs(){
	if(gameData.targetArray[gameData.sequenceNum].inputs.length <= 0){
		return;	
	}
	
	var answerHolderHTML = '<div id="inputHolder"></div>'
	$('#questionHolder').append(answerHolderHTML);
	playerData.answerType = 'input';
	
	for(n=0;n<gameData.targetArray[gameData.sequenceNum].inputs.length;n++){
		var value = getArrayValue('input', n);
		
		if(value.submit == 'true'){
			if(value.type == 'image'){
				var inputHTML = '<div id="input'+n+'" class="input fitImg buttonClick" data-submit="true" style="top:'+value.top+'%; left:'+value.left+'%; width:'+value.width+'%; "><img src="'+gameData.targetArray[gameData.sequenceNum].inputs[n].text+'" /></div>';
				$('#inputHolder').append(answerHTML);
				buildInputEvent('#input'+n);
			}else if(value.type == 'text'){
				var inputWrapperHTML = "<div id='input"+n+"' class='input resizeFont resizeBorder' data-border='"+answersButtonProperty.roundNumber+"' data-submit='true' style='border-radius: "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px; -moz-border-radius: "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px; -webkit-border-radius: "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px; width:"+value.width+"%; height:"+value.height+"%; top:"+value.top+"%; left:"+value.left+"%;'></div>";
				
				$('#inputHolder').append(inputWrapperHTML);
				
				if(answersButtonProperty.status){
					var backgroundShadowHTML = "<div class='shadow resizeBorder' data-border='"+answersButtonProperty.roundNumber+"' style='border-radius: "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px; -moz-border-radius: "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px; -webkit-border-radius: "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px; background:"+answersButtonProperty.shadowColor+"; width:100%; height:100%; position:absolute; top:"+value.offsetTop+"%; left:0;'></div>";
					$('#input'+n).append(backgroundShadowHTML);
					
					var backgroundHTML = "<div class='background resizeBorder' data-border='"+answersButtonProperty.roundNumber+"' style='border-radius: "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px; -moz-border-radius: "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px; -webkit-border-radius: "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px; background:"+answersButtonProperty.color+"; width:100%; height:85%; position:absolute; top:"+value.offsetTop+"%; left:0;'></div>";
					$('#input'+n).append(backgroundHTML);
				}
				
				var inputHTML = '<div id="text'+n+'" class="fontAnswer resizeFont" data-fontSize="'+value.fontSize+'" data-lineHeight="'+value.lineHeight+'" style="position:relative; font-size:'+value.fontSize+'px; line-height:'+value.lineHeight+'px; color:'+value.color+'; text-align:'+value.align+';">'+gameData.targetArray[gameData.sequenceNum].inputs[n].text+'</div>';
				$('#input'+n).append(inputHTML);
				
				var clickHTML = "<div class='buttonClick resizeBorder' data-border='"+answersButtonProperty.roundNumber+"' style='border-radius: "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px; -moz-border-radius: "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px; -webkit-border-radius: "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px "+answersButtonProperty.roundNumber+"px; width:100%; height:100%; position:absolute; top:"+value.offsetTop+"%;'></div>";
				$('#input'+n).append(clickHTML);
				
				buildInputEvent('#input'+n);
			}
		}else{
			if(value.type == 'blank'){
				//input
				var inputWrapperHTML = "<input id='input"+n+"' class='input fontInput' type='text' style='font-size:"+value.fontSize+"px; line-height:"+value.lineHeight+"px; color:"+value.color+"; background:"+value.background+"; text-align:"+value.align+"; width:"+value.width+"%; height:"+value.height+"%; top:"+value.top+"%; left:"+value.left+"%;' placeholder='"+gameData.targetArray[gameData.sequenceNum].inputs[n].text+"'></input>";
				
				$('#inputHolder').append(inputWrapperHTML);	
			}	
		}
		
		$('#input'+n).attr('data-id', n);
		$('#input'+n).attr('data-type', value.type);
		$('#input'+n).attr('data-answer', value.correctAnswer);
	}	
}

/*!
 * 
 * INIT ANIMATE ANSWERS - This is the function that runs to animate answers
 * 
 */
function initAnimateAnswers(){
	var animateDelayNum = .5;
	for(var n=0;n<gameData.targetArray[gameData.sequenceNum].answers.answer.length;n++){
		if(answerSettings.animation){
			$('#answer'+n).css('opacity',0);
			TweenMax.to($('#answer'+n), 0, {delay:animateDelayNum, scaleX:1, scaleY:1, overwrite:true, ease:Elastic.easeOut, onComplete:animateAnswer, onCompleteParams:[n]});
			animateDelayNum+=.3;
		}
	}
}

function animateAnswer(n){
	var scaleNum = .7;
	var speedNum = 1.3;
	TweenMax.to($('#answer'+n), 0, {scaleX:.5, scaleY:.5, overwrite:true});
	TweenMax.to($('#answer'+n), speedNum, {alpha:1, scaleX:1, scaleY:1, overwrite:true, ease:Elastic.easeOut});
}

/*!
 * 
 * BUILD EXPLANATION - This is the function that runs to build explanation
 * 
 */

function buildExplanation(){
	var value = getArrayValue('explanation');
	if(value.type == 'image'){
		var explanationHTML = '<div class="explanation fontExplanation fitImg" style="top:'+value.top+'%; left:'+value.left+'%; width:'+value.width+'%; "><img src="'+gameData.targetArray[gameData.sequenceNum].explanation.text+'" /></div>';
		
	}else{
		var explanationHTML = '<div class="explanation fontExplanation resizeFont" data-fontSize="'+value.fontSize+'" data-lineHeight="'+value.lineHeight+'" style="font-size:'+value.fontSize+'px; line-height:'+value.lineHeight+'px; color:'+value.color+';  text-align:'+value.align+'; top:'+value.top+'%; left:'+value.left+'%; width:'+value.width+'%; height:'+value.height+'%; ">'+gameData.targetArray[gameData.sequenceNum].explanation.text+'</div>';
	}
	$('#explanationHolder').append(explanationHTML);
}

/*!
 * 
 * BUILD ANSWER EVENT - This is the function that runs to build answer event
 * 
 */
function buildAnswerEvent(obj){
	if(!$.editor.enable){
		if($(obj).hasClass('groupDrag')){
			$(".groupDrag").droppable({
				accept: ".groupDrag",
				greedy: true,
				drop: function(event, ui) {
					var targetDrop = $('#groupDrop' + $(this).attr('data-drop-id'));
					if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
						postSocketUpdate('groupDragDrop', {groupDrop:'#groupDrop' + $(this).attr('data-drop-id'), groupDrag:$(this).attr('id'),  con:false});
					}else{
						updateGroupID(targetDrop, $(this), false);
						revertPosition($(this));
					}
				}
			});
			
			$( ".groupDrag" ).draggable({
				start: function(event, ui) {
					setDragIndex($(this));
				},
				stop: function() {
					if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
						postSocketUpdate('groupDragStop', $(this).attr('id'));
					}else{
						setGroupPosition();
						revertPosition($(this));
					}
				}
			});
			
			$(".groupDrop").droppable({
				accept: ".groupDrag",
				greedy: false,
				drop: function(event, ui) {
					if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
						postSocketUpdate('updateGroupID', {groupDrop:$(this).attr('id'), groupDrag:$(ui.draggable).attr('id'), con:true});
					}else{
						updateGroupID($(this), $(ui.draggable), true);
					}
				},
				out : function(event, ui) {
					if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
						postSocketUpdate('updateGroupID', {groupDrop:$(this).attr('id'), groupDrag:$(ui.draggable).attr('id'), con:false});
					}else{
						updateGroupID($(this), $(ui.draggable), false);
					}
				}
			});
		}else if($(obj).hasClass('drag')){
			$( ".drag" ).draggable({
				start: function() {
					if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
						postSocketUpdate('dragStart', {drag:$(this).attr('id')});
					}else{
						if($(this).hasClass('occupied')){
							if(dragDropSettings.droppedAnswerAgain){
								$(this).removeClass('occupied');
								playerData.correctAnswer.splice(1,0);
								
								var currentID = $(this).attr('id');
								$('.drop').each(function(index, element) {
									if($(this).attr('data-drag-id') == currentID){
										$(this).attr('data-drag-id', '');	
									}
								});
							}else{
								return false;
							}
						}else{
							setDragIndex($(this));	
						}
						setDragIndex($(this));
					}
				},
				stop: function() {
					if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
						postSocketUpdate('dragStop', {drag:$(this).attr('id')});
					}else{
						revertPosition($(this));
					}
				}
			});
			
			$(".drop").droppable({
				accept: ".drag",
				drop: function(event, ui) {
					if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
						postSocketUpdate('dropDrop', {drop:$(this).attr('id'), drag:$(ui.draggable).attr('id')});
					}else{
						if($(this).hasClass('occupied')){
							if($(this).attr('data-drag-id') != ''){
								var lastDrag = $('#'+$(this).attr('data-drag-id'));
								lastDrag.removeClass('occupied');
								revertPosition(lastDrag);
							}
						}else{
							playerData.correctAnswer.push(0);
						}
						
						$(ui.draggable).addClass('occupied');
						$(ui.draggable).attr('data-top-drop', $(this).attr('data-top'));
						$(ui.draggable).attr('data-left-drop', $(this).attr('data-left'));
						
						$(this).attr('data-drag-id', ui.draggable.attr('id'));
						$(this).addClass('occupied');
					}
				}
			});
		}else{
			$(obj).click(function(){
				if(playerData.answerType == 'drag' && $('#groupHolder .groupDrop').length){
					//group drag
					var totalGroup = 0;
					var totalDrop = 0;

					$('#groupHolder .groupDrop').each(function(index, element) {
						var groupArray = $(this).attr('data-group');
						var dropMax = Number($(this).attr('data-max'));
						
						if(dropMax > 0){
							totalDrop++;
						}
						
						groupArray = groupArray == undefined ? [] : groupArray.split(',');
						if(groupArray.length > 0){
							totalGroup++;
						}
					});
					
					//alert(totalGroup+' : '+totalDrop);
					if(totalGroup > 0){
						$('.groupDrag').draggable('disable');
						$('.groupDrop').droppable('disable');
						if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
							postSocketUpdate('focusTapAnswer', {id:$(this).attr('data-id'), type:$(this).attr('data-type'), submit:'true', hide:true});
						}else{
							focusTapAnswer($(this).attr('data-id'), $(this).attr('data-type'), 'true', true);
						}
					}
				}else  if(playerData.answerType == 'drag'){
					//drag
					var totalDrop = $('.drop').length;
					var totalDrag = $('.dragActive').length;
					
					var proceedCon = false;
					if(totalDrag < totalDrop){
						if(playerData.correctAnswer.length == $('.dragActive').length){
							proceedCon = true;
						}
					}else{
						if(playerData.correctAnswer.length == $('.drop').length){
							proceedCon = true;
						}
					}
					
					if(proceedCon){
						$('.drag').draggable('disable');
						$('.drop').droppable('disable');
						if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
							postSocketUpdate('focusTapAnswer', {id:$(this).attr('data-id'), type:$(this).attr('data-type'), submit:'true', hide:true});
						}else{
							focusTapAnswer($(this).attr('data-id'), $(this).attr('data-type'), 'true', true);
						}
					}
				}else if(playerData.correctAnswer.length > 1){
					if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
						postSocketUpdate('focusTapAnswer', {id:$(this).attr('data-id'), type:$(this).attr('data-type'), submit:$(this).attr('data-submit'), hide:true});
					}else{
						focusTapAnswer($(this).attr('data-id'), $(this).attr('data-type'), $(this).attr('data-submit'), true);
					}
				}else{
					if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
						postSocketUpdate('focusTapAnswer', {id:$(this).attr('data-id'), type:$(this).attr('data-type'), submit:'true', hide:false});
					}else{
						focusTapAnswer($(this).attr('data-id'), $(this).attr('data-type'), 'true', false);
					}
				}
			});	
		}
	}
}

function updateGroupID(obj, target, con){
	var groupName = playerData.answered == true ? 'data-groupanswered' : 'data-group';
	var groupArray = obj.attr(groupName);
	groupArray = groupArray == undefined ? [] : groupArray.split(',');

	if(con){
		/*if(groupArray.length >= Number(obj.attr('data-max'))){
			return;
		}*/
		
		target.attr('data-drop-id', obj.attr('data-id'));
		target.addClass('occupied');
		groupArray.push(target.attr('data-id'));
	}else{
		target.removeAttr('data-drop-id');
		target.removeClass('occupied');
		var removeIndex = groupArray.indexOf(target.attr('data-id'));
		if(removeIndex != -1)
			groupArray.splice(removeIndex, 1);
	}
	
	groupArray = unique(groupArray);
	if(groupArray.length == 0){
		obj.removeAttr(groupName);
	}else{
		obj.attr(groupName,groupArray);
	}
}

function removeGroupID(index, target){
	var groupName = playerData.answered == true ? 'data-groupanswered' : 'data-group';
	$('#groupHolder .groupDrop').each(function(dropIndex, dropElement) {
		if(index != dropIndex){
			var groupArray = $(this).attr(groupName);
			groupArray = groupArray == undefined ? [] : groupArray.split(',');
			
			var removeIndex = groupArray.indexOf(target.attr('data-id'));
			if(removeIndex != -1){
				groupArray.splice(removeIndex, 1);
			}
			
			if(groupArray.length == 0){
				$(dropElement).removeAttr(groupName);
			}else{
				$(dropElement).attr(groupName,groupArray);
			}
		}
	});
}

function setGroupPosition(){
	var groupName = playerData.answered == true ? 'data-groupanswered' : 'data-group';
	$('#groupHolder .groupDrop').each(function(index, element) {
		var maxItem = Number($(this).attr('data-max'));
		var currentOffTop = Number($(this).attr('data-offtop').replace('%',''));
		var currentOffLeft = Number($(this).attr('data-offleft').replace('%',''));
		var currentTop = Number($(this).attr('data-top').replace('%',''));
		var currentLeft = Number($(this).attr('data-left').replace('%',''));
		var currentWidth = Number($(this).attr('data-width').replace('%',''));
		var currentHeight = Number($(this).attr('data-height').replace('%',''));
		
		var startTop = currentTop;
		var startLeft = currentLeft;

		var groupArray = $(this).attr(groupName);
		groupArray = groupArray == undefined ? [] : groupArray.split(',');
		groupArray = groupArray.filter(function(v){return v!==''});
		
		for(var n=0; n<groupArray.length;n++){
			if(n < maxItem){
				$('#answer'+groupArray[n]).attr('data-top-drop', startTop+'%');
				$('#answer'+groupArray[n]).attr('data-left-drop', startLeft+'%');
				revertPosition($('#answer'+groupArray[n]));

				startLeft += Number(($('#answer'+groupArray[n]).outerWidth()/$('#answerHolder').outerWidth() * 100).toFixed());
				startLeft += currentOffLeft;
				
				if(Number(startLeft + (10)) >= Number(currentLeft + currentWidth)){
					startLeft = currentLeft;
					startTop +=  Number(($('#answer'+groupArray[n]).outerHeight()/$('#answerHolder').outerHeight() * 100).toFixed());
					startTop += currentOffTop/2;
				}
			}else{
				var targetDrop = $('#groupDrop' + $('#answer'+groupArray[n]).attr('data-drop-id'));
				updateGroupID(targetDrop, $('#answer'+groupArray[n]), false);
			}
		}
    });
}

function setDragIndex(obj){
	$('.answer').each(function(index, element) {
        $(this).css('z-index',10);
    });	
	
	if(obj != undefined){
		obj.css('z-index',11);
	}
}

function revertPosition(obj){
	if(obj.hasClass('occupied')){
		TweenMax.to(obj, dragDropSettings.revertSpeed,{css:{left:obj.attr('data-left-drop'), top: obj.attr('data-top-drop')}});
	}else{
		TweenMax.to(obj, dragDropSettings.revertSpeed,{css:{left:obj.attr('data-left'), top: obj.attr('data-top')}});
	}
}


/*!
 * 
 * BUILD INPUT EVENT - This is the function that runs to build input event
 * 
 */
function buildInputEvent(obj){
	if(!$.editor.enable){
		$(obj).click(function(){
			if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
				var inputArr = [];
				$('#inputHolder input').each(function(index, element) {
					inputArr.push($(this).val());
				});
				postSocketUpdate('checkInputAnswer', inputArr);
			}else{
				checkInputAnswer();
			}
		});
	}
}

/*!
 * 
 * FOCUS ANSWER ANIMATION - This is the function that runs to focus on answer animation
 * 
 */

function focusTapAnswer(n, type, submit, hide){
	if(!playerData.answered){
		stopAudio();
		toggleAudioInterval(false);
		playSound('soundSelectAnswer');
		
		if(submit == 'true'){
			//for draggable, input and multiple choice answers
			toggleGameTimer(false);
			playerData.answered = true;
			if(playerData.secondChance){
				playerData.secondAnswered = true;
			}
			if(hide){
				$('#answer'+n).hide();
			}
		}
		
		
		//reset animation
		$('#answerHolder .answer').each(function(index, element) {
			TweenMax.to($(this), 0, {scaleX:1, scaleY:1, alpha:1, overwrite:true});	
		});
		
		//asnwer selected button colour
		var currentBgColor = answersButtonProperty.answerdColor;
		var currentBgShadowColor = answersButtonProperty.answerdShadowColor;
		var curScaleNum = .5;
		
		if($('#answer'+n).hasClass('answerFocus')){
			$('#answer'+n).removeClass('answerFocus');
			currentBgColor = answersButtonProperty.color;
			currentBgShadowColor = answersButtonProperty.shadowColor;
		}else{
			$('#answer'+n).addClass('answerFocus');
		}
		
		$('#answer'+n).find('.background').css('background', currentBgColor);
		$('#answer'+n).find('.shadow').css('background', currentBgShadowColor);
		
		//answer selected image effect
		if(playerData.answerType != 'drag'){
			$('#answerHolder .answer').each(function(index, element) {
				if($(this).attr('data-type') == 'image'){
					$(this).css('opacity',.5);
					if($(this).hasClass('answerFocus')){
						$(this).css('opacity',1);	
					}
				}
			});
		}

		//select animation
		TweenMax.to($('#answer'+n), 0, {scaleX:curScaleNum, scaleY:curScaleNum, overwrite:true});
		TweenMax.to($('#answer'+n), 1, {scaleX:1, scaleY:1, overwrite:true, ease:Elastic.easeOut, onComplete:function(){
			if(playerData.answered){
				playerData.answer_arr = [];

				if(playerData.answerType == 'drag' && $('.groupDrop').length){
					$('#answerHolder .answer').each(function(index, element) {
						if($(this).attr('data-type') == 'image'){
							$(this).css('opacity',1);
						}
					});

					$('#groupHolder .groupDrop').each(function(index, element) {
						var dragGroupArr = [];
						var groupArray = $(this).attr('data-group');
						groupArray = groupArray == undefined ? [] : groupArray.split(',');

						for(var n=0; n<groupArray.length; n++){
							var answerOriID = $('#answer'+groupArray[n]).attr('data-ori-id');
							dragGroupArr.push(answerOriID);
						}
			
						playerData.answer_arr.push(dragGroupArr);
					});
					
					checkDisplayQuestionResult();
				}else if(playerData.answerType == 'drag'){
					//drag
					$('#answerHolder .answer').each(function(index, element) {
						if($(this).attr('data-type') == 'image'){
							$(this).css('opacity',1);
						}
					});

					$('#answerHolder .drop').each(function(index, element) {
						var dragID = $('#'+$(this).attr('data-drag-id')).attr('data-answer');
						playerData.answer_arr.push(Number(dragID));
					});

					checkDisplayQuestionResult();
				}else {
					//others
					$('#answerHolder .answer').each(function(index, element) {
						if($(this).hasClass('answerFocus')){
							if($(this).attr('data-submit') == undefined || $(this).attr('data-submit') == 'false'){
								playerData.answer_arr.push(Number($(this).attr('data-id')));
							}
						}
					});
					checkDisplayQuestionResult();
				}
			}
		}});
	}
}

/*!
 * 
 * CHECK RIGHT ANSWER - This is the function that runs to check right answer
 * 
 */
 
function checkAnswerCorrect(){
	var correctAnswer = false;
	var correctAnswerCount = 0;
	
	playerData.answerArray = [];
	stopVideoPlayer(true);

	if(playerData.answerType == 'drag' && $('#groupHolder .groupDrop').length){
		var totalAnswerCount = 0;
		var correctAnswerCount = 0;
		var totalDragCount = 0;
		
		$('#groupHolder .groupDrop').each(function(index, element) {
			var groupAnswerArray = $(this).attr('data-answer')
			groupAnswerArray = groupAnswerArray == '' ? [] : groupAnswerArray.split(',');
			totalAnswerCount += groupAnswerArray.length;
			
			var groupArray = $(this).attr('data-group');
			groupArray = groupArray == undefined ? [] : groupArray.split(',');
			
			var dragGroupArr = [];
			var answerOriID = '';
			for(var n=0; n<groupArray.length; n++){
				var answerOriID = $('#answer'+groupArray[n]).attr('data-ori-id');
				if(groupAnswerArray.indexOf(answerOriID) != -1){
					correctAnswerCount++;
				}
				totalDragCount++;

				dragGroupArr.push(answerOriID);
			}

			playerData.answerArray += dragGroupArr.toString() + '|';
		});

		playerData.answerArray = playerData.answerArray.substring(0, playerData.answerArray.length-1);
		if(totalAnswerCount == correctAnswerCount && totalAnswerCount == totalDragCount){
		 	correctAnswer = true;  
		}
	}else if(playerData.answerType == 'drag'){
		//drag and drop question
		var totalDrop = $('#answerHolder .drop').length;
		var totalDrag = $('#answerHolder .dragActive').length;
		
		$('#answerHolder .drop').each(function(index, element) {
			var dropID = $(this).attr('id').substring(4, $(this).attr('id').length);
			var dragID = $('#'+$(this).attr('data-drag-id')).attr('data-answer');
			
			playerData.answerArray.push(Number(dragID)+1);
			if(dropID == dragID){
				correctAnswerCount++;
			}
		});

		playerData.answerArray = playerData.answerArray.toString();
		
		if(totalDrag < totalDrop){
			if(correctAnswerCount == totalDrag){
				correctAnswer = true;
			}
		}else{
			if(correctAnswerCount == totalDrop){
				correctAnswer = true;
			}
		}
	}else if(playerData.answerType == 'select'){
		for(var n=0; n<playerData.answer_arr.length; n++){
			playerData.answerArray.push(gameData.targetAnswerSequence[playerData.answer_arr[n]] + 1);
		}
		playerData.answerArray = playerData.answerArray.toString();
		
		//multiple choices select
		for(var n=0;n<playerData.answer_arr.length;n++){
			var currentAnswer = playerData.answer_arr[n]+1;
			if(playerData.correctAnswer.indexOf(currentAnswer) != -1){
				correctAnswerCount++;	
			}
		}
		
		if(correctAnswerCount == playerData.correctAnswer.length && playerData.answer_arr.length == playerData.correctAnswer.length){
			correctAnswer = true;
		}
	}else if(playerData.answerType == 'input'){
		//input question
		var totalInput = $('#inputHolder input').length;
		$('#inputHolder input').each(function(index, element) {
			var userAnswer = playerData.answer_arr[index];
			playerData.answerArray.push(userAnswer);

			var thisAnswer = $(this).attr('data-answer').split(",");
			if(thisAnswer.indexOf(userAnswer) != -1) {
				correctAnswerCount++;	
			}
		});	

		playerData.answerArray = playerData.answerArray.toString();
		
		if(correctAnswerCount == totalInput){
			correctAnswer = true;
		}
	}
	
	return correctAnswer;
}

function checkInputAnswer(){
	if(!playerData.answered){
		var proceedInput = false;

		var totalInput = $('#inputHolder input').length;
		var totalCount = 0;
		
		playerData.answer_arr = [];
		$('#inputHolder input').each(function(index, element) {
			if($(this).val() != ''){
				playerData.answer_arr.push($(this).val());
				totalCount++;
			}
		});
		
		if(totalInput == totalCount){
			proceedInput = true;
		}	
		
		if(proceedInput){
			if(playerData.secondChance){
				playerData.secondAnswered = true;
			}

			//hide submit
			$('#inputHolder .input').each(function(index, element) {
				if($(this).attr('data-submit') == 'true'){
					$(this).hide();
				}
			});
			
			playSound('soundClick');
			toggleGameTimer(false);
			stopAudio();
			toggleAudioInterval(false);
			playerData.answered = true;
			
			$("#inputHolder input").prop('disabled', true);
			checkDisplayQuestionResult();
		}
	}
}

/*!
 * 
 * DISPLAY QUESTION RESULT - This is the function that runs to display question result
 * 
 */
function checkDisplayQuestionResult(){
	if(!playerData.answerRevealed){
		playerData.answerRevealed = true;
		playerData.answerCorrectStatus = checkAnswerCorrect();
		returnToQuestion();
	}
}

function returnToQuestion(){
	if(playerData.answerResult){
		goPage('result');
	}else{
		animateCorrectAnswers();
	}
}

function animateCorrectAnswers(){
	var answerCorrectStatus = checkAnswerCorrect();
	var proceedAnimate = false;

	var playerIndex = playerData.index;
	if(playerIndex != -1){
		playerData.player[playerIndex].answer++;
	}
	
	if(!answerCorrectStatus){
		if(questionSettings.revealAnswer){
			proceedAnimate = true;
		}
		
		if(!playerData.timer){
			if(!playerData.answerCorrectStatus && gameData.secondChance && !playerData.secondAnswered){
				proceedAnimate = false;
				prepareSecondChance();
			}
		}else{
			if(gameData.type != 'quick'){
				if(!playerData.answerCorrectStatus && gameData.secondChance && !playerData.secondAnswered){
					proceedAnimate = false;
					prepareSecondChance();
				}
			}
		}
	}

	if(!proceedAnimate){
		displayQuestionResult();
		return;
	}

	togglePlayerAction(true, true);

	if(playerData.answerType == 'input'){
		$('#inputHolder input').each(function(index, element) {
			var thisAnswer = $(this).attr('data-answer').split(",");
			if(thisAnswer.indexOf($(this).val()) == -1) {
				$(this).val(thisAnswer);
				$(this).css('background', inputProperty.wrongColor);
				$(this).css('background', inputProperty.wrongBackground);
			}

			TweenMax.to($(this), 0, {scaleX:.5, scaleY:.5, overwrite:true});
			TweenMax.to($(this), 1, {scaleX:1, scaleY:1, alpha:1, overwrite:true, ease:Elastic.easeOut, onComplete:function(){
				TweenMax.to($(this), 0, {delay:1, overwrite:true, onComplete:function(){
					gameData.displayTween = true;
					displayQuestionResult();
				}});
			}});
		});
	}else if(playerData.answerType == 'drag' && $('.groupDrop').length){
		$('#groupHolder .groupDrop').each(function(dropIndex, dropElement) {
			var groupArray = $(this).attr('data-group');
			if(groupArray != undefined){
				$(this).attr('data-groupanswered', $(this).attr('data-group'));
			}
		});
		
		var revertPos = [];
		$('#answerHolder .answer').each(function(index, element) {
			var answerOriID = $(this).attr('data-ori-id');
			var answerID = $(this).attr('data-id');
			var targetAnswer = $(this);
			
			if(answerOriID != undefined){
				//not submit button
				
				var foundInGroup = false;
				$('#groupHolder .groupDrop').each(function(dropIndex, dropElement) {
					var groupAnswerArray = $(this).attr('data-answer').split(',');
					var groupArray = $(this).attr('data-groupanswered');
					groupArray = groupArray == undefined ? [] : groupArray.split(',');

					var answerInCorrectGroup = groupAnswerArray.indexOf(answerOriID);
					var answerInGroup = groupArray.indexOf(String(answerID));
					
					if(answerInCorrectGroup != -1 && !foundInGroup){
						foundInGroup = true;
						
						//is in the  group
						if(answerInGroup == -1){
							if(targetAnswer.attr('data-type') == 'image'){
								targetAnswer.css('opacity',.8);
							}
							targetAnswer.removeClass('answerFocus');
							targetAnswer.find('.background').css('background', answersButtonProperty.wrongColor);
							targetAnswer.find('.shadow').css('background', answersButtonProperty.wrongShadowColor);
							
							targetAnswer.removeClass('occupied');
							removeGroupID(dropIndex, targetAnswer);
							updateGroupID($(dropElement), targetAnswer, true);
						}

					}
				});
				
				if(!foundInGroup){
					targetAnswer.removeClass('answerFocus');
					targetAnswer.find('.background').css('background', answersButtonProperty.wrongColor);
					targetAnswer.find('.shadow').css('background', answersButtonProperty.wrongShadowColor);
					
					removeGroupID(-1, targetAnswer);
					targetAnswer.removeClass('occupied');
					revertPos.push(targetAnswer);
				}
				
				TweenMax.to(targetAnswer, 0, {delay:1, overwrite:true, onComplete:function(){
					displayQuestionResult();
				}});
			}
		});
		
		setGroupPosition();
		for(var n=0; n<revertPos.length; n++){
			revertPosition(revertPos[n]);
		}
	}else if(playerData.answerType == 'drag'){
		$('#answerHolder .answer').each(function(index, element) {
			var answerNum = $(this).attr('data-answer');
			if($('#drop'+answerNum).length == 0){
				var targetAnswer = $(this);
				if(targetAnswer.attr('data-type') == 'image'){
					targetAnswer.css('opacity',.8);
				}
				targetAnswer.removeClass('answerFocus');
				targetAnswer.find('.background').css('background', answersButtonProperty.wrongColor);
				targetAnswer.find('.shadow').css('background', answersButtonProperty.wrongShadowColor);		
			}
		});
		
		$('#answerHolder .drop').each(function(index, element) {
			var dropID = $(this).attr('id').substring(4, $(this).attr('id').length);
			var dragID = $('#'+$(this).attr('data-drag-id')).attr('data-answer');
			
			var targetAnswer = $('#'+$(this).attr('data-drag-id'));
			if(dropID != dragID){
				if(targetAnswer.attr('data-type') == 'image'){
					targetAnswer.css('opacity',.8);
				}
				targetAnswer.removeClass('answerFocus');
				targetAnswer.find('.background').css('background', answersButtonProperty.wrongColor);
				targetAnswer.find('.shadow').css('background', answersButtonProperty.wrongShadowColor);
			}
			
			TweenMax.to(targetAnswer, 0, {delay:1, overwrite:true, onComplete:function(){
				displayQuestionResult();
			}});
		});
		
		$('#answerHolder .answer').each(function(index, element) {
			var answerNum = $(this).attr('data-answer');
			if($('#drop'+answerNum).length){
				$(this).addClass('occupied');
				$(this).attr('data-top-drop', $('#drop'+answerNum).attr('data-top'));
				$(this).attr('data-left-drop', $('#drop'+answerNum).attr('data-left'));
			}else{
				$(this).removeClass('occupied');
			}
			revertPosition($(this));
		});
	}else {
		//others

		$('#answerHolder .answer').each(function(index, element) {
			if($(this).attr('data-type') == 'image'){
				$(this).css('opacity',.5);
			}
		});
		
		for(var n=0;n<playerData.answer_arr.length;n++){
			var currentAnswer = playerData.answer_arr[n];
			$('#answer'+currentAnswer).removeClass('answerFocus');
			$('#answer'+currentAnswer).find('.background').css('background', answersButtonProperty.wrongColor);
			$('#answer'+currentAnswer).find('.shadow').css('background', answersButtonProperty.wrongShadowColor);
		}
		
		for(var n=0;n<playerData.correctAnswer.length;n++){
			var currentAnswer = playerData.correctAnswer[n]-1;
			$('#answer'+currentAnswer).addClass('answerFocus');
			$('#answer'+currentAnswer).find('.background').css('background', answersButtonProperty.answerdColor);
			$('#answer'+currentAnswer).find('.shadow').css('background', answersButtonProperty.answerdShadowColor);
			
			TweenMax.to($('#answer'+currentAnswer), 0, {scaleX:.5, scaleY:.5, overwrite:true});
			TweenMax.to($('#answer'+currentAnswer), 1, {scaleX:1, scaleY:1, alpha:1, overwrite:true, ease:Elastic.easeOut, onComplete:function(){
				TweenMax.to($('#answer'+currentAnswer), 0, {delay:1, overwrite:true, onComplete:function(){
					displayQuestionResult();
				}});
			}});
		}
	}
}

/*!
 * 
 * SECOND CHANCE - This is the function that runs to prepare second chance
 * 
 */
function prepareSecondChance(){
	playSound('soundAnswerWrong');

	$('#chanceHolder').show();
	$('#chanceHolder .chanceAnimateIcon').css('left', '-200px');
	$('#chanceHolder .chanceAnimateIcon').css('opacity', 0);

	TweenMax.to($('#chanceHolder .chanceAnimateIcon'), 1, {delay:1, left:'0', opacity:1, overwrite:true, ease:Expo.easeOut, onStart:function(){
		playSound('soundSecondChance');
	}, onComplete:function(){
		TweenMax.to($('#chanceHolder .chanceAnimateIcon'), 1, {left:'200px', opacity:0, overwrite:true, ease:Expo.easeIn, onComplete:function(){
			$('#chanceHolder').hide();
		}});
	}});

	TweenMax.to($('#questionHolder'), 3, {overwrite:true, onComplete:function(){
		$('.gameChance').show();

		playerData.answerRevealed = false;
		playerData.answered = false;
		playerData.secondChance = true;
		
		$('.answerFocus').find('.background').css('background', answersButtonProperty.wrongColor);
		$('.answerFocus').find('.shadow').css('background', answersButtonProperty.wrongShadowColor);
		$('.answer').removeClass('answerFocus');

		$('#answerHolder .answer').each(function(index, element) {
			if($(this).attr('data-type') == 'image'){
				$(this).css('opacity',.5);
			}
		});

		if(playerData.answerType == 'drag'){
			$('.answer').find('.background').css('background', answersButtonProperty.color);
			$('.answer').find('.shadow').css('background', answersButtonProperty.shadowColor);

			$('.answer').show();
			
			$('.groupDrag').draggable('enable');
			$('.groupDrop').droppable('enable');
			$('.groupDrop').removeAttr('data-group');
			$('.groupDrop').removeAttr('data-groupanswered');

			$('.drag').draggable('enable');
			$('.drop').droppable('enable');

			$('#answerHolder .answer').each(function(index, element) {
				$(this).removeClass('occupied');
				revertPosition($(this));
			});
		}else if(playerData.answerType == 'input'){
			$("#inputHolder input").prop('disabled', false);
			$('.input').show();
		}else if(playerData.answerType == 'select'){
			$('#answerHolder .answer').each(function(index, element) {
				if($(this).attr('data-submit') == 'true'){
					$(this).show();
					$(this).find('.background').css('background', answersButtonProperty.color);
					$(this).find('.shadow').css('background', answersButtonProperty.shadowColor);
				}
			});
		}

		togglePlayerAction(true, true);

		storeData.timerDate = 0;
		storeData.status = false;

		timeData.accumulate = 0;
		timeData.countdown = gameData.type == 'quick' ? quickGameSettings.timerSettings.secondTimer : gridStyleSettings.timerSettings.secondTimer;
		toggleGameTimer(true);

		if(gameData.secondChanceSelect && playerData.player.length == 2){
			switchGridStylePlayer();
			highlightPlayer();
		}else{
			playerData.playerSelect = true;
		}
	}});
}

function displayQuestionResult(){
	if(!playerData.timer){
		if(!playerData.answerCorrectStatus && gameData.secondChance && !playerData.secondAnswered){
			return;
		}
	}

	if(playerData.answerCorrectStatus && playerData.index != -1){
		var playerIndex = playerData.index;
		var currentScore = quickGameSettings.score;
		if(gameData.type != 'quick'){
			currentScore = gridStyleSettings.levels[playerData.pointID];
		}
		playerData.player[playerIndex].score += currentScore;
		playerData.player[playerIndex].correct++;
		if(playerData.secondChance){
			playerData.player[playerIndex].steal++;
		}
	}

	
	if(questionSettings.showCorrectWrong){
		if(playerData.answerCorrectStatus){
			playSound('soundAnswerCorrect');
			animateGamePlayerScore(true);

			$('.questionResultText').html(questionSettings.correctDisplayText);
		}else{
			playSound('soundAnswerWrong');
			animateGamePlayerScore(false);
			$('.questionResultText').html(questionSettings.wrongDisplayText);
		}
		
		TweenMax.killTweensOf($('.questionResultText'));
		TweenMax.to($('.questionResultText'), 0, {scaleX:.8, scaleY:.8, alpha:0, overwrite:true});
		TweenMax.to($('.questionResultText'), 1, {delay:.2, scaleX:1, scaleY:1, alpha:1, ease:Elastic.easeOut, overwrite:true});
			
		if(questionSettings.explanation){
			playAudioLoop('explanation');
			$('#explanationHolder').show();	
		}else{
			$('#explanationHolder').hide();	
		}
		
		$('#questionHolder').hide();
		$('#questionResultHolder').show();
		$('#questionResultHolder').css('opacity',0);

		playerData.answered = true;
		playerData.playerSelect = false;
		togglePlayerAction(false, false);
		
		TweenMax.to($('#questionResultHolder'), 1, {alpha:1, overwrite:true, onComplete:function(){
			
		}});
	}else{
		if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
			postSocketUpdate('prepareNextQuestion');
		}else{
			prepareNextQuestion();
		}
	}
}

function presetAnswered(){
	TweenMax.killAll();
	stopVideoPlayer(true)

	TweenMax.to($('.questionResultText'), 0, {scaleX:1, scaleY:1, overwrite:true});
	if(playerData.answerType == 'select'){
		$('#answerHolder .answer').each(function(index, element) {
			if($(this).attr('data-submit') == 'true'){
				$(this).hide();
			}
		});
		
		$('#answerHolder .answer').each(function(index, element) {
			if($(this).attr('data-type') == 'image'){
				$(this).css('opacity',.5);
			}
		});
		
		for(var n=0;n<playerData.answer_arr.length;n++){
			var currentAnswer = playerData.answer_arr[n];
			$('#answer'+currentAnswer).removeClass('answerFocus');
			$('#answer'+currentAnswer).find('.background').css('background', answersButtonProperty.wrongColor);
			$('#answer'+currentAnswer).find('.shadow').css('background', answersButtonProperty.wrongShadowColor);
		}
		
		if(questionSettings.revealAnswer){
			for(var n=0;n<playerData.correctAnswer.length;n++){
				var currentAnswer = playerData.correctAnswer[n]-1;
				$('#answer'+currentAnswer).addClass('answerFocus');
				$('#answer'+currentAnswer).find('.background').css('background', answersButtonProperty.answerdColor);
				$('#answer'+currentAnswer).find('.shadow').css('background', answersButtonProperty.answerdShadowColor);
				
				TweenMax.to($('#answer'+currentAnswer), 0, {scaleX:.5, scaleY:.5, overwrite:true});
				TweenMax.to($('#answer'+currentAnswer), 1, {scaleX:1, scaleY:1, alpha:1, overwrite:true, ease:Elastic.easeOut, onComplete:function(){
					TweenMax.to($('#answer'+currentAnswer), 0, {delay:1, overwrite:true});
				}});	
			}
		}
	}else if(playerData.answerType == 'input'){
		$('#inputHolder .input').each(function(index, element) {
			if($(this).attr('data-submit') == 'true'){
				$(this).hide();
			}
		});

		$('#inputHolder input').each(function(index, element) {
			$(this).val(playerData.answer_arr[index]);
			
			if(questionSettings.revealAnswer){
				var thisAnswer = $(this).attr('data-answer').split(",");
				if(thisAnswer.indexOf($(this).val()) == -1) {
					$(this).val(thisAnswer);
					$(this).css('background', inputProperty.wrongColor);
					$(this).css('background', inputProperty.wrongBackground);
				}
			}
		});
	}else if(playerData.answerType == 'drag' && $('.groupDrop').length){
		$('.groupDrag').draggable('disable');
		$('.groupDrop').droppable('disable');

		$('#answerHolder .answer').each(function(index, element) {
			if($(this).attr('data-submit') == 'true'){
				$(this).hide();
			}
		});

		var tempAnswer = [];
		$('#groupHolder .groupDrop').each(function(dropIndex, dropElement) {
			var groupArr = [];
			for(var n =0; n<playerData.answer_arr[dropIndex].length; n++){
				$('#answerHolder .answer').each(function(aIndex, aElement) {
					if($(aElement).attr('data-ori-id') == String(playerData.answer_arr[dropIndex][n])){
						updateGroupID($(dropElement), $(aElement), true);
						groupArr.push($(aElement).attr('data-id'));
					}
				});
			}

			tempAnswer.push(groupArr);
			$(this).attr('data-groupanswered', groupArr.toString());
		});

		setGroupPosition();

		if(questionSettings.revealAnswer){
			var revertPos = [];
			$('#answerHolder .answer').each(function(index, element) {
				var answerOriID = $(this).attr('data-ori-id');
				var answerID = $(this).attr('data-id');
				var targetAnswer = $(this);
				
				if(answerOriID != undefined){
					//not submit button
					
					var foundInGroup = false;
					$('#groupHolder .groupDrop').each(function(dropIndex, dropElement) {
						var groupAnswerArray = $(this).attr('data-answer').split(',');
						var groupArray = tempAnswer[dropIndex];

						var answerInCorrectGroup = groupAnswerArray.indexOf(answerOriID);
						var answerInGroup = groupArray.indexOf(String(answerID));
						
						if(answerInCorrectGroup != -1 && !foundInGroup){
							foundInGroup = true;
							
							//is in the  group
							if(answerInGroup == -1){
								if(targetAnswer.attr('data-type') == 'image'){
									targetAnswer.css('opacity',.8);
								}
								targetAnswer.removeClass('answerFocus');
								targetAnswer.find('.background').css('background', answersButtonProperty.wrongColor);
								targetAnswer.find('.shadow').css('background', answersButtonProperty.wrongShadowColor);
								
								targetAnswer.removeClass('occupied');
								removeGroupID(dropIndex, targetAnswer);
								updateGroupID($(dropElement), targetAnswer, true);
							}
						}
					});
					
					if(!foundInGroup){
						targetAnswer.removeClass('answerFocus');
						targetAnswer.find('.background').css('background', answersButtonProperty.wrongColor);
						targetAnswer.find('.shadow').css('background', answersButtonProperty.wrongShadowColor);
						
						removeGroupID(-1, targetAnswer);
						targetAnswer.removeClass('occupied');
						revertPos.push(targetAnswer);
					}
				}
			});
			
			setGroupPosition();
			for(var n=0; n<revertPos.length; n++){
				revertPosition(revertPos[n]);
			}
		}
	}else if(playerData.answerType == 'drag'){
		$('.drag').draggable('disable');
		$('.drop').droppable('disable');

		$('#answerHolder .answer').each(function(index, element) {
			if($(this).attr('data-submit') == 'true'){
				$(this).hide();
			}
		});

		$('#answerHolder .answer').each(function(index, element) {
			if($(this).attr('data-type') == 'image'){
				$(this).css('opacity',.5);
			}
		});
		
		$('#answerHolder .drop').each(function(index, element) {
			var dropID = $(this).attr('id').substring(4, $(this).attr('id').length);
			var targetAnswer = '';
			$('#answerHolder .answer').each(function(aIndex, aElement) {
				if($(aElement).attr('data-answer') == playerData.answer_arr[index]){
					targetAnswer = $(aElement);
				}
			});	

			if(questionSettings.revealAnswer){
				if(Number(dropID) != playerData.answer_arr[index]){
					if(targetAnswer.attr('data-type') == 'image'){
						targetAnswer.css('opacity',.8);
					}
					targetAnswer.removeClass('answerFocus');
					targetAnswer.find('.background').css('background', answersButtonProperty.wrongColor);
					targetAnswer.find('.shadow').css('background', answersButtonProperty.wrongShadowColor);
				}
			}
		});
		
		$('#answerHolder .answer').each(function(index, element) {
			var answerNum = Number($(this).attr('data-answer'));
			var dropNum = playerData.answer_arr.indexOf(answerNum);

			if(questionSettings.revealAnswer){
				var answerNum = $(this).attr('data-answer');
				dropNum = answerNum;
			}

			if($('#drop'+dropNum).length){
				$(this).addClass('occupied');
				$(this).attr('data-top-drop', $('#drop'+dropNum).attr('data-top'));
				$(this).attr('data-left-drop', $('#drop'+dropNum).attr('data-left'));
			}else{
				$(this).removeClass('occupied');
			}
			revertPosition($(this));
		});
	}

	if(playerData.answerCorrectStatus){
		$('.questionResultText').html(questionSettings.correctDisplayText);
	}else{
		$('.questionResultText').html(questionSettings.wrongDisplayText);
	}
		
	if(questionSettings.explanation){
		$('#explanationHolder').show();	
	}else{
		$('#explanationHolder').hide();	
	}
	
	$('#questionHolder').hide();
	$('#questionResultHolder').show();
	$('#questionResultHolder').css('opacity',1);
}

function previewQuestion(){
	$('#questionResultHolder').hide();
	$('#questionHolder').show();
	$('#questionHolder').css('opacity',0);
	
	playYoutubeVideo();
	TweenMax.to($('#questionHolder'), 1, {alpha:1, overwrite:true, onComplete:function(){
		TweenMax.to($('#questionHolder'), 0, {delay:2, overwrite:true, onComplete:function(){
			stopVideoPlayer(true);
			$('#questionHolder').hide();
			$('#questionResultHolder').show();
			$('#questionResultHolder').css('opacity',0);
			
			TweenMax.to($('#questionResultHolder'), 1, {alpha:1, overwrite:true, onComplete:function(){
				
			}});
		}});
	}});
}

function playYoutubeVideo(){
	$('#videoHolder iframe').attr('src',$('#videoHolder iframe').attr('data-src'));	
}

function stopVideoPlayer(con){
	$("video").each(function(){
		$(this).get(0).pause();
	});	
	
	if(con){
		$('#videoHolder iframe').attr('src','');
	}
}

/*!
 * 
 * PREPARE NEXT QUESTION - This is the function that runs for next question
 * 
 */
function prepareNextQuestion(){
	toggleQuestionLoader(true);
	stopAudio();

	if(gameData.type != 'quick'){
		toggleGridStyle(true);
		return;
	}
	
	var totalQuestionsLength = gameData.sequence_arr.length;
	
	if(questionSettings.totalQuestionLimit != 0){
		gameData.questionNum++;
		
		var totalMax = questionSettings.totalQuestionLimit > totalQuestionsLength ? totalQuestionsLength : questionSettings.totalQuestionLimit;
		if(gameData.questionNum < totalMax){
			if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
				if(socketData.host){
					socketData.loaded = 0;
				}
				postSocketUpdate('loadquestion');
			}else{
				loadQuestion();
			}
		}else{
			playSound('soundComplete');
			goPage('result');
		}
	}else{
		if(gameData.questionNum < totalQuestionsLength-1){
			gameData.questionNum++;
			if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
				if(socketData.host){
					socketData.loaded = 0;
				}
				postSocketUpdate('loadquestion');
			}else{
				loadQuestion();
			}
		}else{
			playSound('soundComplete');
			goPage('result');
		}
	}
}

/*!
 * 
 * TOGGLE QUESTION LOADER - This is the function that runs to display question loader
 * 
 */
function toggleQuestionLoader(con){
	if(con){
		$('#questionLoaderHolder').show();
		$('#questionHolder').hide();
	}else{
		$('#questionLoaderHolder').hide();
		$('#questionHolder').show();	
	}
}

/*!
 * 
 * GAME TIMER - This is the function that runs for game timer
 * 
 */
function toggleGameTimer(con){
	$('.gameTimer').hide();
	
	if($.editor.enable){
		return;	
	}

	if(!timeData.status){
		return;	
	}
	
	$('.gameTimer').show();
	TweenMax.killTweensOf(timeData);
	if(con){
		if(storeData.status){
			timeData.startDate = storeData.timerDate;
		}else{
			timeData.startDate = storeData.timerDate = new Date();
		}
		loopTimer();
	}else{
		timeData.accumulate = timeData.timer;
		timeData.countdown = timeData.timer;
	}
	timeData.enable = con;
}

function resetTimerDisplay(){
	var resetDisplay = true;	
	if(resetDisplay){
		if(timeData.mode == 'countdown'){
			$('#gameStatus .gameTimerStatus').html(millisecondsToTime(timeData.countdown));
		}else{
			$('#gameStatus .gameTimerStatus').html('00:00');
		}
	}
}

function loopTimer(){
	TweenMax.to(timeData, .2, {overwrite:true, onComplete:updateTimer});		
}

function updateTimer(){
	timeData.nowDate = new Date();
	timeData.elapsedTime = Math.floor((timeData.nowDate.getTime() - timeData.startDate.getTime()));
	
	if(timeData.mode == 'quick'){
		timeData.timer = timeData.elapsedTime + timeData.accumulate;
	}else if(timeData.mode == 'countdown'){
		timeData.timer = Math.floor(((timeData.countdown)) - (timeData.elapsedTime))
	}
	
	timeData.timer = timeData.timer < 0 ? 0 : timeData.timer;

	if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
		if(socketData.host){
			postSocketUpdate('updatetimer', timeData.timer);
		}
	}else{
		updateTimerDisplay();
	}
}

function updateTimerDisplay(){
	$('.gameTimerStatus').html(millisecondsToTime(timeData.timer));
	
	if(timeData.timer <= 0){
		playerData.timer = true;

		if(playerData.secondChance){
			playerData.secondAnswered = true;
		}
		checkDisplayQuestionResult();
	}else{
		if(timeData.enable){
			loopTimer();
		}
	}
}

/*!
 * 
 * XML - This is the function that runs to load word from xml
 * 
 */
function loadXML(src){
	gameData.xmlComplete = false;

	$('.preloadText').show();
	$('#buttonVersus').hide();
	$('#buttonGridStyle').hide();

	$('#buttonLocal').hide();
	$('#buttonOnline').hide();
	$('#buttonStart').hide();
	
	$.ajax({
       url: src,
       type: "GET",
       dataType: "xml",
       success: function (result) {
			if($.editor.enable){
				edit.xmlFile = result;
			}
			
			$(result).find('thumb').each(function(catIndex, catElement){
				var type = $(catElement).attr('type') == undefined ? 'quick,grid' : $(catElement).attr('type');
				type = $(catElement).attr('type') == '' ? 'quick,grid' : $(catElement).attr('type');
				type = type.split(',');

				if(type.indexOf('quick') != -1){
					var parent = $(catElement).attr('parent') == undefined ? '' : $(catElement).attr('parent');
					gameData.categoryThumb_arr.push({src:$(catElement).text(), name:$(catElement).attr('name'), parent:parent, settings:{}});
				}
			});
			
            $(result).find('item').each(function(questionIndex, questionElement){
				pushDataArray(questionIndex, questionElement);
			});
			
			loadXMLComplete();
       }
	});
}

function pushDataArray(questionIndex, questionElement){
	var curGameType = $(questionElement).find('category').attr('type');
	curGameType = curGameType == undefined  ? 'quick,grid' : curGameType;
	curGameType = curGameType == '' ? 'quick,grid' : curGameType;
	curGameType = curGameType.split(',');

	var curCategory = $(questionElement).find('category').text();
	if(curCategory != '' && curGameType.indexOf('quick') != -1){
		gameData.category_arr.push($(questionElement).find('category').text());
	}

	var curCategoryLevel = $(questionElement).find('category').attr('level');
	curCategoryLevel = curCategoryLevel == undefined ? '1' : curCategoryLevel;
				
	//landscape
	$(questionElement).find('landscape').each(function(landscapeIndex, landscapeElement){
		quesLandscape_arr.push({category:curCategory,
								categoryLevel:curCategoryLevel, 
								gameType:curGameType, 
								text:$(landscapeElement).find('question').text(), 
								fontSize:$(landscapeElement).find('question').attr('fontSize'), 
								lineHeight:$(landscapeElement).find('question').attr('lineHeight'), 
								color:$(landscapeElement).find('question').attr('color'), 
								align:$(landscapeElement).find('question').attr('align'), 
								top:$(landscapeElement).find('question').attr('top'), 
								left:$(landscapeElement).find('question').attr('left'),
								width:$(landscapeElement).find('question').attr('width'),
								height:$(landscapeElement).find('question').attr('height'),
								type:$(landscapeElement).find('question').attr('type'), 
								groups:[],
								videos:[],
								answers:{
									correctAnswer:$(landscapeElement).find('answers').attr('correctAnswer'),
									drag:$(landscapeElement).find('answers').attr('drag'),
									answer:[]
								},
								inputs:[],
								audio:$(landscapeElement).find('question').attr('audio'),
								explanation:{
									text:$(landscapeElement).find('explanation').text(), 
									fontSize:$(landscapeElement).find('explanation').attr('fontSize'), 
									lineHeight:$(landscapeElement).find('explanation').attr('lineHeight'), 
									color:$(landscapeElement).find('explanation').attr('color'), 
									align:$(landscapeElement).find('explanation').attr('align'), 
									top:$(landscapeElement).find('explanation').attr('top'), 
									left:$(landscapeElement).find('explanation').attr('left'),
									width:$(landscapeElement).find('explanation').attr('width'),
									height:$(landscapeElement).find('explanation').attr('height'),
									type:$(landscapeElement).find('explanation').attr('type'),
									audio:$(landscapeElement).find('explanation').attr('audio'),
								},
							   background:{
									text:$(landscapeElement).find('background').text(), 
									top:$(landscapeElement).find('background').attr('top'), 
									left:$(landscapeElement).find('background').attr('left'),
									width:$(landscapeElement).find('background').attr('width'),
									height:$(landscapeElement).find('background').attr('height')
								}
							   });
								
		$(landscapeElement).find('videos').each(function(videosIndex, videosElement){
			quesLandscape_arr[questionIndex].videos.push({
															width:$(videosElement).attr('width'),
															height:$(videosElement).attr('height'),
															top:$(videosElement).attr('top'),
															left:$(videosElement).attr('left'),
															autoplay:$(videosElement).attr('autoplay'),
															controls:$(videosElement).attr('controls'),
															embed:$(videosElement).attr('embed'),
															types:[]
														});
														
			$(videosElement).find('video').each(function(videoIndex, videoElement){
				quesLandscape_arr[questionIndex].videos[videosIndex].types.push({
																					src:$(videoElement).text(),
																					type:$(videoElement).attr('type')
																				});
			});
		});
				
		$(landscapeElement).find('answers answer').each(function(answerIndex, answerElement){
			quesLandscape_arr[questionIndex].answers.answer.push({text:$(answerElement).text(),
															submit:$(answerElement).attr('submit'),
															type:$(answerElement).attr('type'),
															width:$(answerElement).attr('width'),
															height:$(answerElement).attr('height'),
															top:$(answerElement).attr('top'),
															left:$(answerElement).attr('left'),
															fontSize:$(answerElement).attr('fontSize'),
															lineHeight:$(answerElement).attr('lineHeight'),
															color:$(answerElement).attr('color'),
															align:$(answerElement).attr('align'),
															audio:$(answerElement).attr('audio'),
															offsetTop:$(answerElement).attr('offsetTop'),
															
															dropLabelText:$(answerElement).attr('dropLabelText'),
															dropLabelType:$(answerElement).attr('dropLabelType'),
															dropLabelWidth:$(answerElement).attr('dropLabelWidth'),
															dropLabelHeight:$(answerElement).attr('dropLabelHeight'),
															dropLabelTop:$(answerElement).attr('dropLabelTop'),
															dropLabelLeft:$(answerElement).attr('dropLabelLeft'),
															dropLabelFontSize:$(answerElement).attr('dropLabelFontSize'),
															dropLabelLineHeight:$(answerElement).attr('dropLabelLineHeight'),
															dropLabelColor:$(answerElement).attr('dropLabelColor'),
															dropLabelAlign:$(answerElement).attr('dropLabelAlign'),
															dropLabelOffsetTop:$(answerElement).attr('dropLabelOffsetTop'),
														  
															dragEnable:$(answerElement).attr('dragEnable'),
															dropEnable:$(answerElement).attr('dropEnable'),
															dropLeft:$(answerElement).attr('dropLeft'),
															dropTop:$(answerElement).attr('dropTop'),
															dropWidth:$(answerElement).attr('dropWidth'),
															dropHeight:$(answerElement).attr('dropHeight'),
															dropOffLeft:$(answerElement).attr('dropOffLeft'),
															dropOffTop:$(answerElement).attr('dropOffTop'),});
		});
		
		$(landscapeElement).find('inputs input').each(function(inputIndex, inputElement){
			quesLandscape_arr[questionIndex].inputs.push({text:$(inputElement).text(),
															submit:$(inputElement).attr('submit'),
															type:$(inputElement).attr('type'),
															width:$(inputElement).attr('width'),
															height:$(inputElement).attr('height'),
															top:$(inputElement).attr('top'),
															left:$(inputElement).attr('left'),
															fontSize:$(inputElement).attr('fontSize'),
															lineHeight:$(inputElement).attr('lineHeight'),
															correctAnswer:$(inputElement).attr('correctAnswer'),
															color:$(inputElement).attr('color'),
															bacgkround:$(inputElement).attr('bacgkround'),
															align:$(inputElement).attr('align'),
															audio:$(inputElement).attr('audio'),
															offsetTop:$(inputElement).attr('offsetTop')});
		});
		
		$(landscapeElement).find('groups group').each(function(groupIndex, groupElement){
			quesLandscape_arr[questionIndex].groups.push({text:$(groupElement).text(),
														type:$(groupElement).attr('type'),
														width:$(groupElement).attr('width'),
														height:$(groupElement).attr('height'),
														top:$(groupElement).attr('top'),
														left:$(groupElement).attr('left'),
														fontSize:$(groupElement).attr('fontSize'),
														lineHeight:$(groupElement).attr('lineHeight'),
														color:$(groupElement).attr('color'),
														align:$(groupElement).attr('align'),
														offsetTop:$(groupElement).attr('offsetTop'),
														correctAnswer:$(groupElement).attr('correctAnswer'),
														dropMax:$(groupElement).attr('dropMax'),
														dropWidth:$(groupElement).attr('dropWidth'),
														dropHeight:$(groupElement).attr('dropHeight'),
														dropTop:$(groupElement).attr('dropTop'),
														dropLeft:$(groupElement).attr('dropLeft'),
														dropOffLeft:$(groupElement).attr('dropOffLeft'),
														dropOffTop:$(groupElement).attr('dropOffTop'),
														audio:$(groupElement).attr('audio')});
		});
	});
	
	//portrait
	$(questionElement).find('portrait').each(function(portraitIndex, portraitElement){
		quesPortrait_arr.push({category:curCategory, 
								categoryLevel:curCategoryLevel, 
								gameType:curGameType,
								text:$(portraitElement).find('question').text(), 
								fontSize:$(portraitElement).find('question').attr('fontSize'), 
								lineHeight:$(portraitElement).find('question').attr('lineHeight'), 
								align:$(portraitElement).find('question').attr('align'), 
								top:$(portraitElement).find('question').attr('top'), 
								left:$(portraitElement).find('question').attr('left'),
								width:$(portraitElement).find('question').attr('width'), 
								height:$(portraitElement).find('question').attr('height'),
								type:$(portraitElement).find('question').attr('type'), 
								color:$(portraitElement).find('answers').attr('color'),
							    groups:[],
								videos:[],
								answers:{
									correctAnswer:$(portraitElement).find('answers').attr('correctAnswer'),
									drag:$(portraitElement).find('answers').attr('drag'),
									answer:[]
								},
								inputs:[],
								audio:$(portraitElement).find('question').attr('audio'),
								explanation:{
									text:$(portraitElement).find('explanation').text(), 
									fontSize:$(portraitElement).find('explanation').attr('fontSize'), 
									lineHeight:$(portraitElement).find('explanation').attr('lineHeight'), 
									color:$(portraitElement).find('explanation').attr('color'), 
									align:$(portraitElement).find('explanation').attr('align'), 
									top:$(portraitElement).find('explanation').attr('top'), 
									left:$(portraitElement).find('explanation').attr('left'),
									width:$(portraitElement).find('explanation').attr('width'),
									height:$(portraitElement).find('explanation').attr('height'),
									type:$(portraitElement).find('explanation').attr('type'),
									audio:$(portraitElement).find('explanation').attr('audio'),
								},
							   background:{
									text:$(portraitElement).find('background').text(), 
									top:$(portraitElement).find('background').attr('top'), 
									left:$(portraitElement).find('background').attr('left'),
									width:$(portraitElement).find('background').attr('width'),
									height:$(portraitElement).find('background').attr('height')
								}
							  });
		
		$(portraitElement).find('videos').each(function(videosIndex, videosElement){
			quesPortrait_arr[questionIndex].videos.push({
															width:$(videosElement).attr('width'),
															height:$(videosElement).attr('height'),
															top:$(videosElement).attr('top'),
															left:$(videosElement).attr('left'),
															autoplay:$(videosElement).attr('autoplay'),
															controls:$(videosElement).attr('controls'),
															embed:$(videosElement).attr('embed'),
															types:[]
														});
														
			$(videosElement).find('video').each(function(videoIndex, videoElement){
				quesPortrait_arr[questionIndex].videos[videosIndex].types.push({
																					src:$(videoElement).text(),
																					type:$(videoElement).attr('type')
																				});
			});

		});
								
		$(portraitElement).find('answers answer').each(function(answerIndex, answerElement){
			quesPortrait_arr[questionIndex].answers.answer.push({text:$(answerElement).text(),
															submit:$(answerElement).attr('submit'),
															type:$(answerElement).attr('type'),
															width:$(answerElement).attr('width'),
															height:$(answerElement).attr('height'),
															top:$(answerElement).attr('top'),
															left:$(answerElement).attr('left'),
															fontSize:$(answerElement).attr('fontSize'),
															lineHeight:$(answerElement).attr('lineHeight'),
															color:$(answerElement).attr('color'),
															align:$(answerElement).attr('align'),
															audio:$(answerElement).attr('audio'),
															offsetTop:$(answerElement).attr('offsetTop'),
															
															dropLabelText:$(answerElement).attr('dropLabelText'),
															dropLabelType:$(answerElement).attr('dropLabelType'),
															dropLabelWidth:$(answerElement).attr('dropLabelWidth'),
															dropLabelHeight:$(answerElement).attr('dropLabelHeight'),
															dropLabelTop:$(answerElement).attr('dropLabelTop'),
															dropLabelLeft:$(answerElement).attr('dropLabelLeft'),
															dropLabelFontSize:$(answerElement).attr('dropLabelFontSize'),
															dropLabelLineHeight:$(answerElement).attr('dropLabelLineHeight'),
															dropLabelColor:$(answerElement).attr('dropLabelColor'),
															dropLabelAlign:$(answerElement).attr('dropLabelAlign'),
															dropLabelOffsetTop:$(answerElement).attr('dropLabelOffsetTop'),
															
														 	dragEnable:$(answerElement).attr('dragEnable'),
															dropEnable:$(answerElement).attr('dropEnable'),
															dropLeft:$(answerElement).attr('dropLeft'),
															dropTop:$(answerElement).attr('dropTop'),
															dropWidth:$(answerElement).attr('dropWidth'),
															dropHeight:$(answerElement).attr('dropHeight'),
															dropOffLeft:$(answerElement).attr('dropOffLeft'),
															dropOffTop:$(answerElement).attr('dropOffTop'),});
		});
		
		$(portraitElement).find('inputs input').each(function(inputIndex, inputElement){
			quesPortrait_arr[questionIndex].inputs.push({text:$(inputElement).text(),
															submit:$(inputElement).attr('submit'),
															type:$(inputElement).attr('type'),
															width:$(inputElement).attr('width'),
															height:$(inputElement).attr('height'),
															top:$(inputElement).attr('top'),
															left:$(inputElement).attr('left'),
															fontSize:$(inputElement).attr('fontSize'),
															lineHeight:$(inputElement).attr('lineHeight'),
															correctAnswer:$(inputElement).attr('correctAnswer'),
															color:$(inputElement).attr('color'),
															bacgkround:$(inputElement).attr('bacgkround'),
															align:$(inputElement).attr('align'),
															audio:$(inputElement).attr('audio'),
															offsetTop:$(inputElement).attr('offsetTop')});
		});
		
		$(portraitElement).find('groups group').each(function(groupIndex, groupElement){
			quesPortrait_arr[questionIndex].groups.push({text:$(groupElement).text(),
														type:$(groupElement).attr('type'),
														width:$(groupElement).attr('width'),
														height:$(groupElement).attr('height'),
														top:$(groupElement).attr('top'),
														left:$(groupElement).attr('left'),
														fontSize:$(groupElement).attr('fontSize'),
														lineHeight:$(groupElement).attr('lineHeight'),
														color:$(groupElement).attr('color'),
														align:$(groupElement).attr('align'),
														offsetTop:$(groupElement).attr('offsetTop'),
														correctAnswer:$(groupElement).attr('correctAnswer'),
														dropMax:$(groupElement).attr('dropMax'),
														dropWidth:$(groupElement).attr('dropWidth'),
														dropHeight:$(groupElement).attr('dropHeight'),
														dropTop:$(groupElement).attr('dropTop'),
														dropLeft:$(groupElement).attr('dropLeft'),
														dropOffLeft:$(groupElement).attr('dropOffLeft'),
														dropOffTop:$(groupElement).attr('dropOffTop'),
														audio:$(groupElement).attr('audio')});
		});
	});	
}

function loadXMLComplete(){
	gameData.xmlComplete = true;
	
	$('.preloadText').hide();
	$('#buttonVersus').show();
	$('#buttonGridStyle').show();
	
	gameData.targetArray = quesLandscape_arr;
	if(gameData.targetArray.length!=0){
		gameData.category_arr = unique(gameData.category_arr);
		gameData.category_arr.sort();
		
		if(categorySettings.allOption){
			gameData.category_arr.push(categorySettings.allText);
		}
	}
	
	if(categorySettings.status){
		buildCategoryLevel();
		buildCategory();
	}
	
	if($.editor.enable){
		loadEditPage();
		goPage('game');
	}else{
		goPage('main');
		if ( typeof initSocket == 'function' && multiplayerSettings.enable) {
			$('#buttonVersus').hide();
			$('#buttonGridStyle').hide();
			$('#buttonStart').show();

			initSocket();
		}
	}
}

/*!
 * 
 * QUESTION AND ANSWER IMAGE PRELOADER - This is the function that runs to preload question/answer image
 * 
 */
var imageLoader, fileFest;
function loadQuestionAssets(){
	imageLoader = new createjs.LoadQueue(false);
	createjs.Sound.alternateExtensions = ["mp3"];
	imageLoader.installPlugin(createjs.Sound);
	
	imageLoader.addEventListener("complete", handleImageComplete);
	imageLoader.loadManifest(fileFest);
}

function handleImageComplete() {
	if ( typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
		postSocketUpdate('loadQuestionAssetsComplete');
	}else{
		buildQuestion();
	}
};

function removeSoundAssets(){
	stopAudio();
	
	for(var n=0; n<audioLandscape_arr.length; n++){
		createjs.Sound.removeSound(audioLandscape_arr[n].id);	
	}
	for(var n=0; n<audioPortrait_arr.length; n++){
		createjs.Sound.removeSound(audioPortrait_arr[n].id);	
	}
}

/*!
 * 
 * RESIZE GAME - This is the function that runs to resize game
 * 
 */
function resizeGameDetail(){
	if(gameData.mode != gameData.oldMode){
		gameData.oldMode = gameData.mode;
		if(gameData.build && gameData.page == 'game'){
			if(gameData.type == 'quick'){
				buildQuestion();
			}else{
				if(!playerData.grid){
					buildQuestion();
				}
			}
		}
	}
	
	if(gameData.mode == 'portrait'){
		resetCategory();
		resetPlayerDetails();
		resetGamePlayers();
		resetGridStyle();
		resetResultWinners();

		$('.fontPreload').attr('data-fontSize', 20);
		$('.fontPreload').attr('data-lineHeight', 20);
		$('.fontCategory').attr('data-fontSize', 20);
		$('.fontCategory').attr('data-lineHeight', 20);
		$('.fontCategoryNav').attr('data-fontSize', 16);
		$('.fontCategoryNav').attr('data-lineHeight', 26);

		$('.fontPlayerDetailsTitle').attr('data-fontSize', 25);
		$('.fontPlayerDetailsTitle').attr('data-lineHeight', 25);
		$('.fontTotalPlayers').attr('data-fontSize', 20);
		$('.fontTotalPlayers').attr('data-lineHeight', 20);

		$('.fontPlayerName').attr('data-fontSize', 23);
		$('.fontPlayerName').attr('data-lineHeight', 23);


		$('.fontInstructionTitle').attr('data-fontSize', 25);
		$('.fontInstructionTitle').attr('data-lineHeight', 25);
		$('.fontInstruction').attr('data-fontSize', 20);
		$('.fontInstruction').attr('data-lineHeight', 25);

		$('.fontGridStatus').attr('data-fontSize', 20);
		$('.fontGridStatus').attr('data-lineHeight', 20);

		$('.fontCorrectWrong').attr('data-fontSize', 30);
		$('.fontCorrectWrong').attr('data-lineHeight', 30);
		$('.fontPlayerWin').attr('data-fontSize', 20);
		$('.fontPlayerWin').attr('data-lineHeight', 20);
		
		$('.gameQuestionStatus').attr('data-fontSize', 18);
		$('.gameQuestionStatus').attr('data-lineHeight', 18);
		$('.gameTimerStatus').attr('data-fontSize', 18);
		$('.gameTimerStatus').attr('data-lineHeight', 18);
		$('.gameScoreStatus').attr('data-fontSize', 18);
		$('.gameScoreStatus').attr('data-lineHeight', 18);
		
		$('.fontResultTitle').attr('data-fontSize', 25);
		$('.fontResultTitle').attr('data-lineHeight', 25);
		$('.fontResultName').attr('data-fontSize', 20);
		$('.fontResultName').attr('data-lineHeight', 20);
		$('.fontResultScore').attr('data-fontSize', 30);
		$('.fontResultScore').attr('data-lineHeight', 30);
		$('.fontResultStats').attr('data-fontSize', 20);
		$('.fontResultStats').attr('data-lineHeight', 25);
		$('.fontShare').attr('data-fontSize', 20);
		$('.fontShare').attr('data-lineHeight', 20);
		
		$('.fontMessage').attr('data-fontSize', 25);
		$('.fontMessage').attr('data-lineHeight', 25);
		
		$('.fontScoreTitle').attr('data-fontSize', 25);
		$('.fontScoreTitle').attr('data-lineHeight', 25);
		$('.fontSubmitTitle').attr('data-fontSize', 25);
		$('.fontSubmitTitle').attr('data-lineHeight', 25);
		$('.fontScoreList').attr('data-fontSize', 15);
		$('.fontScoreList').attr('data-lineHeight', 15);
		
		$('.fontLabel').attr('data-fontSize', 20);
		$('.fontLabel').attr('data-lineHeight', 20);
		$('.fontInput').attr('data-fontSize', 20);
		$('.fontInput').attr('data-lineHeight', 20);

		$('#roomWrapper').addClass('forPortrait');
		$('#notificationHolder').addClass('forPortrait');
		$('#roomlists').attr('size', 8);
		$('#namelists').attr('size', 8);
		$('#roomLogs').attr('rows', 6);
		$('.fontRoomTitle').attr('data-fontSize', 25);
		$('.fontRoomInput').attr('data-fontSize', 15);
		$('.fontRoomLists').attr('data-fontSize', 15);
		$('.fontRoomTextarea').attr('data-fontSize', 15);
		$('.fontRoomButton').attr('data-fontSize', 15);
		$('.fontNameError').attr('data-fontSize', 15);
		$('.fontLogText').attr('data-fontSize', 15);
		$('.fontNotification').attr('data-fontSize', 15);
		$('.fontNotification').attr('data-lineHeight', 15);
	}else{
		resetCategory();
		resetPlayerDetails();
		resetGamePlayers();
		resetGridStyle();
		resetResultWinners();

		$('.fontPreload').attr('data-fontSize', 30);
		$('.fontPreload').attr('data-lineHeight', 30);
		$('.fontCategory').attr('data-fontSize', 25);
		$('.fontCategory').attr('data-fontSize', 25);
		$('.fontCategoryNav').attr('data-fontSize', 20);
		$('.fontCategoryNav').attr('data-lineHeight', 30);

		$('.fontPlayerDetailsTitle').attr('data-fontSize', 50);
		$('.fontPlayerDetailsTitle').attr('data-lineHeight', 50);
		$('.fontTotalPlayers').attr('data-fontSize', 30);
		$('.fontTotalPlayers').attr('data-lineHeight', 30);

		$('.fontPlayerName').attr('data-fontSize', 35);
		$('.fontPlayerName').attr('data-lineHeight', 35);
		
		$('.gameQuestionStatus').attr('data-fontSize', 30);
		$('.gameQuestionStatus').attr('data-lineHeight', 30);
		$('.gameTimerStatus').attr('data-fontSize', 30);
		$('.gameTimerStatus').attr('data-lineHeight', 30);
		$('.gameScoreStatus').attr('data-fontSize', 30);
		$('.gameScoreStatus').attr('data-lineHeight', 30);

		$('.fontInstructionTitle').attr('data-fontSize', 50);
		$('.fontInstructionTitle').attr('data-lineHeight', 50);
		$('.fontInstruction').attr('data-fontSize', 30);
		$('.fontInstruction').attr('data-lineHeight', 40);

		$('.fontGridStatus').attr('data-fontSize', 30);
		$('.fontGridStatus').attr('data-lineHeight', 30);

		$('.fontCorrectWrong').attr('data-fontSize', 50);
		$('.fontCorrectWrong').attr('data-lineHeight', 50);
		$('.fontPlayerWin').attr('data-fontSize', 35);
		$('.fontPlayerWin').attr('data-lineHeight', 35);

		$('.fontResultTitle').attr('data-fontSize', 50);
		$('.fontResultTitle').attr('data-lineHeight', 50);
		$('.fontResultName').attr('data-fontSize', 25);
		$('.fontResultName').attr('data-lineHeight', 25);
		$('.fontResultScore').attr('data-fontSize', 35);
		$('.fontResultScore').attr('data-lineHeight', 35);
		$('.fontResultStats').attr('data-fontSize', 20);
		$('.fontResultStats').attr('data-lineHeight', 25);
		$('.fontShare').attr('data-fontSize', 20);
		$('.fontShare').attr('data-lineHeight', 20);
		
		$('.fontMessage').attr('data-fontSize', 30);
		$('.fontMessage').attr('data-lineHeight', 30);
		
		$('.fontScoreTitle').attr('data-fontSize', 50);
		$('.fontScoreTitle').attr('data-lineHeight', 50);
		$('.fontSubmitTitle').attr('data-fontSize', 50);
		$('.fontSubmitTitle').attr('data-lineHeight', 50);
		$('.fontScoreList').attr('data-fontSize', 20);
		$('.fontScoreList').attr('data-lineHeight', 20);
		
		$('.fontLabel').attr('data-fontSize', 30);
		$('.fontLabel').attr('data-lineHeight', 30);
		$('.fontInput').attr('data-fontSize', 30);
		$('.fontInput').attr('data-lineHeight', 30);

		$('#roomWrapper').removeClass('forPortrait');
		$('#notificationHolder').removeClass('forPortrait');
		$('#roomlists').attr('size', 8);
		$('#namelists').attr('size', 8);
		$('#roomLogs').attr('rows', 8);
		$('.fontRoomTitle').attr('data-fontSize', 45);
		$('.fontRoomInput').attr('data-fontSize', 30);
		$('.fontRoomLists').attr('data-fontSize', 30);
		$('.fontRoomTextarea').attr('data-fontSize', 30);
		$('.fontRoomButton').attr('data-fontSize', 25);
		$('.fontNameError').attr('data-fontSize', 25);
		$('.fontLogText').attr('data-fontSize', 25);
		$('.fontNotification').attr('data-fontSize', 25);
		$('.fontNotification').attr('data-lineHeight', 25);
	}
	
	$('.resizeFont').each(function(index, element) {
        $(this).css('font-size', Math.round(Number($(this).attr('data-fontSize'))*scalePercent)+'px');
		$(this).css('line-height', Math.round(Number($(this).attr('data-lineHeight'))*scalePercent)+'px');
    });
	
	$('.resizeBorder').each(function(index, element) {
		var borderNumber = Number($(this).attr('data-border'));
		var scaleNum = Number($('#questionHolder').outerWidth()/ screenSettings.stageW);
		borderNumber = borderNumber * scaleNum;
        $(this).css('border-radius', borderNumber+"px "+borderNumber+"px "+borderNumber+"px "+borderNumber+"px");
		$(this).css('-moz-border-radius', borderNumber+"px "+borderNumber+"px "+borderNumber+"px "+borderNumber+"px");
		$(this).css('-webkit-border-radius', borderNumber+"px "+borderNumber+"px "+borderNumber+"px "+borderNumber+"px");
    });	
}

/*!
 * 
 * MILLISECONDS CONVERT - This is the function that runs to convert milliseconds to time
 * 
 */
function millisecondsToTime(milli) {
	var milliseconds = milli % 1000;
	var seconds = Math.floor((milli / 1000) % 60);
	var minutes = Math.floor((milli / (60 * 1000)) % 60);
	
	if(seconds<10){
		seconds = '0'+seconds;  
	}
	
	if(minutes<10){
		minutes = '0'+minutes;  
	}
	
	return minutes+':'+seconds;
}

/*!
 * 
 * TOGGLE CONFIRM - This is the function that runs to toggle confirm exit
 * 
 */
function toggleConfirm(con){
	if(con){
		$('#confirmHolder').show();
	}else{
		$('#confirmHolder').hide();	
	}
}

/*!
 * 
 * OPTIONS - This is the function that runs to mute and fullscreen
 * 
 */
function toggleGameOption(){
	if($('#buttonOption').hasClass('buttonOptionOn')){
		$('#buttonOption').removeClass('buttonOptionOn');
		$('#buttonOption').addClass('buttonOptionOff');
		$('#optionList').hide();
	}else{
		$('#buttonOption').removeClass('buttonOptionOff');
		$('#buttonOption').addClass('buttonOptionOn');
		$('#optionList').show();
	}
}

function toggleGameMute(){
	if($('#buttonSound').hasClass('buttonSoundOn')){
		$('#buttonSound').removeClass('buttonSoundOn');
		$('#buttonSound').addClass('buttonSoundOff');
		toggleMute(true);
	}else{
		$('#buttonSound').removeClass('buttonSoundOff');
		$('#buttonSound').addClass('buttonSoundOn');
		toggleMute(false);
	}
}


function toggleFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}


/*!
 * 
 * SHARE - This is the function that runs to open share url
 * 
 */
function share(action){
/*!	gtag('event','click',{'event_category':'share','event_label':action});  */
	
	var loc = location.href
	loc = loc.substring(0, loc.lastIndexOf("/") + 1);
	
	var title = '';
	var text = '';
	
	if(resultSettings.mode == 'score'){
		title = shareSettings.shareTitle.replace("[SCORE]", playerData.score);
		text = shareSettings.shareMessage.replace("[SCORE]", playerData.score);
	}
	
	var shareurl = '';
	
	if( action == 'twitter' ) {
		shareurl = 'https://twitter.com/intent/tweet?url='+loc+'&text='+text;
	}else if( action == 'facebook' ){
		shareurl = 'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(loc+'share.php?desc='+text+'&title='+title+'&url='+loc+'&thumb='+loc+'share.jpg&width=590&height=300');
	}else if( action == 'google' ){
		shareurl = 'https://plus.google.com/share?url='+loc;
	}else if( action == 'whatsapp' ){
		shareurl = "whatsapp://send?text=" + encodeURIComponent(text) + " - " + encodeURIComponent(loc);
	}
	
	window.open(shareurl);
}