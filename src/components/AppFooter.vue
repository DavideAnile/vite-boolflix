<script>

</script>

<template>
    <section>
        <div class="icons-container">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-youtube"></i> 
        </div>

        <div class="links-container">
            <ul>
                <li>Audiodescrizione</li>
                <li>Rapporti con gli investitori</li>
                <li>Note Legali</li>
            </ul>
            <ul>
                <li>Centro Assistenza</li>
                <li>Opportunità di lavoro</li>
                <li>Preferenze per i cookie</li>
            </ul>
            <ul>
                <li>Carte regalo</li>
                <li>Condizioni di utilizzo</li>
                <li>Informazioni sull'azienda</li>
            </ul>
            <ul>
                <li>Media Center</li>
                <li>Privacy</li>
                <li>Contattaci</li>
            </ul>
        </div>
        <div class="credits"> <em><i class="fa-regular fa-copyright"></i> 1997-2023 Netflix, inc</em>  </div>

    </section>

</template>

<style lang="scss" scoped>

section{
    
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    background-color: black;
    border-top: 1px solid lightgray;
    

    .icons-container{
        display: flex;
        gap: 20px;
        padding: 20px;

        i{
           font-size: 1.5em;
           padding: 0 0 20px 0;
           opacity: .6;
           transition: .8s;
        }

        i:hover{
            opacity: 1;
            transform: scale(1.2);
        }
    }

    .links-container{
        display: flex;
        gap: 40px;

        ul{
            list-style-type: none;

            li{
                opacity: .7;
                padding: 5px 0;
            }

            li:hover{
                opacity: 1;
                cursor: pointer;
                text-decoration: underline;
            }
        }
    }

    .credits{
        padding: 20px 0;
        opacity: .6;
        font-size: .8em;
    }
}


</style>