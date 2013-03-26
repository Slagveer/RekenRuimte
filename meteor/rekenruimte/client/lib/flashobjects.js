

    (function (lib, img, cjs) {

        var p; // shortcut to reference prototypes

// stage content:
        (lib.RekenRuimte = function() {
            this.initialize();

            // Laag 1
            this.spaceShip = new lib.mcSpaceShip();
            this.spaceShip.setTransform(275,123.1,1,1,0,0,0,0,1);

            this.addChild(this.spaceShip);
        }).prototype = p = new cjs.Container();
        p.nominalBounds = new cjs.Rectangle(59,32.6,432.1,179.1);


// symbols:
        (lib.Tween1 = function() {
            this.initialize();

            // Laag 1
            this.shape = new cjs.Shape();
            this.shape.graphics.f("#000000").s("#FFFFFF").ss(4,0,1).p("AhHhHQAFgFAFgFQAGgEAGgEQAGgDAHgDQAGgDAHgCQAHgCAIgBQAHgBAGAAQAGAAAGABQAGABAHACQAGACAGADQAFADAGADQAFAEAGAFQAFAEAFAFQAEAFAEAGQAEAFAEAGQAEAGACAHQADAGACAIQACAGABAIQABAHAAAGQAAAGgBAGQgBAGgCAGQgCAGgDAGQgCAGgEAGQgEAFgEAFQgEAGgEAEQgFAFgFAEQgGAEgFAEQgGAEgGACQgGADgFACQgHACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgRAAgTQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFQAFgGAFgFIAAAA").cp();

            this.addChild(this.shape);
        }).prototype = p = new cjs.Container();
        p.nominalBounds = new cjs.Rectangle(-10.4,-10.4,21.1,21.1);


        (lib.mcLight = function(mode,startPosition,loop) {
            this.initialize(mode,startPosition,loop,{},true);

            // Laag 1
            this.instance = new lib.Tween1("synched",0);

            this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.957},0).wait(1).to({alpha:0.913},0).wait(1).to({alpha:0.87},0).wait(1).to({alpha:0.826},0).wait(1).to({alpha:0.783},0).wait(1).to({alpha:0.739},0).wait(1).to({alpha:0.696},0).wait(1).to({alpha:0.652},0).wait(1).to({alpha:0.609},0).wait(1).to({alpha:0.565},0).wait(1).to({alpha:0.522},0).wait(1).to({alpha:0.478},0).wait(1).to({alpha:0.435},0).wait(1).to({alpha:0.391},0).wait(1).to({alpha:0.348},0).wait(1).to({alpha:0.304},0).wait(1).to({alpha:0.261},0).wait(1).to({alpha:0.217},0).wait(1).to({alpha:0.174},0).wait(1).to({alpha:0.13},0).wait(1).to({alpha:0.087},0).wait(1).to({alpha:0.043},0).wait(1).to({alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.043},0).wait(1).to({alpha:0.087},0).wait(1).to({alpha:0.13},0).wait(1).to({alpha:0.174},0).wait(1).to({alpha:0.217},0).wait(1).to({alpha:0.261},0).wait(1).to({alpha:0.304},0).wait(1).to({alpha:0.348},0).wait(1).to({alpha:0.391},0).wait(1).to({alpha:0.435},0).wait(1).to({alpha:0.478},0).wait(1).to({alpha:0.522},0).wait(1).to({alpha:0.565},0).wait(1).to({alpha:0.609},0).wait(1).to({alpha:0.652},0).wait(1).to({alpha:0.696},0).wait(1).to({alpha:0.739},0).wait(1).to({alpha:0.783},0).wait(1).to({alpha:0.826},0).wait(1).to({alpha:0.87},0).wait(1).to({alpha:0.913},0).wait(1).to({alpha:0.957},0).wait(1).to({alpha:1},0).wait(1));

        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-10.4,-10.4,21.1,21.1);


        (lib.SpaceShip = function() {
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
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f("#000000").s("#FFFFFF").ss(4,0,1).p("ABagxQAEAGACAHQADAGACAIQACAGABAIQABAHAAAGQAAAGgBAGQgBAGgCAGQgCAGgDAGQgCAGgEAGQgEAFgEAFQgEAGgEAEQgFAFgFAEQgGAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgSAAgSQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAHgCQAHgCAIgBQAHgBAGAAQAGAAAGABQAGABAGACQAGACAGADQAGADAGADQAFAEAGAFQAFAEAFAFQAEAFAEAGQAEAFAEAGIAAAA").cp();
            this.shape_1.setTransform(29.5,133.5);

            this.shape_2 = new cjs.Shape();
            this.shape_2.graphics.f("#000000").s("#FFFFFF").ss(4,0,1).p("ABagxQAEAGACAHQADAGACAIQACAGABAIQABAHAAAGQAAAGgBAGQgBAGgCAGQgCAGgDAGQgCAGgEAGQgEAFgEAFQgEAGgEAEQgFAFgFAEQgGAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgSAAgSQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAHgCQAHgCAIgBQAHgBAGAAQAGAAAGABQAGABAGACQAGACAGADQAGADAGADQAFAEAGAFQAFAEAFAFQAEAFAEAGQAEAFAEAGIAAAA").cp();
            this.shape_2.setTransform(71.5,144.5);

            this.shape_3 = new cjs.Shape();
            this.shape_3.graphics.f().s("#FFFFFF").ss(4,0,1).p("AATgyQAHAEAGAHQAGAIADALQADALABANQgBAMgDAJQgDAJgGAHQgGAGgHAEQgHAEgHgBQgVAAgOgNQgNgOAAgXQgBgNAEgLQAEgLAGgIQAHgHAJgEQAJgEAKAAQAHAAAHAEIAAAA").cp();
            this.shape_3.setTransform(144.5,5.5);

            this.shape_4 = new cjs.Shape();
            this.shape_4.graphics.f().s("#FFFFFF").ss(4,0,1).p("AAyDcIhjm3");
            this.shape_4.setTransform(151,35);

            this.shape_5 = new cjs.Shape();
            this.shape_5.graphics.f("#000000").s("#FFFFFF").ss(4,0,1).p("AhRg8QAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAIgCQAGgCAIgBQAHgBAGAAQAGAAAGABQAGABAGACQAGACAGADQAGADAGADQAFAEAFAFQAGAEAEAFQAFAFAEAGQAEAFAEAGQAEAGACAHQADAGACAIQACAGABAIQABAHAAAGQAAAGgBAGQgBAGgCAHQgCAFgDAGQgCAGgEAGQgEAFgEAFQgEAGgFAEQgEAFgGAEQgFAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgRAAgTQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFIAAAA").cp();
            this.shape_5.setTransform(385.5,136.5);

            this.shape_6 = new cjs.Shape();
            this.shape_6.graphics.f("#000000").s("#FFFFFF").ss(4,0,1).p("ABogIQABAHAAAGQAAAGgBAGQgBAGgCAGQgCAGgDAGQgCAGgEAGQgEAFgEAFQgEAGgFAEQgEAFgGAEQgFAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgRAAgTQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAIgCQAGgCAIgBQAHgBAGAAQAGAAAGABQAGABAGACQAGACAGADQAGADAGADQAFAEAFAFQAGAEAEAFQAFAFAEAGQAEAFAEAGQAEAGACAHQADAGACAIQACAGABAIIAAAA").cp();
            this.shape_6.setTransform(350.5,144.5);

            this.shape_7 = new cjs.Shape();
            this.shape_7.graphics.f("#000000").s("#FFFFFF").ss(4,0,1).p("ABSg8QAEAFAEAGQAEAGACAHQADAGACAIQACAGABAIQABAHAAAGQAAAGgBAGQgBAGgCAGQgCAGgDAGQgCAGgEAGQgEAFgEAFQgEAGgFAEQgEAFgGAEQgFAEgFAEQgGAEgGACQgGADgFACQgHACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgSAAgSQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAIgCQAGgCAIgBQAHgBAGAAQAGAAAGABQAGABAHACQAFACAGADQAGADAGADQAFAEAFAFQAGAEAEAFQAFAFAEAGIAAAA").cp();
            this.shape_7.setTransform(312.5,150.5);

            this.shape_8 = new cjs.Shape();
            this.shape_8.graphics.f("#000000").s("#FFFFFF").ss(4,0,1).p("AAFhoQAGAAAGABQAGABAHACQAFACAGADQAGADAGADQAFAEAFAFQAGAEAEAFQAFAFAEAGQAEAFAEAGQAEAGACAHQADAGACAIQACAGABAIQABAHAAAGQAAAGgBAGQgBAGgCAHQgCAFgDAGQgCAGgEAGQgEAFgEAFQgEAGgFAEQgEAFgGAEQgFAEgFAEQgGAEgGACQgGADgFACQgHACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgRAAgTQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAIgCQAGgCAIgBQAHgBAGAAIAAAA").cp();
            this.shape_8.setTransform(272.5,154.5);

            this.shape_9 = new cjs.Shape();
            this.shape_9.graphics.f("#000000").s("#FFFFFF").ss(4,0,1).p("ABlAeQgCAFgDAGQgCAGgEAGQgEAFgEAFQgEAGgFAEQgEAFgGAEQgFAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgSAAgSQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAIgCQAGgCAIgBQAHgBAGAAQAGAAAGABQAGABAHACQAFACAGADQAGADAGADQAFAEAFAFQAGAEAEAFQAFAFAEAGQAEAFAEAGQAEAGACAHQADAGACAIQACAGABAIQABAHAAAGQAAAGgBAGQgBAGgCAHIAAAA").cp();
            this.shape_9.setTransform(235.5,157.5);

            this.shape_10 = new cjs.Shape();
            this.shape_10.graphics.f("#000000").s("#FFFFFF").ss(4,0,1).p("ABgApQgCAGgEAGQgEAFgEAFQgEAGgEAEQgFAFgFAEQgGAEgFAEQgGAEgGACQgGADgFACQgHACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgSAAgSQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAHgCQAHgCAIgBQAHgBAGAAQAGAAAGABQAGABAHACQAFACAGADQAGADAGADQAFAEAGAFQAFAEAFAFQAEAFAEAGQAEAFAEAGQAEAGACAHQADAGACAIQACAGABAIQABAHAAAGQAAAGgBAGQgBAGgCAHQgCAFgDAGIAAAA").cp();
            this.shape_10.setTransform(195.5,157.5);

            this.shape_11 = new cjs.Shape();
            this.shape_11.graphics.f("#000000").s("#FFFFFF").ss(4,0,1).p("ABaA1QgEAFgEAFQgEAGgEAEQgFAFgFAEQgGAEgFAEQgGAEgGACQgGADgFACQgHACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgRAAgTQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAHgCQAHgCAIgBQAHgBAGAAQAGAAAGABQAGABAHACQAFACAGADQAGADAGADQAFAEAGAEQAFAFAFAFQAEAFAEAGQAEAFAEAGQAEAGACAHQADAGACAIQACAGABAIQABAHAAAGQAAAGgBAGQgBAGgCAHQgCAFgDAGQgCAGgEAGIAAAA").cp();
            this.shape_11.setTransform(155.5,155.5);

            this.shape_12 = new cjs.Shape();
            this.shape_12.graphics.f("#000000").s("#FFFFFF").ss(4,0,1).p("ABagxQAEAGACAHQADAGACAIQACAGABAIQABAHAAAGQAAAGgBAGQgBAGgCAGQgCAGgDAGQgCAGgEAGQgEAFgEAFQgEAGgEAEQgFAFgFAEQgGAEgFAEQgGAEgGACQgGADgGACQgGACgGABQgGABgGAAQgVAAgUgJQgUgIgPgPQgPgOgJgSQgJgSAAgSQAAgGABgHQABgIACgGQACgIADgGQADgHADgGQAEgGAEgFQAFgGAFgFQAFgFAGgFQAFgEAGgEQAGgDAHgDQAGgDAHgCQAHgCAIgBQAHgBAGAAQAGAAAGABQAGABAGACQAGACAGADQAGADAGADQAFAEAGAFQAFAEAFAFQAEAFAEAGQAEAFAEAGIAAAA").cp();
            this.shape_12.setTransform(116.5,151.5);

            this.shape_13 = new cjs.Shape();
            this.shape_13.graphics.f("#FFFFFF").s("#FFFFFF").ss(4,0,1).p("ALrCtQgcBTgzBIQgyBJhHA7QhGA7hWAqQgrAWguAQQguAQgwAMQgxALgzAGQgzAGg0AAQgnAAgngEQgogDglgGQhNgNhGgZQhGgZg+gjQg/gjg1gsQg1gsgqg1Qgrg0geg6Qgdg6gQhAQgQhAAAhDQAAgsAHgrQAHgrAOgqQAchTAzhIQAzhJBHg7QAjgdAogaQAogZArgVQArgWAvgQQAvgQAxgMQAygLA0gGQA0gGA0AAQA0AAAzAGQAzAGAxALQAwAMAuAQQAuAQArAWQBWAqBGA7QBHA7AyBJQAzBIAcBTQAOAqAHArQAHArAAAsQAAAtgHArQgHArgOAqIAAAA").cp();
            this.shape_13.setTransform(214.5,100);

            this.shape_14 = new cjs.Shape();
            this.shape_14.graphics.f("#FFFFFF").s().p("ARAl6QAoAFAnAFQAnAFAmAGQAmAFAkAGQAlAFAjAHQAjAGAiAGQAiAHAhAGQAgAHAgAHQAfAHAeAHQAeAHAcAIQAcAHAaAIQAbAHAaAIQAZAIAXAJQBHAYA3AaQA2AaAmAcQAmAcAUAdQAUAdAAAdQAAAegUAdQgUAdgmAcQgmAcg2AaQg3AahHAZQgXAIgZAIQgaAIgbAHQgaAIgcAIQgcAHgeAHQgeAHgfAHQggAHggAHQghAGgiAHQgiAGgjAHQgjAGglAFQgkAGgmAGQgmAFgnAFQgnAFgoAFQgnAFgpAFQgqAEgqAEQgqAEgrAEQgrAEgsADQgsADgtADQgtADgtADQguADguACQgvACgvACQgvABgwACQgwABgwABQgxABgxABQgxAAgxAAQhuAAhtgCQhtgDhpgEQhpgFhmgGQhlgHhhgIQhhgJhcgKQhcgKhWgMQhWgMhQgNQhQgOhKgPQhJgPhCgQQhDgRg6gRQg6gSgygTQgygTgqgTQhSgogsgqQgrgrgBgtQAAgdAUgdQAUgdAmgcQAmgcA2gaQA3gaBHgYQAXgJAZgIQAagIAagHQAbgIAcgHQAcgIAegHQAegHAfgHQAggHAggHQAhgGAigHQAigGAjgGQAjgHAlgFQAkgGAmgFQAmgGAngFQAngFAngFQAogFApgEQAqgFAqgEQAqgEArgEQArgEAsgDQAsgDAtgDQAtgDAtgDQAugDAugCQAvgCAvgCQAvgBAwgCQAwgBAwgBQAxgBAxAAQAxgBAwAAQAxAAAxABQAxAAAxABQAwABAwABQAwACAvABQAvACAvACQAuACAuADQAtADAtADQAtADAsADQAsADArAEQArAEAqAEQAqAEAqAFQApAEAnAFIAAAA").cp();
            this.shape_14.setTransform(216,135);

            this.addChild(this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1);
        }).prototype = p;


        (lib.mcTextSpaceShip = function() {
            this.initialize();

            // text
            this.text = new cjs.Text("454", "47px Philly Sans");
            this.text.textAlign = "center";
            this.text.lineHeight = 57;
            this.text.lineWidth = 107;
            this.text.setTransform(209.5,47.9);

            // ship
            this.instance_6 = new lib.SpaceShip("synched",0);
            this.instance_6.setTransform(216,68.5,1,1,0,0,0,216,88.5);

            this.addChild(this.instance_6,this.text);
        }).prototype = p = new cjs.Container();
        p.nominalBounds = new cjs.Rectangle(0,-19.9,432.1,179.1);


        (lib.mcSpaceShip = function(mode,startPosition,loop) {
            this.initialize(mode,startPosition,loop,{},true);

            // spaceship
            this.instance_7 = new lib.mcTextSpaceShip();
            this.instance_7.setTransform(0,-0.9,1,1,0,0,0,216,68.5);

            this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({y:-2},0).wait(1).to({y:-3.2},0).wait(1).to({y:-4.4},0).wait(1).to({y:-5.6},0).wait(1).to({y:-6.8},0).wait(1).to({y:-8.1},0).wait(1).to({y:-9.3},0).wait(1).to({y:-10.5},0).wait(1).to({y:-11.7},0).wait(1).to({y:-12.9},0).wait(1).to({y:-14.1},0).wait(1).to({y:-15.4},0).wait(1).to({y:-16.6},0).wait(1).to({y:-17.8},0).wait(1).to({y:-19},0).wait(1).to({y:-20.2},0).wait(1).to({y:-21.4},0).wait(1).to({y:-22.7},0).wait(1).to({y:-23.9},0).wait(1).to({y:-25.1},0).wait(1).to({y:-26.3},0).wait(1).to({y:-27.5},0).wait(1).to({y:-28.8},0).wait(2).wait(1).to({y:-27.5},0).wait(1).to({y:-26.3},0).wait(1).to({y:-25.1},0).wait(1).to({y:-23.9},0).wait(1).to({y:-22.7},0).wait(1).to({y:-21.4},0).wait(1).to({y:-20.2},0).wait(1).to({y:-19},0).wait(1).to({y:-17.8},0).wait(1).to({y:-16.6},0).wait(1).to({y:-15.4},0).wait(1).to({y:-14.1},0).wait(1).to({y:-12.9},0).wait(1).to({y:-11.7},0).wait(1).to({y:-10.5},0).wait(1).to({y:-9.3},0).wait(1).to({y:-8.1},0).wait(1).to({y:-6.8},0).wait(1).to({y:-5.6},0).wait(1).to({y:-4.4},0).wait(1).to({y:-3.2},0).wait(1).to({y:-2},0).wait(1).to({y:-0.8},0).wait(1));

        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-215.9,-89.4,432.1,179.1);

    })(lib = lib||{}, images = images||{}, createjs = createjs||{});
    var lib, images, createjs;




