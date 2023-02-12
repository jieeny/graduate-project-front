<template>
    <div class="all">
      <div class="top">
        <div class="home-content-top">
			    <div>
				    <div class="home-top-logo">
					    <img src="@/assets/images/sign.png" alt="">
				    </div>
				    <div class="home-top-menu">
					    <slot name="bottomTable">
						    <router-link :to="{name:item.router}" v-for="(item,i) in menus" :key="i" :class="allMenu==i+1?'active':''">{{item.name}}</router-link>
					    </slot>
				    </div>
				    <div class="home-top-user">
					    <img v-show="msg>0" src="@/assets/images/msg.png" alt="">
					    <img v-show="msg==0" src="@/assets/images/noMsg.png" alt="">
					    <p v-show="user.name != null">
						    <span>欢迎您 , </span>
						    <span>{{user.name}}</span>
					    </p>
					    <p v-show="user.name === null">
						    <router-link to="/">登录</router-link>
						    <router-link to="/">注册</router-link>
					    </p>
				    </div>
			    </div>
		    </div>
      </div>
  
      <div class="scrollbar">
        <img src="../assets/images/default_carousel_picture.png" alt=""/>
      </div>
  
      <div class="main">
        <div class="right">
          <div class="right-top">
            <TreatmentProcess></TreatmentProcess>
          </div>
          <div class="right-bottom">
            <div v-show="this.$store.state.active === 0">
              <Department></Department>
            </div>
            <div v-show="this.$store.state.active === 1">
              <MedicalInformation></MedicalInformation>
            </div>
            <div v-show="this.$store.state.active === 2">
              <Fee></Fee>
            </div>
            <div v-show="this.$store.state.active === 3">
              <Communication></Communication>
            </div>
          </div>
        </div>
        <div class="left">
          <HelpCenter></HelpCenter>
        </div>
      </div>
  
      <div class="bottom">
            <div class="bottom1">
          网友、医生言论仅代表其个人观点，不代表本站同意其说法，本站不承担由此引起的法律责任
        </div>
            <div class="bottom2">
          医治云康互联网提供平台支持 版权所有，翻版必究 渝ICP备13001276号-6 渝公网安备 50010502000399
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  // import Header from './header'
  import TreatmentProcess from './diagnose/treatmentProcess.vue';
  import HelpCenter from './diagnose/helpCenter.vue';
  import Department from './diagnose/department.vue';
  import Communication from './diagnose/communication.vue';
  import Fee from './diagnose/fee.vue';
  import MedicalInformation from './diagnose/information.vue'
  
  export default{
    data() {
      return {
        menus:
        [
          {
						name: "首页",
						router: "index"
					},

					{
						name: "就诊记录",
						router: "medical_record"
					},
        ],
        user: 
        {
					name: window.localStorage.getItem("username")
				},
        allMenu:-1,
        msg: 0,
        imgs: 
        [
          { path: require("../assets/images/default_carousel_picture.png") },
          { path: require("../assets/images/default_carousel_picture.png") }
        ]
      };
    },
    components: {
      // Header,
      TreatmentProcess,
      HelpCenter,
      Department,
      Communication,
      Fee,
      MedicalInformation
    }
  }
  
  </script>
  
  <style>

.home-content-top {
		background: #5a75f6;
		height: 82px;
		flex-shrink: 0;
		;
        margin: 0;
	}

	.home-content-top>div {
		width: 1200px;
		margin: 0 auto;
		display: flex;
		height: 100% !important;
		justify-content: flex-start;
		align-items: center;
	}

	.home-content-top>div>div {
		height: 100%;
		display: flex;
		align-items: center;
	}

	.home-top-logo {
		margin-right: 10px;
		/* width: 25%; */
	}

	/* .home-content-top img{
		width: 80%;
		height: 80%;
	} */

	.home-top-menu {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.home-top-menu a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 200px;
		height: 100%;
		color: #f7f7ff;
		font-size: 18px;
        text-decoration: none;
	}

	.home-top-menu a.active {
		background: linear-gradient(to bottom, #767dfb, #5b5ffb);
	}

    .scrollbar{
      margin-top: 30px;
      margin-bottom: 30px;
    }
  
    .main{
      height: 780px;
      display: flex;
      width: 100%;
      margin-top: 20px;
      margin-bottom: 30px;
      background-color: rgb(238, 238, 238);
      align-items: center;
      justify-content: center;
    }
  
      
  
    .right{
      width: 800px;
      height: 730px;
      margin-right: 25px;
      margin-top: 25px;
      margin-bottom: 25px;
    }
  
    .left{
      width: 400px;
      height: 730px;
      background: white;
      margin-top: 25px;
      margin-bottom: 25px;
    }
  
    .right-top{
      height: 170px;
      width:100%;
      background: white;
      margin-bottom: 25px;
    }
  
    .right-bottom{
      height: 535px;
      width: 100%;
      background: white;
    }
  
    .bottom{
      height: 145px;
      width: 100%;
      background: #e8eff6;
        flex-shrink: 0;
  
    }
  
    .bottom1 {
      display: flex; 
          align-items: center; 
          justify-content: center;
      margin-top: 65px;
      margin-bottom: 30px;
    }
  
    .bottom2 {
      display: flex; 
          align-items: center; 
          justify-content: center;
    }
  </style>
  