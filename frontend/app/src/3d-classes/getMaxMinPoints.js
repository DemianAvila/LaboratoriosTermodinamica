export function getMaxMinPoints(boxes){
    let points = {
        minX: boxes[0].min.x,
        minY: boxes[0].min.y,
        minZ: boxes[0].min.z,
        maxX: boxes[0].max.x,
        maxY: boxes[0].max.y,
        maxZ: boxes[0].max.z,
    }
    for (let i=0; i<boxes.length; i++){
        points.minX = points.minX<boxes[i].min.x ? points.minX : boxes[i].min.x;
        points.minY = points.minY<boxes[i].min.y ? points.minY : boxes[i].min.y;
        points.minZ = points.minZ<boxes[i].min.z ? points.minZ : boxes[i].min.z;
        points.maxX = points.maxX>boxes[i].max.x ? points.maxX : boxes[i].max.x;
        points.maxY = points.maxY>boxes[i].max.y ? points.maxY : boxes[i].max.y;
        points.maxZ = points.maxZ>boxes[i].max.z ? points.maxZ : boxes[i].max.z;
    }

    return [
        points.minX,
        points.minY,
        points.minZ,
        points.maxX,
        points.maxY,
        points.maxZ 
    ]
}

export function getVectorCorners(threeInstance, corners){
    return [
        new threeInstance.Vector3(corners[0], corners[1], corners[2]),
        new threeInstance.Vector3(corners[0], corners[1], corners[5]),
        new threeInstance.Vector3(corners[0], corners[4], corners[2]),
        new threeInstance.Vector3(corners[0], corners[4], corners[5]),
        new threeInstance.Vector3(corners[3], corners[1], corners[2]),
        new threeInstance.Vector3(corners[3], corners[1], corners[5]),
        new threeInstance.Vector3(corners[3], corners[4], corners[2]),
        new threeInstance.Vector3(corners[3], corners[4], corners[5])
    ];
}