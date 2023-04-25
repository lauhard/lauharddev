<script lang="ts">
    import { createEventDispatcher } from "svelte";
   
    $:showSearchbar=false;
    export let value = "";
    export let count = 0;

    const dispatch = createEventDispatcher();

    const searchPosts=()=>{
        dispatch('search', {
            // searchTerm: searchTerm
        })
    }

    const toggleSearchbar=()=> {
        showSearchbar=!showSearchbar;
        value = value.length > 0 ? "" : value;
    }

</script>
<div class="search">
    <form role="search" name="search" action="">
        <div class="searchbar">
            <i class="fas fa-search" on:mousedown={searchPosts} on:mousedown={toggleSearchbar}
                class:active={showSearchbar==true}
            ></i>
                <input type="text" bind:value class:showSearchbar={showSearchbar==true}
            >

        </div>

    </form>
</div>
<style lang="scss">
    .search {
        width:100%;
        // margin:  400px;
        // padding:  40px;
        .searchbar{
            display: flex;
            justify-content: flex-start;
            align-items:center;
            i {
                width:42px;
                min-width:42px;
                font-size: 20px;
                height: 42px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items:center;
                z-index: 1;
                color: var(--main-accent-color);
                transition: all .2s ease-in-out;
                border: 2px solid var(--main-accent-color);
                
            }
            i.active{
                background-color: var(--main-accent-color);
                color: var(--main-color);
                transition: all .2s ease-in-out;
                z-index: 1;
            }
            i:hover{
                background-color: var(--main-accent-color);
                color: var(--main-color);
                z-index: 1;
                // display: block;
                // width:100%;
                transition: all .2s ease-in-out;
            }
            input{
                border-style:none;
                width:0px;
                opacity: 0;
                transition: all .3s ease-in-out;
                margin-left: -17px;
                height: 30px;
                padding-left: 20px;
                border: 2px solid var(--main-accent-color);
                background-color: transparent;
                color: var(--main-color);
                font-size: 17px;
                border-radius: 8px;
            }
            input:focus{
                outline: none;
            }
            input.showSearchbar {
                display: block;
                width:100%;
                opacity: 1;
                transition: all .3s ease-in-out;
            }
        }
    }
    

</style>