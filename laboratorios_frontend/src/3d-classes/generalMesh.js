export default class GeneralMesh{
    constructor(meshes, object){
        this.meshes = meshes
        this.ThreeInstance = object.ThreeInstance
        this.height = object.height
        this.width = object.width
        this.offsetX = object.offsetX
        this.offsetY = object.offsetY
        this.camera = object.camera
        this.scene = object.scene
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

    onMouseMove(event){
        const pointer = new this.ThreeInstance.Vector2()
        const raycaster = new this.ThreeInstance.Raycaster()
        pointer.x = (event.clientX - this.offsetX) / this.width * 2 - 1;
        pointer.y = -(event.clientY - this.offsetY) / this.height * 2 + 1;
        raycaster.setFromCamera(pointer, this.camera);
        const intersects = raycaster.intersectObjects(this.scene.children);
        console.log(intersects)
    }
}