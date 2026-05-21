// Switch to database
use("contact");


// Create collection
db.createCollection("contactlist");


// Insert documents
db.contactlist.insertMany([

    {
        lastName: "Ben",
        firstName: "Moris",
        email: "ben@gmail.com",
        age: 26
    },

    {
        lastName: "Kefi",
        firstName: "Seif",
        email: "kefi@gmail.com",
        age: 15
    },

    {
        lastName: "Emilie",
        firstName: "brouge",
        email: "emilie.b@gmail.com",
        age: 40
    },

    {
        lastName: "Alex",
        firstName: "brown",
        age: 4
    },

    {
        lastName: "Denzel",
        firstName: "Washington",
        age: 3
    }

]);


// // Display all contacts
// db.contactlist.find();


// // Display one contact using ID
// db.contactlist.findOne({
//     _id: ObjectId("PASTE_ID_HERE")
// });


// // Display contacts with age > 18
// db.contactlist.find({
//     age: { $gt: 18 }
// });


// // Display contacts with age > 18 and name containing "ah"
// db.contactlist.find({

//     age: { $gt: 18 },

//     $or: [
//         { firstName: { $regex: "ah", $options: "i" } },
//         { lastName: { $regex: "ah", $options: "i" } }
//     ]

// });


// // Update Kefi Seif → Kefi Anis
// db.contactlist.updateOne(

//     {
//         lastName: "Kefi",
//         firstName: "Seif"
//     },

//     {
//         $set: {
//             firstName: "Anis"
//         }
//     }

// );


// // Delete contacts age < 5
// db.contactlist.deleteMany({
//     age: { $lt: 5 }
// });


// // Display final contact list
// db.contactlist.find();