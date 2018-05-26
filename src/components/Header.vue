<template>
    <header>
        <a href="#" class="toggle-menu fontawesome-reorder" @click.prevent="toggleMenu"></a>
        <h1>{{ isRussianLanguage ? dictionary.rus.APP_TITLE : dictionary.eng.APP_TITLE }}</h1>
        <app-switcher></app-switcher>
    </header>
</template>

<script>
    import { eventBus } from '../main'
    import { dictionary } from '../dictionary'
    import Switcher from './Switcher'

    export default {
        data() {
            return {
                isMenuActive: true,
                isRussianLanguage: true,
                dictionary: dictionary
            }
        },
        methods: {
            toggleMenu() {
                this.isMenuActive = !this.isMenuActive
                eventBus.$emit('menuToggled', this.isMenuActive)
            }
        },
        created() {
            eventBus.$on('languageSwitched', language => {
                this.isRussianLanguage = language
            })
        },
        components: {
            appSwitcher: Switcher
        }
    }
</script>

<style scoped>
    header {
        color: #fff;
        background-color: #2296f3;
        height: 65px;
        position: relative;
        z-index: 1;
        box-shadow: 0 6px 4px -4px rgba(0, 0, 0, .2);
    }
    h1 {
        font-weight: normal;
        margin: 0;
        padding: 18px 20px;
        position: relative;
        transition: all 0.3s ease-out;
        font-size: 24px;
        float: left;
    }
    .toggle-menu {
        color: #fff;
        text-decoration: none;
        font-size: 50px;
        float: left;
        display: block;
        position: absolute;
        left: 0;
        z-index: -1;
        opacity: 0;
        transition: opacity 0.3s ease-out;
    }
    .toggle-menu:before {
        height: 64px;
        width: 64px;
        display: block;
        text-align: center;
        line-height: 64px;
        font-size: 24px;
    }
    @media all and (max-width: 1024px) {
        h1 {
            left: 40px;
        }
        .toggle-menu {
            z-index: 1;
            opacity: 1;
        }
    }
</style>
