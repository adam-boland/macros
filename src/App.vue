<template>
  <v-app light>
    <main>
      <v-container fluid>
        <v-layout column align-center>
          <img src="/static/img/v.png" alt="Vuetify.js" class="mb-5">
        </v-layout>
        <v-layout row justify-center>
          <v-tabs dark fixed centered>
            <v-tabs-bar class="cyan">
              <v-tabs-slider class="yellow"></v-tabs-slider>
              <v-tabs-item
                v-for="i in items"
                :key="i"
                :href="'#tab-' + i"
              >
                {{ i }}
              </v-tabs-item>
            </v-tabs-bar>
            <v-tabs-items>
              <v-tabs-content
                v-for="i in items"
                :key="i"
                :id="'tab-' + i"
              >
                <v-card flat>
                  <v-card-text>{{ text }}</v-card-text>
                </v-card>
              </v-tabs-content>
            </v-tabs-items>
          </v-tabs>

          <form v-if="toggleSearchMethod">
            <v-text-field
              v-model="protein"
              label="Protein"
              :error-messages="errors.collect('protein')"
              v-validate="'required|numeric'"
              data-vv-name="protein"
              required
            ></v-text-field>
            <v-text-field
              v-model="carbs"
              label="Carbohydrates"
              :error-messages="errors.collect('carbs')"
              v-validate="'required|numeric'"
              data-vv-name="carbs"
              required
            ></v-text-field>
            <v-text-field
              v-model="fat"
              label="Fat"
              :error-messages="errors.collect('fat')"
              v-validate="'required|numeric'"
              data-vv-name="fat"
              required
            ></v-text-field>
            <v-btn @click="search">Search</v-btn>
            <v-btn @click="clear">clear</v-btn>
          </form>
          <form v-else>
            <v-text-field
              v-model="calories"
              label="Calories"
              :error-messages="errors.collect('calories')"
              v-validate="'required|numeric'"
              data-vv-name="calories"
              required
            ></v-text-field>
            <v-btn @click="search">Search</v-btn>
          </form>
        </v-layout>
      </v-container>
    </main>
    <v-footer :fixed="fixed">
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        fixed: false,
        items: [
          { icon: 'bubble_chart', title: 'Inspire' }
        ],
        protein: '',
        carbs: '',
        fat: '',
        toggleSearchMethod: false
      }
    },

    methods: {
      search () {
        this.$validator.validateAll()
      },

      clear () {
        this.protein = ''
        this.carbs = ''
        this.fat = ''
        this.calories = ''
        this.$validator.clean()
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
