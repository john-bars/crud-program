function nameInputFormat(input) {
	// let inputLayout = /[A-Z][a-z]*(\s[A-Z][a-z]+)*/g;
	let inputLayout = /(^\w{1})|(\s\w{1})/g;
	let regex = /([^a-zA-Z0-9\s])/g;
	return input.value = input.value.replace(regex, "")
		.replace(inputLayout, (letter) => letter.toUpperCase())
		.replace(/\s+/, " ");
}

function addressInputFormat(input) {
	let inputLayout = /(^\w{1})|(\s\w{1})/g;
	let regex = /([^a-zA-Z0-9-,.\s])/g;
	return input.value = input.value.replace(regex, "")
		.replace(inputLayout, (letter) => letter.toUpperCase())
		.replace(/\s+/, " ");
}

function phoneNumberFormat(outputNumber) {
	let phoneNumber = document.querySelector("#number");
	// let phoneNumber = $("#number");
	let button = document.getElementById("btnAdd");
	// let button = $("#btnAdd");

	(phoneNumber.value.length >= 13) ? button.disabled = false : button.disabled = true;
	outputNumber.value = phoneNumber.value.replace(/\D/g, "")
		.replace(/(\d{1,4})(\d{1,3})?(\d{1,4})?/g, '$1 $2 $3');
}

function validateEmail() {
	const emailFormat = /^[a-zA-Z](?:[a-zA-Z0-9]*[-_.])*[a-zA-Z0-9]+@[a-z]{2,}(?:\-[a-z]{2,})*\.[a-z]{2,4}$/;
	const button = document.getElementById("btnAdd");
	// const button = $("#btnAdd");
	let email = document.getElementById("email");
	// let email = $("#email");

	// enabled the button once the input match the email format
	return (email.value.match(emailFormat)) ? button.disabled = false : button.disabled = true;
}

$(document).ready(function () {

	$("#btnAdd").click(function () {
		let firstName = $("#firstName").val().trim();
		let lastName = $("#lastName").val().trim();
		let number = $("#number").val().trim();
		let address = $("#address").val().trim();
		let email = $("#email").val().trim();

		if (firstName != "" && lastName != "" && number != "" && address != "" && email != "") {
			let serialNumber = $("#tblData tbody").children().length + 1;

			// creating dynamic html string
			let dynamicTr = "<tr><td>" + serialNumber + "</td><td>" + firstName + "</td><td>" + lastName + "</td><td>" + number + "</td><td>" + address + "</td><td>" + email + "</td> <td> <button class='btn btn__edit'> Edit </button><button class='btn btn__delete'> Delete </button> </td><tr>";
			$("#tblData tbody").append(dynamicTr); //appending dynamic string to the table

			// removing the last typed data on the input tag 
			$("#firstName").val("");
			$("#lastName").val("");
			$("#number").val("");
			$("#address").val("");
			$("#email").val("");

			// DELETE
			$(".btn__delete").click(function () {
				$(this).parent().parent().remove();
			});

			// EDIT
		}
	})
})