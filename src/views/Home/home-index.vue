<template>
    <div v-if="userToken">
        <!-- <main> -->
        <!-- Whats New Start -->
        <section class="whats-news-area pt-50 pb-20">
            <div class="container">
                <div class="row">

                    <!-- ========== Start SEARCH ========== -->
                    <div class="wrap d-flex justify-content-end"
                        style="position: fixed; top:240px; right:150px; z-index:100">
                        <div class="input-container">
                            <input type="text" name="text" class="input" placeholder="search..." v-model="searchKey"
                                v-on:keyup="search" v-on:keyup.enter="clear">
                            <span class="icon">
                                <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" @click="search">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                                    </g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path opacity="1" d="M14 5H20" stroke="#000" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path opacity="1" d="M14 8H17" stroke="#000" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path
                                            d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2"
                                            stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        </path>
                                        <path opacity="1" d="M22 22L20 20" stroke="#000" stroke-width="3.5"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                    </g>
                                </svg>
                            </span>
                        </div>
                    </div>

                    <!-- ========== End SEARCH ========== -->




                    <div class="col-lg-12">
                        <div class="row d-flex justify-content-between">
                            <div class="col-lg-4 col-md-4">
                                <div class="section-tittle mb-30">
                                    <h3 v-if="CategoryStatus == 'filter'">Trending Posts</h3>
                                    <h3 v-else>What's New</h3>
                                </div>
                            </div>
                            <div class="col-lg-8 col-md-8">
                                <div class="properties__button">
                                    <!--Nav Button  -->
                                    <nav>
                                        <div class="nav nav-tabs d-flex justify-content-start bg-transparent" id="nav-tab"
                                            role="tablist">
                                            <div class="nav-cat">
                                                <a class="nav-item nav-link active text-success fw-bold" id="nav-home-tab"
                                                    v-if="CategoryStatus == 'filter'" data-toggle="tab" role="tab"
                                                    aria-controls="nav-home" aria-selected="true" @click="getAllCategories">
                                                    To All
                                                </a>

                                                <a class="nav-item nav-link active nav-cat text-success fw-bold"
                                                    id="nav-home-tab" v-else data-toggle="tab" role="tab"
                                                    aria-controls="nav-home" aria-selected="true" @click="getFewCategories">
                                                    Most Search
                                                </a>
                                            </div>

                                            <swiperSection class="mt-1" :categories="AllCategories"
                                                @selectByCategory="selectByCategory" />

                                        </div>
                                    </nav>
                                    <!--End Nav Button  -->
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12">
                                <!-- Nav Card -->
                                <div class="tab-content" id="nav-tabContent">
                                    <!-- card one -->
                                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel"
                                        aria-labelledby="nav-home-tab">
                                        <div class="whats-news-caption">

                                            <div class="row">
                                                <div class="col-md-10 mx-auto row">

                                                    <div class="text-center" v-if="allPosts.length == 0">
                                                        <h1 class="text-muted mt-5" style="height:200px">There is no
                                                            Data
                                                        </h1>
                                                    </div>



                                                    <div class="col-lg-6 col-md-6" v-for="(post, i) in allPosts" :key="i">

                                                        <router-link :to="{ name: 'detail', params: { id: post.id } }">
                                                            <div class="single-what-news mb-100 border border-1">
                                                                <div class="what-img text-center">
                                                                    <img :src="post.image"
                                                                        style="width:98%; height:300px; object-fit: contain;" />
                                                                    <hr class="py-1 bg-danger">
                                                                </div>
                                                                <!-- <div class="what-cap"> -->
                                                                <div class="bg-dark p-3 bg-gradient rounded">
                                                                    <span class="color1 bg-transparent fw-bold h5">
                                                                        {{ post.title }}</span>
                                                                    <span class="my2 small d-block">
                                                                        Category: {{ post.category_name }} |
                                                                        Author: {{ post.user_name }}
                                                                    </span>
                                                                    <h6 class="mt-2" style="min-height: 100px;">
                                                                        <a class="text-muted">
                                                                            {{ post.description }}
                                                                        </a>
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                        </router-link>
                                                    </div>
                                                </div>



                                            </div>
                                        </div>
                                    </div>
                                    <!-- Card two -->

                                </div>
                                <!-- End Nav Card -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <!-- Whats New End -->

        <!--Start pagination -->
        <div class="pagination-area pb-45 text-center">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="single-wrap d-flex justify-content-center">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination justify-content-start">
                                    <li class="page-item">
                                        <a class="page-link" href="details.html"><span
                                                class="flaticon-arrow roted"></span></a>
                                    </li>
                                    <li class="page-item active">
                                        <a class="page-link" href="details.html">01</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="details.html">02</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="details.html">03</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="details.html"><span
                                                class="flaticon-arrow right-arrow"></span></a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End pagination  -->
        <!-- </main> -->
    </div>
</template>


<script src="../../JS/homePage.js"></script>


<style scoped>
.nav-item:hover {
    cursor: pointer;
    user-select: none;
}

.input-container {
    width: 200px;
    height: 30px;
    position: relative;
    right: 10px;
    transition: all 0.3s ease-in-out;
    /* background-color: green; */
}

.icon {
    position: absolute;
    right: 10px;
    top: calc(50% + 5px);
    transform: translateY(calc(-50% - 5px));
    background-color: rgba(240, 248, 255, 0.133);
    z-index: 10;
}

input::-webkit-input-placeholder {
    color: #99999900;
}

input:focus::-webkit-input-placeholder {
    color: rgb(17, 117, 12);
}

.input {
    width: 20%;
    position: absolute;
    height: 30px;
    right: 0;
    z-index: 20;
    padding: 10px;
    transition: .2s linear;
    border: 2.5px solid rgb(96, 92, 92);
    font-size: 14px;
    background-color: rgba(255, 255, 255, 0.041);
    opacity: 0.2;
    letter-spacing: 2px;
    border-radius: 10px;
    /* box-shadow: 10px 10px 10px green; */
}

.input:focus {
    outline: none;
    border: 0.5px solid rgba(0, 0, 0, 0.637);
    box-shadow: -5px -5px 0px rgba(59, 49, 49, 0.559);
    background-color: rgb(255, 255, 255);
    width: 200px;
    z-index: 2;
    opacity: 1;
}



.input-container:hover>.icon {
    animation: anim 1s linear infinite;
}

@keyframes anim {

    0%,
    100% {
        transform: translateY(calc(-50% - 5px)) scale(1);
    }

    50% {
        transform: translateY(calc(-50% - 5px)) scale(1.1);
    }
}
</style>
