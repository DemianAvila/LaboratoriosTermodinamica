export default class Submesh{
    constructor(object){

        this.name = object.name
        this.mesh = object.mesh
        this.texture = object.texture
        this.animation = object.animation
        this.userControlled = object.userControlled
        this.timeControlled= object.timeControlled
        this.clipAction = object.clipAction
        this.mesh.material = object.texture
        this.onHover = false
        this.originalColor = object.texture.color
        this.selected = false
        this.dependants = []
        this.isDependentOf = null 
        this.animationType = null
        this.interactions=[]
        this.timeRelations=[]
    }

    getName(){
        return this.name
    }

    setName(name){
        this.name = name
    }

    getMesh(){
        return this.mesh
    }

    setMesh(mesh){
        this.mesh = mesh
    }

    getTexture(){
        return this.texture
    }

    setTexture(texture){
        this.texture = texture
        this.mesh.material = this.texture
    }

    getAnimation(){
        return this.animation
    }

    /*setAnimation(animation, mixer, loop, timeScale){
        this.animation = animation
        this.clipAction = mixer.clipAction(animation)
        this.clipAction.loop = loop
        this.clipAction.timeScale = timeScale;
    }*/

    getClipAction(){
        return this.clipAction
    }

    setClipAction(animation, mixer, loop, timeScale){
        this.clipAction = mixer.clipAction(animation)
        this.clipAction.loop = loop
        this.clipAction.timeScale = timeScale;
        //this.clipAction.play()
    }

    setAnimationTime(time){
        this.getClipAction().time = time
    }

    isUserControlled(){
        return this.userControlled
    }

    setControlUser(userControlled){
        this.userControlled = userControlled
    }

    changeColor(color){
        this.mesh.material.color.set(color);
    }

    isOnHover(){
        return this.onHover
    }

    changeHover(isHover){
        this.onHover = isHover
    }

    isSelected(){
        return this.selected
    }

    select(selection){
        this.selected = selection
    }

    getDependants(){
        return this.dependants
    }

    addDependant(dep){
        this.dependants.push(dep)
    }

    getDependantByName(name){
        for(let i=0; i<this.getDependants().length; i++){
            if (name === this.getDependants()[i].getByName()){
                return this.getDependants()[i]
            }
        }
    }

    getIsDepentFrom(){
        return this.isDependentOf
    }

    setIsDepentFrom(whoIsDepent){
        this.isDependentOf = whoIsDepent
    }

    getInteractions(){
        return this.interactions
    }

    addInteraction(interaction){
        this.interactions.push(interaction)
    }

    deleteInteraction(interaction){
        for(let i=0; i<this.getInteractions().length; i++){
            if(interaction===this.getInteractions()[i]){
                return this.interactions.splice(i,1)
            }
        }
        return null
    }

    existsInteraction(interaction){
        return this.getInteractions().includes(interaction)
    }

    getTimeRelations(){
        return this.timeRelations
    }


    addTimeRelation(controlTime){
        this.timeRelations.push(controlTime)
    }

}