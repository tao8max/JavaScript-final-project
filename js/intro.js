$(document).ready(function(){
	var $nycdaLogo=$(".nycdaLogo"),
	$replay = $("#replay"),
	$canvas=$("canvas"),
	$gradient=$(".gradient"),
	mainTimeline= new TimelineMax();

	CSSPlugin.defaultTransformPerspective=800;

	function getLogoTimeline() {
		$("#canvasDiv canvas").show(); 

		var $curlyLeft=$("#curlyLeft"),
		$theNewYork=$("#theNewYork"),
		$codePlus=$("#codePlus"),
		$design=$("#design"),
		$academy=$("#academy"),
		$canvasDiv=$("#canvasDiv"),
		$curlyRight=$("#curlyRight"),
		$cloud=$("#cloud"),
		$container=$(".container"),
		$sleeping=$("#sleeping"),
		tl=new TimelineMax();

		tl.from(codePlus, 0.5, {autoAlpha: 0, scale:2, ease:Elastic.easeOut})
		  .from(design, 0.5, {autoAlpha: 0, scale:2, ease:Elastic.easeOut}, "-=0.2")
		  .from(theNewYork, 0.8, {autoAlpha: 0, scale:0.5, yPercent: -500, ease:Back.easeOut}, "+=0.1")
		  .from(academy, 0.8, {autoAlpha: 0, scale:0.5, yPercent: 500, ease:Back.easeOut}, "-=0.5")
		  .from(curlyLeft, 1, {autoAlpha:0, scale:0, xPercent: -500, rotation:-360, ease:Back.easeOut}, "+=0.1")
		  .from(curlyRight, 1, {autoAlpha:0, scale:0, xPercent: 500, rotation:360, ease:Back.easeOut}, "-=1")
		  .from(canvasDiv, 2, {opacity: 0, onStart:getCircle}, "+=0.1")
		  .to(canvasDiv, 4, {opacity:0.5, onStart:hideLogo},"+=0.1");
		return tl;
	}

	// Logo Reverse Animation

	function hideLogo() {

		$("#canvasDiv").click(function(){
			$("#canvasDiv canvas").hide();
			getLogoTimeline().reverse(4);	
			setTimeout(function() {
		  		window.location.assign("stage1.html");
		  	}, 4000);
		});	
	}

	// Circle Creation

    function getCircle(){
    	$("canvas").css("visibility","visible");
	    radius = 300;
		particleSize = 7;
		particleVelocity = 0.6;
		particleRandomVelocity = 0.4;
		particleMultiplier = 4;

		radiusSqr = radius*radius
		canvas = document.querySelector('canvas');
		ctx = canvas.getContext('2d');

		(onresize = function(){
		  canvas.width = canvas.clientWidth;
		  canvas.height = canvas.clientHeight;
		  ctx.setTransform(1,0,0,1,canvas.width/2,canvas.height/2);
		})();

		particles = (function(){
		  var max = (1<<16)-1,
		      length = 0,
		      nextIndex = 0,
		      map = new Uint16Array(max),
		      x = new Float32Array(max),
		      y = new Float32Array(max),
		      vx = new Float32Array(max),
		      vy = new Float32Array(max),
		      life = new Uint16Array(max),
		      startLife = new Uint16Array(max),
		      each = function(fn){
		        for(var i=0;i<length;i++){
		          fn(map[i],i);
		        }
		      },
		      remove = function(i){
		        length = length >= 0 ? length-1 : 0;
		        map[i] = map[length];
		      }
		  return {
		    create: function(conf){
		      x[nextIndex] = conf.x || 0;
		      y[nextIndex] = conf.y || 0;
		      vx[nextIndex] = conf.vx || 0;
		      vy[nextIndex] = conf.vy || 0;
		      life[nextIndex] = conf.life || 0;
		      startLife[nextIndex] = conf.life;
		      map[length] = nextIndex;
		      length = length === max ? 0 : length+1;
		      nextIndex = nextIndex === max ? 0 : nextIndex+1;
		    },
		    update: function(){
		      each(function(i,id){
		        x[i] += vx[i];
		        y[i] += vy[i];
		        var d = x[i]*x[i]+y[i]*y[i],
		            dx = x[i]*(1+radius/d)/1000,
		            dy = y[i]*(1+radius/d)/1000;
		        vx[i] += d<radiusSqr ? dx : -dx;
		        vy[i] += d<radiusSqr ? dy : -dy;
		        if(--life[i]<0)remove(id);
		      });
		    },
		    draw: function(){
		      ctx.fillStyle = '#99CCFF';
		      ctx.globalCompositeOperation = 'lighter';
		      each(function(i){
		        var f = life[i]/startLife[i];
		        ctx.globalAlpha = f;
		        ctx.beginPath();
		        ctx.arc(x[i],y[i],particleSize*(1-f),0,Math.PI*2);
		        ctx.fill();
		      })
		    }
		  }
		})();

		requestAnimationFrame(loop = function(){
		  ctx.save();
		  ctx.setTransform(1,0,0,1,0,0);
		  ctx.clearRect(0,0,canvas.width,canvas.height);
		  ctx.restore();
		  for(var i=0;i<particleMultiplier;i++){
		    var a = Math.random()*Math.PI*2,
		        cos = Math.cos(a),
		        sin = Math.sin(a);
		    particles.create({
		      x: cos*radius,
		      y: sin*radius,
		      vx: -sin*particleVelocity+(Math.random()-0.5)*2*particleRandomVelocity,
		      vy: cos*particleVelocity+(Math.random()-0.5)*2*particleRandomVelocity,
		      life: 100
		    })
		  }
		  particles.update();
		  particles.draw();
		  requestAnimationFrame(loop);
		});
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

/* Main Animation timeline */

	mainTimeline.from($nycdaLogo, 0.5, {autoAlpha:0})
		.add(getLogoTimeline(),0.5);

		
});