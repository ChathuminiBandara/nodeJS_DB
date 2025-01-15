import {Customer} from "../model/Customer";

const  customers:Customer[] = []

export function addCustomer (customer:Customer) {
    customers.push(customer)
}
export function showCustomers(){
    return customers;
}
export function deleteCustomer (id:string) {
    const index = customers.findIndex(customer => customer.id === id)
    if (index > -1) {
        customers.splice(index, 1);
    }
}
export function updateCustomer(id:string, customer:Customer) {
    const index = customers.findIndex(customer => customer.id === id)
    if (index > -1) {
        customers[index] = customer;
    }
}