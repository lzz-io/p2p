<template>
    <div class="mt-2" id="index">
        <div class="container">
            <div class="row">
                <div class="col-md-3 text-center">.col-3</div>
                <div class="col-md-9 text-left">.col-9<br>
                    页面默认值
                    在和元素更新，以提供更好的页面宽度默认值。进一步来说：

                    将box-sizing在全球范围内设定的每一个元素，包括*::before和*::after，来border-box。这可确保由于填充或边框而不会超出声明的元素宽度。
                    没有font-size声明基数html>，但16px假定（浏览器默认值）。通过媒体查询font-size: 1rem应用于body>简单的响应式缩放，同时尊重用户偏好并确保更易于访问的方法。
                    该body>还设置一个全球性的font-family，line-height和text-align。稍后由某些表单元素继承，以防止字体不一致。
                    为安全起见，body>有一个声明background-color，默认为#fff。
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    console.log("index")

    export default {
        name: 'Index',
    }
</script>
