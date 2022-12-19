Outra forma de utilizar a troca de tema usando JavaScript e criando uma classe no HTML para essa utilização, porém dessa forma estava havendo uma incompatibilidade com o CSS adotado. 


HTML:

 <div class="mode">
                <div class="toggle">Dark Mode</div>
                <div class="botao ">
                    <input type="checkbox" class="checkbox js-theme" id="chk">
                    <label for="chk" class="label  ">
                        
                        <div class="ball"></div>
                        <!-- <img id="img" src="./imagens/bxs-circle.svg" alt=""> -->
                    
                    </label>
                    
                </div>
            </div>
_______________________________________________________________


css:



body[data-theme="t-light"]{
    --body-bg-color: hsl(0, 0%, 100%);
    --body-btnBgtoggle-color: linear-gradient(90deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%));
    --body-bg-faixa-color: hsl(225, 100%, 98%);
    --cards-bg-color: hsl(227, 47%, 96%);
    --cards-bgToggle-color: hsl(230, 22%, 74%);
    --cards-textDark-color: hsl(228, 12%, 44%);
    --cards-textVeryDark-color: hsl(230, 17%, 14%)  ;
    --cards-topFacebook-color: hsl(208, 92%, 53%);
    --cards-topTwitter-color: hsl(203, 89%, 53%);
    --cards-topInstagram-color: linear-gradient(90deg, hsl(37, 97%, 70%), hsl(329, 70%, 58%));
    --cards-topYouTube-color: hsl(348, 97%, 39%);
    --title-border-color: hsl(230, 17%, 14%)  ;
    --today-up-color: hsl(163, 72%, 41%);
    --today-down-color: hsl(356, 69%, 56%);
    
}

body[data-theme="t-dark"]{
    --body-bg-color: hsl(230, 17%, 14%);
    --body-bg-faixa-color: hsl(232, 19%, 15%);
    --body-btnBgtoggle-color: linear-gradient(90deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%));
    --cards-bg-color: hsl(228, 28%, 20%);
    --cards-bgToggle-color: hsl(230, 22%, 74%);
    --cards-textDark-color: hsl(228, 34%, 66%);
    --cards-textVeryDark-color: hsl(0, 0%, 100%);
    --cards-topFacebook-color: hsl(208, 92%, 53%);
    --cards-topTwitter-color: hsl(203, 89%, 53%);
    --cards-topInstagram-color: linear-gradient(90deg, hsl(37, 97%, 70%), hsl(329, 70%, 58%));
    --cards-topYouTube-color: hsl(348, 97%, 39%);
    --title-border-color: hsl(228, 12%, 44%);
    --today-up-color: hsl(163, 72%, 41%);
    --today-down-color: hsl(356, 69%, 56%);
    
}
  
  body{
    font-size: 14px;
    width: 100%;
    height: 100vh;
    background-color: var(--body-bg-color);   
   
  }

   .mode{
    display: flex;    
  }

  .botao{
    display: flex;
    align-items: center;     
  }

  .toggle{
    display: flex;
    flex-direction: row;
    gap: 1em;
    align-items: center;
    justify-items: center;
    align-content: center;
    font-size: 1em;
    font-weight: 700;
    color: var(--cards-textDark-color);
    margin-right: 1em;
  }

  .checkbox{
    opacity: 0;
    position: absolute;
  }

  .label{
    background-image: var(--body-btnBgtoggle-color); 
    border-radius: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50px;
    height: 26px;
    padding: 5px;
    position: relative;       
  }

  .label .ball{
    background-color: var(--body-bg-faixa-color);
    border-radius: 50%;
    position: absolute;
    top:2px;
    left:2px;
    height: 22px;
    width: 22px;
    transform: translateX(0px);
    transition: transform 0.2s linear;
  }

  input[type=checkbox] .js-theme:checked + .label .ball{
    transform: translateX(24px);
 }

_______________________________________________________________

 JavaScript:

 document.body.setAttribute('data-theme', 't-light')

const button = document.querySelector('.js-theme')

    const themes = {
        't-dark' : 't-light',
        't-light' : 't-dark', 
    }
    
    if(button){
        button.addEventListener('click', event => {
            event.preventDefault()
            const currentThemes = document.body.dataset.theme
            document.body.setAttribute('data-theme', themes[currentThemes] || 't-light')
        })
    }

