<template>
    <div class="app-container">
        <app-header></app-header>
        <app-sidebar :markersCount="markers.length" :markers="markers"></app-sidebar>
        <app-content :markers="markers"></app-content>
    </div>
</template>

<script>
    import Header from './components/Header'
    import Sidebar from './components/Sidebar'
    import Content from './components/Map'

    export default {
        data() {
            return {
                markers: []
            }
        },
        components: {
            appHeader: Header,
            appSidebar: Sidebar,
            appContent: Content
        }
    }
</script>

<style>
    @import url('http://weloveiconfonts.com/api/?family=fontawesome');
    *, *:before, *:after {
        box-sizing: border-box;
    }
    html {
        background-color: #eee;
    }
    body {
        font-family: "fontawesome", sans-serif;
        box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
        position: relative;
        max-width: 1024px;
        margin: 0 auto;
        overflow-x: hidden;
    }
    ::-webkit-scrollbar-track {
        background-color: #fff;
    }

    ::-webkit-scrollbar {
        width: 3px;
        background-color: #fff;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #2296f3
    }
    .app-container{
        height: 768px;
    }
</style>
