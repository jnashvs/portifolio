<template>
    <div>
        <div class="main-header" style="">
            <div class="container">
                <div class="row personal-profile">
                    <div class="col-md-4 col-xs-12 col-sm-4 sm-4 personal-profile__avatar">
                        <img src="/img/jorge.jpg" alt="" width="320px" height="auto">
                    </div>
                    <div class="col-md-8 col-xs-12 col-sm-8 personal-profile__info">
                        <p class="personal-profile__name">Jorge Varela</p>
                        <p class="personal-profile__work">fullstack developer, Slingshot</p>
                        <div class="personal-profile__contacts">
                            <dl class="contact-list contact-list__opacity-titles">
                                <dt>Age: <span class="dd"> 23 </span> </dt>
                                <dt>Phone: <span class="dd"> <a href="tel:965613928">(+351) 965613928</a></span> </dt>
                                <dt>Email: <span class="dd"> <a href="mailto:jnashvs@gmail.com">jnashvs@gmail.com</a></span> </dt>
                                <dt>Address: <span class="dd">  Torres Vedras, 2885-805</span> </dt>
                            </dl>
                        </div>
                        <p class="personal-profile__social">
                        <!--<a href="">
                            <i class='fab fa-facebook' style='font-size:24px'></i>
                        </a> -->
                        
                            <a href="https://www.linkedin.com/in/jorge-varela-33832917a/" target="_blank" class="btn btn-default btn-circle"><i class="fa fa-linkedin"></i></a>
                            <a href="" target="_blank" class="btn btn-default btn-circle preto"><i class="fa fa-github"></i></a>
                            <a href="https://www.facebook.com/jorge.varela.3386" target="_blank" class="btn btn-default btn-circle"><i class="fa fa-facebook"></i></a>
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    
        <div class="container">
            <div class="row">
                <div class="col-12 my-4 myresume">
                <br>
                    <h4 class=" text-uppercase">
                        Resume about me
                    </h4>
                    <br>
                    <p class="text-justify">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                        content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                        Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </p>
                </div>
            </div>
        </div>
    
    
        <div class="jumbotron container-fluid experience_div">
            <div class="container">
                <div class="row mt-0 mb-0">
                    <div class="col-12 text-uppercase">
                        EDUCATION
                    </div>
                    <hr>
                    <div class="col-12 my-4">
                        <div class="col-md-4">
                            <p class="font-weight-bold experiences-tittle">Universidade</p>
                        </div>
                        <div class="col-md-8">
                            <p>
                                Licenciatura - Engenharia de Sistemas - Jean Piaget de Cabo Verde
                                <br>
                                <small class="text-right">2014 - 2018</small>
                            </p>
                            <p>
                                Mestrado - Engenharia Informática - Universidade Trás os Montes e Alto Douro
                                <br>
                                <small class="text-right">2019 - Atual</small>
                            </p>
    
                        </div>
                    </div>
    
                    <div class="col-12">
                        <div class="col-md-4">
                            <p class="font-weight-bold experiences-tittle">Secundária</p>
                        </div>
                        <div class="col-md-8">
                            <p>Ensino secundária - Ciências e Tecnologia - Escola Secundária de Chão Bom
                                <br>
                                <small class="text-right">2014 - 2018</small>
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

        <div data-spy="scroll" data-target="#list-example" data-offset="0">
          <h4 id="list-item-1">Item 1</h4>
          <p>...</p>
          <h4 id="list-item-2">Item 2</h4>
          <p>...</p>
          <h4 id="list-item-3">Item 3</h4>
          <p>...</p>
          <h4 id="list-item-4">Item 4</h4>
          <p>...</p>
        </div>
    
    </div>
</template>
<script>
export default {
    name: 'About',

}
</script>
