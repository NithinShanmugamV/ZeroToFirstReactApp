1. Currently our handle increment method does not take any parameters, but sometimes in real world applications we need to pass arguments with our events. For example let's imagine we are dealing with a list of products in a shopping cart, when we click the handle increment button, we want to pass the id of the product. How can we do this? 

2. Well, earlier you learned that in onClick we need to pass the function reference, so here we cannot handle call increment and pass an argument like one, we need to pass a function, reference,
