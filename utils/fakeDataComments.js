define(function () {

	var _id = 0;
	var _listComments = [];
	var _createdAt = new Date('2018-01-01').toUTCString();
	var _author = `Joao Gardin <gardin1992@gmail.com`;
	var _content =  `
		<div>
			<p> Comentário até 256, pode ser de rede social</p>
		</div>
	`;

	function _nextId() {
		return _id++;
	}

	function _createData() {

		return {
			id: _nextId(),
			content: _content,
			createdAt: _createdAt,
			updatedAt: new Date().toUTCString(),
			author: _author,
			items: {},
			itemsIds: {},
		}
	}

	for(var x =0; x < 10; x++) {

		_listComments.push(_createData);
	}
	
	function _factoryItem (argument) {

		var item = _createData();
		item.listComments = _listComments;

		return Object.assign(data, {listComments: _listComments})
	}

	return function _factoryData (amount = 0) {

		var data = {
			comments: {},
			commentsIds: []
		};

		for(var x = 0; x < amount; x++) {

			var item = _factoryItem();

			data.items[item.id] = item;
			data.itemsIds.push(item.id);
		}

		return data;
	}
})