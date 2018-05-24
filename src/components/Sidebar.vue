<template>
    <div class="sidebar">
        <nav>
            <ul>
                <app-marker v-for="(index) in markersCount" :index="index" :key="index"></app-marker>
            </ul>
        </nav>
    </div>
</template>

<script>
    import Marker from './Marker'

    export default {
        props: ['markersCount'],
        components: {
            appMarker: Marker
        }
    }
</script>

<style scoped>
    .sidebar {
        transition: all 0.3s ease-out;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        background-color: #fff;
        position: absolute;
        top: 64px;
        bottom: 0;
        width: 260px;
        left: 0;
    }
    nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
        background-color: #fff;
    }

    @media all and (max-width: 1024px) {
        .sidebar.toggled {
            left: 0;
            z-index: 10;
            box-shadow: 3px 1px 10px rgba(0, 0, 0, 0.8);
        }
        .sidebar.toggled + .main {
            overflow: hidden;
        }
        .sidebar {
            left: -260px;
        }
    }
</style>
