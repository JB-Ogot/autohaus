<template>
    <main>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-6">
                    <div class="a-section-top-medium">
                        <h2 style="text-align:center ">Add a New Product</h2>
                        <form>
                           <!-- Category Dropdown -->
                            <div class="a-spacing-top-medium">
                                <label for="">Vehicle</label>
                                <select class="a-select-option">
                                    <option value="1">BMW</option>
                                    <option value="2">Mercedes</option>
                                    <option value="1">Mini</option>
                                </select>
                            </div>

                            <!-- Owner Dropdown -->
                             <div class="a-spacing-top-medium">
                                <label for="">Series</label>
                                <select class="a-select-option">
                                    <option value="1">1 Series</option>
                                    <option value="1">2 Series</option>
                                    <option value="1">3 Series</option>
                                    <option value="1">4 Series</option>
                                    <option value="1">5 Series</option>
                                    <option value="1">6 Series</option>
                                    <option value="1">7 Series</option>
                                    <option value="1">X1 Series</option>
                                    <option value="1">X2 Series</option>
                                    <option value="1">X3 Series</option>
                                    <option value="1">X4 Series</option>
                                    <option value="1">X5 Series</option>
                                    <option value="1">X6 Series</option>
                                    <option value="1">Z4 Series</option>
                                    <option value="1">I8 Series</option>
                                </select>
                            </div>

                            <!-- Year-->
                            <div class="a-spacing-top-medium">
                                <label style="margin-bottom: 0px;">Year</label>
                                <input type="number" class="a-input-text" name="year" id="" style="width: 100%;">
                            </div>

                             <!-- Name-->
                            <div class="a-spacing-top-medium">
                                <label style="margin-bottom: 0px;">Name</label>
                                <input type="text" class="a-input-text" name="name" id="" style="width: 100%;">
                            </div>

                            <!-- Price-->
                             <div class="a-spacing-top-medium">
                                <label style="margin-bottom: 0px;">Price</label>
                                <input type="number" class="a-input-text" name="price" id="" style="width: 100%;">
                            </div>

                             <!-- Description-->
                             <div class="a-spacing-top-medium">
                                <label style="margin-bottom: 0px;">Description</label>
                                <textarea name="description" placeholder="Provide details such as product description" style="width: 100%;"></textarea>
                            </div>

                            <!-- Photo-->    
                             <div class="a-spacing-top-medium">
                                <label style="margin-bottom: 0px;">Add Photo</label>
                                <div class="a-row a-spacing-top-medium">
                                    <label class="choosefile-button">
                                        <i class="fal fal-plus"></i>
                                        <input type="file">
                                        <p style="margin-top: -70px">photo name</p>
                                    </label>
                                </div>
                            </div>

                            <!-- Button-->
                            <div class="a-spacing-top-large">
                                <span class="a-button-register">
                                    <span class="a-button-inner">
                                        <span class="a-button-text">Add Product</span>

                                    </span>
                                </span>
                            </div>


                        </form>
                    </div>
                </div>
                <div class="col-sm-3"></div>
            </div>
        </div>

    </main>
</template>

<script>
export default {
    async asyncData({ $axios }){
        try {
            let categories = $axios.$get("http://localhost/api/categories");
        let owners = $axios.$get("http://localhost/api/owners");

        const [catResponse, ownerRssponse] = await Promise.all([
            categories,
            owners
        ]);

        return {
            categories: catResponse.categories,
            owners: ownerRssponse.owners
        }
        } catch (error) {
            console.log(error);   
        }
    }

}
</script>