<template>
	<div>
		<!-- 头部信息栏 -->
		<div class="header">
			<span class="back" @click="$router.go(-1)">
				<img src="@/assets/imgs/icons/arr-left.png" alt />
			</span>
			<span class="tit">我的订单</span>
			<p class="edi">编辑</p>
		</div>
		<!-- 导航栏 -->
		<div class="bar">
			<div class="item" :class="{'act':showWhat==0}" @click="showWhat=0">
				<span class="text">全部</span>
				<span class="lines"></span>
			</div>
			<div class="item" :class="{'act':showWhat==1}" @click="showWhat=1">
				<span class="text">待付款</span>
				<span class="lines"></span>
			</div>
			<div class="item" :class="{'act':showWhat==2}" @click="showWhat=2">
				<span class="text">待评价</span>
				<span class="lines"></span>
			</div>
			<div class="item" :class="{'act':showWhat==3}" @click="showWhat=3">
				<span class="text">退款</span>
				<span class="lines"></span>
			</div>
		</div>
		<!-- 订单列表 -->
		<div class="center" ref="wrapper">
			<ul class="list">
				<li
					class="item"
					v-for="m in orderlists"
					:key="m.id"
					v-show="showWhat==0?true:m.status==showWhat"
					@click="$router.push('/myticket')"
				>
					<div class="status">{{sta(m.status)}}</div>
					<div class="cinema">
						{{m.cinema}}
						<img src="@/assets/imgs/icons/arr-right.png" alt />
					</div>
					<div class="info">
						<img :src="m.url" alt />
						<p class="tops">
							<span class="title">{{m.title}}</span>
							<span class="num">{{m.num}}张</span>
						</p>
						<p class="time">{{m.month}}月{{m.day}}日&nbsp;{{m.time}}</p>
						<p class="seat">
							{{m.pos}}
							<span v-for="n in m.seats" :key="n">&nbsp;{{n}}&nbsp;</span>
						</p>
					</div>
					<div class="price">总价:{{m.price*m.num}}元</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
	props: {},
	data() {
		return {
			showWhat: 0,
			scroll: null,
			orderlists: [
				{
					id: Math.random(),
					cinema: '万达国际影城',
					title: '后来的我们',
					url: require('../../assets/imgs/orders/film1.png'),
					num: 2,
					price: 35,
					month: '05',
					day: '16',
					time: '17:00',
					pos: '五号厅',
					seats: ['5排14座', '5排15座'],
					status: 0
				},
				{
					id: Math.random(),
					cinema: '大铁坨子村南口动物园',
					title: '帕丁顿熊',
					url: require('../../assets/imgs/orders/film2.png'),
					num: 2,
					price: 20,
					month: '05',
					day: '16',
					time: '17:00',
					pos: '五号厅',
					seats: ['5排14座', '5排15座'],
					status: 1
				},
				{
					id: Math.random(),
					cinema: '海里',
					title: '大海鱼塘',
					url: require('../../assets/imgs/orders/film3.png'),
					num: 2,
					price: 50,
					month: '05',
					day: '16',
					time: '17:00',
					pos: '水里',
					seats: ['1排1座', '1排2座'],
					status: 2
				},
				{
					id: Math.random(),
					cinema: '梵高纪念馆',
					title: '星空',
					url: require('../../assets/imgs/orders/film4.png'),
					num: 3,
					price: 45,
					month: '05',
					day: '16',
					time: '17:00',
					pos: '五号厅',
					seats: ['5排14座', '5排15座', '5排16座'],
					status: 3
				},
				{
					id: Math.random(),
					cinema: '花果山水帘洞',
					title: '孙悟空三打红蜘蛛',
					url: require('../../assets/imgs/orders/film1.png'),
					num: 1,
					price: 35,
					month: '05',
					day: '16',
					time: '17:00',
					pos: '四号厅',
					seats: ['5排15座'],
					status: 1
				},
				{
					id: Math.random(),
					cinema: '梵高纪念馆',
					title: '星空',
					url: require('../../assets/imgs/orders/film4.png'),
					num: 3,
					price: 45,
					month: '05',
					day: '16',
					time: '17:00',
					pos: '五号厅',
					seats: ['5排14座', '5排15座', '5排16座'],
					status: 3
				},
				{
					id: Math.random(),
					cinema: '大铁坨子村南口动物园',
					title: '帕丁顿熊',
					url: require('../../assets/imgs/orders/film2.png'),
					num: 2,
					price: 20,
					month: '05',
					day: '16',
					time: '17:00',
					pos: '五号厅',
					seats: ['5排14座', '5排15座'],
					status: 1
				},
				{
					id: Math.random(),
					cinema: '海里',
					title: '大海鱼塘',
					url: require('../../assets/imgs/orders/film3.png'),
					num: 2,
					price: 50,
					month: '05',
					day: '16',
					time: '17:00',
					pos: '水里',
					seats: ['1排1座', '1排2座'],
					status: 2
				},
				{
					id: Math.random(),
					cinema: '梵高纪念馆',
					title: '星空',
					url: require('../../assets/imgs/orders/film4.png'),
					num: 3,
					price: 45,
					month: '05',
					day: '16',
					time: '17:00',
					pos: '五号厅',
					seats: ['5排14座', '5排15座', '5排16座'],
					status: 3
				},
				{
					id: Math.random(),
					cinema: '大铁坨子村南口动物园',
					title: '帕丁顿熊',
					url: require('../../assets/imgs/orders/film2.png'),
					num: 2,
					price: 20,
					month: '05',
					day: '16',
					time: '17:00',
					pos: '五号厅',
					seats: ['5排14座', '5排15座'],
					status: 1
				},
				{
					id: Math.random(),
					cinema: '梵高纪念馆',
					title: '星空',
					url: require('../../assets/imgs/orders/film4.png'),
					num: 3,
					price: 45,
					month: '05',
					day: '16',
					time: '17:00',
					pos: '五号厅',
					seats: ['5排14座', '5排15座', '5排16座'],
					status: 3
				},{
					id: Math.random(),
					cinema: '花果山水帘洞',
					title: '孙悟空三打红蜘蛛',
					url: require('../../assets/imgs/orders/film1.png'),
					num: 1,
					price: 35,
					month: '05',
					day: '16',
					time: '17:00',
					pos: '四号厅',
					seats: ['5排15座'],
					status: 1
				},{
					id: Math.random(),
					cinema: '花果山水帘洞',
					title: '孙悟空三打红蜘蛛',
					url: require('../../assets/imgs/orders/film1.png'),
					num: 1,
					price: 35,
					month: '05',
					day: '16',
					time: '17:00',
					pos: '四号厅',
					seats: ['5排15座'],
					status: 1
				}
			]
		}
	},
	computed: {},
	created() {
		this.showWhat=this.$route.query.shows
	},
	mounted() {
		this.$nextTick(() => {
		this.scroll = new BScroll(this.$refs.wrapper, {
			scrollY: true,
			click: true
		})
		})
	},
	updated() {
		this.scroll.refresh()
	},
	watch: {},
	methods: {
		sta(e) {
			if (e == 0) {
				return '已完成'
			}
			if (e == 1) {
				return '待付款'
			}
			if (e == 2) {
				return '待评价'
			}
			if (e == 3) {
				return '等待退款'
			} else {
				return '错误订单'
			}
		}
	},
	components: {}
}
</script>

