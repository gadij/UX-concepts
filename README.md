#UX Concepts

Create a pizza ordering app in order to demonstrate good UX Desing vs. bad UX design.
this only supports small display

Previous branch: Placing all user input fields in 1 unfriendly form

This branch: step_2-each_form_in_seperated_page branch, solves 1 specific bad UX design - placing all forms seperated by group logic into seperated pages/modules.

Design impact: we already know from the first branch about the problem with many forms grouped in 1 big form. This branch solved this problem by splitting the forms into several page/modules with similar context, for example: name, city and address are all under personal info, credit card info is located under payment module, and pizza details such as dough and toppings are placed under pizza details or order details, this causes the user upon each module to scan the page and assess how much time it will take him to complete the task, by giving him a short form each time, he will say: "ok this look pretty short and make sense, it will take me a few seconds". This is good as long as we dont create dozens of modules to "fool" the user, since they are not stupid, they will catch the idea pretty fast, and will leave the app.