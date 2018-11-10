/*Class: CPSC 473
  Author: Dayna Anderson
  Assignment: 2
*/
test=(function(){

    function GradeView(grades){
        //retrieve grade table element and set it as the root.
        var ul_node=document.getElementById('gradetable');
        this.root=ul_node;
        this.content=matches;
        //passes info to handlebar script to list all students with the searched last name
        this.createChildNodeHandlebars=function(){
			var source = document.getElementById('studentGradesTemplate').innerHTML;
			var template = Handlebars.compile(source);
			var context = {'course' : this.content};
			var html_str = template(context);
			this.root.innerHTML = html_str;
        }
        this.createChildNodeHandlebars();
    }

   

	if (window.testApp == undefined) {
		window.testApp = {};
	}

	if (window.testApp.ui == undefined) {
		window.testApp.ui = {};
	}

	window.testApp.ui.GradeView = GradeView;

	return window.testApp;

});
