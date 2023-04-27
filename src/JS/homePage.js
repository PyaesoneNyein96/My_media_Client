


import axios from "axios";
import { mapGetters } from "vuex";
import swiperSection from '../components/tools/swiperTesting.vue'

export default {
    name: 'home-index',

    components: {
        swiperSection
    },

    data() {
        return {
            allPosts: [],
            AllCategories: [],
            CategoryStatus: '',
            searchKey: '',
        }
    },



    // Computed 

    computed: {
        ...mapGetters({
            userToken: 'auth/getUserToken',
            userData: 'auth/getUserData'
        }),
    },




    //Methods 

    methods: {


        // authCheck() {
        //     let authCheck = localStorage.getItem('auth');
        //     console.log(authCheck);
        // },


        getAllPosts() {
            axios.get('http://localhost:8000/api/posts')
                .then(res => {

                    for (let i of res.data.posts) {
                        i.image = `http://localhost:8000/storage/Post/` + i.image;
                    }
                    this.allPosts = res.data.posts;

                })
                .catch(err => console.log(err))
        },

        selectByCategory(i) {
            let cat = { id: i };
            axios.post('http://localhost:8000/api/categories/select', cat)
                .then(res => {
                    console.log('trigger');
                    for (let i of res.data.postsSelect) {
                        i.image = `http://localhost:8000/storage/Post/` + i.image;
                    }
                    this.allPosts = res.data.postsSelect;

                })
                .catch(err => console.log(err))
        },


        getAllCategories() {
            axios.get('http://localhost:8000/api/categories')
                .then(res => {
                    this.AllCategories = res.data.categories;
                    this.CategoryStatus = res.data.status;
                    this.getAllPosts();
                    // console.log(this.AllCategories);
                }).catch(err => console.log(err))
        },

        getFewCategories() {
            axios.get('http://localhost:8000/api/fewCategories')
                .then(res => {
                    this.AllCategories = res.data.fewCategories;
                    this.CategoryStatus = res.data.status;
                })
                .catch(err => console.log(err))
        },

        search() {
            let value = {
                key: this.searchKey
            }
            axios.post('http://localhost:8000/api/search', value)
                .then(res => {
                    for (let i of res.data.result) {
                        i.image = `http://localhost:8000/storage/Post/` + i.image;
                    }
                    this.allPosts = res.data.result
                })
                .catch(err => {
                    console.log(err);
                })
        },

        detail(id) {
            this.$router.push({ name: 'detail', params: { id: id } })
        },

        clear() {
            this.search();
            this.searchKey = '';
        }


    },



    //Mounted

    mounted() {
        this.getAllPosts();
        this.getFewCategories();
        // this.authCheck();
        // console.log(this.userToken);
    },



}

