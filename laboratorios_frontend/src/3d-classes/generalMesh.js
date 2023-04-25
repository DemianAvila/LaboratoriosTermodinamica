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
        this.metadata = object.metadata
        this.animationSystem = this.metadata.animations_info
    }

    getAllMeshes(){
        return this.meshes
    }

    removeMeshByName(meshName){
        for (let i=0; i<this.getAllMeshes().length; i++){
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

    getMeshesIfUserControll(){
        let ret = []
        for (let i=0; i<this.getAllMeshes().length; i++){
            if (this.getAllMeshes()[i].isUserControlled()){
                ret.push(this.getAllMeshes()[i])
            }
        }
        return ret
    }

    getSelectedMeshes(){
        let ret = []
        for (let i=0; i<this.getAllMeshes().length; i++){
            if (this.getAllMeshes()[i].isSelected()){
                ret.push(this.getAllMeshes()[i])
            }
        }
        return ret
    }

    getUnselectedMeshes(){
        let ret = []
        for (let i=0; i<this.getAllMeshes().length; i++){
            if (!this.getAllMeshes()[i].isSelected()){
                ret.push(this.getAllMeshes()[i])
            }
        }
        return ret   
    }

    getParentAnimations(){
        let ret = []
        for (let i=0; i<this.getAllMeshes().length; i++){
            if (!this.getAllMeshes()[i].animationType==="parent"){
                ret.push(this.getAllMeshes()[i])
            }
        }
        return ret   
    }

    getSonAnimations(){
        let ret = []
        for (let i=0; i<this.getAllMeshes().length; i++){
            if (!this.getAllMeshes()[i].animationType==="son"){
                ret.push(this.getAllMeshes()[i])
            }
        }
        return ret   
    }

    searchAnimationInteraction(interaction){
        let ret = []
        for (let i=0; i<this.getAllMeshes().length; i++){
            if(this.getAllMeshes()[i].existsInteraction(interaction)){
                ret.push(this.getAllMeshes()[i])
            }
        }
        return ret   
    }

    checkHoveredElements(intersects){
        let hoveredElements = intersects.map(
            x => x.name
        )
        //CHECK THE STATUS OF ALL ELEMENTS AND CHANGE THE ONES THAT ARE NOT IN HOVER
        for(let i=0; i<this.getAllMeshes().length;i++){
            if(hoveredElements.includes(
                this.getAllMeshes()[i].getName()
            )){
                this.getAllMeshes()[i].changeHover(true)
            }
            else{
                this.getAllMeshes()[i].changeHover(false)
            }
        }
    }

    controlColorOfHovered(intersects){
        //ONLY CHANGE THE COLOR OF THE HOVERED AND USER CONTROLLED ELEMENT
        //RETURN ALL OF THE OTHERS TO NORMAL
        intersects = intersects.map(
            x=> this.getMeshByName(x.name)
        )
        intersects = intersects.filter(
            x=> x!=null && 
            x.isUserControlled() &&
            x.isOnHover()
        )
        let intersectNames = intersects.map(
            x => x.getName()
        )
        for (let i=0; i<this.getMeshesIfUserControll().length; i++){
            if (!this.getMeshesIfUserControll()[i].isSelected()){
                if(intersectNames.includes(this.getMeshesIfUserControll()[i].getName())){
                    this.getMeshesIfUserControll()[i].changeColor(
                        this.metadata.clickableColors.hover
                    )  
                }
                else{
                    this.getMeshesIfUserControll()[i].changeColor(
                        this.getAllMeshes()[i].originalColor
                    )
                }
            }
        }
    }

    getIntsesectObjects(event){
        const pointer = new this.ThreeInstance.Vector2()
        const raycaster = new this.ThreeInstance.Raycaster()
        pointer.x = (event.clientX - this.offsetX) / this.width * 2 - 1;
        pointer.y = -(event.clientY - this.offsetY) / this.height * 2 + 1;
        raycaster.setFromCamera(pointer, this.camera);
        let intersects = raycaster.intersectObjects(this.scene.children);
        //FILTER THE INTERSECTIONS THAT ARE INVISIBLE
        intersects = intersects.map(
            x => x.object
        )
        intersects = intersects.filter(
            x => x.material.name != "invisible"
        )
        return intersects
    }

    onMouseMove(event){
        event 
        let intersects = this.getIntsesectObjects(event)
        if(intersects.length >0){
            this.checkHoveredElements(intersects)
            this.controlColorOfHovered(intersects)
        } 
        this.animationsManage()
    }

    handleSelect(){  
        for(let i=0; i<this.getAllMeshes().length; i++){
            if(this.getAllMeshes()[i].isOnHover() &&
            !this.getAllMeshes()[i].isSelected() &&
            this.getAllMeshes()[i].isUserControlled()){
                this.getAllMeshes()[i].select(true)  
            }
            else if (this.getAllMeshes()[i].isOnHover() &&
            this.getAllMeshes()[i].isSelected() &&
            this.getAllMeshes()[i].isUserControlled()){
                this.getAllMeshes()[i].select(false)   
            }
        }  
    }

    controlColorOfSelected(){
        for(let i=0; i<this.getSelectedMeshes().length; i++){
            this.getSelectedMeshes()[i].changeColor(
                this.metadata.clickableColors.click
            )
        }
    }

    returnToOriginalColor(){
        for(let i=0; i<this.getUnselectedMeshes().length; i++){
            if(this.getUnselectedMeshes()[i].isUserControlled()){
                this.getUnselectedMeshes()[i].changeColor(
                    this.getUnselectedMeshes()[i].originalColor
                )
            }
        }
    }

    interactionMouseY(){

    }    

    onMouseDown(){
        this.handleSelect()
        this.controlColorOfSelected()
        this.returnToOriginalColor() 
    }

    initializeAnimationSystem(){
        //FOR EACH ONE OF THE ANIMATIONS, GET ITS DEPENDANTS AND IF IT DEPENDS
        for(let i=0; i<this.animationSystem.length; i++){
            let depentFrom= this.getMeshByName(this.animationSystem[i].main_animation)
            depentFrom.animationType = "parent"
            //ADD ALL THE INTERACTIONS FROM THE MEETADATA TO THE PARENT 
            for(let k=0; k<this.animationSystem[i].interactions.length; k++){
                depentFrom.addInteraction(this.animationSystem[i].interactions[k])
            }
            for(let j=0; j<this.animationSystem[i].dependant_animations.length; j++){
                let dependant = this.getMeshByName(this.animationSystem[i].dependant_animations[j])
                depentFrom.addDependant(dependant)
                dependant.setIsDepentFrom(depentFrom)
                dependant.animationType = "son"
            }
        }
    }
}