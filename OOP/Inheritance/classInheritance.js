class Person {
    constructor(first, last, age, gender, interests) {
      this.name = {
        first,
        last
      };
      this.age = age;
      this.gender = gender;
      this.interests = interests;
    }
    
    greeting(){
        console.log(`${this.name.first} ${this.name.last}  says hello`);
    }

    farewell() {
      console.log(`${this.name.first} has left the building. Bye for now!`);
    };

}

let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);
han.greeting();

class Teacher extends Person{
    constructor(first, last, age, gender, interests, subject, grade)
    {
        super(first, last, age, gender, interests)
        this.subj = subject
        this.grade = grade
    }

    get subject()
    {
        return this.subj
    }
    set subject(subject)
    {
        this.subj = subject
    }
}

let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);
snape.greeting(); // Hi! I'm Severus.
snape.farewell(); // Severus has left the building. Bye for now.
console.log(snape.age); // 58
console.log(snape.subject); // Dark arts

snape.subject= "Magical enchanment"
console.log(snape.subject); 
