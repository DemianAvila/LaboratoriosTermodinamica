export default class GeneralMesh{
    constructor(meshes){
        this.meshes = meshes
    }

    getAllMeshes(){
        return this.meshes
    }

    removeMeshByName(meshName){
        for (let i; i<this.getAllMeshes().length; i++){
            if (meshName === this.meshes[i].getName()){
                let remove = this.meshes.splice(i, 1)
                return remove
            }
        }
        return null
    }

    addMesh(mesh){
        this.meshes.push(mesh)
    }

    getMeshByName(name){        
        for (let i=0; i<this.meshes.length; i++){
            if (name === this.meshes[i].getName(name)){
                return this.meshes[i]
            }
        }
        return null
    }
}