class Service {

	constructor(name, price, service1, service2, service3, description) {
		this.name = name;
		this.price = price;
		this.service1 = service1;
		this.service2 = service2;
		this.service3 = service3;
		this.description = description;
	}

	getDetails() {
		let output = "",
			availServices = [this.service1, this.service2, this.service3];

		output += `
		<div class="col s12">
			<dl>
				<dt id="${this.name}" class="sr-only">${this.name}</dt>
				<dd aria-labelledby="${this.name}">${this.name}</dd>
				<dd aria-labelledby="${this.name}">${this.description}</dd>
			</dl>
		</div>`;
		return output;
	}

	getCard() {
		let output = "",
			availServices = [this.service1, this.service2, this.service3];

		output += `
			<ion-col size="12" size-md="4" size-lg="3" class="ion-text-center card-container">
				<div class="ion-card">
					<dl class="price">
						<dt id="${this.name}">${this.name}</dt>
						<dd aria-labelledby="${this.name}" class="price-total">
							<span class="w3-small">from</span> <br>
							<b><span class="w3-large currency">£</span>${this.price}</b>
						</dd>`;

		for (let i = 0; i < availServices.length; i++) {
			output += `<dd aria-labelledby="${this.name}"><i class="fas fa-check"></i>${availServices[i]}</dd>`;
		}

		output += "</dl></div></ion-col>";
		return output;
	}
}

/* Instances */
const basic = new Service(
	"BASIC",
	"50.00",
	"Wash hair",
	"Blow dry",
	"Wrap",
	"Our basic service"
),
extra = new Service(
	"EXTRA",
	"50.00",
	"Oil Treatment",
	"Moisturise",
	"Wrap",
	"We provide an extra service"
),
relaxer = new Service(
	"RELAXER",
	"60.00",
	"Wash hair",
	"Blow dry",
	"Wrap",
	"If you have relaxed afro hair, we offer a full range of relaxers for all different hair types. If you are new to relaxer and have virgin hair you will benefit from a consultation prior to applying chemical and information about how to care for your new hairstyle. We also offer Body Wave, the latest in chic hair for all discerning clientele."
),
color = new Service(
	"COLOUR",
	"50.00",
	"Highights",
	"Full Head",
	"Custom",
	"At Parees Taylor you can indulge your inner diva with a range of colour treatments for you hair using a range of permanent, semi-permanent and rinses from L'Oreal, Revlon and Elasta QP."
),
weave = new Service(
	"WEAVE",
	"60.00",
	"Single Track",
	"Full Head",
	"Custom",
	"We do all weaves using a hair net which helps people who may have problem areas. Weaves are done in complete privacy."
),
bridal = new Service(
	"BRIDAL",
	"150.00",
	"Bride",
	"Bridemaids",
	"Full Service",
	"We offer a full bridal service where we will do hair for your entire bridal party. If you are getting married, call for a consultation."
);

/* Function initiate on load */
document.addEventListener("DOMContentLoaded", function () {
	const serviceList = [basic, extra, relaxer, color, weave, bridal];
	let services = "";

	try {
		for (let i = 0; i < serviceList.length; i++) {
			services += serviceList[i].getCard();
		}
		document.getElementById("serviceList").innerHTML = services;
	} catch (err) {
		document.getElementById("serviceList").innerHTML = err.message;
	}

});
