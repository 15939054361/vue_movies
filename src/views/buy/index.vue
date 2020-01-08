<template>
	<div class="buys">
		<!-- 头部信息栏 -->
		<div class="header">
			<span class="back" @click="$router.go(-1)">
				<img src="@/assets/imgs/icons/arr-left.png" alt />
			</span>
			<div class="user">
				<img :src="user.url" alt />
				<span>hi,{{user.username}}</span>
			</div>
		</div>

		<div class="wrapper" ref="wrapper">
			<div class="inner">
		<!-- 购票窗口 -->
		<div class="center">
			<div class="search blocks">
				<input type="text" placeholder="试试搜索影片" />
				<span class="go">
					<img src="@/assets/imgs/icons/arr-right.png" alt />
				</span>
			</div>
			<div class="cinema blocks" @click="$router.push('/cinema/map')">
				<span class="cname bigw">{{cinema.name}}</span>
				<span class="go">
					<img src="@/assets/imgs/icons/arr-right.png" alt />
				</span>
				<img class="pot" src="@/assets/imgs/mine/position.png" alt />
			</div>
			<div class="time blocks">
				<span class="times bigw">{{time.month}}月{{time.day}}日</span>
				<span class="times smw">{{time.time}}{{time.noon}}</span>
				<span class="go">
					<img src="@/assets/imgs/icons/arr-right.png" alt />
				</span>
				<span class="more">更多场次</span>
			</div>
			<div class="choose blocks">
				<div class="offs">
					<input type="checkbox" name="offs" value />
					<span>特惠票</span>
				</div>
				<div class="seat">
					<input type="checkbox" name="seat" value />
					<span>推荐座位</span>
				</div>
			</div>
			<div class="button blocks" @click="$router.push('/cinemaInfo')">购票</div>
			<div class="history blocks">
				<p v-for="m in history" :key="m.key">{{m.name}}</p>
				<p>清除历史</p>
			</div>
		</div>
		<!-- 特惠票 -->
		<div class="offer">
			<div class="tops">
				<span>特惠票</span>
				<p>
					更多优惠
					<img src="@/assets/imgs/icons/arr-right.png" alt />
				</p>
			</div>
			
				<ul class="content">
					<li v-for="m in offers" :key="m.id">
						<div class="times">
							<p class="stime">{{m.startTime}}</p>
							<p class="etime">{{m.endTime}}散场</p>
						</div>
						<div class="info">
							<p class="title">{{m.title}}</p>
							<p class="site">{{m.site}}</p>
						</div>
						<div class="price">{{m.price}}元</div>
						<div class="buybtn">购票</div>
					</li>
				</ul>
			
		</div>
		</div>
		</div>
	</div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
	props: {},
	data() {
		return {
			user: {
				username: 'znkk',
				url: require('@/assets/imgs/mine/user.png')
			},
			cinema: {
				name: '万达影城'
			},
			time: {
				month: 5,
				day: 9,
				time: '1:34',
				noon: 'pm'
			},
			history: [
				{
					id: 1,
					name: '一条狗的使命'
				},
				{
					id: 2,
					name: '我是药神'
				}
			],
			offers: [
				{
					id: 1,
					startTime: '18:15',
					endTime: '21:16',
					title: '复仇者联盟',
					site: '万达影城6号激光厅',
					price: '40.9'
				},
				{
					id: 2,
					startTime: '9:15',
					endTime: '11:16',
					title: '孙悟空三打红蜘蛛',
					site: '半人马座α-7102影院',
					price: '20'
				},
				{
					id: 3,
					startTime: '3:45',
					endTime: '5:59',
					title: '擎天柱大闹长坂坡',
					site: '致远星电影城',
					price: '120'
				},
				{
					id: 4,
					startTime: '12:15',
					endTime: '13:16',
					title: '米老鼠智斗哈利波特',
					site: '大马猴子村村东头空地',
					price: '0.5'
				},
				{
					id: 5,
					startTime: '0:00',
					endTime: '24:00',
					title: '#%$$@@$#$',
					site: '#@$%#^$@$%!$%#$',
					price: '55.5'
				}
			]
		}
	},
	computed: {},
	created() {},
	mounted() {
		this.$nextTick(() => {
		let scroll = new BScroll(this.$refs.wrapper, {
			scrollY: true,
			click: true
		})})
	},
	watch: {},
	methods: {},
	components: {}
}
</script>

<style scoped lang="scss">

.header {
	width: calc(100% - 40px);
	height: 50px;
	padding: 15px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.back {
		width: 18px;
		height: 18px;
		img {
			width: 100%;
			height: 100%;
		}
	}
	.user {
		height: 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		img {
			width: 33px;
			height: 33px;
			margin-right: 10px;
		}
		span {
			line-height: 50px;
			font-size: 12px;
			font-family: PingFangSC-Medium, PingFang SC;
			font-weight: 500;
			color: rgba(255, 255, 255, 1);
		}
	}
}
.go {
	width: 12px;
	height: 12px;
	position: absolute;
	right: 82px;
	top: 18px;
	img {
		width: 12px;
		height: 12px;
	}
}

