<template>
   <section class="login-content">
         <div class="container h-100">
            <div class="row justify-content-center align-items-center height-self-center">
               <div class="col-md-5 col-sm-12 col-12 align-self-center">
                  <div class="card">
                     <div class="card-body text-center">                         
                        <h2>Hi ! Barry Tech</h2>
                        <p>Enter your password to access the admin.</p>
                        <form @submit.prevent="onSubmit()">
                           <div class="row">
                              <div class="col-lg-12">
                                 <div class="floating-input form-group">
                                    <input class="form-control" type="password" name="password" id="password" required />
                                    <label class="form-label" for="password">Password</label>
                                 </div>
                              </div>
                           </div>
                           <button type="submit" class="btn btn-primary">Login</button>
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
    name:'LockScreen',
    methods: {
      onSubmit () {
         this.$router.push({name: 'layout.dashboard'})
      }
  }
}
</script>