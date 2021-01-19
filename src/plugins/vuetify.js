import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            customProperties: true
        },
        dark: true,
        themes: {
            dark: {
                primary: colors.blueGrey,
                secondary: colors.grey.darken1,
                accent: colors.shades.black,
                error: colors.red.accent3,
                //background: colors.grey.darken4
                background: colors.grey.darken3,
                dev: colors.teal.darken1,
                music: colors.cyan.darken1,
                demo: colors.orange.darken1
            }
        }
    }
});
