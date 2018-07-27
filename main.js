let celebrities = [
    {
        name: `Baklava`,
        title: `Baklava, Cut in a lozenge shape`,
        readMoreURL: `https://en.wikipedia.org/wiki/Baklava`,
        imgURL: `Baklava.jpeg`,
        quote: `Baklava is a rich, sweet dessert pastry made of layers of filo filled with chopped nuts and sweetened and held together with syrup or honey. It is characteristic of the cuisines of the Levant, the Caucasus, Balkans, Maghreb, and of Central and West Asia.`
    }, 
    {
        name: `Cheese Cake`,
        title: `Baked New York cheesecake`,
        readMoreURL: `https://en.wikipedia.org/wiki/Cheesecake`,
        imgURL: `Plain_cheesecake.jpg`,
        quote: `Cheesecake is a sweet dessert consisting of one or more layers. The main, and thickest layer, consists of a mixture of soft, fresh cheese, eggs, vanilla and sugar; if there is a bottom layer it often consists of a crust or base made from crushed cookies, graham crackers, pastry, or sponge cake.`
    },
    {
        name: `Mousse`,
        title: `Chocolate mousse garnished with ground cinnamon`,
        readMoreURL: `https://en.wikipedia.org/wiki/Mousse`,
        imgURL: `Chocolate_mousse.jpg`,
        quote: `A mousse is a soft prepared food that incorporates air bubbles to give it a light and airy texture. It can range from light and fluffy to creamy and thick, depending on preparation techniques. A mousse may be sweet or savoury.`
    } ,
    {
        name: `Coconut Bar`,
        title: `Coconut pudding`,
        readMoreURL: `https://en.wikipedia.org/wiki/Coconut_bar`,
        imgURL: `Coconutbar.jpg`,
        quote: `Coconut bar is a refrigerated dim sum dessert found in Hong Kong, Taiwan, Southern China and in overseas Chinatowns. It is sweet and has a soft, gelatin-like texture but is white in color rather than translucent like gelatin. It is sometimes referred to as coconut pudding despite not being a pudding..`
    }, 
    {
        name: `Baked Alaska`,
        title: `A baked Alaska`,
        readMoreURL: `https://en.wikipedia.org/wiki/Baked_Alaska`,
        imgURL: `Baked-Alaska.jpg`,
        quote: `Baked Alaska is a dessert food consisting of ice cream and cake topped with browned meringue.`
    },
    {
        name: `Kkul-tarae`,
        title: `Korean court cake`,
        readMoreURL: `https://en.wikipedia.org/wiki/Kkul-tarae`,
        imgURL: `Kkultarae.jpg`,
        quote: `Kkul-tarae ("honey skein"), also known as Korean court cake, is a Korean dessert.A hard dough of honey-maltose mixture is kneaded, twisted, and stretched into 16,384 skeins of silky threads, in which assorted candied nuts, chocolate, or other fillings are wrapped.The mildly sweet, bite-sized treats were eaten in the royal court in the past. Nowadays, it has been marketed to symbolize wishes of health, longevity, and fortune to the consumer or recipient.`
    }, 
    {
        name: `Gulab jamun`,
        title: `Gulab jamun topped with almond slivers`,
        readMoreURL: `https://en.wikipedia.org/wiki/Gulab_jamun`,
        imgURL: `Gulaab_Jamun.jpg`,
        quote: ` It is made mainly from milk solids, traditionally from Khoya, which is milk reduced to the consistency of a soft dough. Modern recipes call for dried/powdered milk instead of Khoya. It is often garnished with dried nuts such as almonds to enhance flavour.`
    }, 
    {
        name: `Lemon tart`,
        title: `A tart is a baked dish consisting of a filling over a pastry base with an open top not covered with pastry.`,
        readMoreURL: `https://en.wikipedia.org/wiki/Lemon_tart`,
        imgURL: `Lemon_tart.jpg`,
        quote: ` lemon tart is a dessert dish, a variety of tart. It has a pastry shell with a lemon flavored filling.
                In the UK, lemon tart (also called tarte au citron) consists of a pastry case (often made in a fluted tart tin) containing a baked lemon custard (usually composed of eggs, sugar, lemon juice and cream). Usually recipes include blind-baking before adding the custard. Sometimes the tart is dusted with icing sugar prior to serving.`
    }, 
    {
        name: `Pastry`,
        title: `This article is about the food. For the distributed hash table system, see Pastry`,
        readMoreURL: `https://en.wikipedia.org/wiki/wiki/Pastry`,
        imgURL: `pastry.jpg`,
        quote: `Pastry is a dough of flour, water and shortening (solid fats, including butter) that may be savoury or sweetened. Sweetened pastries are often described as bakers' confectionery. The word "pastries" suggests many kinds of baked products made from ingredients such as flour, sugar, milk, butter, shortening, baking powder, and eggs. Small tarts and other sweet baked products are called pastries.`
    }, 
    {
        name: `Cupcake`,
        title: `Chocolate cupcakes`,
        readMoreURL: `https://en.wikipedia.org/wiki/Cupcake`,
        imgURL: `Cakeincupcakes.jpg`,
        quote: `A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake) is a small cake designed to serve one person, which may be baked in a small thin paper or aluminum cup. As with larger cakes, icing and other cake decorations such as fruit and candy may be applied.`
    }, 
    {
        name: `Layer cake`,
        title: `A three-layer cake with a candied lemon slice on top`,
        readMoreURL: `https://en.wikipedia.org/wiki/Layer_cake`,
        imgURL: `cake_chocolate.jpg`,
        quote: `An older form of layer cake is common in southern and eastern Europe. In Ukraine and Russia, people still make these cakes in the old traditional way. The cake batter is baked in a frying pan in thin layers, about a centimeter thick in the finished stack.`
    }, 
    {
        name: `Fruit Cake`,
        title: `A traditional American fruitcake.`,
        readMoreURL: `https://en.wikipedia.org/wiki/Fruitcake`,
        imgURL: `Fruitcake.jpg`,
        quote: `Fruitcake (or fruit cake or fruit bread) is a cake made with candied or dried fruit, nuts, and spices, and optionally soaked in spirits. In the United Kingdom, certain rich versions may be iced and decorated.`
    }
]

function initialize() {
    let bodyEl = document.querySelector("#celebrities-list");
    for(let i = 0 ; i < celebrities.length; i++) {
        // bodyEl.innerHTML += "<div class='celebrity-img-div' style='background-image: url(Images/" + celebrities[i].img + ");'><p>" +celebrities[i].name + "</p></div>";
         bodyEl.innerHTML += `<div class="celebrity-img-div" style="background-image: url(images/${celebrities[i].imgURL})" 
                                onclick="changeCele(${i})">
                           <p class="cele-img-text" onlick="mouse:hover">${celebrities[i].name} </p>
                              </div>
                             `
    }
    changeCele(0);
}

function changeCele(celeIndex){
    document.querySelector("#cele-name").innerHTML = celebrities[celeIndex].name;
    document.querySelector("#cele-title").innerHTML = celebrities[celeIndex].title;
    document.querySelector("#celebrity-img").style["background-image"]=`url(images/${celebrities[celeIndex].imgURL})`;
    document.querySelector("#cele-para").innerHTML = celebrities[celeIndex].quote;
    document.querySelector("#read-url a").href=  celebrities[celeIndex].readMoreURL; 
}