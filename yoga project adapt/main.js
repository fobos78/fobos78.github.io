
let def_animation = 'fadeOutUp';
let faq_quest = document.querySelectorAll(".faq__panel__quest");
let faq_answer = document.querySelectorAll(".faq__panel__answer");
let fa = document.querySelectorAll(".fa");



var flag = [1,1,1,1,1];

for (let i = 0; i < faq_quest.length; i++) {
    console.log(flag[i]);
    faq_quest[i].onclick = () => {
        
        faq_answer[i].classList.add("animated");
        fa[i].classList.add('animated');
        if(flag[i]){
            
            fa[i].classList.remove('fa-caret-up'); // i+1 потому что одно fa уже было
            fa[i].classList.add('fa-caret-down');
            fa[i].classList.toggle('rotateIn'); 
            setTimeout(() => {
            fa[i].classList.toggle('rotateIn');
        }, 600);
            faq_answer[i].classList.remove("bounceOutDown");
            faq_answer[i].classList.add("bounceInUp");
            faq_answer[i].classList.add("faq_helper");
            flag[i] = 0;
        } 
        else 
         {
            fa[i].classList.remove('fa-caret-down');
            fa[i].classList.add('fa-caret-up');
            fa[i].classList.toggle('rotateIn'); 
            setTimeout(() => {
                fa[i].classList.toggle('rotateIn');
            }, 600);
            faq_answer[i].classList.remove("bounceInUp");
            faq_answer[i].classList.add("bounceOutDown");
            flag[i] = 1;
            setTimeout(() => {
                faq_answer[i].classList.remove("faq_helper");
            }, 600);
        }

    }
}





