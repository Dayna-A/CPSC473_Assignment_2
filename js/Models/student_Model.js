test = (function() {
    var student_list = new Array();

	function Student(fn, ln, grdArr) {
		this.first_name = fn;
        this.last_name = ln;
        this.grades= grdArr;
	}


	Student.prototype.getName = function() {
		return this.first_name + " " + this.last_name;
    }
    Student.prototype.getLn = function() {
		return this.last_name;
    }
    Student.prototype.getGrades=function(){
        return this.grades;
    }
    Student.prototype.getAll=function(){
        return student_list;
    }
	// return the list of Student Objects with the correct last name
	Student.prototype.getMatches = function(ln) {
        console.log(ln);
        var match_List=new Array();
        console.log(match_List);
        for(let s of student_list){
            if(s.last_name==ln){
                console.log("we match");
                var match=s;
                match_List.push(match);
            }
        }
		return match_List;
	}

    //create test data
    student_list.push(new Student('Amy','Gonzalez',[['BIOL101','A'],['CPSC121','A'],['MATH338','C'],['MATH270A','B']]));
    student_list.push(new Student('Brett','Smith',[['GEOL202','B'],['CPSC120','B'],['MATH250','C'],['ENGL101','A']]));
    student_list.push(new Student('Gio','Panayotaros',[['PSYC120','B'],['PHYS101','A'],['MUSC134','C'],['MATH250','B']]));
    student_list.push(new Student('Maria','Lazaro',[['KINS161','A'],['BIO101','B'],['MATH146A','B'],['HIST112','B']]));
    student_list.push(new Student('Lynn','Lazaro',[['ENGL146','A'],['HIST212','B'],['POLS120','A']]));
    student_list.push(new Student('Jath','Lazaro',[['HORT240','A'],['LITR110','B'],['MATH150','C'],['ENGL201','A']]));
    student_list.push(new Student('Gio','Gonzalez',[['COMM101','C'],['EEGE135','B'],['MATH250A','B']]));
    student_list.push(new Student('Leah','Smith',[['GEOL202','A'],['CPSC120','B'],['MATH250','A'],['CPSC240','A']]));
    student_list.push(new Student('Jon','Smith',[['HORT120','B'],['EGME140','C'],['FREN110','A'],['CPSC121','A']]));
    student_list.push(new Student('Anna','Panayotaros',[['COMM118','C'],['PHIL120','A'],['MUSC134','B'],['MATH140','B']]));

    if (window.testApp == undefined) {
		window.testApp = {};
	}

	if (window.testApp.model == undefined) {
		window.testApp.model = {};
	}

	window.testApp.model.Student = Student;

	return window.testApp;
})();
