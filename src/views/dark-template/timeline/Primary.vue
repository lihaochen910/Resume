<template>
  <v-card
    color="grey lighten-4"
    light
  >
    <v-card-text>
      <content-section
        id="timeline"
        :title="detailed ? 'My Life in a Nutshell' : 'My Experiences'"
      >
        <template slot="actions">
          <div>
            <v-switch
              v-model="detailed"
              :label="detailed ? 'Detailed' : 'Summary'"
            />
          </div>
        </template>

        <v-timeline
          dense
        >
          <v-timeline-item
            v-for="(item, i) in orderedItems"
            :key="i"
            :icon="item.icon || ''"
            :class="{transparent: item.transparent}"
            large
          >
            <template
              v-if="item.iconImage"
              v-slot:icon
            >
              <v-avatar>
                <img
                  :src="publicPath(item.iconImage)"
                >
              </v-avatar>
            </template>
            <template v-slot:opposite />
            <v-layout>
              <v-flex
                v-if="$vuetify.breakpoint.smAndUp"
                md1
                sm2
                align-self-center
              >
                <span>{{ item.year }}</span>
              </v-flex>
              <v-flex
                md11
                sm10
                xs12
              >
                <v-card class="elevation-1">
                  <v-card-title class="pb-0">
                    <div>
                      <p v-if="$vuetify.breakpoint.xsOnly">
                        {{ item.year }}
                      </p>
                      <h3>{{ item.title }}</h3>
                    </div>
                  </v-card-title>
                  <v-card-text>
                    <v-layout wrap>
                      <v-flex
                        :md7="!!item.image"
                        :md12="!item.image"
                        xs12
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
                            :show-arrows="false"
                            :height="325"
                          >
                            <v-carousel-item
                              v-for="(citem,ci) in item.image"
                              :key="ci"
                              :src="publicPath(citem)"
                            />
                          </v-carousel>
                          <v-img
                            v-else
                            :max-height="item.imageHeight ? item.imageHeight : ''"
                            :src="publicPath(item.image)"
                          />
                        </div>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </content-section>
    </v-card-text>
  </v-card>
</template>

