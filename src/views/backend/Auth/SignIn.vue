<template>
     <section class="login-content">
         <div class="container h-100">
            <div class="row justify-content-center align-items-center height-self-center">
               <div class="col-md-5 col-sm-12 col-12 align-self-center">
                  <div class="card">
                     <div class="card-body text-center">
                        <h2>Sign In</h2>
                        <p>Login to stay connected.</p>
                        <form @submit.prevent="onSubmit()">
                           <div class="row">
                              <div class="col-lg-12">
                                 <div class="floating-input form-group">
                                    <input class="form-control" type="text" name="email" id="email" required />
                                    <label class="form-label" for="email">Email</label>
                                 </div>
                              </div>
                              <div class="col-lg-12">
                                 <div class="floating-input form-group">
                                    <input class="form-control" type="password" name="password" id="password" required />
                                    <label class="form-label" for="password">Password</label>
                                 </div>
                              </div>
                              <div class="col-lg-6">
                                 <div class="custom-control custom-checkbox mb-3 text-left">
                                    <input type="checkbox" class="custom-control-input" id="customCheck1">
                                    <label class="custom-control-label" for="customCheck1">Remember Me</label>
                                 </div>
                              </div>
                              <div class="col-lg-6">
                                 <router-link :to="{name: 'auth.recover-password'}" class="text-primary float-right">Forgot Password?</router-link>
                              </div>
                           </div>
                           <button type="submit" class="btn btn-primary">Sign In</button>
                           <p class="mt-3">
                              Create an Account <router-link :to="{name: 'auth.register'}" class="text-primary">Sign Up</router-link>
                           </p>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
</template>
<script>
export default {
    name:'SignIn',
    methods: {
    onSubmit () {
      this.$router.push({name: 'layout.dashboard'})
    }
   }
}
</script>