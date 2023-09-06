import Submesh from "@/3d-classes/submesh.js";
import GeneralMesh from "@/3d-classes/generalMesh.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export default function loadGLB(args) {
  var generalMesh = new GeneralMesh([], {
    ThreeInstance: args.ThreeInstance,
    height: args.height,
    width: args.width,
    offsetX: args.offsetX,
    offsetY: args.offsetY,
    camera: args.camera,
    scene: args.scene,
    metadata: args.metadata,
    canvas: args.canvas,
  });
  //ADD TEXTURES AND ANIMATIONS TO EACH OBJECT
  const loader = new GLTFLoader();
  loader.load(args.model, (gltf) => {
    gltf.scene.traverse((object) => {
      object.frustumCulled = false;
      if (args.metadata.scene_meshes.includes(object.name)) {
        let submesh = new Submesh({
          name: object.name,
          mesh: object,
          /*texture: new THREE.MeshPhysicalMaterial(
                  textures[metadata.textures[object.name]]
                ),*/
          material: new args.ThreeInstance.MeshPhysicalMaterial(
            args.textures[args.metadata.textures[object.name]]
          ),
          userControlled: args.metadata.userControlledObjects.includes(
            object.name
          )
            ? true
            : false,
          timeControlled: args.metadata.timeControlledObjects.includes(
            object.name
          )
            ? true
            : false,
          ThreeInstance: args.ThreeInstance,
          scene: args.scene,
          renderer: args.renderer,
          camera: args.camera,
          boxTest: false,
          variations: args.variations,
        });
        generalMesh.addMesh(submesh);

        //submesh.setTexture(textures[ metadata.textures[object.name]])
        if (
          args.ThreeInstance.AnimationClip.findByName(
            gltf.animations,
            object.name
          ) != null
        ) {
          generalMesh
            .getMeshByName(object.name)
            .setClipAction(
              args.ThreeInstance.AnimationClip.findByName(
                gltf.animations,
                object.name
              ),
              args.mixer,
              args.ThreeInstance.LoopOnce,
              1
            );
        }
      }
    });
    //--------INITIALIZE ANIMATION
    generalMesh.initializeAnimationSystem();

    //------------PAINT THE LOADED GLB
    gltf.scene.position.set(0, 0, 0);
    args.scene.add(gltf.scene);

    window.addEventListener(
      "mousemove",
      (event) => {
        generalMesh.onMouseMove(event);
      },
      false
    );

    window.addEventListener(
      "mousedown",
      (event) => {
        generalMesh.onMouseDown(event);
      },
      false
    );
  });

  function animate() {
    requestAnimationFrame(animate);
    args.mixer.update(new args.ThreeInstance.Clock().getDelta());
    args.renderer.render(args.scene, args.camera);
    args.controls.update();
    //console.log(args.camera.position.x, args.camera.position.y, args.camera.position.z)
    //const target = new args.ThreeInstance.Vector3();
    //args.camera.getWorldDirection(target);
    //console.log(target)
  }
  animate();
}
