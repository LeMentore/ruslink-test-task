<template>
    <div class="sidebar" :class="{toggled: isActive}">
        <nav>
            <ul>
                <app-marker v-for="(index) in markersCount" :key="index" :index="index"
                            :markers="markers"
                            :activeItem="activeItem"
                            @click.native="changePlace(index)">
                </app-marker>
            </ul>
        </nav>
    </div>
</template>

<script>
    import { eventBus } from '../main'
    import Marker from './Marker'

    export default {
        props: ['markersCount', 'markers'],
        data() {
            return {
                isActive: false,
                activeItem: null
            }
        },
        methods: {
            changePlace(index) {
                this.activeItem = index
                eventBus.$emit('placeSelected', index)
            }
        },
        created(){
            eventBus.$on('menuToggled', isActive => {
                this.isActive = isActive
            })

            eventBus.$on('markerClicked', index => {
                this.activeItem = index + 1
                this.isActive = true // Open the sidebar for mobile view

                setTimeout(() => {
                    this.$scrollTo('.active', 800, {
                        container: '.sidebar',
                        x: false
                    })
                }, 200)
            })
        },
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
        top: 65px;
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
        }
        .sidebar.toggled + .main {
            overflow: hidden;
        }
        .sidebar {
            left: -260px;
        }
    }
</style>
