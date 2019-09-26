<template>
    <div id="footer">
    <div class="foot-btn">
		<ul>
	    	<!-- <li class="home"><a href="index.html"></a></li>
	    	<li class="write"><a href="javascript:;"></a></li>
	    	<li class="my"><a href="mydoc.html"></a></li> -->
	    <router-link tag='li' class='home' to="/home">
            <a href="javascript:;"></a>
        </router-link>
	    <router-link tag='li' class='write' to="/follow">
            <a href="javascript:;"></a>
        </router-link>
	    <router-link tag='li' class='my' to="/user-info">
            <a href="javascript:;"></a>
        </router-link>
	    </ul>
	</div>        
        
    </div>
</template>