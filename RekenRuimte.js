(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.RekenRuimte = function() {
	this.initialize();

	// Laag 1
	this.instance = new lib.mcBoard();
	this.instance.setTransform(184.1,151,1,1,0,0,0,-0.9,11);

	this.instance_1 = new lib.mcPlanet();
	this.instance_1.setTransform(409,223.1,1,1,0,0,0,0,-2.9);

	this.instance_2 = new lib.mcSpiral();
	this.instance_2.setTransform(322.1,48.4,1,1,0,0,0,11,25);

	this.instance_3 = new lib.mcRock();
	this.instance_3.setTransform(471.1,88,1,1,0,0,0,-0.9,0);

	this.instance_4 = new lib.mcRocketShip();
	this.instance_4.setTransform(84,302.1,1,1,0,0,0,1.6,-20);

	this.instance_5 = new lib.mcNotify();
	this.instance_5.setTransform(99,62,1,1,0,0,0,2,0.7);

	this.instance_6 = new lib.mcStar();
	this.instance_6.setTransform(421,59);

	this.instance_7 = new lib.mcMoon();
	this.instance_7.setTransform(301,325);

	this.spaceShip = new lib.mcSpaceShip();
	this.spaceShip.setTransform(275,123.1,1,1,0,0,0,0,1);

	this.addChild(this.spaceShip,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-136.7,8.1,708.8,402.5);


// symbols:
(lib.Image_0 = function() {
	this.initialize(img.Image_0);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,149);


(lib.Timeline1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(29,0,1).p("AAfhuQADAAAEABQADACADACQADACACABQABABAAABQAAAHgGABQgGACgIAAQgDAAgEgBQgDAAgDgBQgDgBgCgCQgBgCgBgDQABgEABgCQACgCADgBQADgBADAAQAEAAADAAIABAAQAHAAAHAAQAHAAAGABQAGABADACQADACAAAEQABADgDAEQgCADgEADQgFADgIACQgHABgMABQgGAAgHgBQgGAAgHgBQgEgBgGgCQgFgCgDgEQgDgEgBgFQAAgEADgDQACgEAEgEQAFgEAEgEQAGgDAIgCQAHgCAJAAQANAAALABQAMABAKACQAKADAIADQAIAEAEAFQAEAFAAAGQADAGgBAHQgCAGgGAHQgGAGgLAGQgKAFgOADQgPADgSABQgTAAgRgEQgTgEgSgGQgRgHgMgJQgMgJgEgLQgCgIACgIQADgIAGgIQAHgIALgHQAKgHAOgFQAPgFARgDQAPgDAUAAQAXgDAWABQAWAAAUAEQAVAEARAGQASAGAOAJQANAJAJAKQAJALACANQADAMgEANQgEANgLANQgKAMgQAMQgQALgWAJQgWAHgcAHQgbAGghADQgrAAgugIQgugHgogNQgogPgbgXQgcgWgIgeQgFgVAGgTQAGgUAPgSQAPgSAZgQQAYgPAhgNQAhgMAogIQApgIAtgCQAwgFAwACQAwACAuAJQAtAJAoAPQApAPAgAVQAgAUAVAaQAWAZAHAfQAIAegJAeQgJAegXAaQgYAcgmAZQglAYgzATQgyATg+AMQg+AMhJADQgyADg2gBQg1gCg1gHQg1gHgygMQgxgNgugQQgtgRgmgWQgngVgegaQgegYgUgeQgUgegIghQgMguANgsQAMgtAkgqQAjgrA4glQA5glBLgdQBMgeBcgUQBdgUBpgHQBvgIBuAIQBuAIBnAWQBoAWBbAjQBbAjBJAvQBJAvAwA6QAxA6ARBEQASBDgUBCQgUBEg2A/Qg2BAhWA4QhWA4hzAsQhzAtiNAdQiNAdimALQibALiMgGQiNgFiAgWQiAgVh4gmQh4glh0g0AAehaIgKgKQABAAABgBQABAAACgBQACgBACgCQABgCAAgDAAohkQAAAAAAABQAAACgBACQgBACgCABQgCABgEAB");
	this.shape.setTransform(126.9,65.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(25,14.7,203.8,101.1);


(lib.star = function() {
	this.initialize();

	// Laag 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#FFFFFF").ss(2,0,1).p("ACgjlIhGCgICqgUIAAAAIiWBZICgBPIAAABIi0gUIBQCfIAAABIiCh4IgeC0IAAAAIgniqIiBB4IgBAAIBGigIiqAUIAAAAICWhaIighOIAAgBIC0AUIhQifIAAgBICCB4IAei0IAAAAIAnCqICBh4IABAA").cp();
	this.shape_1.setTransform(0.5,0.5);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.4,-27.5,54.1,56.1);


(lib.RocketShipInCorrect = function() {
	this.initialize();

	// Laag 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AGVAXQgLAEgPADQgOAEgSADQgRADgUADQgNACgPACIjMAPIilAAQgVgCgVAAQgVgCgTgBQgUAAgTgCQgSgCgSgCQgSgBgQgDQgRgCgOgCQgPgCgOgDQgOgCgLgCQgMgDgLgCQgKgDgIgDQgJgDgGgDQgHgCgEgDQgJgHAAgFQAAgHAPgHQAIgEAMgEQALgEAOgDQAPgEARgDQARgDAVgDQANgCAOgCIFBgPIDzAPQAPACANACQAUADARADQASADAOAEQAPADALAEQALAEAIAEQAQAHAAAHQAAAIgQAIQgIAEgLADIAAAA").cp();
	this.shape_2.setTransform(44.1,64);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().dr(-12.5,-9,25,18);
	this.shape_3.setTransform(168.3,117.4,0.688,0.786);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().dr(-12.5,-9,25,18);
	this.shape_4.setTransform(184.2,73.4,0.688,0.786);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().dr(-12.5,-9,25,18);
	this.shape_5.setTransform(185.6,103.2,0.688,0.786);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah8gsID5AAIAAAAIAABZIAAAAIgfAAIgfgCIgggBIgfgCIgegCIgggCIgfgBIgfAAIAAhPIAAAA").cp();
	this.shape_6.setTransform(185.6,128,0.688,0.786);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhAAHIg8gHIAAgdIAAAAID5AAIAAAAIAAA7IAAAAIhCgIIg9gHIg+gI").cp();
	this.shape_7.setTransform(151.1,126.8,0.688,0.786);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah8hFIAfAAIAfgBIAggCIAegCIAfgCIAggBIAfgCIAfAAIAAAAIAACfIAAAAIj5AAIAAAAIAAiVIAAAA").cp();
	this.shape_8.setTransform(185.6,15.3,0.688,0.786);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AB9hAIAACBIAAAAIj5AAIAAAAIAAhjIA8gHIA+gIIA9gHIBCgIIAAAA").cp();
	this.shape_9.setTransform(151.1,16.4,0.688,0.786);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().dr(-12.5,-9,25,18);
	this.shape_10.setTransform(185.6,44.3,0.688,0.786);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().dr(-12.5,-9,25,18);
	this.shape_11.setTransform(149.8,73.4,0.688,0.786);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().dr(-12.5,-9,25,18);
	this.shape_12.setTransform(168.3,88.3,0.688,0.786);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().dr(-12.5,-9,25,18);
	this.shape_13.setTransform(151.2,103.2,0.688,0.786);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().dr(-12.5,-9,25,18);
	this.shape_14.setTransform(168.3,58.5,0.688,0.786);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().dr(-12.5,-9,25,18);
	this.shape_15.setTransform(168.3,29.4,0.688,0.786);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().dr(-12.5,-9,25,18);
	this.shape_16.setTransform(151.2,44.3,0.688,0.786);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CCCCCC").s().p("AOrh0QAUgeAAgmIABAAQAAAagJAYQgJAYgRAXQgQAYgZAWQgMALgOALQgOAKgQAJQgPAKgRAKQgSAKgTAJQgSAJgVAJQgUAJgWAJQgVAIgYAIQgXAIgYAHQgYAIgaAGQgZAHgbAGQgbAGgcAGQgbAFgdAFQgcAFgeAEQgeAEgeADQgVADgUABQgVACgVACIgqACQgVACgWAAQgWABgWAAQgVABgWAAQg/AAg/gEQg/gDg8gGQg7gGg5gJQg5gJg0gMQg1gMgwgOQgwgOgrgQQhXghhAgoQg/gmglguQgkgugGgzIAAAAQAFAkAVAdQAVAdAlAWQAmAXAzARQAzASBAAKQAVAFAXADQAWAEAYADQAYAEAZACQAZADAZADQAaACAbACQAcACAbACIA5ADIA7ACIA8ACIA8ABIA+ABIA/AAIAEAAIAGAAIA8AAIA+gBIA9gBIA+gCIA8gCIA6gDQAdgCAcgCQAcgCAbgDQAbgCAagDQAagDAYgDQAZgEAYgEQAXgEAWgEQBDgLA1gSQA2gSAmgYQAmgYAUgeIAAAA").cp();
	this.shape_17.setTransform(294.7,79.3,0.688,0.786);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AL4ihQASAKASAKQARAKAPAKQAQALAOALQAOALAMALQAZAXARAYQAQAYAJAYQAJAZAAAbQAAAlgUAfQgUAeglAYQgmAYg1ASQg0AShDANQgWAEgXAEQgXAEgZADQgZAEgaADQgaADgaACQgbADgcACQgcACgdACIg7ADIg9ACIg+ACIg9ABIg/ABIg+AAIgLAAIhBAAIg/gBIg+gBIg+gCIg8gCQgegCgdgBQgcgCgcgCQgbgCgbgDQgagCgZgDQgagDgYgEQgYgDgWgEQgXgEgVgEQhAgNgzgSQgygSgjgYQgkgYgSgeQgTgfAAglQAAgbAJgZQAJgYAQgYQARgYAZgXQAMgLAOgLQAOgLAQgLQAPgKARgKQASgKASgKQATgKAUgJQAVgJAWgIQAVgJAYgIQAXgIAYgIQAYgHAagHQAZgHAbgGQAbgGAbgGQAcgFAdgFQAcgFAegEQAegEAegDQAfgEAfgCQAfgDAggBQAVgCAWAAQAWgBAWAAQAVgBAVAAQAWAAAVABQAWAAAWABQAWAAAVACQAVABAVABQAVACAVACQAUACAVACQAeADAeAEQAeAEAcAFQAdAFAcAFQAbAGAbAGQAbAGAZAHQAaAHAYAHQAYAIAXAIQAYAIAVAJQAWAIAVAJQAUAJATAKIAAAA").cp();
	this.shape_18.setTransform(294.7,59.3,0.688,0.786);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s("#FF0000").ss(1,0,1).p("AL4jiQASAKASAKQARAKAPAKQAQALAOALQAOALAMALQAZAXARAYQAQAYAJAaQAJAZAAAZQAAAZgJAYQgJAYgQAYQgRAXgZAWQgMALgOALQgOAKgQALQgPAKgRAKQgSAKgSAJQgTAJgUAKQgVAIgWAJQgVAIgYAIQgXAIgYAIQgYAHgaAHQgZAGgbAGQgbAGgbAGQgcAFgdAFQgcAFgeAEQgeAEgeADQgfAEgfACQgfADggACQgVABgWAAQgWABgWABQgVAAgWAAQgwAAgxgCQgwgCgvgEQgvgEgtgFQgtgGgrgHQgrgHgpgJQgpgIgmgKQhNgVhBgZQhCgag0gdQg0gegkghQglghgTgkQgUgkAAglQAAgZAJgZQAJgaAQgYQARgYAZgXQAMgLAOgLQAOgLAQgLQAPgKARgKQASgKASgKQATgKAUgJQAVgJAWgIQAVgJAYgIQAXgIAYgIQAYgHAagHQAZgHAbgGQAbgGAbgGQAcgFAdgFQAcgFAegEQAegEAegDQAfgEAfgCQAfgDAggBQAVgCAWAAQAWgBAWAAQAVgBAVAAQAWAAAVABQAWAAAWABQAWAAAVACQAVABAVABQAVACAVACQAUACAVACQAeADAeAEQAeAEAcAFQAdAFAcAFQAbAGAbAGQAbAGAZAHQAaAHAYAHQAYAIAXAIQAYAIAVAJQAWAIAVAJQAUAJATAKIAAAA").cp();
	this.shape_19.setTransform(294.7,64.4,0.688,0.786);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AQqpEQA9AGA7AGQA8AGA6AGQA7AHA5AHQA5AHA3AIQA3AIA2AIQA2AJA0AJQA0AJAzAJQBLAOBIAQQBIAPBDARQBDAQA/ASQA/ASA6ASQA6ATA2AUQA1AUAxAVQAwAUArAWQArAWAlAXQBLAtA0AxQA0AxAbAzQAbA0AAA3QAAApgPAlQgPAlgeAhQgdAhgrAdQgrAdg4AZQg4AZhEAWQgXAHgYAHQgYAHgZAHQgaAHgaAGQgaAGgcAGQgcAGgdAFQgdAGgeAFQgeAGgfAFQggAFggAEQghAFghAEQgiAFgiAEQgjAEgkAEQgjADglAEIhKAHIrvApIsEAMIsxAAItOgQIo5ggQgmgDgkgDQglgEgjgDQgkgEgigEQgigEghgEQghgEgggFQghgEgegFQgfgFgegFQgegFgcgFQgdgGgbgGQgbgFgagHQgbgGgYgGQgZgHgXgHQhGgUg6gZQg6gYgsgcQgtgcgeggQgeghgQgkQgQglAAgpQAAg3Acg1QAbgzA0gyQA1gyBMgvQAmgXAsgXQArgXAxgVQAxgWA2gVQA2gUA7gUQA7gUBAgSQA/gTBFgRQBDgSBJgQQBJgRBMgPQBMgPBRgOQBQgOBUgMQA3gIA6gIQA6gIA7gHQA7gHA8gGQA8gHA+gGQA9gFBAgGQA/gFBAgEQA/gFBCgDQBBgEBDgDQBCgDBDgDQBDgCBFgBQBEgCBGgBQBFAABEAAQBFAABFAAQBFABBEABQBEACBCACQBDACBCADQBCADBBADQBAADBAAFQA/AEA/AEQA+AFA+AFIAAAA").cp();
	this.shape_20.setTransform(226.2,57.3,0.688,0.786);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#990000").s().p("AQjrkQA+AGA8AHQA8AGA7AHQA7AIA6AIQA5AIA4AIQBTANBRAOQBRAOBMAQQBMAPBJARQBJAQBEASQBEASBAATQBAATA7AUQA7AUA3AVQA2AVAxAWQAxAWAsAWQAsAYAmAXQBMAwA1AyQA1AyAbA1QAcA1AAA2QAAA3gcA1QgbA1g1AyQg1AyhMAwQgmAXgsAXQgsAXgxAWQgxAWg2AVQg3AVg7AUQg7AUhAATQhAAThEASQhEAShJAQQhJARhMAPQhMAQhRAOQhRAOhTANQg4AIg5AIQg6AIg7AHQg7AIg8AGQg8AHg+AGQg9AGg/AFQg/AFhAAFQhAAEhBAEQhBAEhCADQhCADhDADQhDAChEACQhEABhFABQhFABhFAAQgzAAg0gBQg0AAg0gBQg0gBgzgBQgygCgzgBQgzgCgygCQgygCgxgDQgxgDgxgDQgxgDgxgDQgwgDgvgEQgvgEgvgEQgvgFgugEQgvgFgtgFQgtgFgtgFQgsgFgsgGQgsgGgrgGQgrgGgqgGQgqgHgpgGQgpgHgpgHQgogHgngIQgngHgngIQgmgHgmgIQglgIgkgJQglgIgjgJQgkgIgigJQgigJghgJQghgKgggJQgggJgfgKQgfgKgdgKQgegKgcgKQgdgKgbgLQgbgKgagLQgagLgZgLQgYgLgXgLQhGgig6gjQg5gkgsglQgsglgfgnQgegngPgoQgQgoAAgpQAAg2Acg1QAbg1A1gyQA1gyBMgwQAngXArgYQAsgWAxgWQAygWA2gVQA3gVA7gUQA7gUBAgTQBAgTBEgSQBFgSBJgQQBIgRBNgPQBNgQBQgOQBRgOBUgNQA4gIA6gIQA6gIA7gIQA7gHA8gGQA9gHA9gGQA+gGA/gFQBAgFBAgFQBAgEBBgEQBCgEBCgDQBDgDBDgDQBDgCBEgCQBFgBBGgBQBFgBBEAAQBFAABFABQBFABBEABQBEACBDACQBDADBCADQBCADBBAEQBBAEBAAEQBAAFA/AFQA/AFA9AGIAAAA").cp();
	this.shape_21.setTransform(226.9,70.3,0.688,0.786);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#666666").s().p("Al1jdIBUgWICigUIAzgDIBSAFQAMABANACQANACAOACQAOACAOADQAOACAOADQAOADAPADQAOAEAPAEQAOAEAPAFQAOAEAOAFQAOAFAOAGQAOAFANAGQANAHAMAGQANAHAMAIQALAHALAIQALAIAJAJQATARAOAVQAOAUAIAXQAHAYABAZQgBAlgSAiQgTAigiAeQgiAegvAYQgvAYg6ASQgcAIgfAHQgfAHghAEQggAFghADQgiACgjAAQgSAAgRgBQgRgBgRAAQgRgCgRgBQgQgCgQgDQgQgCgPgCQgPgDgOgDQgPgEgNgDQgOgEgMgEQgMgEgMgEQgLgFgKgEQgKgFgJgFQgJgGgHgFQgPgLgIgMQgIgMgCgMQgBgNAHgNQAGgOAQgNQAPgOAZgOQAMgHAPgHQAPgHASgGIAOAAIAHgYQACgNgFgLQgFgOgJgMQgGgHgFgGQgGgHgGgGQgHgGgGgGQgIgHgHgGIgcgXQgHgGgGgGQgGgFgGgGQgFgFgFgFQgEgGgEgFQgGgJAAgKQAAgGADgGQAEgGAGgGQADgDAEgCQAEgDAFgCQAEgDAFgDQAFgCAGgCQAGgDAGgCIAAAA").cp();
	this.shape_22.setTransform(44.3,114.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#666666").s().p("AizkFQARgCARgBQARgBARgBQARAAASAAQAjAAAiACQAhADAgAEQAhAFAfAGQAfAHAcAJQA6ARAvAYQAvAYAiAeQAiAeATAjQASAiABAkQAAAJgBAKQgCAJgCAJQgCAJgDAJQgDAJgEAIQgEAIgFAHQgFAIgGAIQgGAHgGAHQgHAIgHAGQgHAGgIAHQgIAGgIAFQgIAGgJAGQgJAFgKAFQgJAFgJAFQgKAFgKAEQgKAFgLAEQgKAEgLADQgKAEgLAEQgLAEgLADIgVAFQgLADgLADIgrAJIh0ARIgvADIhZgFIiigYQgKgCgKgCQgJgEgJgBQgJgEgIgCQgJgDgHgDQgHgDgHgEQgGgDgGgDQgFgEgFgDQgEgEgDgEQgGgIAAgJQAAgJAGgJQAEgGAEgFQAFgFAFgGQAGgFAGgGQAGgFAHgGIAcgYQAHgGAIgFQAGgHAHgGQAGgHAGgGQAFgHAGgGQAJgNAFgNQAFgLgCgOIgHgXIgOAAQgSgHgPgHQgPgHgMgGQgZgOgPgOQgQgOgGgNQgHgOABgMQACgNAIgMQAIgMAPgKQAHgGAJgFQAJgFAKgFQAKgFALgEQAMgFAMgEQAMgEAOgDQANgEAPgDQAOgEAPgCQAPgDAQgCQAQgCAQgCIAAAA").cp();
	this.shape_23.setTransform(44.3,24.7);

	this.addChild(this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,-2,435.1,143.1);


(lib.RocketShipCorrect = function() {
	this.initialize();

	// Laag 3
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AGbA8IjzASIknABQgegBgegBQgfgCgcgBQgdgCgbgCQgbgCgagCQgZgCgYgDQgYgDgWgDQgWgCgTgDQgUgDgRgEQgSgDgPgDQgPgDgMgEQgMgEgKgDQgJgEgGgEQgOgHAAgIQABgIAXgKQALgFAQgFQARgEAVgFQAVgEAZgEQAZgEAdgEQAUgDAUgCIC+gPIEVgFIFiAUQAUACAUADQAdAEAZAEQAZAEAVAEQAVAFARAEQAQAFALAFQAXAKABAIQgBALgXAJQgLAFgQAFQgRAFgVAEQgVAFgZAEQgZAEgdADQgUADgUACIAAAA").cp();
	this.shape_24.setTransform(44.1,63.9,0.688,0.786);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().dr(-12.5,-9,25,18);
	this.shape_25.setTransform(168.3,117.4,0.688,0.786);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().dr(-12.5,-9,25,18);
	this.shape_26.setTransform(184.2,73.4,0.688,0.786);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().dr(-12.5,-9,25,18);
	this.shape_27.setTransform(185.6,103.2,0.688,0.786);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ah8gsID5AAIAAAAIAABZIAAAAIgfAAIgfgCIgggBIgfgCIgegCIgggCIgfgBIgfAAIAAhPIAAAA").cp();
	this.shape_28.setTransform(185.6,128,0.688,0.786);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhAAHIg8gHIAAgdIAAAAID5AAIAAAAIAAA7IAAAAIhCgIIg9gHIg+gI").cp();
	this.shape_29.setTransform(151.1,126.8,0.688,0.786);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ah8hFIAfAAIAfgBIAggCIAegCIAfgCIAggBIAfgCIAfAAIAAAAIAACfIAAAAIj5AAIAAAAIAAiVIAAAA").cp();
	this.shape_30.setTransform(185.6,15.3,0.688,0.786);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AB9hAIAACBIAAAAIj5AAIAAAAIAAhjIA8gHIA+gIIA9gHIBCgIIAAAA").cp();
	this.shape_31.setTransform(151.1,16.4,0.688,0.786);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().dr(-12.5,-9,25,18);
	this.shape_32.setTransform(185.6,44.3,0.688,0.786);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().dr(-12.5,-9,25,18);
	this.shape_33.setTransform(149.8,73.4,0.688,0.786);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().dr(-12.5,-9,25,18);
	this.shape_34.setTransform(168.3,88.3,0.688,0.786);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().dr(-12.5,-9,25,18);
	this.shape_35.setTransform(151.2,103.2,0.688,0.786);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().dr(-12.5,-9,25,18);
	this.shape_36.setTransform(168.3,58.5,0.688,0.786);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().dr(-12.5,-9,25,18);
	this.shape_37.setTransform(168.3,29.4,0.688,0.786);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().dr(-12.5,-9,25,18);
	this.shape_38.setTransform(151.2,44.3,0.688,0.786);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CCCCCC").s().p("AOrh0QAUgeAAgmIABAAQAAAagJAYQgJAYgRAXQgQAYgZAWQgMALgOALQgOAKgQAJQgPAKgRAKQgSAKgTAJQgSAJgVAJQgUAJgWAJQgVAIgYAIQgXAIgYAHQgYAIgaAGQgZAHgbAGQgbAGgcAGQgbAFgdAFQgcAFgeAEQgeAEgeADQgVADgUABQgVACgVACIgqACQgVACgWAAQgWABgWAAQgVABgWAAQg/AAg/gEQg/gDg8gGQg7gGg5gJQg5gJg0gMQg1gMgwgOQgwgOgrgQQhXghhAgoQg/gmglguQgkgugGgzIAAAAQAFAkAVAdQAVAdAlAWQAmAXAzARQAzASBAAKQAVAFAXADQAWAEAYADQAYAEAZACQAZADAZADQAaACAbACQAcACAbACIA5ADIA7ACIA8ACIA8ABIA+ABIA/AAIAEAAIAGAAIA8AAIA+gBIA9gBIA+gCIA8gCIA6gDQAdgCAcgCQAcgCAbgDQAbgCAagDQAagDAYgDQAZgEAYgEQAXgEAWgEQBDgLA1gSQA2gSAmgYQAmgYAUgeIAAAA").cp();
	this.shape_39.setTransform(294.7,79.3,0.688,0.786);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AILh+QANAHAMAIQALAIALAIQALAJAKAIQAJAJAJAJQAQASALATQANATAFASQAGATABAVQgBAegOAYQgNAYgZATQgbASgkAPQgkAOguAKQgPADgQADQgQADgRADQgSADgRACQgSACgSACQgTACgTACQgTACgUABIkEAHIjXgFQgVgBgTgBQgUgBgTgCQgTgCgSgCQgTgCgRgCQgSgCgQgDQgQgDgQgDQgPgDgPgDQgsgLgjgNQgigPgZgSQgYgTgNgYQgNgYAAgeQAAgVAGgTQAGgSAMgTQALgTASgSQAHgJAKgJQAKgIAKgJQALgIAMgIQAMgIANgHQANgIAOgHQAOgHAPgHQAPgHAQgGQAQgHARgFQAQgGASgGQASgFASgFQASgFATgEQATgEAUgEQATgEAWgDQAUgDAVgDQAUgCAWgCQAWgDAVgBQAPgBAPAAQAPgBAPAAQAPgBAOABQAPgBAPABQAPAAAPABQAOAAAPABQAPABAOABQAPACAOABQAOABAOACQAVADAUADQAUADAUAEQAUAEATAEQAUAEASAFQASAFASAFQARAGASAGQAQAFAQAHQAPAGAPAHQAPAHAPAHQAOAHANAIIAAAA").cp();
	this.shape_40.setTransform(294.7,59.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s("#FF0000").ss(1,0,1).p("AL4jiQASAKASAKQARAKAPAKQAQALAOALQAOALAMALQAZAXARAYQAQAYAJAaQAJAZAAAZQAAAZgJAYQgJAYgQAYQgRAXgZAWQgMALgOALQgOAKgQALQgPAKgRAKQgSAKgSAJQgTAJgUAKQgVAIgWAJQgVAIgYAIQgXAIgYAIQgYAHgaAHQgZAGgbAGQgbAGgbAGQgcAFgdAFQgcAFgeAEQgeAEgeADQgfAEgfACQgfADggACQgVABgWAAQgWABgWABQgVAAgWAAQgwAAgxgCQgwgCgvgEQgvgEgtgFQgtgGgrgHQgrgHgpgJQgpgIgmgKQhNgVhBgZQhCgag0gdQg0gegkghQglghgTgkQgUgkAAglQAAgZAJgZQAJgaAQgYQARgYAZgXQAMgLAOgLQAOgLAQgLQAPgKARgKQASgKASgKQATgKAUgJQAVgJAWgIQAVgJAYgIQAXgIAYgIQAYgHAagHQAZgHAbgGQAbgGAbgGQAcgFAdgFQAcgFAegEQAegEAegDQAfgEAfgCQAfgDAggBQAVgCAWAAQAWgBAWAAQAVgBAVAAQAWAAAVABQAWAAAWABQAWAAAVACQAVABAVABQAVACAVACQAUACAVACQAeADAeAEQAeAEAcAFQAdAFAcAFQAbAGAbAGQAbAGAZAHQAaAHAYAHQAYAIAXAIQAYAIAVAJQAWAIAVAJQAUAJATAKIAAAA").cp();
	this.shape_41.setTransform(294.7,64.4,0.688,0.786);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#006600").s().p("Ad0iKQA0AkAkAnQAjAmATAnQASApAAArQAAAhgKAdQgLAdgUAaQgUAagdAWQgeAXgnAUQgmAUgvARQgQAGgQAFQgRAGgRAFQgSAFgSAFQgSAFgTAEQgTAFgUAEQgUAFgVAEQgVAEgVAEQgWAEgWAEQgXADgWAEQgXADgYAEQgYADgZADQgYADgZACIjVAUIkmAQIoLALIvEgEImpgQIjZgRQgagDgZgCQgZgDgYgCQgZgEgXgCQgYgDgXgEQgXgDgWgEQgWgDgVgEQgVgEgVgEQgUgEgUgEQgUgEgSgFQgTgFgSgEQgSgFgRgFQgRgGgQgFQgwgQgogTQgogTgegWQgfgWgVgaQgVgZgLgdQgLgcABghQAAgrASgqQATgnAkgnQAlgoA0glQAagSAegSQAegSAigRQAhgRAmgQQAlgRAogPQApgPAsgPQAsgPAvgNQAugOAygNQAygNA1gMQA0gLA4gLQA3gLA6gKQAmgHAogGQAngGApgFQAogGAqgFQApgFArgFQAqgEAsgEQArgEAsgEQAsgDAtgDQAtgDAugDQAugCAugCQAugCAvgBQAvgBAwgBQAwAAAuAAQAwAAAvAAQAvABAvABQAvABAuACQAuABAtADQAtACAtACQAtADAsAEQArADArADQArAEAqAEQAqAFAqAEQApAFAoAFQAoAFAnAGQAoAGAlAGQAmAGAlAGQAmAHAjAHQAkAHAjAHQA0ALAyANQAxAMAuANQAuANAsAOQArAOAoAOQAoAPAlAQQAlAPAhARQAhAQAeARQAeARAZASIAAAA").cp();
	this.shape_42.setTransform(226.2,57.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#003300").s().p("AdGkWQAeASAbATQA0AkAlAoQAkAoATApQATAqAAAqQAAArgTAqQgTApgkAoQglAng0AmQgbASgeASQgeASgiARQghARgmARQglARgpAPQgpAQgsAPQgsAPguAOQgwANgyAOQgxANg1AMQg1AMg3ALQg4ALg5AKQgnAHgnAGQgoAGgoAGQgpAGgpAFQgqAFgqAFQgrAEgrAFQgrAEgsADQgsAEgtADQgtADgtADQguACguACQguACgvABQgvABgvABQgvAAgwAAQgiAAgkAAQgkAAgjgBQgkgBgjgBQgjgBgjgBQgjgCgigBQgjgCgigCQgigCghgCQgigDghgDQghgCghgDQghgDgggDQgggEgggDQgggEgfgEQgfgEgfgEQgegEgfgFQgegEgdgFQgegFgdgFQgdgFgcgFQgdgFgbgGQgcgFgbgGQgbgGgbgGQgagGgagGQgagHgYgGQgagHgYgHQgYgHgYgGQgXgHgXgHQgXgIgWgHQgWgIgVgHQgVgIgVgIQgUgHgUgJQgUgIgSgIQgTgIgSgJQgSgIgQgJQgRgJgQgIQgwgbgogbQgogdgegdQgegdgVgfQgVgegKggQgLgfAAggQAAgqATgqQASgpAlgoQAkgoA1gkQAagTAfgSQAegSAigRQAhgSAmgQQAlgRApgPQApgQAsgPQAsgPAvgOQAvgOAygNQAygNA1gMQA1gMA4gMQA3gLA6gJQAmgHAogGQAogHApgGQAogFAqgFQApgGArgEQArgFArgEQArgEAtgEQAsgDAtgDQAtgDAugDQAugCAugCQAugCAvgBQAvgCAwAAQAwgBAuABQAwgBAvABQAvAAAvACQAvABAuACQAuACAuACQAtADAtADQAtADAsADQAsAEArAEQArAEArAFQAqAEAqAGQApAFApAFQAoAGAoAHQAnAGAnAHQA5AJA4ALQA3AMA1AMQA1AMAxANQAyANAwAOQAuAOAsAPQAsAPApAQQApAPAlARQAmAQAhASQAiARAeASIAAAA").cp();
	this.shape_43.setTransform(226.9,70.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#666666").s().p("AHCjhQASAJARAJQARAJAQALQAPAKAOALQAcAWAUAaQAVAaALAeQAKAeABAgQgBAvgaAsQgbArgyAmQgxAmhFAfQhEAfhUAWQgqALgsAIQgtAJgwAGQgvAGgwADQgxADg0AAQgZAAgZgBQgagBgYgBQgZgCgYgCQgYgCgXgDQgXgDgWgDQgWgEgUgEQgVgEgUgFQgTgEgSgFQgSgGgRgFQgQgGgPgGQgOgGgNgGQgNgHgKgHQgWgOgMgPQgMgPgCgQQgCgQAKgRQAJgRAXgSQAWgRAkgSQASgJAWgIQAWgJAZgJIAUAAIAKgeQADgQgGgPQgHgRgOgQQgHgJgJgIQgIgIgKgIQgJgIgKgIQgKgIgKgIIgpgeQgKgHgJgHQgJgHgIgHQgIgHgHgHQgGgGgFgHQgKgMAAgMQAAgIAFgIQAFgIAKgHQAEgDAGgEQAFgDAHgDQAHgEAHgDQAHgDAJgDQAIgDAJgCIB6gcIEkgeICJAGQASACATACQATADAUACQAUADAUADQAUADAVAEQAVAEAVAEQAVAFAVAFQAVAFAVAGQAVAFAVAHQAUAGAUAHQAUAIATAHQATAIASAJIAAAA").cp();
	this.shape_44.setTransform(44.2,114.3,0.688,0.786);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#666666").s().p("AIWisQAyAnAbArQAaAsABAuQAAAMgCAMQgCAMgDAMQgDALgEALQgFALgGALQgGAKgHAKQgHAKgIAJQgJAKgJAJQgKAIgKAJQgKAIgMAIQgLAIgMAHQgMAIgNAHQgNAHgOAGQgNAGgOAHQgPAGgOAFQgPAGgPAFQgPAFgPAFQgQAFgPAEQgQAFgQAEIgfAHQgQAEgQAEIjoAgIhhAEIkygfIgdgGQgPgDgOgDQgOgDgMgDQgNgDgMgEQgNgEgKgEQgLgDgKgEQgJgFgIgEQgIgEgGgFQgHgFgEgFQgJgKAAgLQAAgMAKgNQAFgGAGgGQAHgHAIgHQAIgHAJgHQAJgHAKgHIApgfQAKgHAKgIQAKgIAJgIQAKgIAIgIQAJgIAHgJQAOgQAHgRQAGgPgDgRIgKgdIgUAAQgZgJgWgJQgWgJgSgIQgkgSgWgRQgXgSgJgRQgKgRACgQQACgQAMgPQAMgPAWgOQAKgHANgHQANgGAOgGQAPgGAQgGQARgGASgFQASgFATgEQAUgFAVgEQAUgEAWgEQAWgDAXgDQAXgDAYgCQAYgCAZgCQAYgBAagBQAZgBAZAAQA0AAAxADQAwADAvAGQAwAGAtAIQAsAJAqALQBUAWBEAfQBFAfAxAlIAAAA").cp();
	this.shape_45.setTransform(44.2,24.7,0.688,0.786);

	this.addChild(this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,-2,435.1,143.1);


(lib.RocketShip = function() {
	this.initialize();

	// Laag 3
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#666666").s().p("AGbA8IjzASIknABQgegBgegBQgfgCgcgBQgdgCgbgCQgbgCgagCQgZgCgYgDQgYgDgWgDQgWgCgTgDQgUgDgRgEQgSgDgPgDQgPgDgMgEQgMgEgKgDQgJgEgGgEQgOgHAAgIQABgIAXgKQALgFAQgFQARgEAVgFQAVgEAZgEQAZgEAdgEQAUgDAUgCIC+gPIEVgFIFiAUQAUACAUADQAdAEAZAEQAZAEAVAEQAVAFARAEQAQAFALAFQAXAKABAIQgBALgXAJQgLAFgQAFQgRAFgVAEQgVAFgZAEQgZAEgdADQgUADgUACIAAAA").cp();
	this.shape_46.setTransform(44.1,63.9,0.688,0.786);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().dr(-12.5,-9,25,18);
	this.shape_47.setTransform(168.3,117.4,0.688,0.786);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().dr(-12.5,-9,25,18);
	this.shape_48.setTransform(184.2,73.4,0.688,0.786);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().dr(-12.5,-9,25,18);
	this.shape_49.setTransform(185.6,103.2,0.688,0.786);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("Ah8gsID5AAIAAAAIAABZIAAAAIgfAAIgfgCIgggBIgfgCIgegCIgggCIgfgBIgfAAIAAhPIAAAA").cp();
	this.shape_50.setTransform(185.6,128,0.688,0.786);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AhAAHIg8gHIAAgdIAAAAID5AAIAAAAIAAA7IAAAAIhCgIIg9gHIg+gI").cp();
	this.shape_51.setTransform(151.1,126.8,0.688,0.786);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("Ah8hFIAfAAIAfgBIAggCIAegCIAfgCIAggBIAfgCIAfAAIAAAAIAACfIAAAAIj5AAIAAAAIAAiVIAAAA").cp();
	this.shape_52.setTransform(185.6,15.3,0.688,0.786);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AB9hAIAACBIAAAAIj5AAIAAAAIAAhjIA8gHIA+gIIA9gHIBCgIIAAAA").cp();
	this.shape_53.setTransform(151.1,16.4,0.688,0.786);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().dr(-12.5,-9,25,18);
	this.shape_54.setTransform(185.6,44.3,0.688,0.786);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().dr(-12.5,-9,25,18);
	this.shape_55.setTransform(149.8,73.4,0.688,0.786);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().dr(-12.5,-9,25,18);
	this.shape_56.setTransform(168.3,88.3,0.688,0.786);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().dr(-12.5,-9,25,18);
	this.shape_57.setTransform(151.2,103.2,0.688,0.786);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().dr(-12.5,-9,25,18);
	this.shape_58.setTransform(168.3,58.5,0.688,0.786);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().dr(-12.5,-9,25,18);
	this.shape_59.setTransform(168.3,29.4,0.688,0.786);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().dr(-12.5,-9,25,18);
	this.shape_60.setTransform(151.2,44.3,0.688,0.786);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CCCCCC").s().p("AOrh0QAUgeAAgmIABAAQAAAagJAYQgJAYgRAXQgQAYgZAWQgMALgOALQgOAKgQAJQgPAKgRAKQgSAKgTAJQgSAJgVAJQgUAJgWAJQgVAIgYAIQgXAIgYAHQgYAIgaAGQgZAHgbAGQgbAGgcAGQgbAFgdAFQgcAFgeAEQgeAEgeADQgVADgUABQgVACgVACIgqACQgVACgWAAQgWABgWAAQgVABgWAAQg/AAg/gEQg/gDg8gGQg7gGg5gJQg5gJg0gMQg1gMgwgOQgwgOgrgQQhXghhAgoQg/gmglguQgkgugGgzIAAAAQAFAkAVAdQAVAdAlAWQAmAXAzARQAzASBAAKQAVAFAXADQAWAEAYADQAYAEAZACQAZADAZADQAaACAbACQAcACAbACIA5ADIA7ACIA8ACIA8ABIA+ABIA/AAIAEAAIAGAAIA8AAIA+gBIA9gBIA+gCIA8gCIA6gDQAdgCAcgCQAcgCAbgDQAbgCAagDQAagDAYgDQAZgEAYgEQAXgEAWgEQBDgLA1gSQA2gSAmgYQAmgYAUgeIAAAA").cp();
	this.shape_61.setTransform(294.7,79.3,0.688,0.786);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("ALRi0QAUAJATAKQASAKASAKQARAKAPAKQAQALAOALQAOALAMALQAZAXARAYQAQAYAJAYQAJAZAAAbQAAAlgUAfQgUAeglAYQgmAYg1ASQg0AShDANQgWAEgXAEQgXAEgZADQgZAEgaADQgaADgaACQgbADgcACQgcACgdACIg7ADIg9ACIg+ACIg9ABIg/ABIg+AAIgLAAIhBAAIg/gBIg+gBIg+gCIg8gCQgegCgdgBQgcgCgcgCQgbgCgbgDQgagCgZgDQgagDgYgEQgYgDgWgEQgXgEgVgEQhAgNgzgSQgygSgjgYQgkgYgSgeQgTgfAAglQAAgbAJgZQAJgYAQgYQARgYAZgXQAMgLAOgLQAOgLAQgLQAPgKARgKQASgKASgKQATgKAUgJQAVgJAWgIQAVgJAYgIQAXgIAYgIQAYgHAagHQAZgHAbgGQAbgGAbgGQAcgFAdgFQAcgFAegEQAegEAegDQAfgEAfgCQAfgDAggBQAVgCAWAAQAWgBAWAAQAVgBAVAAQAWAAAVABQAWAAAWABQAWAAAVACQAVABAVABQAVACAVACQAUACAVACQAeADAeAEQAeAEAcAFQAdAFAcAFQAbAGAbAGQAbAGAZAHQAaAHAYAHQAYAIAXAIQAYAIAVAJQAWAIAVAJIAAAA").cp();
	this.shape_62.setTransform(294.7,59.3,0.688,0.786);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s("#FF0000").ss(1,0,1).p("ALRj1QAUAJATAKQASAKASAKQARAKAPAKQAQALAOALQAOALAMALQAZAXARAYQAQAYAJAaQAJAZAAAZQAAAZgJAYQgJAYgQAYQgRAXgZAWQgMALgOALQgOAKgQALQgPAKgRAKQgSAKgSAJQgTAJgUAKQgVAIgWAJQgVAIgYAIQgXAIgYAIQgYAHgaAHQgZAGgbAGQgbAGgbAGQgcAFgdAFQgcAFgeAEQgeAEgeADQgfAEgfACQgfADggACQgVABgWAAQgWABgWABQgVAAgWAAQgwAAgxgCQgwgCgvgEQgvgEgtgFQgtgGgrgHQgrgHgpgJQgpgIgmgKQhNgVhBgZQhCgag0gdQg0gegkghQglghgTgkQgUgkAAglQAAgZAJgZQAJgaAQgYQARgYAZgXQAMgLAOgLQAOgLAQgLQAPgKARgKQASgKASgKQATgKAUgJQAVgJAWgIQAVgJAYgIQAXgIAYgIQAYgHAagHQAZgHAbgGQAbgGAbgGQAcgFAdgFQAcgFAegEQAegEAegDQAfgEAfgCQAfgDAggBQAVgCAWAAQAWgBAWAAQAVgBAVAAQAWAAAVABQAWAAAWABQAWAAAVACQAVABAVABQAVACAVACQAUACAVACQAeADAeAEQAeAEAcAFQAdAFAcAFQAbAGAbAGQAbAGAZAHQAaAHAYAHQAYAIAXAIQAYAIAVAJQAWAIAVAJIAAAA").cp();
	this.shape_63.setTransform(294.7,64.4,0.688,0.786);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#CC9900").s().p("AQqpEQA9AGA7AGQA8AGA6AGQA7AHA5AHQA5AHA3AIQA3AIA2AIQA2AJA0AJQA0AJAzAJQBLAOBIAQQBIAPBDARQBDAQA/ASQA/ASA6ASQA6ATA2AUQA1AUAxAVQAwAUArAWQArAWAlAXQBLAtA0AxQA0AxAbAzQAbA0AAA3QAAApgPAlQgPAlgeAhQgdAhgrAdQgrAdg4AZQg4AZhEAWQgXAHgYAHQgYAHgZAHQgaAHgaAGQgaAGgcAGQgcAGgdAFQgdAGgeAFQgeAGgfAFQggAFggAEQghAFghAEQgiAFgiAEQgjAEgkAEQgjADglAEIhKAHIrvApIsEAMIsxAAItOgQIo5ggQgmgDgkgDQglgEgjgDQgkgEgigEQgigEghgEQghgEgggFQghgEgegFQgfgFgegFQgegFgcgFQgdgGgbgGQgbgFgagHQgbgGgYgGQgZgHgXgHQhGgUg6gZQg6gYgsgcQgtgcgeggQgeghgQgkQgQglAAgpQAAg3Acg1QAbgzA0gyQA1gyBMgvQAmgXAsgXQArgXAxgVQAxgWA2gVQA2gUA7gUQA7gUBAgSQA/gTBFgRQBDgSBJgQQBJgRBMgPQBMgPBRgOQBQgOBUgMQA3gIA6gIQA6gIA7gHQA7gHA8gGQA8gHA+gGQA9gFBAgGQA/gFBAgEQA/gFBCgDQBBgEBDgDQBCgDBDgDQBDgCBFgBQBEgCBGgBQBFAABEAAQBFAABFAAQBFABBEABQBEACBCACQBDACBCADQBCADBBADQBAADBAAFQA/AEA/AEQA+AFA+AFIAAAA").cp();
	this.shape_64.setTransform(226.2,57.3,0.688,0.786);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#996633").s().p("AdGkWQAeASAbATQA0AkAlAoQAkAoATApQATAqAAAqQAAArgTAqQgTApgkAoQglAng0AmQgbASgeASQgeASgiARQghARgmARQglARgpAPQgpAQgsAPQgsAPguAOQgwANgyAOQgxANg1AMQg1AMg3ALQg4ALg5AKQgnAHgnAGQgoAGgoAGQgpAGgpAFQgqAFgqAFQgrAEgrAFQgrAEgsADQgsAEgtADQgtADgtADQguACguACQguACgvABQgvABgvABQgvAAgwAAQgiAAgkAAQgkAAgjgBQgkgBgjgBQgjgBgjgBQgjgCgigBQgjgCgigCQgigCghgCQgigDghgDQghgCghgDQghgDgggDQgggEgggDQgggEgfgEQgfgEgfgEQgegEgfgFQgegEgdgFQgegFgdgFQgdgFgcgFQgdgFgbgGQgcgFgbgGQgbgGgbgGQgagGgagGQgagHgYgGQgagHgYgHQgYgHgYgGQgXgHgXgHQgXgIgWgHQgWgIgVgHQgVgIgVgIQgUgHgUgJQgUgIgSgIQgTgIgSgJQgSgIgQgJQgRgJgQgIQgwgbgogbQgogdgegdQgegdgVgfQgVgegKggQgLgfAAggQAAgqATgqQASgpAlgoQAkgoA1gkQAagTAfgSQAegSAigRQAhgSAmgQQAlgRApgPQApgQAsgPQAsgPAvgOQAvgOAygNQAygNA1gMQA1gMA4gMQA3gLA6gJQAmgHAogGQAogHApgGQAogFAqgFQApgGArgEQArgFArgEQArgEAtgEQAsgDAtgDQAtgDAugDQAugCAugCQAugCAvgBQAvgCAwAAQAwgBAuABQAwgBAvABQAvAAAvACQAvABAuACQAuACAuACQAtADAtADQAtADAsADQAsAEArAEQArAEArAFQAqAEAqAGQApAFApAFQAoAGAoAHQAnAGAnAHQA5AJA4ALQA3AMA1AMQA1AMAxANQAyANAwAOQAuAOAsAPQAsAPApAQQApAPAlARQAmAQAhASQAiARAeASIAAAA").cp();
	this.shape_65.setTransform(226.9,70.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#666666").s().p("AHCjhQASAJARAJQARAJAQALQAPAKAOALQAcAWAUAaQAVAaALAeQAKAeABAgQgBAvgaAsQgbArgyAmQgxAmhFAfQhEAfhUAWQgqALgsAIQgtAJgwAGQgvAGgwADQgxADg0AAQgZAAgZgBQgagBgYgBQgZgCgYgCQgYgCgXgDQgXgDgWgDQgWgEgUgEQgVgEgUgFQgTgEgSgFQgSgGgRgFQgQgGgPgGQgOgGgNgGQgNgHgKgHQgWgOgMgPQgMgPgCgQQgCgQAKgRQAJgRAXgSQAWgRAkgSQASgJAWgIQAWgJAZgJIAUAAIAKgeQADgQgGgPQgHgRgOgQQgHgJgJgIQgIgIgKgIQgJgIgKgIQgKgIgKgIIgpgeQgKgHgJgHQgJgHgIgHQgIgHgHgHQgGgGgFgHQgKgMAAgMQAAgIAFgIQAFgIAKgHQAEgDAGgEQAFgDAHgDQAHgEAHgDQAHgDAJgDQAIgDAJgCIB6gcIEkgeICJAGQASACATACQATADAUACQAUADAUADQAUADAVAEQAVAEAVAEQAVAFAVAFQAVAFAVAGQAVAFAVAHQAUAGAUAHQAUAIATAHQATAIASAJIAAAA").cp();
	this.shape_66.setTransform(44.2,114.3,0.688,0.786);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#666666").s().p("AIWisQAyAnAbArQAaAsABAuQAAAMgCAMQgCAMgDAMQgDALgEALQgFALgGALQgGAKgHAKQgHAKgIAJQgJAKgJAJQgKAIgKAJQgKAIgMAIQgLAIgMAHQgMAIgNAHQgNAHgOAGQgNAGgOAHQgPAGgOAFQgPAGgPAFQgPAFgPAFQgQAFgPAEQgQAFgQAEIgfAHQgQAEgQAEIjoAgIhhAEIkygfIgdgGQgPgDgOgDQgOgDgMgDQgNgDgMgEQgNgEgKgEQgLgDgKgEQgJgFgIgEQgIgEgGgFQgHgFgEgFQgJgKAAgLQAAgMAKgNQAFgGAGgGQAHgHAIgHQAIgHAJgHQAJgHAKgHIApgfQAKgHAKgIQAKgIAJgIQAKgIAIgIQAJgIAHgJQAOgQAHgRQAGgPgDgRIgKgdIgUAAQgZgJgWgJQgWgJgSgIQgkgSgWgRQgXgSgJgRQgKgRACgQQACgQAMgPQAMgPAWgOQAKgHANgHQANgGAOgGQAPgGAQgGQARgGASgFQASgFATgEQAUgFAVgEQAUgEAWgEQAWgDAXgDQAXgDAYgCQAYgCAZgCQAYgBAagBQAZgBAZAAQA0AAAxADQAwADAvAGQAwAGAtAIQAsAJAqALQBUAWBEAfQBFAfAxAlIAAAA").cp();
	this.shape_67.setTransform(44.2,24.7,0.688,0.786);

	this.addChild(this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,-2,435.1,143.1);


(lib.rock = function() {
	this.initialize();

	// Laag 1
	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#663300").s().dr(-10.5,-8,21,16);
	this.shape_68.setTransform(56.5,29.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#663300").s().dr(-10.5,-8,21,16);
	this.shape_69.setTransform(-74.4,-40.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#663300").s().p("AAiixQAPABAOAEQAPADANAEQAOAFANAFQAMAGAMAIQAMAHALAIQAVAQAQAUQAQAUAIAXQAJAXAAAYQAAAZgJAXQgIAXgQAUQgQAUgVAQQgLAIgMAHQgMAIgMAGQgNAFgOAFQgNAEgPADQgOAEgPABQgOACgPAAQgwAAgrgOQgrgOgigZQghgYgSghQgTghgBglQAAgYAJgXQAJgXAQgUQAPgUAWgQQALgIANgHQAMgIANgGQAOgFAOgFQAOgEAPgDQAQgEAQgBQAPgCAPAAQAPAAAOACIAAAA").cp();
	this.shape_70.setTransform(-64.4,14.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#663300").s().p("ABXgMQABAEABAFQABADAAAFQAAAHgDAHQgEAGgGAGQgFAGgJAEQgEACgEACQgFACgFACQgFABgFABQgGABgGABQgFABgGABQgGAAgGAAQgIAAgJgBQgJgBgIgCQgIgBgHgDQgHgDgHgDQgGgDgFgEQgEgEgEgFQgHgJAAgLQAAgFABgDQABgFABgEQAEgIAFgHQAGgHAIgFQAFgCAEgCQAFgDAFgBQAFgCAFgBQAGgBAFgBQAGgBAGAAQAGgBAFAAQAGAAAGABQAGAAAFABQAGABAGABQAFABAFACQAFABAFADQAEACAEACQAJAFAFAHQAGAHAEAIIAAAA").cp();
	this.shape_71.setTransform(72,-44.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#663300").s().p("ABaAFQAAAHgDAHQgEAGgGAGQgFAGgJAEQgEACgEACQgFACgFACQgFABgFABQgGABgGABQgFABgGABQgGAAgGAAQgIAAgJgBQgJgBgIgCQgIgBgHgDQgHgDgHgDQgGgDgFgEQgEgEgEgFQgHgJAAgLQAAgFABgDQABgFABgEQAEgIAFgHQAGgHAIgFQAFgCAEgCQAFgDAFgBQAFgCAFgBQAGgBAFgBQAGgBAGAAQAGgBAFAAQAGAAAGABQAGAAAFABQAGABAGABQAFABAFACQAFABAFADQAEACAEACQAJAFAFAHQAGAHAEAIQABAEABAFQABADAAAFIAAAA").cp();
	this.shape_72.setTransform(-27.9,-59.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#663300").s().p("ACJqGQBaAABRAJQBRAIBGASQBFARA7AbQA7AaAwAkQAvAkAkAuQAjAuAZA4QAYA4AMBCQAMBDAABMQAAAngHAfQgIAhgNAeQgNAcgTAZQgTAZgYAWQgLAKgNALQgNAKgNAJQgOAJgPAJQgOAIgPAJQgPAHgQAIQgQAIgQAHQgQAHgRAHQgRAGgQAHIgiANIgiAMIhFAXIgiAMIghAMIggAMIggAMQgPAGgPAHQgPAHgOAHQgOAGgNAIQgOAHgMAIQgMAIgLAIQgMAIgKAJQgUASgPAVQgcAkgfAYQgdAYgjAOQgjAMgmADIgLABIgLAAQgNAAgOgBQgOgBgNgDQgogGgogPQgUgHgUgJQgVgKgUgLQgUgLgUgMQgVgNgUgOQgUgOgTgPQgUgQgTgQQgUgRgTgSQgTgSgSgSQgSgTgSgUQgRgTgRgVQgRgUgQgVQgQgVgPgVQgPgWgOgVQgOgWgNgWQgNgWgLgWQgMgWgKgWQgKgXgJgVQgJgVgHgVQgHgWgGgVQgFgVgEgVQgEgUgCgUQgCgVAAgTQABhMAXg9QAXg9AsgvQArguA8gjQA8giBJgYQBJgYBSgPQAqgHArgGQArgGAtgEQAdgDAegCQAegCAfgBQAegCAfgBIA5gCIA6gBIA7AAIAJAAIACAA").cp();
	this.shape_73.setTransform(0.5,3.5);

	this.addChild(this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-87.9,-65.2,177.1,133.6);


(lib.planetfxg = function() {
	this.initialize();

	// Laag 1
	this.instance = new lib.Image_0();
	this.instance.setTransform(2,8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#996600").s().p("AAmhnQAFAEAEAEQAEAFAEAFQAEAFADAHQADAGADAGQADAHACAHQACAHACAIQABAIABAJQABAIAAAHQAAAIgBAJQgBAIgBAIQgCAIgCAHQgCAHgDAHQgDAGgDAHQgDAGgEAFQgEAFgEAFQgEAEgFAEQgEAEgFADQgFADgFACQgEACgGABQgEABgFAAQgOAAgOgJQgOgJgMgQQgFgIgFgJQgFgKgDgLQgDgLgCgMQgCgMAAgNQAAgHABgIQABgJABgIQACgIACgHQACgHADgHQADgGADgGQAEgHADgFQAEgFAEgFQAEgEAFgEQAEgEAFgDQAFgDAEgCQAFgCAFgBQAFgBAEAAQAFAAAEABQAGABAEACQAFACAFADQAFADAEAEIAAAA").cp();
	this.shape_74.setTransform(38,32);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#996600").s().dr(-9,-15,18,30);
	this.shape_75.setTransform(121,69);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#996600").s().p("AAkisQASABASAEQARADAQAEQAQAFAPAGQAPAFAOAIQAOAHAMAIQAYAQASAUQASAUAJAXQAKAXAAAYQAAAWgKAWQgJAVgSATQgSATgYAQQgMAHgOAHQgOAHgPAGQgPAGgQAEQgQAEgRAEQgSADgSABQgSACgSAAQg3AAgxgOQgxgOglgXQglgYgVgfQgUgegBgiQAAgYAKgXQAJgXASgUQASgUAYgQQAMgIAOgHQAOgIAPgFQAPgGAQgFQAQgEARgDQASgEASgBQASgCARAAQASAAASACIAAAA").cp();
	this.shape_76.setTransform(75,118.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#996600").s().p("AnitNIAPABIAMABIANABIACAAQARABAYAAIA1ABQA8AAA6AHQA6AIA3AOQA3APA0AVQAzAVAwAbQAwAbAsAgQAtAhAnAlQAoAmAiAqQAiAqAcAuQAdAvAWAxQAWAyAPA1QAPA1AIA3QAIA4AAA5QAAA4gLA6QgLA6gWA5QgVA5geA2QgdA3glA0QglA0gqAvQgrAwgvAqQgvAqgyAjQgyAkgyAbQg0Acg0ATQg0ASgzAJQgUADgTACQgUACgTAAIgLgBIgLAAQgxgDgtgOQgrgPgagUQgagUgLgaQgLgZACgfQACgfAOgjQAGgRAJgSQAJgTALgTQALgUANgUQANgUAPgVQAOgVAQgVQAQgWASgXIAjgtIAkguIBMhfQAUgYATgYQATgYASgZQATgYASgZQASgZARgZQASgXAQgYQAQgZANgZQAOgYANgZQAOgZALgYQAXgxANgvQAOgvADguQADgugKgrQgOg4gcguQgbgtgigkQglgkgrgcQgqgcgtgUQgXgLgXgIQgWgJgWgHQgWgHgVgGQgVgGgUgEQgUgFgSgDQgSgEgQgCIgPgCIgNgCIgcgBQgLgBgGAAIgFgBIgDAAIgBgBIAAAAIACgBIACAAIAKAB").cp();
	this.shape_77.setTransform(121.8,84.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#CC6600").s().p("ANeBwQgIA4gPA1QgQA1gWAyQgWAxgcAuQgdAugiArQgiAqgnAlQgoAmgsAgQgsAhgwAbQgxAbg0AVQg0AVg3AOQg3APg7AHQg6AIg7AAQgrAAgtgEQgrgFgrgIQgqgIgpgMQgpgMgngQQhOgghGgsQhGgtg7g5Qg7g4gvhCQgvhDgihKQghhLgRhSQgJgogEgqQgFgqAAgrQAAg4AIg3QAIg4APg1QAQg1AWgyQAWgxAcguQAcguAjgrQAigqAnglQAogmAsggQAsghAwgbQAxgbA0gVQA0gVA3gOQA3gPA7gHQA6gIA6AAQA7AAA6AIQA7AHA3APQA3AOA0AVQA0AVAxAbQAwAbAsAhQAsAgAoAmQAnAlAiAqQAiArAdAuQAcAuAWAxQAWAyAQA1QAPA1AIA4QAIA3AAA4QAAA5gIA3IAAAA").cp();
	this.shape_78.setTransform(87,83);

	this.addChild(this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.5,174.1,169.5);


(lib.mcNotify = function() {
	this.initialize();

	// Laag 1
	this.text = new cjs.Text("DUMMY", "47px Arial", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 59;
	this.text.lineWidth = 202;
	this.text.setTransform(0,-27.5);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-100.9,-27.5,206,56.5);


(lib.mcNose = function() {
	this.initialize();

	// Laag 1
	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s("#FFCC00").ss(4,0,1).p("AhzgcQACgHADgGQADgHAEgGQADgGAFgGQAEgFAGgFQAFgGAGgEQAGgEAHgEQAGgEAIgCQAHgDAIgCQAIgCAIgBQAJgBAHAAQAIAAAIABQAJABAIACQAHACAIADQAHACAHAEQAGAEAGAEQAGAEAGAGQAFAFAFAFQAEAGAEAGQAEAGADAHQADAGACAHQABAHACAIQAAAHABAGQgBAHAAAHQgCAHgBAHQgCAHgDAHQgDAGgEAHQgEAGgEAFQgFAGgFAFQgGAFgGAFQgGAEgGAEQgHADgHADQgIADgHACQgIABgJACQgIAAgIABQgZgBgWgIQgWgJgQgPQgQgPgJgUQgJgUAAgWQAAgGABgHQABgIACgHIAAAA").cp();

	this.addChild(this.shape_79);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12,-10.9,24.1,22.1);


(lib.mcMouth = function() {
	this.initialize();

	// Laag 1
	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s("#FFCC00").ss(4,0,1).p("ABbhuQAWACAVADQAVADAUAEQATADASAFQASAEAQAGQAQAFAOAGQANAGAMAHQAXANANAQQAMAQABAPQgBAPgMAPQgNANgXANQgMAGgNAGQgOAFgQAFQgQAFgSAFQgSAEgTAEQgUADgVADQgVADgWACQgWABgXACQgXAAgXABQgRAAgRgBQgRgBgRgBQgRgBgRgBQgQgCgQgCQgPgCgPgDQgPgCgOgDQgOgDgNgEQgNgDgMgEQgMgEgLgEQgLgEgJgEQgKgFgIgEQgIgFgHgFQgHgFgFgFQgFgFgEgFQgDgGgCgFQgCgGAAgGQAAgPANgQQAMgQAYgNQALgHAOgGQAOgGAQgFQAQgGASgEQASgFATgDQATgEAVgDQAVgDAWgCQAWgCAYgBQAXgBAWAAQAXAAAXABQAXABAWACIAAAA").cp();

	this.addChild(this.shape_80);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35,-11.4,70.1,23.1);


(lib.mcFace = function() {
	this.initialize();

	// Laag 1
	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#996600").ss(1.6,1,1).p("AsFj7IgCgCIA3iQIALAAIAhACAD9pyQALAAAIAEQAIAGAAAHADCp4IAAARABgqJQAJgWAHgFQAGAIANAGQAEABAEACQgMgKAAgMQAAgSAbgMQAbgNAmAAQAhAAAZAJACDp4QgCADgBADQgBAFAAAGAE3pyIAAgxQgEAOgXALQgbANgmAAQgmAAgbgNQgJgEgGgFADkouIBlhKIBlBJIgTA8IAsA6IgqA8Ig0gQIgeAqIhlggIgBhqIATgGIgUg7ACaqhIAfgXAD4nzIAUA7IBKAAIAAgkIBFgXAFpmNIgSgGIgBglAGakyIA4gpIA5AoIgUBDIAAAAIgjAvIg4gSIAAg6IAKgEIgMghAH3jwIhGAAIgLghAFcABIBGgmADbApQAVgmAOgFQAPAKAdALQAIADAJACQgbgQAAgTQAAgfA8gWQA8gWBVAAQBKAAA3ARAJWlDIg4gSIAAg6IA3gTIAkAvIgjAwAIaA9IgBgBIAUhkIBVgKIAFgSIBjAAIAeBbIhPA6IgVgPIgwAtIg1geQgEAAgDAAAKCgyIASgCIAsBcIgcAaAI/BRIglgUQgVABgYAAQhVAAg8gWQgUgHgNgJAJKG2IAAhTIBOgZIAxBDIgxBCIhOgZAEqBHQgFAFgCAGQgDAJAAAKAG2BHIAAAeADMHMQgSgRAAgZQAAgYASgSQACgCADgCIgXgNIiBB1IBICgICugTIAjisIghgTQgDAUgOAOQgSASgYAAQgZAAgRgSIAAAAADRF0QAQgNAVAAQAYAAASARQARASAAAYQAAAEAAAEAGvFsIhDgWIAAhHIBDgWIAqA6IgqA5ABmLVIghgLIAAgjIAhgLIAVAdIgVAcAjApvIAWhDIBHAAIAWBEIg6AqIg5grAhJoGIAxBDIgxBDIhOgaIAAhSIBOgaAmTolIAPgtIAwABIAOAtIgnAcIgmgdAoQj9IADAMIAAAAIAAAeAkKjnIAAhUQgJAZgyASQg8AWhVAAQgfAAgbgDAljlpIAAgKAo6mGQAtgKA3AAQBKAAA2ARQgNgJgUgHQg8gWhVAAQhVAAg8AWQgGACgFACIBqAFIAEAAIAMArIAJgEAoNjxIhBArIAdAfIg1BgIhtgVIgNhuIAQgHIg1gqAlTglIBvA0IgFAnIBAAMIAPB5IhuAzIhOhUIgYAEIgYgsIgsAhIAAAAIifAyIhhiHIBiiDIBPAaIAIgZICNAAIAOArIALgMAoBgrIBPAaIAACkAmLjnQAZAAARAIQASAJAAANArQjRIBUgnIAuAyAoqlbIAaBeAlWl/QAJACAIADQA8AWAAAfQAAAFgBAFAiKipIAFgPIA2AAIAFAOIANgKIgJgbIgJgaIg3AAIgSA1IAOALAhGjPIAIgCIAcAmIgcAmIAAABIgsAgIgsggIAMglAhKiqIAMAlAlWCaIgFgFIA7hqIA3ALAmWHoQAQgiALgHQAMALAWAKQAGADAHACQgUgPAAgTQAAgcAugUQAvgUBDAAQA5AAArAPAkmG8IArgdAk7HjIADgjIASgEIBigXIAzBUQAkgFAegNQAngQAGgXIAABMAmGByIgihAIBKhLAqqGMQgggKAAgPQAAgOAggLQAggKAuAAQAtAAAgAKQAgALAAAOQAAAPggAKQggAKgtAAQguAAgggKIAAAAAlZIDQgEAFgBAFQgDAIAAAKAiGIMQATAAAOAIQANAIAAAMAiGIMIhPBaIhugvIAIhUQgKgFgHgFAiRH5IALAT");
	this.shape_81.setTransform(-7.2,-0.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#998200").s().p("AsFkMIgCgCIA3iQIALAAIAhACIBqAFIAEAAIAMAsIAaBdIADAMIAAABIhBAqIAdAfIg1BgIhtgVIgNhuIAQgHIg1gqAlTg2IBvA2IgFAlIBAAMIAPB5IhuAzIhOhUIgYAEIgYgsIgsAhIAAAAIifAyIhhiHIBiiDIBPAaIAIgZICNAAIAOArIALgMADko/IBlhKIBlBJIgTA8IAsA6IgqA8Ig0gQIgeAqIhlggIgBhqIATgGIgUg7AD4oEIAUA7IBKAAIAAgkIBFgXIhFAXIAAAkIhKAAIgUg7AFpmeIgSgGIgBglIABAlIASAGAJWlUIg4gSIAAg6IA3gTIAkAvIgjAwAIaAsIgBgBIAUhkIBVgKIAFgSIBjAAIAeBbIhPA6IgVgPIgwAtIg1geIglgUAKChDIASgCIAsBcIgcAaIAcgaIgshcIgSACAJKGlIAAhTIBOgZIAxBDIgxBCIhOgZAGvFbIhDgWIAAhHIBDgWIAqA6IgqA5ABmLEIghgLIAAgjIAhgLIAVAdIgVAcAjAqAIAWhDIBHAAIAWBEIg6AqIg5grAmTo2IAPgtIAwABIAOAtIgnAcIgmgdAoBg8IBPAaIAACkIAAikIhPgaArQjiIBUgnIAuAyIgugyIhUAnAhGjgIAIgCIAcAmIgcAmIAAABIgsAgIgsggIAMglIAFgPIA2AAIAFAOIANgKIgJgbIAJAbIgNAKIgFgOIg2AAIgFAPIgOgLIASg1IA3AAIAJAaAhKi7IAMAlIgMglAlWCJIgFgFIA7hqIA3ALIg3gLIg7BqIAFAFAiRHoIALATIhPBaIhugvIAIhUIADgjIASgEIBigXIAzBUAmGBhIgihAIBKhLIhKBLIAiBA").cp();
	this.shape_82.setTransform(-7.2,1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#999900").s().p("Ag8ALIhqgEQAFgDAGgBQA8gUBVAAQBTAAA8AUQAUAHAOAIQg3gQhKAAQg1AAgtAJIAAAA").cp();
	this.shape_83.setTransform(-58.2,-41);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFF99").s().p("AmcgsIgMAMIgNgrIiNgBIgJAZIhOgaIhiCEIBhCHICegzIAAAAIAtggIAXAsIAZgEIBNBTIBugzIgPh4IhAgNIAFgnIhugzAtPkDIA1ArIgPAHIANBtIBsAWIA2hhIgdgfIBAgqIAAAdIAAgdIABAAIgEgMQAcADAfAAQBVAAA8gWQAygTAIgYIAABTIAAhTQgIAYgyATQg8AWhVAAQgfAAgcgDIgZheIAIgFIgIAFIgMgsIgEAAQAsgJA4AAQBJAAA3AQQgNgIgVgIQg8gWhVAAQhVAAg8AWQgFACgFACIghgBQAHgNAIgNQAdgwAjgrQAUgZAVgXQAQgSASgRQApgnAtghQAtgiAygcQAxgcA1gVQA2gWA4gPQA4gPA8gHQA7gIA8AAQA8AAA8AIQA7AHA5APQA4APA1AWQA2AVAxAcQAxAcAuAiQAtAhAoAnQApAnAjAsQAjArAdAwQAdAwAXAzQAWA0AQA3QAPA3AJA6QAHA5ABA6QgBA7gHA5QgJA5gPA2QgQA2gWAzQgXAygdAwQgdAvgjArQgjArgpAnQgoAmgtAiQguAhgxAcQgxAbg2AWQg1AVg4APQg5APg7AIQg8AHg8ABQgtAAgsgFQgtgEgsgJQgrgIgqgMQgqgNgogQQhQghhHgtQhHgug9g6Qg8g6gxhEQgwhEgihMQgRgngNgoQgNgogJgpQgJgqgEgrQgFgrAAgsQAAg6AIg5QAEgdAGgdQAGgcAIgbQAFgSAFgRIAAAAACzp6QAMAAAHAFQAIAFAAAHQAAgHgIgFQgHgFgMAAIAAAAAB5qAIAAASIAAgSAAWqRQAKgWAGgEQAHAHANAGQADACAEABQgMgJAAgMQAAgSAbgNQAbgNAnAAQAhAAAZAKQgZgKghAAQgnAAgbANQgbANAAASQAAAMAMAJQgEgBgDgCQgNgGgHgHQgGAEgKAWIAAAAAA6qAQgCADgBAEQgCAFAAAGQAAgGACgFQABgEACgDIAAAAADtp6IAAgwQgEAOgWALQgbAMgmAAQgnAAgbgMQgJgFgGgFQAGAFAJAFQAbAMAnAAQAmAAAbgMQAWgLAEgOIAAAwACbo2IAUA7IgTAHIAABpIBlAgIAfgqIAzARIAqg8Igrg7IATg8IhmhJIhkBKABQqoIAggYIggAYAFRk5IA4gqIA5AoIgVBDIAAAAIgiAvIg4gRIgBg7IAKgDIgLghIALAhIgKADIABA7IA4ARIAigvIAAAAIAVhDIg5goIg4AqAGtj4IhGABIgLghIALAhIBGgBAESgFIBGgoIhGAoACSAiQAVgkAOgIQAPALAcAKQAIADAJADQgagRAAgSQAAgfA8gWQA8gWBVAAQBJAAA3AQQg3gQhJAAQhVAAg8AWQg8AWAAAfQAAASAaARQgJgDgIgDQgcgKgPgLQgOAIgVAkIAAAAAHRA1QgWACgXAAQhVAAg8gWQgVgIgNgIQANAIAVAIQA8AWBVAAQAXAAAWgCIAkAVQgDgBgEAAQAEAAADABIA1AdIAxgtIAUAPIBPg6IgehbIhiAAIgGATIhVAJIgUBkIACABAINlLIAigvIgjgwIg4ATIABA7IA4ARAIAGuIBPAaIAwhDIgwhDIhPAaIAABSADgA/QgFAFgCAGQgDAJAAAKQAAgKADgJQACgGAFgFIAAAAAFsA/IAAAeIAAgeACCHFQgRgSAAgYQAAgZARgRQADgDACgCIgWgNIh/B2IBFCfICugTIAkirIgigTQgCATgPAPQgRARgZAAQgYAAgSgRQASARAYAAQAZAAARgRQAPgPACgTIAiATIgkCrIiuATIhFifIB/h2IAWANQgCACgDADQgRARAAAZQAAAYARASIAAAAACHFsQAQgNAVAAQAZAAARASQASARAAAZQAAAEgBAEQABgEAAgEQAAgZgSgRQgRgSgZAAQgVAAgQANIAAAAAkKp2IA6AqIA5gpIgVhEIhHgBIgXBEAAcLOIAVgdIgVgdIgfALIAAAkIAfALAFmFkIApg5Igpg5IhEAWIAABGIBEAWAiSoNIAwBDIgwBCIhPgZIAAhTIBPgZIhPAZIAABTIBPAZIAwhCIgwhDAmtlxIAAgKIAAAKAndosIAnAcIAmgbIgOguIgvgBIgQAuAnVjvQAZAAASAJQARAJAAAMQAAgMgRgJQgSgJgZAAIAAAAAmfmHQAJADAIADQA8AWAAAfQAAAFgCAFQACgFAAgFQAAgfg8gWQgIgDgJgDIAAAAAjTixIgMAmIAsAfIAsggIgBgBIAcglIgcgnIgIADIgIgaIg4AAIgRA1IAOAKAngHhQARgjALgGQALALAXAJQAGADAHACQgVgPAAgSQAAgcAvgUQAvgUBCAAQA5AAArAPQgrgPg5AAQhCAAgvAUQgvAUAAAcQAAASAVAPQgHgCgGgDQgXgJgLgLQgLAGgRAjIAAAAAlwG1IArgdIgrAdAjPIFIgMgUQAlgEAdgNQAngRAHgWIAABMIAAhMQgHAWgnARQgdANglAEIgyhTIhjAXIgSAEIgDAjIgHBUIBuAvIBPhaQATAAANAIQAOAIAAALQAAgLgOgIQgNgIgTAAIAAAAArzGEQgggKAAgOQAAgPAggKQAggKAtAAQAuAAAgAKQAgAKAAAPQAAAOggAKQggALguAAQgtAAgggLQAgALAtAAQAuAAAggLQAggKAAgOQAAgPgggKQgggKguAAQgtAAggAKQggAKAAAPQAAAOAgAKIAAAAAmiH8QgEAEgCAGQgCAIAAAJQAAgJACgIQACgGAEgEIAAAAAmFHcQgJgFgHgGQAHAGAJAFIAAAA").cp();

	this.addChild(this.shape_84,this.shape_83,this.shape_82,this.shape_81);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-88.9,-85.4,178.1,171.1);


(lib.mcEye = function() {
	this.initialize();

	// Laag 1
	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#996633").s("#000000").ss(1,0,1).p("ABEhEQAFAFAEAFQAEAFAEAGQADAGADAGQADAFACAGQACAGABAHQAAAGABAFQgBAHAAAHQgBAHgCAHQgCAGgDAGQgDAGgDAGQgEAGgEAFQgEAFgFAEQgFAEgFAEQgFAEgFADQgGADgGADQgGACgGABQgGACgGABQgGABgGAAQgIAAgJgCQgKgCgIgDQgSgIgPgNQgOgNgIgTQgJgSAAgWQAAgFABgGQABgHACgGQACgGADgFQACgGAEgGQADgGAFgFQAEgFAEgFQAFgEAFgEQAFgFAGgDQAGgEAGgCQAFgDAGgCQAGgCAHgBQAGgBAFAAQAGAAAGABQAGABAGACQAGACAGADQAGACAGAEQAFADAFAFQAFAEAFAEIAAAA").cp();

	this.addChild(this.shape_85);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10,-10,20.1,20.1);


(lib.KopievanTimeline1 = function() {
	this.initialize();

	// Layer 1
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AitmMIglgJIglgJIgigIIgggHIg3gMIgWgFIgRgEQgIgCgFgCQgFgBgDgCQgCgBAAgBQABgBABgBQABAAADgBQAEgBAIAAQAIgBALAAIAbgBIAjAAIACAAQAaAAAaABQAaACAZACQAaADAZAEQAZAEAZAFQAYAFAZAGQAYAHAXAHQAXAIAVAIQAWAJAWAKQAWAJAVALQAVALATAMQAUAMATAMQATANASAOQAjAcAeAfQAfAfAZAiQAYAjATAlQATAmALAoQAMAnAEAqQAFArgEAtQgCAagCAXQgDAXgDAUQgDAUgEAQQgEASgEAOQgKAdgOATQgOAUgUAOQgTANgbAJQgNAFgPAEQgPAEgRADQgRAEgTADQgTAEgVADIgtAIIgyAIQgIACgHAAQgGABgHAAQgIAAgHgBQgHgBgGgCQgTgHgLgTQgKgSAAgdQAAgdAJgmQAEgTAHgVQAGgVAHgXQAIgXALgZQAKgZAMgbQAMgaAOgdQAOgcAPgdQAPgbARgfQARgfARggQARgdADgaQACgagJgYQgKgXgTgVQgTgVgbgSQgOgJgPgJQgPgJgQgIQgRgIgRgHQgQgIgSgHQgSgHgTgGQgTgHgTgGQgTgGgTgFQgTgGgTgFIAAAA").cp();
	this.shape_86.setTransform(355.1,85.6);

	this.addChild(this.shape_86);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(312,39,86.2,93.3);


(lib.flame3 = function() {
	this.initialize();

	// Laag 1
	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF6600").s().p("Aq5BDIBMgLIAogGIApgGIAqgIIArgIQAWgEAWgFQAVgFAWgFQAWgFAWgEQAWgFAWgHQAWgGAVgHQAWgHAVgIQAWgIAVgJQAVgIAUgKQAUgJAVgLQAUgKATgLQATgMARgMQASgNASgNQAjgbAfgfQAfggAbgkQAggsAmgbQAlgbAqgMQAogMAqAAIACAAQArAAAsALQAsALAsATQAVAKAWAMQAVALAVANQAUANAUAOQAUAOATAPQATAPASAQQARAPARAQQAQARAQAQQAPAQANARQAOAQALAQQAMAQAKAQQAJAPAIAPQAHAPAGANQAKAaAAAVQAAAXgIAaQgFAMgGAOQgGANgIAOQgJAOgJAOQgKAOgMAOQgLAOgNAOQgOAOgOAOQgPAOgPANQgQANgRAMQgSANgSAMQgSALgTALQgTAKgVAKQgUAJgVAJQgVAIgVAGQgWAHgWAFQgtAKguACIgKAAIgKAAQgSAAgTgBQgSgCgSgDQgwgHgvgSQgvgSgugeQgOgKgQgJQgQgIgRgIQgSgIgTgIQgTgHgUgGQgSgGgWgGQgVgGgWgFQgXgFgXgEQgXgEgYgEQgYgEgYgDQgZgEgYgCQgZgDgZgCQgZgDgZgCIgygEIgygDIgxgCIgwgDIhdgDIhUgEIgngCIgkgCQgRgBgQgCQgQgBgNgCQgOgBgMgCQgMgCgKgDQgKgCgHgDQgIgDgFgDQgKgGAAgJQAAgJANgLQAEgEAHgEQAGgEAJgEQAIgDAKgDQAJgDAMgDQALgDANgDQAMgCAOgDIAegFIAfgFIAigFIAjgF").cp();

	this.addChild(this.shape_87);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-95.6,-41.5,191.3,83.1);


(lib.flame2 = function() {
	this.initialize();

	// Laag 1
	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFF00").s().p("AoOA6QAOgEARgDQARgDATgDIAqgHIAugGQAYgEAZgEQAZgEAagEQAagFAbgGQAagFAagHQA1gPAygWQAygWApgfQArgfAggrQATgaAWgRQAWgQAYgIQAYgHAagBIACAAQAMAAANACQAMABANADQANADANAEQANAFANAFQANAGANAHQAMAGANAIQAMAHAMAJQAMAIALAJQAMAJAKAJQALAJAKAKQAKAKAJAJQAJAKAIAKQAIAKAHAKQAHAKAGAJQAGAJAFAKQAEAJADAIQAEAIABAGQACAIAAAHQAAAGgCAHQgBAHgDAIQgCAHgEAIQgEAIgFAIQgEAIgGAIQgGAIgHAJQgHAIgIAIQgIAJgJAIQgJAIgJAIQgKAIgKAHQgKAHgLAIQgLAHgMAGQgLAGgNAGQgMAGgMAFQgNAFgNAEQgNAEgNADQgOACgNACQgOACgOAAIgKABQgMAAgLgBQgLgBgMgCQgOgCgOgEQgOgEgOgGQgcgLgcgTQgIgFgKgGQgJgFgLgEQgKgFgMgEQgLgEgMgDQgKgEgNgDQgNgDgNgDQgOgDgOgCQgOgDgOgCIgdgEIgegDIgegDIgegDIgegCIgegCIgdgBIgdgCIg4gCIgygBIgYgCIgVgBIgUgBIgSgCIgPgCQgHgBgGgCQgGgBgEgCQgFgBgDgCQgGgEAAgGQABgFAHgGQAMgLAbgIIAAAA").cp();

	this.addChild(this.shape_88);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-57.3,-24.6,114.9,49.5);


(lib.flame1 = function() {
	this.initialize();

	// Laag 1
	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AEthAQAGAGAEAGQAFAGAEAGQAEAFAEAGQADAGADAFQADAFACAFQADAIAAAHQAAASgLAVQgMAVgVAUQgUAUgcAPQgcAQggAHQgJABgJABQgJABgJAAQgIAAgIgBQgIAAgIgCQgjgFgjgXQgVgMgdgJQgNgEgQgEQgQgDgRgCQgSgDgRgCQgSgBgSgCIgjgCIgjgCIg+gCQgPgBgMgBQgMAAgKgCQgJAAgHgCQgHgCgDgCQgDgCAAgCQAAgCABgCQABgCADgCQAGgHAQgFQAIgDAKgCQAJgCAMgCIAZgEIAbgDIAegEIAfgFQAQgDAQgEQAQgDAPgDQAQgEAQgFQAQgGAPgGQAegNAXgTQAagTATgaQAGgIAGgHQAGgGAGgFQAHgFAHgEQAHgEAHgCQAHgDAIgBQAHgBAIAAIABAAQAHAAAIABQAHABAIABQAIACAHADQAIACAIAEQAIADAHAEQAIAEAHAFQAIAEAHAFQAHAFAGAFQAHAGAGAFQAHAGAGAGQAGAGAFAFIAAAA").cp();

	this.addChild(this.shape_89);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.2,-14.8,68.6,29.8);


(lib.board = function() {
	this.initialize();

	// Laag 1
	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s("#FFFFFF").ss(1,1,1).p("ATTm3ICqJXMgrvAEYIgKtvMApPAAA").cp();
	this.shape_90.setTransform(-0.4,5);

	this.addChild(this.shape_90);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-140.9,-38.9,281,88);


(lib.beam = function() {
	this.initialize();

	// Laag 1
	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#FFFF00","rgba(255,255,255,0)"],[0,1],0,-9.4,0,9.6).s().p("AgiBfIAAi9IBFAAIAAC9IhFAA").cp();
	this.shape_91.setTransform(3.6,9.6);

	this.addChild(this.shape_91);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7.1,19.1);


(lib.SpaceShip2InCorrect = function() {
	this.initialize();

	// Laag 1
	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(4,0,1).p("AAgApQgGAGgHAEQgHAEgHgBQgVAAgOgNQgNgOAAgXQgBgNAEgLQAEgLAGgIQAHgHAJgEQAJgEAKAAQAHAAAHAEQAHAEAGAHQAGAIADALQADALABANQgBAMgDAJQgDAJgGAHIAAAA").cp();
	this.shape_92.setTransform(144.5,5.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(4,0,1).p("AAyDcIhjm3");
	this.shape_93.setTransform(151,35);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFF00").s("#000000").ss(4,0,1).p("AgxhZQAGgDAHgDQAGgDAIgCQAGgCAIgBQAHgBAGAAQAGAAAGABQAGABAHACQAFACAGADQAGADAGADQAFAEAFAEQAGAFAEAFQAFAFAEAGQAEAFAEAGQAEAGACAHQADAGACAHQACAHABAIQABAHAAAGQAAAGgBAGQgBAGgCAHQgCAFgDAGQgCAGgEAGQgEAFgEAGQgEAFgFAFQgEAEgGAEQgFAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgOQgPgPgJgSQgJgRAAgTQAAgGABgHQABgIACgHQACgHADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEIAAAA").cp();
	this.shape_94.setTransform(390.5,146.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFF00").s("#000000").ss(4,0,1).p("AgxhZQAGgDAHgDQAGgDAIgCQAGgCAIgBQAHgBAGAAQAGAAAGABQAGABAHACQAFACAGADQAGADAGADQAFAEAFAFQAGAEAEAFQAFAFAEAGQAEAFAEAGQAEAGACAHQADAGACAHQACAHABAIQABAHAAAGQAAAGgBAGQgBAGgCAHQgCAFgDAGQgCAGgEAGQgEAFgEAGQgEAFgFAFQgEAEgGAEQgFAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgOQgPgPgJgSQgJgRAAgTQAAgGABgHQABgIACgHQACgHADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEIAAAA").cp();
	this.shape_95.setTransform(355.5,154.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFF00").s("#000000").ss(4,0,1).p("ABSg8QAEAFAEAGQAEAGACAHQADAGACAHQACAHABAIQABAHAAAGQAAAGgBAGQgBAGgCAHQgCAFgDAGQgCAGgEAGQgEAFgEAGQgEAFgFAFQgEAEgGAEQgFAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgOQgPgPgJgSQgJgSAAgSQAAgGABgHQABgIACgHQACgHADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAIgCQAGgCAIgBQAHgBAGAAQAGAAAGABQAGABAGACQAGACAGADQAGADAGADQAFAEAFAFQAGAEAEAFQAFAFAEAGIAAAA").cp();
	this.shape_96.setTransform(317.5,158.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFF00").s("#000000").ss(4,0,1).p("AAphfQAGADAGADQAFAEAFAFQAGAEAEAFQAFAFAEAGQAEAFAEAGQAEAGACAHQADAGACAHQACAHABAIQABAHAAAGQAAAGgBAGQgBAGgCAGQgCAGgDAGQgCAGgEAGQgEAFgEAGQgEAFgFAFQgEAEgGAEQgFAEgFAEQgGAEgGACQgGADgFACQgHACgGABQgGABgGAAQgVAAgUgJQgUgIgPgOQgPgPgJgSQgJgSAAgSQAAgGABgHQABgIACgHQACgHADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAIgCQAGgCAIgBQAHgBAGAAQAGAAAGABQAGABAHACQAGACAFADIAAAA").cp();
	this.shape_97.setTransform(277.5,161.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFF00").s("#000000").ss(4,0,1).p("ABSg8QAEAFAEAGQAEAGACAHQADAGACAHQACAHABAIQABAHAAAGQAAAGgBAGQgBAGgCAHQgCAFgDAGQgCAGgEAGQgEAFgEAGQgEAFgFAFQgEAEgGAEQgFAEgFAEQgGAEgGACQgGADgFACQgHACgGABQgGABgGAAQgVAAgUgJQgUgIgPgOQgPgPgJgSQgJgRAAgTQAAgGABgHQABgIACgHQACgHADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAIgCQAGgCAIgBQAHgBAGAAQAGAAAGABQAGABAHACQAFACAGADQAGADAGADQAFAEAFAEQAGAFAEAFQAFAFAEAGIAAAA").cp();
	this.shape_98.setTransform(240.5,164.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFF00").s("#000000").ss(4,0,1).p("ABJhHQAFAFAEAGQAEAFAEAGQAEAGACAHQADAGACAHQACAHABAIQABAHAAAGQAAAGgBAGQgBAGgCAHQgCAFgDAGQgCAGgEAGQgEAFgEAGQgEAFgFAFQgEAEgGAEQgFAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgOQgPgPgJgSQgJgRAAgTQAAgGABgHQABgIACgHQACgHADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAIgCQAGgCAIgBQAHgBAGAAQAGAAAGABQAGABAGACQAGACAGADQAGADAGADQAFAEAFAEQAGAFAEAFIAAAA").cp();
	this.shape_99.setTransform(200.5,164.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(4,0,1).p("AGHmDQBWArBGA7QBGA7AzBIQAzBJAcBRQAbBSABBbQgBBDgQAxQgPAxgeAhQgeAigqAVQgqAVg1ALQg1ALg/AEQg+AEhGgBQhGAAhNgBQhMgChPAAQhQAAhMACQhMABhFAAQhGABg9gEQg+gEg0gLQg0gLgpgVQgqgVgdgiQgdghgPgxQgPgxgBhDQABhbAchSQAbhRAzhJQAzhIBHg7QBHg7BXgrQBXgqBkgXQBjgXBqAAQBpAABhAXQBiAXBWAqIAAAA").cp();
	this.shape_100.setTransform(214.5,82.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFF00").s("#000000").ss(4,0,1).p("ABggkQADAGACAHQACAHABAIQABAHAAAGQAAAGgBAGQgBAGgCAGQgCAGgDAGQgCAGgEAGQgEAFgEAGQgEAFgFAFQgEAEgGAEQgFAEgFAEQgGAEgGACQgGADgFACQgHACgGABQgGABgGAAQgVAAgUgJQgUgIgPgOQgPgPgJgSQgJgSAAgSQAAgGABgHQABgIACgHQACgHADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAIgCQAGgCAIgBQAHgBAGAAQAGAAAGABQAGABAHACQAGACAFADQAGADAGADQAFAEAFAFQAGAEAEAFQAFAFAEAGQAEAFAEAGQAEAGACAHIAAAA").cp();
	this.shape_101.setTransform(160.5,162.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFF00").s("#000000").ss(4,0,1).p("ABogIQABAHAAAGQAAAGgBAGQgBAGgCAHQgCAFgDAGQgCAGgEAGQgEAFgEAGQgEAFgEAFQgFAEgFAEQgGAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgOQgPgPgJgSQgJgSAAgSQAAgGABgHQABgIACgHQACgHADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAHgCQAHgCAIgBQAHgBAGAAQAGAAAGABQAGABAHACQAFACAGADQAGADAGADQAFAEAGAFQAFAEAFAFQAEAFAEAGQAEAFAEAGQAEAGACAHQADAGACAHQACAHABAIIAAAA").cp();
	this.shape_102.setTransform(121.5,158.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFF00").s("#000000").ss(4,0,1).p("AhngIQABgIACgHQACgHADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAHgCQAHgCAIgBQAHgBAGAAQAGAAAGABQAGABAHACQAFACAGADQAGADAGADQAFAEAGAFQAFAEAFAFQAEAFAEAGQAEAFAEAGQAEAGACAHQADAGACAHQACAHABAIQABAHAAAGQAAAGgBAGQgBAGgCAHQgCAFgDAGQgCAGgEAGQgEAFgEAGQgEAFgEAFQgFAEgFAEQgGAEgFAEQgGAEgGACQgGADgFACQgHACgGABQgGABgGAAQgVAAgUgJQgUgIgPgOQgPgPgJgSQgJgSAAgSQAAgGABgHIAAAA").cp();
	this.shape_103.setTransform(44.5,142.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFF00").s("#000000").ss(4,0,1).p("AAFhoQAGAAAGABQAGABAHACQAFACAGADQAGADAGADQAFAEAGAFQAFAEAFAFQAEAFAEAGQAEAFAEAGQAEAGACAHQADAGACAHQACAHABAIQABAHAAAGQAAAGgBAGQgBAGgCAGQgCAGgDAGQgCAGgEAGQgEAFgEAGQgEAFgEAFQgFAEgFAEQgGAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgOQgPgPgJgSQgJgSAAgSQAAgGABgHQABgIACgHQACgHADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAHgCQAHgCAIgBQAHgBAGAAIAAAA").cp();
	this.shape_104.setTransform(84.5,152.5);

	this.instance_1 = new lib.KopievanTimeline1();
	this.instance_1.setTransform(248.1,83.7,1,1,0,0,0,355.1,85.7);
	this.instance_1.alpha = 0.859;

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#0099CC").s("#000000").ss(4,0,1).p("AGHmDQBWAqBGA7QBHA7AyBJQAzBIAcBSQAOApAHArQAHAsAAAtQAABDgQAxQgQAxgeAiQgeAhgqAVQgqAVg1ALQg1ALg/AEQgdACgfABQggABggAAIgIAAIgvgBIgyAAIgygBIgzgBIg0gBIg0AAIg1AAIg0ABIgzABIgyABIgwAAIgvABIgIAAQggAAgfgBQgfgBgdgCQg+gEg0gLQg0gLgqgVQgpgVgdghQgdgigQgxQgPgxAAhDQAAgtAHgsQAHgrAOgpQAchSAzhIQAzhJBHg7QBHg7BXgqQArgVAvgRQAvgQAxgMQAygLA0gGQA0gGA0AAQA0AAAzAGQAzAGAxALQAwAMAuAQQAuARArAVIAAAA").cp();
	this.shape_105.setTransform(214.5,82.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FF0000").s("#000000").ss(4,0,1).p("AeTAQQATAQgFAOQgEAOgdAKIikA2Ik6BJImoA0Ii8AMImHAPImZAEQhtAAhogCQhogChggDQhAgDg+gDQg9gDg6gEQg6gEg3gEQg3gEg0gFQg0gFgxgFQgygGgugFQgugGgsgGQgrgGgqgGQgpgHgmgGQgngHgkgGQgkgHgigHQgigHgfgHQgggHgdgHQgegHgbgHQgbgHgZgGIjvhJQgdgKgFgNQgFgLARgPQARgQAlgQQATgIAYgJQAXgIAcgJQASgFAVgGQAVgGAWgGQAXgGAYgFQAZgGAagGQAagGAcgFQAcgGAegGQAdgFAfgGQAggGAggFIBDgKQAigGAkgFQAkgFAlgFQAlgFAmgEQAngFAngEQAogFApgEQApgEAqgEQAqgEArgDQArgDAsgDQAsgEAtgCQAtgDAugCQAugDAvgCQAvgCAvgBQAwgCAwgBQAwgBAyAAQAxgBAxAAQAvAAAyABQAxAAAwACQAxABAwACQAvABAwADQAvACAuADQAvACAtAEQAtADAtAEQAtADArAEQAsAEArAFQAqAEAqAFQApAFApAFQAoAFAnAFQAnAFAmAGQAmAGAkAGQAlAFAjAHQAjAGAiAGQAhAGAgAGQAgAHAfAGQAeAHAdAGQAdAHAbAGQAbAHAZAHQAZAGAXAHQAYAGAVAHQAVAGAUAHQAdAJAZAKQAYAKAUAJQAnARASAQIAAAA").cp();
	this.shape_106.setTransform(217.9,119);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#990000").s("#000000").ss(4,0,1).p("EAhcAA7QgUAdgmAcQgmAcg2AaQg3AahHAZQgXAIgZAIQgaAIgbAHQgaAIgcAIQgcAHgeAHQgeAHgfAHQggAHggAHQghAGgiAHQgiAGgjAHQgjAGglAFQgkAGgmAGQgmAFgnAFQgnAFgoAFQgnAFgpAFQgqAEgqAEQgqAEgrAEQgrAEgsADQgsADgtADQgtADgtADQguADguACQgvACgvACQgvABgwACQgwABgwABQgxABgxABQgxAAgxAAQhuAAhtgCQhtgDhpgEQhpgFhmgGQhlgHhhgIQhhgJhcgKQhcgKhWgMQhWgMhQgNQhQgOhKgPQhJgPhCgQQhDgRg6gRQg6gSgygTQgygTgqgTQhSgogsgqQgrgrgBgtQAAgdAUgdQAUgdAmgcQAmgcA2gaQA3gaBHgYQAXgJAZgIQAagIAagHQAbgIAcgHQAcgIAegHQAegHAfgHQAggHAggHQAhgGAigHQAigGAjgGQAjgHAlgFQAkgGAmgFQAmgGAngFQAngFAngFQAogFApgEQAqgFAqgEQAqgEArgEQArgEAsgDQAsgDAtgDQAtgDAtgDQAugDAugCQAvgCAvgCQAvgBAwgCQAwgBAwgBQAxgBAxAAQAxgBAwAAQAxAAAxABQAxAAAxABQAwABAwABQAwACAvABQAvACAvACQAuACAuADQAtADAtADQAtADAsADQAsADArAEQArAEAqAEQAqAEAqAFQApAEAnAFQAoAFAnAFQAnAFAmAGQAmAFAkAGQAlAFAjAHQAjAGAiAGQAiAHAhAGQAgAHAgAHQAfAHAeAHQAeAHAcAIQAcAHAaAIQAbAHAaAIQAZAIAXAJQBHAYA3AaQA2AaAmAcQAmAcAUAdQAUAdAAAdQAAAegUAdIAAAA").cp();
	this.shape_107.setTransform(216,135);

	this.addChild(this.shape_107,this.shape_106,this.shape_105,this.instance_1,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,432.1,179.1);


(lib.SpaceShip2Correct = function() {
	this.initialize();

	// Laag 1
	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(4,0,1).p("AAgApQgGAGgHAEQgHAEgHgBQgVAAgOgNQgNgOAAgXQgBgNAEgLQAEgLAGgIQAHgHAJgEQAJgEAKAAQAHAAAHAEQAHAEAGAHQAGAIADALQADALABANQgBAMgDAJQgDAJgGAHIAAAA").cp();
	this.shape_108.setTransform(144.5,5.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(4,0,1).p("AAyDcIhjm3");
	this.shape_109.setTransform(151,35);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFF00").s("#000000").ss(4,0,1).p("AgWhkQAGgCAIgBQAHgBAGAAQAGAAAGABQAGABAHACQAFACAGADQAGADAGADQAFAEAFAEQAGAFAEAFQAFAFAEAGQAEAFAEAGQAEAGACAHQADAGACAHQACAHABAIQABAHAAAGQAAAGgBAGQgBAGgCAHQgCAFgDAGQgCAGgEAGQgEAFgEAGQgEAFgFAFQgEAEgGAEQgFAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgOQgPgPgJgSQgJgRAAgTQAAgGABgHQABgIACgHQACgHADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAIgCIAAAA").cp();
	this.shape_110.setTransform(390.5,146.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFF00").s("#000000").ss(4,0,1).p("AgxhZQAGgDAHgDQAGgDAIgCQAGgCAIgBQAHgBAGAAQAGAAAGABQAGABAHACQAFACAGADQAGADAGADQAFAEAFAFQAGAEAEAFQAFAFAEAGQAEAFAEAGQAEAGACAHQADAGACAHQACAHABAIQABAHAAAGQAAAGgBAGQgBAGgCAHQgCAFgDAGQgCAGgEAGQgEAFgEAGQgEAFgFAFQgEAEgGAEQgFAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgOQgPgPgJgSQgJgRAAgTQAAgGABgHQABgIACgHQACgHADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEIAAAA").cp();
	this.shape_111.setTransform(355.5,154.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFF00").s("#000000").ss(4,0,1).p("ABSg8QAEAFAEAGQAEAGACAHQADAGACAHQACAHABAIQABAHAAAGQAAAGgBAGQgBAGgCAHQgCAFgDAGQgCAGgEAGQgEAFgEAGQgEAFgFAFQgEAEgGAEQgFAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgOQgPgPgJgSQgJgSAAgSQAAgGABgHQABgIACgHQACgHADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAIgCQAGgCAIgBQAHgBAGAAQAGAAAGABQAGABAGACQAGACAGADQAGADAGADQAFAEAFAFQAGAEAEAFQAFAFAEAGIAAAA").cp();
	this.shape_112.setTransform(317.5,158.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFF00").s("#000000").ss(4,0,1).p("AAehkQAGACAFADQAGADAGADQAFAEAFAFQAGAEAEAFQAFAFAEAGQAEAFAEAGQAEAGACAHQADAGACAHQACAHABAIQABAHAAAGQAAAGgBAGQgBAGgCAGQgCAGgDAGQgCAGgEAGQgEAFgEAGQgEAFgFAFQgEAEgGAEQgFAEgFAEQgGAEgGACQgGADgFACQgHACgGABQgGABgGAAQgVAAgUgJQgUgIgPgOQgPgPgJgSQgJgSAAgSQAAgGABgHQABgIACgHQACgHADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAIgCQAGgCAIgBQAHgBAGAAQAGAAAGABQAGABAHACIAAAA").cp();
	this.shape_113.setTransform(277.5,161.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFF00").s("#000000").ss(4,0,1).p("ABSg8QAEAFAEAGQAEAGACAHQADAGACAHQACAHABAIQABAHAAAGQAAAGgBAGQgBAGgCAHQgCAFgDAGQgCAGgEAGQgEAFgEAGQgEAFgFAFQgEAEgGAEQgFAEgFAEQgGAEgGACQgGADgFACQgHACgGABQgGABgGAAQgVAAgUgJQgUgIgPgOQgPgPgJgSQgJgRAAgTQAAgGABgHQABgIACgHQACgHADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAIgCQAGgCAIgBQAHgBAGAAQAGAAAGABQAGABAHACQAFACAGADQAGADAGADQAFAEAFAEQAGAFAEAFQAFAFAEAGIAAAA").cp();
	this.shape_114.setTransform(240.5,164.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFF00").s("#000000").ss(4,0,1).p("ABJhHQAFAFAEAGQAEAFAEAGQAEAGACAHQADAGACAHQACAHABAIQABAHAAAGQAAAGgBAGQgBAGgCAHQgCAFgDAGQgCAGgEAGQgEAFgEAGQgEAFgFAFQgEAEgGAEQgFAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgOQgPgPgJgSQgJgRAAgTQAAgGABgHQABgIACgHQACgHADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAIgCQAGgCAIgBQAHgBAGAAQAGAAAGABQAGABAGACQAGACAGADQAGADAGADQAFAEAFAEQAGAFAEAFIAAAA").cp();
	this.shape_115.setTransform(200.5,164.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(4,0,1).p("AGHmDQBWArBGA7QBGA7AzBIQAzBJAcBRQAbBSABBbQgBBDgQAxQgPAxgeAhQgeAigqAVQgqAVg1ALQg1ALg/AEQg+AEhGgBQhGAAhNgBQhMgChPAAQhQAAhMACQhMABhFAAQhGABg9gEQg+gEg0gLQg0gLgpgVQgqgVgdgiQgdghgPgxQgPgxgBhDQABhbAchSQAbhRAzhJQAzhIBHg7QBHg7BXgrQBXgqBkgXQBjgXBqAAQBpAABhAXQBiAXBWAqIAAAA").cp();
	this.shape_116.setTransform(214.5,82.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFF00").s("#000000").ss(4,0,1).p("ABggkQADAGACAHQACAHABAIQABAHAAAGQAAAGgBAGQgBAGgCAGQgCAGgDAGQgCAGgEAGQgEAFgEAGQgEAFgFAFQgEAEgGAEQgFAEgFAEQgGAEgGACQgGADgFACQgHACgGABQgGABgGAAQgVAAgUgJQgUgIgPgOQgPgPgJgSQgJgSAAgSQAAgGABgHQABgIACgHQACgHADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAIgCQAGgCAIgBQAHgBAGAAQAGAAAGABQAGABAHACQAGACAFADQAGADAGADQAFAEAFAFQAGAEAEAFQAFAFAEAGQAEAFAEAGQAEAGACAHIAAAA").cp();
	this.shape_117.setTransform(160.5,162.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFF00").s("#000000").ss(4,0,1).p("ABogIQABAHAAAGQAAAGgBAGQgBAGgCAHQgCAFgDAGQgCAGgEAGQgEAFgEAGQgEAFgEAFQgFAEgFAEQgGAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgOQgPgPgJgSQgJgSAAgSQAAgGABgHQABgIACgHQACgHADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAHgCQAHgCAIgBQAHgBAGAAQAGAAAGABQAGABAHACQAFACAGADQAGADAGADQAFAEAGAFQAFAEAFAFQAEAFAEAGQAEAFAEAGQAEAGACAHQADAGACAHQACAHABAIIAAAA").cp();
	this.shape_118.setTransform(121.5,158.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFF00").s("#000000").ss(4,0,1).p("AhngIQABgIACgHQACgHADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAHgCQAHgCAIgBQAHgBAGAAQAGAAAGABQAGABAHACQAFACAGADQAGADAGADQAFAEAGAFQAFAEAFAFQAEAFAEAGQAEAFAEAGQAEAGACAHQADAGACAHQACAHABAIQABAHAAAGQAAAGgBAGQgBAGgCAHQgCAFgDAGQgCAGgEAGQgEAFgEAGQgEAFgEAFQgFAEgFAEQgGAEgFAEQgGAEgGACQgGADgFACQgHACgGABQgGABgGAAQgVAAgUgJQgUgIgPgOQgPgPgJgSQgJgSAAgSQAAgGABgHIAAAA").cp();
	this.shape_119.setTransform(44.5,142.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFF00").s("#000000").ss(4,0,1).p("AAFhoQAGAAAGABQAGABAHACQAFACAGADQAGADAGADQAFAEAGAFQAFAEAFAFQAEAFAEAGQAEAFAEAGQAEAGACAHQADAGACAHQACAHABAIQABAHAAAGQAAAGgBAGQgBAGgCAGQgCAGgDAGQgCAGgEAGQgEAFgEAGQgEAFgEAFQgFAEgFAEQgGAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgOQgPgPgJgSQgJgSAAgSQAAgGABgHQABgIACgHQACgHADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAHgCQAHgCAIgBQAHgBAGAAIAAAA").cp();
	this.shape_120.setTransform(84.5,152.5);

	this.instance_2 = new lib.KopievanTimeline1();
	this.instance_2.setTransform(248.1,83.7,1,1,0,0,0,355.1,85.7);
	this.instance_2.alpha = 0.859;

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#0099CC").s("#000000").ss(4,0,1).p("AGHmDQBWAqBGA7QBHA7AyBJQAzBIAcBSQAOApAHArQAHAsAAAtQAABDgQAxQgQAxgeAiQgeAhgqAVQgqAVg1ALQg1ALg/AEQgdACgfABQggABggAAIgIAAIgvgBIgyAAIgygBIgzgBIg0gBIg0AAIg1AAIg0ABIgzABIgyABIgwAAIgvABIgIAAQggAAgfgBQgfgBgdgCQg+gEg0gLQg0gLgqgVQgpgVgdghQgdgigQgxQgPgxAAhDQAAgtAHgsQAHgrAOgpQAchSAzhIQAzhJBHg7QBHg7BXgqQArgVAvgRQAvgQAxgMQAygLA0gGQA0gGA0AAQA0AAAzAGQAzAGAxALQAwAMAuAQQAuARArAVIAAAA").cp();
	this.shape_121.setTransform(214.5,82.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#006600").s("#000000").ss(4,0,1).p("AdagRQAnARASAQQATAQgFAOQgEAOgdAKIikA2Ik6BJImoA0Ii8AMImHAPImZAEQhtAAhogCQhogChggDQhAgDg+gDQg9gDg6gEQg6gEg3gEQg3gEg0gFQg0gFgxgFQgygGgugFQgugGgsgGQgrgGgqgGQgpgHgmgGQgngHgkgGQgkgHgigHQgigHgfgHQgggHgdgHQgegHgbgHQgbgHgZgGIjvhJQgdgKgFgNQgFgLARgPQARgQAlgQQATgIAYgJQAXgIAcgJQASgFAVgGQAVgGAWgGQAXgGAYgFQAZgGAagGQAagGAcgFQAcgGAegGQAdgFAfgGQAggGAggFIBDgKQAigGAkgFQAkgFAlgFQAlgFAmgEQAngFAngEQAogFApgEQApgEAqgEQAqgEArgDQArgDAsgDQAsgEAtgCQAtgDAugCQAugDAvgCQAvgCAvgBQAwgCAwgBQAwgBAyAAQAxgBAxAAQAvAAAyABQAxAAAwACQAxABAwACQAvABAwADQAvACAuADQAvACAtAEQAtADAtAEQAtADArAEQAsAEArAFQAqAEAqAFQApAFApAFQAoAFAnAFQAnAFAmAGQAmAGAkAGQAlAFAjAHQAjAGAiAGQAhAGAgAGQAgAHAfAGQAeAHAdAGQAdAHAbAGQAbAHAZAHQAZAGAXAHQAYAGAVAHQAVAGAUAHQAdAJAZAKQAYAKAUAJIAAAA").cp();
	this.shape_122.setTransform(217.9,119);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#003333").s("#000000").ss(4,0,1).p("EAhcAA7QgUAdgmAcQgmAcg2AaQg3AahHAZQgXAIgZAIQgaAIgbAHQgaAIgcAIQgcAHgeAHQgeAHgfAHQggAHggAHQghAGgiAHQgiAGgjAHQgjAGglAFQgkAGgmAGQgmAFgnAFQgnAFgoAFQgnAFgpAFQgqAEgqAEQgqAEgrAEQgrAEgsADQgsADgtADQgtADgtADQguADguACQgvACgvACQgvABgwACQgwABgwABQgxABgxABQgxAAgxAAQhuAAhtgCQhtgDhpgEQhpgFhmgGQhlgHhhgIQhhgJhcgKQhcgKhWgMQhWgMhQgNQhQgOhKgPQhJgPhCgQQhDgRg6gRQg6gSgygTQgygTgqgTQhSgogsgqQgrgrgBgtQAAgdAUgdQAUgdAmgcQAmgcA2gaQA3gaBHgYQAXgJAZgIQAagIAagHQAbgIAcgHQAcgIAegHQAegHAfgHQAggHAggHQAhgGAigHQAigGAjgGQAjgHAlgFQAkgGAmgFQAmgGAngFQAngFAngFQAogFApgEQAqgFAqgEQAqgEArgEQArgEAsgDQAsgDAtgDQAtgDAtgDQAugDAugCQAvgCAvgCQAvgBAwgCQAwgBAwgBQAxgBAxAAQAxgBAwAAQAxAAAxABQAxAAAxABQAwABAwABQAwACAvABQAvACAvACQAuACAuADQAtADAtADQAtADAsADQAsADArAEQArAEAqAEQAqAEAqAFQApAEAnAFQAoAFAnAFQAnAFAmAGQAmAFAkAGQAlAFAjAHQAjAGAiAGQAiAHAhAGQAgAHAgAHQAfAHAeAHQAeAHAcAIQAcAHAaAIQAbAHAaAIQAZAIAXAJQBHAYA3AaQA2AaAmAcQAmAcAUAdQAUAdAAAdQAAAegUAdIAAAA").cp();
	this.shape_123.setTransform(216,135);

	this.addChild(this.shape_123,this.shape_122,this.shape_121,this.instance_2,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,432.1,179.1);


(lib.SpaceShip2 = function() {
	this.initialize();

	// Laag 1
	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(4,0,1).p("AAgApQgGAGgHAEQgHAEgHgBQgVAAgOgNQgNgOAAgXQgBgNAEgLQAEgLAGgIQAHgHAJgEQAJgEAKAAQAHAAAHAEQAHAEAGAHQAGAIADALQADALABANQgBAMgDAJQgDAJgGAHIAAAA").cp();
	this.shape_124.setTransform(144.5,5.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(4,0,1).p("AAyDcIhjm3");
	this.shape_125.setTransform(151,35);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFF00").s("#000000").ss(4,0,1).p("AgkhfQAGgDAIgCQAGgCAIgBQAHgBAGAAQAGAAAGABQAGABAHACQAFACAGADQAGADAGADQAFAEAFAEQAGAFAEAFQAFAFAEAGQAEAFAEAGQAEAGACAHQADAGACAHQACAHABAIQABAHAAAGQAAAGgBAGQgBAGgCAHQgCAFgDAGQgCAGgEAGQgEAFgEAGQgEAFgFAFQgEAEgGAEQgFAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgOQgPgPgJgSQgJgRAAgTQAAgGABgHQABgIACgHQACgHADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDIAAAA").cp();
	this.shape_126.setTransform(390.5,146.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFF00").s("#000000").ss(4,0,1).p("AgxhZQAGgDAHgDQAGgDAIgCQAGgCAIgBQAHgBAGAAQAGAAAGABQAGABAHACQAFACAGADQAGADAGADQAFAEAFAFQAGAEAEAFQAFAFAEAGQAEAFAEAGQAEAGACAHQADAGACAHQACAHABAIQABAHAAAGQAAAGgBAGQgBAGgCAHQgCAFgDAGQgCAGgEAGQgEAFgEAGQgEAFgFAFQgEAEgGAEQgFAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgOQgPgPgJgSQgJgRAAgTQAAgGABgHQABgIACgHQACgHADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEIAAAA").cp();
	this.shape_127.setTransform(355.5,154.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFF00").s("#000000").ss(4,0,1).p("ABSg8QAEAFAEAGQAEAGACAHQADAGACAHQACAHABAIQABAHAAAGQAAAGgBAGQgBAGgCAHQgCAFgDAGQgCAGgEAGQgEAFgEAGQgEAFgFAFQgEAEgGAEQgFAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgOQgPgPgJgSQgJgSAAgSQAAgGABgHQABgIACgHQACgHADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAIgCQAGgCAIgBQAHgBAGAAQAGAAAGABQAGABAGACQAGACAGADQAGADAGADQAFAEAFAFQAGAEAEAFQAFAFAEAGIAAAA").cp();
	this.shape_128.setTransform(317.5,158.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFF00").s("#000000").ss(4,0,1).p("AARhnQAGABAHACQAGACAFADQAGADAGADQAFAEAFAFQAGAEAEAFQAFAFAEAGQAEAFAEAGQAEAGACAHQADAGACAHQACAHABAIQABAHAAAGQAAAGgBAGQgBAGgCAGQgCAGgDAGQgCAGgEAGQgEAFgEAGQgEAFgFAFQgEAEgGAEQgFAEgFAEQgGAEgGACQgGADgFACQgHACgGABQgGABgGAAQgVAAgUgJQgUgIgPgOQgPgPgJgSQgJgSAAgSQAAgGABgHQABgIACgHQACgHADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAIgCQAGgCAIgBQAHgBAGAAQAGAAAGABIAAAA").cp();
	this.shape_129.setTransform(277.5,161.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFF00").s("#000000").ss(4,0,1).p("ABSg8QAEAFAEAGQAEAGACAHQADAGACAHQACAHABAIQABAHAAAGQAAAGgBAGQgBAGgCAHQgCAFgDAGQgCAGgEAGQgEAFgEAGQgEAFgFAFQgEAEgGAEQgFAEgFAEQgGAEgGACQgGADgFACQgHACgGABQgGABgGAAQgVAAgUgJQgUgIgPgOQgPgPgJgSQgJgRAAgTQAAgGABgHQABgIACgHQACgHADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAIgCQAGgCAIgBQAHgBAGAAQAGAAAGABQAGABAHACQAFACAGADQAGADAGADQAFAEAFAEQAGAFAEAFQAFAFAEAGIAAAA").cp();
	this.shape_130.setTransform(240.5,164.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFF00").s("#000000").ss(4,0,1).p("ABJhHQAFAFAEAGQAEAFAEAGQAEAGACAHQADAGACAHQACAHABAIQABAHAAAGQAAAGgBAGQgBAGgCAHQgCAFgDAGQgCAGgEAGQgEAFgEAGQgEAFgFAFQgEAEgGAEQgFAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgOQgPgPgJgSQgJgRAAgTQAAgGABgHQABgIACgHQACgHADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAIgCQAGgCAIgBQAHgBAGAAQAGAAAGABQAGABAGACQAGACAGADQAGADAGADQAFAEAFAEQAGAFAEAFIAAAA").cp();
	this.shape_131.setTransform(200.5,164.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(4,0,1).p("AGHmDQBWArBGA7QBGA7AzBIQAzBJAcBRQAbBSABBbQgBBDgQAxQgPAxgeAhQgeAigqAVQgqAVg1ALQg1ALg/AEQg+AEhGgBQhGAAhNgBQhMgChPAAQhQAAhMACQhMABhFAAQhGABg9gEQg+gEg0gLQg0gLgpgVQgqgVgdgiQgdghgPgxQgPgxgBhDQABhbAchSQAbhRAzhJQAzhIBHg7QBHg7BXgrQBXgqBkgXQBjgXBqAAQBpAABhAXQBiAXBWAqIAAAA").cp();
	this.shape_132.setTransform(214.5,82.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFF00").s("#000000").ss(4,0,1).p("ABggkQADAGACAHQACAHABAIQABAHAAAGQAAAGgBAGQgBAGgCAGQgCAGgDAGQgCAGgEAGQgEAFgEAGQgEAFgFAFQgEAEgGAEQgFAEgFAEQgGAEgGACQgGADgFACQgHACgGABQgGABgGAAQgVAAgUgJQgUgIgPgOQgPgPgJgSQgJgSAAgSQAAgGABgHQABgIACgHQACgHADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAIgCQAGgCAIgBQAHgBAGAAQAGAAAGABQAGABAHACQAGACAFADQAGADAGADQAFAEAFAFQAGAEAEAFQAFAFAEAGQAEAFAEAGQAEAGACAHIAAAA").cp();
	this.shape_133.setTransform(160.5,162.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFF00").s("#000000").ss(4,0,1).p("ABogIQABAHAAAGQAAAGgBAGQgBAGgCAHQgCAFgDAGQgCAGgEAGQgEAFgEAGQgEAFgEAFQgFAEgFAEQgGAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgOQgPgPgJgSQgJgSAAgSQAAgGABgHQABgIACgHQACgHADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAHgCQAHgCAIgBQAHgBAGAAQAGAAAGABQAGABAHACQAFACAGADQAGADAGADQAFAEAGAFQAFAEAFAFQAEAFAEAGQAEAFAEAGQAEAGACAHQADAGACAHQACAHABAIIAAAA").cp();
	this.shape_134.setTransform(121.5,158.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFF00").s("#000000").ss(4,0,1).p("AhngIQABgIACgHQACgHADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAHgCQAHgCAIgBQAHgBAGAAQAGAAAGABQAGABAHACQAFACAGADQAGADAGADQAFAEAGAFQAFAEAFAFQAEAFAEAGQAEAFAEAGQAEAGACAHQADAGACAHQACAHABAIQABAHAAAGQAAAGgBAGQgBAGgCAHQgCAFgDAGQgCAGgEAGQgEAFgEAGQgEAFgEAFQgFAEgFAEQgGAEgFAEQgGAEgGACQgGADgFACQgHACgGABQgGABgGAAQgVAAgUgJQgUgIgPgOQgPgPgJgSQgJgSAAgSQAAgGABgHIAAAA").cp();
	this.shape_135.setTransform(44.5,142.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFF00").s("#000000").ss(4,0,1).p("AAFhoQAGAAAGABQAGABAHACQAFACAGADQAGADAGADQAFAEAGAFQAFAEAFAFQAEAFAEAGQAEAFAEAGQAEAGACAHQADAGACAHQACAHABAIQABAHAAAGQAAAGgBAGQgBAGgCAGQgCAGgDAGQgCAGgEAGQgEAFgEAGQgEAFgEAFQgFAEgFAEQgGAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgOQgPgPgJgSQgJgSAAgSQAAgGABgHQABgIACgHQACgHADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAHgCQAHgCAIgBQAHgBAGAAIAAAA").cp();
	this.shape_136.setTransform(84.5,152.5);

	this.instance_3 = new lib.KopievanTimeline1();
	this.instance_3.setTransform(248.1,83.7,1,1,0,0,0,355.1,85.7);
	this.instance_3.alpha = 0.859;

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#0099CC").s("#000000").ss(4,0,1).p("AGHmDQBWAqBGA7QBHA7AyBJQAzBIAcBSQAOApAHArQAHAsAAAtQAABDgQAxQgQAxgeAiQgeAhgqAVQgqAVg1ALQg1ALg/AEQgdACgfABQggABggAAIgIAAIgvgBIgyAAIgygBIgzgBIg0gBIg0AAIg1AAIg0ABIgzABIgyABIgwAAIgvABIgIAAQggAAgfgBQgfgBgdgCQg+gEg0gLQg0gLgqgVQgpgVgdghQgdgigQgxQgPgxAAhDQAAgtAHgsQAHgrAOgpQAchSAzhIQAzhJBHg7QBHg7BXgqQArgVAvgRQAvgQAxgMQAygLA0gGQA0gGA0AAQA0AAAzAGQAzAGAxALQAwAMAuAQQAuARArAVIAAAA").cp();
	this.shape_137.setTransform(214.5,82.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#333333").s("#000000").ss(4,0,1).p("AdagRQAnARASAQQATAQgFAOQgEAOgdAKIggALIggALIghALIghAKIgiALIgiAKIgkAKIglAJIgmAKIgoAJIgpAJIgrAIIgtAIIgvAIIgyAIIgzAHIg2AHIg5AGIg7AGIg/AGIgrAEIgtADIguADIgvADIgyADIgyADIg1ADIg2ACIg4ACIg5ACIg8ABIg9ACIg/ABIhBABIhDABIhFABIhIAAIhJAAQhtAAhogCQhogChggDQhAgDg+gDQg9gDg6gEQg6gEg3gEQg3gEg0gFQg0gFgxgFQgygGgugFQgugGgsgGQgrgGgqgGQgpgHgmgGQgngHgkgGQgkgHgigHQgigHgfgHQgggHgdgHQgegHgbgHQgbgHgZgGIgxgOIgtgNIgpgMIg4gSIgwgQQgdgKgFgNQgFgLARgPQARgQAlgQQATgIAYgJQAXgIAcgJQASgFAVgGQAVgGAWgGQAXgGAYgFQAZgGAagGQAagGAcgFQAcgGAegGQAdgFAfgGQAggGAggFIBDgKQAigGAkgFQAkgFAlgFQAlgFAmgEQAngFAngEQAogFApgEQApgEAqgEQAqgEArgDQArgDAsgDQAsgEAtgCQAtgDAugCQAugDAvgCQAvgCAvgBQAwgCAwgBQAwgBAyAAQAxgBAxAAQAvAAAyABQAxAAAwACQAxABAwACQAvABAwADQAvACAuADQAvACAtAEQAtADAtAEQAtADArAEQAsAEArAFQAqAEAqAFQApAFApAFQAoAFAnAFQAnAFAmAGQAmAGAkAGQAlAFAjAHQAjAGAiAGQAhAGAgAGQAgAHAfAGQAeAHAdAGQAdAHAbAGQAbAHAZAHQAZAGAXAHQAYAGAVAHQAVAGAUAHQAdAJAZAKQAYAKAUAJIAAAA").cp();
	this.shape_138.setTransform(217.9,119);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#999999").s("#000000").ss(4,0,1).p("EAhcAA7QgUAdgmAcQgmAcg2AaQg3AahHAZQgXAIgZAIQgaAIgbAHQgaAIgcAIQgcAHgeAHQgeAHgfAHQggAHggAHQghAGgiAHQgiAGgjAHQgjAGglAFQgkAGgmAGQgmAFgnAFQgnAFgoAFQgnAFgpAFQgqAEgqAEQgqAEgrAEQgrAEgsADQgsADgtADQgtADgtADQguADguACQgvACgvACQgvABgwACQgwABgwABQgxABgxABQgxAAgxAAQhuAAhtgCQhtgDhpgEQhpgFhmgGQhlgHhhgIQhhgJhcgKQhcgKhWgMQhWgMhQgNQhQgOhKgPQhJgPhCgQQhDgRg6gRQg6gSgygTQgygTgqgTQhSgogsgqQgrgrgBgtQAAgdAUgdQAUgdAmgcQAmgcA2gaQA3gaBHgYQAXgJAZgIQAagIAagHQAbgIAcgHQAcgIAegHQAegHAfgHQAggHAggHQAhgGAigHQAigGAjgGQAjgHAlgFQAkgGAmgFQAmgGAngFQAngFAngFQAogFApgEQAqgFAqgEQAqgEArgEQArgEAsgDQAsgDAtgDQAtgDAtgDQAugDAugCQAvgCAvgCQAvgBAwgCQAwgBAwgBQAxgBAxAAQAxgBAwAAQAxAAAxABQAxAAAxABQAwABAwABQAwACAvABQAvACAvACQAuACAuADQAtADAtADQAtADAsADQAsADArAEQArAEAqAEQAqAEAqAFQApAEAnAFQAoAFAnAFQAnAFAmAGQAmAFAkAGQAlAFAjAHQAjAGAiAGQAiAHAhAGQAgAHAgAHQAfAHAeAHQAeAHAcAIQAcAHAaAIQAbAHAaAIQAZAIAXAJQBHAYA3AaQA2AaAmAcQAmAcAUAdQAUAdAAAdQAAAegUAdIAAAA").cp();
	this.shape_139.setTransform(216,135);

	this.addChild(this.shape_139,this.shape_138,this.shape_137,this.instance_3,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,432.1,179.1);


(lib.spiralfxg = function() {
	this.initialize();

	// Laag 1
	this.Group_2 = new lib.Timeline1();
	this.Group_2.setTransform(126.9,65.2,1,1,0,0,0,126.9,65.2);
	this.Group_2.alpha = 0.641;

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#FFFFFF").ss(8,0,1).p("AAThuQAEAAADABQAEACACACQADACACABQACABAAABQgBAHgGABQgFACgIAAQgEAAgEgBQgDAAgDgBQgDgBgCgCQAAgCAAgDQAAgEAAgCQACgCADgBQADgBADAAQAEAAAEAAIAAAAQAHAAAHAAQAIAAAFABQAGABADACQAEACAAAEQAAADgCAEQgCADgFADQgFADgHACQgIABgLABQgGAAgHgBQgGAAgGgBQgGgBgGgCQgFgCgDgEQgDgEAAgFQAAgEACgDQACgEAFgEQAEgEAGgEQAGgDAGgCQAIgCAJAAQAMAAALABQAMABAKACQAKADAIADQAIAEAEAFQAFAFAAAGQADAGgCAHQgCAGgGAHQgGAGgKAGQgLAFgOADQgOADgSABQgTAAgSgEQgTgEgRgGQgRgHgMgJQgMgJgEgLQgDgIACgIQADgIAHgIQAGgIALgHQALgHAOgFQAOgFARgDQARgDATAAQAWgDAWABQAWAAAVAEQAUAEASAGQARAGAOAJQAOAJAIAKQAJALADANQACAMgEANQgEANgKANQgLAMgQAMQgQALgWAJQgWAHgbAHQgcAGggADQgsAAgugIQgugHgogNQgogPgbgXQgbgWgIgeQgFgVAFgTQAGgUAPgSQAQgSAYgQQAYgPAhgNQAhgMApgIQAogIAugCQAvgFAwACQAwACAuAJQAtAJApAPQAoAPAgAVQAgAUAWAaQAVAZAIAfQAHAegJAeQgIAegYAaQgYAcglAZQgmAYgyATQgzATg+AMQg+AMhIADQgzADg2gBQg1gCg1gHQg0gHgygMQgygNgtgQQgtgRgngWQgngVgegaQgegYgUgeQgUgegHghQgNguANgsQANgtAjgqQAjgrA5glQA4glBLgdQBMgeBcgUQBdgUBqgHQBugIBuAIQBuAIBoAWQBnAWBbAjQBcAjBIAvQBJAvAwA6QAxA6ASBEQARBDgUBCQgTBEg3A/Qg2BAhWA4QhVA4hzAsQhzAtiOAdQiNAdilALQibALiNgGQiMgFiBgWQiAgVh4gmQh3glh0g0AAchjQAAACgBACQAAACgDABQgCABgDABIgKgKQAAAAABgBQACAAACgBQACgBABgCQACgCAAgD");
	this.shape_140.setTransform(109.1,65.2);

	this.addChild(this.shape_140,this.Group_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(6,14.7,222.8,101.1);


(lib.spiral = function() {
	this.initialize();

	// Laag 1
	this.instance_4 = new lib.spiralfxg("synched",0);
	this.instance_4.setTransform(13,11,1,1,0,0,0,122,65.5);

	this.addChild(this.instance_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-102.9,-39.8,222.8,101.1);


(lib.planet = function() {
	this.initialize();

	// Laag 3
	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#0099FF").ss(1.6,1,1).p("AE7rPQAPAAANAFQAMAFAKAKAKtjbIAUAyAJzm8IAACWAnGobIAAgoArAC0IAABQAFFFnIAUgBAEdHCQAKAFAKADADkKJQgBgCAAgCQgFAJgDAJQADgBADgBAEPJ8QgngDgqAWQATAIAKAAQgQAkABAV");
	this.shape_141.setTransform(5.5,8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#006600").s().p("AH+rRQAAgCAAgBQAGADAGACQADAEACAEQACADABAEQgBAEgCAEQgCADgDAEQgGADgGACQgGgCgHgDQgDgEgEgDQAAgEAAgEQAAgEAAgDQAEgEADgEQAHgBAGgBIAAAAAHxrgQgCADgDAEQgGADgGACQgGgCgHgDQgDgEgEgDQAAgEAAgEQAAgEAAgDQAEgEADgEQAHgBAGgBQAAgCAAgBQAGADAGACQADAEACAEQACADABAEQgBAEgCAEIAAAAAGksNQAAgCAAgBQAGADAGACQADAEACAEQACADABAEQgBAEgCAEQgCADgDAEQgGADgGACQgGgCgHgDQgDgEgEgDQAAgEAAgEQAAgEAAgDQAEgEADgEQAHgBAGgBIAAAAAGfrMQACgDADgCQAFAAAFAAQAAgCAAgBQAGADAGACQAEAEAEAEQACADADAEQACAEADAEQgBADgCAEQgBAEgBAEQgDACgCADQgFABgFABQgGgCgHgDQgDgEgEgDQgEgEgEgEQgBgEgBgDQAAgEAAgEQACgEADgDIAAAAAI3qnQAHgBAGgBQAAgCAAgBQAGADAGACQADAEACAEQACADABAEQgBAEgCAEQgCADgDAEQgGADgGACQgGgCgHgDQgBgBgCgCQgBACgBABQgGADgGACQgGgCgHgDQgDgEgEgDQAAgEAAgEQAAgEAAgDQAEgEADgEQAHgBAGgBQAAgCAAgBQAGADAGACQABACABABQACgBABgCIAAAAAJ2pcQAGADAGACQADAEACAEQACADABAEQgBAEgCAEQgCADgDAEQgGADgGACQgGgCgHgDQgDgEgEgDQAAgEAAgEQAAgEAAgDQAEgEADgEQAHgBAGgBQAAgCAAgBIAAAAAFMsfQADAEACAEQACADABAEQgBAEgCAEQgCADgDAEQgGADgGACQgGgCgHgDQgDgEgEgDQAAgEAAgEQAAgEAAgDQAEgEADgEQAHgBAGgBQAAgCAAgBQAGADAGACIAAAAAGDkZQACADABAEQAAAEAAAEQgBADgCAEQgBAEgBAEQgDACgCADQgCAAgBABQgDADgCADQgGADgGACQgFAAgFAAQgGgCgHgDQgDgEgEgDQAAgEAAgEQAAgEAAgDQAEgEADgEQAHgBAGgBQAAgCAAgBQAAgCAAgDQACgEADgDQACgDADgCQAFAAAFAAQAAgCAAgBQAGADAGACQADAEACAEIAAAAAGGkFQAEgEADgEQAHgBAGgBQAAgCAAgBQAGADAGACQADAEACAEQACADABAEQgBADgBACQAGgBAGgBQAAgCAAgBQAGADAGACQADAEACAEQACADABAEQAAgEAAgDQAAgEAAgEQACgEADgDQACgDADgCQAFAAAFAAQAAgCAAgBQAGADAGACQADAEACAEQACADABAEQAAAEAAAEQgBADgCAEQgBAEgBAEQgDACgCADQgFABgFABQgGgCgHgDQgDgEgEgDQAAgEAAgEQgBADgBACQABADABACQgBAEgCAEQgBABgBABQABACABABQACADABAEQgBADgBACQAGgBAGgBQAAgCAAgBQAGADAGACQADAEACAEQACADABAEQgBAEgCAEQgCADgDAEQgGADgGACQgGgCgHgDQgDgEgEgDQAAgEAAgEQAAgCAAgCQgFADgFABQgFAAgFAAQgGgCgHgDQgDgEgEgDQgDAAgCABQABACABACQACADABAEQgBAEgCAEQgCADgDAEQgGADgGACQgGgCgHgDQgDgEgEgDQAAgEAAgEQAAgEAAgDQAEgEADgEQgDgEgEgDQAAgEAAgEQAAgEAAgDQAAgEAAgEQACgEADgDQACgDADgCQAFAAAFAAQAAgCAAgBQACABACABQgCgCgCgCQAAgEAAgEQAAgEAAgDIAAAAAGGiQQAAgEAAgDQAEgEADgEQAHgBAGgBQAAgCAAgBQAGADAGACQADAEACAEQAAAAAAAAQADACACAAQADAEACAEQACADABAEQgBAEgCAEQgCADgDAEQgGADgGACQgGgCgHgDQgDgEgEgDQAAgBAAgBQgCAAgBgBQgDgEgEgDQAAgEAAgEIAAAAAHEkXQgGADgGACQgGgCgHgDQgDgEgEgDQAAgEAAgEQAAgEAAgDQAEgEADgEQAHgBAGgBQAAgCAAgBQAGADAGACQADAEACAEQACADABAEQgBAEgCAEQgCADgDAEIAAAAAGkjgQAAgBAAgBQAAgDAAgCQAAgBAAgCQAAgCAAgCQgFADgFABQgCAAgCgBQACACACACQACADADAEQABADACACQABAAABAAQAAgCAAgDIAAAAAHWiXQAFAAAFAAQAAgCAAgBQAGADAGACQADAEACAEQACADABAEQAAAEAAAEQgBADgCAEQgBAEgBAEQgDACgCADQgFABgFABQgGgCgHgDQgDgEgEgDQAAgEAAgEQAAgEAAgDQAAgEAAgEQACgEADgDQACgDADgCIAAAAAlnpwQAHADAGACQACAEADAEQABADABAEQgBAEgBAEQgDADgCAEQgGADgHACQgGgCgGgDQgEgEgEgDQAAgEAAgEQAAgEAAgDQAEgEAEgEQAGgBAGgBQAAgCAAgBIAAAAAkhpwQAHADAGACQACAEADAEQABADABAEQgBAEgBAEQgDADgCAEQgGADgHACQgGgCgGgDQgEgEgEgDQAAgEAAgEQAAgEAAgDQAEgEAEgEQAGgBAGgBQAAgCAAgBIAAAAAnBj+QAHADAGACQACAEADAEQABADABAEQgBAEgBAEQgDADgCAEQgGADgHACQgGgCgGgDQgEgEgEgDQAAgEAAgEQAAgEAAgDQAEgEAEgEQAGgBAGgBQAAgCAAgBIAAAAAnzkIQAHADAGACQACAEADAEQABADABAEQgBAEgBAEQgDADgCAEQgGADgHACQgGgCgGgDQgEgEgEgDQAAgEAAgEQAAgEAAgDQAEgEAEgEQAGgBAGgBQAAgCAAgBIAAAAAnXjHQAGgBAGgBQAAgCAAgBQAHADAGACQACAEADAEQABADABAEQgBAEgBAEQgDADgCAEQgGADgHACQgGgCgGgDQgEgEgEgDQAAgEAAgEQAAgEAAgDQAEgEAEgEIAAAAAldFtQAHACAGADQACADADAEQABAEABAEQgBADgBAEQgDAEgCAEQgGACgHADQgGgDgGgCQgEgEgEgEQAAgEAAgDQAAgEAAgEQAEgEAEgDQAGgCAGgBQAAgBAAgBIAAAAAjlFFQAHACAGADQACADADAEQABAEABAEQgBADgBAEQgDAEgCAEQgGACgHADQgGgDgGgCQgEgEgEgEQAAgEAAgDQAAgEAAgEQAEgEAEgDQAGgCAGgBQAAgBAAgBIAAAAAkhGLQAHACAGADQACADADAEQABAEABAEQgBADgBAEQgDAEgCAEQgGACgHADQgGgDgGgCQgEgEgEgEQAAgEAAgDQAAgEAAgEQAEgEAEgDQAGgCAGgBQAAgBAAgBIAAAAApoCgQgGACgHADQgGgDgGgCQgEgEgEgEQAAgEAAgDQAAgEAAgEQAEgEAEgDQAGgCAGgBQAAgBAAgBQAHACAGADQACADADAEQABAEABAEQgBADgBAEQgDAEgCAEIAAAAAprDPQAEgEAEgDQAGgCAGgBQAAgBAAgBQAHACAGADQACADADAEQABAEABAEQgBADgBAEQgDAEgCAEQgGACgHADQgGgDgGgCQgEgEgEgEQAAgEAAgDQAAgEAAgEIAAAAAEGJiQADADACAEQACAEABAEQgBADgCAEQgCAEgDAEQgDADgEAEQgDADgCACQgFABgFACQgGgDgHgCQgDgEgEgEQAAgEAAgDQAAgEAAgEQAEgEADgDQAEgEAEgEQACgCADgDQAFAAAFAAQAAgBAAgBQAGACAGADIAAAAADZKRQACAEABAEQAAADAAAEQAAAEAAAEQAAADAAAEQgDAEgCAEQgBACgCADQgBABgBABQgFABgFACQgGgDgHgCQgDgEgEgEQAAgEAAgDQAAgEAAgEQAAgEAAgDQAAgEAAgEQABgEABgDQADgDACgCQACgCABgBQAFAAAFAAQAAgBAAgBQAGACAGADQADADACAEIAAAAAEYJ4QAAgEAAgDQAAgEAAgEQAEgEADgDQAHgCAGgBQAAgBAAgBQAFAAAFAAQAGACAGADQADADACAEQACAEABAEQgBADgCAEQgCAEgDAEQgGACgGADQgFAAgFAAQgGgDgHgCQgDgEgEgEIAAAAAEOKkQAAgBAAAAQAAgEAAgEQABgBACgCQACgCACgCQAHgCAGgBQAAgBAAgBQAGACAGADQADADACAEQACAEABAEQgBADgCAEQgCAEgDAEQgGACgGADQgGgDgHgCQgDgEgEgEQAAgDAAgDIAAAAAFoJdQAGACAGADQADADACAEQACAEABAEQgBADgCAEQgCAEgDAEQgGACgGADQgGgDgHgCQgDgEgEgEQAAgEAAgDQAAgEAAgEQAEgEADgDQAHgCAGgBQAAgBAAgBIAAAAAGDLhQACAEABAEQgBACgBADQABACABADQgBADgCAEQgCAEgDAEQgGACgGADQgGgDgHgCQgDgEgEgEQAAgEAAgDQAAgCAAgBQAAgDAAgCQAAgBAAgBQAAgEAAgEQAEgEADgDQAHgCAGgBQAAgBAAgBQAGACAGADQADADACAEIAAAAAFALfQAGACAGADQADADACAEQACAEABAEQgBADgCAEQgCAEgDAEQgGACgGADQgGgDgHgCQgDgEgEgEQAAgEAAgDQAAgEAAgEQAEgEADgDQAHgCAGgBQAAgBAAgBIAAAAAEsMRQgBADgCAEQgCAEgDAEQgGACgGADQgGgDgHgCQgDgEgEgEQAAgEAAgDQAAgEAAgEQAEgEADgDQAHgCAGgBQAAgBAAgBQAGACAGADQADADACAEQACAEABAEIAAAA").cp();
	this.shape_142.setTransform(1,6.5);

	// Laag 2
	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#663300").ss(1.6,1,1).p("AIblnQAuAgAAAtAH5l6QgkgOgsAAAliooIAAAyAkcpGIAABkAkIp4ICCAAAsQgmIAAgsAsQA0IAAAiAmUGMQAAAZAYARQAXASAhAAAjCJ5Ih4hNIAyiWALVBCIA8BaAFhFpQgCAGgDAFAFFGSQgFADgFACAFqFJQABgHACgHIBjAAQA2gNAlAEQAABGheAyQheAyiEAAAD/B0QhDAAgvBGQguBGAABkIBGge");
	this.shape_143.setTransform(11.5,-3.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#723900").s().p("AAWroQAHgBAGgBQAAgCAAgBQAZAAAZAAQAGADAGACQADAEACAEQACADABAEQAAADAAACQACABADACQAHABAIABQAGADAGACQADAEACAEQACADABAEQgBAEgCAEQgCADgDAEQgGADgGACQgFAAgFAAQgJgCgJgDQgLgEgLgDQgEgEgEgEQgBgCgBgDQAAgBAAgBQgPgCgPgBQgGgCgHgDQgDgEgEgDQAAgEAAgEQAAgEAAgDQAEgEADgEIAAAAAEQquQACACABADQAAABAAABQAGADAGACQADAEACAEQACADABAEQgBAEgCAEQgCADgDAEQgGADgGACQgKAAgKAAQgGgCgHgDQgDgEgEgDQAAgEAAgEQAAgEAAgDQAAgEAAgEQAAgEAAgDQABgEABgEQADgCACgDQACgBABgBQAFAAAFAAQAAgCAAgBQAGADAGACQADAEACAEIAAAAAClkXQAAAEAAAEQAAADAAAEQAAAEAAAEQAAADAAAEQAAAEAAAEQAAADAAAEQAAAEAAAEQAAADAAAEQgBAEgCAEQgCADgDAEQgCABgBABQAAACABABQAAAEAAAEQAAADAAAEQAAAEAAAEQgDADgCAEQgDAEgCAEQgDADgCAEQgDAEgCAEQgDADgCAEQgDAEgCAEQgEADgEAEQgGADgGACQgGgCgHgDQgDgEgEgDQAAgEAAgEQAAgEAAgDQAEgEADgEQADgEACgDQACgCABgDQgDgCgCgDQAAgEAAgEQAAgEAAgDQAEgEADgEQAHgBAGgBQAAgCAAgBQAAgEAAgDQAEgEADgEQABAAACAAQAAgCAAgDQAAgEAAgDQAAgEAAgEQAAgEAAgDQAAgEAAgEQAAgEAAgDQAAgEAAgEQAAgEAAgDQAAgEAAgEQAAgEAAgDQAEgEADgEQAHgBAGgBQAAgCAAgBQAGADAGACQADAEACAEQACADABAEIAAAAAJxmAQAAgBAAgBQAEgEADgEQAHgBAGgBQAAgCAAgBQAGADAGACQADAEACAEQACADABAEQgBAEgCAEQgCACgBADQgBABgBABQgGADgGACQgGgCgHgDQgDgEgEgDQAAgEAAgEQAAgCAAgDIAAAAAK3k/QAAAEAAAEQAAADAAAEQAAAEAAAEQAAADAAAEQAAAEAAAEQAAADAAAEQAAAEAAAEQAAADAAAEQAAAEAAAEQAAADAAAEQAAAEAAAEQAAADAAAEQAAAEAAAEQAAADAAAEQAAAEAAAEQAAADAAAEQgBAEgCAEQgCADgDAEQgGADgGACQgFAAgFAAQgGgCgHgDQgDgEgEgDQAAgEAAgEQAAgEAAgDQAEgEADgEQACgEABgDQAAgEAAgEQAAgEAAgDQAAgEAAgEQAAgEAAgDQAAgEAAgEQAAgEAAgDQAAgEAAgEQAAgEAAgDQAAgEAAgEQAAgEAAgDQAAgEAAgEQAAgEAAgDQAAgEAAgEQAAgEAAgDQAEgEADgEQAHgBAGgBQAAgCAAgBQAGADAGACQADAEACAEQACADABAEIAAAAAIykZQgCADgDAEQgGADgGACQgGgCgHgDQgDgEgEgDQAAgEAAgEQAAgEAAgDQAEgEADgEQAHgBAGgBQAAgCAAgBQAGADAGACQADAEACAEQACADABAEQgBAEgCAEIAAAAAqYgtQACABABAAQACAEADAEQABADABAEQAAAEAAAEQAAADAAAEQAAAEAAAEQACAEABACQABADABAEQAEAEAEAEQACADADAEQABAEABAEQgBADgBAEQgDAEgCAEQgGACgHADQgEgDgGgBQgBgBgBAAQgEgEgEgEQgDgEgEgDQgDgEgCgEQgBgEgCgDQgCgEgDgEQAAgEAAgDQAAgCAAgEQAAgEAAgEQAAgEAAgDQAAgEAAgEQAAgEAAgDQAEgEAEgEQAGgBAGgBQAAgCAAgBQAGACAEACIAAAAApcGuQAHACAGADQACADADAEQABAEABAEQgBADgBAEQgDAEgCAEQgGACgHADQgGgDgGgCQgEgEgEgEQAAgEAAgDQAAgEAAgEQAEgEAEgDQAGgCAGgBQAAgBAAgBIAAAAAhKJzQAAgDAAgCQAEgEAEgDQAGgCAGgBQAAgBAAgBQAHACAGADQACADADAEQABAEABAEQgBADgBAEQgBACgCACQAEACAEACQACADADAEQABAEABAEQAAADAAAEQAAAEAAAEQAAADAAAEQgCAEgDAEQgBACgBADQgBABgCABQgCABgDAAQACACABACQABAEABAEQgBADgBAEQgDAEgCAEQgBADgCAEQgCAEgDAEQgBACgBADQgBABgCABQgFABgFACQgGgDgGgCQgEgEgEgEQAAgEAAgDQAAgEAAgEQAAgEAAgDQADgEACgEQAEgEAEgDQACgDADgCQABgCABgBQADAAADAAQgDgDgDgCQAAgEAAgDQAAgEAAgEQAAgEAAgDQAAgEAAgEQACgEABgDQABgCABgBQgDgBgEgBQgEgEgEgEQAAgEAAgDQAAgCAAgBIAAAAAgYKAQAAgEAAgEQAEgEAEgDQAGgCAGgBQAAgBAAgBQAFACAGADQADADACAEQACAEABAEQgBADgCAEQgCAEgDAEQgGACgFADQgGgDgGgCQgEgEgEgEQAAgEAAgDIAAAAAIZFPQADADACAEQACAEABAEQgBADgCAEQgCAEgDAEQgGACgGADQgGgDgHgCQgDgEgEgEQAAgEAAgDQAAgEAAgEQAEgEADgDQAHgCAGgBQAAgBAAgBQAGACAGADIAAAAAHiFDQABgBACAAQAAgBAAgBQAGACAGADQADADACAEQACAEABAEQgBADgCAEQgCAEgDAEQgGACgGADQgGgDgGgCQgBAAAAAAQgDgEgEgEQAAgEAAgDQAAgEAAgEQAEgEADgDQAFgCAFAAIAAAAAG9GMQgBgBgCAAQgDgEgEgEQAAgEAAgDQAAgEAAgEQAEgEADgDQAHgCAGgBQAAgBAAgBQAGACAGADQABAAAAABQACADACADQACAEABAEQgBADgCAEQgCAEgDAEQgGACgGADQgFgCgFgCIAAAA").cp();
	this.shape_144.setTransform(-0.4,-2.9);

	// Laag 1
	this.instance_5 = new lib.planetfxg("synched",0);
	this.instance_5.setTransform(9,6,1,1,0,0,0,87,84.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#0099FF").ss(1.6,1,1).p("AkAmoIAJCKIABAKAi/onIAHAPQBwHYGLDHQCMBdBIByIuNDSAoWnSQASAHACAXIBQDSAkIoYIAIBwAoCl4IAABa");
	this.shape_145.setTransform(16.5,28.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#0099CC").s().p("AkKiaQACAEADAEQABADABAEQAAAEAAAEQAAABAAABQAHADAGACQACAEADAEQABADABAEQAAAEAAAEQACADABAEQABAEABAEQACADABAEQABAEABAEQACADABAEQABAEABAEQACADABAEQABAEABAEQAAADAAAEQAAAEAAAEQAAADAAAEQACAEABAEQACADADAEQACAEADACQACAEADAEQAEADADAEQAEADAEAFQAEADADAEQAEAEAEAEQABADABAEQADAEACAEQACADABAEQABAEABAEQgBADgBAEQgDAEgCAEQgGACgHADQgGgDgGgCQgEgEgEgEQgBgEgBgDQgDgEgCgEQgDgEgCgDQgEgEgEgEQgDgEgEgDQgEgEgEgEQgDgEgEgDQgDgFgCgDQgDgEgCgDQgDgEgCgEQgBgCgCgEQAAgEAAgDQAAgEAAgEQAAgEAAgDQAAgEAAgEQgBgEgBgDQgBgEgCgEQgBgEgBgDQgBgDgBgDQgCgBgBgBQgEgEgEgDQgBgEgBgEQgDgEgCgDQgBgEgCgEQgCgEgDgDQgBgEgBgEQgBgEgCgDQAAgEAAgEQAAgEAAgDQAAgEAAgEQAAgEAAgDQAEgEAEgEQAGgBAGgBQAAgCAAgBQAHADAGACIAAAAACwgTQABACAAABQAAADAAAEQACAEABAEQABACABAEQACADABAEQABAEABAEQACADABAEQABADABAFQACADABAEQABAEABAEQACADABAEQABAEABAEQACADABAEQABAEABAEQACADABAEQABAEABAEQACADABAEQABAEABAEQACADABAEQAAAEAAAEQABADABAEQACAEABAEQABADABAEQACAEABAEQABADABAEQACAEABAEQABADABAEQACAEABAEQABADABAEQACAEABAEQABADABAEQADAEACAEQACADABAEQABAEABAEQADADACAEQACAEABAEQABADABAEQADAEACAEQACADABAEQACAEADAEQABADABAEQADAEACAEQAEADAEAEQABAEABAEQACADABAEQgDAEgCAEQgBACgCADQgBABgBABQgFABgFACQgGgDgHgCQgDgEgEgEQgEgEgEgDQgCgEgDgEQgBgEgBgDQgDgEgCgEQgBgEgCgDQgCgEgDgEQgBgEgBgDQgDgEgCgEQgBgEgCgDQgBgEgBgEQgDgEgCgDQgBgEgCgEQgBgEgBgDQgBgEgCgEQgCgEgDgDQgBgEgBgEQgBgEgCgDQgBgEgBgEQgBgEgCgDQgBgEgBgEQgBgEgCgDQAAgEAAgEQgBgEgBgDQgBgEgCgEQgBgEgBgDQgBgEgCgEQgBgEgBgDQgBgEgCgEQgBgEgBgDQgBgEgCgEQgBgEgBgDQgBgEgCgEQgBgEgBgDQgBgEgCgEQgBgEgBgDQgBgEgCgEQgBgEgBgDQgBgEgCgEQgBgEgBgDQgBgFgCgDQgBgEgBgDQAAgEAAgEQgBgCgCgEQgBgEgBgDQAAgEAAgEQgBgEgCgDQAAgEAAgEQgBgEgBgDQgBgEgCgEQAAgEAAgDQgBgDgBgDQAAAAAAABQgBADgCAEQgCAEgDAEQgBADgBAEQgBAEgCAEQgBADgBAEQgDAEgCAEQgBADgCAEQgCAEgDAEQgBACgBAEQgDADgCAEQAAAEAAAEQAAADAAAEQAAADAAAFQAAADAAAEQgDAEgCAEQgCACgBADQgBABgBABQgFABgFACQgHgDgGgCQgEgEgDgEQAAgEAAgDQAAgEAAgEQAAgEAAgDQAAgFAAgDQAAgEAAgDQAAgEAAgEQACgCADgEQABgEABgDQADgEACgEQABgEACgDQACgEADgEQABgEABgDQABgEACgEQABgEABgDQADgEACgEQABgEACgDQABgEABgEQADgEACgDQABgEACgEQABgEABgDQABgEACgEQABgEABgDQACgEABgEQABgEABgDQAAgEAAgEQgBgEgBgDQgBgEgCgEQgBgEgBgDQAAgEAAgEQgCgEgBgDQAAgEAAgEQgBgEgBgDQAAgEAAgEQgCgEgBgDQAAgEAAgEQAAgEAAgDQgBgEgBgEQAAgEAAgDQAAgEAAgEQAAgEAAgDQAAgEAAgEQAAgEAAgDQAAgEAAgEQAAgEAAgDQAAgEAAgEQAAgEAAgDQAAgEAAgEQAAgEAAgDQABgEABgEQADgCACgDQABgBACgBQAFAAAFAAQAAgCAAgBQAGADAGACQADAEACAEQACADABAEQAAAEAAAEQAAADAAAEQAAAEAAAEQAAADAAAEQAAAEAAAEQAAADAAAEQAAAEAAAEQAAADAAAEQAAAEAAAEQAAADAAAEQABAEABAEQAAADAAAEQABACAAABQABgDABgCQAAgEAAgEQABgEABgDQACgEABgEQAAgEAAgDQABgEABgEQADgCACgDQACgBABgBQAFAAAFAAQAAgCAAgBQAGADAGACQADAEACAEQACADABAEQAAAEAAAEQAAADAAAEQgBAEgCAEQgBADgBAEQAAAEAAAEQgBACgBACQAFACAEABQAEAEAEAEQAEADADAEQACAEABAEQACADADAEQACAEADAEQACADADAEQACAEADAEQACADADAEQAEAEADAEQADADACAEQADAEACAEQADADACAEQADAEACAEQACADABAEQACAEADAEQgBADgCAEQgBAEgBAEQgDACgCADQgFABgFABQgGgCgHgDQgDgEgEgDQgDgEgCgEQgDgEgCgDQgDgEgCgEQgDgEgCgDQgDgEgCgEQgDgEgCgDQgEgEgEgEQgCgEgDgDQgCgEgDgEQgCgEgDgDQgBgEgBgEQgCgBgBgCQAAABAAAAQgBADgBAEQgBAEgCAEQgBADgBAEQgBAEgCAEQAAACgBACQABABAAACQACAEABAEQABADABAEQAAAEAAAEQACADABAEQABAEABAEQAAADAAAEQACAEABAEQABADABAEQAAAEAAAEQACADABAEQAAAEAAAEQABADABAEQACAEABAEQAAADAAAEQABADAAACIABAKIgBgKADwkNQgBAEgCAEQgCADgDAEQgGADgGACQgGgCgHgDQgDgEgEgDQAAgEAAgEQAAgEAAgDQAEgEADgEQAHgBAGgBQAAgCAAgBQAGADAGACIAIAPIgIgPQADAEACAEQACADABAEIAAAAACgkNIAHBxIgHhx").cp();
	this.shape_146.setTransform(-25.9,2);

	this.addChild(this.shape_146,this.shape_145,this.instance_5,this.shape_144,this.shape_143,this.shape_142,this.shape_141);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-77.9,-78.7,174.1,169.5);


(lib.mcTextRocketShipInCorrect = function() {
	this.initialize();

	// text
	this.inCorrectRocketText = new cjs.Text("454 dm", "26px Arial");
	this.inCorrectRocketText.textAlign = "center";
	this.inCorrectRocketText.lineHeight = 38;
	this.inCorrectRocketText.lineWidth = 238;
	this.inCorrectRocketText.setTransform(140,17);

	// ship
	this.instance_6 = new lib.RocketShipInCorrect("synched",0);
	this.instance_6.setTransform(216,68.5,1,1,0,0,180,216,88.5);

	this.addChild(this.instance_6,this.inCorrectRocketText);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.1,-22,435.1,143.1);


(lib.mcTextRocketShipCorrect = function() {
	this.initialize();

	// text
	this.correctRocketText = new cjs.Text("454 dm", "26px Arial");
	this.correctRocketText.textAlign = "center";
	this.correctRocketText.lineHeight = 36;
	this.correctRocketText.lineWidth = 238;
	this.correctRocketText.setTransform(140,17);

	// ship
	this.instance_7 = new lib.RocketShipCorrect("synched",0);
	this.instance_7.setTransform(216,68.5,1,1,0,0,180,216,88.5);

	this.addChild(this.instance_7,this.correctRocketText);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.1,-22,435.1,143.1);


(lib.mcStar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Laag 1
	this.instance_8 = new lib.star("synched",0);
	this.instance_8.setTransform(0,2.1,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:0.5,scaleY:0.4,y:2},99).to({startPosition:0},1).to({scaleX:1,scaleY:1,y:2.1},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.9,-25.9,54.1,56.1);


(lib.mcSpiral = function() {
	this.initialize();

	// Laag 1
	this.instance_9 = new lib.spiral("synched",0);
	this.instance_9.setTransform(11,25.1,1,1,0,0,0,38.5,0.5);

	this.addChild(this.instance_9);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-130.4,-15.2,222.8,101.1);


(lib.mcRock = function() {
	this.initialize();

	// Laag 3
	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AhSiqQgDgEgFAAQgFAAgEAEQgEAEAAAFQAAAFAEADQAEAEAFAAQAFAAADgEQAEgDAAgFQAAgFgEgEIAAAAAkni+QAAgFgEgEQgDgDgFAAQgFAAgEADQgEAEAAAFQAAAFAEAEQAEAEAFAAQAFAAADgEQAEgEAAgFIAAAAAkwASQAAgFgEgEQgDgEgFAAQgFAAgEAEQgEAEAAAFQAAAFAEADQAEAEAFAAQAFAAADgEQAEgDAAgFIAAAAAgQheQAAgFgEgEQgEgDgFAAQgFAAgEADQgDAEAAAFQAAAFADAEQAEAEAFAAQAFAAAEgEQAEgEAAgFIAAAAADckAQgFAAgEADQgEAEAAAFQAAAFAEAEQAEAEAFAAQAFAAADgEQAEgEAAgFQAAgFgEgEQgDgDgFAAIAAAAAE0iFQAEAEAFAAQAFAAAEgEQAEgDAAgFQAAgFgEgEQgEgEgFAAQgFAAgEAEQgDAEAAAFQAAAFADADIAAAAAC+D1QAAgFgEgEQgDgEgFAAQgFAAgEAEQgEAEAAAFQAAAFAEADQAEAEAFAAQAFAAADgEQAEgDAAgFIAAAAAi8CaQgDgEgFAAQgFAAgEAEQgEAEAAAFQAAAFAEADQAEAEAFAAQAFAAADgEQAEgDAAgFQAAgFgEgEIAAAAAklCqQAEgDAAgFQAAgFgEgEQgDgEgFAAQgFAAgEAEQgEAEAAAFQAAAFAEADQAEAEAFAAQAFAAADgEIAAAA").cp();
	this.shape_147.setTransform(-41.6,-12.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AljBsQAAgFgEgEQgEgEgFAAQgFAAgEAEQgDAEAAAFQAAAFADAEQAEADAFAAQAFAAAEgDQAEgEAAgFIAAAAAioh6QAAgFgEgEQgDgEgFAAQgFAAgFAEQgDAEAAAFQAAAFADADQAFAEAFAAQAFAAADgEQAEgDAAgFIAAAAAiggUQAAgFgFgEQgDgDgFAAQgFAAgEADQgDAEAAAFQAAAFADAEQAEAEAFAAQAFAAADgEQAFgEAAgFIAAAAAjvBkQAAgFgEgEQgEgEgFAAQgFAAgDAEQgEAEAAAFQAAAFAEADQADAEAFAAQAFAAAEgEQAEgDAAgFIAAAAACFgwQAAgFgEgEQgEgEgFAAQgFAAgEAEQgDAEAAAFQAAAFADADQAEAEAFAAQAFAAAEgEQAEgDAAgFIAAAAADtATQgFAAgEADQgDAEAAAFQAAAFADAEQAEAEAFAAQAFAAAEgEQAEgEAAgFQAAgFgEgEQgEgDgFAAIAAAAADogTQAAgFgEgEQgDgDgFAAQgFAAgEADQgEAEAAAFQAAAFAEAEQAEAEAFAAQAFAAADgEQAEgEAAgFIAAAAADOAIQAAgFgEgDQgEgCgFAAQgFAAgEACQgDADAAAFQAAAFADAEQAEAEAFAAQAFAAAEgEQAEgEAAgFIAAAAAF9B7QAAgFgEgEQgDgEgFAAQgFAAgEAEQgEAEAAAFQAAAFAEAEQAEADAFAAQAFAAADgDQAEgEAAgFIAAAA").cp();
	this.shape_148.setTransform(-48.5,-21.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AAGiFQgEgDgDAAQgFAAgEADQgDAEAAAFQAAAFADAEQACABABABQABACACACQAEAEADAAQAFAAADgEQAEgEAAgFQAAgFgEgEQgBgBgBgBQgBgCgCgCIAAAAAj2jxQAAgFgFgEQgDgEgFAAQgFAAgEAEQgEAEAAAFQAAAFAEADQAEAEAFAAQAFAAADgEQAFgDAAgFIAAAAAjdgiQAAgFgEgEQgDgDgFAAQgFAAgEADQgEAEAAAFQAAAFAEAEQAEAEAFAAQAFAAADgEQAEgEAAgFIAAAAAjSBnQgEgDgFAAQgFAAgEADQgDAEAAAFQAAAFADAEQAEAEAFAAQAFAAAEgEQAEgEAAgFQAAgFgEgEIAAAAAgQgZQAAgFgEgEQgDgDgFAAQgFAAgEADQgEAEAAAFQAAAFAEAEQAEAEAFAAQAFAAADgEQAEgEAAgFIAAAAAB7BBQAAgFgEgEQgEgDgFAAQgFAAgEADQgDAEAAAFQAAAFADAEQAEAEAFAAQAFAAAEgEQAEgEAAgFIAAAAAENgLQgEgDgFAAQgFAAgEADQgEAEAAAFQAAADAEAEQAEAEAFAAQAFAAAEgEQAEgEAAgDQAAgFgEgEIAAAAAiwDyQAAgFgEgEQgEgDgFAAQgFAAgEADQgDAEAAAFQAAAFADAEQAEAEAFAAQAFAAAEgEQAEgEAAgFIAAAA").cp();
	this.shape_149.setTransform(-44.2,-13.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AlCijQAAgFgEgEQgEgDgFAAQgFAAgDADQgEAEAAAFQAAAFAEAEQADAEAFAAQAFAAAEgEQAEgEAAgFIAAAAAjpjEQgDAEAAAFQAAAFADADQAEAEAFAAQAFAAAEgEQAEgDAAgFQAAgFgEgEQgEgEgFAAQgFAAgEAEIAAAAAhghjQAAgFgEgEQgEgDgFAAQgFAAgDADQgEAEAAAFQAAAFAEAEQADAEAFAAQAFAAAEgEQAEgEAAgFIAAAAAFchkQAAgFgEgEQgDgDgFAAQgFAAgEADQgEAEAAAFQAAAFAEAEQAEAEAFAAQAFAAADgEQAEgEAAgFIAAAAAEbgoQAAgFgEgEQgDgEgFAAQgFAAgEAEQgEAEAAAFQAAAFAEADQAEAEAFAAQAFAAADgEQAEgDAAgFIAAAAACnCzQgEAEAAAFQAAAFAEAEQAEAEAFAAQAFAAADgEQAEgEAAgFQAAgFgEgEQgDgDgFAAQgFAAgEADIAAAAAB9AcQgFAAgEADQgDAEAAAFQAAAFADADQAEAFAFAAQACAAACgBQABACABABQAEAEAFAAQAFAAAEgEQAEgDAAgFQAAgFgEgEQgEgEgFAAQgCAAgCAAQgBgBgBgCQgEgDgFAAIAAAAAhXAAQAAgFgEgEQgEgDgFAAQgFAAgEADQgDAEAAAFQAAADADAEQAEAEAFAAQAFAAAEgEQAEgEAAgDIAAAA").cp();
	this.shape_150.setTransform(-36.3,6.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("Ag0k9QgDAEAAAFQAAAFADAEQAEAEAFAAQAFAAAEgEQAEgEAAgFQAAgFgEgEQgEgDgFAAQgFAAgEADIAAAAABshRQAFAAAEgEQAEgDAAgFQAAgFgEgEQgEgEgFAAQgFAAgEAEQgDAEAAAFQAAAFADADQAEAEAFAAIAAAAACninQAAgFgEgEQgDgEgFAAQgFAAgEAEQgEAEAAAFQAAAFAEADQAEAEAFAAQAFAAADgEQAEgDAAgFIAAAAAAKgCQAAgFgEgEQgDgEgDAAQgFAAgEAEQgEAEAAAFQAAADAEADQAEAEAFAAQADAAADgEQAEgDAAgDIAAAAADSA1QAEAEAFAAQAFAAADgEQAEgDAAgFQAAgFgEgEQgDgEgFAAQgFAAgEAEQgEAEAAAFQAAAFAEADIAAAAAEQg4QgDgEgFAAQgFAAgEAEQgEAEAAAFQAAAFAEADQAEAEAFAAQAFAAADgEQAEgDAAgFQAAgFgEgEIAAAAAB8DiQAAgFgEgEQgDgEgFAAQgFAAgEAEQgEAEAAAFQAAAFAEADQAEAEAFAAQAFAAADgEQAEgDAAgFIAAAAAj6iOQAAgFgEgEQgEgEgFAAQgFAAgEAEQgDAEAAAFQAAAFADADQAEAEAFAAQAFAAAEgEQAEgDAAgFIAAAAAjlE1QAAgFgEgEQgDgEgFAAQgFAAgEAEQgEAEAAAFQAAAFAEADQAEAEAFAAQAFAAADgEQAEgDAAgFIAAAA").cp();
	this.shape_151.setTransform(19.1,-18.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AArkYQgDAEAAAFQAAAFADAEQAEAEAFAAQAFAAAEgEQAEgEAAgFQAAgFgEgEQgEgDgFAAQgFAAgEADIAAAAAAqksQgDgDgFAAQgFAAgEADQgEAEAAAFQAAAFAEAEQAEAEAFAAQAFAAADgEQAEgEAAgFQAAgFgEgEIAAAAAAQjfQgDgDgFAAQgFAAgDADQgDAEAAAFQAAAFADAEQADAEAFAAQAFAAADgEQAEgEAAgFQAAgFgEgEIAAAAAABgfQAAgFgCgEQgEgDgFAAQgFAAgEADQgDAEAAAFQAAAFADAEQAEAEAFAAQAFAAAEgEQACgEAAgFIAAAAAFKheQgEgDgFAAQgFAAgEADQgDAEAAAFQAAAFADAEQAEAEAFAAQAFAAAEgEQAEgEAAgFQAAgFgEgEIAAAAAhdCMQAAgFgEgEQgDgEgFAAQgFAAgEAEQgEAEAAAFQAAAFAEADQAEAEAFAAQAFAAADgEQAEgDAAgFIAAAAAkaDXQgDgEgFAAQgFAAgEAEQgEAEAAAFQAAAFAEADQAEAEAFAAQAFAAADgEQAEgDAAgFQAAgFgEgEIAAAAAk0EQQAAgFgEgEQgDgEgFAAQgFAAgEAEQgEAEAAAFQAAAFAEADQAEAEAFAAQAFAAADgEQAEgDAAgFIAAAAAjjEkQAAgFgEgEQgDgEgFAAQgFAAgEAEQgEAEAAAFQAAAFAEADQAEAEAFAAQAFAAADgEQAEgDAAgFIAAAA").cp();
	this.shape_152.setTransform(4.8,-49.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AEWA4QAAAFAEAEQAEADAFAAQAFAAADgDQAEgEAAgFQAAgFgEgEQgDgEgFAAQgFAAgEAEQgEAEAAAFIAAAAADjAuQAAgFgFgEQgDgEgFAAQgFAAgEAEQgDAEAAAFQAAAFADADQAEAEAFAAQAFAAADgEQAFgDAAgFIAAAAADfBLQAAgFgEgEQgDgEgGAAQgFAAgDAEQgEAEAAAFQAAAFAEADQADAEAFAAQAGAAADgEQAEgDAAgFIAAAAAA+khQAAgFgEgEQgDgDgFAAQgFAAgEADQgEAEAAAFQAAAFAEAEQAEAEAFAAQAFAAADgEQAEgEAAgFIAAAAAB/iXQgDgDgFAAQgFAAgEADQgDAEAAAFQAAAFADADQAEAFAFAAQAFAAADgFQAFgDAAgFQAAgFgFgEIAAAAAiXCIQgDgEgFAAQgFAAgFAEQgDAEAAAFQAAAFADADQAFAEAFAAQAFAAADgEQAEgDAAgFQAAgFgEgEIAAAAAB9AzQAAgFgEgEQgEgEgFAAQgFAAgEAEQgDAEAAAFQAAAFADADQAEAEAFAAQAFAAAEgEQAEgDAAgFIAAAAAkVCeQAAgFgEgEQgEgDgFAAQgFAAgEADQgDAEAAAFQAAAFADAEQAEAEAFAAQAFAAAEgEQAEgEAAgFIAAAAACHEiQAAgFgEgEQgEgEgFAAQgFAAgEAEQgDAEAAAFQAAAFADADQAEAEAFAAQAFAAAEgEQAEgDAAgFIAAAA").cp();
	this.shape_153.setTransform(-17.4,30.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AjjCKQAAgFgEgEQgEgEgFAAQgFAAgEAEQgDAEAAAFQAAAFADADQAEAEAFAAQAFAAAEgEQAEgDAAgFIAAAAACmj6QgDgEgFAAQgFAAgEAEQgEAEAAAFQAAAFAEADQAEAEAFAAQAFAAADgEQAEgDAAgFQAAgFgEgEIAAAAABDj8QAAgFgEgEQgDgDgFAAQgFAAgEADQgEAEAAAFQAAAFAEAEQAEAEAFAAQAFAAADgEQAEgEAAgFIAAAAAiekSQgDgDgFAAQgFAAgEADQgEAEAAAFQAAAFAEAEQAEAEAFAAQAFAAADgEQAEgEAAgFQAAgFgEgEIAAAAAA+gWQAAgFgEgEQgEgDgFAAQgFAAgEADQgDAEAAAFQAAAFADAEQAEAEAFAAQAFAAAEgEQAEgEAAgFIAAAAAAxBVQAAgFgEgEQgEgDgFAAQgFAAgEADQgDAEAAAFQAAAFADAEQAEAEAFAAQAFAAAEgEQAEgEAAgFIAAAAAgIBiQgEAEAAAFQAAAFAEAEQAEAEAEAAQAEAAADgEQAEgEAAgFQAAgFgEgEQgDgDgEAAQgEAAgEADIAAAAAD9jJQAAgFgEgEQgDgEgFAAQgFAAgEAEQgEAEAAAFQAAAFAEADQAEAEAFAAQAFAAADgEQAEgDAAgFIAAAAABLEKQAAgFgEgEQgEgEgFAAQgFAAgEAEQgDAEAAAFQAAAFADADQAEAEAFAAQAFAAAEgEQAEgDAAgFIAAAA").cp();
	this.shape_154.setTransform(-58.1,-16.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgnlYQAAgFgEgEQgDgDgFAAQgFAAgEADQgEAEAAAFQAAAFAEAEQAEAEAFAAQAFAAADgEQAEgEAAgFIAAAAAk2AtQAEAEAFAAQAFAAAEgEQAEgDAAgFQAAgFgEgEQgEgEgFAAQgFAAgEAEQgDAEAAAFQAAAFADADIAAAAAkQAJQgDAEAAAFQAAAFADADQAEAEAFAAQAFAAAEgEQAEgDAAgFQAAgFgEgEQgEgEgFAAQgFAAgEAEIAAAAAlDAuQgEgDgFAAQgFAAgEADQgDAEAAAFQAAAFADAEQAEAEAFAAQAFAAAEgEQAEgEAAgFQAAgFgEgEIAAAAAkgDSQAAgFgEgEQgDgEgFAAQgFAAgEAEQgEAEAAAFQAAAFAEADQAEAEAFAAQAFAAADgEQAEgDAAgFIAAAAABsipQgDgDgFAAQgFAAgFADQgDAEAAAFQAAAFADAEQAFAEAFAAQAFAAADgEQAEgEAAgFQAAgFgEgEIAAAAAA9heQAAgFgEgEQgEgDgFAAQgFAAgDADQgEAEAAAFQAAAFAEAEQADAEAFAAQAFAAAEgEQAEgEAAgFIAAAAACBhgQAAgFgEgEQgDgDgFAAQgFAAgFADQgDAEAAAFQAAAFADAEQAFAEAFAAQAFAAADgEQAEgEAAgFIAAAAACYhWQAEAEAFAAQAFAAAEgEQADgEAAgFQAAgFgDgEQgEgDgFAAQgFAAgEADQgEAEAAAFQAAAFAEAEIAAAAAgRizQgDgDgEgBQgDgCgEAAQgFAAgEAEQgEAEAAAFQAAAFAEADQAEAEAEAAQADACADAAQAFAAAEgEQAEgDAAgFQAAgFgEgEIAAAAACTg7QAAAFADADQAEAEAFAAQAFAAADgEQAFgDAAgFQAAgFgFgEQgDgEgFAAQgFAAgEAEQgDAEAAAFIAAAAABiAAQAAgFgDgEQgEgEgFAAQgFAAgEAEQgEAEAAAFQAAADAEADQAEAEAFAAQAFAAAEgEQADgDAAgDIAAAAAivh1QAAgFgEgEQgEgDgFAAQgFAAgEADQgDAEAAAFQAAAFADAEQAEAEAFAAQAFAAAEgEQAEgEAAgFIAAAAAg2BvQAAgFgEgEQgDgDgFAAQgFAAgEADQgEAEAAAFQAAAFAEAEQAEAEAFAAQAFAAADgEQAEgEAAgFIAAAAAjEBzQAAgFgEgEQgDgDgFAAQgFAAgEADQgEAEAAAFQAAAFAEAEQAEAEAFAAQAFAAADgEQAEgEAAgFIAAAAAi2EjQAAAFADAEQAEAEAFAAQAFAAAEgEQAEgEAAgFQAAgFgEgEQgEgDgFAAQgFAAgEADQgDAEAAAFIAAAAAh5DWQAAgFgEgEQgDgDgFAAQgFAAgEADQgEAEAAAFQAAAFAEAEQAEAEAFAAQAFAAADgEQAEgEAAgFIAAAAAg3EQQAAgFgEgEQgDgEgFAAQgFAAgEAEQgEAEAAAFQAAAFAEADQAEAEAFAAQAFAAADgEQAEgDAAgFIAAAAAAAC7QAAgFgCgEQgEgEgFAAQgFAAgEAEQgDAEAAAFQAAAFADADQAEAEAFAAQAFAAAEgEQACgDAAgFIAAAAAEEhXQAAgFgDgEQgEgEgFAAQgFAAgEAEQgEAEAAAFQAAAFAEADQAEAEAFAAQAFAAAEgEQADgDAAgFIAAAAAEihdQADAEAFAAQAFAAAEgEQAEgDAAgFQAAgFgEgEQgEgEgFAAQgFAAgDAEQgEAEAAAFQAAAFAEADIAAAAAFDBFQAFAEAFAAQAFAAADgEQAEgDAAgFQAAgFgEgEQgDgEgFAAQgFAAgFAEQgDAEAAAFQAAAFADADIAAAAADACjQgEAEAAAFQAAAFAEADQADAEAFAAQAFAAAEgEQAEgDAAgFQAAgFgEgEQgEgEgFAAQgFAAgDAEIAAAAAD9DNQAFgDAAgFQAAgFgFgEQgDgEgFAAQgFAAgEAEQgEAEAAAFQAAAFAEADQAEAEAFAAQAFAAADgEIAAAAAC+FZQAAgFgEgEQgEgEgFAAQgFAAgEAEQgDAEAAAFQAAAFADADQAEAEAFAAQAFAAAEgEQAEgDAAgFIAAAAAhaFVQAAgFgEgEQgDgEgFAAQgFAAgEAEQgEAEAAAFQAAAFAEADQAEAEAFAAQAFAAADgEQAEgDAAgFIAAAA").cp();
	this.shape_155.setTransform(65.5,-29.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#996633").ss(2,0,1).p("Ai+lxQhhAvBCB2QgsAegZArAjSiBIBaAAAmAkMQgCAhAHAeQALA1AjAsQAjAsA7AjAl8k3QgEAWAAAVAG2jbQgKBfAmALIgFBTAF6DFIgIiAAHKgaIgPBYIgCAPAHKAYIADg2AHKgaIAIhXAIkDvIjIA8ALbg9IAACyQAABYhBA+QhBA+hdAAAmQFxIilgPIilgPIGCigAo1FiIAcgVIjBAGAoZFNIBhhKAoZFNID2gI");
	this.shape_156.setTransform(11.2,-5.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#996600").s().p("ArZjkQgUgYAAgiQAAgBAFgcQAGgWALgNQgMgUAAgaQAAgyAUgMQAQAGAEAOIAABaQAAAAAAAAQAAAEAAAGQAAALgFAhQgFAhAAAUQgBAAgFAFQgHAFgHADIAAAAAjmqRQACABABABQADgCAFgBQAMAJAFAMQADAKAAATQgCAAgGAEQgGAEgGACQgFgDgEgBQgEABgHADIgqAAIgEgDQgEgCAAgPQAAgzAjABQAOAAAKALIAAAAABGo4QAPAAAPAAQAGACAGADQAEADAEAEQAEAEADAEQAEADAEAEQAJAEAIAEQAJACAJADQAHACAIADQAGADAGAEQAEADAEACQACABADACQAGACAGADQADADACAEQACAEABAEQAAADAAAEQgBAEgCAEQgBADgBAEQgDADgCACQgFABgFACQgGgDgHgCQgDgDgEgCQgGgDgHgCQgDgEgEgEQAAgCAAgDQgKgBgKgBQgGgDgHgCQgDgDgEgCQgGgDgHgCQgDgEgEgEQgEgEgEgDQgCgDgDgCQgBgCgBgBQgNgBgMgBQgGgDgHgCQgDgEgEgEQAAgEAAgDQAAgEAAgEQAEgEADgDQAHgCAGgBQAAgBAAgBIAAAAAhPjJQAoABAnACQAGACAGADQADADACAEQACAEABAEQgBADgCAEQgCAEgDAEQgGACgGADQgnAAgoAAQgHgDgIgCQgHgEgIgEQgGgEgHgDQgigrgMg1QABAAABABQACADADAEQABAEABAEQACADABAEQABAEABAEQAFADAFAEQAFAEAFAEQAIADAHAEQAIAEAHAEQAIADAHAEQAFADAFACIAAAAAh6iyQgBAAgBAAQgHgEgIgEQgHgEgIgDQgFgEgFgEQgGgEgGgDQgEgEgEgEQgCgEgDgDQgBgEgBgEQgBgEgCgDQgBgEgBgEQgBgEgCgDQAAgEAAgEQACgEABgDQACgDADgCQABgCABgBQAFAAAFAAQAAgBAAgBQAGACAFACQAMA1AiArIAAAAAipl9QgDAWgBAWQAAAAgBABQgCADgDACQgFABgFACQgGgDgGgCQgEgEgEgEQAAgEAAgDQAAgEAAgEQAAgEAAgDQgBgEgBgEQgDgEgCgDQgDgEgCgEQgDgEgCgDQgQAAgRAAQAAADAAAEQAAAEAAAEQAAADAAAEQgBAEgBAEQgBADgCAEQgCADgDACQgFABgFACQgGgDgGgCQgEgEgEgEQAAgEAAgDQAAgEAAgEQAAgEAAgDQAAgEAAgEQAAgEAAgDQAAgEAAgEQAAgEAAgDQADgEACgEQAFgEAFgDQAFgDAFgCQADgCACgBQAFAAAFAAQAAgBAAgBQAPAAAPAAQAIACAHADQAHADAGAEQAFAEAFAEQABADABAEQADAEACAEQADADACAEQADAEACAEQADADACAEQAAAEAAAEQAAADAAAEQAAAEAAAEQAAADAAAEQgBAEgBAEQgBACgBAEQABgWADgWIAAAAAHJnNQgCAEgDAEQgGACgGADQgKAAgKAAQgIgDgHgCQgpAAgqAAQgGACgGADQgKAAgKAAQgGgDgHgCQgDgEgEgEQAAgEAAgDQAAgEAAgEQAEgEADgDQAHgDAGgCQAJgDAIgCQAHgCAGgBQAAgBAAgBQAoAAAoAAQAHACAIADQAMACANADQAGACAGADQADADACAEQACAEABAEQgBADgCAEIAAAAACWgaQAGgCAGgDQAEgCAEgDQAGgCAGgDQAFgEAFgDQADgDACgCQACgCABgBQAFAAAFAAQAAgBAAgBQAGACAGADQADADACAEQACAEABAEQAAgEAAgEQAEgEADgDQAHgCAGgBQAAgBAAgBQAGACAGADQADADACAEQACAEABAEQAAADAAAEQAAAEAAAEQAAADAAAEQACAEADAEQACADADAEQAAACAAAEQAAADAAAEQAAAEAAAEQACADADAEQABAEABAEQACADABAEQAAAEAAAEQgBADgCAEQgCAEgDAEQgGACgGADQgGgDgHgCQgDgEgEgEQAAgEAAgDQgCgDgBgCQgBADgBAEQgDADgCACQgFABgFACQgFAAgFAAQgGgDgHgCQgDgEgEgEQAAgEAAgDQgDgEgCgEQgDgEgCgDQAAgEAAgEQAAgEAAgDQAAgEAAgEQAAgBAAgBQgDABgCABQgEAEgEAEQgCACgDADQgBABgBABQgFABgFACQgGgDgHgCQgDgEgEgEQAAgEAAgDQAAgCAAgEQAAgEAAgDQACgEADgEQACgCADgDIAAAAADmgcQAAgCAAgBQgBABAAAAQAAABABABIAAAAAKKkgQgQgPgFgFQgJgIAAgDQAAgQACgCQACgBABACQACAAALAAQAMAAARADIADATIgDASQgBAAgFADQgGADgFACIAAAAAKhhjIgDA4IADg4QACgCACgCQAHgCAGgBQAAgBAAgBQAGACAGADQADADACAEQACAEABAEQAAADAAAEQAAAEAAAEQAAADAAAEQAAAEAAAEQAAADAAAEQAAAEAAAEQAAADAAAEQgBAEgCAEQgCADgDAEQgBAEgBAEQgBADgCAEQgBAEgBACQAAADAAAEQgBAEgCAEQgBADgBAEQgDAEgCAEQgBADgCAEQgCAEgDAEQgCADgDAEQgCAEgDAEQgBADgBAEQgBAEgCAEQgBADgBAEQgDAEgCAEQgBADgCAEQgCAEgDAEQgCADgDAEQgCAEgDAEQgDADgEAEQgEAEgEAEQgGACgGADQgGgDgHgCQgDgEgEgEQAAgEAAgDQAAgEAAgEQAEgEADgDQADgEACgEQADgEACgDQADgEACgEQADgEACgDQADgEACgEQACgEABgDQABgEABgEQACgEABgDQABgEABgEQADgEACgDQADgEACgEQADgEACgDQADgEACgEIADgNIgDANQAAgEAAgDQACgCABgEQABgEABgDQACgEABgEQABgEABgDQACgEABgEQACgEADgDQAAgEAAgEQAAgEAAgDQAAgEAAgEQAAgEAAgDQAAgEAAgEQAAgEAAgDQAAgEAAgEQABgCACgBIAAAAALaieQAGACAGADQADADACAEQACAEABAEQAAADAAAEQAAAEAAAEQAAADAAAEQAAAEAAAEQAAADAAAEQgBAEgCAEQgBADgBAEQgDADgCACQgFABgFACQgGgDgHgCQgDgEgEgEQAAgEAAgDQAAgEAAgEQAAgEAAgDQAAgEAAgEQAAgEAAgDQAAgEAAgEQAAgEAAgDQACgEADgEQACgCADgDQAFAAAFAAQAAgBAAgBIAAAAADIG6QALgEALgDQAJgEAJgEQAFgCAFgDQAFAAAFAAQAAgBAAgBQAGACAGADQADADACAEQACAEABAEQgBADgCAEQgCAEgDAEQgGADgGAEQgJAEgJAEQgLADgLAEQgEAEgEAEQgDADgEAEQgEAEgEAEQgDADgEAEQgBAEgCAEQgBADgBAEQgDADgCACQgFABgFACQgGgDgHgCQgDgEgEgEQAAgEAAgDQAAgEAAgEQAAgEAAgDQACgEADgEQAEgEADgDQAEgEAEgEQAEgEADgDQAEgEAEgEQAEgEADgDQAEgEAEgEIAAAAAi9EsQAHACAGADQACADADAEQABAEABAEQgBADgBAEQgBAEgCAEQgCADgDAEQAAADAAACQASgBARgBQAIgEAHgEQAFgCAFgDQAFgBAFgBQAHACAGADQACADADAEQABAEABAEQgBADgBAEQgDAEgCAEQgGADgHAEQgHAEgIAEQgFACgFADQgCABgDABQgFABgFACQgUAAgUAAQgGgDgGgCQgEgEgEgEQgDgEgEgDQgBgEgCgEQAAgEAAgDQAAgEAAgEQAAgEAAgDQAAgEAAgEQADgEACgDQACgEABgEQACgEADgDQACgDADgCQABgCABgBQAFAAAFAAQAAgBAAgBIAAAAABGHWQAGACAGADQADADACAEQACAEABAEQgBADgCAEQgCAEgDAEQgGACgGADQgKAAgKAAQgGgDgHgCQgDgEgEgEQAAgEAAgDQAAgEAAgEQAEgEADgDQAHgCAGgBQAAgBAAgBQAKAAAKAAIAAAAAmoAiQAFADAAAQQAAAQgMAPQgQAVggAFIgHgEQgHgEgEgDQgFABgHAAQgRAAgJgEQgHgCgHgHQAAgCAAgCQgKAOgKADQgZgVgJgNQgGgJAAgLQAAgfAUgFQAPAGAOAcQAIAOACALQACgJAGgFQASgPAwAZQABgCAAAAQATgWARgLQAMACADACIAAAAAnLAoQgEAOgQAGIgHgEQgIgEgFgFQAIgMAJgFQAFgCALgDIAHAPAAvIeQACAEABAEQgBADgCAEQgBAEgBAEQgDADgCAEQgDAEgCAEQgBACgCADQgBABgBABQgFABgFACQgFACgFADQAAADAAAEQgDAEgCAEQgDADgCAEQgCAEgEAEQgBADgCAEQgCAEgDAEQAAACgCADQgBABgCABQgFADgFACQgCAEgDAEQgBACgBADQgBABgCABQgFABgFACQgPAAgPAAQgGgDgGgCQgEgEgEgEQgBgEgBgDQgBgEgCgEQgBgEgBgDQgBgEgCgEQAAgEAAgDQAAgEAAgEQAEgEAEgDQAGgDAGgCQAHACAGADQACADADAEQACABADACQAEgCADgBQAFgCAFgDQACgEABgDQACgDADgCQABgCABgBQAFgCAFgDQAAgEAAgDQAAgEAAgEQAFgEADgDQAHgEAFgEQAIgEAGgDQACgEADgEQAEgEADgDQAHgCAGgBQAAgBAAgBQAGACAGADQADADACAEIAAAAAhvJuQABAEABAEQgBADgBAEQgDAEgCAEQgGACgHADQgFAAgFAAQgGgDgGgCQgEgEgEgEQAAgEAAgDQAAgEAAgEQAEgEAEgDQAGgCAGgBQAAgBAAgBQAFAAAFAAQAHACAGADQACADADAEIAAAA").cp();
	this.shape_157.setTransform(-9.9,1);

	// Laag 1
	this.instance_10 = new lib.rock("synched",0);
	this.instance_10.setTransform(-0.9,0,1,1,0,0,0,1.5,1.4);

	this.addChild(this.instance_10,this.shape_157,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-90.4,-79.8,190.5,147.9);


(lib.mcPlanet = function() {
	this.initialize();

	// Laag 1
	this.instance_11 = new lib.planet("synched",0);
	this.instance_11.setTransform(0,-2.9,1,1,0,0,0,9,6);

	this.addChild(this.instance_11);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-86.9,-87.7,174.1,169.5);


(lib.mcMoon = function() {
	this.initialize();

	// Laag 1
	this.mouth = new lib.mcMouth();
	this.mouth.setTransform(-8.9,27);

	this.nose = new lib.mcNose();
	this.nose.setTransform(-11.9,-3.4);

	this.rightEye = new lib.mcEye();
	this.rightEye.setTransform(24.6,-21.4);

	this.leftEye = new lib.mcEye();
	this.leftEye.setTransform(-45.9,-20.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s("#FFCC33").ss(4,0,1).p("ABbiCQAHAGAHAIQAGAHAFAJQAGAIAEAKQAFAJADALQADAKADALQACALABAMQABAMABAKQgBALgBALQgBALgCALQgDAKgDAJQgDAKgFAJQgEAJgGAIQgFAIgGAHQgHAHgHAHQgHAGgIAFQgIAFgIAEQgIAEgJADQgKADgJABQgKACgKAAQgggBgbgMQgcgMgUgWQgUgWgKgdQgLgdAAgiQAAgKABgMQABgMADgLQACgLAEgKQADgLAFgJQAEgKAGgIQAGgJAGgHQAHgIAHgGQAIgHAIgFQAJgFAJgEQAJgFAKgCQAKgDAKgCQALgBAJAAQAKAAAKABQAJACAKADQAJACAIAFQAIAEAIAFQAIAFAHAHIAAAA").cp();
	this.shape_158.setTransform(24.5,-25.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s("#FFCC00").ss(4,0,1).p("AArieQAJACAIAFQAIAEAIAFQAIAFAHAHQAHAGAHAIQAGAHAFAJQAGAIAEAKQAFAJADALQADAKADALQACALABAMQABAMABAKQgBALgBALQgBALgCALQgDAKgDAJQgDAKgFAJQgEAJgGAIQgFAIgGAHQgHAHgHAHQgHAGgIAFQgIAFgIAEQgIAEgJADQgKADgJABQgKACgKAAQgggBgbgMQgcgMgUgWQgUgWgKgdQgLgdAAgiQAAgKABgMQABgMADgLQACgLAEgKQADgLAFgJQAEgKAGgIQAGgJAGgHQAHgIAHgGQAIgHAIgFQAJgFAJgEQAJgFAKgCQAKgDAKgCQALgBAJAAQAKAAAKABQAJACAKADIAAAA").cp();
	this.shape_159.setTransform(-45.4,-25.9);

	this.face = new lib.mcFace();

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#006600").s().p("AAAgQQAAgCAAgBQAGADAGACQADAEACAEQACADABADQgBADgCAEQgCADgDAFQgGACgGADQgEgDgHgCQgDgFgFgDQAAgEAAgDQAAgDAAgDQAFgEADgEQAHgBAEgBIAAAA").cp();
	this.shape_160.setTransform(68,5);

	this.addChild(this.shape_160,this.face,this.shape_159,this.shape_158,this.leftEye,this.rightEye,this.nose,this.mouth);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-88.9,-85.4,178.1,171.1);


(lib.mcFlame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Laag 3
	this.instance_12 = new lib.flame1("synched",0);
	this.instance_12.setTransform(88,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:68},4).wait(1));

	// Laag 2
	this.instance_13 = new lib.flame2("synched",0);
	this.instance_13.setTransform(78,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true},1).wait(4));

	// Laag 1
	this.instance_14 = new lib.flame3("synched",0);
	this.instance_14.setTransform(57,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.6,-41.5,191.3,83.1);


(lib.mcBoard = function() {
	this.initialize();

	// Laag 2
	this.message = new cjs.Text("oscar staat 1e", "26px Facebook Letter Faces");
	this.message.textAlign = "center";
	this.message.lineHeight = 28;
	this.message.lineWidth = 268;
	this.message.setTransform(8.3,-3.2,0.882,1.457,0,-0.1,-5);

	// Laag 1
	this.instance_15 = new lib.board("synched",0);
	this.instance_15.setTransform(-0.8,11,1,1,0,0,0,-0.4,5);

	this.addChild(this.instance_15,this.message);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-141.4,-32.9,281,88);


(lib.mcBeam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Laag 1
	this.instance_16 = new lib.beam("synched",0);
	this.instance_16.setTransform(9.2,28.1,1.415,2.927,0,0,0,3.6,9.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({scaleY:1.06,y:10.2},14).to({scaleY:1.06},1).to({scaleY:2.93,y:28.1},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.1,0,10.1,55.9);


(lib.mcTextSpaceShipIncorrect = function() {
	this.initialize();

	// Laag 2
	this.instance_17 = new lib.mcBeam();
	this.instance_17.setTransform(349.3,142.1,1,1,0,0,0,3.6,9.6);

	this.instance_18 = new lib.mcBeam();
	this.instance_18.setTransform(194.9,152.5,1,1,0,0,0,3.6,9.6);

	this.instance_19 = new lib.mcBeam();
	this.instance_19.setTransform(115.7,146.9,1,1,0,0,0,3.6,9.6);

	this.instance_20 = new lib.mcBeam();
	this.instance_20.setTransform(38.9,132.5,1,1,0,0,0,3.6,9.6);

	this.instance_21 = new lib.mcBeam();
	this.instance_21.setTransform(271.9,150.5,1,1,0,0,0,3.6,9.6);

	// text
	this.inCorrectSpaceText = new cjs.Text("454 dm", "47px Arial");
	this.inCorrectSpaceText.textAlign = "center";
	this.inCorrectSpaceText.lineHeight = 57;
	this.inCorrectSpaceText.lineWidth = 238;
	this.inCorrectSpaceText.setTransform(212,42);

	// ship
	this.instance_22 = new lib.SpaceShip2InCorrect("synched",0);
	this.instance_22.setTransform(216,68.5,1,1,0,0,0,216,88.5);

	this.addChild(this.instance_22,this.inCorrectSpaceText,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-19.9,432.1,218.8);


(lib.mcTextSpaceShipCorrect = function() {
	this.initialize();

	// beamers
	this.instance_23 = new lib.mcBeam();
	this.instance_23.setTransform(349.3,142.1,1,1,0,0,0,3.6,9.6);

	this.instance_24 = new lib.mcBeam();
	this.instance_24.setTransform(194.9,152.5,1,1,0,0,0,3.6,9.6);

	this.instance_25 = new lib.mcBeam();
	this.instance_25.setTransform(115.7,146.9,1,1,0,0,0,3.6,9.6);

	this.instance_26 = new lib.mcBeam();
	this.instance_26.setTransform(38.9,132.5,1,1,0,0,0,3.6,9.6);

	this.instance_27 = new lib.mcBeam();
	this.instance_27.setTransform(271.9,150.5,1,1,0,0,0,3.6,9.6);

	// text
	this.correctSpaceText = new cjs.Text("454 dm", "47px Arial");
	this.correctSpaceText.textAlign = "center";
	this.correctSpaceText.lineHeight = 57;
	this.correctSpaceText.lineWidth = 238;
	this.correctSpaceText.setTransform(212,42);

	// ship
	this.instance_28 = new lib.SpaceShip2Correct("synched",0);
	this.instance_28.setTransform(216,68.5,1,1,0,0,0,216,88.5);

	this.addChild(this.instance_28,this.correctSpaceText,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-19.9,432.1,218.8);


(lib.mcTextSpaceShip = function() {
	this.initialize();

	// beamers
	this.instance_29 = new lib.mcBeam();
	this.instance_29.setTransform(349.3,142.1,1,1,0,0,0,3.6,9.6);

	this.instance_30 = new lib.mcBeam();
	this.instance_30.setTransform(194.9,152.5,1,1,0,0,0,3.6,9.6);

	this.instance_31 = new lib.mcBeam();
	this.instance_31.setTransform(115.7,146.9,1,1,0,0,0,3.6,9.6);

	this.instance_32 = new lib.mcBeam();
	this.instance_32.setTransform(38.9,132.5,1,1,0,0,0,3.6,9.6);

	this.instance_33 = new lib.mcBeam();
	this.instance_33.setTransform(271.9,150.5,1,1,0,0,0,3.6,9.6);

	// text
	this.spaceText = new cjs.Text("454 dm", "47px Arial");
	this.spaceText.textAlign = "center";
	this.spaceText.lineHeight = 59;
	this.spaceText.lineWidth = 238;
	this.spaceText.setTransform(212,42);

	// ship
	this.instance_34 = new lib.SpaceShip2("synched",0);
	this.instance_34.setTransform(216,68.5,1,1,0,0,0,216,88.5);

	this.addChild(this.instance_34,this.spaceText,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-19.9,432.1,218.8);


(lib.mcTextRocketShip = function() {
	this.initialize();

	// Laag 2
	this.instance_35 = new lib.mcFlame();
	this.instance_35.setTransform(486,45,0.533,0.543,0,0,180,57,0);

	// text
	this.rocketText = new cjs.Text("454 dm", "26px Arial");
	this.rocketText.textAlign = "center";
	this.rocketText.lineHeight = 38;
	this.rocketText.lineWidth = 238;
	this.rocketText.setTransform(140,17);

	// ship
	this.instance_36 = new lib.RocketShip("synched",0);
	this.instance_36.setTransform(216,68.5,1,1,0,0,180,216,88.5);

	this.addChild(this.instance_36,this.rocketText,this.instance_35);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.1,-22,540.2,143.1);


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
	this.spaceShip = new lib.mcTextSpaceShip();
	this.spaceShip.setTransform(0,-0.9,1,1,0,0,0,216,68.5);

	this.correctSpaceShip = new lib.mcTextSpaceShipCorrect();
	this.correctSpaceShip.setTransform(0,-0.9,1,1,0,0,0,216,68.5);

	this.inCorrectSpaceShip = new lib.mcTextSpaceShipIncorrect();
	this.inCorrectSpaceShip.setTransform(0,-0.9,1,1,0,0,0,216,68.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.spaceShip,p:{regY:68.5,y:-0.9}}]}).to({state:[{t:this.spaceShip,p:{regY:88.4,y:17.7}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:16.5}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:15.3}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:14.1}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:12.9}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:11.6}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:10.4}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:9.2}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:8}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:6.8}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:5.6}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:4.3}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:3.1}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:1.9}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:0.7}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:-0.4}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:-1.6}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:-2.9}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:-4.1}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:-5.3}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:-6.5}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:-7.7}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:-9}}]},1).to({state:[{t:this.spaceShip,p:{regY:68.5,y:-28.9}}]},1).to({state:[{t:this.spaceShip,p:{regY:68.5,y:-28.9}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:-7.7}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:-6.5}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:-5.3}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:-4.1}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:-2.9}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:-1.6}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:-0.4}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:0.7}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:1.9}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:3.1}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:4.3}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:5.6}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:6.8}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:8}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:9.2}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:10.4}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:11.6}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:12.9}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:14.1}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:15.3}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:16.5}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:17.7}}]},1).to({state:[{t:this.spaceShip,p:{regY:88.4,y:18.9}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:68.5,y:-0.9}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:17.7}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:16.5}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:15.3}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:14.1}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:12.9}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:11.6}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:10.4}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:9.2}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:8}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:6.8}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:5.6}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:4.3}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:3.1}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:1.9}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:0.7}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:-0.4}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:-1.6}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:-2.9}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:-4.1}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:-5.3}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:-6.5}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:-7.7}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:-9}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:68.5,y:-28.9}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:68.5,y:-28.9}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:-7.7}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:-6.5}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:-5.3}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:-4.1}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:-2.9}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:-1.6}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:-0.4}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:0.7}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:1.9}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:3.1}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:4.3}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:5.6}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:6.8}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:8}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:9.2}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:10.4}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:11.6}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:12.9}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:14.1}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:15.3}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:16.5}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:17.7}}]},1).to({state:[{t:this.correctSpaceShip,p:{regY:88.4,y:18.9}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:68.5,y:-0.9}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:17.7}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:16.5}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:15.3}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:14.1}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:12.9}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:11.6}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:10.4}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:9.2}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:8}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:6.8}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:5.6}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:4.3}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:3.1}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:1.9}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:0.7}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:-0.4}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:-1.6}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:-2.9}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:-4.1}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:-5.3}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:-6.5}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:-7.7}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:-9}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:68.5,y:-28.9}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:68.5,y:-28.9}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:-7.7}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:-6.5}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:-5.3}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:-4.1}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:-2.9}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:-1.6}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:-0.4}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:0.7}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:1.9}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:3.1}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:4.3}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:5.6}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:6.8}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:8}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:9.2}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:10.4}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:11.6}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:12.9}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:14.1}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:15.3}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:16.5}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:17.7}}]},1).to({state:[{t:this.inCorrectSpaceShip,p:{regY:88.4,y:18.9}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-215.9,-89.4,432.1,218.8);


(lib.mcRocketShip = function(mode,startPosition,loop) {
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
	this.rocketShip = new lib.mcTextRocketShip();
	this.rocketShip.setTransform(0,-0.9,1,1,0,0,0,216,68.5);

	this.correctRocketShip = new lib.mcTextRocketShipCorrect();
	this.correctRocketShip.setTransform(0,-0.9,1,1,0,0,0,216,68.5);

	this.correctRocketShip_1 = new lib.RocketShipCorrect();
	this.correctRocketShip_1.setTransform(0,-28.9,1,1,0,0,0,216,68.5);

	this.inCorrectRocketShip = new lib.mcTextRocketShipInCorrect();
	this.inCorrectRocketShip.setTransform(0,-0.9,1,1,0,0,0,216,68.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.rocketShip,p:{regX:216,regY:68.5,x:0,y:-0.9}}]}).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-21.1}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-22.3}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-23.5}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-24.7}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-25.9}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-27.2}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-28.4}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-29.6}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-30.8}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-32}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-33.2}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-34.5}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-35.7}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-36.9}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-38.1}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-39.3}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-40.5}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-41.8}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-43}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-44.2}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-45.4}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-46.6}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-47.9}}]},1).to({state:[{t:this.rocketShip,p:{regX:216,regY:68.5,x:0,y:-28.9}}]},1).to({state:[{t:this.rocketShip,p:{regX:216,regY:68.5,x:0,y:-28.9}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-46.6}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-45.4}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-44.2}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-43}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-41.8}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-40.5}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-39.3}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-38.1}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-36.9}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-35.7}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-34.5}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-33.2}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-32}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-30.8}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-29.6}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-28.4}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-27.2}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-25.9}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-24.7}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-23.5}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-22.3}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-21.1}}]},1).to({state:[{t:this.rocketShip,p:{regX:266.9,regY:49.5,x:50.9,y:-19.9}}]},1).to({state:[{t:this.correctRocketShip,p:{regX:216,regY:68.5,x:0,y:-0.9}}]},1).to({state:[{t:this.correctRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-21.1}}]},1).to({state:[{t:this.correctRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-22.3}}]},1).to({state:[{t:this.correctRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-23.5}}]},1).to({state:[{t:this.correctRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-24.7}}]},1).to({state:[{t:this.correctRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-25.9}}]},1).to({state:[{t:this.correctRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-27.2}}]},1).to({state:[{t:this.correctRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-28.4}}]},1).to({state:[{t:this.correctRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-29.6}}]},1).to({state:[{t:this.correctRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-30.8}}]},1).to({state:[{t:this.correctRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-32}}]},1).to({state:[{t:this.correctRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-33.2}}]},1).to({state:[{t:this.correctRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-34.5}}]},1).to({state:[{t:this.correctRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-35.7}}]},1).to({state:[{t:this.correctRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-36.9}}]},1).to({state:[{t:this.correctRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-38.1}}]},1).to({state:[{t:this.correctRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-39.3}}]},1).to({state:[{t:this.correctRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-40.5}}]},1).to({state:[{t:this.correctRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-41.8}}]},1).to({state:[{t:this.correctRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-43}}]},1).to({state:[{t:this.correctRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-44.2}}]},1).to({state:[{t:this.correctRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-45.4}}]},1).to({state:[{t:this.correctRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-46.6}}]},1).to({state:[{t:this.correctRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-47.9}}]},1).to({state:[{t:this.correctRocketShip,p:{regX:216,regY:68.5,x:0,y:-28.9}}]},1).to({state:[{t:this.correctRocketShip_1,p:{regX:216,regY:68.5,x:0,y:-28.9}}]},1).to({state:[{t:this.correctRocketShip_1,p:{regX:217.6,regY:69.5,x:1.6,y:-26.6}}]},1).to({state:[{t:this.correctRocketShip_1,p:{regX:217.6,regY:69.5,x:1.6,y:-25.4}}]},1).to({state:[{t:this.correctRocketShip_1,p:{regX:217.6,regY:69.5,x:1.6,y:-24.2}}]},1).to({state:[{t:this.correctRocketShip_1,p:{regX:217.6,regY:69.5,x:1.6,y:-23}}]},1).to({state:[{t:this.correctRocketShip_1,p:{regX:217.6,regY:69.5,x:1.6,y:-21.8}}]},1).to({state:[{t:this.correctRocketShip_1,p:{regX:217.6,regY:69.5,x:1.6,y:-20.5}}]},1).to({state:[{t:this.correctRocketShip_1,p:{regX:217.6,regY:69.5,x:1.6,y:-19.3}}]},1).to({state:[{t:this.correctRocketShip_1,p:{regX:217.6,regY:69.5,x:1.6,y:-18.1}}]},1).to({state:[{t:this.correctRocketShip_1,p:{regX:217.6,regY:69.5,x:1.6,y:-16.9}}]},1).to({state:[{t:this.correctRocketShip_1,p:{regX:217.6,regY:69.5,x:1.6,y:-15.7}}]},1).to({state:[{t:this.correctRocketShip_1,p:{regX:217.6,regY:69.5,x:1.6,y:-14.5}}]},1).to({state:[{t:this.correctRocketShip_1,p:{regX:217.6,regY:69.5,x:1.6,y:-13.2}}]},1).to({state:[{t:this.correctRocketShip_1,p:{regX:217.6,regY:69.5,x:1.6,y:-12}}]},1).to({state:[{t:this.correctRocketShip_1,p:{regX:217.6,regY:69.5,x:1.6,y:-10.8}}]},1).to({state:[{t:this.correctRocketShip_1,p:{regX:217.6,regY:69.5,x:1.6,y:-9.6}}]},1).to({state:[{t:this.correctRocketShip_1,p:{regX:217.6,regY:69.5,x:1.6,y:-8.4}}]},1).to({state:[{t:this.correctRocketShip_1,p:{regX:217.6,regY:69.5,x:1.6,y:-7.2}}]},1).to({state:[{t:this.correctRocketShip_1,p:{regX:217.6,regY:69.5,x:1.6,y:-5.9}}]},1).to({state:[{t:this.correctRocketShip_1,p:{regX:217.6,regY:69.5,x:1.6,y:-4.7}}]},1).to({state:[{t:this.correctRocketShip_1,p:{regX:217.6,regY:69.5,x:1.6,y:-3.5}}]},1).to({state:[{t:this.correctRocketShip_1,p:{regX:217.6,regY:69.5,x:1.6,y:-2.3}}]},1).to({state:[{t:this.correctRocketShip_1,p:{regX:217.6,regY:69.5,x:1.6,y:-1.1}}]},1).to({state:[{t:this.correctRocketShip_1,p:{regX:217.6,regY:69.5,x:1.6,y:0}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:216,regY:68.5,x:0,y:-0.9}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-21.1}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-22.3}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-23.5}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-24.7}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-25.9}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-27.2}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-28.4}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-29.6}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-30.8}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-32}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-33.2}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-34.5}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-35.7}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-36.9}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-38.1}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-39.3}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-40.5}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-41.8}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-43}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-44.2}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-45.4}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-46.6}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-47.9}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:216,regY:68.5,x:0,y:-28.9}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:216,regY:68.5,x:0,y:-28.9}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-46.6}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-45.4}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-44.2}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-43}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-41.8}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-40.5}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-39.3}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-38.1}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-36.9}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-35.7}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-34.5}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-33.2}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-32}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-30.8}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-29.6}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-28.4}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-27.2}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-25.9}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-24.7}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-23.5}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-22.3}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-21.1}}]},1).to({state:[{t:this.inCorrectRocketShip,p:{regX:214.4,regY:49.5,x:-1.5,y:-19.9}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-219.1,-91.5,540.2,143.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;