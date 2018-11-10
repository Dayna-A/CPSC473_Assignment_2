var makeStudent=(function(){

    function studentLookupControl(){
        console.log("I'm adding an event handler for the last name search")
        var searchform=document.getElementById("submitSearchLn");
        console.log(searchform);
        //adds onClick event listener to the search button
        searchform.addEventListener('click', function(event){
            console.log("I am inside onClickListener");
            var ln = document.getElementById('lnSearch').value;
            console.log(ln);
            console.log(test);

            var st_ob= new test.model.Student();
            var matches=st_ob.getMatches(ln);
            console.log(matches);
            //create the view which is broken whyyy
            var list_view = new test.View.ListView(matches);
            console.log(list_view);
        });

        var $=function (selector){
            return document.querySelector(selector);
        }

        var studentli=$('#indexNameList').getElementsByTagName('li');

        for(let s of studentli){
            var student = s;
            student.onclick=gradeLookup;
        }

        function gradeLookup(){
            var s_name=this.innerHTML;
            console.log(s_name);
            //set label on Grade List to the student's name
            var title=getElementById("studentName");
            title.innerHTML=s_name;

            //find the student's grades
            var st_ob= new test.model.Student();
            var allStudents=st_ob.getAll();
            for(let s in allStudents){
                if(s.getName()==s_name){
                    var thisGrades=s.getGrades();
                }
            }
            var grade_view = new test.View.gradeView(thisGrades);

        }
    }

	window.addEventListener('load', function(event) {
        studentLookupControl();
	});


return makeStudent;
})()
