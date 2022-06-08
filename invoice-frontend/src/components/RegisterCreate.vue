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
                <form @submit="Adduser">
                  <p class ="text-danger" v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
  </p>
                  <div class="row">
                    <div class="form-group col-6">
                      <label for="first_name">First Name</label>
                      <input
                        id="first_name"
                        type="text"
                        class="form-control"
                        name="first_name"
                        v-model="first_name"
                        autofocus
                      />
                    </div>
                    <div class="form-group col-6">
                      <label for="last_name">Last Name</label>
                      <input
                        id="last_name"
                        v-model="last_name"
                        type="text"
                        class="form-control"
                        name="last_name"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="email">Email</label>
                    <input id="email" v-model="email" type="email" class="form-control" name="email" />
                    <div class="invalid-feedback"></div>
                  </div>

                  <div class="row">
                    <div class="form-group col-6">
                      <label for="password" class="d-block">Password</label>
                      <input
                        id="password"
                        type="password"
                        v-model="password"
                        class="form-control pwstrength"
                        data-indicator="pwindicator"
                        name="password"
                      />
                      <div id="pwindicator" class="pwindicator">
                        <div class="bar"></div>
                        <div class="label"></div>
                      </div>
                    </div>
                    <div class="form-group col-6">
                      <label for="password2" class="d-block">Password Confirmation</label>
                      <input
                        id="password2"
                        type="password"
                        v-model="password2"
                        class="form-control"
                        name="password-confirm"
                      />
                    </div>
                  </div>

                  <div class="form-divider">Your Home</div>
                  <div class="row">
                    <div class="form-group col-6">
                      <label>Country</label>
                      <select v-model="Country" class="form-control selectric">
                        <option>Indonesia</option>
                        <option>Palestine</option>
                        <option>Syria</option>
                        <option>Malaysia</option>
                        <option>Thailand</option>
                      </select>
                    </div>
                    <div class="form-group col-6">
                      <label>Province</label>
                      <select v-model="Province" class="form-control selectric">
                        <option>West Java</option>
                        <option>East Java</option>
                      </select>
                    </div>
                  </div>
                  <div class="row">
                    <div class="form-group col-6">
                      <label>City</label>
                      <input v-model="City" type="text" class="form-control" />
                    </div>
                    <div class="form-group col-6">
                      <label>Postal Code</label>
                      <input v-model="postalcode" type="text" class="form-control" />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        v-model="agree"
                        name="agree"
                        class="custom-control-input"
                        id="agree"
                      />
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

export default {
  name: "RegisterCreate",
  data() {
    return {
      errors: [],
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
  methods: {
    Adduser(e) {
      
      this.errors = [];
      if (!this.first_name) {
       this.errors.push("enter your first name");
        
      }
      if (!this.last_name) {
        this.errors.push("enter your last name");
        
      }
      if (!this.email) {
       this.errors.push("enter your email");
        
      }
      if (!this.postalcode) {
       this.errors.push("enter your postalcode");
        
      }
      if (!this.City) {
        this.errors.push("enter your City");
        
      }
      if (!this.password) {
       this.errors.push("enter your password");
       
      }
      if (!this.password2) {
      this.errors.push("enter your password2");
       
      }
      if (!this.Country) {
        this.errors.push("enter your Country");
       
      }
      if (!this.agree) {
        this.errors.push("you should agree with terms and services");
        
      }
      if (!this.Province) {
        this.errors.push("enter Province");
       
      }
      e.preventDefault();
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