const express = require("express");
const faker = require("faker");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CLASSES
class User {
    constructor(){
        this._id = faker.random.uuid();
        this.email = faker.internet.email();
    }
    
}


class Company {
    constructor(){
        this._id = faker.random.uuid();

        this.address = 
            faker.address.streetAddress() + ", " +
            faker.address.city() + " " +
            faker.address.stateAbbr() + " " +
            faker.address.zipCode()
        ;
    }
}

// ROUTES
app.get("/api/users/new", (req, res) => {
   return res.json({user: new User()});
});

app.get("/api/companies/new", (req, res) => {
    return res.json({company: new Company()});
 });

 app.get("/api/user/company", (req, res) => {
    return res.json({user: new User(), company: new Company()});
 });


app.listen(8000, () => 
    console.log("You have connected to port 8000")
);

