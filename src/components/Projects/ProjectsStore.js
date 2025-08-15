import { create } from 'zustand'

import json from "../../resources/projects.json"

class ProjectOutOfBoundsError extends Error
{
    constructor(index)
    {
        super(`Index ${index} out of bounds in projects file`)
    }
}

const useStore = create((set, get) => ({

    projects: json,
    getProject: (i) => 
        {
            if (i >= get().projects.length || i < 0)
            {
                throw new ProjectOutOfBoundsError(i);
            }

            return get().projects[i]
        }

}))

export default useStore;