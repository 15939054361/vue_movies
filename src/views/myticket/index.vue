<template>
	<div class="ticket">
		<!-- 头部信息栏 -->
		<div class="header">
			<span class="back" @click="$router.go(-1)">
				<img src="@/assets/imgs/icons/arr-left.png" alt />
			</span>
			<span class="tit">我的影票</span>
		</div>
		<!-- 白底票图案中心内容 -->
		<div class="content">
			<div class="info">
				<p class="title">{{infos.title}}</p>
				<p
					class="infos"
				>{{infos.days}} {{infos.date}} {{infos.startTime}}-{{infos.endTime}} ({{infos.language}}{{infos.threeD}})</p>
				<p class="infos">{{infos.cinema}}</p>
				<p class="infos">{{infos.seat}}</p>
				<img :src="infos.url" alt />
			</div>
			<div class="line1"></div>
			<div class="get">
				<div class="getids">
					<span>取票码</span>
					<div class="ids">{{infos.code}}</div>
					<div class="price">{{infos.price}}元</div>
				</div>
				<img :src="infos.codepic" alt />
				<div class="nums">{{infos.num}}张电影票</div>
			</div>
			<div class="line2"></div>
			<div class="cinemas">
				<div class="cin">
					<p class="cname">{{infos.cinema}}</p>
					<p class="cadress">{{infos.cadd}}</p>
				</div>
				<div class="rights">
					<p class="far">
						{{infos.far}}
						<span>km</span>
					</p>
					<img src="@/assets/imgs/ticket/phone.png" alt />
				</div>
			</div>
		</div>
		<div class="bg1"></div>
		<div class="bg2"></div>
	</div>
</template>

<script>
export default {
	props: {},
	data() {
		return {
			infos: {
				id: 1,
				title: '后来的我们',
				url: require('@/assets/imgs/ticket/film1.png'),
				days: '今天',
				date: '5-8',
				startTime: '12:00',
				endTime: '13:56',
				language: '英语',
				threeD: '3D',
				cinema: '耀莱成龙影城（建业店）',
				cadd: '地址：云龙区万达广场3层',
				seat: '1号激光厅 7排12座 7排13座',
				code: '284856992589858F',
				codepic: require('@/assets/imgs/ticket/codes.png'),
				price: '33',
				num: 2,
				far: 1.3
			}
		}
	},
	computed: {},
	created() {},
	mounted() {},
	watch: {},
	methods: {},
	components: {}
}
</script>

<style scoped lang="scss">
.ticket {
	color: #fff;
}
.header {
	width: calc(100% - 40px);
	height: 50px;
	padding: 15px 20px;
	position: relative;
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
.content {
	position: relative;
	z-index: 3;
	width: 274px;
	height: 453px;
	background-image: url('../../assets/imgs/ticket/ticket.png');
	background-size: contain;
	margin: 0 auto;
	padding: 33px;
	.info {
		width: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		.title {
			font-size: 18px;
			font-family: PingFangSC-Semibold, PingFang SC;
			font-weight: 600;
			color: rgba(58, 58, 58, 1);
			margin-bottom: 16px;
		}
		.infos {
			font-size: 12px;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: rgba(58, 58, 58, 1);
			margin-bottom: 12px;
		}
		img {
			width: 78px;
			height: 114px;
			position: absolute;
			right: -2px;
			top: -7px;
		}
	}
	.line1 {
		width: 268px;
		height: 0px;
		margin: 0 auto;
		margin-top: 40px;
		border-top: 1px #979797 dashed;
	}
	.line2 {
		width: 320px;
		height: 0px;
		margin: 0 auto;
		margin-top: 10px;
		margin-left: -24px;
		border-top: 1px #979797 dashed;
	}
	.get {
		width: 100%;
		margin-top: 20px;
		.getids {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			span {
				font-size: 14px;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: rgba(58, 58, 58, 1);
			}
			.ids {
				width: 162px;
				height: 21px;
				background: rgba(255, 255, 255, 0.5);
				border-radius: 3px;
				color: #000;
				font-size: 14px;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: rgba(58, 58, 58, 1);
				line-height: 21px;
				border: 1px solid rgba(151, 151, 151, 0.39);
			}
			.price {
				font-size: 14px;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: rgba(58, 58, 58, 1);
			}
		}
		img {
			margin: 18px 0;
			width: 144px;
			height: 144px;
		}
		.nums {
			font-size: 10px;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: rgba(58, 58, 58, 0.5);
		}
	}
	.cinemas {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 16px;
		.cin {
			.cname {
				font-size: 14px;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: rgba(58, 58, 58, 1);
				margin-bottom: 10px;
			}
			.cadress {
				font-size: 12px;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: rgba(58, 58, 58, 1);
				margin-left: -16px;
			}
		}
		.rights {
			.far {
				font-size: 16px;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: rgba(58, 58, 58, 1);
				letter-spacing: -0.5px;
				margin-bottom: 5px;
				span {
					font-size: 12px;
				}
			}
			img {
				width: 18px;
				height: 19px;
			}
		}
	}
}
.bg1 {
	position: relative;
	width: 294px;
	height: 50px;
	margin: 0 auto;
	background: rgba(129, 126, 126, 1);
	border-radius: 10px;
	margin-top: -50px;
	z-index: 2;
}
.bg2 {
	position: relative;
	width: 268px;
	height: 50px;
	margin: 0 auto;
	background: rgba(82, 80, 80, 1);
	border-radius: 10px;
	margin-top: -40px;
}
</style>
