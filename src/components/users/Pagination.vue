<template>
    <div> 
        <button v-if="!(totalPages === page)" @click="getUsers({ currentPage: page + 1, currentLimit: limit, filter: filterValue, sort: sortValue })" class="paginationBtn">Показать больше</button>     
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
        cursor: pointer;
    }
</style>