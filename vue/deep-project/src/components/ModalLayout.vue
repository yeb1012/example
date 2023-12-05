<template>
    <div class="modal-container">
        <header>
            <slot name="header"></slot>
        </header>
        <main>
             <slot></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>
<script>
export default {
    
}
//모달의 스타일은 다른데 영향을 주지 않기 위해 스타일에 스코프를 꼭 주기
</script>

