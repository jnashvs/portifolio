<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="/">Home</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
    
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <router-link to="/">About me</router-link>
                    </li>
                    <li class="nav-item">
  <!--<a class="list-group-item list-group-item-action" href="#list-item-1">Experiences</a>-->
                         <router-link to="#list-item-1">Experiences</router-link> 
                    </li>
                    <li class="nav-item">
                        <router-link to="/projects">Projects</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/articles">Articles</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contact-me">Contact me</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',

}
</script>
