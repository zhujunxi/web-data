<template>
	<div>
		<div class="side-logo">
			<img src="@/assets/logo.png" alt srcset />
			<h1>Data System</h1>
		</div>
		<div class="md-menu">
			<router-link
				class="md-menu-item"
				:class="{active: activePath == item.children[0].path}"
				:to="item.children[0].path"
				tag="div"
				v-for="item,index of routerMap"
				:key="index"
			>
				<i :class="item.children[0].meta.icon"></i>
				<span>{{item.children[0].meta.title}}</span>
			</router-link>
		</div>
	</div>
</template>

<script>
import routerMap from "@/router/module/routerMap";
export default {
	name: "",
	data() {
		return {
			routerMap: routerMap,
			activePath: this.$router.history.current.path
		};
	},
	watch: {
		$route(to, from) {
			this.activePath = to.path;
		}
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

.md-menu {
	.md-menu-item {
		font-size: 16px;
		padding: 16px 12px 16px 16px;
		color: rgba(255, 255, 255, 0.7);
		cursor: pointer;
		&:hover,
		&:active,
		&.active {
			background: #131e25;
		}
		span {
			padding-left: 8px;
		}
	}
}
</style>