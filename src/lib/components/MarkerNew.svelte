<script lang="ts">
    export let infotext: String="new"
    export let postDate;
    let isNew = false
    if(postDate) {
      let today = (new Date()).getTime();
      let _postDate = new Date(postDate);
      console.log("postDate", new Date(postDate));
      console.log("today", (new Date()));

      let time = _postDate.setDate(_postDate.getDate() + 7)
      isNew = today > time ? false : true;
    } 
    

</script>
    {#if isNew}
      <div class="corner"><span>{infotext}</span></div>
    {/if}

<style lang="scss">


.corner {
  width: 0;
  height: 0;
  border-top: 50px solid var(--main-accent-color);;
  border-bottom: 50px solid transparent;
  border-left: 50px solid transparent;
  position:absolute;
  right:0;
  color:var(--main-color);
  z-index: 100;
}

.corner span {
  position:absolute;
  top: -40px;
  width: 0px;
  left: -18px;
  text-align: center;

  font-size: 15px;
  font-weight: bolder;
  font-family: arial;
  transform: rotate(45deg);
  display:flex;
  justify-content: center;
  align-items: center;
  
}

</style>