<template>
    <div class="wrapper" @click="switchLanguage" :class="{active: clicked, right: toggled}">
        <a>ENG</a>
        <a>РУС</a>
    </div>
</template>

<script>
    import { eventBus } from '../main'

    export default {
        data() {
            return {
                clicked: false,
                toggled: true
            }
        },
        methods: {
            switchLanguage() {
                this.clicked = true
                this.toggled = !this.toggled
                eventBus.$emit('languageSwitched', this.toggled)
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        text-align: center;
        display: inline-block;
        position: relative;
        top: 22px;
        margin: 20px;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        float: right;
    }
    .wrapper a {
        position: relative;
        color: white;
        font-size: 15px;
        cursor: pointer;
        transition: color .3s;
    }
    .wrapper a:last-child {
        margin-left: 30px;
        color: #b3b3b3;
    }
    .wrapper:after {
        content: '';
        width: 33px;
        height: 4px;
        position: absolute;
        bottom: -15px;
        left: 0;
        background-color: #fff;
        border-radius: 3px;
    }
    .wrapper.active:after {
        animation: .3s toRu forwards;
    }
    .wrapper.right a {
        color: #9b9a9c;
    }
    .wrapper.right a:last-child {
        color: white;
    }
    .wrapper.right:after {
        animation: .3s toEn forwards;
    }
    @keyframes toEn {
        0% {
            width: 33px;
        }
        50% {
            width: 100%;
            left: -5px;
            margin-left: 0;
        }
        100% {
            left: 100%;
            margin-left: -33px;
        }
    }
    @keyframes toRu {
        0% {
            width: 33px;
            left: 100%;
            margin-left: -33px;
        }
        50% {
            width: 100%;
            left: 0;
            margin-left: 0;
        }
        100% {
            width: 33px;
        }
    }
</style>
