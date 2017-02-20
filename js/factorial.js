(function() {
	
	var
	types = {
		"long": function(n) {

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
		"formatted": function(n) {

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

		},
		"number": function(n) {
			return n;
		}
	},	
	factorial = function(i, type) {

		var 
		o = i;

		while(i>1&&i--) {
			o = (o*i);
		};

		return types[type](o);

	};

	window.factorial = factorial;

})();