<template>
	<div>
		<div class="side-logo">
			<img src="@/assets/logo.png" alt srcset />\
			<h1>Data System</h1>
		</div>
		<el-menu default-active="2" :collapse="false" class="el-menu-vertical-side">
			<el-submenu index="1">
				<template slot="title">
					<i class="el-icon-location"></i>
					<span>导航一</span>
				</template>
				<el-menu-item-group>
					<template slot="title">分组一</template>
					<el-menu-item index="1-1">选项1</el-menu-item>
					<el-menu-item index="1-2">选项2</el-menu-item>
				</el-menu-item-group>
				<el-menu-item-group title="分组2">
					<el-menu-item index="1-3">选项3</el-menu-item>
				</el-menu-item-group>
				<el-submenu index="1-4">
					<template slot="title">选项4</template>
					<el-menu-item index="1-4-1">选项1</el-menu-item>
				</el-submenu>
			</el-submenu>
		</el-menu>
	</div>
</template>

<script>
export default {
	name: "",
	data() {
		return {};
	}
};
</script>

<style lang="less" scoped>
.side-logo {
	width: 100%;
	height: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #002140;
	img {
		width: 30px;
		height: 30px;
	}
	h1 {
		color: #fff;
		font-size: 16px;
	}
}
.el-menu-vertical-side {
	background-color: #1b2b36;
	color: rgba(255, 255, 255, 1);
	border: none;
	:hover {
		background-color: #1b2b36;
	}
}
</style>