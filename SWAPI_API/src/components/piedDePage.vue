<template>
    <div>
        <footer class="footer">
            <div class="footer__logo">
                <img src="../assets/img/Star_Wars_Logo.svg.png" atl="logo" />
            </div>
            <div class="footer__text">
                <p>© 2021 - SWAPI_API</p>
                <br>
                <p>Créé par : Jonathan Claes</p>
            </div>
        </footer>
    </div>
</template>
<script>
    export default {
        name: 'footer',
    }
    

</script>
<style scoped>
    .footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: rgb(0, 0, 0);
        color: #fff;
        width: 1200px;
        margin: 0 auto;
        padding: 1rem;
    }

    .footer__logo {
        width: 100px;
    }

    .footer__text {
        font-size: 24px;
    }

    .footer__text p {
        margin: 0;
    }
</style>