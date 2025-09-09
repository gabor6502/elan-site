import { create } from 'zustand'

import fractalPicsJSON from "../../resources/fracpics.json"

const useFractalStore = create((set, get) => ({

    fractalGeneratorPics: fractalPicsJSON,
    getFractalGallery: () => [...get().fractalGeneratorPics]

}))

export default useFractalStore;