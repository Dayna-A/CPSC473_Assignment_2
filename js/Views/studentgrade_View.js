test=(function(){

    function GradeView(grades){
        var ul_node=document.getElementById('gradetable');
        this.root=ul_node;
        this.content=matches;

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
