<template>
    <div class="project-container">
        <div @click="modalActive = false" class="exit hoverable"></div>
        <section 
            v-for="i in getContextLength(projectContext)" 
            :key="i" 
            class="proj-section" 
            :style="'background-image:url('+require('@/assets/projects/compressed/'+projectContext+'/'+parseInt(i+1)+'.png')+')'"
        ></section>
    </div>
</template>

<script>
    export default {
        name: 'project',
        props: {
            projectContext: {
                type: String,
                default: 'asia-in-bloom'
            }
        },
        methods: {
            getContextLength(projectContext) {
                if (projectContext == 'asia-in-bloom') {
                    return 7;
                } else if (projectContext == 'dom-giovanni') {
                    return 2;
                } else if (projectContext == 'kayla-sherri') {
                    return 1;
                } else if (projectContext == 'sustainable-design') {
                    return 2;
                } else if (projectContext == 'you-are-what-you-eat') {
                    return 2;
                } else {
                    console.warn('invalid project context... defaulting to asia-in-bloom');
                    return 7;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
section {
    background: white;
    height: 100vh;
    width: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
}

.exit {
  position: fixed;
  background-image: url(https://icons-for-free.com/iconfiles/png/512/x-1321215629555778185.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  font-size: 36px;
  margin-top: 64px;
  margin-left: 80px;
  transition: 400ms;
  width: 48px;
  display: flex;
  height: 48px;
  justify-content: center;
  align-items: center;
  transition: 300ms;
  transition-timing-function: cubic-bezier(0.5, 1, 0.89, 1);

  &:hover {
    transform: rotate(90deg);
  }
}
</style>