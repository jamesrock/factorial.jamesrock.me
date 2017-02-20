(function() {
	
	var
	factorial = function(i, type) {

		var 
		o = i,
		outs = {
			"N": 0,
			"L": 0,
			"F": 0
		};

		while(i>1&&i--) {
			o = (o*i);
		};

		outs["N"] = o;
		outs["L"] = toLong(outs["N"]);
		outs["F"] = toFormatted(outs["L"]);

		return outs[type];

	},
	toLong = function(n) {

		n = n.toString();
		
		var 
		_split = n.split("e+"),
		first = _split[0].replace(".", ""),
		second = _split[1],
		zeroes = Number(second);

		zeroes = (zeroes - (first.length-1));

		while(zeroes--) {
			first += "0";
		};

		return first;

	},
	toFormatted = function(n) {

		n = n.toString();

		var
		length = n.length,
		_split = n.split("").reverse();

		while(length--) {

			if(length%3===0&&length>0) {
				_split.splice(length, 0, ",");
			};

		};

		return _split.reverse().join("");

	};

	window.factorial = factorial;

})();