var vm = new Vue({
    el: "#vue-app",
    data: function () {
        return {
            projects_url: window.location + "/data/projects.json",
            projects: []
        }
    },
    created() {
        this.fetchProjects();
    },
    methods: {
        fetchProjects: function() {
            console.log(this.projects_url);
            fetch(this.projects_url)
                .then(response => response.json())
                .then(json => {
                    console.log(json);
                    this.projects = json["projects"];
                });
        }
    }
})