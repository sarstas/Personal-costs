export default {
    install(Vue) {
        if (this.installed) {
            return
        }

        this.installed = true
        this.caller = null

        Vue.prototype.$context = {
            EventBus: new Vue(),

            show({ event, items }) {
                const caller = event.target
                if (caller !== this.caller) {
                    this.caller = caller
                    this.EventBus.$emit('shown',{ caller, items })
                } else {
                    this.caller = null
                    this.close()
                }
            },

            close() {
                this.EventBus.$emit('close')
            }
        }
    },

}
