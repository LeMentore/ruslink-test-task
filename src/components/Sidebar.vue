<template>
    <div class="sidebar" :class="{toggled: isMenuActive}">
        <div v-if="!markers.length" class="marker-warn">
            {{ isRussianLanguage ? dictionary.rus.MARKER_WARN : dictionary.eng.MARKER_WARN }}
        </div>
        <nav v-else>
            <ul>
                <app-marker v-for="(index) in markersCount" :key="index" :index="index"
                            :markers="markers"
                            :activeItem="activeItem"
                            :label="isRussianLanguage ? dictionary.rus.ITEM_LABEL : dictionary.eng.ITEM_LABEL"
                            @click.native="changePlace(index)">
                </app-marker>
            </ul>
        </nav>
    </div>
</template>

<script>
    import { eventBus } from '../main'
    import { dictionary } from '../dictionary'
    import Marker from './Marker'

    export default {
        props: ['markersCount', 'markers'],
        data() {
            return {
                isMenuActive: false,
                activeItem: null,
                isRussianLanguage: true,
                dictionary: dictionary
            }
        },
        methods: {
            changePlace(index) {
                this.activeItem = index
                eventBus.$emit('placeSelected', index)
            }
        },
        created(){
            eventBus.$on('menuToggled', isMenuActive => {
                this.isMenuActive = isMenuActive
            })

            eventBus.$on('markerClicked', index => {
                this.activeItem = index + 1
                this.isMenuActive = true // Open the sidebar for mobile view

                setTimeout(() => {
                    this.$scrollTo('.active', 800, {
                        container: '.sidebar'
                    })
                }, 200)
            })

            eventBus.$on('languageSwitched', language => {
                this.isRussianLanguage = language
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
    .marker-warn{
        text-align: center;
        margin: 30px;
        color: #888;
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
