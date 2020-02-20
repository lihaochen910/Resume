<template>
	<v-card
			color="grey lighten-4"
			light
	>
		<v-card-text class="text-xs-center">
			<h4>我的简历至此已经结束，但是我的生涯还在继续</h4>
			<div>如果还有兴趣可以往下看看我的future!</div>
			<content-section>

				<v-layout column justify-space-around>
					<v-flex v-for="(item, i) in items" :key="i" large>

						<template>
							<v-card
									class="mx-auto"
							>
								<v-card-text>
									<v-layout wrap>
										<v-flex
												:md7="!!item.image"
												:md12="!item.image"
												xs12
												align-self-center
										>
											<div class="mr-1">
											<span
												  v-if="item.text"
												  class="pre"
											>{{ item.text }}</span>
											<!-- eslint-disable vue/no-v-html -->
											<div
													v-else-if="item.html"
													v-html="item.html"
											/>
											<!-- eslint-enable vue/no-v-html -->
											</div>
										</v-flex>
										<v-flex
												v-if="item.image"
												md5
												xs12
										>
											<div
													class="mt-2"
											>
												<v-carousel
														v-if="Array.isArray(item.image)"
														:show-arrows="true"
														:height="325"
														:interval="3000"
														hide-delimiters
												>
													<v-carousel-item
															v-for="(citem,ci) in item.image"
															:key="ci"
															:src="publicPath(citem)"
															reverse-transition="fade-transition"
															transition="fade-transition"
													/>
												</v-carousel>
												<v-img
														v-else
														:max-width="item.imageWidth ? item.imageWidth : ''"
														:max-height="item.imageHeight ? item.imageHeight : ''"
														:src="publicPath(item.image)"
												/>
											</div>
										</v-flex>
									</v-layout>
								</v-card-text>

<!--								<v-card-title v-if="item.title">{{ item.title }}</v-card-title>-->
<!--								<v-card-subtitle v-if="item.subtitle" class="pb-0">{{ item.subtitle }}</v-card-subtitle>-->

<!--								<v-img-->
<!--										v-if="item.image"-->
<!--										class="white&#45;&#45;text align-end"-->
<!--										:max-width="item.imageWidth ? item.imageWidth : ''"-->
<!--										:max-height="item.imageHeight ? item.imageHeight : ''"-->
<!--										:src="publicPath(item.image)"-->
<!--								>-->

<!--									<v-card-text class="text&#45;&#45;primary">-->
<!--										<div-->
<!--												v-if="item.html"-->
<!--												v-html="item.html"-->
<!--										/>-->
<!--									</v-card-text>-->
<!--								</v-img>-->

<!--								<v-card-text class="text&#45;&#45;primary">-->
<!--									<div-->
<!--											v-if="item.html"-->
<!--											v-html="item.html"-->
<!--									/>-->
<!--								</v-card-text>-->

							</v-card>

							<v-spacer />

						</template>

					</v-flex>
<!--					<v-flex v-for="(item, i) in items" :key="i" class="flex-empty">-->
<!--						<div></div>-->
<!--					</v-flex>-->
				</v-layout>

			</content-section>
<!--			<div-->
<!--					v-if="toggleMessage"-->
<!--					class="ma-4"-->
<!--			>-->
<!--			<span-->
<!--					class="pre"-->
<!--			>{{ message.text }}-->
<!--			</span>-->
<!--			<div-->
<!--					v-if="!loading"-->
<!--					v-scroll="scrolled"-->
<!--			/>-->
<!--			</div>-->
<!--			<v-progress-circular-->
<!--					v-if="loading"-->
<!--					indeterminate-->
<!--					color="primary"-->
<!--			/>-->
		</v-card-text>
	</v-card>
</template>

<script>
	import ContentSection from '@/views/dark-template/content/Section'
	import VueContentLoading, { VclCode } from 'vue-content-loading'
	import { debounce } from 'lodash'

	export default {
		name      : 'EndlessTimeline',
		components: {
			ContentSection,
			VueContentLoading,
			VclCode,
		},
		data      : () => ({
			futurePage   : 0,
			message      : '',
			toggleMessage: true,
			loading      : false,
			messages     : [
				{
					text: 'Ok, here is my future!',
					from: 1,
					to  : 1,
				},
				{
					text: 'And even more ... :)',
					from: 2,
					to  : 2,
				},
				{
					text: 'Still curious?',
					from: 3,
					to  : 3,
				},
				{
					text: 'We all should be curious about it, shouldn\'t we?',
					from: 4,
					to  : 4,
				},
				{
					text: 'With a plan and persistence ...',
					from: 5,
					to  : 5,
				},
				{
					text: 'We can do anything!',
					from: 6,
					to  : 6,
				},
				{
					text: 'There is a good news:',
					from: 7,
					to  : 7,
				},
				{
					text: 'Even you can do it!',
					from: 8,
					to  : 8,
				},
				{
					text: 'Of course with a lot of hardship ... a LOT OF them! ...',
					from: 9,
					to  : 9,
				},
				{
					text: 'But we\'re still alive, aren\'t we?',
					from: 10,
					to  : 10,
				},
				{
					text: 'So we WILL do it. There is no option! These are things should be done, without any excuses!\nAnd HEY! There is no RESET button for your life.\nStop scrolling now and go do whatever you must 👌',
					from: 11,
					to  : null,
				},
			],
			items        : [
				{
					html: `
						<p>
							希望有朝一日可以成为右侧某公司中的一员！
						</p>
					`,
					image: [
						'img/timeline/ubisoft-logo.jpg',
						'img/timeline/teamninja-logo.png',
						'img/timeline/nintendo-logo.jpg',
						'img/timeline/platinumgames-logo.jpg',
						'img/timeline/naughtydog-logo.jpg',
					],
				},
				{
					html: `
						<p>
						  希望有朝一日也能做出一款动作与爽快感超越 <a target="_blank" href="https://en.wikipedia.org/wiki/Ninja_Gaiden_II"><strong>忍龙2</strong></a> 的游戏！
						</p>
					`,
					image: 'img/timeline/ninja_gaiden_2.gif',
					imageWidth: 500,
					imageHeight: 400,
				},
				{
					html: `
						<p>
						  希望有朝一日也可以参与到 <a target="_blank" href="https://en.wikipedia.org/wiki/The_Legend_of_Zelda:_Breath_of_the_Wild"><strong>The Legend of Zelda: Breath of the Wild</strong></a>  这样的游戏制作中！
						</p>
					`,
					image: 'img/timeline/zelda-botw.jpg',
				},
			],
		}),
		methods   : {
			scrolled (event) {
				let element = event.target
				if ( !element.scrollTop ) {
					element = element.documentElement
				}
				// TODO: it's not working correctly on mobile
				if ( element.scrollHeight - element.scrollTop <= element.clientHeight + 50 ) {
					this.loadFuture()
				}
			},
			loadFuture: debounce(function () {
				if ( this.loading || this.message.to === null ) {
					return
				}
				this.loading = true
				setTimeout(() => {
					this.loading = false
					this.futurePage++
					if ( !this.message ) {
						this.message = this.messages[ 0 ]
					} else if ( this.message.to !== null && this.message.to < this.futurePage ) {
						this.message = this.messages.find((msg) => {
							return msg.from === this.futurePage
						})
					} else {

					}
					this.toggleMessage = false
					this.toggleMessage = true
				}, 750)
			}, 500),
		},
	}
</script>

<style scoped>
	.fill-width {
		width: 100%;
	}

	.pre {
		white-space: pre;
	}
</style>
