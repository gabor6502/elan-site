import { create } from 'zustand'

import json from "../../resources/projects.json"

const useStore = create((set, get) => ({

    projects: json,
    getProjects: () => [...get().projects]

}))

export default useStore;