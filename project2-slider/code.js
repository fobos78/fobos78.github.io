let slider = $(".slider");
let header = $(".header");
let promo = $(".promo");
let sliderLenta = slider.find('.slider-lenta');
let sliderItems = slider.find(".slider-lenta-item.real");
sliderLenta.css('width', (sliderItems.length + 2) * 100 + "%");
let sliderBullets = slider.find(".slider-bullets div");
let sliderArrowRight = slider.find(".slider-arrow-right");




// MVC
//Model
let showIndex = 0;




changeBullets(showIndex);

slider.find('.slider-arrow-left i').click(function () {
    if (sliderLenta.hasClass("animated")) {
        return;
    }
    sliderLenta.addClass("animated");
    if (showIndex <= 0) {
        showIndex--;

        sliderLenta.animate({
            left: -100 * (showIndex + 1) + "%" // тут был fadeOut
        }, 600, function () {
            showIndex = sliderItems.length - 1;
            sliderLenta.css('left', -100 * (showIndex + 1) + "%");
            sliderLenta.removeClass("animated");
            changeBullets(showIndex);
        });

    } else {
        showIndex--;
        sliderLenta.animate({
            left: -100 * (showIndex + 1) + "%" // тут был fadeOut
        }, 600, function () {
            sliderLenta.removeClass("animated");
            changeBullets(showIndex);
        });
    }

})

slider.find('.slider-arrow-right i').click(function () {
    sliderLenta.addClass("animated");

    if (showIndex >= sliderItems.length - 1) {
        showIndex++;

        sliderLenta.animate({
            left: -100 * (showIndex + 1) + "%" // тут был fadeOut
        }, 600, function () {
            showIndex = 0;
            changeBullets(showIndex);
            sliderLenta.css('left', -100 * (showIndex + 1) + "%");
            sliderLenta.removeClass("animated");
        });


        if (sliderLenta.hasClass("animated")) {
            return;
        }

    } else {
        showIndex++;

        sliderLenta.animate({
            left: -100 * (showIndex + 1) + "%" // тут был fadeOut
        }, 600, function () {
            changeBullets(showIndex);
            sliderLenta.removeClass("animated");
        });
        if (sliderLenta.hasClass("animated")) {
            return;
        }

    }
    changeBullets(showIndex);
})




function changeBullets(index) {
    for (let i = 0; i < sliderBullets.length; i++) {
        sliderBullets[i].style.backgroundColor = "rgba(255, 255, 255, 0.1)";

    }
    sliderBullets[index].style.backgroundColor = "white";
}


//попытка выполения кода
// eval("asdas");
for (let i = 0; i < sliderBullets.length; i++) {
    sliderBullets[i].onclick = function () {
        showIndex = this.id;
        try {
            showIndex++;
        } catch{
            alert("error");
            console.warn("97 строка опасность");
            console.error("здесь ошибаться с именем переменной");
        }
        sliderLenta.animate({
            left: -100 * (showIndex) + "%" // тут был fadeOut
        }, 600, function () {
            changeBullets(showIndex);
            sliderLenta.removeClass("animated");
        });
        if (sliderLenta.hasClass("animated")) {
            return;
        }
        showIndex--;
    }
}

// прокручиваем слайдер если курсор у соседей

$(".header").on('mouseenter', () => {
    $("#right").click();
    $(".header").off('mouseenter', () => {
        $("#right").click();
    });
});

$(".promo").on('mouseenter', () => {
    $("#right").click();
    $(".promo").off('mouseenter', () => {
        $("#right").click();
    });
});





