import { Modal } from 'bootstrap'
import { modals } from '../mixins/modals'

export const util = {
    data() {
        return {
            endpoint: 'https://api.guarnieri.ca',
            defaultErrorMsg: 'Error',
            loading: false,
            alertMessage: '',
            modals,
            monthNames: [
                {id: 1, value: 'January'}, {id: 2, value: 'February'}, 
                {id: 3, value: 'March'}, {id: 4, value: 'April'}, 
                {id: 5, value: 'May'}, {id: 6, value: 'June'}, 
                {id: 7, value: 'July'}, {id: 8, value: 'August'}, 
                {id: 9, value: 'September'}, {id: 10, value: 'October'}, 
                {id: 11, value: 'November'}, {id: 12, value: 'December'}
            ]
        }
    },
    methods: {
        getElementById(records, id) {
            return records.find(function(element) { //(element, index)
                return element.id === id
            })
        },
        checkApiResponse: function(response) {
            if(response.status == 200 && response.data.status == 'success') {
                return true
            }

            return false
        },
        showModal(modalId) {
            var modal = new Modal(document.getElementById(modalId), {})
            modal.show()

            //to close the modal, should be used the same instance
            this.modals.state.modals[modalId] = modal
        },
        hideModal(modalId) {
            this.modals.state.modals[modalId].hide()
        },
        showPreLoader() {
            this.loading = true
            console.log(document.getElementById('preloader'))
            document.getElementById('preloader').style.display = ''
        },
        hidePreLoader() {
            this.loading = false
            document.getElementById('preloader').style.display = 'none'
        },
        showAlert: function(type) {
            if(type == 'success') {
                document.getElementById('alert-message-success').innerHTML = this.alertMessage
                document.getElementById('alert-success').style.display = ''
                setTimeout(() => {
                    this.hideAlert('alert-success')
                }, 3000)
            } else if(type == 'warning') {
                console.log('warning')
            } else {
                document.getElementById('alert-message-error').innerHTML = this.alertMessage
                document.getElementById('alert-error').style.display = ''
                setTimeout(() => {
                    this.hideAlert('alert-error')
                }, 4000)
            }
        },
        hideAlert: function(id) {
            document.getElementById(id).style.display = 'none'
        }
    }
}