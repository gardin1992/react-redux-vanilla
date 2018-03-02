define(function (require) {

	var _id = 0;
	var _listComments = [];
	var _createdAt = new Date('2018-01-01').toUTCString();
	var _author = `Joao Gardin <gardin1992@gmail.com`;
	var _content =  `
		<div>
			<p>Skate ipsum dolor sit amet, grab 50-50 manual freestyle drop in. Spine wall ride Jerry Hsu bruised heel fakie out bail. Pogo casper smith grind darkslide ho-ho. Sponsored noseblunt slide tuna-flip steps crail slide. Vert face plant backside deck half-flip. Pop shove-it darkslide Caballerial pool Primo slide birdie. Crail grab powerslide bearings fast plant 360. Pantsman lipslide bank flypaper judo air steps. G-turn vert grab Streetstyle in Tempe snake Kevin Harris. Powell Peralta fakie rip grip indy grab ollie north mongo. Saran Wrap mute-air half-flip hardware yeah. Lip Mike York full-cab 1080 speed wobbles alley oop. Coping boneless handplant nose bump Steve Caballero Japan air. </p>
			<p>Backside lipslide pop shove-it drop in S.K.A.T.E.. Salad grind carve no comply lien air. Tailslide boneless freestyle nosegrind. Slob air concave Daggers kidney boned out. Wall ride kingpin judo air axle set. Yeah rails grind locals Spike Jonze. Death box acid drop 1080 rocket air. Nosegrind tic-tac Eight Dayz trucks steps. Shoveit Rob Roskopp kickturn axle set hang ten. Axle set ollie 50-50 grab. Upland poseur soul skate Primo slide helipop. Full-cab hurricane salad grind heel flip. Bruised heel nose grab indy grab aerial. </p>
			<p>Hard flip casper slide darkslide freestyle pool crail grab frontside. Downhill ollie north opposite footed bluntslide cess slide crail slide 360. Hardware half-cab disaster salad grind pump hip carve. 270 judo air hand rail hurricane egg plant risers handplant. Method air smith grind ollie hole casper salad grind Christ air indy grab. Carve hip ho-ho nosebone crail slide snake pool Steve Rocco. Transfer durometer Independent wall ride masonite transition varial crooked grind. Yeah mini ramp handplant hanger nose bump g-turn poseur. Nose slide no comply Steve Rocco stalefish spine rails boneless mongo. Fast plant bank method air pogo powerslide Saran Wrap Wallows transition. Pogo camel back nosebone shinner nosegrind backside boneless. </p>
		</div>
	`;
	var _title = 'Post numero: '

	function _nextId() {
		return _id++;
	}

	function _createData() {

		var id = _nextId(); 
		return {
			id: id,
			title: `${_title} ${id}`,
			author: _author,
			content: _content,
			//
			comments: {},
			commentsIds: [],
			//
			createdAt: _createdAt,
			updatedAt: new Date().toUTCString(),
		}
	}

	return function _factoryData (amount = 0) {

		var data = {
			items: {},
			itemsIds: []
		};

		for(var x = 0; x < amount; x++) {

			var item = _createData();

			data.items[item.id] = item;
			data.itemsIds.push(item.id);
		}

		return data;
	}
})