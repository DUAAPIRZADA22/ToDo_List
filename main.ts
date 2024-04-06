#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let todos: string[]= [];
let condition = true
console.log(chalk.bold.red ("\n \t Welcome to my ToDo list: \t \n"));

// while(condition)
// {
// let todoQuestion= await inquirer.prompt([{
//     name:"firstQuestion",
//     type:"input",
//     message:"What would you like to add in your todos?"
// },
// {
//     name:"secondQuestion",
//     type:"confirm", // when type is confirm, answer is in yes or no
//     message:"Would you like to add more in your todos?",
//     default:"False"
// }]
// );
// todos.push(todoQuestion.firstQuestion);
// console.log(todos)
// // the loop is running on the base of below variable condition
// condition = todoQuestion.secondQuestion
// }

let main = async ()   => {
    while (condition){
        let option = await inquirer.prompt([{
            name:"choice",
            type:"list",
            message:" Select an option you want to do:",
            choices:["Add" , "Delete" , "View Todo List" , "Update", "Exit"]
        }]);
        if(option.choice === "Add"){
            await Add ()
        }
        else if (option.choice === "Delete"){
            await Delete()
        }
        else if(option.choice === "View Todo List"){
            await viewTask()
        }
        else if(option.choice === "Update"){
            await Update()
        }
        else if(option.choice === "Exit"){
            condition= false;
        }
    }
}
 

// to add new task in Todo list
let Add = async() => {
    let newTodos= await inquirer.prompt([{
        name:"task",
        type:"input",
        message: "Enter your new todos"
    }])
todos.push(newTodos.task);
console.log(`\n ${newTodos.task} added successfully in your todos list \n`)
}

// to view todo list
let viewTask = () => {
    console.log("\n Your Todo list: \n");
    todos.forEach((task, index) =>{
        console.log(`${index +1}: ${task}`)
    })
}

 // to delete a task in todo list
let Delete = async () => {
    await viewTask
    let taskIndex = await inquirer.prompt([{
        name:"index",
        type:"number",
        message:"Enter the 'index num' of the task you want to delete:"
    }]);
    let Deletedtask = todos.splice(taskIndex.index -1, 1);
    console.log(`\n ${Deletedtask} has been successfully deleted from your todo list \n`)
}

// to update todo list
let Update = async () => {
    await viewTask
    let updateNewTask = await inquirer.prompt([{
        name:"update",
        type:"number",
        message:"Enter the 'index num' of the task you want to update:"
    },
    {
        name:"newTask",
        type:"input",
        message:"Now enter new task name:"
    }
]); 
todos[updateNewTask.update -1] = updateNewTask.newTask
console.log(`\n Task at index num. ${updateNewTask.update} updated successfully [For update list Check "View Todo List"] \n`)
}

main();


