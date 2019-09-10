<template>
	<div class="tool-home">
		<div class="tool-banner">搜索</div>
		<div class="tool-item-warp">
			<div class="tool-item" v-for="item,index of toolData" :key="index">
				<div class="tool-item-hd">{{item.label}}</div>
				<div class="tool-item-bd">
					<el-row :gutter="20">
						<el-col :span="4" v-for="citem,cindex of item.resource" :key="cindex">
							<a :href="citem.link" class="tool-cell" target="_blank">
								<!-- <img class="tool-cell-logo" :src="citem.logo" alt srcset /> -->
								<div class="tool-cell-logo" :style="getLogoStyle()">{{citem.name | namaTransformLogo}}</div>
								<div class="tool-cell-name">{{citem.name}}</div>
							</a>
						</el-col>
					</el-row>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import toolData from "./data/website";
import { generateColor } from "@/utils/utils";
export default {
	data() {
		return {
			toolData: toolData
		};
	},
	filters: {
		namaTransformLogo(value) {
			let regNumber = /^[0-9]*/g;
			let pureVal = value.replace(regNumber, "");
			return pureVal.slice(0, 1);
		}
	},
	mounted() {
		console.log(this.getColor());
	},
	methods: {
		getLogoStyle() {
			return `background:rgb${generateColor()}`;
		}
	}
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/variable.less";
.tool-banner {
	width: 100%;
	height: 220px;
	background: rgba(0, 0, 0, 0.18);
	display: flex;
	justify-content: center;
	align-items: center;
}
.tool-item-warp {
	padding: 12px;
}
.tool-item {
	background: #fff;
	border-radius: 2px;
	box-shadow: 0px 1px 2px 0 rgba(0, 0, 0, 0.1);
	margin-bottom: 20px;
	&-hd {
		font-size: 16px;
		color: @primary-color;
		display: flex;
		justify-content: space-between;
		padding: 16px 12px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.04);
	}
	&-bd {
		padding: 24px 20px;
	}
}

.tool-cell {
	border: 1px solid rgba(0, 0, 0, 0.08);
	border-radius: 2px;
	padding: 16px 12px;
	display: flex;
	align-items: center;
	cursor: pointer;
	text-decoration: none;
	&-logo {
		width: 30px;
		height: 30px;
		border: 2px solid rgba(0, 0, 0, 0.04);
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 16px;
		font-weight: bold;
		color: #fff;
	}
	&-name {
		color: #666;
		padding-left: 12px;
	}
	&:hover {
		color: @primary-color;
		box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.04);
	}
}
</style>