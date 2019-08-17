Hi! 

Welcome to `Advanced Unrefactored System & Co`. We are a company with a long programming history. We love what we do and we love to not refactor code. 

Our new Silicon Valley CEO says that we need to change the name to Advanced REFACTORED Systems & Co. Sadly, we cannot change the name without refactoring all of our code!

**Your mission is to refactor this piece of code for the weak silicon valley people.** We think this code is a great achievement that should be studied by mankind. In any case, we have some issues and tips that we want you to know.

 - It seems that the code cannot process several calls at the same time. Each call takes 9 seconds and we don't know why. Worst of all, it seems to process them sequentially instead of parallel!
 - DO **NOT** touch the folder in `/src/exerciseFunctions`. Our last CEO told us that if we touch anything, we will be fired. You are warned.
 - You will need to know JavaScript and Node and a bit of TypeScript. To run the project you need to have the typescript compiler.
     + Make sure you have node installed (for linux & mac we recommend nvm toolset.)
     + Make sure you have the typescript compiler installed (`npm install typescript -g`)
     + In a terminal, `cd` in the folder of the project
     + Run `tsc` to compile the project
     + You can now run `node .` to run the project
     + If you make any changes, run `tsc` and `node .` again.
 - For now we have only one item in our database. Because we were forgetting the id of the item, we changed it to `42`. You know... the answer to everything.

Good luck!
