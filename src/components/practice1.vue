<template>
	<div>
	<center>
		<div class="box">
			<div class="login">
				<p class="login_txt">立即登录</p>
			</div>
			
			<div class="login_admin">
				<el-input v-model="user" placeholder="请输入账号"></el-input>
			</div>
			<div class="login_pwd">
				<el-input v-model="pwd" placeholder="请输入密码"></el-input>
			</div>
			
			<div class="login_btn">
				<el-button style="background: #6495ED;color: white">立即登录</el-button>
			</div>
		</div>
	</center>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				user:'',
				pwd:''
			}
		}
	}
</script>

<style>
	.box{
		display: flex;
		flex-direction: column;
		width: 320px;
		height: 380px;
		border-radius: 10px;
		/* border: 1px solid; */
	}
	.login{
		display: flex;
		width: 320px;
		height: 80px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		align-items: center;
		justify-content: center;
		background-color: cornflowerblue;
	}
	.login_txt{
		color: white;
		font-size: 18px;
	}
	.login_admin{
		/* display: flex;
		align-items: center;
		justify-content: center; */
		margin: 30px 10px 15px;
	}
	.login_pwd{
		margin: 0px 10px;
	}
	.login_btn{
		margin: 25px;
	}
	
</style>
