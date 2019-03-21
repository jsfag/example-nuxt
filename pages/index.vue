<template>
  <section class="component-register">
    <div class="register">

      <h1>{{ title }}</h1>

      <form action="" method="post" @submit.prevent="onSubmit">
        <FieldInput
          v-for="(value, key, i) in inputs"
          v-bind:label="label_input[i][key]"
          v-bind:for_name="key"

          v-bind:name="key"
          v-model="inputs[key]"
          v-bind:type="label_input[i].type"
          v-bind:key="label_input[i][key]"
          required
        />
        
        <ButtonSubmit>{{ button_submit }}</ButtonSubmit>
      </form>

      <div class="page-second">
        <span>{{ page_second.label }}</span>
        &nbsp;
        <nuxt-link to="/login">{{ page_second.link }}</nuxt-link>
      </div>

    </div>
  </section>
</template>

<script>
import FieldInput from '~/components/elements/form/FieldInput.vue'
import ButtonSubmit from '~/components/elements/form/ButtonSubmit.vue'


export default {
  data() {
    return {
      title: 'Зарегистрироваться',
      label_input: [
        {email: 'Электронная почта', type: 'email'},
        {firstname: 'Имя', type: 'text'},
        {lastname: 'Фамилия', type: 'text'},
        {password: 'Пароль', type: 'password'},
      ],
      button_submit: 'Войти',
      page_second: {
        label: 'Есть аккаунт?',
        link: 'Войти',
      },

      inputs: {
        email: 'test@test2.com',
        firstname: 'Alex',
        lastname: 'Goodman',
        password: '12341234_$Aa',
      }
    }
  },
  components: {
    FieldInput,
    ButtonSubmit,
  },
  methods: {
    async onSubmit() {
      const data = {
        email: this.inputs.email,
        password: this.inputs.password,
        first_name: this.inputs.firstname,
        last_name: this.inputs.lastname,
      }

      // const result = await this.$axios.$post(process.env.baseURL + '/clients', data)
      const result = await this.$axios.$post('/api', data)
      console.log(result)
    }
  }
}
</script>

<style scoped>
section.component-register {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
}

.register {
  border: 1px solid #1351E4;

  display: flex;
  flex-direction: column;
  min-width: 380px;
  padding: 40px 40px 0 40px;
}
  .register > h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 23px;
    line-height: 35px;
    letter-spacing: 0.015em;
    color: #161517;
  }
  .register > form {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 350px;
  }
    .page-second {
      display: flex;
      flex: 1;
      justify-content: center;
      padding: 16px;

      font-weight: normal;
      font-size: 14px;
      line-height: normal;
      letter-spacing: 0.01em;
    }
      .page-second > span {
        color: #161517;
      }
      .page-second > a {
        color: #1351E4;
        text-decoration: none;
      }
</style>
