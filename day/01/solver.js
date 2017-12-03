const uncaptcha = (input) => {

	let sum = 0;
	let seq = input.split('');
	let check = 0;

	for (let i = 0; i < seq.length; i++) {

		let add = 0;

		if (i < input.length-1) {
			add = compare(input[i], input[i+1])
		}
		else if (i === input.length-1) {
			add = compare(input[input.length-1], input[0])
		}

		sum = sum + Number(add)
		check += add

	}

	return sum;
	//return {sum, check};
}

const compare = (f,s) => {

	let add = 0;

	if (f === s) {
		add = s;
	}
	else {
		add = 0;
	}

	return add;
}
