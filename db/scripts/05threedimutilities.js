/*db = db.getSiblingDB("laboratorio_info");
db.threed-utils.insertMany([
    {
        type: "shader",
        name: "auraShader",
        content: `{
            uniforms: {
              "tDiffuse": { value: null },
              "resolution": { value: new THREE.Vector2() },
              "intensity": { value: 0.1 },
              "color": { value: new THREE.Color(0xffffff) },
            },
            vertexShader: \`
              varying vec2 vUv;
              void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
            \`,
            fragmentShader: \`
              uniform sampler2D tDiffuse;
              uniform vec2 resolution;
              uniform float intensity;
              uniform vec3 color;
              varying vec2 vUv;
              void main() {
                vec4 texel = texture2D(tDiffuse, vUv);
                vec2 uv = gl_FragCoord.xy / resolution.xy;
                float d = length(uv - 0.5);
                float aura = smoothstep(0.5 - intensity, 0.5 + intensity, d);
                gl_FragColor = mix(texel, vec4(color, texel.a), aura);
              }
            \`
        }`
    }
])*/