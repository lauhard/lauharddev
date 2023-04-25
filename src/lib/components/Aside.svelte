<script>
// @ts-nocheck
    import Routes from '$lib/routes';
    import Route from './Route.svelte';
    import { page } from "$app/stores";
    import { onDestroy, setContext } from 'svelte';
    
    export let type = 'aside-desktop'; //predefined aside type
    //TODO: asides classes for different devices

    export let isvisible = true; //toggle aside menu
    export let toggleOnClick = true; //toggle aside menu

    // fake user claims
    // TODO load ssr and put into svelte store 
    let claims = {
        uid:"xyz",
        permissions: [
            {
                auth_name: 'snippets',
                create: false,
                read: true,
                update: false,
                delete: false
            }
        ]
    }

    const key = Symbol();
    setContext(key, {
        isvisible: isvisible
    })

    // let routes = Routes.filter((route)=> {
    //     let res = false;
    //     if(claims.permissions) {
    //         res =claims.permissions.find((p)=>p.auth_name == route.pathname.slice(1))?.read
    //         if(res === true || route.public)
    //             return route;
    //     } else {
    //         return Routes.filter(route => route.public == true)
    //     }          
    // })

    $:left = -250;
    const handleClick = (event) => { isvisible = !isvisible }
    $: {
        if(isvisible) left= 0          
        else left = -250
    }
</script>
<nav 
    class:aside-desktop = {type === 'aside-desktop'}
    style="left: {left}px"
    >

    
    <ul class="list">
        {#each routes as route}
            <!-- {#if $page.url.pathname == public} -->
                <li 
                    on:click={()=>{
                        if(toggleOnClick === true)
                            handleClick()
                        }
                    }
                    class="list-item"
                    class:selected="{$page.url.pathname == route.pathname}"
                    >
                    <Route class="route"
                        
                            pathname={route.pathname} 
                        >
                        <i class={route.icon}></i>
                        <span>{route.name}</span>
                    </Route>
                </li>
            <!-- {/if} -->
        {/each}
    </ul>
</nav>

<style lang="scss">
   
    nav{
        transition: left .5s ease-in-out;
        position: fixed;
        overflow: hidden;
        height: 100%;
        z-index: 1100 !important;

    }
    .toggle {
        left:-250px; 
        position: absolute;
    }
    .aside-desktop {
        background-color:var(--color-main);
        z-index: 10;
        width: 250px;
        height: 100%;
        .list{
            position: relative;
            width: 250px;
            flex-direction: column;
            display: flex;
            list-style: none;
            .list-item :global(.route) {
                width: 100%;
                display: flex;
                align-items: center;
                font-size: 30px;
            }
            .list-item {
                position: relative;
                padding: 15px;
                height: 63px;
                span{
                    width: 100%;
                    display: block;
                    margin-left: 10px;
                    font-size: 15px;
                    font-weight: 700;
                    color: var(--link-color);
                }
                i{
                    color: var(--accent-color)
                }
                i, span{}
            }
            .list-item.selected {
                background-color: var(--active-link-bg-main);
                border-bottom: var(--highlight-color-main) 3px solid;  
                i{
                    color: var(--highlight-color-main);
                }
                span{
                    color: var(--color-main)
                }
            }
            li.selected:before, 
            li.selected:after{
                content: '';
                position: absolute;
                border-left: 5px solid transparent;
                border-right: 5px solid transparent;
                border-bottom: 5px solid transparent;
                clear: both;   
            }
            li.selected:before {
                right: -5px;
                top:-5px;
                border-bottom: 5px solid var(--active-link-bg-main);
            }
            li.selected:after {
                border-top: 5px solid var(--active-link-bg-main);
                right: -5px;
                top: 60px;
            }
            .list-item:hover{
               
                i {
                    color: var(--highlight-color-main);
                    transition: all .3s ease-in;
                }
                i, span{}
            }
        }
    }
</style>