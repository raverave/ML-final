// function to create a dictionary
function build_dictionary(json_data) {
	// combine string 
	let str_data = json_data.map(dataSet => dataSet.phrase).join(' ');
  
	// lowercase
	str_data = str_data.toLowerCase();

	// remove punctuation
	str_data = str_data.replace(/[^\w\s']|_/g, "").replace(/\s+/g, " ");

	// remove dupliate items
	let arr_duplicate = str_data.split(' ');    
	let str_fix = arr_duplicate.filter((value, index, self) => self.indexOf(value) === index).join(' ');

	return str_fix.split(' ');
}

// clean text input
function clean_input(txt_input) {
	// lowercase
	txt_input = txt_input.toLowerCase();

	// remove punctuation
	txt_input = txt_input.replace(/[^\w\s']|_/g, "").replace(/\s+/g, " ");
	
	return txt_input;
}

// get time date today
function get_time(date) {
	let hours = date.getHours();
	let minutes = date.getMinutes();
	const ampm = hours >= 12 ? 'PM' : 'AM';
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	hours = hours < 10 ? '0' + hours : hours;
	// appending zero in the start if hours less than 10
	minutes = minutes < 10 ? '0' + minutes : minutes;

	return `${hours}:${minutes} ${ampm}`;
}

export {
  build_dictionary,
  clean_input,
  get_time,
};
