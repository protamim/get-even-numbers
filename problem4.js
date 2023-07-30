/* 
Problem: Write a program that prints all even numbers from 1 to a given positive integer.

Instructions:
Ask the user to enter a positive integer.
Use a while loop to print all the even numbers from 1 up to the given integer.
Ensure that the program handles invalid inputs, such as non-positive integers.

Note: The program should only print even numbers from 1 up to the given positive integer (inclusive), 
and each number should be printed on a separate line. 
If the user enters a non-positive integer (e.g., 0, negative number, or a non-numeric input), 
the program should display an appropriate message.
*/

// Program start
var jsBtn = document.getElementById('jsBtn');
var show = document.getElementById('show');

        jsBtn.addEventListener('click', function () {
            var inputByUser = parseInt(document.getElementById('inputByUser').value);

            // Clear the previous content before starting the loop
            show.innerHTML = '';
            //prevent users to enter non-positive integer (e.g., 0, negative number, or a non-numeric input)
            if(inputByUser == 0 || isNaN(inputByUser)) {
                alert('Please enter a valid positive number!');
                return;
            };


            // initial loop
            var i = 2;
            while (i <= inputByUser) {
                show.innerHTML += `<h4 style="font-size:1.4rem;">${i}</h4>`;
                i += 2;
            }
        });

