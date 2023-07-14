export default class Submesh {
  constructor(object) {
    this.name = object.name;
    this.mesh = object.mesh;
    this.texture = object.texture;
    this.animation = object.animation;
    this.userControlled = object.userControlled;
    this.timeControlled = object.timeControlled;
    this.clipAction = object.clipAction;
    //this.mesh.material = object.texture;
    this.onHover = false;
    this.originalColor = object.material.color;
    this.selected = false;
    this.dependants = [];
    this.isDependentOf = null;
    this.animationType = null;
    this.interactions = [];
    this.timeRelations = [];
    this.material = object.material;
    this.related_meshes = [];
    this.ThreeInstance = object.ThreeInstance;
    this.scene = object.scene
    this.renderer =  object.renderer
    this.camera = object.camera
    this.boxTest= object.boxTest
    this.setMaterial(this.mesh, this.material);
    this.variations = object.variations
    this.applyVariations()
    //this.convertToMesh(this.mesh, this.material);
  }

  /*convertToMesh(mesh, material){

  }*/

  applyVariations(){
    let variations = this.variations
    //VARIATE THE TEXTURES
      //FOR EACH TEXTURE VARIATION, CHANGE THE CURRENT TEXTURE 

      //IF THIS SUBMESH IS INSIDE THE VARIATIONS, APPLY
      if(Object.keys(variations.texture_variations).includes(this.name)){
        for (let variation_name of Object.keys(variations.texture_variations[this.name])){
          //CHANGE THE PROPERTY
          //this.textures[texture_name][variation_name] = texture_variations[texture_name][variation_name][currentVariation]
          this.material[variation_name] = variations.texture_variations[this.name][variation_name][variations.currentVariation]
          console.log(variations.texture_variations[this.name][variation_name][variations.currentVariation])
        }
        this.setMaterial(this.mesh, this.material);
        console.log(this.material)
      }
  }

  setMaterial(mesh, material){
    mesh.material = material
    this.originalColor = material.color
    /*CHECK IF OBJECT IS TYPE GROUP, IN WHICH CASE, 
    ASSIGN THE CHILDREN ATHE OBJECT AS WELL*/
    for (let i=0; i<mesh.children.length; i++){
      if(mesh.children[i].type!="Bone"){
        this.setMaterial(mesh.children[i], material)
        this.related_meshes.push(mesh.children[i])
      }
    }
    //SET BOX
    // Assuming you have a scene, camera, and renderer set up
    if(this.boxTest){
      // Create a bounding box geometry
      const boundingBox = new this.ThreeInstance.Box3().setFromObject(this.mesh);
      const boxSize = boundingBox.getSize(new this.ThreeInstance.Vector3());
      const boxGeometry = new this.ThreeInstance.BoxGeometry(boxSize.x, boxSize.y, boxSize.z);

      // Create a material for the bounding box
      const boxMaterial = new this.ThreeInstance.MeshBasicMaterial({ color: 0xff0000, wireframe: true });

      // Create a mesh with the box geometry and material
      const boundingBoxMesh = new this.ThreeInstance.Mesh(boxGeometry, boxMaterial);

      // Center the bounding box mesh around the object
      boundingBoxMesh.position.copy(boundingBox.getCenter(new this.ThreeInstance.Vector3()));
      // Add the bounding box mesh to the scene
      this.scene.add(boundingBoxMesh);

      // Render the scene
      this.renderer.render(this.scene, this.camera);
    }
  }


  getMaterial(){
    return this.mesh.material
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getMesh() {
    return this.mesh;
  }

  setMesh(mesh) {
    this.mesh = mesh;
  }

  /*getTexture() {
    return this.texture;
  }*/

  /*setTexture(texture) {
    this.texture = texture;
    this.mesh.material = this.texture;
  }*/

  getAnimation() {
    return this.animation;
  }

  /*setAnimation(animation, mixer, loop, timeScale){
        this.animation = animation
        this.clipAction = mixer.clipAction(animation)
        this.clipAction.loop = loop
        this.clipAction.timeScale = timeScale;
    }*/

  getClipAction() {
    return this.clipAction;
  }

  setClipAction(animation, mixer, loop, timeScale) {
    this.clipAction = mixer.clipAction(animation);
    this.clipAction.loop = loop;
    this.clipAction.timeScale = timeScale;
    //this.clipAction.play()
  }

  setAnimationTime(time) {
    this.getClipAction().time = time;
  }

  isUserControlled() {
    return this.userControlled;
  }

  setControlUser(userControlled) {
    this.userControlled = userControlled;
  }

  changeColor(color) {
    this.mesh.material.color.set(color);
  }

  isOnHover() {
    return this.onHover;
  }

  changeHover(isHover) {
    this.onHover = isHover;
  }

  isSelected() {
    return this.selected;
  }

  select(selection) {
    this.selected = selection;
  }

  getDependants() {
    return this.dependants;
  }

  addDependant(dep) {
    this.dependants.push(dep);
  }

  getDependantByName(name) {
    for (let i = 0; i < this.getDependants().length; i++) {
      if (name === this.getDependants()[i].getByName()) {
        return this.getDependants()[i];
      }
    }
  }

  getIsDepentFrom() {
    return this.isDependentOf;
  }

  setIsDepentFrom(whoIsDepent) {
    this.isDependentOf = whoIsDepent;
  }

  getInteractions() {
    return this.interactions;
  }

  addInteraction(interaction) {
    this.interactions.push(interaction);
  }

  deleteInteraction(interaction) {
    for (let i = 0; i < this.getInteractions().length; i++) {
      if (interaction === this.getInteractions()[i]) {
        return this.interactions.splice(i, 1);
      }
    }
    return null;
  }

  existsInteraction(interaction) {
    return this.getInteractions().includes(interaction);
  }

  getTimeRelations() {
    return this.timeRelations;
  }

  addTimeRelation(controlTime) {
    this.timeRelations.push(controlTime);
  }
}
