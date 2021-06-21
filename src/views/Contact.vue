<template>
    <transition name="fade" mode="in-out">
        <div class="page-container">
            <div class="contact-container">
                <a href="#"><div class="hoverble contact1 contact-item"><span>Looking to hire me?</span></div></a>
                <a href="#"><div class="hoverble contact2 contact-item"><span>Trying to feature me?</span></div></a>
                <a href="#"><div class="hoverble contact3 contact-item"><span>Just saying wassup?</span></div></a>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'contact',
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/global';

.page-container {
    background: white;
}

.contact-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    height: 100vh;
}

.contact-item {
    background-image: url('../assets/rect.png');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    width: 300px;
    margin-left: 36px;
    margin-right: 36px;
    transition: 600ms;
    font-weight: bold;

    &:hover {
        transform: rotate(45deg) scale(1.5);

        span {
            transform: rotate(-45deg);
        }
    }
}

span {
    transition: 600ms;
}

a {
    color: black;
    text-decoration: none;
}

p {
    font-size: 18px;
}

h1 {
    font-size: 48px;
}
</style>