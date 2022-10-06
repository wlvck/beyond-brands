<template>
    <section class="login-content">
         <div class="container-fluid h-100">
            <div class="row justify-content-center align-items-center height-self-center">
               <div class="col-md-5 col-sm-12 col-12 align-self-center">
                  <div class="card">
                     <div class="card-body text-center">                        
                        <h2>Success !</h2>
                        <p class="cnf-mail m-auto mb-1">A email has been send to youremail@domain.com. Please check for an
                           email from company and click
                           on the included link to reset your password.</p>
                        <div class="d-inline-block w-100">
                           <router-link :to="{name:'layout.dashboard'}" type="submit" class="btn btn-primary mt-3">Back to Home</router-link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
</template>
<script>
export default {
    name:'ConfirmMail'
}
</script>