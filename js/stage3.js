$(document).ready(function() {
        
        var $stageNYC=$("#stageNYC"),
            $stageSpace=$("#stageSpace"),
            $flames=$("#flames"),
            $rocket=$("#rocket"),
            $smile=$("#smile"),
            $worldNYCDA=$("#worldNYCDA"),
            tl = new TimelineLite();

        tl.from(smile, 4, {autoAlpha: 1, xPercent:-500},"+0.6")
        .to(smile, 0, {autoAlpha: 0, display:"none"},"+4.6")
        .to(rocket, tl.duration(), {y:1, x:2, ease:RoughEase.ease.config({strength:5, points:100})}, "+5")

        .to(flames, 0.2, {backgroundPosition:"-156px 0px", ease:SteppedEase.config(3), repeat:25}, "+8") 
        .from(flames, 0.2, {y:-40, opacity:0}, "+8")

        .to(rocket, 1, {y:-1000, ease:Power2.easeIn}, "+8")
        .to(stageNYC, 1, {y:600, ease:Power2.easeIn}, "+8")
        .to(stageSpace, 3, {backgroundPosition:"0px 4000px", ease:Power1.easeOut}, "+8")
        .to(worldNYCDA, 2, {y:600, ease:Power1.easeOut}, "+6.5");   
});