// header
main.remove()
let userName='Liz'
const name =`${userName}`
const newHeader=document.createElement('div')
newHeader.id='victory'
newHeader.textContent=userName+('\'s lists')
document.body.append(newHeader)

//making a list


function createList(listTitle){
    const newList=document.createElement('ul')
    newList.textContent=`${listTitle}`
    newList.className="list"
    newList.id=`${listTitle.toLowerCase().split(' ').join('-')}`
    return newList
}

const toDoList="To Do List"
const shoppingList="Shopping List"
const contactList="Contact List"

function addNewList(newList){
    newHeader.append(createList(newList))
}

addNewList(toDoList)
addNewList(shoppingList)
addNewList(contactList)

// creating items


function createTask(listItem){
    const task=document.createElement('li')
    task.textContent=`${listItem}`
    task.className="to-do"
    return task
}
// const practice=createTask("Practice DOM Manipulations")
// const laundry=createTask("Fold Laundry")
// const water=createTask("Water Plants")


function addToList(listID, task){
    document.getElementById(listID).append(createTask(task))
}

addToList('to-do-list', "Practice DOM Manipulations")
addToList('to-do-list', "Fold Laundry")
addToList('to-do-list', "Water Plants")




//turn a list item red if completed

