interface Customer{
	ID ?: number ;
	name ?: string ;
	discount ?: number;
	getID() ?:
	getName();
	getDiscount();
	setDiscount(user_input: number) ;
}

export default class Customer_cl implements Customer {
	ID : number; 
	name : string; 
	discount : number; 
	constructor(obj: Customer){
		this.ID = obj.ID;
		this.name = obj.name;
		this.discount = obj.discount;
	}
	getID(){
		console.log(this.ID);
	}
	getName(){
		console.log(this.name);
	}
	getDiscount(){
		console.log(this.discount);
	}
	setDiscount(user_input: number){
		this.discount = user_input;
	}
	toString(){
		console.log(`${this.name}(${this.ID})`);
	}
}

export {Customer as cust_inter};
