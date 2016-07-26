  <template>
    <div id="app">
      <!-- colocando a tag menu criando no componente Menu -->
      <app-header></app-header>
      <app-content></app-content>
      <app-footer></app-footer>
    </template>

    <script>
// referenciando o componente Menu
import AppHeader from './layout/AppHeader.vue'
import AppContent from './layout/AppContent.vue'
import AppFooter from './layout/AppFooter.vue'

export default {
  components:{
    AppHeader,AppContent,AppFooter
  },
  created:function(){
    Materialize.toast('Materialize Running', 1000)
  }  
}
</script>

