function setDefaults() {
	selectNeonate();
}
function showDob() {
	var dob = document.getElementById("dob");
	dob.style.display = 'block';
	var age = document.getElementById("age");
	age.style.display = 'none';
}
function showAge() {
	var dob = document.getElementById("dob");
	dob.style.display = 'none';
	var age = document.getElementById("age");
	age.style.display = 'block';
}

function showPatientName() {
	var dob = document.getElementById("patientName");
	dob.style.display = 'block';
	var age = document.getElementById("babyOf");
	age.style.display = 'none';
}

function showBabyOf() {
	var dob = document.getElementById("patientName");
	dob.style.display = 'none';
	var age = document.getElementById("babyOf");
	age.style.display = 'block';
}

function showMotherName() {
	var dob = document.getElementById("motherName");
	dob.style.display = 'block';
}

function hideMotherName() {
	var dob = document.getElementById("motherName");
	dob.style.display = 'none';
}

function showWeights() {
	var weights = document.getElementById("weights");
	weights.style.display = 'block';
}

function hideWeights() {
	var weights = document.getElementById("weights");
	weights.style.display = 'none';
}

function selectNeonate() {
	document.getElementById("neonate").checked = true;
	showDob();
	showBabyOf();
	hideMotherName();
	showWeights();
}

function selectChild() {
	showAge();
	showPatientName();
	showMotherName();
	hideWeights();
}

function selectGender(gender) {
	document.getElementById("gender").innerHTML = gender.value;
}

function printSummary() {
	document.getElementById("hcDiv").className = "";
	if (document.getElementById("hc").value != null
			&& document.getElementById("hc").value.length > 0) {
		document.getElementById("hcDiv").className = "col-sm-4 visible-print";
	} else {
		document.getElementById("hcDiv").className = "col-sm-4 hidden-print";
	}
	window.print();
	document.getElementById("hcDiv").className = "col-sm-4";
}