<style scoped lang="scss">
.header {
	width: calc(100% - 40px);
	height: 50px;
	padding: 15px 20px;
	position: relative;
	.edi {
		position: absolute;
		top: 30px;
		right: 20px;
		width: 42px;
		height: 20px;
		border-radius: 2px;
		border: 1px solid rgba(249, 195, 74, 1);
		color: rgba(249, 195, 74, 1);
		font-size: 14px;
		line-height: 20px;
	}
	.back {
		position: absolute;
		top: 30px;
		left: 20px;
		width: 18px;
		height: 18px;
		img {
			width: 100%;
			height: 100%;
		}
	}
	.tit {
		font-size: 20px;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		margin: 0 auto;
		line-height: 50px;
	}
}

.bar {
	width: calc(100% - 40px);
	height: 30px;
	padding: 0 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.item {
		text-decoration: none;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.text {
			font-size: 14px;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: rgba(255, 255, 255, 1);
			margin-bottom: 8px;
		}
		.lines {
			width: 0;
			height: 3px;
			background: rgba(249, 195, 74, 1);
			border-radius: 2px;
			transition: all 0.4s ease;
		}
		&.act {
			.text {
				color: rgba(249, 195, 74, 1);
			}
			.lines {
				width: 26px;
			}
		}
	}
}
.center {
	width: 100%;
	margin: 10px auto;
	height: 530px;
	overflow: hidden;
	color: #fff;
	.list {
		.item {
			width: 335px;
			height: 161px;
			background: rgba(51, 54, 61, 1);
			border-radius: 6px;
			margin: 20px auto;
			position: relative;
			.status {
				font-size: 14px;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: rgba(255, 255, 255, 1);
				line-height: 14px;
				position: absolute;
				right: 17px;
				top: 17px;
			}
			.cinema {
				position: absolute;
				left: 14px;
				top: 17px;
				img {
					width: 12px;
					height: 12px;
					vertical-align: middle;
				}
			}
			.info {
				width: calc(100% - 100px);
				padding-left: 100px;
				padding-top: 54px;
				display: flex;
				flex-direction: column;
				align-items: left;
				img {
					width: 70px;
					height: 81px;
					position: absolute;
					left: 14px;
					top: 40px;
				}
				.tops {
					width: 150px;
					font-size: 14px;
					font-family: PingFangSC-Medium, PingFang SC;
					font-weight: 500;
					color: rgba(255, 255, 255, 1);
					line-height: 14px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 10px;
				}
				.time,
				.seat {
					font-size: 12px;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: rgba(255, 255, 255, 0.5);
					line-height: 14px;
					margin-bottom: 6px;
				}
			}
		}
		.price {
			font-size: 12px;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: rgba(255, 255, 255, 0.5);
			line-height: 12px;
			position: absolute;
			left: 14px;
			bottom: 16px;
		}
	}
}
</style>
