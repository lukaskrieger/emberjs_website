import Route from '@ember/routing/route';

export default Route.extend({
    init: function () {
        this._super();
        this.generateController('about');
        this.generateController('science');
        this.generateController('contact');
    },
    renderTemplate: function () {
        this.render()

        //getting the generated controller
        var aboutController = this.controllerFor('about');
        var scienceController = this.controllerFor('science');
        var contactController = this.controllerFor('contact');


        this.render('about', {           // the template to render
            into: 'welcome',       // the template to render into
            outlet: 'about',              // the name of the outlet in that template
            controller: aboutController        // the controller to use for the template
        });
        this.render('science', {
            into: 'welcome',
            outlet: 'science',
            controller: scienceController
        });
        this.render('contact', {
            into: 'welcome',
            outlet: 'contact',
            controller: contactController
        });
    }
});
