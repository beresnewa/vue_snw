<template>
    <div> 
        <button v-if="!(totalPages === page)" @click="getUsers({ currentPage: page + 1, currentLimit: limit, filter: filterValue, sort: sortValue })" class="paginationBtn">Show more</button>     
    </div>
</template>

<script>
    import { mapGetters, mapActions} from 'vuex';

    export default {
        computed: {
            ...mapGetters("usersState", ["page", "limit", "totalPages", "filterValue", "sortValue"]),  
        },
        methods: {
            ...mapActions("usersState", ["getUsers"]),
        }, 
    }
</script>

<style scoped>
    button {
        margin-left: 10px;
        background-color: white;
        cursor: pointer;
        outline: none;
        border: 1px solid rgba(var(--ca6,219,219,219),1);
        border-radius: 4px;
        padding: 5px 5px;
        height: 30px;
        overflow: hidden;
        width: 120px;
        background-color: rgb(200, 151, 240);
    }
</style>