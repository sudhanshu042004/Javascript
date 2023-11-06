export function CreateProject () {
    const projects = [];
    function pushProject (projectName) {
        projects.push(projectName);
    }
    return {
        projects,
        pushProject,
    };
};
