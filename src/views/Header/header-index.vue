<template>
    <header>
        <!-- Header Start -->
        <div class="header-area">
            <div class="main-header">
                <div class="header-top black-bg d-none d-md-block">
                    <div class="container">
                        <div class="col-xl-12">
                            <div class="row d-flex justify-content-between align-items-center">
                                <div class="header-info-left">
                                    <ul>
                                        <li>
                                            <img src="assets/img/icon/header_icon1.png" alt="" />34ºc, Sunny
                                        </li>
                                        <li>
                                            <img src="assets/img/icon/header_icon1.png" alt="" />Tuesday, 18th June, 2019
                                        </li>
                                    </ul>
                                </div>
                                <div class="header-info-right">
                                    <ul class="header-social">
                                        <li>
                                            <a href="details.html"><i class="fab fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="details.html"><i class="fab fa-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href="details.html"><i class="fab fa-pinterest-p"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-mid d-none d-md-block">
                    <div class="container">
                        <div class="row d-flex align-items-center">
                            <!-- Logo -->
                            <div class="col-xl-3 col-lg-3 col-md-3">
                                <div class="logo">
                                    <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a>
                                </div>
                            </div>
                            <div class="col-xl-9 col-lg-9 col-md-9">
                                <div class="header-banner f-right">
                                    <img src="assets/img/hero/header_card.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-bottom header-sticky">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-xl-10 col-lg-10 col-md-8 py-2 header-flex">
                                <!-- sticky -->
                                <div class="sticky-logo">
                                    <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a>
                                </div>
                                <!-- Main-menu -->
                                <navLink />


                            </div>

                            <!-- Mobile Menu -->
                            <div class="col-12">
                                <div class="mobile_menu d-block d-md-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Header End -->
    </header>
</template>

<script>

import navLink from '../../components/tools/nav-link';
export default {
    name: 'header-index',
    components: {
        navLink
    }




}
</script>


<style scoped>
.input-container {
    width: 200px;
    position: relative;
}

.icon {
    position: absolute;
    right: 10px;
    top: calc(50% + 5px);
    transform: translateY(calc(-50% - 5px));
}

.input {
    width: 100%;
    height: 30px;
    padding: 10px;
    transition: .2s linear;
    border: 2.5px solid black;
    font-size: 14px;
    /* text-transform: uppercase; */
    letter-spacing: 2px;
    border-radius: 10px;
}

.input:focus {
    outline: none;
    border: 0.5px solid black;
    box-shadow: -5px -5px 0px black;
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