<template>
    <div id="banner">
      <div class="banner">
        <ul class="clearfix">
          <li>
            <img src="../assets/images/img_1.jpg" alt="">
            <div class="text-box">
              <h2>还可以降低首付款校验11</h2>
              <p>卢德华11</p>
            </div>
          </li>
          <li>
            <img src="../assets/images/img_2.jpg" alt="">
            <div class="text-box">
              <h2>还可以降低首付款校验22</h2>
              <p>卢德华22</p>
            </div>
          </li>
          <li>
            <img src="../assets/images/img_3.jpg" alt="">
            <div class="text-box">
              <h2>还可以降低首付款校验333</h2>
              <p>卢德华33</p>
            </div>
          </li>
        </ul>
        <ol>
            <li class="active"></li>
            <li></li>
            <li></li>
            <li></li>
        </ol>
      </div>        
    </div>
</template>
<script>
export default {
      mounted() {
    this.slider();
  },
  methods: {
    slider(){
      $(function(){
        var mySwipe=Swipe($('.banner')[0],{
          auto:2000,
          continuous:true,
          stopPropagation:true,
          callback:function(index,element){
            $('.banner ol li').removeClass('active');
            $('.banner ol li').eq(index).addClass('active');

          }
        });
      });
    }
  }
}
</script>