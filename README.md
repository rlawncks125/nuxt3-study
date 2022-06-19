# Nginx설정 문제점

SSL/TLS 설정까지 다하고,접속 확인까지 했는데
open graph Debugger 가 안된다.
!!유력 후보 : 도메인 설정 ( 도메인 새로 사서 테스트 , 서브 도메인을 써서 그런듯? ,웹마스터 등록 해야할듯? , 국가 인증 도메인이 아니라 그런가?)
    
확인 : SSG 로 테스트해도 똑같음 , curl로 찍으면 잘찍힘 ( nginx 문제는 아닌듯 )

# SSG 빌드 문제점

동적 라우트를 구성할시 ex ) /ems/page-[:users]/[:id]
generate 할시 /ems/page-uundefined/undefined로 페이지를 만듬

# Nuxt 3 프로젝트 설치

npx nuxi init nuxt-app

# Nuxt 3 사이트

[api 사이트](https://v3.nuxtjs.org/api/composables)

# Nuxt 3 변경

[Nuxt는 vuex를 권장하지 않음 Nuxt를 지원하는 pinia를 권장함](https://codybontecou.com/nuxt3-and-pinia.html#vuex-pinia)

ref -> useState

# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
