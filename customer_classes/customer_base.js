var Customer_cl = /** @class */ (function () {
    function Customer_cl(obj) {
        this.ID = obj.ID;
        this.name = obj.cname;
        this.discount = obj.discount;
    }
    Customer_cl.prototype.getID = function () {
        console.log(this.ID);
    };
    Customer_cl.prototype.getName = function () {
        console.log(this.name);
    };
    Customer_cl.prototype.getDiscount = function () {
        console.log(this.discount);
    };
    Customer_cl.prototype.setDiscount = function (user_input) {
        this.discount = user_input;
    };
    Customer_cl.prototype.toString = function () {
        console.log(this.name + "(" + this.ID + ")");
    };
    return Customer_cl;
}());
var classobj = { ID: 23, cname: "Vaibhav", discount: 20 };
var newobj = new Customer_cl(classobj);
newobj.getID();
newobj.toString();
