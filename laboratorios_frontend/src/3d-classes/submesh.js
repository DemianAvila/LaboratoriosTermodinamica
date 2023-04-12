export default class Submesh{
    constructor(object){
        this.name = object.name
        this.mesh = object.mesh
        this.texture = object.texture
        this.animation = object.animation
        this.userControlled = object.userControlled
        this.isClickable = object.isClickable
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
    }

    getAnimation(){
        return this.animation
    }

    setAnimation(animation){
        this.animation = animation
    }

    setAnimationTime(time){
        this.animation.time = time
    }

    isUserControlled(){
        return this.isUserControlled
    }

    setControlUser(userControlled){
        this.userControlled = userControlled
    }

    isClickable(){
        return this.isClickable
    }

    changeIfClickable(isClickable){
        this.isClickable = isClickable
    }

    changeColor(color){
        this.mesh.material.color.set(color);
    }
}