<template>
    <section class="flex items-center min-h-screen p-6 bg-white dark:bg-gray-900">
            <div class="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16 relative">
                <div class="relative pt-6 pb-12">
                    <h3 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10">
                        {{$t('features.title')}}
                    </h3> 
                    <p class="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500">
                        {{$t('features.dic')}}
                    </p>
                </div>
                <div>
                    <div class="md:grid md:grid-cols-12 md:gap-24 pb-20 items-center">
                        <div class="text-base leading-6 text-center font-medium text-gray-900 md:col-span-6" :class="$i18n.locale == 'ar' ? 'md:text-right' : 'md:text-left'">
                            <h3 class="text-2xl leading-8 font-extrabold text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-9">
                                {{$t('features.one')}}
                            </h3> 
                            <p class="text-base leading-6 text-gray-500 pt-3">
                                {{$t('features.onedic')}}
                            </p>
                        </div>
                        <dd class="mt-2 md:mt-0 md:col-span-6">
                            <img src="https://ucarecdn.com/db6e93d4-b102-490a-887f-f228c240ede7/clickandcollect.png" alt="" class="rounded-md shadow-lg">
                        </dd>
                    </div>
                    <div class="md:grid md:grid-cols-12 md:gap-24 pb-20 items-center">
                        <div class="text-base leading-6 text-center font-medium text-gray-900 md:col-span-6" :class="$i18n.locale == 'ar' ? 'md:text-right' : 'md:text-left'">
                            <h3 class="text-2xl leading-8 font-extrabold text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-9">
                                {{$t('features.two')}}
                            </h3> 
                            <p class="text-base leading-6 text-gray-500 pt-3">
                                {{$t('features.twodic')}}
                            </p>
                        </div>
                        <dd class="mt-2 md:mt-0 md:col-span-6">
                            <img src="https://ucarecdn.com/db6e93d4-b102-490a-887f-f228c240ede7/-/format/auto/" alt="" class="rounded-md shadow-lg">
                        </dd>
                    </div>
                    <div class="md:grid md:grid-cols-12 md:gap-24 pb-20 items-center">
                        <div class="text-base leading-6 text-center font-medium text-gray-900 md:col-span-6" :class="$i18n.locale == 'ar' ? 'md:text-right' : 'md:text-left'">
                            <h3 class="text-2xl leading-8 font-extrabold text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-9">
                                {{$t('features.three')}}
                            </h3> 
                            <p class="text-base leading-6 text-gray-500 pt-3">
                                {{$t('features.threedic')}}
                            </p>
                        </div>
                        <dd class="mt-2 md:mt-0 md:col-span-6 text-center">
                            <img src="https://ucarecdn.com/95a551cd-90f5-4d8e-a8c9-3310d04e0729/-/resize/596x/-/format/auto/" alt="" class="rounded-md h-72 mx-auto">
                        </dd>
                    </div>
                </div>
            </div>
        </section>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>