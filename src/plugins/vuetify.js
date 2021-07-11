import Vue from 'vue';
import Vuetify, {
    VBtn,
    VIcon,
    VAvatar,
    VInput,
    VTextField,
    VSelect,
    VAppBar,
    VDivider,
    VFileInput,
    VCard
  } from 'vuetify/lib'
import '@fortawesome/fontawesome-free/css/all.css' 

Vue.use(Vuetify,{
    components: {
        VBtn,
        VAvatar,
        VIcon,
        VInput,
        VTextField,
        VSelect,
        VAppBar,
        VDivider,
        VFileInput,
        VCard
    },
});

export default new Vuetify({
    icons: {
        iconfont: 'fa'
      },
});
