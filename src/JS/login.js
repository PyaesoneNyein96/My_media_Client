
import axios from 'axios';
import { mapGetters } from 'vuex';
export default {
    name: 'login-index',

    data() {
        return {
            userData: {
                email: '',
                password: '',
            }
        }
    },

    computed: {
        ...mapGetters(['auth/getUserToken', 'auth/getUserData']),

        token() {
            return this['auth/getUserToken']
        },
        userDataFromStore() {
            return this['auth/getUserData']
        }

    },


    methods: {
        login() {
            axios.post('http://localhost:8000/api/user/login', this.userData)
                .then(res => {


                    if (res.data.token !== null) {
                        this.$store.dispatch('auth/setUserInfo', [res.data.token, res.data]),
                            this.$toast.success(`Welcome dude, u r successfully login`);
                        this.$router.push({ name: 'home' })
                    } else {
                        this.$toast.error(`Sorry, Something wrong`)
                    }
                })
                .catch(err => console.log(err))

        },

        showToken() {
            console.log(this.userDataFromStore);
            console.log(this.token);
        }



    }


}
