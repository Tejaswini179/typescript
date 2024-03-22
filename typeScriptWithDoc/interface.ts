interface Person {
    firstname : string;
    lastname : string;
}

function getFullName(person:Person){
     console.log(`Full name is : ${person.firstname} ${person.lastname}`)
}

let name1 = {
    firstname : "Tejaswini",
    lastname : "khengare"
}
getFullName(name1)
// let john = {
//     firstName: 'John',
//     lastName: 'Doe'
// };

// console.log(getFullName(john));

interface Mailable {
    send(email: string): boolean
    queue(email: string): boolean
}

interface FutureMailable extends Mailable {
    later(email: string, after: number): boolean
}

class Mail implements FutureMailable {
    later(email: string, after: number): boolean {
        console.log(`Send email to ${email} in ${after} ms.`);
        return true;
    }
    send(email: string): boolean {
        console.log(`Sent email to ${email} `);
        return true;
    }
    queue(email: string): boolean {
        console.log(`Queue an email to ${email}.`);
        return true;
    }
}

let mailer: Mailable = new Mail();

mailer.send("example@email.com");
mailer.queue("another@email.com"); 
(mailer as FutureMailable).later("future@email.com", 5000); 

