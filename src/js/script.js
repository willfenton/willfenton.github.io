var vm = new Vue({
    el: "#vue-app",
    data: function () {
        return {
            projects_url: "data/projects.json",
            projects: []
        }
    },
    created() {
        fetch(this.projects_url)
            .then(response => response.json())
            .then(json => {
                this.projects = json.projects;
            });
    }
})