<template>
  <main class="listingPage">
    <div class="a-section a-spacing-none">
      <div class="row">
        <div id="myCarousel" class=" carousel" data-ride="carousel">
          <!-- Indicators -->
          <ol class=" carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>

          <!-- Wrapper for slides -->
          <div class=" carousel-inner">
            <div class=" carouselItem">
              <img class=" carouselImg" src="/img/red.jpg" alt="Los Angeles" height="300px" width="1000px"/>
            </div>

            <div class="carousel-item">
              <img class=" carouselImg" src="b.jpg" alt="Chicago" />
            </div>

            <div class="carousel-item">
              <img class=" carouselImg" src="blue-bmw-2.jpg" alt="New York" />
            </div>
          </div>

          <!-- Left and right controls -->
          <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>

    <!-- <div class="row">
        <div class=" col-xl-2 col-lg-3 md-4 col-sm-4">
    sidebar-->
    <!-- </div> -->

    <!-- main content -->
    <!-- <div class="col-xl-10 col-lg-9 md-8 col-sm-8">
          <Featuredproduct />
         
          <div class=" mainContent">
            
            <ul class=" s-result-list">
              <li class=" s-result-item celwidget">
    <div class=" s-item-container">-->
    <!-- Best seller -->
    <!-- <div class=" a-spacing-micro">
                    <div class=" bestSeller">
                      <a href="#">Best Seller</a>
                    </div>
                  </div>
                  <div>
    <div class="row">-->
    <!-- image -->
    <!-- <div class="col-sm-3 text-center">
                        <a href="#">
                          <img src="/img/spring.jpeg" alt="" class="img-fluid">
                        </a>
                      </div>
                      <div class="col-sm-9">
    <div class="a -row a-spacing-small">-->
    <!-- Title and date -->
    <!-- <a href="#" class=" a-link-normal">
                            <h2 class=" a-size-medium">
                              Springs
                              <span class=" a-letter-space"></span>
                              <span class=" a-letter-space"></span>
                              <span class=" a-size-small a-color-secondary">Jul 23, 2020</span>
                            </h2>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </li>
            </ul>
          </div>
        </div>
    </div>-->
  </main>
</template>

<script>
import Featuredproduct from "~/components/Featuredproduct";
export default {
  component: {
    Featuredproduct
  }
};
</script>

<style>
</style>
