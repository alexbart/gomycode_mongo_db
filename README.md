# 🚀 MongoDB CRUD Operations Checkpoint

This project demonstrates basic MongoDB CRUD (Create, Read, Update, Delete) operations using MongoDB inside Visual Studio Code.

---

# 📚 Objectives

The goal of this checkpoint is to practice MongoDB CRUD operations by:

- Creating a database
- Creating a collection
- Inserting documents
- Querying data
- Updating documents
- Deleting documents

---

# 🛠️ Technologies Used

- MongoDB
- Visual Studio Code
- MongoDB VS Code Extension
- JavaScript

---

# 📂 Database Information

## Database Name

```bash
contact

Collection Name
contactlist
🚀 Setup Instructions
1️⃣ Install MongoDB

Download and install MongoDB Community Server:

https://www.mongodb.com/try/download/community
2️⃣ Install VS Code Extension

Inside Visual Studio Code:

Open Extensions (Ctrl + Shift + X)
Search for:
MongoDB for VS Code
Install the official MongoDB extension.
3️⃣ Connect MongoDB

Press:

Ctrl + Shift + P

Search:

MongoDB: Connect

Use connection string:

mongodb://127.0.0.1:27017
📄 CRUD Operations Performed
✅ 1. Create Database
use("contact");
✅ 2. Create Collection
db.createCollection("contactlist");
✅ 3. Insert Documents
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
✅ 4. Display All Contacts
db.contactlist.find();
✅ 5. Display One Contact Using ID
db.contactlist.findOne({
    _id: ObjectId("YOUR_OBJECT_ID")
});
✅ 6. Display Contacts With Age Greater Than 18
db.contactlist.find({
    age: { $gt: 18 }
});
✅ 7. Display Contacts With Age > 18 and Name Containing "ah"
db.contactlist.find({

    age: { $gt: 18 },

    $or: [
        { firstName: { $regex: "ah", $options: "i" } },
        { lastName: { $regex: "ah", $options: "i" } }
    ]

});
✅ 8. Update Contact

Change:

Kefi Seif

to:

Kefi Anis
db.contactlist.updateOne(

    {
        lastName: "Kefi",
        firstName: "Seif"
    },

    {
        $set: {
            firstName: "Anis"
        }
    }

);
✅ 9. Delete Contacts With Age Less Than 5
db.contactlist.deleteMany({
    age: { $lt: 5 }
});
✅ 10. Display Final Contact List
db.contactlist.find();
📸 Screenshots

The following screenshots were taken during the checkpoint:

Database creation
Collection creation
Insert operation
Find queries
Update operation
Delete operation
Final collection output
📊 CRUD Operations Summary
Operation	MongoDB Command
Create Database	use()
Create Collection	createCollection()
Insert Documents	insertMany()
Read Documents	find() / findOne()
Update Document	updateOne()
Delete Documents	deleteMany()
✅ Expected Final Data
[
  {
    lastName: "Ben",
    firstName: "Moris",
    email: "ben@gmail.com",
    age: 26
  },

  {
    lastName: "Kefi",
    firstName: "Anis",
    email: "kefi@gmail.com",
    age: 15
  },

  {
    lastName: "Emilie",
    firstName: "brouge",
    email: "emilie.b@gmail.com",
    age: 40
  }
]
👨‍💻 Author
Alex Kiprop

Passionate Full-Stack Developer focused on:

MongoDB
React
Next.js
TypeScript
Node.js
📜 License

This project is for educational purposes.

