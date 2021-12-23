<template>
    <div>
        <h1>Dashboard</h1>
    </div>

    <button class="btn btn-success mt-3" @click="getSessionKey()">Get Session Key</button>
    <br/>

    <p class="mt-4">Session: {{ sessionKey }}</p>

    <p class="mt-4">UUID: {{ uuid }}</p>

    <p class="mt-4">Timestamp: {{ timestamp }}</p>

</template>

<script>
import { util } from '../mixins/util'

export default {
    mixins: [util],
    emits: ['events'],
    data() {
        return {
            sessionKey: '',
            uuid: '',
            timestamp: ''
        }
    },
    mounted() {
        this.getSessionKey()
    },
    methods: {
        getSessionKey: function() {
            this.sessionKey = ''
            this.uuid = ''
            this.timestamp = ''

            this.axios({
                method: 'get',
                url: this.endpoint + '/api/session-key'
            })
            .then(response => {
                console.log(response)
                this.sessionKey = response.data.sessionKey
                this.uuid = response.data.uuid
                this.timestamp = response.data.timestamp
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                
            })
        },
    }
}
</script>
