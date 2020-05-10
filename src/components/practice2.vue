<template>
	<div class="bigbox">
		
		<!-- 活动名称 -->
		<div class="activeName">
			<div class="">
				<p>活动名称</p>
			</div>
			<div class="activeName_input">
				<el-input style="width: 300px;" v-model="actName"></el-input>
			</div>
		</div>
		
		<!-- 活动区域 -->
		<div class="activeName">
			<div class="">
				<p>活动区域</p>
			</div>
			<div class="activeName_input">
				<el-select v-model="value" placeholder="请选择活动区域" style="width: 300px;">
					<el-option v-for="i in options" :key="i.value" :value="i.info" :label="i.info"></el-option>
				</el-select>
			</div>
		</div>
		
		<!-- 活动时间 -->
		<div class="activeName">
			<div class="">
				<p>活动时间</p>
			</div>
			<div class="activeName_input">
				<el-date-picker v-model="date" placeholder="选择日期" style="width: 144px;"></el-date-picker>
				<span>-</span>
				<el-time-picker v-model="time" placeholder="选择时间" style="width: 144px;"></el-time-picker>
			</div>
		</div>
		
		<!-- 即时配送 -->
		<div class="activeName">
			<div class="">
				<p>即时配送</p>
			</div>
			<div class="activeName_input">
				<el-switch v-model="send" active-color="#1E90FF"></el-switch>
			</div>
		</div>
		
		<!-- 活动性质 -->
		<div class="activeName">
			<div class="activeName_info">
				<span>活动性质</span>
			</div>
			<div class="activeCheckBox">
				<el-checkbox-group v-model="type">
					<el-checkbox label="美食/餐厅线上活动"></el-checkbox>
					<el-checkbox label="地推活动"></el-checkbox>
					<el-checkbox label="线下主题活动"></el-checkbox>
					<el-checkbox label="单纯品牌曝光"></el-checkbox>
				</el-checkbox-group>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				actName:'',
				value:'',
				options:[{
					value:"选项一",
					info:"活动区域一"
				},
				{
					value:"选项二",
					info:"活动区域二"
				},
				{
					value:"选项三",
					info:"活动区域三"
				},
				{
					value:"选项四",
					info:"活动区域四"
				}],
				date:'',
				time:'',
				send:'',
				type:[]
			}
		}
	}
</script>

<style>
	.bigbox{
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		/* justify-content: center; */
		border: 1px solid #42B983;
	}
	.activeName{
		display: flex;
		flex-direction: row;
		width: 400px;
		margin: 10px;
		border: 1px solid;
	}
	.activeName_info{
		/*8align-self: center; */
		display: flex;
		align-items: center;
		width: 80px;
		margin-left: 20px;
	}
	.activeName_input{
		align-self: center;
		margin-left: 10px;
	}
	.activeCheckBox{
		align-self: center;
		/* margin-left: 10px; */
		/* height: 200px; */
	}
</style>
