<template>
    <div>
        <div>
            <p>
                {{ object.question }}
            </p>
        </div>
    <div
      class="overflow-x-scroll overflow-y-scroll"
      v-html="object.media"></div>
    <div v-for="(option, index) in object.options" :key="index">
        <input v-if="returned(option)" checked type="radio" :id="option.answer" name="question" :value="option.answer" v-model="answer" @change="getValue">
        <input v-else type="radio" :id="option.answer" name="question" :value="option.answer" v-model="answer" @change="getValue">
        <label :for="option.answer">{{ option.option }}) {{ option.answer }}</label>
    </div>
    </div>
</template>
<script>
export default {
    name: "ChoiceQuestion",
    props: ["object"],
    data: function(){
        return {
            answer: ""
        }
    },
    methods: {
        getValue: function(){
            this.$emit("update:answer", this.answer);
        },
        returned: function(option){
            return option.answer === this.object.answer
        }
    }    
}
</script>
