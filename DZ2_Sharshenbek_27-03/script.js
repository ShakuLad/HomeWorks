var starbucks = {
    coffee:{
        Капучино: 'эспрессо со вспененным молоком. Название происходит от ит. слова “капуцин” – отсылка к характерному красно-коричневому цвету роб у монашеского ордена капуцинов. В отличие от латте, подается, как и эспрессо, в предварительно прогретой кофейной чашке на 150–180 мл. Если сравнивать латте и капучино – молока больше в латте, о нём дальше.',
        латте: 'международный напиток из эспрессо со вспененным молоком. В 240 мл стакан добавляют шот эспрессо, который заливают молоком с молочной пенкой. Толщина пенки 12мм. В отличие от капучино, в латте кроме пенки есть еще и слой молока. Будьте внимательн, когда заказываете напиток в Европе. Сказав просто “Латте” – в Италии вам подадут молоко, во Франции – кофе с молоком.',
        Меланж: 'что-то среднее между латте и капучино. Имеет равное соотношение молока и кофе. Сверху добавляют молочную пенку. Подается в большой кофейной чаше, по типу капучино. В самой Вене называют просто Меланж.',
        Мокка: 'разновидности кофе латте с добавлением шоколада. Не путать с сортом кофе Мокка. Молоко взбивают вместе с какао и доливают в чашку с эспрессо. Для украшения могут использоваться шоколадный сироп, корицу или взбитые сливки.'
    },
    tea:{
        Зеленый: 'богат витаминами и полезными веществами, с высоким содержанием кофеина. Имеют неяркий настой от желтоватого до зеленого цвета, с ярким ароматом и насыщенным вкусом. Очень популярны в России различные виды черных чаев (в Китае черный чай называют красным). Это наиболее ферментированный чай, который проходит максимальное число операций, прежде чем поступить в продажу. Белые чаи распространены почти исключительно в Китае, они производятся из нежных полураспустившихся листочков.',
        Белый: 'можно отнести к самым редким и дорогим чаям, к тому же он весьма чувствительный к транспортировке и хранению продукт. Процесс производства включает только завяливание и сушку. В результате заваривания различных сортов белых чаев получается напиток с цветочным ароматом и удивительно приятным вкусом. По целебности белому чаю нет равных среди других чаев.',
        Пуэр: 'прессованный чай, изготовленный по специальной технологии из зеленого чая. Обычно чаи пуэр поставляются в виде различных прессованных форм – плиток, кирпичей, лепешек и т.д.',
        Травяные: 'это не только приятные, но и полезные для здоровья напитки, каждый из которых может использоваться и для питья, и для лечения различных заболеваний.'
    }
}

var name = prompt('Введите название кофе или чая',)

if (name in starbucks.coffee || name in starbucks.tea){
    console.log('ваш заказ принят');
} else {
    console.log('error');
} 