/*Class: CPSC 473
  Author: Dayna Anderson
  Assignment: 2
*/
var makeStudent = (function () {

    function studentLookupControl() {
        //find submit button for last name search and save it in a variable.
        var searchform = document.getElementById("submitSearchLn");
        console.log(searchform);

        //adds onClick event listener to the search button
        searchform.addEventListener('click', function (event) {
            console.log("I am inside onClickListener");
            var ln = document.getElementById('lnSearch').value;
            console.log(ln);
            console.log(test);

            var st_ob = new testApp.model.Student();
            var matches = st_ob.getMatches(ln);
            console.log(matches);

            //create the view which is broken whyyy
            var list_view = new testApp.ui.ListView(matches);
            console.log(list_view);
            addClickAbility();
        });

        //turn the $ into a function for finding a selector in a document.
        //learned how to do this here : https://toddmotto.com/attaching-event-handlers-to-dynamically-created-javascript-elements/
        var $ = function (selector) {
            return document.querySelector(selector);
        }

        function addClickAbility() {
            //search through the student name list and get the dynamically generated li from it.
            var studentli = $('#indexNameList').getElementsByTagName('li');

            //set an onclick listener for all of them that calls the grade lookup function
            for (let s of studentli) {
                var student = s;
                student.onclick = gradeLookup;
            }
        }


        //function to find the grade information for the student that was clicked and display it in the grade table.
        function gradeLookup() {
            var s_name = this.innerHTML;
            console.log(s_name);
            //set label on Grade List to the student's name
            var title = document.getElementById("studentName");
            title.innerHTML = s_name;

            //retrieve the list of all students and find the student clicks on
            var st_ob = new testApp.model.Student();
            var allStudents = st_ob.getAll();
            for (let s of allStudents) {
                if (s.getName() == s_name) {
                    //retrieve the students grades
                    var thisGrades = s.getGrades();
                }
            }
            //send grades to table view.
            var grade_view = new testApp.ui.GradeView(thisGrades);

        }
    }

    window.addEventListener('load', function (event) {
        studentLookupControl();
    });


    return makeStudent;
})()
