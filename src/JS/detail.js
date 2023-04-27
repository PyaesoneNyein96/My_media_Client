
import axios from 'axios';
import { mapGetters } from 'vuex';
// import { dispatch } from '@/util';
export default {
    name: 'post-detail',
    data() {
        return {
            detail: [],
            viewCount: ''
        }
    },

    computed: {
        ...mapGetters({
            getUserData: 'auth/getUserData'
        })
    },

    methods: {
        back() {
            this.$router.go(-1);
        }
    },
    mounted() {

        let varId = this.$route.params;
        axios.post('http://localhost:8000/api/posts/detail', varId)
            .then(res => {
                this.detail = res.data.postDetail
                this.detail.image = `http://localhost:8000/storage/Post/` + res.data.postDetail.image;
            }).catch(err => console.log(err));



        // ACTION LOG 

        let colletData = this.getUserData
        colletData.post_id = varId.id;

        axios.post('http://localhost:8000/api/posts/actionLog', this.getUserData)
            .then(res => {
                console.log(res.data.viewCount);
                this.viewCount = res.data.viewCount
            })
            .catch(err => console.log(err));






    }
}