/*
 * Hello World
 * Write a function that greets the user by name, or by saying "Hello, World!" if no name is given.
 */

exports.hello = function (name) {
  if (!name)
   return "Hello, World!"
  else
   return `Hello, ${name}!`
}
