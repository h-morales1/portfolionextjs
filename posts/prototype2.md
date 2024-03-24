---
title: "Android Java Inventory App"
summary: "Android app designed to catalogue an inventory of art pieces."
---

# Art Inventory App [(**_Repo_**)](https://github.com/h-morales1/invPrototypes)

Tech used:

- Java
- Android Studio
- XML
- SQLite
- Git

---

## What does the project do?

The purpose of this project is to allow for easy organization of a personal art inventory.

![Home View](/projectImages/prototype2/homeView.png)

## Home View

The app has a home view that displays a type of gallery, of all the art pieces stored within the database.
A recyclerview is populated with a custom item. The app performs a query to an SQLite database in order to populate the recyclerview with, a thumbnail of the an art piece, title, selling price, and an icon denoting if the product is sold.

![Add Item View](/projectImages/prototype2/addItem1.png)

## Adding an Item

To add a new art piece to the database, the form above must be filled out. The name field must be filled out, even if the rest of the fields are blank.

![Add Item View Continued](/projectImages/prototype2/addItem2.png)

Clicking the camera button in the form will allow the user to utilize the phone's camera to take a picture of an art piece.
The folder icon will allow the user to select an image from the users gallery.
Once the form is filled out, the save button will save all the data to the database.
The archive button will save the data to another database that serves as an archive or history for art pieces.
The name field and the categories field are used when searching for a specific art piece within the home view.

## Viewing an Item

![Viewing an Item](/projectImages/prototype2/viewItem1.png)

Clicking an art piece on the homeview will show you the details for that specific art piece.
While viewing the details of the respective art piece, clicking the pencil icon at the top, will allow the user to edit the details of that art piece.

![Viewing an Item](/projectImages/prototype2/viewItem2.png)

Clicking the envelope icon will allow the user to email the picture of the art piece to themselves, or someone else.
It is also possible to delete the art piece by clicking the three dots icon and selecting delete.

## Exporting Database Table

![Viewing an Item](/projectImages/prototype2/exportItem.png)

Clicking the last icon on the bottom navigation bar will take the user to the export product view.
From here the user can type in an email into the text field and clicking the export button, will allow the user to select an email client, which will automatically be prefilled with the email from the text field.
A CSV file is created and populated with all the art pieces in the database, this can be opened by the user in the Excel program to view the database entirely, as a table.
