/*
 * Hello World
 * Write a function that greets the user by name, or by saying "Hello, World!" if no name is given.
 
Bob answers 'Sure.' if you ask him a question.
He answers 'Whoa, chill out!' if you yell at him.
He says 'Fine. Be that way!' if you address him without actually saying anything.
He answers 'Whatever.' to anything else.

 */

/* exports.hello = function (name) {
  your_answer
}
*/

function heyBob (words) {
  if words.includes('?')
    return 'Sure.';
  else if words.includes('!')
    return 'Whoa, chill out!';
  else if words.includes(' ')
    return 'Fine. Be that way!';
  else 
    return 'Whatever.';
}
