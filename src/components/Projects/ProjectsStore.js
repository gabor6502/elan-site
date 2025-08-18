import { create } from 'zustand'

import projectsJSON from "../../resources/projects.json"
import fractalPicsJSON from "../../resources/fracpics.json"

const useStore = create((set, get) => ({

    projects: projectsJSON,
    getProjects: () => [...get().projects],

    fractalGeneratorPics: fractalPicsJSON,
    getFractalGallery: () => [...get().fractalGeneratorPics]

}))

export default useStore;