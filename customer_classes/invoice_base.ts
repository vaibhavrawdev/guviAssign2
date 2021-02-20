import Customer from "./customer_base";
import cust_inter from "./customer_base";
class Invoice extends Customer{
	ID : number;
	customer : Customer;
	amount : number;
	constructor(id: number, amount: number, obj:cust_inter){
		super(obj)
		this.amount = amount;
		this.ID = id;
		this.customer = obj;
	}
}
let obj = {ID: 2,name: "vaibhav_invoice",discount: 11}
let invoice_obj = new Invoice(28,2500,obj);
