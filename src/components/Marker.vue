<template>
    <li>
        <div>
            <div>Маркер {{ index }}</div>
            <div class="coordinates">{{ markers[index-1].position.lat }} {{ markers[index-1].position.lng }}</div>
        </div>
    </li>
</template>

<script>
    export default {
        props: ['index', 'markers'],
    }
</script>

<style scoped>
    li {
        padding: 20px;
        color: #000;
        margin-bottom: 1px;
        border-left: 4px solid transparent;
        cursor: pointer;
    }
    li:hover {
        background-color: #eee;
    }
    li.active {
        border-color: #2296f3;
        background-color: #eee;
    }
    .coordinates{
        font-size: 13px;
        color: #888;
        margin-top: 3px;
    }
</style>
