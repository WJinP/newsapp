<template>
    <div id="nav">
    <div class="nav">
      <ul>
        <!-- <li class="active">
          <a href="javascript:;">首页</a></li>
          <li><a href="javascript:;">关注</a></li>
          <li><a href="javascript:;">栏目</a></li> -->
          <router-link tag='li' active-class='active' to="/home">
          <a href="javascript:;">首页</a>
          </router-link>
          <router-link tag='li' active-class='active' to="/follow">
          <a href="javascript:;">关注</a>
          </router-link>
          <router-link tag='li' active-class='active' to="/column">
          <a href="javascript:;">栏目</a>
          </router-link>
      </ul>
    </div>             
    </div>
</template>
