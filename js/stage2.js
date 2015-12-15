$(document).ready(function(){
	var $body=$("body"),
	$stageNYCDA=$("#stageNYCDA"),
	$htmlCss=$("#htmlCss"),
	$javS=$("#javS"),
	$ruby=$("#ruby"),
	$sinatra=$("#sinatra"),
	$rubyRails=$("#rubyRails"),
	$htmlCssTr=$("#htmlCssTr"),
	$htmlCssLarge=$("#htmlCssLarge"),
	$javSTr=$("#javSTr"),
	$javSLg=$("#javSLg"), 
	$purpleTr=$("#purpleTr"),
	$sinatraLg=$("#sinatraLg"),
	$redTr=$("#redTr");
	$railsLg=$("#railsLg");
	mainTimeline= new TimelineMax();

	CSSPlugin.defaultTransformPerspective=800;

	function stageTwo(){
		var $webDevelopment=$("#webDevelopment"),
		$nycdaSmall=$("#nycdaSmall"),
		$dots=$("#dots"),
		$smile=$("#smile"),
		$orange=$("#orange"),
		$htmlCss=$("#htmlCss"),
		$green=$("#green"),
		$javS=$("#javS"),
		$blue=$("#blue"),
		$ruby=$("#ruby"),
		$purple=$("#purple"),
		$sinatra=$("#sinatra"),
		$red=$("#red"),
		$rubyRails=$("#rubyRails"),
		$rubyLg=$("#rubyLg"),
		$blueTr=$("#blueTr"),
		$continueNext=$("#continueNext"),
		tl=new TimelineMax();

		tl.from(webDevelopment, 1, {autoAlpha: 0, scale:0.2, xPercent: 400}, "+0.2")
		  .from(nycdaSmall, 1, {autoAlpha: 0, scale:0.2, xPercent: -600}, "+0.2")
		  .from(dots, 14, {autoAlpha: 0, width: 0, ease:Back.easeOut}, "+1.6")
		  .from(smile, 2, {autoAlpha: 0, xPercent:-500},"+1.6")
		  .from(orange, 2, {autoAlpha: 0, scale:0.2, yPercent: 400}, "+1.6")
		  .from(htmlCss, 2, {autoAlpha: 0, scale:0.2, yPercent: 400}, "+1.6")
		  .from(green, 2, {autoAlpha: 0, scale:0.2, yPercent: -400}, "+2.2")
		  .from(javS, 2, {autoAlpha: 0, scale:0.2, yPercent: -400}, "+2.2")
		  .from(blue, 2, {autoAlpha: 0, scale:0.2, yPercent: 400}, "+2.8")
		  .from(ruby, 2, {autoAlpha: 0, scale:0.2, yPercent: 400}, "+2.8")
		  .from(purple, 2, {autoAlpha: 0, scale:0.2, yPercent: -400}, "+3.4")
		  .from(sinatra, 2, {autoAlpha: 0, scale:0.2, yPercent: -400}, "+3.4")
		  .from(red, 2, {autoAlpha: 0, scale:0.2, yPercent: 400}, "+4")
		  .from(rubyRails, 2, {autoAlpha: 0, scale:0.2, yPercent: 400}, "+4")
		  .from(continueNext, 1, {autoAlpha: 0, scale:0, xPercent: 400, ease:Back.easeOut}, "+16.2")
		  .to(continueNext, 0.1, {x:"+=5", yoyo:true, repeat: 12},"+20")
		  .to(continueNext, 0.1, {x:"-=5", yoyo:true, repeat: 12},"+20");

		return tl;
	}

	var htmlCssTween= TweenLite.to(htmlCss, 0.5, {y:"-=35", paused: true}, "+=0.5");
	var htmlCssTween2= TweenLite.from(htmlCssTr, 1, {autoAlpha: 0, scale:0, ease:Back.easeOut, paused: true}, "+=0.5");
	var htmlCssTween3= TweenLite.from(htmlCssLarge, 1, {autoAlpha: 0, scale:0, ease:Back.easeOut, paused: true}, "+=0.2");

	$htmlCss.mouseenter(function(){
        htmlCssTween.play();
        htmlCssTween2.play();
        htmlCssTween3.play();
    });

    $htmlCss.mouseleave(function(){
      htmlCssTween3.reverse();
      htmlCssTween2.reverse();
      htmlCssTween.reverse();
    });

    var javSTween= TweenLite.to(javS, 0.5, {y:"+=35", paused: true}, "+=0.5");
    var javSTween2= TweenLite.from(javSTr, 1, {autoAlpha: 0, scale:0, ease:Back.easeOut, paused: true}, "+=0.5");
	var javSTween3= TweenLite.from(javSLg, 1, {autoAlpha: 0, scale:0, ease:Back.easeOut, paused: true}, "+=0.2");

	$javS.mouseenter(function(){
        javSTween.play();
        javSTween2.play();
        javSTween3.play();
    });

    $javS.mouseleave(function(){
      javSTween3.reverse();
      javSTween2.reverse();
      javSTween.reverse();
    });

    var rubyTween= TweenLite.to(ruby, 0.5, {y:"-=35", paused: true}, "+=0.5");
    var rubyTween2= TweenLite.from(blueTr, 1, {autoAlpha: 0, scale:0, ease:Back.easeOut, paused: true}, "+=0.5");
	var rubyTween3= TweenLite.from(rubyLg, 1, {autoAlpha: 0, scale:0, ease:Back.easeOut, paused: true}, "+=0.2");

	$ruby.mouseenter(function(){
        rubyTween.play();
        rubyTween2.play();
        rubyTween3.play();
    });

    $ruby.mouseleave(function(){
      rubyTween3.reverse();
      rubyTween2.reverse();
      rubyTween.reverse();
    });

    var sinatraTween= TweenLite.to(sinatra, 0.5, {y:"+=35", paused: true}, "+=0.5");
    var sinatraTween2= TweenLite.from(purpleTr, 1, {autoAlpha: 0, scale:0, ease:Back.easeOut, paused: true}, "+=0.5");
	var sinatraTween3= TweenLite.from(sinatraLg, 1, {autoAlpha: 0, scale:0, ease:Back.easeOut, paused: true}, "+=0.2");

	$sinatra.mouseenter(function(){
        sinatraTween.play();
        sinatraTween2.play();
        sinatraTween3.play();
    });

    $sinatra.mouseleave(function(){
      sinatraTween3.reverse();
      sinatraTween2.reverse();
      sinatraTween.reverse();
    });

    var rubyRailsTween= TweenLite.to(rubyRails, 0.5, {y:"-=35", paused: true}, "+=0.5");
    var rubyRailsTween2= TweenLite.from(redTr, 1, {autoAlpha: 0, scale:0, ease:Back.easeOut, paused: true}, "+=0.5");
	var rubyRailsTween3= TweenLite.from(railsLg, 1, {autoAlpha: 0, scale:0, ease:Back.easeOut, paused: true}, "+=0.2");


	$rubyRails.mouseenter(function(){
        rubyRailsTween.play();
        rubyRailsTween2.play();
        rubyRailsTween3.play();
    });

    $rubyRails.mouseleave(function(){
      rubyRailsTween3.reverse();
      rubyRailsTween2.reverse();
      rubyRailsTween.reverse();
    });


    $("#continueNext").click(function(){
	  		window.location.assign("stage3.html");
	});	

	mainTimeline.from($stageNYCDA, 1, {autoAlpha:0}, "+0.2")
		.add(stageTwo(),1);
		

});