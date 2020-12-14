<template>
  <v-card
    color="grey lighten-4"
    light
  >
    <v-card-text>
      <content-section
        title="我是谁?"
      >
        我是一名游戏开发者<br>
        我对游戏开发相关主题都很感兴趣，有很广泛的了解，包括Gameplay逻辑，游戏引擎架构，引擎编辑器实现
      </content-section>
      <content-section
        v-if="prouds"
        title="What am I proud of?"
      >
        <v-layout
          v-for="(proud, i) in prouds"
          :key="i"
        >
          <v-flex
            md1
            xs3
          >
            <v-icon right>
              {{ proud.icon }}
            </v-icon>
          </v-flex>
          <v-flex
            md11
            xs9
          >
            <p>
              <strong>{{ proud.text }}</strong><br>
              <small>{{ proud.source }}</small>
            </p>
          </v-flex>
        </v-layout>
      </content-section>
      <content-section
        v-if="educations"
        title="教育"
      >
        <v-layout
          v-for="(education, i) in educations"
          :key="i"
        >
          <v-flex md4>
            {{ education.from }} - {{ education.to }}
          </v-flex>
          <v-flex md8>
            <strong v-if="education.title">{{ education.title }}</strong>
            <div v-if="education.location">
              <i>{{ education.location }}</i>
            </div>
            <div v-if="education.description">
              {{ education.description }}
            </div>
          </v-flex>
        </v-layout>
      </content-section>
      <content-section
        v-if="skills"
        id="to-timeline"
        title="技能"
      >
<!--        <template slot="actions">-->
<!--          (%为相对而非绝对)-->
<!--        </template>-->
        <v-layout wrap>
          <template
            v-for="(skill, i) in skills"
          >
            <v-flex
              v-if="skill.divider"
              :key="i"
              md12
              xs12
              mb-4
            />
            <v-flex
              v-else
              :key="i"
              md6
              xs12
            >
              <div
                class="mr-2 ml-2"
              >
                <div class="align-center">
                  <v-icon
                    small
                  >
                    {{ skill.icon }}
                  </v-icon>
                  {{ skill.title }}
                </div>
                <v-progress-linear
                  class="progress"
                  color="secondary"
                  height="3"
                  :value="skill.value"
                />
              </div>
            </v-flex>
          </template>
        </v-layout>
      </content-section>
    </v-card-text>
  </v-card>
</template>

<script>
import ContentSection from '@/views/dark-template/content/Section'
export default {
  name      : 'MainContent',
  components: { ContentSection },
  data      : () => ({
    prouds: [
      {
        icon  : 'mdi-gamepad-variant',
        text  : 'Steam猎源的主要程序',
        source: '(4人团队)',
      },
      {
        icon  : 'mdi-library-music',
        text  : '钢琴业余水平9级',
        source: '',
      },
    ],
    educations: [
		{
			from       : '2014',
			to         : '2017',
			title      : '计算机应用技术',
			location   : '北京吉利学院',
			description: '主修课程: C语言、C#面向对象程序设计、Java程序设计、Android应用开发、MySQL数据库',
		},
		{
			from       : '2016',
			to         : '2017',
			title      : 'U3d游戏开发',
			location   : '火星时代实训基地',
			description: '主修课程: Unity3D游戏开发和设计、 UnityGUI基础、动画/粒子系统、物理引擎、 3D数学基础、Shader渲染',
		},
    ],
    skills: [
		{
			title: 'CSharp',
			icon : 'mdi-language-csharp',
			value: 95,
		},
		{
			title: 'FSharp',
			icon : 'mdi-language-haskell',
			value: 30,
		},
		{
			title: 'Lua',
			icon : 'mdi-language-lua',
			value: 80,
		},
		{
			title: 'JavaScript',
			icon : 'mdi-language-javascript',
			value: 80,
		},
		{
			title: 'Ruby',
			icon : 'mdi-language-ruby-on-rails',
			value: 50,
		},
		{
			title: 'C/C++',
			icon : 'mdi-language-cpp',
			value: 50,
		},
        {
          title: 'Python',
          icon : 'mdi-language-python',
          value: 50,
        },
		{ divider: true },
		{
			title: 'Unity3D',
			icon : 'mdi-unity',
			value: 80,
		},
		{
			title: 'UE4',
			icon : 'mdi-unreal',
			value: 20,
		},
		{
			title: 'Moai SDK',
			icon : 'mdi-gamepad',
			value: 50,
		},
		{
			title: 'Monogame/FNA',
			icon : 'mdi-gamepad',
			value: 30,
		},
		{
			title: 'Html5 Game Dev',
			icon : 'mdi-gamepad',
			value: 40,
		},
		{ divider: true },
		{
			title: 'Git',
			icon : 'mdi-git',
			value: 50,
		},
    ],
  }),
}
</script>

<style scoped>
.title {
  border-bottom: 2px #bfbfbf solid;
  line-height: 1.5 !important;
}
.progress {
  margin-top: 0.1rem;
}
</style>
