import { create } from 'zustand'

import projectsJSON from "../../resources/projects.json"

const useProjectStore = create((set, get) => ({

    projects: projectsJSON,
    getProjects: () => [...get().projects],
}))

export default useProjectStore;