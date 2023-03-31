//2. Дано поле ввода, кнопка и div. Если в div нет списка, то добавить маркированный список с одним элементом с текстом введеным в поле. При последующем нажатии добавлять в конец списка элемент списка с текстом введеным в поле.

//4. Во второй задаче добавить возможность при клике на элемент списка удалять его из списка. Если удаляется последний элемент списка, то список также удаляется.

/*Делегирование событий
Всплытие и перехват событий позволяет реализовать один из самых важных приёмов разработки – делегирование.

Идея в том, что если у нас есть много элементов, события на которых нужно обрабатывать похожим образом, то вместо того, чтобы назначать обработчик каждому, мы ставим один обработчик на их общего предка.

Алгоритм:

1.Вешаем обработчик на контейнер.
2.В обработчике проверяем исходный элемент event.target.
3.Если событие произошло внутри нужного нам элемента, то обрабатываем его.*/


let button = document.querySelector(".btn_click");
if (button) {
    button.addEventListener("click", function () {

        let input1 = document.querySelector("#number");
        let input1Value = input1.value;

        let div = document.querySelector("div");

        if (div.children.length == 0) {
            let ul = document.createElement("ul");

            let li = document.createElement("li");
            li.innerText = input1Value;
            ul.insertAdjacentElement("beforeend", li);

            div.insertAdjacentElement("afterbegin", ul);
        }

        else {
            ul = document.querySelector("ul");
            li = document.createElement("li");
            li.innerText = input1Value;
            ul.insertAdjacentElement("beforeend", li);
        }

        //4. Во второй задаче добавить возможность при клике на элемент списка удалять его из списка. Если удаляется последний элемент списка, то список также удаляется.

        /*Алгоритм:
            1.Вешаем обработчик на контейнер.
            2.В обработчике проверяем исходный элемент event.target.
            3.Если событие произошло внутри нужного нам элемента, то обрабатываем его.*/

        ul = document.querySelector("ul");
        let liS = ul.children;

        ul.addEventListener("click", removeLi);
        function removeLi(e) {
            for (let i = 0; i < liS.length; i++) {
                if (e.target == liS[i]) {
                    e.target.remove();
                    if (liS.length == 0) {
                        ul.remove();
                    }
                }
            }
        }
        

    });
}