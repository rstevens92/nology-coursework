// // OBJECT SYNTAX

// const exampleObject = {
//     key : "value", // COMMA FOR OTHER KEYS
//     types : "any", 
//     method() {
//         // DO SOMETHING
//         // THIS.KEY
//         return this.key + " " + this.types;    
//     }
// }


// // ACCESS OBJECTS
// //DOT NOTATION
// console.log(exampleObject.key);
// console.log(exampleObject.types);

// // CALLING A METHOD
// console.log(exampleObject.method());

// // SQUARE BRACKETS
// console.log(exampleObject["key"]);
// console.log(exampleObject["types"]);
/*const studentContainer = document.querySelector(".students-container");

// studentContainer.style.border = "50px solid red";

const person = {
    firstName: "Charlie",
    lastName: "Richardson",
    quote: "It doesn't get easier, you just go faster",
    skills: ["html", "css", "javascript"],
    imgURL: "https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg",
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    },
    getSkillsHTML() {
        const skillsHTML = this.skills.map(skill => `<li>${skill}</li>`)
        console.log(skillsHTML);
        return skillsHTML.join("");
    },
    getPersonHTML() {
        const personHTML = `
        <article class = "student-card">
        <img src=${this.imgURL} />
        <h2>${this.getFullName()}</h2>
        <blockquote>${this.quote}</blockquote>
        <h3>Skills</h3>
        <ul>${this.getSkillsHTML()}</ul>
        </article>
        `
        return personHTML;
    }
}



for (let index = 0; index < 10; index ++){
    studentContainer.innerHTML += person.getPersonHTML();
}

person.age = 30;

console.log(person.getSkillsHTML());*/

// class ExampleClass {
//     constructor(firstName, lastName, age) {
//         (this.firstName = firstName), (this.lastName = lastName), (this.age = age)
//     }

//     greet() {
//         return `hi my name is ${this.firstName} ${this.lastName}, I am ${this.age} years old`;
//     }
// }

// class ExtendedClass extends ExampleClass {
//     constructor(firstName, lastName, age, subject){
//         super(firstName, lastName, age),
//         (this.subject = subject);
//     }
//     greet() {
//         return `Hi I am Mrs ${this.lastName}, I will teach you ${this.subject}.`;
//     }
// }

// console.log(new ExtendedClass("Rachael", "Stevens", 30, "Drama").greet());

// const exampleOne = new ExampleClass("Charlie", "Richardson", 30);
// const exampleTwo = new ExampleClass("Rachael", "Stevens", 30);

// console.log(exampleOne.greet());
// console.log(exampleTwo.greet())


class PersonProfile {
    constructor(firstName, lastName, quote, skills, imgURL) {
        (this.firstName = firstName), 
        (this.lastName = lastName), 
        (this.quote = quote), 
        (this.skills = skills), 
        (this.imgURL = imgURL)
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
    getSkillsHTML() {
        const skillsHTML = this.skills.map(skill => `<li>${skill}</li>`)
        return skillsHTML.join("");
    }
    getPersonHTML() {
        const personHTML = `
        <article class = "student-card">
        <img src=${this.imgURL} />
        <h2>${this.getFullName()}</h2>
        <blockquote>${this.quote}</blockquote>
        <h3>Skills</h3>
        <ul>${this.getSkillsHTML()}</ul>
        </article>
        `
        return personHTML;
    }
}

class PremiumPersonProfile extends PersonProfile {
    constructor(firstName, lastName, quote, skills, imgURL, contactLink){
        super(firstName, lastName, quote, skills, imgURL),
        (this.contactLink = contactLink)
    }
    getPersonHTML() {
        const personHTML = `
        <article class = "student-card">
        <img src=${this.imgURL} />
        <h2>${this.getFullName()}</h2>
        <blockquote>${this.quote}</blockquote>
        <h3>Skills</h3>
        <ul>${this.getSkillsHTML()}</ul>
        <a href=${this.contactLink}>Lets get in touch!</a>
        </article>
        `
        return personHTML;
    }
}

const studentContainer = document.querySelector(".students-container")

const personOne = new PremiumPersonProfile ("Rachael", "Stevens", "The opposite of war isn't hate, it's creation.", ["Cooking", "Sewing", "Swimming"], "https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg", "https://www.google.com");

const personTwo = new PersonProfile ("Carl", "Stevens", "I can't believe I ate the whole thing!", ["Coding", "Quoting The Simpsons", "Hugs"], "https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg");

const personThree = new PersonProfile ("Laura", "Stevens", "My favourite colour is pink, red and Purple", ["Running", "Gymnastics", "Reading"], "https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg");

const personFour = new PersonProfile ("Hannah", "Stevens", "Dog! Rurururururu.", ["Laughing", "Cuddles", "Screaming"], "https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg");

studentContainer.innerHTML += personOne.getPersonHTML();
studentContainer.innerHTML += personTwo.getPersonHTML();
studentContainer.innerHTML += personThree.getPersonHTML();
studentContainer.innerHTML += personFour.getPersonHTML();