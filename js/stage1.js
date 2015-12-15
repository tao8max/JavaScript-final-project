$(document).ready(function(){
	var $body=$("body"),
	$stageFull=$(".stageFull"),
	mainTimeline= new TimelineMax();

	/* CSS Plugin to transform elements in 3D */

	CSSPlugin.defaultTransformPerspective=800;

	function stageOne(){

		var $body=$("body"),
		$stageFull=$("#stageOffice"),
		$stageHome=$("#stageHome"),
		$sleeping=$(".sleeping"),
		$thatWasMe=$("#thatWasMe"),
		$notTooLong=$("#notTooLong"),
		$table=$("#table"),
		$shelf=$("#shelf"),
		$clock=$("#clock"),
		$charts=$("#charts"),
		$sleepWorking=$("#sleepWorking"),
		$throughTheDay=$("#throughTheDay")
        $atJob=$("#atJob"),
        $notChallenging=$("#notChallenging"),
        $norExciting=$("#norExciting"),
        $crossArm=$("#crossArm"),
        $likeEveryone=$("#likeEveryone"),
        $iLived=$("#iLived"),
        $happy=("#happy"),
        $crying=$("#crying"),
        $mad=$("#mad"),
        $butThen=$("#butThen"),
        $mondayCame=$("#mondayCame"),
        $cloud=$("#cloud"),
        $andIWasBack=$("#andIWasBack"),
        $toTheSame=$("#toTheSame"),
        $iHadToDo=$("#iHadToDo"),
        $scared=$("#scared"),
        $frontRoom=$("#frontRoom"),
        $backRoom=$("#backRoom"),
        $container=$("#container"),
        $books=$("#books"),
        $containerClock=$("#containerClock"),
        $hourHand=$("#hourHand"),
        $atHomeIve=$("#atHomeIve"),
        $teachMyself=$("#teachMyself"),
        $afterGoing=$("#afterGoing"),
        $aDozenOfBooks=$("#aDozenOfBooks"),
        $iMovedOn=$("#iMovedOn"),
        $andTutorials=$("#andTutorials"),
        $onlineSchools=$("#onlineSchools"),
        $codecAdemy=$("#codecAdemy"),
        $treeHouse=$("#treeHouse"),
        $codeSchool=$("#codeSchool"),
        $eventually=$("#eventually"),
        $iJoined=$("#iJoined"),
        $logo=$("#logo"),
        $smile=$("#smile"),
		tl=new TimelineMax();

        /* Action timeline for each DOM element */

		tl.from(sleeping, 0, {autoAlpha: 0, xPercent:-500},"+=1")
		  .to(sleeping, 2,{repeat:-1, repeatDelay:-0.5, x:-1080, ease:SteppedEase.config(4)},"+=1")
		  .from(thatWasMe, 0.6, {autoAlpha: 0, scale:0.2, xPercent: 400}, "-0.1")
		  .from(notTooLong, 0.6, {autoAlpha: 0, scale:0.2, xPercent: 400}, "+0.5")
		  .from(table, 0.5, {autoAlpha: 0, scale:0.2, xPercent: -400, ease:Back.easeOut}, "+1.5")
		  .from(shelf, 0.5, {autoAlpha: 0, scale:0.2, xPercent: -400, ease:Back.easeOut}, "+2.2")
		  .from(clock, 0.5, {autoAlpha: 0, scale:0.2, yPercent: -400, ease:Back.easeOut}, "+2.8")
		  .from(charts, 0.5, {autoAlpha: 0, scale:0.2, yPercent: -400, ease:Back.easeOut}, "+3.2")
		  .to(thatWasMe, 1, {autoAlpha: 0, scale:0, xPercent: 400, ease:Back.easeOut}, "+6.2")
		  .to(notTooLong, 1, {autoAlpha: 0, scale:0, xPercent: 400, ease:Back.easeOut}, "+6.6")

		  .from(sleepWorking, 1, {autoAlpha: 0, width: 0, ease:Back.easeOut}, "+7.1")
		  .from(throughTheDay, 1, {autoAlpha: 0, width: 0, ease:Back.easeOut}, "+7.6")
		  .from(atJob, 1, {autoAlpha: 0, width: 0, ease:Back.easeOut}, "+8.2")
		  .from(notChallenging, 1, {autoAlpha: 0, width: 0, ease:Back.easeOut}, "+8.7")
		  .from(norExciting, 0.8, {autoAlpha: 0, scale:0.2, yPercent: 400}, "+9.2")

		  .to(sleeping, 0,{autoAlpha: 0, display: 'none'},"+11.6")
		  .from(crossArm, 0, {autoAlpha: 0, xPercent:-500},"+11.6")

		  .to(sleepWorking, 1, {autoAlpha: 0, width: 0, ease:Back.easeOut}, "+11.6")
		  .to(throughTheDay, 1, {autoAlpha: 0, width: 0, ease:Back.easeOut}, "+12.2")
		  .to(atJob, 1, {autoAlpha: 0, width: 0, ease:Back.easeOut}, "+12.8")
		  .to(notChallenging, 1, {autoAlpha: 0, width: 0, ease:Back.easeOut}, "+13.6")
		  .to(norExciting, 0.8, {autoAlpha: 0, scale:0.2, yPercent: 400}, "+14.2")
		  .to(table, 0.5, {autoAlpha: 0, scale:0.2, xPercent: -400, ease:Back.easeOut}, "+15")
		  .to(shelf, 0.5, {autoAlpha: 0, scale:0.2, xPercent: -400, ease:Back.easeOut}, "+15.3")
		  .to(clock, 0.5, {autoAlpha: 0, scale:0.2, yPercent: -400, ease:Back.easeOut}, "+15.6")
		  .to(charts, 0.5, {autoAlpha: 0, scale:0.2, yPercent: -400, ease:Back.easeOut}, "+16")

		  .from(likeEveryone, 1, {autoAlpha: 0, width: 0, ease:Back.easeOut}, "+16")
		  .from(iLived, 1, {autoAlpha: 0, width: 0, ease:Back.easeOut}, "+16.5")

		  .to(crossArm, 0,{autoAlpha: 0, display: 'none'},"+16.5")
		  .from(happy, 0, {autoAlpha: 0, xPercent:-500},"+16.5")
		  .to(happy, 1,{repeat:-1, repeatDelay:-0.5, x:-1080, ease:SteppedEase.config(4)},"+17.5")
		  .to(likeEveryone, 1, {autoAlpha: 0, width: 0, ease:Back.easeOut}, "+21")
		  .to(iLived, 1, {autoAlpha: 0, width: 0, ease:Back.easeOut}, "+21.5")

		  .to(happy, 0,{autoAlpha: 0, display: 'none'},"+21.5")
		  .from(crying, 0, {autoAlpha: 0, xPercent:-500},"+21.5")
		  .from(butThen, 1, {autoAlpha: 0, width: 0, ease:Back.easeOut}, "+21")
		  .from(mondayCame, 1, {autoAlpha: 0, width: 0, ease:Back.easeOut}, "+21.6")
		  .to(crying, 1.5,{repeat:8, repeatDelay:-0.5, x:-1080, ease:SteppedEase.config(4)},"+22.5")
		  .from(cloud, 2, {autoAlpha: 0, scale:0.2, xPercent: -400, onComplete:makeRain}, "+22")
		  .to(cloud, 4, {autoAlpha: 0, scale:0.2, xPercent: -400}, "+30")

		  .to(crying, 0, {autoAlpha: 0, display: "none"},"+31")
		  .from(mad, 0, {autoAlpha: 0, xPercent:-500},"+31")

		  .to(butThen, 0.5, {autoAlpha: 0, width: 0, ease:Back.easeOut}, "+31")
		  .to(mondayCame, 0.5, {autoAlpha: 0, width: 0, ease:Back.easeOut}, "+31.5")

		  .from(andIWasBack, 0.6, {autoAlpha: 0, scale:0.2, xPercent: 400}, "+31.8")
		  .from(toTheSame, 0.6, {autoAlpha: 0, scale:0.2, xPercent: 400}, "+32.2")

		  .to(table, 0.5, {autoAlpha: 1, scale:1, xPercent: 0, ease:Back.easeOut}, "+31.5")
		  .to(shelf, 0.5, {autoAlpha: 1, scale:1, xPercent: 0, ease:Back.easeOut}, "+32.2")
		  .to(clock, 0.5, {autoAlpha: 1, scale:1, yPercent: 0, ease:Back.easeOut}, "+32.8")
		  .to(charts, 0.5, {autoAlpha: 1, scale:1, yPercent: 0, ease:Back.easeOut}, "+33.2")

		  .to(andIWasBack, 1, {autoAlpha: 0, scale:0, xPercent: 400, ease:Back.easeOut}, "+34.2")
		  .to(toTheSame, 1, {autoAlpha: 0, scale:0, xPercent: 400, ease:Back.easeOut}, "+34.6")
		  .from(iHadToDo, 0.6, {autoAlpha: 0, scale:0.2, xPercent: 400}, "+35.2")

		  .to(mad, 0, {autoAlpha: 0, display: "none"},"+36")
		  .from(scared, 0, {autoAlpha: 0, xPercent:-500},"+36")

		  .to(iHadToDo, 0.6, {autoAlpha: 0, scale:0.2, xPercent: 400, ease:Back.easeOut}, "+37.8")
		  .to(table, 0.5, {autoAlpha: 0, scale:0.2, xPercent: -400, ease:Back.easeOut}, "+37.8")
		  .to(shelf, 0.5, {autoAlpha: 0, scale:0.2, xPercent: -400, ease:Back.easeOut}, "+37.8")
		  .to(clock, 0.5, {autoAlpha: 0, scale:0.2, yPercent: -400, ease:Back.easeOut}, "+37.8")
		  .to(charts, 0.5, {autoAlpha: 0, scale:0.2, yPercent: -400}, "+37.8")
		  .to(stageOffice, 2, {backgroundImage: "linear-gradient(to left, #ffffff, #ffffff)"}, "+37.8")
		  .from(frontRoom, 1, {autoAlpha: 0, scale:0.2, xPercent: 400}, "+37.5")
		  .from(backRoom, 1, {autoAlpha: 0, scale:0.2, xPercent: 400}, "+37.5")

		  .from(containerClock, 1, {autoAlpha: 0, scale:0.1, yPercent: -100}, "+37.5")
		  .set(hourHand, {rotation:0, transformOrigin:"5px 41px"}, "+37.5")
		  .to(hourHand, 60, {repeat:-1, rotation:"360_cw", ease:Linear.easeNone}, "+37.5")
		  .set(minuteHand, {rotation:0, transformOrigin:"5px 52px"}, "+37.5")
		  .to(minuteHand, 5, {repeat:-1, rotation:"360_cw", ease:Linear.easeNone}, "+37.5")

		  .to(container, 1.5, {autoAlpha: 1, xPercent:155, yPercent:-15},"+37.5")

		  .from(atHomeIve, 1, {autoAlpha: 0, width: 0, ease:Back.easeOut}, "+39")
		  .from(teachMyself, 1, {autoAlpha: 0, width: 0, ease:Back.easeOut}, "+39.6")
		  .to(atHomeIve, 0.5, {autoAlpha: 0, width: 0, ease:Back.easeOut}, "+42.9")
		  .to(teachMyself, 0.5, {autoAlpha: 0, width: 0, ease:Back.easeOut}, "+43.3")

		  .from(afterGoing, 1, {autoAlpha: 0, width: 0, ease:Back.easeOut}, "+44")
		  .from(aDozenOfBooks, 1, {autoAlpha: 0, width: 0, ease:Back.easeOut}, "+44.6")
		  .to(afterGoing, 0.5, {autoAlpha: 0, width: 0, ease:Back.easeOut}, "+47")
		  .to(aDozenOfBooks, 0.5, {autoAlpha: 0, width: 0, ease:Back.easeOut}, "+47.5")

		  .from(books, 0.6, {autoAlpha: 0, yPercent: -600, ease:Bounce.easeOut},"+44.5")

		  .from(iMovedOn, 1, {autoAlpha: 0, width: 0, ease:Back.easeOut}, "+48")
		  .from(andTutorials, 1, {autoAlpha: 0, width: 0, ease:Back.easeOut}, "+48.6")
		  .to(books, 0.3, {autoAlpha: 0, yPercent: -600, ease:Linear.easeNone},"+48.6")

		  .from(codecAdemy, 0.5, {autoAlpha: 0, scale:1.5, ease:Elastic.easeOut},"+49")
		  .from(treeHouse, 0.5, {autoAlpha: 0, scale:1.5, ease:Elastic.easeOut},"+50")
		  .from(codeSchool, 0.5, {autoAlpha: 0, scale:1.5, ease:Elastic.easeOut},"+51")
		  .to(codecAdemy, 0.5, {autoAlpha: 0, scale:0, ease:Elastic.easeOut},"+53.0")
		  .to(treeHouse, 0.5, {autoAlpha: 0, scale:0, ease:Elastic.easeOut},"+53.4")
		  .to(codeSchool, 0.5, {autoAlpha: 0, scale:0, ease:Elastic.easeOut},"+53.8")

		  .to(iMovedOn, 0.5, {autoAlpha: 0, width: 0, ease:Back.easeOut}, "+53.0")
		  .to(andTutorials, 0.5, {autoAlpha: 0, width: 0, ease:Back.easeOut}, "+53.5")

		  .to(scared, 0, {autoAlpha: 0, display: "none"},"+54")
		  .from(smile, 0, {autoAlpha: 0, xPercent:-500},"+54")

		  .from(eventually, 1, {autoAlpha: 0, width: 0, ease:Back.easeOut}, "+54")
		  .from(iJoined, 1, {autoAlpha: 0, width: 0, ease:Back.easeOut}, "+54.5")
		  .from(logo, 2, {autoAlpha:0, scale:0.5, xPercent: 500, rotation:360, ease:Back.easeOut}, "+55")
		  .to(logo, 0.1, {x:"+=5", yoyo:true, repeat: 12},"+58")
		  .to(logo, 0.1, {x:"-=5", yoyo:true, repeat: 12},"+58");
		  

		return tl;
	}

   
    $("#logo").click(function(){
	  		window.location.assign("stage2.html");
	});	
	

    /* Rain */

	function makeRain(){
	  var $cloudContainer = $(".cloudContainer"),
	  $rain=$(".rain"),
      tl = new TimelineLite();

      for(var i=0; i<900; i++){
        var element = $("<div class='drop'></div>").appendTo($rain);
        TweenLite.set(element, {x:Math.random() * 450, y:-450});
        tl.to(element, Math.random()*2, {y:750, ease:Linear.easeNone}, Math.random()*5);
      }  
	}

	/* Controller */

	$("#play").click(function(){
		if(mainTimeline.progress() < 1){	
			mainTimeline.play()
		} else {
			mainTimeline.restart();
		}
	});

	$("#pause").click(function(){
		mainTimeline.pause();
	});

	$("#reverse").click(function(){
		mainTimeline.reverse();
	});

	$("#resume").click(function(){
		mainTimeline.resume();
	});

	$("#restart").click(function(){
		mainTimeline.restart();
	});


	/* Main Timeline Controller */

	mainTimeline.from($stageFull, 1, {autoAlpha:0})
		.add(stageOne(),1);
		

});