<script>
/* eslint-disable */
import ContentSection from '@/views/dark-template/content/Section'
export default {
  name      : 'Timeline',
  components: { ContentSection },
  data      : () => ({
    detailed: true,
    items   : [
		{
			detailed   : true,
			transparent: true,
			year       : '1996',
			title      : '出生于1996年3月16日，大雪',
			html       : '',
			icon       : 'mdi-cake-variant',
		},
		{
			detailed   : true,
			transparent: true,
			year       : '2003',
			title      : '第一次接触电脑',
			html       : '我: "哇!"<br><i>这个游戏看起来比小霸王上的好玩多了!</i>',
			icon       : 'mdi-mouse-variant',
		},
		{
			year : '2012',
			title: '高中时，开始接触编程语言',
			html : `
				<p>
					在书店里看到一本好厚的书: Head First C#，缠着妈妈把它买下来。
				</p>
				<p>
					翻了几页，然而并没有看懂多少。。。:(
				</p>
			`,
			image: 'img/timeline/book.gif',
			icon : 'mdi-school',
		},
		{
			year : '2015',
			title: '在学校中写了一个安卓的屏幕锁应用',
			html : `
				<p>
					大二时学习了Android的课程之后，手痒痒想练练手。
				</p>
				<p>
					想到以前使用搭载Blackberry 10操作系统的黑莓手机有一个锁屏功能很酷。
				</p>
				<p>
					于是我就写了<a target="_blank" href="https://github.com/lihaochen910/BB10_DigitalUnlock_4_Android">BB10_DigitalUnlock_4_Android</a><br>
					非常酷!
				</p>
			`,
			image: 'img/timeline/school_2.png',
			icon : 'mdi-school',
		},
		{
			year : '2015',
			title: '在学校开始研究Unity3D',
			html : `
			  <p>
				  对游戏感兴趣，想做一个游戏试试。
			  </p>
			  <p>
				  曾经玩过一个Xbox360上的游戏叫凯瑟琳，那个3D推箱子挺有意思，于是就想去做一个。。。
			  </p>
			`,
			image: 'img/timeline/school.png',
			icon : 'mdi-school',
		},
		{
			year       : '2016',
			title      : '参加火星时代的培训',
			html       : `
				<p>
					学习了U3D的主要课程之后，想做一个火焰纹章小游戏。<br>
					想法很简单，实际去做的时候遇到很多问题，<br>
					从制作过程中学到了瓦片地图的导入，A*寻路。
				</p>
				<p>
					还有看起来很炫酷的子弹弹幕。。
				</p>
			`,
			image : 'img/timeline/hxsd.png',
			icon  : 'mdi-fountain-pen-tip',
		},
		{
			year : '2017',
			title: '毕业后的第一份工作：北京一骑当千的工作经历',
			html : `
				<p>
					项目：特种部队2，参考皇室战争玩法的横板3D卡牌类养成游戏。<br>
					绝大部分功能实现都与UI有关。
				</p>
				<p>
					使用lua语言实现仓库(背包)系统
				</p>
				<p>
					实现登陆/注册模块功能
				</p>
			`,
			image    : 'img/timeline/tzbd.png',
			iconImage: 'img/timeline/qk-icon.jpg',
		},
		{
			year : '2018',
			transparent: true,
			title: '关于一些游戏引擎/SDK的研究',
			html : `
				<p>
					看到许多游戏使用自研引擎<br>
					我研究过Github上许多关于游戏开发仓库的代码，例如:
					<ul>
						<li><a target="_blank" href="https://github.com/MonoGame/MonoGame">Monogame/FNA</a>(XNA的精神继承者，国外很多成功的游戏都是使用其进行开发，使用C#语言也可以方便的让后人反编译代码进行学习)</li><br>
						<li><a target="_blank" href="https://github.com/moai/moai-dev">Moai SDK</a>(使用C++作为底层处理循环模拟与渲染，游戏逻辑使用lua去编写，代码相当工整，其代码书写风格对我产生了深远的影响)</li><br>
						<li><a target="_blank" href="https://bitbucket.org/MattThorson/monocle-engine/">Monocle</a>(游戏Celeste的引擎，功能简单，使用Scene->Entity->Component的结构)</li><br>
						<li>还有一些GUI的研究，比如PythonQt4、Dear ImGUI、UE4 Slate、Sony ATF...</li>
					</ul>
				</p>
				<p>
					以下是我的一些学习过程中的成果:
					<ul>
						<li><a target="_blank" href="https://github.com/lihaochen910/moai-dev">Moai Ruby</a>(我大改了SDK的代码，顺便也学习了一下C++，使用mruby作为脚本嵌入)</li><br>
						<li><a target="_blank" href="https://github.com/lihaochen910/RPGMakerProject">RPGMakerProject</a>(Html5游戏尝试，基于RPGMakerMV的代码，加入了ECS框架)</li><br>
						<li><a target="_blank" href="https://github.com/lihaochen910/Candy">Candy</a>(基于Gii引擎编辑器的实验性研究，熟悉了引擎编辑器UI与引擎核心功能的交互、引擎UI的扩展)</li><br>
					</ul>
				</p>
			`,
			icon : 'mdi-github-circle',
		},
		{
			detailed   : true,
			transparent: true,
			year       : '2019',
			title      : '研究编程语言的实现原理',
			html       : `
				<p>
				  开发游戏过程中，因为C#的编译速度问题，想使用C#实现一门动态语言可以加速逻辑编写<br>
				  我阅读了许多关于编程语言的书，比如:
				  <ul>
					<li><strong>GameScriptingMastery</strong></li>
					<li><strong>Ruby原理剖析</strong></li>
					<li><strong>Ruby元编程</strong></li>
					<li><strong>关于mruby的一切</strong></li>
				  </ul>
				</p>
				<p>
				以下是我的一些研究成果:
				<ul>
				  <li><a target="_blank" href="https://github.com/lihaochen910/GameScriptingMastery">XASM</a>(实现了一个常用指令集的VM，可以执行自定义语法的汇编脚本)</li><br>
				  <li><a target="_blank" href="https://github.com/lihaochen910/RubySharp">RubySharp</a>(一个使用C#实现的Ruby解释器，可以运行基本ruby语法的脚本，不会编译为字节码，仅解析为抽象语法树，相当于解释执行)</li><br>
				  <li><a target="_blank" href="https://github.com/lihaochen910/mRubySharp">mRubySharp</a>(实现了C#与CRuby的交互，可以导入C#类到Ruby虚拟机中，然后在Ruby中使用C#类，由于协程的一些问题并没有投入正式使用)</li><br>
				  <li>深入研究了Ruby语言的虚拟机工作方式，还有Ruby的元编程原理</li><br>
				  <li>还有一些语法解析库的研究，比如‎GOLD Parser、CocoR...</li>
				</ul>
				</p>
				<p>
				实现一门编程语言真的很酷！但是想在正式项目中使用还需要花费许多时间去完善语言的调试模块还有内存的管理。
				</p>
			`,
			iconImage: 'img/timeline/source-code-icon.jpg',
		},
		{
			year : '2019',
			title: '猎源EA第一版本制作完成',
			html : `
			  <p>
				  当前状态: <span class="light-blue--text lighten-3">已发布</span><br>可以在这里找到: <a target="_blank" href="https://store.steampowered.com/app/1078490/Seed_Hunter/">Steam猎源</a>
			  </p>
			  <p>
				关键字:
				<ul>
					<li><strong>2D平台交互</strong></li>
					<li><strong>关卡房间生成与管理</strong></li>
					<li><strong>BehaviorTree、状态机</strong></li>
					<li><strong>Boss、小怪行为逻辑调整</strong></li>
					<li><strong>输入系统API包装以及兼容性调试</strong></li>
					<li><strong>打击感调整</strong></li>
					<li><strong>音乐/音效优化与调整</strong></li>
					<li><strong>定制UnityEditor以优化开发流程</strong></li>
					<li><strong>SteamAPI接入</strong></li>
				  </ul>
			  </p>
			`,
			image    : 'img/timeline/seedhunter.gif',
			iconImage: 'img/timeline/seedhunter-ea-1-icon.png',
		},
		{
			year : '2019',
			title: '猎源EA第二版本制作完成',
			html : `
			  <p>
				  当前状态: <span class="light-blue--text lighten-3">已发布</span><br>可以在这里找到: <a target="_blank" href="https://store.steampowered.com/app/1078490/Seed_Hunter/">Steam猎源</a>
			  </p>
			  <p>
				基于上一个版本的已有内容，添加了很多新功能:
				<ul>
					<li>实现了成就系统</li>
					<li>使用GOAP规划型AI来实现Boss的逻辑</li>
					<li>使用AssetBundle替代大部分Resource.Load</li>
					<li>使用对象池优化频繁生成的粒子特效</li>
					<li>使用更加灵活的方式来实现玩家/怪的属性/状态值</li>
				</ul><br>
				还有处理一些在国外上运行时的遇到的坑
			  </p>
			`,
			image    : 'img/timeline/seedhunter-ea-2.jpg',
			iconImage: 'img/timeline/seedhunter-ea-2-icon.png',
		},
		{
			year : '直到现在...',
			title: '尽力完成猎源这款游戏!',
			html : ``,
			icon: 'mdi-fountain-pen-tip',
		},
    ],
  }),
  computed: {
    orderedItems () {
      const items = [...this.items].reverse()
      if (this.detailed)
        return items
      return items.filter((item) => {
        return !item.detailed
      })
    },
  },
}
</script>

<style scoped>
.title {
  border-bottom: 2px #bfbfbf solid;
  line-height: 1.5 !important;
}
.pre {
  white-space: pre;
}
.transparent{
  opacity: 0.6;
}
</style>
