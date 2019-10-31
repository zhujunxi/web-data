<template>
	<div class="tool-home">
		<Banner></Banner>
		<div class="tool-item-warp">
			<div class="tool-item" v-for="item,index of toolData" :key="index">
				<div class="tool-item-hd">{{item.label}}</div>
				<div class="tool-item-bd">
					<el-row :gutter="20">
						<el-col :span="4" v-for="citem,cindex of item.resource" :key="cindex">
							<template v-if="citem.link">
								<a :href="citem.link" class="tool-cell" target="_blank" :title="citem.name">
									<div class="tool-cell-logo" :style="getLogoStyle()">{{citem.name | namaTransformLogo}}</div>
									<div class="tool-cell-name">{{citem.name}}</div>
								</a>
							</template>
							<el-popover placement="top" trigger="hover" v-else-if="citem.QRCode">
								<img
									class="tool-popover-img"
									v-if="!citem.link"
									:src="require('@/assets/res/'+ citem.QRCode)"
									alt
									srcset
								/>
								<a slot="reference" class="tool-cell">
									<div class="tool-cell-logo" :style="getLogoStyle()">{{citem.name | namaTransformLogo}}</div>
									<div class="tool-cell-name">{{citem.name}}</div>
								</a>
							</el-popover>
							<el-tooltip class="item" :content="citem.tip" effect="light" v-else-if="citem.tip">
								<a class="tool-cell">
									<div class="tool-cell-logo" :style="getLogoStyle()">{{citem.name | namaTransformLogo}}</div>
									<div class="tool-cell-name">{{citem.name}}</div>
								</a>
							</el-tooltip>
						</el-col>
					</el-row>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Banner from "./components/banner"

import toolData from "./data/website";
import { generateRgbaColor } from "@/utils/utils";

export default {
	components: {
		Banner
	},
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
	methods: {
		getLogoStyle() {
			return `background:${generateRgbaColor()}`;
		}
	}
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/variable.less";
.tool-home {
	background: #f3f7fe;
	width: 100%;
}

.tool-item-warp {
	width: 1200px;
	margin: 0 auto;
	transform: translateY(-46px);
	padding: 12px;
	background: #fff;
	border-radius: 2px;
	box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
.tool-item {
	&-hd {
		font-size: 16px;
		font-weight: bold;
		color: @primary-color;
		display: flex;
		justify-content: space-between;
		padding: 10px 12px 10px 12px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.02);
	}
	&-bd {
		padding: 24px 20px;
	}
}
.tool-popover-img {
	width: 160px;
	height: 160px;
}
.tool-cell {
	color: #666;
	padding: 14px 8px;
	display: flex;
	align-items: center;
	cursor: pointer;
	text-decoration: none;
	margin-bottom: 20px;
	border-radius: 2px;
	border: 1px solid rgba(0, 0, 0, 0.06);
	transition: all 0.2s ease-in-out;
	&-logo {
		width: 20px;
		height: 20px;
		border: 2px solid rgba(0, 0, 0, 0.04);
		border-radius: 50px;
		line-height: 20px;
		text-align: center;
		flex-shrink: 0;
		font-size: 12px;
		font-weight: bold;
		color: #fff;
		text-shadow: 0 1px 0px rgba(0, 0, 0, 0.1);
	}
	&-name {
		padding-left: 6px;
		font-size: 14px;
		font-weight: bold;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	&:hover {
		color: @primary-color;
		border: 1px solid rgba(0, 0, 0, 0.12);
		box-shadow: 0px 9px 7px -5px rgba(0, 0, 0, 0.08);
		transition: all 0.2s ease-in-out;
	}
}
</style>