// let age = prompt("введите ваш возраст: ");

// if(age>= 18){
//     alert("проходите");
// } else{
//     alert("возвращайтесь с родителями");
// }

// пользователь щелкает по крестику нашей панели,
// потом панель пропадает
let ck_warning = document.querySelector('.ck_warning');
let cross = document.querySelectorAll('.ck_warning__cross');
let promo_form = document.querySelector('.form_wrapper');
let action__btn = document.querySelector('.action__btn');
let def_animation = 'fadeOutUp';
let card__line = document.querySelectorAll('.card__line');



card__line[0].onclick = () => {  
    
    card__line[0].classList.add('w_line');
}
card__line[1].onclick = () => {  
    card__line[1].classList.add('w_line');
}
card__line[2].onclick = () => {  
    card__line[2].classList.add('w_line');
}
card__line[3].onclick = () => {  
    card__line[3].classList.add('w_line');
}
card__line[4].onclick = () => {  
    card__line[4].classList.add('w_line');
}
card__line[5].onclick = () => {  
    card__line[5].classList.add('w_line');
}
cross[1].onclick = () => {
    ck_warning.style.display = "none";
    // ck_warning.remove();
}

action__btn.onclick = () => {
    if(promo_form.classList.contains(def_animation)){
        promo_form.classList.remove(def_animation);
    }
    promo_form.style.display = "flex"; 
    // alert("по мне кликнили");
}

cross[0].onclick = () => {
    promo_form.classList.add(def_animation);
    setTimeout(() => {
        promo_form.style.display = "none";
    }, 400);
    
    // ck_warning.remove();
}
// у нас есть форма, которая изначально не видна
//при клике на кнопку присоединится она появится, при нажатии на крестик пропадет
//через 5 секунд на сайте она автоматически появляется
