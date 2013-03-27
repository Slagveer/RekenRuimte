(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.RekenRuimte = function() {
	this.initialize();

	// Laag 1
	this.instance = new lib.mcStar();
	this.instance.setTransform(421,59);

	this.instance_1 = new lib.mcMoon();
	this.instance_1.setTransform(301,325);

	this.spaceShip = new lib.mcSpaceShip();
	this.spaceShip.setTransform(275,123.1,1,1,0,0,0,0,1);

	this.addChild(this.spaceShip,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(59,32.6,432.1,378);


// symbols:
(lib.Tween1 = function() {
	this.initialize();

	// Laag 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s("#FFFFFF").ss(4,0,1).p("AhHhHQAFgFAFgFQAGgEAGgEQAGgDAHgDQAGgDAHgCQAHgCAIgBQAHgBAGAAQAGAAAGABQAGABAHACQAGACAGADQAFADAGADQAFAEAGAFQAFAEAFAFQAEAFAEAGQAEAFAEAGQAEAGACAHQADAGACAIQACAGABAIQABAHAAAGQAAAGgBAGQgBAGgCAGQgCAGgDAGQgCAGgEAGQgEAFgEAFQgEAGgEAEQgFAFgFAEQgGAEgFAEQgGAEgGACQgGADgFACQgHACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgRAAgTQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFQAFgGAFgFIAAAA").cp();

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.4,-10.4,21.1,21.1);


(lib.mcStar = function() {
	this.initialize();

	// Laag 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#000000").ss(1,0,1).p("AAAj+IBQCqIC+AUIAAABIiMCAIAeC+IAAAAIighaIieBaIgBAAIAei+IiMiAIAAgBIC+gUIBPiqIAAAA").cp();

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.9,-25.4,54.1,51.1);


(lib.mcNose = function() {
	this.initialize();

	// Laag 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s("#000000").ss(4,0,1).p("AgvhkQAHgDAIgCQAIgCAIgBQAJgBAHAAQAIAAAJABQAIABAIACQAIACAHADQAHADAHADQAHAEAGAEQAGAFAFAFQAFAFAFAGQAFAFADAGQAEAGADAHQADAGACAHQACAHABAIQABAHAAAGQAAAHgBAHQgBAIgCAHQgCAHgDAGQgDAHgEAGQgDAGgFAFQgFAGgFAFQgFAFgGAFQgGAEgHAEQgHADgHADQgHADgIACQgIACgIABQgJABgIAAQgZAAgWgJQgWgJgQgPQgQgPgJgUQgJgUAAgWQAAgGABgHQABgIACgHQACgHADgGQADgHAEgGQADgGAFgFQAFgGAFgFQAFgFAGgFQAGgEAHgEQAHgDAHgDIAAAA").cp();

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12,-10.9,24.1,22.1);


(lib.mcMouth = function() {
	this.initialize();

	// Laag 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s("#000000").ss(4,0,1).p("AkThFQAOgGAQgFQAQgFASgFQASgFATgDQAUgEAVgDQAUgDAXgCQAWgCAXgBQAXgBAWAAQAXAAAXABQAXABAXACQAWACAVADQAUADAUAEQATADASAFQASAFAQAFQAQAFAOAGQAOAGALAHQAXANANAQQANAQAAAPQAAAQgNAOQgNAOgXAMQgLAGgOAGQgOAFgQAFQgQAFgSAFQgSAEgTAEQgUADgUADQgVADgWACQgXACgXABQgXABgXAAQgQAAgSgBQgRAAgRgCQgRgBgQgBQgRgCgPgCQgQgCgPgDQgPgCgOgDQgOgDgNgEQgNgDgMgEQgMgDgLgFQgLgEgJgEQgKgEgIgFQgIgFgHgFQgHgFgFgFQgFgFgDgFQgEgGgCgFQgCgGAAgGQAAgPANgQQANgQAXgNQALgHAOgGIAAAA").cp();

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35,-11.4,70.1,23.1);


(lib.mcFace = function() {
	this.initialize();

	// Laag 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AN6AFQAAA6gIA5QgIA5gQA2QgQA2gWAzQgXAzgdAvQgdAvgjArQgjArgpAnQgoAmgtAiQgtAhgyAcQgxAcg1AVQg2AWg4APQg5AOg7AIQg7AIg9AAQgsAAgtgEQgtgFgrgIQgsgJgqgMQgqgNgogQQhPgghIguQhHgug8g6Qg9g6gwhEQgxhEgihMQgRgmgNgoQgNgpgJgpQgJgpgEgsQgFgrAAgrQAAg6AIg6QAIg6AQg3QAQg3AWg0QAXgzAdgwQAdgwAjgrQAjgsApgnQAogmAtgiQAtgiAygcQAxgbA1gWQA2gWA4gPQA5gOA7gIQA7gIA8AAQA9AAA7AIQA7AIA5AOQA4APA2AWQA1AWAxAbQAyAcAtAiQAtAiAoAmQApAnAjAsQAjArAdAwQAdAwAXAzQAWA0AQA3QAQA3AIA6QAIA6AAA6IAAAA").cp();

	this.addChild(this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-88.9,-85.4,178.1,171.1);


(lib.mcEye = function() {
	this.initialize();

	// Laag 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s("#000000").ss(1,0,1).p("ABgAcQgCAGgDAGQgCAHgEAFQgEAGgEAFQgEAFgFAEQgEAFgGADQgFAEgFADQgGADgGADQgGACgGABQgGACgGABQgGABgGAAQgIAAgJgCQgJgCgJgDQgSgHgOgOQgPgNgIgTQgJgSAAgWQAAgFABgGQABgGACgHQACgFADgGQACgGAEgGQAEgFAEgGQAEgFAFgFQAEgEAGgEQAFgEAFgEQAGgEAGgCQAGgDAFgCQAHgCAGgBQAGgBAFAAQAGAAAGABQAGABAHACQAFACAGADQAGACAGAEQAFAEAFAEQAGAEAEAEQAFAFAEAFQAEAGAEAFQAEAGACAGQADAGACAFQACAHABAGQABAGAAAFQAAAHgBAHQgBAHgCAHIAAAA").cp();

	this.addChild(this.shape_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10,-10,20.1,20.1);


(lib.mcMoon = function() {
	this.initialize();

	// Laag 1
	this.mouth = new lib.mcMouth();
	this.mouth.setTransform(-9.9,35);

	this.nose = new lib.mcNose();
	this.nose.setTransform(-11.9,1.5);

	this.rightEye = new lib.mcEye();
	this.rightEye.setTransform(24.6,-21.4);

	this.leftEye = new lib.mcEye();
	this.leftEye.setTransform(-45.9,-20.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s("#000000").ss(4,0,1).p("AB1hkQAFAIAEAKQAFAJADALQAEAKACALQACALABAMQACAMAAALQAAALgCALQgBAKgCALQgCAKgEAJQgDAKgFAJQgEAJgFAIQgGAIgGAIQgGAHgHAGQgIAGgHAFQgIAFgJAFQgIADgJADQgJADgKACQgKABgJAAQggAAgcgMQgcgNgTgVQgUgWgLgeQgLgdAAghQAAgLACgMQABgMACgLQACgLAEgKQADgLAFgJQAFgKAFgIQAGgJAHgHQAGgIAHgGQAIgHAJgFQAIgFAJgEQAJgEAKgDQAKgDAKgCQALgBAKAAQAJAAAKABQAKACAJADQAJADAIAEQAJAEAIAFQAHAFAIAHQAHAGAGAIQAGAHAGAJIAAAA").cp();
	this.shape_6.setTransform(24.5,-25.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s("#000000").ss(4,0,1).p("ACMgpQACALABAMQACAMAAALQAAALgCALQgBAKgCALQgCAKgEAJQgDAKgFAJQgEAJgFAIQgGAIgGAIQgGAHgHAGQgIAGgHAFQgIAFgJAFQgIADgJADQgJADgKACQgKABgJAAQggAAgcgMQgcgNgTgVQgUgWgLgeQgLgdAAghQAAgLACgMQABgMACgLQACgLAEgKQADgLAFgJQAFgKAFgIQAGgJAHgHQAGgIAHgGQAIgHAJgFQAIgFAJgEQAJgEAKgDQAKgDAKgCQALgBAKAAQAJAAAKABQAKACAJADQAJADAIAEQAJAEAIAFQAHAFAIAHQAHAGAGAIQAGAHAGAJQAFAIAEAKQAFAJADALQAEAKACALIAAAA").cp();
	this.shape_7.setTransform(-45.4,-25.9);

	this.face = new lib.mcFace();

	this.addChild(this.face,this.shape_7,this.shape_6,this.leftEye,this.rightEye,this.nose,this.mouth);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-88.9,-85.4,178.1,171.1);


(lib.mcLight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Laag 1
	this.instance = new lib.Tween1("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.957},0).wait(1).to({alpha:0.913},0).wait(1).to({alpha:0.87},0).wait(1).to({alpha:0.826},0).wait(1).to({alpha:0.783},0).wait(1).to({alpha:0.739},0).wait(1).to({alpha:0.696},0).wait(1).to({alpha:0.652},0).wait(1).to({alpha:0.609},0).wait(1).to({alpha:0.565},0).wait(1).to({alpha:0.522},0).wait(1).to({alpha:0.478},0).wait(1).to({alpha:0.435},0).wait(1).to({alpha:0.391},0).wait(1).to({alpha:0.348},0).wait(1).to({alpha:0.304},0).wait(1).to({alpha:0.261},0).wait(1).to({alpha:0.217},0).wait(1).to({alpha:0.174},0).wait(1).to({alpha:0.13},0).wait(1).to({alpha:0.087},0).wait(1).to({alpha:0.043},0).wait(1).to({alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.043},0).wait(1).to({alpha:0.087},0).wait(1).to({alpha:0.13},0).wait(1).to({alpha:0.174},0).wait(1).to({alpha:0.217},0).wait(1).to({alpha:0.261},0).wait(1).to({alpha:0.304},0).wait(1).to({alpha:0.348},0).wait(1).to({alpha:0.391},0).wait(1).to({alpha:0.435},0).wait(1).to({alpha:0.478},0).wait(1).to({alpha:0.522},0).wait(1).to({alpha:0.565},0).wait(1).to({alpha:0.609},0).wait(1).to({alpha:0.652},0).wait(1).to({alpha:0.696},0).wait(1).to({alpha:0.739},0).wait(1).to({alpha:0.783},0).wait(1).to({alpha:0.826},0).wait(1).to({alpha:0.87},0).wait(1).to({alpha:0.913},0).wait(1).to({alpha:0.957},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.4,-10.4,21.1,21.1);


(lib.SpaceShipInCorrect = function() {
	this.initialize();

	// Laag 2
	this.instance_1 = new lib.mcLight();
	this.instance_1.setTransform(349.5,144.5);

	this.instance_2 = new lib.mcLight();
	this.instance_2.setTransform(273.5,154.5);

	this.instance_3 = new lib.mcLight();
	this.instance_3.setTransform(195.5,157.5);

	this.instance_4 = new lib.mcLight();
	this.instance_4.setTransform(116.5,151.5);

	this.instance_5 = new lib.mcLight();
	this.instance_5.setTransform(29.5,133.5);

	// Laag 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s("#FFFFFF").ss(4,0,1).p("ABagxQAEAGACAHQADAGACAIQACAGABAIQABAHAAAGQAAAGgBAGQgBAGgCAGQgCAGgDAGQgCAGgEAGQgEAFgEAFQgEAGgEAEQgFAFgFAEQgGAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgSAAgSQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAHgCQAHgCAIgBQAHgBAGAAQAGAAAGABQAGABAGACQAGACAGADQAGADAGADQAFAEAGAFQAFAEAFAFQAEAFAEAGQAEAFAEAGIAAAA").cp();
	this.shape_8.setTransform(29.5,133.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s("#FFFFFF").ss(4,0,1).p("ABagxQAEAGACAHQADAGACAIQACAGABAIQABAHAAAGQAAAGgBAGQgBAGgCAGQgCAGgDAGQgCAGgEAGQgEAFgEAFQgEAGgEAEQgFAFgFAEQgGAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgSAAgSQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAHgCQAHgCAIgBQAHgBAGAAQAGAAAGABQAGABAGACQAGACAGADQAGADAGADQAFAEAGAFQAFAEAFAFQAEAFAEAGQAEAFAEAGIAAAA").cp();
	this.shape_9.setTransform(71.5,144.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(4,0,1).p("AATgyQAHAEAGAHQAGAIADALQADALABANQgBAMgDAJQgDAJgGAHQgGAGgHAEQgHAEgHgBQgVAAgOgNQgNgOAAgXQgBgNAEgLQAEgLAGgIQAHgHAJgEQAJgEAKAAQAHAAAHAEIAAAA").cp();
	this.shape_10.setTransform(144.5,5.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(4,0,1).p("AAyDcIhjm3");
	this.shape_11.setTransform(151,35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s("#FFFFFF").ss(4,0,1).p("AhRg8QAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAIgCQAGgCAIgBQAHgBAGAAQAGAAAGABQAGABAGACQAGACAGADQAGADAGADQAFAEAFAFQAGAEAEAFQAFAFAEAGQAEAFAEAGQAEAGACAHQADAGACAIQACAGABAIQABAHAAAGQAAAGgBAGQgBAGgCAHQgCAFgDAGQgCAGgEAGQgEAFgEAFQgEAGgFAEQgEAFgGAEQgFAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgRAAgTQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFIAAAA").cp();
	this.shape_12.setTransform(385.5,136.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s("#FFFFFF").ss(4,0,1).p("ABogIQABAHAAAGQAAAGgBAGQgBAGgCAGQgCAGgDAGQgCAGgEAGQgEAFgEAFQgEAGgFAEQgEAFgGAEQgFAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgRAAgTQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAIgCQAGgCAIgBQAHgBAGAAQAGAAAGABQAGABAGACQAGACAGADQAGADAGADQAFAEAFAFQAGAEAEAFQAFAFAEAGQAEAFAEAGQAEAGACAHQADAGACAIQACAGABAIIAAAA").cp();
	this.shape_13.setTransform(350.5,144.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s("#FFFFFF").ss(4,0,1).p("ABSg8QAEAFAEAGQAEAGACAHQADAGACAIQACAGABAIQABAHAAAGQAAAGgBAGQgBAGgCAGQgCAGgDAGQgCAGgEAGQgEAFgEAFQgEAGgFAEQgEAFgGAEQgFAEgFAEQgGAEgGACQgGADgFACQgHACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgSAAgSQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAIgCQAGgCAIgBQAHgBAGAAQAGAAAGABQAGABAHACQAFACAGADQAGADAGADQAFAEAFAFQAGAEAEAFQAFAFAEAGIAAAA").cp();
	this.shape_14.setTransform(312.5,150.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s("#FFFFFF").ss(4,0,1).p("AAFhoQAGAAAGABQAGABAHACQAFACAGADQAGADAGADQAFAEAFAFQAGAEAEAFQAFAFAEAGQAEAFAEAGQAEAGACAHQADAGACAIQACAGABAIQABAHAAAGQAAAGgBAGQgBAGgCAHQgCAFgDAGQgCAGgEAGQgEAFgEAFQgEAGgFAEQgEAFgGAEQgFAEgFAEQgGAEgGACQgGADgFACQgHACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgRAAgTQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAIgCQAGgCAIgBQAHgBAGAAIAAAA").cp();
	this.shape_15.setTransform(272.5,154.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s("#FFFFFF").ss(4,0,1).p("ABlAeQgCAFgDAGQgCAGgEAGQgEAFgEAFQgEAGgFAEQgEAFgGAEQgFAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgSAAgSQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAIgCQAGgCAIgBQAHgBAGAAQAGAAAGABQAGABAHACQAFACAGADQAGADAGADQAFAEAFAFQAGAEAEAFQAFAFAEAGQAEAFAEAGQAEAGACAHQADAGACAIQACAGABAIQABAHAAAGQAAAGgBAGQgBAGgCAHIAAAA").cp();
	this.shape_16.setTransform(235.5,157.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s("#FFFFFF").ss(4,0,1).p("ABgApQgCAGgEAGQgEAFgEAFQgEAGgEAEQgFAFgFAEQgGAEgFAEQgGAEgGACQgGADgFACQgHACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgSAAgSQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAHgCQAHgCAIgBQAHgBAGAAQAGAAAGABQAGABAHACQAFACAGADQAGADAGADQAFAEAGAFQAFAEAFAFQAEAFAEAGQAEAFAEAGQAEAGACAHQADAGACAIQACAGABAIQABAHAAAGQAAAGgBAGQgBAGgCAHQgCAFgDAGIAAAA").cp();
	this.shape_17.setTransform(195.5,157.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s("#FFFFFF").ss(4,0,1).p("ABaA1QgEAFgEAFQgEAGgEAEQgFAFgFAEQgGAEgFAEQgGAEgGACQgGADgFACQgHACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgRAAgTQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAHgCQAHgCAIgBQAHgBAGAAQAGAAAGABQAGABAHACQAFACAGADQAGADAGADQAFAEAGAEQAFAFAFAFQAEAFAEAGQAEAFAEAGQAEAGACAHQADAGACAIQACAGABAIQABAHAAAGQAAAGgBAGQgBAGgCAHQgCAFgDAGQgCAGgEAGIAAAA").cp();
	this.shape_18.setTransform(155.5,155.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s("#FFFFFF").ss(4,0,1).p("ABagxQAEAGACAHQADAGACAIQACAGABAIQABAHAAAGQAAAGgBAGQgBAGgCAGQgCAGgDAGQgCAGgEAGQgEAFgEAFQgEAGgEAEQgFAFgFAEQgGAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgSAAgSQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAHgCQAHgCAIgBQAHgBAGAAQAGAAAGABQAGABAGACQAGACAGADQAGADAGADQAFAEAGAFQAFAEAFAFQAEAFAEAGQAEAFAEAGIAAAA").cp();
	this.shape_19.setTransform(116.5,151.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s("#FF0000").ss(4,0,1).p("AGHowQBWAqBGA7QBGA7AzBJQAzBIAcBTQANApAIAsQAGArABAsQgBAsgGAsQgIArgNAqQgcBSgzBJQgzBIhGA8QhGA6hWArQgrAVguARQguAQgxAMQgwALgzAGQgzAFg1ABQgmgBgngDQgogDgmgGQhMgOhGgYQhGgZg/gjQg+gjg1gsQg1gtgqg0Qgrg0geg6Qgdg7gQg/QgQhAAAhDQAAgsAHgrQAHgsAOgpQAchTAzhIQAzhJBHg7QAjgdAogaQAngZAsgVQArgWAvgQQAvgRAxgLQAygLA0gGQAzgGA0AAQA1AAAzAGQAzAGAwALQAxALAuARQAuAQArAWIAAAA").cp();
	this.shape_20.setTransform(214.5,100);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("ARAl6QAoAFAnAFQAnAFAmAGQAmAFAkAGQAlAFAjAHQAjAGAiAGQAiAHAhAGQAgAHAgAHQAfAHAeAHQAeAHAcAIQAcAHAaAIQAbAHAaAIQAZAIAXAJQBHAYA3AaQA2AaAmAcQAmAcAUAdQAUAdAAAdQAAAegUAdQgUAdgmAcQgmAcg2AaQg3AahHAZQgXAIgZAIQgaAIgbAHQgaAIgcAIQgcAHgeAHQgeAHgfAHQggAHggAHQghAGgiAHQgiAGgjAHQgjAGglAFQgkAGgmAGQgmAFgnAFQgnAFgoAFQgnAFgpAFQgqAEgqAEQgqAEgrAEQgrAEgsADQgsADgtADQgtADgtADQguADguACQgvACgvACQgvABgwACQgwABgwABQgxABgxABQgxAAgxAAQhuAAhtgCQhtgDhpgEQhpgFhmgGQhlgHhhgIQhhgJhcgKQhcgKhWgMQhWgMhQgNQhQgOhKgPQhJgPhCgQQhDgRg6gRQg6gSgygTQgygTgqgTQhSgogsgqQgrgrgBgtQAAgdAUgdQAUgdAmgcQAmgcA2gaQA3gaBHgYQAXgJAZgIQAagIAagHQAbgIAcgHQAcgIAegHQAegHAfgHQAggHAggHQAhgGAigHQAigGAjgGQAjgHAlgFQAkgGAmgFQAmgGAngFQAngFAngFQAogFApgEQAqgFAqgEQAqgEArgEQArgEAsgDQAsgDAtgDQAtgDAtgDQAugDAugCQAvgCAvgCQAvgBAwgCQAwgBAwgBQAxgBAxAAQAxgBAwAAQAxAAAxABQAxAAAxABQAwABAwABQAwACAvABQAvACAvACQAuACAuADQAtADAtADQAtADAsADQAsADArAEQArAEAqAEQAqAEAqAFQApAEAnAFIAAAA").cp();
	this.shape_21.setTransform(216,135);

	this.addChild(this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,432.1,179.1);


(lib.SpaceShipCorrect = function() {
	this.initialize();

	// Laag 2
	this.instance_6 = new lib.mcLight();
	this.instance_6.setTransform(349.5,144.5);

	this.instance_7 = new lib.mcLight();
	this.instance_7.setTransform(273.5,154.5);

	this.instance_8 = new lib.mcLight();
	this.instance_8.setTransform(195.5,157.5);

	this.instance_9 = new lib.mcLight();
	this.instance_9.setTransform(116.5,151.5);

	this.instance_10 = new lib.mcLight();
	this.instance_10.setTransform(29.5,133.5);

	// Laag 1
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#006600").s("#FFFFFF").ss(4,0,1).p("ABagxQAEAGACAHQADAGACAIQACAGABAIQABAHAAAGQAAAGgBAGQgBAGgCAGQgCAGgDAGQgCAGgEAGQgEAFgEAFQgEAGgEAEQgFAFgFAEQgGAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgSAAgSQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAHgCQAHgCAIgBQAHgBAGAAQAGAAAGABQAGABAGACQAGACAGADQAGADAGADQAFAEAGAFQAFAEAFAFQAEAFAEAGQAEAFAEAGIAAAA").cp();
	this.shape_22.setTransform(29.5,133.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#006600").s("#FFFFFF").ss(4,0,1).p("ABagxQAEAGACAHQADAGACAIQACAGABAIQABAHAAAGQAAAGgBAGQgBAGgCAGQgCAGgDAGQgCAGgEAGQgEAFgEAFQgEAGgEAEQgFAFgFAEQgGAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgSAAgSQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAHgCQAHgCAIgBQAHgBAGAAQAGAAAGABQAGABAGACQAGACAGADQAGADAGADQAFAEAGAFQAFAEAFAFQAEAFAEAGQAEAFAEAGIAAAA").cp();
	this.shape_23.setTransform(71.5,144.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#006600").s("#FFFFFF").ss(4,0,1).p("AATgyQAHAEAGAHQAGAIADALQADALABANQgBAMgDAJQgDAJgGAHQgGAGgHAEQgHAEgHgBQgVAAgOgNQgNgOAAgXQgBgNAEgLQAEgLAGgIQAHgHAJgEQAJgEAKAAQAHAAAHAEIAAAA").cp();
	this.shape_24.setTransform(144.5,5.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(4,0,1).p("AAyDcIhjm3");
	this.shape_25.setTransform(151,35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#006600").s("#FFFFFF").ss(4,0,1).p("AhRg8QAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAIgCQAGgCAIgBQAHgBAGAAQAGAAAGABQAGABAGACQAGACAGADQAGADAGADQAFAEAFAFQAGAEAEAFQAFAFAEAGQAEAFAEAGQAEAGACAHQADAGACAIQACAGABAIQABAHAAAGQAAAGgBAGQgBAGgCAHQgCAFgDAGQgCAGgEAGQgEAFgEAFQgEAGgFAEQgEAFgGAEQgFAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgRAAgTQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFIAAAA").cp();
	this.shape_26.setTransform(385.5,136.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#006600").s("#FFFFFF").ss(4,0,1).p("ABogIQABAHAAAGQAAAGgBAGQgBAGgCAGQgCAGgDAGQgCAGgEAGQgEAFgEAFQgEAGgFAEQgEAFgGAEQgFAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgRAAgTQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAIgCQAGgCAIgBQAHgBAGAAQAGAAAGABQAGABAGACQAGACAGADQAGADAGADQAFAEAFAFQAGAEAEAFQAFAFAEAGQAEAFAEAGQAEAGACAHQADAGACAIQACAGABAIIAAAA").cp();
	this.shape_27.setTransform(350.5,144.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#006600").s("#FFFFFF").ss(4,0,1).p("ABSg8QAEAFAEAGQAEAGACAHQADAGACAIQACAGABAIQABAHAAAGQAAAGgBAGQgBAGgCAGQgCAGgDAGQgCAGgEAGQgEAFgEAFQgEAGgFAEQgEAFgGAEQgFAEgFAEQgGAEgGACQgGADgFACQgHACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgSAAgSQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAIgCQAGgCAIgBQAHgBAGAAQAGAAAGABQAGABAHACQAFACAGADQAGADAGADQAFAEAFAFQAGAEAEAFQAFAFAEAGIAAAA").cp();
	this.shape_28.setTransform(312.5,150.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#006600").s("#FFFFFF").ss(4,0,1).p("AAFhoQAGAAAGABQAGABAHACQAFACAGADQAGADAGADQAFAEAFAFQAGAEAEAFQAFAFAEAGQAEAFAEAGQAEAGACAHQADAGACAIQACAGABAIQABAHAAAGQAAAGgBAGQgBAGgCAHQgCAFgDAGQgCAGgEAGQgEAFgEAFQgEAGgFAEQgEAFgGAEQgFAEgFAEQgGAEgGACQgGADgFACQgHACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgRAAgTQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAIgCQAGgCAIgBQAHgBAGAAIAAAA").cp();
	this.shape_29.setTransform(272.5,154.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#006600").s("#FFFFFF").ss(4,0,1).p("ABlAeQgCAFgDAGQgCAGgEAGQgEAFgEAFQgEAGgFAEQgEAFgGAEQgFAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgSAAgSQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAIgCQAGgCAIgBQAHgBAGAAQAGAAAGABQAGABAHACQAFACAGADQAGADAGADQAFAEAFAFQAGAEAEAFQAFAFAEAGQAEAFAEAGQAEAGACAHQADAGACAIQACAGABAIQABAHAAAGQAAAGgBAGQgBAGgCAHIAAAA").cp();
	this.shape_30.setTransform(235.5,157.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#006600").s("#FFFFFF").ss(4,0,1).p("ABgApQgCAGgEAGQgEAFgEAFQgEAGgEAEQgFAFgFAEQgGAEgFAEQgGAEgGACQgGADgFACQgHACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgSAAgSQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAHgCQAHgCAIgBQAHgBAGAAQAGAAAGABQAGABAHACQAFACAGADQAGADAGADQAFAEAGAFQAFAEAFAFQAEAFAEAGQAEAFAEAGQAEAGACAHQADAGACAIQACAGABAIQABAHAAAGQAAAGgBAGQgBAGgCAHQgCAFgDAGIAAAA").cp();
	this.shape_31.setTransform(195.5,157.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#006600").s("#FFFFFF").ss(4,0,1).p("ABaA1QgEAFgEAFQgEAGgEAEQgFAFgFAEQgGAEgFAEQgGAEgGACQgGADgFACQgHACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgRAAgTQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAHgCQAHgCAIgBQAHgBAGAAQAGAAAGABQAGABAHACQAFACAGADQAGADAGADQAFAEAGAEQAFAFAFAFQAEAFAEAGQAEAFAEAGQAEAGACAHQADAGACAIQACAGABAIQABAHAAAGQAAAGgBAGQgBAGgCAHQgCAFgDAGQgCAGgEAGIAAAA").cp();
	this.shape_32.setTransform(155.5,155.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#006600").s("#FFFFFF").ss(4,0,1).p("ABagxQAEAGACAHQADAGACAIQACAGABAIQABAHAAAGQAAAGgBAGQgBAGgCAGQgCAGgDAGQgCAGgEAGQgEAFgEAFQgEAGgEAEQgFAFgFAEQgGAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgSAAgSQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAHgCQAHgCAIgBQAHgBAGAAQAGAAAGABQAGABAGACQAGACAGADQAGADAGADQAFAEAGAFQAFAEAFAFQAEAFAEAGQAEAFAEAGIAAAA").cp();
	this.shape_33.setTransform(116.5,151.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#006600").s("#006600").ss(4,0,1).p("ALrCtQgcBTgzBIQgyBJhHA7QhGA7hWAqQgrAWguAQQguAQgwAMQgxALgzAGQgzAGg0AAQgnAAgngEQgogDglgGQhNgNhGgZQhGgZg+gjQg/gjg1gsQg1gsgqg1Qgrg0geg6Qgdg6gQhAQgQhAAAhDQAAgsAHgrQAHgrAOgqQAchTAzhIQAzhJBHg7QAjgdAogaQAogZArgVQArgWAvgQQAvgQAxgMQAygLA0gGQA0gGA0AAQA0AAAzAGQAzAGAxALQAwAMAuAQQAuAQArAWQBWAqBGA7QBHA7AyBJQAzBIAcBTQAOAqAHArQAHArAAAsQAAAtgHArQgHArgOAqIAAAA").cp();
	this.shape_34.setTransform(214.5,100);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#006600").s().p("ARAl6QAoAFAnAFQAnAFAmAGQAmAFAkAGQAlAFAjAHQAjAGAiAGQAiAHAhAGQAgAHAgAHQAfAHAeAHQAeAHAcAIQAcAHAaAIQAbAHAaAIQAZAIAXAJQBHAYA3AaQA2AaAmAcQAmAcAUAdQAUAdAAAdQAAAegUAdQgUAdgmAcQgmAcg2AaQg3AahHAZQgXAIgZAIQgaAIgbAHQgaAIgcAIQgcAHgeAHQgeAHgfAHQggAHggAHQghAGgiAHQgiAGgjAHQgjAGglAFQgkAGgmAGQgmAFgnAFQgnAFgoAFQgnAFgpAFQgqAEgqAEQgqAEgrAEQgrAEgsADQgsADgtADQgtADgtADQguADguACQgvACgvACQgvABgwACQgwABgwABQgxABgxABQgxAAgxAAQhuAAhtgCQhtgDhpgEQhpgFhmgGQhlgHhhgIQhhgJhcgKQhcgKhWgMQhWgMhQgNQhQgOhKgPQhJgPhCgQQhDgRg6gRQg6gSgygTQgygTgqgTQhSgogsgqQgrgrgBgtQAAgdAUgdQAUgdAmgcQAmgcA2gaQA3gaBHgYQAXgJAZgIQAagIAagHQAbgIAcgHQAcgIAegHQAegHAfgHQAggHAggHQAhgGAigHQAigGAjgGQAjgHAlgFQAkgGAmgFQAmgGAngFQAngFAngFQAogFApgEQAqgFAqgEQAqgEArgEQArgEAsgDQAsgDAtgDQAtgDAtgDQAugDAugCQAvgCAvgCQAvgBAwgCQAwgBAwgBQAxgBAxAAQAxgBAwAAQAxAAAxABQAxAAAxABQAwABAwABQAwACAvABQAvACAvACQAuACAuADQAtADAtADQAtADAsADQAsADArAEQArAEAqAEQAqAEAqAFQApAEAnAFIAAAA").cp();
	this.shape_35.setTransform(216,135);

	this.addChild(this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,432.1,179.1);


(lib.SpaceShip = function() {
	this.initialize();

	// Laag 2
	this.instance_11 = new lib.mcLight();
	this.instance_11.setTransform(349.5,144.5);

	this.instance_12 = new lib.mcLight();
	this.instance_12.setTransform(273.5,154.5);

	this.instance_13 = new lib.mcLight();
	this.instance_13.setTransform(195.5,157.5);

	this.instance_14 = new lib.mcLight();
	this.instance_14.setTransform(116.5,151.5);

	this.instance_15 = new lib.mcLight();
	this.instance_15.setTransform(29.5,133.5);

	// Laag 1
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s("#FFFFFF").ss(4,0,1).p("ABagxQAEAGACAHQADAGACAIQACAGABAIQABAHAAAGQAAAGgBAGQgBAGgCAGQgCAGgDAGQgCAGgEAGQgEAFgEAFQgEAGgEAEQgFAFgFAEQgGAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgSAAgSQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAHgCQAHgCAIgBQAHgBAGAAQAGAAAGABQAGABAGACQAGACAGADQAGADAGADQAFAEAGAFQAFAEAFAFQAEAFAEAGQAEAFAEAGIAAAA").cp();
	this.shape_36.setTransform(29.5,133.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s("#FFFFFF").ss(4,0,1).p("ABagxQAEAGACAHQADAGACAIQACAGABAIQABAHAAAGQAAAGgBAGQgBAGgCAGQgCAGgDAGQgCAGgEAGQgEAFgEAFQgEAGgEAEQgFAFgFAEQgGAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgSAAgSQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAHgCQAHgCAIgBQAHgBAGAAQAGAAAGABQAGABAGACQAGACAGADQAGADAGADQAFAEAGAFQAFAEAFAFQAEAFAEAGQAEAFAEAGIAAAA").cp();
	this.shape_37.setTransform(71.5,144.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(4,0,1).p("AATgyQAHAEAGAHQAGAIADALQADALABANQgBAMgDAJQgDAJgGAHQgGAGgHAEQgHAEgHgBQgVAAgOgNQgNgOAAgXQgBgNAEgLQAEgLAGgIQAHgHAJgEQAJgEAKAAQAHAAAHAEIAAAA").cp();
	this.shape_38.setTransform(144.5,5.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(4,0,1).p("AAyDcIhjm3");
	this.shape_39.setTransform(151,35);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s("#FFFFFF").ss(4,0,1).p("AhRg8QAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAIgCQAGgCAIgBQAHgBAGAAQAGAAAGABQAGABAGACQAGACAGADQAGADAGADQAFAEAFAFQAGAEAEAFQAFAFAEAGQAEAFAEAGQAEAGACAHQADAGACAIQACAGABAIQABAHAAAGQAAAGgBAGQgBAGgCAHQgCAFgDAGQgCAGgEAGQgEAFgEAFQgEAGgFAEQgEAFgGAEQgFAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgRAAgTQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFIAAAA").cp();
	this.shape_40.setTransform(385.5,136.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s("#FFFFFF").ss(4,0,1).p("ABogIQABAHAAAGQAAAGgBAGQgBAGgCAGQgCAGgDAGQgCAGgEAGQgEAFgEAFQgEAGgFAEQgEAFgGAEQgFAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgRAAgTQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAIgCQAGgCAIgBQAHgBAGAAQAGAAAGABQAGABAGACQAGACAGADQAGADAGADQAFAEAFAFQAGAEAEAFQAFAFAEAGQAEAFAEAGQAEAGACAHQADAGACAIQACAGABAIIAAAA").cp();
	this.shape_41.setTransform(350.5,144.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s("#FFFFFF").ss(4,0,1).p("ABSg8QAEAFAEAGQAEAGACAHQADAGACAIQACAGABAIQABAHAAAGQAAAGgBAGQgBAGgCAGQgCAGgDAGQgCAGgEAGQgEAFgEAFQgEAGgFAEQgEAFgGAEQgFAEgFAEQgGAEgGACQgGADgFACQgHACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgSAAgSQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAIgCQAGgCAIgBQAHgBAGAAQAGAAAGABQAGABAHACQAFACAGADQAGADAGADQAFAEAFAFQAGAEAEAFQAFAFAEAGIAAAA").cp();
	this.shape_42.setTransform(312.5,150.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s("#FFFFFF").ss(4,0,1).p("AAFhoQAGAAAGABQAGABAHACQAFACAGADQAGADAGADQAFAEAFAFQAGAEAEAFQAFAFAEAGQAEAFAEAGQAEAGACAHQADAGACAIQACAGABAIQABAHAAAGQAAAGgBAGQgBAGgCAHQgCAFgDAGQgCAGgEAGQgEAFgEAFQgEAGgFAEQgEAFgGAEQgFAEgFAEQgGAEgGACQgGADgFACQgHACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgRAAgTQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAIgCQAGgCAIgBQAHgBAGAAIAAAA").cp();
	this.shape_43.setTransform(272.5,154.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s("#FFFFFF").ss(4,0,1).p("ABlAeQgCAFgDAGQgCAGgEAGQgEAFgEAFQgEAGgFAEQgEAFgGAEQgFAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgSAAgSQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAIgCQAGgCAIgBQAHgBAGAAQAGAAAGABQAGABAHACQAFACAGADQAGADAGADQAFAEAFAFQAGAEAEAFQAFAFAEAGQAEAFAEAGQAEAGACAHQADAGACAIQACAGABAIQABAHAAAGQAAAGgBAGQgBAGgCAHIAAAA").cp();
	this.shape_44.setTransform(235.5,157.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s("#FFFFFF").ss(4,0,1).p("ABgApQgCAGgEAGQgEAFgEAFQgEAGgEAEQgFAFgFAEQgGAEgFAEQgGAEgGACQgGADgFACQgHACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgSAAgSQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAHgCQAHgCAIgBQAHgBAGAAQAGAAAGABQAGABAHACQAFACAGADQAGADAGADQAFAEAGAFQAFAEAFAFQAEAFAEAGQAEAFAEAGQAEAGACAHQADAGACAIQACAGABAIQABAHAAAGQAAAGgBAGQgBAGgCAHQgCAFgDAGIAAAA").cp();
	this.shape_45.setTransform(195.5,157.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s("#FFFFFF").ss(4,0,1).p("ABaA1QgEAFgEAFQgEAGgEAEQgFAFgFAEQgGAEgFAEQgGAEgGACQgGADgFACQgHACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgRAAgTQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAHgCQAHgCAIgBQAHgBAGAAQAGAAAGABQAGABAHACQAFACAGADQAGADAGADQAFAEAGAEQAFAFAFAFQAEAFAEAGQAEAFAEAGQAEAGACAHQADAGACAIQACAGABAIQABAHAAAGQAAAGgBAGQgBAGgCAHQgCAFgDAGQgCAGgEAGIAAAA").cp();
	this.shape_46.setTransform(155.5,155.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s("#FFFFFF").ss(4,0,1).p("ABagxQAEAGACAHQADAGACAIQACAGABAIQABAHAAAGQAAAGgBAGQgBAGgCAGQgCAGgDAGQgCAGgEAGQgEAFgEAFQgEAGgEAEQgFAFgFAEQgGAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgSAAgSQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAHgCQAHgCAIgBQAHgBAGAAQAGAAAGABQAGABAGACQAGACAGADQAGADAGADQAFAEAGAFQAFAEAFAFQAEAFAEAGQAEAFAEAGIAAAA").cp();
	this.shape_47.setTransform(116.5,151.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s("#FFFFFF").ss(4,0,1).p("ALrCtQgcBTgzBIQgyBJhHA7QhGA7hWAqQgrAWguAQQguAQgwAMQgxALgzAGQgzAGg0AAQgnAAgngEQgogDglgGQhNgNhGgZQhGgZg+gjQg/gjg1gsQg1gsgqg1Qgrg0geg6Qgdg6gQhAQgQhAAAhDQAAgsAHgrQAHgrAOgqQAchTAzhIQAzhJBHg7QAjgdAogaQAogZArgVQArgWAvgQQAvgQAxgMQAygLA0gGQA0gGA0AAQA0AAAzAGQAzAGAxALQAwAMAuAQQAuAQArAWQBWAqBGA7QBHA7AyBJQAzBIAcBTQAOAqAHArQAHArAAAsQAAAtgHArQgHArgOAqIAAAA").cp();
	this.shape_48.setTransform(214.5,100);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("ARAl6QAoAFAnAFQAnAFAmAGQAmAFAkAGQAlAFAjAHQAjAGAiAGQAiAHAhAGQAgAHAgAHQAfAHAeAHQAeAHAcAIQAcAHAaAIQAbAHAaAIQAZAIAXAJQBHAYA3AaQA2AaAmAcQAmAcAUAdQAUAdAAAdQAAAegUAdQgUAdgmAcQgmAcg2AaQg3AahHAZQgXAIgZAIQgaAIgbAHQgaAIgcAIQgcAHgeAHQgeAHgfAHQggAHggAHQghAGgiAHQgiAGgjAHQgjAGglAFQgkAGgmAGQgmAFgnAFQgnAFgoAFQgnAFgpAFQgqAEgqAEQgqAEgrAEQgrAEgsADQgsADgtADQgtADgtADQguADguACQgvACgvACQgvABgwACQgwABgwABQgxABgxABQgxAAgxAAQhuAAhtgCQhtgDhpgEQhpgFhmgGQhlgHhhgIQhhgJhcgKQhcgKhWgMQhWgMhQgNQhQgOhKgPQhJgPhCgQQhDgRg6gRQg6gSgygTQgygTgqgTQhSgogsgqQgrgrgBgtQAAgdAUgdQAUgdAmgcQAmgcA2gaQA3gaBHgYQAXgJAZgIQAagIAagHQAbgIAcgHQAcgIAegHQAegHAfgHQAggHAggHQAhgGAigHQAigGAjgGQAjgHAlgFQAkgGAmgFQAmgGAngFQAngFAngFQAogFApgEQAqgFAqgEQAqgEArgEQArgEAsgDQAsgDAtgDQAtgDAtgDQAugDAugCQAvgCAvgCQAvgBAwgCQAwgBAwgBQAxgBAxAAQAxgBAwAAQAxAAAxABQAxAAAxABQAwABAwABQAwACAvABQAvACAvACQAuACAuADQAtADAtADQAtADAsADQAsADArAEQArAEAqAEQAqAEAqAFQApAEAnAFIAAAA").cp();
	this.shape_49.setTransform(216,135);

	this.addChild(this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,432.1,179.1);


(lib.mcTextSpaceShipIncorrect = function() {
	this.initialize();

	// text
	this.textIncorrect = new cjs.Text("454", "47px Arial");
	this.textIncorrect.textAlign = "center";
	this.textIncorrect.lineHeight = 57;
	this.textIncorrect.lineWidth = 107;
	this.textIncorrect.setTransform(209.5,47.9);

	// ship
	this.instance_16 = new lib.SpaceShipInCorrect("synched",0);
	this.instance_16.setTransform(216,68.5,1,1,0,0,0,216,88.5);

	this.addChild(this.instance_16,this.textIncorrect);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-19.9,432.1,179.1);


(lib.mcTextSpaceShipCorrect = function() {
	this.initialize();

	// text
	this.textCorrect = new cjs.Text("454", "47px Arial");
	this.textCorrect.textAlign = "center";
	this.textCorrect.lineHeight = 57;
	this.textCorrect.lineWidth = 107;
	this.textCorrect.setTransform(209.5,47.9);

	// ship
	this.instance_17 = new lib.SpaceShipCorrect("synched",0);
	this.instance_17.setTransform(216,68.5,1,1,0,0,0,216,88.5);

	this.addChild(this.instance_17,this.textCorrect);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-19.9,432.1,179.1);


(lib.mcTextSpaceShip = function() {
	this.initialize();

	// text
	this.text = new cjs.Text("454", "47px Arial");
	this.text.textAlign = "center";
	this.text.lineHeight = 59;
	this.text.lineWidth = 107;
	this.text.setTransform(209.5,47.9);

	// ship
	this.instance_18 = new lib.SpaceShip("synched",0);
	this.instance_18.setTransform(216,68.5,1,1,0,0,0,216,88.5);

	this.addChild(this.instance_18,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-19.9,432.1,179.1);


(lib.mcSpaceShip = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{idle:0,correct:49,incorrect:98},true);

	// timeline functions:
	this.frame_48 = function() {
		this.gotoAndPlay("idle");
	}
	this.frame_97 = function() {
		this.gotoAndPlay("correct");
	}
	this.frame_146 = function() {
		this.gotoAndPlay("incorrect");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(48).call(this.frame_48).wait(49).call(this.frame_97).wait(49).call(this.frame_146));

	// spaceship
	this.ship = new lib.mcTextSpaceShip();
	this.ship.setTransform(0,-0.9,1,1,0,0,0,216,68.5);

	this.ship_1 = new lib.mcTextSpaceShipCorrect();
	this.ship_1.setTransform(0,-0.9,1,1,0,0,0,216,68.5);

	this.ship_2 = new lib.mcTextSpaceShipIncorrect();
	this.ship_2.setTransform(0,-0.9,1,1,0,0,0,216,68.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ship,p:{y:-0.9}}]}).to({state:[{t:this.ship,p:{y:-2.1}}]},1).to({state:[{t:this.ship,p:{y:-3.3}}]},1).to({state:[{t:this.ship,p:{y:-4.5}}]},1).to({state:[{t:this.ship,p:{y:-5.7}}]},1).to({state:[{t:this.ship,p:{y:-6.9}}]},1).to({state:[{t:this.ship,p:{y:-8.2}}]},1).to({state:[{t:this.ship,p:{y:-9.4}}]},1).to({state:[{t:this.ship,p:{y:-10.6}}]},1).to({state:[{t:this.ship,p:{y:-11.8}}]},1).to({state:[{t:this.ship,p:{y:-13}}]},1).to({state:[{t:this.ship,p:{y:-14.2}}]},1).to({state:[{t:this.ship,p:{y:-15.5}}]},1).to({state:[{t:this.ship,p:{y:-16.7}}]},1).to({state:[{t:this.ship,p:{y:-17.9}}]},1).to({state:[{t:this.ship,p:{y:-19.1}}]},1).to({state:[{t:this.ship,p:{y:-20.3}}]},1).to({state:[{t:this.ship,p:{y:-21.5}}]},1).to({state:[{t:this.ship,p:{y:-22.8}}]},1).to({state:[{t:this.ship,p:{y:-24}}]},1).to({state:[{t:this.ship,p:{y:-25.2}}]},1).to({state:[{t:this.ship,p:{y:-26.4}}]},1).to({state:[{t:this.ship,p:{y:-27.6}}]},1).to({state:[{t:this.ship,p:{y:-28.9}}]},1).to({state:[{t:this.ship,p:{y:-28.9}}]},1).to({state:[{t:this.ship,p:{y:-28.9}}]},1).to({state:[{t:this.ship,p:{y:-27.6}}]},1).to({state:[{t:this.ship,p:{y:-26.4}}]},1).to({state:[{t:this.ship,p:{y:-25.2}}]},1).to({state:[{t:this.ship,p:{y:-24}}]},1).to({state:[{t:this.ship,p:{y:-22.8}}]},1).to({state:[{t:this.ship,p:{y:-21.5}}]},1).to({state:[{t:this.ship,p:{y:-20.3}}]},1).to({state:[{t:this.ship,p:{y:-19.1}}]},1).to({state:[{t:this.ship,p:{y:-17.9}}]},1).to({state:[{t:this.ship,p:{y:-16.7}}]},1).to({state:[{t:this.ship,p:{y:-15.5}}]},1).to({state:[{t:this.ship,p:{y:-14.2}}]},1).to({state:[{t:this.ship,p:{y:-13}}]},1).to({state:[{t:this.ship,p:{y:-11.8}}]},1).to({state:[{t:this.ship,p:{y:-10.6}}]},1).to({state:[{t:this.ship,p:{y:-9.4}}]},1).to({state:[{t:this.ship,p:{y:-8.2}}]},1).to({state:[{t:this.ship,p:{y:-6.9}}]},1).to({state:[{t:this.ship,p:{y:-5.7}}]},1).to({state:[{t:this.ship,p:{y:-4.5}}]},1).to({state:[{t:this.ship,p:{y:-3.3}}]},1).to({state:[{t:this.ship,p:{y:-2.1}}]},1).to({state:[{t:this.ship,p:{y:-0.9}}]},1).to({state:[{t:this.ship_1,p:{y:-0.9}}]},1).to({state:[{t:this.ship_1,p:{y:-2.1}}]},1).to({state:[{t:this.ship_1,p:{y:-3.3}}]},1).to({state:[{t:this.ship_1,p:{y:-4.5}}]},1).to({state:[{t:this.ship_1,p:{y:-5.7}}]},1).to({state:[{t:this.ship_1,p:{y:-6.9}}]},1).to({state:[{t:this.ship_1,p:{y:-8.2}}]},1).to({state:[{t:this.ship_1,p:{y:-9.4}}]},1).to({state:[{t:this.ship_1,p:{y:-10.6}}]},1).to({state:[{t:this.ship_1,p:{y:-11.8}}]},1).to({state:[{t:this.ship_1,p:{y:-13}}]},1).to({state:[{t:this.ship_1,p:{y:-14.2}}]},1).to({state:[{t:this.ship_1,p:{y:-15.5}}]},1).to({state:[{t:this.ship_1,p:{y:-16.7}}]},1).to({state:[{t:this.ship_1,p:{y:-17.9}}]},1).to({state:[{t:this.ship_1,p:{y:-19.1}}]},1).to({state:[{t:this.ship_1,p:{y:-20.3}}]},1).to({state:[{t:this.ship_1,p:{y:-21.5}}]},1).to({state:[{t:this.ship_1,p:{y:-22.8}}]},1).to({state:[{t:this.ship_1,p:{y:-24}}]},1).to({state:[{t:this.ship_1,p:{y:-25.2}}]},1).to({state:[{t:this.ship_1,p:{y:-26.4}}]},1).to({state:[{t:this.ship_1,p:{y:-27.6}}]},1).to({state:[{t:this.ship_1,p:{y:-28.9}}]},1).to({state:[{t:this.ship_1,p:{y:-28.9}}]},1).to({state:[{t:this.ship_1,p:{y:-28.9}}]},1).to({state:[{t:this.ship_1,p:{y:-27.6}}]},1).to({state:[{t:this.ship_1,p:{y:-26.4}}]},1).to({state:[{t:this.ship_1,p:{y:-25.2}}]},1).to({state:[{t:this.ship_1,p:{y:-24}}]},1).to({state:[{t:this.ship_1,p:{y:-22.8}}]},1).to({state:[{t:this.ship_1,p:{y:-21.5}}]},1).to({state:[{t:this.ship_1,p:{y:-20.3}}]},1).to({state:[{t:this.ship_1,p:{y:-19.1}}]},1).to({state:[{t:this.ship_1,p:{y:-17.9}}]},1).to({state:[{t:this.ship_1,p:{y:-16.7}}]},1).to({state:[{t:this.ship_1,p:{y:-15.5}}]},1).to({state:[{t:this.ship_1,p:{y:-14.2}}]},1).to({state:[{t:this.ship_1,p:{y:-13}}]},1).to({state:[{t:this.ship_1,p:{y:-11.8}}]},1).to({state:[{t:this.ship_1,p:{y:-10.6}}]},1).to({state:[{t:this.ship_1,p:{y:-9.4}}]},1).to({state:[{t:this.ship_1,p:{y:-8.2}}]},1).to({state:[{t:this.ship_1,p:{y:-6.9}}]},1).to({state:[{t:this.ship_1,p:{y:-5.7}}]},1).to({state:[{t:this.ship_1,p:{y:-4.5}}]},1).to({state:[{t:this.ship_1,p:{y:-3.3}}]},1).to({state:[{t:this.ship_1,p:{y:-2.1}}]},1).to({state:[{t:this.ship_1,p:{y:-0.9}}]},1).to({state:[{t:this.ship_2,p:{y:-0.9}}]},1).to({state:[{t:this.ship_2,p:{y:-2.1}}]},1).to({state:[{t:this.ship_2,p:{y:-3.3}}]},1).to({state:[{t:this.ship_2,p:{y:-4.5}}]},1).to({state:[{t:this.ship_2,p:{y:-5.7}}]},1).to({state:[{t:this.ship_2,p:{y:-6.9}}]},1).to({state:[{t:this.ship_2,p:{y:-8.2}}]},1).to({state:[{t:this.ship_2,p:{y:-9.4}}]},1).to({state:[{t:this.ship_2,p:{y:-10.6}}]},1).to({state:[{t:this.ship_2,p:{y:-11.8}}]},1).to({state:[{t:this.ship_2,p:{y:-13}}]},1).to({state:[{t:this.ship_2,p:{y:-14.2}}]},1).to({state:[{t:this.ship_2,p:{y:-15.5}}]},1).to({state:[{t:this.ship_2,p:{y:-16.7}}]},1).to({state:[{t:this.ship_2,p:{y:-17.9}}]},1).to({state:[{t:this.ship_2,p:{y:-19.1}}]},1).to({state:[{t:this.ship_2,p:{y:-20.3}}]},1).to({state:[{t:this.ship_2,p:{y:-21.5}}]},1).to({state:[{t:this.ship_2,p:{y:-22.8}}]},1).to({state:[{t:this.ship_2,p:{y:-24}}]},1).to({state:[{t:this.ship_2,p:{y:-25.2}}]},1).to({state:[{t:this.ship_2,p:{y:-26.4}}]},1).to({state:[{t:this.ship_2,p:{y:-27.6}}]},1).to({state:[{t:this.ship_2,p:{y:-28.9}}]},1).to({state:[{t:this.ship_2,p:{y:-28.9}}]},1).to({state:[{t:this.ship_2,p:{y:-28.9}}]},1).to({state:[{t:this.ship_2,p:{y:-27.6}}]},1).to({state:[{t:this.ship_2,p:{y:-26.4}}]},1).to({state:[{t:this.ship_2,p:{y:-25.2}}]},1).to({state:[{t:this.ship_2,p:{y:-24}}]},1).to({state:[{t:this.ship_2,p:{y:-22.8}}]},1).to({state:[{t:this.ship_2,p:{y:-21.5}}]},1).to({state:[{t:this.ship_2,p:{y:-20.3}}]},1).to({state:[{t:this.ship_2,p:{y:-19.1}}]},1).to({state:[{t:this.ship_2,p:{y:-17.9}}]},1).to({state:[{t:this.ship_2,p:{y:-16.7}}]},1).to({state:[{t:this.ship_2,p:{y:-15.5}}]},1).to({state:[{t:this.ship_2,p:{y:-14.2}}]},1).to({state:[{t:this.ship_2,p:{y:-13}}]},1).to({state:[{t:this.ship_2,p:{y:-11.8}}]},1).to({state:[{t:this.ship_2,p:{y:-10.6}}]},1).to({state:[{t:this.ship_2,p:{y:-9.4}}]},1).to({state:[{t:this.ship_2,p:{y:-8.2}}]},1).to({state:[{t:this.ship_2,p:{y:-6.9}}]},1).to({state:[{t:this.ship_2,p:{y:-5.7}}]},1).to({state:[{t:this.ship_2,p:{y:-4.5}}]},1).to({state:[{t:this.ship_2,p:{y:-3.3}}]},1).to({state:[{t:this.ship_2,p:{y:-2.1}}]},1).to({state:[{t:this.ship_2,p:{y:-0.9}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-215.9,-89.4,432.1,179.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;