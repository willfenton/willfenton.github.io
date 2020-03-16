var vm = new Vue({
    el: "#vue-app",
    data: function () {
        return {
            projects_url: "data/projects.json",
            projects: []
        }
    },
    created() {
        this.fetchProjects();
    },
    methods: {
        fetchProjects: function() {
            fetch(this.projects_url)
                .then(response => response.json())
                .then(json => {
                    this.projects = json.projects;
                });
        }
    }
})