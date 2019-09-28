<template>
    <div>
        <label for='p1'>p1</label>
        <input v-model='p1' type='text' id='p1'>
        <label for='p2'>p2</label>
        <input v-model='p2' type='text' id='p2'>
        <button @click='play'>play!</button>
        <div class='result'>{{result}}</div>
    </div>
</template>

<script>
    import * as AxiosService from '../services/AxiosService'

    export default {
        name: "Rps",
        data() {
            return {
                p1: '',
                p2: '',
                result: ''
            }
        },
        methods: {
            async play() {
                const postData = {p1: this.p1, p2: this.p2}
                const returnVal = await AxiosService.post('rps', postData)
                this.result = returnVal.result
            }
        }
    }
</script>

<style scoped>

</style>