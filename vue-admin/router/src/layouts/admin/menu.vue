<script setup lang="ts">
import menuService from '@/composables/menu'
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

watch(route, () => menuService.setCurrentMenu(route), { immediate: true })
</script>

<template>
  <div class="menu w-[200px] bg-gray-800" :class="{ close: menuService.close.value }">
    <div class="logo">
      <i class="fas fa-robot text-fuchsia-300 mr-2 text-[25px]"></i>
      <span class="text-md">斑马兽</span>
    </div>
    <!-- 菜单 -->
    <div class="container">
      <dl>
        <dt @click="$router.push('/admin')" :class="{ 'bg-violet-600 text-white p-3': $route.name === 'admin.home' }">
          <section>
            <i class="fas fa-home"></i>
            <span class="text-md">首页</span>
          </section>
        </dt>
      </dl>
      <dl v-for="(pmenu, index) of menuService.menus.value" :key="index">
        <dt @click="pmenu.isClcik = true">
          <section>
            <i :class="pmenu.icon"></i>
            <span class="text-md">{{ pmenu.title }}</span>
          </section>
          <section>
            <i class="fas fa-angle-down duration-300" :class="{ 'rotate-180': pmenu.isClcik }"></i>
          </section>
        </dt>
        <dd
          v-show="pmenu.isClcik"
          :class="{ active: cmenu.isClcik }"
          v-for="(cmenu, key) of pmenu.children"
          :key="key"
          @click="$router.push({ name: cmenu.route })">
          {{ cmenu?.title }}
        </dd>
      </dl>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  .logo {
    @apply text-gray-300 flex items-center p-4;
  }
  .container {
    dl {
      @apply text-gray-300 text-sm;
      dt {
        @apply text-sm p-4 flex justify-between items-center cursor-pointer;
        section {
          @apply flex items-center;
          i {
            @apply mr-2 text-sm;
          }
        }
      }
      dd {
        @apply py-3 pl-4 my-2 text-white rounded-md cursor-pointer duration-300 hover:bg-violet-500 bg-gray-700;

        &.active {
          @apply bg-violet-700;
        }
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .menu {
    &.close {
      width: auto;
      .logo {
        span {
          @apply hidden;
        }
      }
      .container {
        dl {
          dt {
            @apply flex justify-center;
            section {
              // i {
              //   @apply mr-0;
              // }
              span {
                @apply hidden;
              }
              &:nth-of-type(2) {
                @apply hidden;
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .menu {
    @apply h-screen w-[200px] absolute left-0 top-0 z-50;
    .close {
    }
  }
}
</style>
