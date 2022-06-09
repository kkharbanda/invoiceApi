<template>
  <div>
    <section class="section">
      <div class="container mt-5">
        <div class="row">
          <div
            class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2"
          >
            <div class="card card-primary">
              <div class="card-header">
                <h4>Register</h4>
              </div>

              <div class="card-body">
                <form @submit.prevent="Adduser" class="needs-validation" novalidate>
                  <div class="row">
                    <div class="form-group col-6">
                      <label for="first_name">First Name</label>
                      <input
                        id="first_name"
                        type="text"
                        class="form-control"
                        name="first_name"
                        v-model="first_name"
                        :class="{ error: v$.first_name.$errors.length }"
                      />
                      <div
                        class="input-errors text-small text-danger"
                        v-for="error of v$.first_name.$errors"
                        :key="error.$uid"
                      >
                        <div class="error-msg">Please enter first Name</div>
                      </div>
                    </div>
                    <div class="form-group col-6" :class="{ error: v$.last_name.$errors.length }">
                      <label for="last_name">Last Name</label>
                      <input
                        id="last_name"
                        v-model="last_name"
                        type="text"
                        class="form-control"
                        name="last_name"
                      />
                      <div
                        class="input-errors text-small text-danger"
                        v-for="error of v$.last_name.$errors"
                        :key="error.$uid"
                      >
                        <div class="error-msg">Please enter Last Name</div>
                      </div>
                    </div>
                  </div>

                  <div class="form-group" :class="{ error: v$.email.$errors.length }">
                    <label for="email">Email</label>
                    <input
                      id="email"
                      v-model="email"
                      type="email"
                      class="form-control"
                      name="email"
                      required
                    />
                    <div
                      class="input-errors text-small text-danger"
                      v-for="error of v$.email.$errors"
                      :key="error.$uid"
                    >
                      <div class="error-msg">Please enter Correct email</div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="form-group col-6" :class="{ error: v$.password.$errors.length }">
                      <label for="password" class="d-block">Password</label>
                      <input
                        id="password"
                        type="password"
                        v-model="password"
                        class="form-control pwstrength"
                        data-indicator="pwindicator"
                        name="password"
                      />
                      <div
                        class="input-errors text-small text-danger"
                        v-for="error of v$.password.$errors"
                        :key="error.$uid"
                      >
                        <div class="error-msg">Please enter Password</div>
                      </div>
                    </div>
                    <div class="form-group col-6" :class="{ error: v$.password2.$errors.length }">
                      <label for="password2" class="d-block">Password Confirmation</label>
                      <input
                        id="password2"
                        type="password"
                        v-model="password2"
                        class="form-control"
                        name="password-confirm"
                      />
                      <div
                        class="input-errors text-small text-danger"
                        v-for="error of v$.password2.$errors"
                        :key="error.$uid"
                      >
                        <div class="error-msg">Confirm password and password should be same</div>
                      </div>
                    </div>
                  </div>

                  <div class="form-divider">Your Home</div>
                  
                  <div class="row">
                    <div class="form-group col-6" :class="{ error: v$.Country.$errors.length }">
                      <label>Country</label>
                      <select v-model="Country" class="form-control selectric">
                        <option>Indonesia</option>
                        <option>Palestine</option>
                        <option>Syria</option>
                        <option>Malaysia</option>
                        <option>Thailand</option>
                      </select>
                      <div
                        class="input-errors text-small text-danger"
                        v-for="error of v$.Country.$errors"
                        :key="error.$uid"
                      >
                        <div class="error-msg">Choose Country</div>
                      </div>
                    </div>
                    <div class="form-group col-6" :class="{ error: v$.Province.$errors.length }">
                      <label>Province</label>
                      <select v-model="Province" class="form-control selectric">
                        <option>West Java</option>
                        <option>East Java</option>
                      </select>
                      <div
                        class="input-errors text-small text-danger"
                        v-for="error of v$.Province.$errors"
                        :key="error.$uid"
                      >
                        <div class="error-msg">Choose Province</div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="form-group col-6" :class="{ error: v$.City.$errors.length }">
                      <label>City</label>
                      <input v-model="City" type="text" class="form-control" />
                      <div
                        class="input-errors text-small text-danger"
                        v-for="error of v$.City.$errors"
                        :key="error.$uid"
                      >
                        <div class="error-msg">Choose Province</div>
                      </div>
                    </div>
                    <div class="form-group col-6" :class="{ error: v$.postalcode.$errors.length }">
                      <label>Postal Code</label>
                      <input v-model="postalcode" type="text" class="form-control" />
                      <div
                        class="input-errors text-small text-danger"
                        v-for="error of v$.postalcode.$errors"
                        :key="error.$uid"
                      >
                        <div class="error-msg">Choose postalcode</div>
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <div
                      class="custom-control custom-checkbox"
                      :class="{ error: v$.agree.$errors.length }"
                    >
                      <input
                        type="checkbox"
                        v-model="agree"
                        name="agree"
                        class="custom-control-input"
                        id="agree"
                      />
                      <div
                        class="input-errors text-small text-danger"
                        v-for="error of v$.agree.$errors"
                        :key="error.$uid"
                      >
                        <div class="error-msg">Accpet Terms and Services</div>
                      </div>
                      <label
                        class="custom-control-label"
                        for="agree"
                      >I agree with the terms and conditions</label>
                    </div>
                  </div>

                  <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-lg btn-block">Register</button>
                  </div>
                </form>
              </div>
            </div>
            <div class="simple-footer">Copyright &copy; Stisla 2018</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
/* eslint-disable */
/* eslint-disable no-mixed-spaces-and-tabs */
import useVuelidate from "@vuelidate/core";
import { required, email, sameAs,minLength } from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  name: "RegisterCreate",
  data() {
    return {
      msg: [],
      country: '',
            region: '',
      first_name: "",
      last_name: "",
      email: "",
      postalcode: "",
      City: "",
      password: "",
      password2: "",
      Country: "",
      agree: "",
      Province: ""
    };
  },
  validations() {
    return {
      first_name: { required },
      last_name: { required },
      email: { required, email },
      postalcode: { required },
      City: { required },
      password: { required,
      minLength: minLength(6) },
      password2: { required,
      minLength: minLength(6) },
      Country: { required },
      agree: { required },
      Province: { required }
    };
  },
  methods: {
    async Adduser() {
      const result = await this.v$.$validate();
      if (!result) {
        // notify user form is invalid
        return;
      }
      const Newinformation = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        postalcode: this.postalcode,
        City: this.City,
        password: this.password,
        password2: this.password2,
        Country: this.Country,
        agree: this.agree,
        Province: this.Province
      }
       console.log(JSON.stringify(Newinformation))
    }
  }
};
</script>

<style>
</style>