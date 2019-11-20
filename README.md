# UX Concepts
    Create a pizza ordering app in order to demonstrate good UX design vs. bad UX design.
    this only supports small display

## Previous branch: 
    Placing all user input fields in 1 unfriendly form

## This branch: 
    step_2-each_form_in_seperated_page branch, 
    solves 1 specific bad UX design - placing all forms separated by group logic, 
    into separated pages/modules.

## Design impact: 
    We already know from the first branch about the problem with many forms grouped in 1 big form. 
    This branch solved this problem, 
    by splitting the forms into several pages/modules with similar context, 
    for example: name, city and address are all grouped under personal info. 
    Credit card info is grouped under payment module, 
    and pizza details such as dough and toppings are grouped under pizza details or order details, 
    this separation of logic makes the user, 
    to scan the page and assess how much time it will take him to complete the task, 
    by giving him a short form each time, he will say: "ok this look pretty short and make sense, 
    it will take me a few seconds". 

### Design impact note: 
    This is good as long as we dont create dozens of modules to "fool" the user.
    They are not stupid, they will catch the idea pretty fast, and will leave the app.