/*Компания продает цветы с доставкой на дом. Компания работает с понедельника по субботу 
круглосуточно. Если клиент делает заказ с 8.00 до 16.00 в дни работы компании, то он может 
получить заказ после 16.00 в этот же день. Если же он делает заказ до 8.00 в дни работы компании, 
то заказ он сможет получить с 8.00 до 16.00 в этот же день. Если заказ сделан после 16.00, 
то доставка заказ можно будет получить на следующий рабочий день компании с 8.00 до 16.00. 
Заказы можно делать в любое время и любой день. Дан день недели и время заказа (часы). 
В какой ближайший интервал можно будет получить заказ (например, завтра с 8.00 до 16.00).*/
var day = "суббота", time = 20;
if (time > 8 && time <= 16 && day != "воскресенье") {
    console.log("сегодня после 16.00")
} else if (time >= 00 && time <= 8 && day != "воскресенье") {
    console.log("сегодня c 8.00 до 16.00")
} else if (time > 16 && time <= 23 && day != "воскресенье" && day != "суббота") {
    console.log("завтра c 8.00 до 16.00") 
} else  {
    console.log("в понедельник c 8.00 до 16.00")
}
