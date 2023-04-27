<template>
    <div>
        <main>
            <!-- About US Start -->
            <div class="about-area">
                <div class="container">
                    <!-- Hot Aimated News Tittle-->
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="trending-tittle">
                                <strong>Trending now</strong>
                                <!-- <p>Rem ipsum dolor sit amet, consectetur adipisicing elit.</p> -->



                                <div class="trending-animated">
                                    <ul id="js-news" class="js-hidden">
                                        <li class="news-item">Bangladesh dolor sit amet, consectetur adipisicing elit.</li>
                                        <li class="news-item">Spondon IT sit amet, consectetur.......</li>
                                        <li class="news-item">Rem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8">
                            <div class=" d-flex justify-content-between">
                                <h6 class="mr-20 col-1 text-success bg-light bg-gradient p-2 rounded shadow d-inline-block">
                                    <i class="fa fa-eye fa-xs text-success fa-sm" aria-hidden="true"></i>
                                    : {{ viewCount }}
                                </h6>
                                <div class="w-100  text-end">
                                    <button type="button" class="button me-1 button-outline-success boxed-btn py-2"
                                        @click="back">
                                        Back
                                    </button>
                                </div>
                            </div>
                            <!-- Trending Tittle -->
                            <div class="about-right mb-90">
                                <div class="about-img shadow">
                                    <!-- <img :src="`http://localhost:8000/storage/Post/` + detail.image" alt=""> -->
                                    <img :src="detail.image" alt=""
                                        style="max-height:700px; width:100%; object-fit: contain;"
                                        class="p-3 border border-2">
                                </div>
                                <div class="section-tittle mb-20 pt-30">
                                    <h3>
                                        {{ detail.title }}
                                    </h3>

                                </div>
                                <div class="info-wrap">
                                    <h6>Category: {{ detail.category_name }}</h6>
                                </div>
                                <div class="info-wrap">
                                    <h6>Author: {{ detail.user_name }}</h6>
                                </div>

                                <hr class="bg-secondary pb-1 m-0">

                                <div class="about-prea">
                                    <p>{{ detail.description }}</p>
                                </div>
                                <div class="section-tittle">
                                    <h3>Unordered list style?</h3>
                                </div>
                                <div class="about-prea">
                                    <p class="about-pera1 mb-25">The refractor telescope uses a convex lens to focus the
                                        light on the eyepiece.
                                        The reflector telescope has a concave lens which means it bends in. It uses mirrors
                                        to focus the image that you eventually see.</p>
                                    <p class="about-pera1 mb-25">Collimation is a term for how well tuned the telescope is
                                        to give you a good clear image of what you are looking at. You want your telescope
                                        to have good collimation so you are not getting a false image of the celestial body.
                                    </p>
                                    <p class="about-pera1 mb-25">
                                        My hero when I was a kid was my mom. Same for everyone I knew. Moms are untouchable.
                                        They’re elegant, smart, beautiful, kind…everything we want to be. At 29 years old,
                                        my favorite compliment is being told that I look like my mom. Seeing myself in her
                                        image, like this daughter up top, makes me so proud of how far I’ve come, and so
                                        thankful for where I come from.
                                        the refractor telescope uses a convex lens to focus the light on the eyepiece.
                                        The reflector telescope has a concave lens which means it bends in. It uses mirrors
                                        to focus the image that you eventually see.
                                        Collimation is a term fo
                                        Moms are like…buttons? Moms are like glue. Moms are like pizza crusts. Moms are the
                                        ones who make sure things happen—from birth to school lunch.</p>
                                    <p class="about-pera1 mb-25">
                                        Mount and Wedge. Both of these terms refer to the tripod your telescope sits on. The
                                        mount is the actual tripod and the wedge is the device that lets you attach the
                                        telescope to the mount.
                                        Moms are like…buttons? Moms are like glue. Moms are like pizza crusts. Moms are the
                                        ones who make sure things happen—from birth to school lunch.</p>
                                    <p class="about-pera1 mb-25">
                                        Mount and Wedge. Both of these terms refer to the tripod your telescope sits on. The
                                        mount is the actual tripod and the wedge is the device that lets you attach the
                                        telescope to the mount.
                                        Moms are like…buttons? Moms are like glue. Moms are like pizza crusts. Moms are the
                                        ones who make sure things happen—from birth to school lunch.</p>
                                </div>
                                <div class="social-share pt-30">
                                    <div class="section-tittle">

                                        <ul>
                                            <!-- <li><a href="#"><img src="assets/img/news/icon-ins.png" alt=""></a></li>
                                            <li><a href="#"><img src="assets/img/news/icon-fb.png" alt=""></a></li>
                                            <li><a href="#"><img src="assets/img/news/icon-tw.png" alt=""></a></li>
                                            <li><a href="#"><img src="assets/img/news/icon-yo.png" alt=""></a></li> -->
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <!-- From -->
                            <div class="row mb-3">
                                <div class="col-lg-8 p-3 border border-1 shadow bg-light bg-gradient text-center"
                                    style="height:500px">
                                    <form class="form-contact contact_form mb-80" action="contact_process.php" method="post"
                                        id="contactForm" novalidate="novalidate">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <textarea class="form-control w-100 error" name="message" id="message"
                                                        cols="30" rows="9" onfocus="this.placeholder = ''"
                                                        onblur="this.placeholder = 'Enter Message'"
                                                        placeholder="Enter Message"></textarea>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <input class="form-control error" name="name" id="name" type="text"
                                                        onfocus="this.placeholder = ''"
                                                        onblur="this.placeholder = 'Enter your name'"
                                                        placeholder="Enter your name">
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <input class="form-control error" name="email" id="email" type="email"
                                                        onfocus="this.placeholder = ''"
                                                        onblur="this.placeholder = 'Enter email address'"
                                                        placeholder="Email">
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <input class="form-control error" name="subject" id="subject"
                                                        type="text" onfocus="this.placeholder = ''"
                                                        onblur="this.placeholder = 'Enter Subject'"
                                                        placeholder="Enter Subject">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group mt-3">

                                            <button type="submit"
                                                class="button button-contactForm boxed-btn py-2">Send</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <!-- Section Tittle -->
                            <div class="section-tittle mb-40">
                                <h3>Follow Us</h3>
                            </div>
                            <!-- Flow Socail -->
                            <div class="single-follow mb-45">
                                <div class="single-box">
                                    <div class="follow-us d-flex align-items-center">
                                        <div class="follow-social">
                                            <!-- <a href="#"><img src="assets/img/news/icon-fb.png" alt=""></a> -->
                                        </div>
                                        <div class="follow-count">
                                            <span>8,045</span>
                                            <p>Fans</p>
                                        </div>
                                    </div>
                                    <div class="follow-us d-flex align-items-center">
                                        <div class="follow-social">
                                            <!-- <a href="#"><img src="assets/img/news/icon-tw.png" alt=""></a> -->
                                        </div>
                                        <div class="follow-count">
                                            <span>8,045</span>
                                            <p>Fans</p>
                                        </div>
                                    </div>
                                    <div class="follow-us d-flex align-items-center">
                                        <div class="follow-social">
                                            <!-- <a href="#"><img src="assets/img/news/icon-ins.png" alt=""></a> -->
                                        </div>
                                        <div class="follow-count">
                                            <span>8,045</span>
                                            <p>Fans</p>
                                        </div>
                                    </div>
                                    <div class="follow-us d-flex align-items-center">
                                        <div class="follow-social">
                                            <!-- <a href="#"><img src="assets/img/news/icon-yo.png" alt=""></a> -->
                                        </div>
                                        <div class="follow-count">
                                            <span>8,045</span>
                                            <p>Fans</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- New Poster -->
                            <div class="news-poster d-none d-lg-block">
                                <!-- <img src="assets/img/news/news_card.jpg" alt=""> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- About US End -->
        </main>
    </div>
</template>

<script src="../../JS/detail.js"></script>



<style scoped></style>
