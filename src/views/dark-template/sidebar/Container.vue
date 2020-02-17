<template>
  <v-card
    color="grey darken-3"
    dark
  >
    <v-card-text>
      <avatar />
      <div class="text-sm-center mb-4 mt-3">
        <h1>
          李昊晨
          <!--          <span class="light-blue&#45;&#45;text text&#45;&#45;lighten-3">李</span> 昊晨-->
        </h1>
        <span>
          A challenge-loving game developer
        </span>
      </div>

      <sidebar-section :options="sections.info" />
      <sidebar-section :options="sections.socials" />
      <sidebar-section :options="sections.hobbies">
        <template v-slot:item="{item}">
          <v-chip>
            <v-avatar>
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </v-avatar>
            {{ item.text }}
          </v-chip>
        </template>
      </sidebar-section>
      <sidebar-section :options="sections.languages">
        <template v-slot:items="{items}">
          <v-container pa-0>
            <v-layout
              wrap
              class="text-xs-center"
            >
              <template
                v-for="(item, i) in items"
              >
                <v-flex
                  :key="i"
                  md3
                  sm4
                  xs6
                >
                  <v-progress-circular
                    rotate="360"
                    size="65"
                    width="2"
                    :value="item.value"
                    color="white"
                    class="ma-2"
                  >
                    {{ item.text }}
                  </v-progress-circular>
                </v-flex>
              </template>
            </v-layout>
          </v-container>
        </template>
      </sidebar-section>
    </v-card-text>
  </v-card>
</template>

<script>
import Avatar from '@/views/dark-template/sidebar/Avatar'
import SidebarSection from '@/views/dark-template/sidebar/Section'
export default {
  name      : 'Sidebar',
  components: { SidebarSection, Avatar },
  data () {
    return {
      sections: {
        info: {
          title: 'INFO',
          items: [
            {
              name: '电子邮箱',
              icon: 'mdi-email',
              text: 'lihaochen910@hotmail.com',
            },
            {
              name: '个人网站',
              icon: 'mdi-web',
              text: 'lihaochen910.github.io',
            },
            {
              name: '出生日',
              icon: 'mdi-cake-variant',
              text: '1996-03-16',
            },
            {
              name: '家乡',
              icon: 'mdi-map-marker',
              text: 'Anda, Heilongjiang',
            },
          ],
        },
        socials: {
          title: 'SOCIALS',
          items: [
            {
              icon: 'mdi-github-circle',
              text: 'github.com/lihaochen910',
              link: 'https://github.com/lihaochen910',
            },
            {
              icon: 'mdi-linkedin-box',
              text: 'linkedin.com/in/haochen-lee-316a7a131',
              link: 'https://linkedin.com/in/haochen-lee-316a7a131',
            },
            {
              icon: 'mdi-twitter',
              text: 'twitter.com/kanbaru_chen',
              link: 'https://twitter.com/kanbaru_chen',
            },
          ],
        },
        hobbies: {
          title: 'HOBBIES',
          items: [
            {
              icon: 'mdi-animation',
              text: '动画',
            },
            {
              icon: 'mdi-book',
              text: '漫画',
            },
            {
              icon: 'mdi-gamepad',
              text: '游戏',
            },
            {
              icon: 'mdi-music',
              text: '古典音乐',
            },
            {
              icon: 'mdi-book-open-page-variant',
              text: '读书',
            },
            {
              icon: 'mdi-auto-fix',
              text: '游戏破解相关',
            },
            {
              icon: 'mdi-android-debug-bridge',
              text: '制造Bug!',
            },
          ],
        },
        languages: {
          title: 'LANGUAGES',
          items: [
            {
              text : 'English',
              value: 50,
            },
            {
              text : '简体中文',
              value: 95,
            },
            {
              text : '正体中文',
              value: 65,
            },
          ],
        },
      },
    }
  },
}
</script>

<style scoped>
.sidebar{
    background: #2e2e2e;
}
</style>
