import { create } from 'zustand'
const fs = require("fs");

const useStore = create((set, get) => ({

    projects: JSON.parse(fs.readFileSync("../../resources/projects.json")),
    
    getProject: (i) => get(projects[i]) // i out of bounds will be undefined

}))

export default useStore;