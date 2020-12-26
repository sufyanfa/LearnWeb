<template>
    <section class="relative flex items-center min-h-screen p-6 bg-white dark:bg-gray-900">
        <div class="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16 relative">
            <div class="text-center pt-12">
                <h2 class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10">
                    {{$t('blog.title')}}
                </h2>
                <p class="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500">
                    {{$t('blog.dic')}}
                </p>
            </div>
            <div class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
                <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div class="flex-shrink-0">
                        <img src="https://cdn.storekit.com/wp-content/uploads/2020/04/meal-kit-header-img-1170x472.png" alt="Meal kits" class="h-48 w-full object-cover">
                    </div>
                    <div class="flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
                        <div class="flex-1">
                            <p class="text-sm leading-5 font-medium text-indigo-600">
                            <a href="https://storekit.com/advice/meal-kits/" target="_blank" class="hover:underline">
                                Article
                            </a>
                            </p>
                            <a href="https://storekit.com/advice/meal-kits/" target="_blank" class="block">
                            <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900 dark:text-gray-100">
                                Meal Kits, Recipe Boxes, Produce Boxes – Which Is Right For Me?
                            </h3>
                            <p class="mt-3 text-base leading-6 text-gray-500">
                                There are three explosive trends which are happening right now among delivery restaurants.
                            </p>
                            </a>
                        </div>
                        <div class="mt-6 flex items-center">
                            <div class="flex-shrink-0">
                                <a href="#">
                                    <img src="https://s.gravatar.com/avatar/2d9dba392d013f74c9c1db6211236c37?s=480&amp;r=pg&amp;d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fbe.png" alt="Ben Larcey Avatar" class="h-10 w-10 rounded-full">
                                </a>
                            </div>
                            <div :class="$i18n.locale == 'ar' ? 'mr-3' : 'ml-3'">
                                <p class="text-sm leading-5 font-medium text-gray-900 dark:text-gray-100">
                                    <span class="hover:underline">
                                        Ben Larcey
                                    </span>
                                </p>
                                <div class="flex text-sm leading-5 text-gray-500">
                                    <time datetime="2020-03-16">Apr 29, 2020</time>
                                    <span class="mx-1">
                                        ·
                                    </span>
                                    <span>
                                        10 min read
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div class="flex-shrink-0">
                        <img src="https://cdn.storekit.com/wp-content/uploads/2020/04/pub-1170x472.png" alt="Let pubs deliver" class="h-48 w-full object-cover">
                    </div>
                    <div class="flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
                        <div class="flex-1">
                            <p class="text-sm leading-5 font-medium text-indigo-600">
                                <span class="hover:underline">
                                    Thoughts
                                </span>
                            </p>
                            <a href="https://storekit.com/advice/let-pubs-deliver/" target="_blank" class="block">
                                <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900 dark:text-gray-100">
                                    StoreKit says: let pubs deliver
                                </h3>
                                <p class="mt-3 text-base leading-6 text-gray-500">
                                StoreKit is calling on the government to permit pubs to deliver alcohol.
                                </p>
                            </a>
                        </div>
                        <div class="mt-6 flex items-center">
                            <div class="flex-shrink-0">
                                <a href="#">
                                    <img src="https://s.gravatar.com/avatar/2d9dba392d013f74c9c1db6211236c37?s=480&amp;r=pg&amp;d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fbe.png" alt="Ben Larcey" class="h-10 w-10 rounded-full">
                                </a>
                            </div>
                            <div :class="$i18n.locale == 'ar' ? 'mr-3' : 'ml-3'">
                                <p class="text-sm leading-5 font-medium text-gray-900 dark:text-gray-100">
                                    <span class="hover:underline">
                                        Ben Larcey
                                    </span>
                                </p>
                                <div class="flex text-sm leading-5 text-gray-500">
                                    <time datetime="2020-03-16">Apr 23, 2020</time> 
                                        <span class="mx-1">
                                            ·
                                        </span>
                                        <span>
                                            1 min read
                                        </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div class="flex-shrink-0">
                        <img src="https://cdn.storekit.com/wp-content/uploads/2020/03/display-im-storekit-600x242.png.webp" alt="StoreKit's Guide to Ghost Kitchens" class="h-48 w-full object-cover">
                    </div>
                    <div class="flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
                        <div class="flex-1">
                            <p class="text-sm leading-5 font-medium text-indigo-600">
                                <span class="hover:underline">Guide</span>
                            </p>
                            <a href="https://storekit.com/advice/ghost-kitchen/" target="_blank" class="block">
                                <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900 dark:text-gray-100">
                                StoreKit’s 2020 Guide to Ghost Kitchens: From the Experts
                                </h3>
                                <p class="mt-3 text-base leading-6 text-gray-500">
                                    Get your delivery business running smoothly with insights from industry leaders and restaurant management experts!
                                </p>
                            </a>
                        </div>
                        <div class="mt-6 flex items-center">
                            <div class="flex-shrink-0"><span><img src="https://s.gravatar.com/avatar/3daa43bdd93664bcb8d76fde6da428d9?s=480&amp;r=pg&amp;d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fad.png" alt="Adam Stead" class="h-10 w-10 rounded-full"></span>
                            </div>
                            <div :class="$i18n.locale == 'ar' ? 'mr-3' : 'ml-3'">
                                <p class="text-sm leading-5 font-medium text-gray-900 dark:text-gray-100">
                                    <a href="#" class="hover:underline">
                                        Adam Stead
                                    </a>
                                </p>
                                <div class="flex text-sm leading-5 text-gray-500">
                                    <time datetime="2020-03-16">Mar 1, 2020</time> 
                                    <span class="mx-1">
                                        ·
                                    </span>  
                                    <span>
                                        30 min read
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full mx-auto mt-6">
                <a href="#0" class="btn font-semibold bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" style="outline: none;">
                    {{$t('blog.more')}}
                </a>
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