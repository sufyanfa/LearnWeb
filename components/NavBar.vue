<template>
    <nav class="w-full">
        <div class="container mx-auto px-6 sm:px-12 lg:px-16  py-6 md:py-0 flex items-center justify-between">
            <div class="flex items-center">
                <img class="cursor-pointer w-8 h-8 sm:w-auto" src="/logo.svg" alt="">
                <p class="text-base lg:text-2xl font-bold text-gray-800 dark:text-gray-400" :class="$i18n.locale == 'ar' ? 'mr-2' : 'ml-2'">{{$t('name')}}</p>
            </div>
            <div>
                <div @click="toggleMenu(true)" class="sm:block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
                    <svg aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1="4" y1="8" x2="20" y2="8" />
                        <line x1="4" y1="16" x2="20" y2="16" />
                    </svg>
                </div>
                <div id="menu" class="md:block lg:block hidden">
                    <div @click="toggleMenu(false)" class="block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none z-30 top-0 pt-6">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </div>
                    <ul class="flex text-3xl md:text-base items-center py-6 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white z-20 dark:bg-gray-900">
                        <li class="text-gray-600 hover:text-gray-800 cursor-pointer pt-10 md:pt-0 md:mr-10"><a href="/">{{$t('nav.home')}}</a></li>
                        <li class="text-gray-600 hover:text-gray-800 cursor-pointer pt-10 md:pt-0 md:mr-10"><a href="/">{{$t('nav.learn')}}</a></li>
                        <li class="text-gray-600 hover:text-gray-800 cursor-pointer pt-10 md:pt-0 md:mr-10"><a href="/">{{$t('nav.res')}}</a></li>
                        <li class="text-gray-600 hover:text-gray-800 cursor-pointer pt-10 md:pt-0 md:mr-10"><a href="/">{{$t('nav.blog')}}</a></li>
                        <a href="" class="cursor-pointer pt-10 md:pt-0" :class="$i18n.locale == 'ar' ? 'md:mr-10' : 'md:mr-0' "> <button class="btn text-gray-200 bg-blue-600 hover:bg-blue-600">
                           {{$t('nav.start')}}
                            </button>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    methods: {
        toggleMenu(flag) {
            let value = document.getElementById("menu");
            if(flag){
                value.classList.remove("hidden");
            } else {
                value.classList.add("hidden");
            }        
        }
    }
}
</script>