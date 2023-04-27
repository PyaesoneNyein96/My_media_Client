<template>
    <div class="p-2">



        <div class="col mx-auto px-auto bg-light bg-gradient" style="position: relative; height:500px;">

            <div class="login-box  bg-gradient" style="width: 350px;">
                <h1 class="text-center" @click="showToken">
                    login

                </h1>
                <form>
                    <div class="user-box">
                        <input type="text" name="email" required="" v-model="userData.email">
                        <label>Email</label>
                    </div>
                    <div class="user-box">
                        <input type="password" name="password" required="" v-model="userData.password">
                        <label>Password</label>
                    </div>
                    <div class="text-center " @click="login">
                        <button href="#" type="button" class="">
                            Log in
                            <span></span>
                        </button>
                    </div>
                </form>
            </div>


        </div>
    </div>
</template>



<script src="../../JS/login.js"></script>

<style scoped>
.login-box {
    position: absolute;
    top: 40%;
    left: 50%;
    width: 400px;
    padding: 40px;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.926);
    /* background: rgba(106, 107, 105, 0.987); */
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgb(142, 138, 138);
    border-radius: 10px;
}

.login-box .user-box {
    position: relative;
}

.login-box .user-box input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #473434;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #161414;
    outline: none;
    background: transparent;
}

.login-box .user-box label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #302828;
    pointer-events: none;
    transition: .5s;
}

.login-box .user-box input:focus~label,
.login-box .user-box input:valid~label {
    top: -20px;
    left: 0;
    color: #264fae;
    font-size: 15px;
}

.login-box form button {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    color: #460808;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: .5s;
    margin-top: 40px;
    letter-spacing: 4px;
    box-shadow: #161414 1px 1px 2px;
    border: none;
}

.login-box button:hover {
    background: #03f40f;
    color: #664747;
    border-radius: 5px;
    box-shadow: 0 0 5px #03f40f,
        0 0 25px #03f40f,
        0 0 50px #03f40f,
        0 0 100px #03f40f;
}

.login-box button span {
    position: absolute;
    display: block;
}

@keyframes btn-anim1 {
    0% {
        left: -100%;
    }

    50%,
    100% {
        left: 100%;
    }
}

.login-box button span:nth-child(1) {
    bottom: 2px;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03f40f);
    animation: btn-anim1 2s linear infinite;
}
</style>