.center {
	width: 336px;
	height: 300px;
	margin: 0 auto;
	background: rgba(51, 54, 61, 1);
	border-radius: 6px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	.blocks {
		width: calc(100% - 34px);
		height: 16%;
		padding: 0 17px;
		position: relative;
		display: flex;
		align-items: center;
	}
	.search {
		input {
			width: 200px;
			height: 17px;
			font-size: 12px;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: rgba(255, 255, 255, 1);
			line-height: 17px;
			background-color: transparent;
			border: none;
			outline: none;
		}
	}
	.bigw {
		font-size: 16px;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
	}
	.smw {
		font-size: 12px;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
	}
	.cinema {
		justify-content: space-between;
		.pot {
			width: 16px;
			height: 19px;
			margin-right: 15px;
		}
	}
	.time {
		.times.bigw {
			margin-right: 10px;
		}
		.more {
			position: absolute;
			font-size: 12px;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: rgba(255, 255, 255, 0.5);
			right: 16px;
		}
	}
	.choose {
		justify-content: space-between;
		span {
			font-size: 12px;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: rgba(255, 255, 255, 0.5);
			margin-left: 8px;
		}
		input[type='checkbox'] {
			appearance: none;
			width: 18px;
			height: 18px;
			display: inline-block;
			text-align: center;
			vertical-align: top;
			line-height: 18px;
			position: relative;
			background: transparent;
			outline: none;
			margin-top: -4px;
		}
		input[type='checkbox']::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			background: transparent;
			width: 100%;
			height: 100%;
			border: 1px solid rgba(151, 151, 151, 1);
			border-radius: 2px;
		}
		input[type='checkbox']:checked::before {
			content: '\2713';
			background: linear-gradient(
				128deg,
				rgba(241, 109, 125, 1) 0%,
				rgba(242, 141, 109, 1) 100%
			);
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			border: 1px solid transparent;
			color: #fff;
			font-size: 18px;
			font-weight: bold;
			border-radius: 2px;
		}
	}
	.button {
		width: 302px;
		height: 40px;
		background: linear-gradient(
			150deg,
			rgba(242, 91, 134, 1) 0%,
			rgba(241, 172, 94, 1) 100%
		);
		box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
		border-radius: 6px;
		padding: 0;
		margin: 0 auto;
		font-size: 18px;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		line-height: 40px;
		justify-content: center;
	}
	.history {
		p {
			font-size: 12px;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: rgba(255, 255, 255, 0.5);
			margin-left: 5px;
		}
	}
}
.offer {
	.tops {
		width: calc(100% - 1.066667rem);
		height: 70px;
		padding: 0 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: white;
		span {
			font-size: 16px;
		}
		p {
			font-size: 12px;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: rgba(255, 255, 255, 0.5);
			line-height: 18px;
			img {
				width: 12px;
				height: 12px;
				vertical-align: middle;
			}
		}
	}

		.content {
			li {
				width: 336px;
				height: 70px;
				background: rgba(51, 54, 61, 1);
				border-radius: 6px;
				margin-bottom: 15px;
				display: flex;
				justify-content: space-around;
				align-items: center;
                text-align: left;
				.times {
                    
					.stime {
						font-size: 16px;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: rgba(255, 255, 255, 1);
                        margin-bottom: 6px;
					}
					.etime {
						font-size: 10px;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: rgba(255, 255, 255, 0.5);
					}
				}
				.info {
					.title {
						font-size: 16px;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: rgba(255, 255, 255, 1);
                        margin-bottom: 6px;
					}
					.site {
						font-size: 12px;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: rgba(202, 202, 202, 1);
					}
				}
				.price {
					font-size: 20px;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: rgba(251, 195, 74, 1);
				}
				.buybtn {
					width: 45px;
					height: 25px;
					background: linear-gradient(
						150deg,
						rgba(242, 91, 134, 1) 0%,
						rgba(241, 172, 94, 1) 100%
					);
					box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
					border-radius: 6px;
					font-size: 12px;
					font-family: PingFangSC-Medium, PingFang SC;
					font-weight: 500;
					color: rgba(255, 255, 255, 1);
                    text-align: center;
                    line-height: 25px;
				}
			}
		}
	
}
.buys{
	height: 100%;
}
	.wrapper {
		width: calc(100% - 1.066667rem);
		height: calc(100% - 3.2rem);
		padding: 0 20px;
		padding-bottom:120px;
		overflow: hidden;
		.inner{
			padding-bottom: 200px;
		}}
</style>
