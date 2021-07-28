/* 1. Create a Cat class

2. Add the cat's name via constructor:  new Cat("Tom")

3. the cat will have these four properties tiredness, hunger , happiness

4. the cat will have these 4 functions feed(), sleep(), pet(), status()

5. if feed() is called tiredness++, hunger--, happiness++

6. if sleep() is called tiredness--, hunger++, happiness++

7. if pet() is called tiredness--, hunger++, happiness++

8. if status() is called, it will print in console like Tom is really hungry if hunger > tiredness && happiness

So on (be creative) */

class Cat {
    constructor(name) {
        this.name = name
        this.tiredness = 0
        this.hunger = 0
        this.happiness = 0
    }

    feed() {
        this.tiredness ++
        this.hunger --
        this.happiness ++
    }

    sleep() {
        this.tiredness --
        this.hunger ++
        this.happiness ++
    }

    pet() {
        this.tiredness --
        this.hunger ++
        this.happiness ++
    }

    status() {
        if (this.tiredness < 0)
            console.log(`${this.name} isn't tired!!`);

        if (this.happiness < 0)
            console.log(`${this.name} is sad, play with him!!`);

        if (this.hunger < 0)
            console.log(`${this.name} isn't hungry anymore!!`);
    }
    
}

let cat1 = new Cat('Tom')
cat1.sleep()
cat1.status()

let cat2 = new Cat('Cooper')
cat2.pet()
cat2.status()

let cat3 = new Cat('Leo')
cat3.feed()
cat3.status()