<template>
    <div class=" registerPage">
        <div class="container">
            <div class="row">
                <div class="col-sm-4">

                </div>
                <div class="col-sm-4">
                    <nuxt-link to="/">
                        <div class=" text-center">
                        <a href="#"><img src="/img/logo1.png" alt=""></a>
                    </div>
                    </nuxt-link>
                    <form action="" class="mt-4">
                        <div class=" a-box a-spacing-extra-large">
                            <div class="a-box-inner">
                                <h1 class=" a-spacing-small">Create Account</h1>
                                <!-- name -->
                                <div class=" a-row a-spacing-base">
                                    <label for="ap_customer_name" class=" a-form-focus">Your name</label>
                                    <input type="text" name="" id="ap_customer_name" class=" a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info">
                                </div>

                                <!-- Email -->
                                <div class=" a-row a-spacing-base">
                                    <label for="ap_customer_name" class=" a-form-focus">Email</label>
                                    <input type="email" name="" id="ap_customer_email" class=" a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info">
                                </div>

                                <!-- Password -->
                                <div class=" a-row a-spacing-base">
                                    <label for="ap_customer_name" class=" a-form-focus">Password</label>
                                    <input type="password" name="" id="ap_customer_password" class=" a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info">
                                    <div class=" a-alert-container">
                                        <div class=" a-alert-content">Password must be atleast 8 characters</div>
                                </div>
                                    </div>
                                
                                <!-- Button -->
                                <div class=" a-row a-spacing-extra-large mb-4">
                                    <span class=" a-button-primary">
                                        <span class=" a-button-inner">
                                            <span class=" a-button-text">Create your Autohaus Account</span>
                                        </span>
                                    </span>
                                    <div class=" a-row a-spacing-top-medium a-size-small">
                                        <b>
                                            By creating an account you agree to Autohaus'
                                            <a href="#">terms and conditions</a>
                                            and
                                            <a href="#">Privacy policy</a> 
                                        </b>
                                    </div>
                                </div>
                                <hr>
                                <div class="a-row">
                                    <b>
                                        Already have an account?
                                        <nuxt-link to="/login" class=" a-link-emphasis">Sign In

                                        </nuxt-link>
                                    </b>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    layout: "none"
};
</script>